"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = -100;
    let y = -100;
    let ringX = x;
    let ringY = y;
    let frame = 0;

    const render = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(render);
    };
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      document.documentElement.classList.add("custom-cursor-ready");
    };
    const leave = () => document.documentElement.classList.remove("custom-cursor-ready");
    const overInteractive = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("a, button, input, textarea, [data-cursor='interactive']")) {
        document.documentElement.classList.add("custom-cursor-hover");
      }
    };
    const outInteractive = (event: Event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("a, button, input, textarea, [data-cursor='interactive']")) {
        document.documentElement.classList.remove("custom-cursor-hover");
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    document.addEventListener("pointerover", overInteractive);
    document.addEventListener("pointerout", outInteractive);
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerover", overInteractive);
      document.removeEventListener("pointerout", outInteractive);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("custom-cursor-ready", "custom-cursor-hover");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
