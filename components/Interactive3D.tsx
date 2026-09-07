"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

export default function Interactive3D() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const sync = () => setIsFinePointer(media.matches);
    sync();
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    if (!isFinePointer || !frameRef.current) return;
    const el = frameRef.current;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
      const py = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

      setPointer({ x: px * 100, y: py * 100 });
      setTilt({
        x: (0.5 - py) * 18,
        y: (px - 0.5) * 22,
      });
    };

    const reset = () => {
      setTilt({ x: 0, y: 0 });
      setPointer({ x: 50, y: 50 });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
    };
  }, [isFinePointer]);

  return (
    <div
      ref={frameRef}
      className="interactive-3d-wrap"
      style={
        {
          ["--tilt-x" as string]: `${tilt.x}deg`,
          ["--tilt-y" as string]: `${tilt.y}deg`,
          ["--pointer-x" as string]: `${pointer.x}%`,
          ["--pointer-y" as string]: `${pointer.y}%`,
        } as CSSProperties
      }
      aria-label="Interactive 3D computing visual"
    >
      <div className="interactive-3d-scene">
        <div className="interactive-3d-grid" />
        <div className="interactive-3d-glow" />

        <div className="interactive-3d-object">
          <div className="interactive-3d-ring interactive-3d-ring-a" />
          <div className="interactive-3d-ring interactive-3d-ring-b" />
          <div className="interactive-3d-cube">
            <span className="interactive-3d-face interactive-3d-face-front">
              <span className="interactive-3d-code">&lt;/&gt;</span>
            </span>
            <span className="interactive-3d-face interactive-3d-face-back" />
            <span className="interactive-3d-face interactive-3d-face-right" />
            <span className="interactive-3d-face interactive-3d-face-left" />
            <span className="interactive-3d-face interactive-3d-face-top" />
            <span className="interactive-3d-face interactive-3d-face-bottom" />
          </div>

          <span className="interactive-3d-node interactive-3d-node-a" />
          <span className="interactive-3d-node interactive-3d-node-b" />
          <span className="interactive-3d-node interactive-3d-node-c" />
        </div>

        <div className="interactive-3d-crosshair" />
        <div className="interactive-3d-caption">
          <span>INTERACT / COMPUTE</span>
          <span>01 — 3D</span>
        </div>
      </div>
    </div>
  );
}
