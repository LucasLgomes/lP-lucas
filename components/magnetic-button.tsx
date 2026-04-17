"use client";

import { motion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  onClick?: () => void;
  download?: string | boolean;
};

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary",
  icon,
  onClick,
  download,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const onLeave = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium transition-colors cursor-pointer select-none overflow-hidden";

  const variants = {
    primary:
      "text-white bg-gradient-to-r from-brand-blue via-brand-violet to-brand-pink shadow-[0_0_40px_rgba(139,92,246,0.35)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)]",
    ghost:
      "text-white/90 border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10",
  } as const;

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className={cn(base, variants[variant], className)}
      onClick={onClick}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon}
      </span>
    </motion.div>
  );

  if (href) {
    const downloadAttr =
      download === true ? "" : typeof download === "string" ? download : undefined;
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        {...(downloadAttr !== undefined ? { download: downloadAttr } : {})}
      >
        {content}
      </a>
    );
  }

  return content;
}
