"use client";

import { motion } from "framer-motion";

const linha1 = [
  "VTEX", "iFood", "Mercado Livre", "TikTok Shop", "AnyMarket",
  "Mercado Pago", "PagBank", "VTEX Checkout",
  "WhatsApp", "Procfit", "Senior ERP", "n8n", "GCP",
];

const linha2 = [
  "Spring Boot", "Angular", "Node.js", "Python", "PHP",
  "PostgreSQL", "SQL Server", "Docker", "Flyway", "JWT",
];

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden mask-fade-r">
      <div
        className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"} whitespace-nowrap`}
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="glass flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-medium text-white/80 transition-all hover:border-white/25 hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Integracoes() {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand-violetLight">
            Ecossistema
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Integrações e plataformas que <span className="text-gradient">falo a língua</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          <Marquee items={linha1} />
          <Marquee items={linha2} reverse />
        </div>
      </div>
    </section>
  );
}
