"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#jornada", label: "Jornada" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className="mx-auto max-w-6xl px-4">
          <nav
            className={cn(
              "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
              scrolled
                ? "glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
                : "glass"
            )}
          >
            <a href="#" className="flex items-center gap-2">
              <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-blue to-brand-violet">
                <Code2 className="h-4 w-4 text-white" />
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet opacity-40 blur-md" />
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">
                Lucas<span className="text-brand-violetLight">.</span>dev
              </span>
            </a>

            <ul className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-full px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1">
              <a
                href="https://github.com/LucasLgomes/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/lucaslima012"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Barra de progresso do scroll */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed left-0 top-0 z-[60] h-0.5 bg-gradient-to-r from-brand-blue via-brand-violet to-brand-pink"
      />
    </>
  );
}
