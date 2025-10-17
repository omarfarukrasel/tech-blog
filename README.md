# tech-blog

A lightweight Next.js + Tailwind CSS starter for a technical blog. This repository contains a small blog app (client-rendered pages and components) used as a demo or starting point for building a personal tech blog.

## Quick overview

- Next.js 14 app router structure
- Tailwind CSS for styling
- Minimal React components under `app/components`

This README shows how to get the project running locally on Windows (PowerShell) and explains the available scripts.

## Requirements

- Node.js 18 or later (recommended)
- npm (comes with Node) or an equivalent package manager

## Install dependencies

Open PowerShell in the repository and run:

```powershell
npm install
```

## Development

Start the Next.js development server (fast refresh enabled):

```powershell
npm run dev
```

Then open http://localhost:3000 in your browser.

## Production build

Build the app for production and run it locally:

```powershell
npm run build
npm start
```

## Available npm scripts

- `dev` — start Next.js in development mode
- `build` — compile the production build
- `start` — start the production server after `build`
- `lint` — run Next.js lint checks (if ESLint is configured)

These scripts reflect the project's `package.json`.

## Project structure (high level)

Root
- `app/` — Next.js app router files and pages
	- `globals.css` — Tailwind base styles
	- `layout.js` — root layout
	- `page.js` — home page
	- `components/` — small React components used by the site
		- `ArticleCard.js` — card used to list article previews
		- `ArticleView.js` — single article view component
		- `CreatePost.js` — UI for creating posts (demo/local)
		- `Header.js` — site header/navigation
- `public/` — static assets
- `next.config.js`, `tailwind.config.js`, `postcss.config.js` — framework & tooling config

Adjust this list if you add or rename files.

## Styling

This project uses Tailwind CSS. The Tailwind configuration is in `tailwind.config.js` and PostCSS is configured in `postcss.config.js`.

## Notes & next steps

- If you plan to add server-side data (posts stored in a database), add API routes or a backend and update components accordingly.
- Add ESLint/Prettier configs if you want consistent linting and formatting across the team.
- Consider adding tests for components and pages.

## Troubleshooting

- If you see a Node version error, make sure you are running Node 18+.
- If Tailwind styles don't appear, confirm `globals.css` imports the Tailwind directives and that `tailwind.config.js` includes the correct content paths.

## License

This repository has no license file. Add a LICENSE if you plan to reuse or publish this project.

---
