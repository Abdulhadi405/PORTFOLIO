# Abdulhadi — Developer Portfolio

<p align="center">
  <strong>A modern, interactive developer portfolio built with Next.js.</strong>
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

This repository contains my personal developer portfolio, built as a functional web application with **Next.js, React, TypeScript, Tailwind CSS, and custom interactive components**.

The website combines a dark glass-inspired visual system with responsive layouts, motion, interactive elements, project showcases, and a server-side contact system.

The project is also a space for experimenting with modern web interfaces, interaction design, animation, and practical full-stack web development.

## Live Demo

**[Visit abdulhadi.me](https://abdulhadi.me)**

## Features

### UI & Interaction

* Responsive Hero, About, Skills, Journey, Projects, Contact, and Footer sections
* Dark glass-inspired visual design
* Interactive skills workspace
* Responsive desktop and mobile layouts
* Animated mobile navigation
* Scroll-reveal animations
* Smooth section navigation
* Scroll-to-top interaction
* Floating social dock
* Fixed liquid-glass style interface elements
* Scroll-velocity-driven visual distortion
* Interactive 3D-inspired hero visual
* Desktop pointer-based tilt interaction
* `prefers-reduced-motion` support

### Projects

The portfolio includes dedicated project areas for:

* Interactive web experiments
* Useful digital tools
* MediaSnap
* Online Store
* Future projects and experiments

Some projects are intentionally marked as under development as the portfolio continues to evolve.

### Contact System

The contact section is connected to a server-side API rather than being a static form.

It includes:

* Client/server-side form validation
* Honeypot protection
* Rate limiting
* Server-side email delivery
* Resend API integration
* Mailto fallback when email delivery is not configured

Sensitive API credentials remain server-side and are not exposed to the browser.

## Tech Stack

| Technology       | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| **Next.js**      | Application framework and routing              |
| **React**        | Component-based UI                             |
| **TypeScript**   | Type-safe development                          |
| **Tailwind CSS** | Utility-first styling                          |
| **CSS**          | Custom animations, effects, and visual styling |
| **Resend**       | Contact-form email delivery                    |
| **Vercel**       | Production deployment                          |

## Project Structure

```text
PORTFOLIO/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── About.tsx
│   ├── BackToTop.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Journey.tsx
│   ├── LiquidBackground.tsx
│   ├── LiquidGlass.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── SocialDock.tsx
│
├── public/
│
├── .env.local.example
├── .gitignore
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### Requirements

* Node.js 18+
* npm

### Clone the repository

```bash
git clone https://github.com/Abdulhadi405/PORTFOLIO.git
cd PORTFOLIO
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
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

### Deploying your own instance

1. Fork or clone the repository.
2. Import the repository into Vercel.
3. Add the required environment variables.
4. Deploy the application.
5. Connect a custom domain if required.
6. Test the production contact form.

## Development

The project is intentionally structured into reusable components so individual sections and interactions can be developed independently.

The portfolio is continuously evolving, with future improvements planned around interface details, animations, experiments, and additional projects.

## Accessibility

The interface includes support for:

* Responsive layouts
* Keyboard-friendly interactions where applicable
* Reduced-motion preferences through `prefers-reduced-motion`
* Mobile navigation and touch interactions

## Author

### Abdulhadi Tahir

Developer and computer science enthusiast interested in programming, web development, interaction, and creative digital experiences.

**GitHub:** [@Abdulhadi405](https://github.com/Abdulhadi405)

**LinkedIn:** [Abdulhadi Tahir](https://www.linkedin.com/in/abdulhadi-tahir-856500375/)

**Instagram:** [@abdulhadi_405](https://www.instagram.com/abdulhadi_405/)

**Website:** [abdulhadi.me](https://abdulhadi.me)

## License

This repository contains a personal portfolio website.

The source code is publicly available for reference and learning. Personal content, branding, assets, and portfolio materials remain the property of the author.
