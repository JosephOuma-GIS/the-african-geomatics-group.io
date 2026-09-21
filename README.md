# African Geomatics Group website

Multi-page site with a blog, built on the MIT-licensed [AstroWind](https://github.com/arthelokyo/astrowind) template (Astro + Tailwind CSS). The colour ramp is carried over from the original AGG site: `#0056b3` to `#007bff` blue gradient, `#17a2b8` cyan, `#ffc107` amber buttons and the `#1a1a1a` footer.

## Work on it

```
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into dist/
```

Requires Node 22 or newer.

## Where things live

| What | File |
|---|---|
| Services, projects, core values | `src/data/agg.ts` |
| Pages | `src/pages/*.astro` |
| Articles (Insights) | `src/data/post/*.md` – add a Markdown file to publish a new one |
| Menu and footer | `src/navigation.ts` |
| Colours and fonts | `src/components/CustomStyles.astro` |
| Site name, URL, SEO defaults | `src/config.yaml` |
| Images | `src/assets/images/agg/` |

## Deploy

**Netlify (current host):** connect the repository; `netlify.toml` already sets `npm run build` and the `dist` folder. The contact form uses Netlify Forms, so messages appear under *Forms* in the Netlify dashboard with no extra setup.

**GitHub Pages:** set `site.site` (and `site.base` if the site is served from a sub-path) in `src/config.yaml`, then publish `dist/`. The contact form needs a form service such as Formspree there, because GitHub Pages cannot receive form posts.

The template's licence is kept in `LICENSE.md`.
