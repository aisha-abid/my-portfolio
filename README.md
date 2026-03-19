# Ayesha Naz Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- EmailJS
- React Icons

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` starts the local development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Project Notes

- Static assets are stored in the `public/` folder
- Contact form submissions are powered by EmailJS
- Environment variables are required for the contact form to work
