# 👨‍💻 Gabriel Zelaya — Personal Portfolio

A fast, modern, and minimalist personal portfolio website built to showcase my projects, skills, and experience. Designed with performance and aesthetics in mind.

## 🚀 Tech Stack

This project is built using modern web technologies:

- **Framework:** [Astro](https://astro.build/) - For incredibly fast load times and optimized static output.
- **Styling:** Custom Vanilla CSS (with modern layout and design patterns) & Tailwind CSS.
- **Components & Email:** [React](https://react.dev/) & [React Email](https://react.email/) for structured, reliable email templates.
- **API & Contact Form:** Server-side API endpoints in Astro integrated with [Resend](https://resend.com/) for email delivery.
- **Security & Rate Limiting:** [Upstash Redis](https://upstash.com/) to prevent spam and abuse on the contact form.
- **Deployment:** [Vercel](https://vercel.com/) (using `@astrojs/vercel`).

## ✨ Features

- **Blazing Fast Performance:** Leveraging Astro's island architecture for zero-JS-by-default behavior.
- **Responsive Design:** Fluid layout that adapts seamlessly to desktop, tablet, and mobile devices.
- **Secure Contact Form:** Server-side validation and rate limiting using Upstash and Resend.
- **Modern UI/UX:** Clean, minimalist design with subtle animations and a premium feel.

## 🛠️ Local Development

### Prerequisites

- Node.js (v18+ recommended)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GabrielAbarca/gzelaya.git
   cd gzelaya
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add the following keys. You will need accounts on Resend and Upstash to get these.
   ```env
   # Resend Email API
   RESEND_API_KEY=your_resend_api_key

   # Upstash Redis (for Rate Limiting)
   UPSTASH_REDIS_REST_URL=your_upstash_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_token
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:4321`.

## 📦 Build and Production

To build the project for production, run:

```bash
npm run build
```

This will generate a `dist/` directory ready for deployment. Since this project uses the Vercel adapter, it is pre-configured to be deployed directly to Vercel.

To preview the production build locally:
```bash
npm run preview
```

## 📂 Project Structure

```text
/
├── public/           # Static assets (images, fonts, favicons)
├── src/
│   ├── components/   # UI components (Astro, React)
│   ├── layouts/      # Global layout components
│   ├── pages/        # Astro pages and API routes
│   └── styles/       # Global CSS styles
├── package.json      # Project dependencies and scripts
└── astro.config.mjs  # Astro configuration
```
