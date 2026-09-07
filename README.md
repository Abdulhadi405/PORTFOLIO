# Abdulhadi — Portfolio

A responsive Next.js portfolio with a dark glassmorphism visual system, interactive skills, project previews, a working contact API, and mobile-first navigation.

## Included

- Hero, About, Skills, Projects, Contact and Footer sections
- Interactive skills workspace with responsive desktop/mobile behavior
- MediaSnap under-development project UI with MP3/MP4 conversion preview
- Online Store project marked as under development
- Scroll-reveal animations and scroll-to-top control
- Floating social dock with hover/touch polish
- Fixed top and bottom liquid-glass pills with scroll-velocity-driven optical distortion
- Lightweight responsive interactive 3D hero visual with pointer tilt on desktop
- Mobile navigation that morphs from the compact pill into an expanded liquid-glass menu, originating from the pressed menu button
- Contact form with validation, honeypot, rate limiting, server-side Resend delivery, and a mailto fallback before email configuration
- Temporary CV PDF at `public/Abdulhadi_Tahir_CV.pdf` with a Download CV hero action
- `prefers-reduced-motion` support throughout the major animated UI

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact form / Resend

The contact form uses the free Resend API tier. Create a Resend API key and copy `.env.local.example` to `.env.local`.

```env
RESEND_API_KEY=your_key_here
CONTACT_TO_EMAIL=your_inbox@example.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

For production, verify your own domain in Resend and use a sender address on that domain. Never commit `.env.local` or expose the API key in client-side code.

## Publish on Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add the same environment variables under the Vercel project's Environment Variables.
4. Deploy.
5. Test the live contact form after deployment.

## Final pre-publish checklist

- Run `npm install`.
- Run `npm run build` locally and fix any environment-specific issue before publishing.
- Test the mobile menu on a real phone.
- Test all navigation links and social links.
- Test the contact form with a real Resend key, or verify the mailto fallback before configuring email delivery.
- Confirm the live site on both a laptop and phone before deleting the previous GitHub version.
