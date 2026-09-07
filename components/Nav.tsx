"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import LiquidGlassPill from "@/components/LiquidGlassPill";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    // Prevent the page from moving underneath the expanded mobile menu.
    if (open && window.innerWidth < 640) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex justify-center px-3 sm:px-4">
      <LiquidGlassPill
        className={`nav-liquid-pill ${open ? "nav-liquid-pill--open" : ""}`}
      >
        <nav
          aria-label="Primary navigation"
          className={`relative z-10 flex w-full items-center gap-1 transition-[padding] duration-300 ${
            scrolled ? "px-1 py-1" : "px-2 py-1.5"
          }`}
        >
          <a
            href="#home"
            className="mr-auto px-3 font-display text-sm font-semibold tracking-tight text-ink"
            onClick={() => setOpen(false)}
          >
            Abdulhadi
          </a>

          <div className="hidden items-center gap-1 sm:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                  active === link.href
                    ? "bg-white/10 text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-primary-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={(event) => {
              const button = event.currentTarget;
              const panel = button.closest(".nav-liquid-pill")?.querySelector<HTMLElement>(".mobile-menu-panel");
              const rect = button.getBoundingClientRect();
              const panelRect = panel?.getBoundingClientRect();

              if (panelRect) {
                setOrigin({
                  x: rect.left - panelRect.left + rect.width / 2,
                  y: rect.top - panelRect.top + rect.height / 2,
                });
              }

              setOpen((value) => !value);
            }}
            className={`nav-menu-button relative z-20 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink sm:hidden ${
              open ? "nav-menu-button--open" : ""
            }`}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 [transition-timing-function:cubic-bezier(.22,1,.36,1)] ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-300 [transition-timing-function:cubic-bezier(.22,1,.36,1)] ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        <div
          id="mobile-primary-menu"
          style={{ "--menu-origin-x": `${origin.x}px`, "--menu-origin-y": `${origin.y}px` } as CSSProperties}
          aria-hidden={!open}
          className={`mobile-menu-panel sm:hidden ${open ? "mobile-menu-panel--open" : ""}`}
        >
          <div className="mobile-menu-divider" />
          <div className="mobile-menu-links">
            {LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                style={{ "--menu-index": index } as CSSProperties}
                className={`mobile-menu-link ${
                  active === link.href ? "mobile-menu-link--active" : ""
                }`}
              >
                <span>{link.label}</span>
                <span aria-hidden="true" className="mobile-menu-arrow">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </LiquidGlassPill>
    </header>
  );
}
