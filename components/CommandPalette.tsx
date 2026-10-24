"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Command, Search } from "lucide-react";

export const ITEMS = [
  { label: "Go to home", shortcut: "H", href: "#home" },
  { label: "Read about me", shortcut: "A", href: "#about" },
  { label: "Explore skills", shortcut: "S", href: "#skills" },
  { label: "View projects", shortcut: "P", href: "#projects" },
  { label: "Contact me", shortcut: "C", href: "#contact" },
  { label: "Email Abdulhadi", shortcut: "↗", href: "mailto:abdulhaditahir405@gmail.com", external: true },
  { label: "Open GitHub", shortcut: "↗", href: "https://github.com/Abdulhadi405", external: true },
];

function useNavigation() {
  return (href: string) => {
    if (href.startsWith("#")) document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    else window.open(href, "_blank", "noopener,noreferrer");
  };
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const results = ITEMS.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));
  const navigate = useNavigation();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setQuery("");
        setActiveIndex(0);
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      previousFocus.current?.focus();
      previousFocus.current = null;
    }
  }, [open]);

  const choose = (href: string) => { setOpen(false); navigate(href); };

  return (
    <>
      <button type="button" className="command-trigger" onClick={() => { setQuery(""); setOpen(true); }} aria-label="Open command palette"><Command className="h-3.5 w-3.5" /><span>Search</span><kbd>⌘ K</kbd></button>
      {open && <div className="command-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}><div className="command-dialog" role="dialog" aria-modal="true" aria-label="Command palette"><div className="command-search"><Search className="h-4 w-4 text-muted" /><input ref={inputRef} value={query} onChange={(event) => { setQuery(event.target.value); setActiveIndex(0); }} onKeyDown={(event) => { if (!results.length) return; if (event.key === "ArrowDown") { event.preventDefault(); setActiveIndex((index) => (index + 1) % results.length); } if (event.key === "ArrowUp") { event.preventDefault(); setActiveIndex((index) => (index - 1 + results.length) % results.length); } if (event.key === "Enter") { event.preventDefault(); choose(results[activeIndex].href); } }} placeholder="Where would you like to go?" aria-label="Search commands" /><kbd>ESC</kbd></div><div className="command-results">{results.length ? results.map((item, index) => <button key={item.label} type="button" onClick={() => choose(item.href)} className={`command-result ${activeIndex === index ? "command-result--active" : ""}`}><span className="flex items-center gap-3">{item.external ? <ArrowUpRight className="h-4 w-4 text-cyan" /> : <Command className={`h-4 w-4 ${item.label.includes("Contact") ? "text-cyan" : "text-muted"}`} />}{item.label}</span><kbd>{item.shortcut}</kbd></button>) : <p className="command-empty">No commands match &quot;{query}&quot;.</p>}</div><div className="command-footer"><span>Navigate with search</span><span><kbd>ESC</kbd> to close</span></div></div></div>}
    </>
  );
}

export function MobileSearch({ onOpenMenu }: { onOpenMenu: () => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = ITEMS.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
  const navigate = useNavigation();

  useEffect(() => { if (open) requestAnimationFrame(() => inputRef.current?.focus()); }, [open]);
  useEffect(() => {
    const close = (event: PointerEvent) => { if (open && event.target instanceof Element && !event.target.closest(".mobile-search")) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const menuOpened = () => setOpen(false);
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    window.addEventListener("portfolio:menu-toggle", menuOpened);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", escape); window.removeEventListener("portfolio:menu-toggle", menuOpened); };
  }, [open]);

  const choose = (href: string) => { setOpen(false); setQuery(""); navigate(href); };

  return <div className={`mobile-search ${open ? "mobile-search--open" : ""}`}>{open ? <div className="mobile-search-field"><Search className="h-3.5 w-3.5 shrink-0 text-cyan" /><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && results[0]) choose(results[0].href); }} placeholder="Search portfolio" aria-label="Search portfolio" /><button type="button" onClick={() => setOpen(false)} aria-label="Close search"><span aria-hidden="true">Esc</span></button></div> : <button type="button" className="mobile-search-trigger" onClick={() => { onOpenMenu(); setOpen(true); }} aria-label="Search portfolio"><Search className="h-4 w-4" /></button>}{open && <div className="mobile-search-results" role="listbox" aria-label="Search results">{results.length ? results.map((item, index) => <button key={item.label} type="button" role="option" aria-selected={index === 0} onClick={() => choose(item.href)}><span>{item.label}</span><ArrowUpRight className="h-3.5 w-3.5 text-cyan" /></button>) : <p>No results</p>}</div>}</div>;
}
