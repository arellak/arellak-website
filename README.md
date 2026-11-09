# Portfolio

Single-page portfolio built with Vite, React 19, TypeScript and Tailwind CSS 4. No backend: all content lives in two JSON files.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Editing content

### About you — `src/content/profile.json`

Name, role, email, intro, tech stack (`toolkit`, shown in the Stack section) and social links (shown in the Contact section and the footer).

- `cv` (optional): path to the English PDF in `public/`. Enables the "Show CV" dropdown.
- `cvDe` (optional): path to the German PDF in `public/`. Adds the "Deutsch" option; "English" uses `cv`. Both open in a new tab.

CV sources live in `cv/`: English templates use `.html`, German translations use `.de.html`. Run `node cv/build.mjs` to rebuild all PDFs. Set `CHROME_PATH` to your Chrome executable if it is not at the default Windows location.

### Projects — `src/content/projects.json`

Add an object to the array. Newest first.

```json
{
  "slug": "my-project",
  "title": "My Project",
  "year": "2026",
  "role": "Design & Development",
  "client": "Optional client name",
  "summary": "One short line.",
  "description": "Two or three sentences about what you built.",
  "stack": ["React", "TypeScript"],
  "links": [{ "label": "Live site", "href": "https://example.com" }],
  "status": "live",
  "image": "/projects/my-project.jpg"
}
```

- `status`: `"live"`, `"in-progress"` or `"archived"`
- `image` (optional): put files in `public/projects/`, 16:10 ratio (cropped from the top). Without an image, the preview shows the title instead.
- The first link becomes the "Visit" button; any further links show as secondary buttons. `links` can be `[]`.
- `client` and `image` are optional. Stack names get a logo when they're listed in `src/lib/toolIcons.ts`, otherwise a monogram.

Types for both files are in `src/types/content.ts`.
