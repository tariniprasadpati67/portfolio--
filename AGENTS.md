# Architecture & Developer Guidelines

- **Single Page Application:** The portfolio is configured as a single page at `/` located in `src/routes/index.tsx`.
- **Assets:** Static images and media assets are served directly from the `public/` directory via absolute path URLs.
- **Routing:** TanStack Router handles routing and SSR/meta tags configuration.
- **Styling:** Tailwind CSS v4 handles utilities, design tokens, and layout primitives.
