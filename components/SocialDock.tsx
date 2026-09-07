import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Abdulhadi405", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/abdulhadi_405/", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulhadi-tahir-856500375/", icon: Linkedin },
  { label: "Email", href: "mailto:abdulhaditahir405@gmail.com", icon: Mail },
];

export default function SocialDock() {
  return <div className="fixed bottom-5 left-0 right-0 z-40 flex justify-center px-4 sm:bottom-6"><nav aria-label="Social links" className="group flex items-center gap-1 rounded-full border border-line bg-panel/60 px-2 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.045] hover:border-cyan/20 hover:bg-panel/75 hover:shadow-[0_14px_45px_rgba(0,0,0,0.5),0_0_30px_rgba(95,232,210,0.08)] sm:gap-1.5 sm:px-2.5">{SOCIALS.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="group/link flex h-10 w-10 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:text-cyan hover:bg-cyan/5 active:translate-y-0 active:scale-100"><Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover/link:rotate-3" strokeWidth={1.75} /></a>)}</nav></div>;
}
