# WEYV — Interior Design Website (Frontend)

Premium interior design company website built with React, Vite, Tailwind CSS,
React Router, Framer Motion, Lucide React and Swiper.

This is a **frontend-only** build. Data currently lives in `src/data/*.js`
and is structured so it can be swapped for API calls later without
rewriting the UI (e.g. `services.js` → `servicesApi.js`).

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

See `src/` for components (layout, common, home, about, services, gallery,
blog, contact), `src/pages` for routed pages, `src/data` for static content,
and `src/routes/AppRoutes.jsx` for the route table.
