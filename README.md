# Abdulhadi — Developer Portfolio

<p align="center">
  <strong>A responsive, interactive developer portfolio built with Next.js.</strong>
</p>

<p align="center">
  <a href="https://abdulhadi.me">
    <img src="https://img.shields.io/badge/Live%20Demo-abdulhadi.me-7cf7d4?style=for-the-badge" alt="Live Demo">
  </a>
  <a href="https://github.com/Abdulhadi405/PORTFOLIO">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
</p>

## Overview

This repository contains my personal developer portfolio, built with **Next.js, React, TypeScript, and Tailwind CSS**. It presents my projects, skills, and development interests through a responsive interface with glass-inspired UI details and interactive components.

Recent improvements include compact mobile search inside the navigation pill, a custom cursor for supported desktop pointers, project category filters, accessible project quick views, project sharing, and a direct link to the live Family Health Clinic website. The site also includes a server-side contact API with validation and email delivery integration.

The portfolio is an ongoing personal project and a place to explore modern web interfaces, interaction design, and practical full-stack development.

## Live Demo

**[Visit abdulhadi.me](https://abdulhadi.me)**

## Features

### UI & Interaction

- Responsive Hero, About, Skills, Journey, Projects, Contact, and Footer sections
- Light editorial visual design with selective glass surfaces
- Interactive skills workspace
- Responsive desktop and mobile layouts
- Inline mobile search with compact results and keyboard support
- Desktop command palette
- Custom cursor enhancement for fine-pointer devices
- Animated mobile navigation
- Scroll-reveal animations and smooth section navigation
- Scroll-to-top interaction and floating social dock
- Interactive hero visual and pointer-based tilt effects
- Reduced-motion preference support

### Project Showcase

- Category filters for browsing projects
- Accessible project quick-view dialog with keyboard dismissal and focus restoration
- Project sharing through native Web Share where supported, with clipboard fallbacks
- Family Health Clinic card linking to the live site: [Visit Family Health Clinic](https://abdulhadi405.github.io/Family-Health-Clinic/)
- Illustrative project previews are labeled as concepts rather than presented as real screenshots
- Ordexa restaurant operations software and other projects are presented according to their current development status

### Contact System

The contact section uses a server-side API rather than a static form.

- Client/server-side form validation
- Honeypot protection
- Rate limiting
- Server-side email delivery
- Resend API integration
- Mailto fallback when email delivery is not configured

Sensitive API credentials remain server-side and are not exposed to the browser.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| **Next.js** | Application framework and routing |
| **React** | Component-based UI |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling (v4) |
| **ESLint** | Code quality checks |
| **CSS** | Custom animations, effects, and visual styling |
| **Resend** | Contact-form email delivery |
| **Vercel** | Deployment and preview hosting |

## Project Structure

```text
PORTFOLIO/
├── app/
│   ├── api/contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── CommandPalette.tsx
│   ├── Contact.tsx
│   ├── Cursor.tsx
│   ├── Hero.tsx
│   ├── Nav.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── SocialDock.tsx
├── public/
├── .env.local.example
├── eslint.config.mjs
├── next.config.js
├── package.json
└── tsconfig.json
```

## Getting Started

### Requirements

- Node.js 20.9+
- npm

### Clone the repository

```bash
git clone https://github.com/Abdulhadi405/PORTFOLIO.git
cd PORTFOLIO
```

### Install and run

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Environment Variables

The contact system uses **Resend** for email delivery.

Create a `.env.local` file using `.env.local.example`:

```env
RESEND_API_KEY=your_key_here
CONTACT_TO_EMAIL=your_inbox@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

For production deployments, use a verified domain and sender address in Resend.

**Never commit `.env.local` or expose API keys in client-side code.**

## Deployment

This project is deployed using **Vercel**.

To deploy your own instance:

1. Fork or clone the repository.
2. Import the repository into Vercel.
3. Add the required environment variables.
4. Deploy the application.
5. Connect a custom domain if required.
6. Test the production contact form.

## Accessibility

The interface aims to support responsive layouts, keyboard-friendly interactions, touch-device behavior, and reduced-motion preferences.

## Author

### Abdulhadi Tahir

Developer and computer science enthusiast interested in programming, web development, interaction, and creative digital experiences.

- **GitHub:** [@Abdulhadi405](https://github.com/Abdulhadi405)
- **LinkedIn:** [Abdulhadi Tahir](https://www.linkedin.com/in/abdulhadi-tahir-856500375/)
- **Instagram:** [@abdulhadi_405](https://www.instagram.com/abdulhadi_405/)
- **Website:** [abdulhadi.me](https://abdulhadi.me)

## License

This repository contains a personal portfolio website. The source code is publicly available for reference and learning. Personal content, branding, assets, and portfolio materials remain the property of the author.
