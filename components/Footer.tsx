import LiquidGlassPill from "@/components/LiquidGlassPill";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-12 text-center sm:px-12 sm:pb-24 lg:px-24">
      <LiquidGlassPill bottom className="footer-liquid-pill">
        <p className="px-4 py-1 text-xs font-medium tracking-wide text-ink sm:text-sm">© {year} Abdulhadi Tahir.</p>
      </LiquidGlassPill>
    </footer>
  );
}
