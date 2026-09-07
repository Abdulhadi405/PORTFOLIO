"use client";

import { useEffect, useId, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type LiquidGlassPillProps = {
  children: ReactNode;
  className?: string;
  bottom?: boolean;
};

/**
 * A fixed optical-glass pill. The important distinction from the old version:
 * the effect is applied to the BACKDROP, not to the text itself.
 *
 * Scroll velocity only changes the intensity of the SVG backdrop filter. When
 * scrolling stops, a small spring settles the material back to its neutral
 * glass state. The page content behind the pill is therefore what gets
 * refracted / chromatically separated.
 */
export default function LiquidGlassPill({
  children,
  className = "",
  bottom = false,
}: LiquidGlassPillProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const redOffsetRef = useRef<SVGFEOffsetElement>(null);
  const blueOffsetRef = useRef<SVGFEOffsetElement>(null);
  const rafRef = useRef<number | null>(null);
  const filterId = `liquid-backdrop-${useId().replace(/:/g, "")}`;

  const state = useRef({
    value: 0,
    velocity: 0,
    target: 0,
    lastY: 0,
    lastT: 0,
  });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    const s = state.current;

    s.lastY = window.scrollY;
    s.lastT = performance.now();

    const onScroll = () => {
      const now = performance.now();
      const y = window.scrollY;
      const dt = Math.max(8, now - s.lastT);
      const speed = Math.abs((y - s.lastY) / dt) * 1000;

      // Only scrolling injects energy. Pointer movement does not distort glass.
      s.target = Math.min(1, speed / (mobile ? 1900 : 2400));
      s.lastY = y;
      s.lastT = now;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      // Let the scroll signal decay between events, then spring the material
      // toward that target. This gives a soft physical lag and settle.
      s.target *= 0.88;

      const stiffness = 0.16;
      const damping = 0.78;
      s.velocity += (s.target - s.value) * stiffness;
      s.velocity *= damping;
      s.value += s.velocity;
      s.value = Math.max(0, Math.min(1, s.value));

      const amount = reduced ? 0 : s.value;

      // Keep the effect restrained. The reference feeling is an optical lens,
      // not a noisy/glitchy text animation.
      const displacement = amount * (mobile ? 7 : 10);
      const chroma = amount * (mobile ? 1.25 : 2.1);
      const blur = 11 + amount * 2.5;
      const saturation = 132 + amount * 28;
      const contrast = 104 + amount * 5;
      const brightness = 100 + amount * 2;

      root.style.setProperty("--glass-energy", amount.toFixed(3));
      root.style.setProperty("--glass-blur", `${blur.toFixed(2)}px`);
      root.style.setProperty("--glass-saturation", `${saturation.toFixed(1)}%`);
      root.style.setProperty("--glass-contrast", `${contrast.toFixed(1)}%`);
      root.style.setProperty("--glass-brightness", `${brightness.toFixed(1)}%`);

      displacementRef.current?.setAttribute("scale", displacement.toFixed(2));
      redOffsetRef.current?.setAttribute("dx", (-chroma).toFixed(2));
      blueOffsetRef.current?.setAttribute("dx", chroma.toFixed(2));

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`liquid-pill ${bottom ? "liquid-pill--bottom" : "liquid-pill--top"} ${className}`}
      style={{ "--liquid-backdrop-filter": `url("#${filterId}")` } as CSSProperties & { "--liquid-backdrop-filter": string }}
    >
      {/* This layer is transparent enough for backdrop-filter to sample the
          actual page content behind the pill. */}
      <div className="liquid-pill__backdrop" aria-hidden="true" />
      <div className="liquid-pill__sheen" aria-hidden="true" />
      <div className="liquid-pill__content">{children}</div>

      <svg className="liquid-pill__filter" aria-hidden="true" width="0" height="0">
        <defs>
          <filter
            id={filterId}
            x="-20%"
            y="-40%"
            width="140%"
            height="180%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.075"
              numOctaves="2"
              seed="23"
              result="noise"
            />

            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
              result="refracted"
            />

            <feColorMatrix
              in="refracted"
              type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="redChannel"
            />
            <feOffset ref={redOffsetRef} in="redChannel" dx="0" dy="0" result="redShift" />

            <feColorMatrix
              in="refracted"
              type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="greenChannel"
            />

            <feColorMatrix
              in="refracted"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="blueChannel"
            />
            <feOffset ref={blueOffsetRef} in="blueChannel" dx="0" dy="0" result="blueShift" />

            <feMerge>
              <feMergeNode in="redShift" />
              <feMergeNode in="greenChannel" />
              <feMergeNode in="blueShift" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
