# Tee Portfolio

A responsive personal portfolio using React, Vite, Tailwind CSS and JavaScript.

## Development

```sh
npm install
npm run dev
```

`npm run build` produces the static website in `dist/`. `npm run preview` serves that build.

## Personalize

Edit `src/data.js` to set your email, full GitHub and LinkedIn URLs, biography, real experience, and skills. Experience entries use `company`, `role`, `period`, and `responsibilities` (an array). The existing portfolio case study describes this website; no past employers, results, or project metrics are invented. Update the Projects component when adding more case studies.

Until an email is set, the contact form downloads a local text draft and sends nothing. Once configured, it opens the visitor's email app; the visitor must send it there. There is no backend or message storage.

Fonts load from Google Fonts, with system fallbacks. The interface honors reduced-motion preferences and includes mobile navigation, keyboard focus states, a skip link, and native form validation.

The reference images were not present in the task, so the supplied written structure and visual direction guide this design.
