# Gabriel Zelaya — Personal Portfolio

A responsive, clean, and modern personal portfolio site to present my work, expertise, and experience. Optimized for both functionality and visual appeal.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) — keeps things fast with minimal JavaScript shipped to the browser.
- **Styling:** Vanilla CSS with modern layout patterns, plus Tailwind CSS where it makes sense.
- **Components & Email:** [React](https://react.dev/) and [React Email](https://react.email/) for clean, reliable email templates.
- **Contact Form:** Astro server-side API routes connected to [Resend](https://resend.com/) for email delivery.
- **Security:** [Upstash Redis](https://upstash.com/) handles rate limiting to keep the contact form from being abused.
- **Deployment:** Hosted on [Vercel](https://vercel.com/) via `@astrojs/vercel`.

## Features

- **Fast by default:** Built on Astro's island architecture — only ships JavaScript when the page actually needs it.
- **Fully responsive:** Works well across desktop, tablet, and mobile without compromises.
- **Secure contact form:** Input validation and rate limiting handled server-side.
- **Clean UI:** Minimalist design with subtle animations that don't get in the way.

## Project Structure

```
/
├── public/           # Static assets (images, fonts, favicons)
├── src/
│   ├── components/   # UI components (Astro, React)
│   ├── layouts/      # Global layout components
│   ├── pages/        # Pages and API routes
│   └── styles/       # Global CSS
├── package.json
└── astro.config.mjs
```
