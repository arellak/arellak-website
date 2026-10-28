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

- `cv` (optional): path to a PDF in `public/`, e.g. `"/cv.pdf"`. It opens in the browser's PDF viewer, and the links only show when it's set.

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
