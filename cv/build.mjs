import { execFileSync } from "node:child_process"
import { readFileSync, rmSync, statSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join } from "node:path"
import { setTimeout as sleep } from "node:timers/promises"
import { fileURLToPath, pathToFileURL } from "node:url"

const chrome = process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe"
const folder = dirname(fileURLToPath(import.meta.url))
const profile = join(tmpdir(), "cv-build-chrome")

const targets = [
  { source: "langdock.de.html", output: "CV_Resume_Langdock_DE.pdf" },
  { source: "constructor.de.html", output: "CV_Resume_Constructor_DE.pdf" },
  {
    source: "langdock.de.html",
    output: "../public/Marcel-Kremer-CV-DE.pdf",
    replace: [
      ["Design Engineer · React, Next.js, Tailwind CSS", "Softwareentwickler · React, Next.js, Tailwind CSS"],
      ["Lebenslauf Marcel Kremer, Design Engineer", "Lebenslauf Marcel Kremer, Softwareentwickler"],
    ],
  },
  { source: "langdock.html", output: "CV_Resume_Langdock.pdf" },
  { source: "constructor.html", output: "CV_Resume_Constructor.pdf" },
  {
    source: "langdock.html",
    output: "../public/Marcel-Kremer-CV.pdf",
    replace: [
      ["Design Engineer · React, Next.js, Tailwind CSS", "Software Engineer · React, Next.js, Tailwind CSS"],
      ["CV Marcel Kremer, Design Engineer", "CV Marcel Kremer, Software Engineer"],
    ],
  },
]

function prepare(target) {
  if (!target.replace) return { file: join(folder, target.source), cleanup: () => {} }

  let html = readFileSync(join(folder, target.source), "utf8")
  for (const [from, to] of target.replace) {
    if (!html.includes(from)) throw new Error(`"${from}" not found in ${target.source}`)
    html = html.replaceAll(from, to)
  }

  const file = join(folder, `.${target.source}.tmp.html`)
  writeFileSync(file, html)
  return { file, cleanup: () => rmSync(file, { force: true }) }
}

async function waitForWrite(file, since) {
  for (let waited = 0; waited < 30_000; waited += 250) {
    const stats = statSync(file, { throwIfNoEntry: false })
    if (stats && stats.mtimeMs >= since && stats.size > 0) {
      await sleep(250)
      if (statSync(file).size === stats.size) return
    }
    await sleep(250)
  }
  throw new Error(`Chrome did not write ${file}`)
}

for (const target of targets.filter((target) => !process.argv.includes("--german-only") || target.source.endsWith(".de.html"))) {
  const output = join(folder, target.output)
  const started = Date.now() - 1000
  const { file, cleanup } = prepare(target)
  try {
    execFileSync(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--user-data-dir=${profile}`,
      `--print-to-pdf=${output}`,
      pathToFileURL(file).href,
    ])
    await waitForWrite(output, started)
  } finally {
    cleanup()
  }
  console.log(`${target.source} -> ${target.output}`)
}
