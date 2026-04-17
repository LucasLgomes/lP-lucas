"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import { MagneticButton } from "./magnetic-button";
import { CountUp } from "./count-up";

const roles = [
  "Desenvolvedor Full Stack Pleno",
  "Especialista em Integrações",
  "Criador do IntegraTudo",
  "Arquiteto de Automações com IA",
  "Founder do TudonoCardapio",
];

function useTypewriter(words: string[], speed = 70, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && sub === word) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => {
          setSub((s) =>
            deleting ? word.substring(0, s.length - 1) : word.substring(0, s.length + 1)
          );
        },
        deleting ? 35 : speed
      );
    }
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, speed, pause]);

  return sub;
}

const desktopBadges = [
  { label: "TypeScript", color: "from-blue-500 to-sky-400", x: "-6%", y: "-50%", delay: 0 },
  { label: "VTEX", color: "from-pink-500 to-rose-500", x: "-52%", y: "-36%", delay: 0.1 },
  { label: "iFood", color: "from-red-500 to-orange-500", x: "44%", y: "-40%", delay: 0.2 },
  { label: "PHP", color: "from-indigo-500 to-violet-500", x: "-58%", y: "-6%", delay: 0.3 },
  { label: "Node.js", color: "from-lime-500 to-green-500", x: "50%", y: "-6%", delay: 0.4 },
  { label: "Java", color: "from-orange-500 to-red-500", x: "48%", y: "22%", delay: 0.5 },
  { label: "Angular", color: "from-red-600 to-red-500", x: "-50%", y: "22%", delay: 0.6 },
  { label: "Spring Boot", color: "from-green-600 to-emerald-500", x: "30%", y: "42%", delay: 0.7 },
  { label: "Ionic", color: "from-blue-600 to-indigo-500", x: "-32%", y: "42%", delay: 0.8 },
  { label: "n8n", color: "from-fuchsia-500 to-pink-500", x: "0%", y: "50%", delay: 0.9 },
];

// Versão compacta pro mobile — menos badges, coordenadas contidas
const mobileBadges = [
  { label: "VTEX", color: "from-pink-500 to-rose-500", x: "-32%", y: "-38%", delay: 0 },
  { label: "iFood", color: "from-red-500 to-orange-500", x: "32%", y: "-38%", delay: 0.1 },
  { label: "TypeScript", color: "from-blue-500 to-sky-400", x: "0%", y: "-50%", delay: 0.2 },
  { label: "Java", color: "from-orange-500 to-red-500", x: "-34%", y: "38%", delay: 0.3 },
  { label: "Angular", color: "from-red-600 to-red-500", x: "34%", y: "38%", delay: 0.4 },
  { label: "n8n", color: "from-fuchsia-500 to-pink-500", x: "0%", y: "50%", delay: 0.5 },
];

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden pb-8 pt-28 sm:pb-12">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-[1.15fr_1fr] md:gap-8">
        {/* Texto */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Disponível para novos projetos
            <span className="ml-1 rounded-full bg-brand-violet/20 px-2 py-0.5 text-[10px] font-medium text-brand-violetLight">
              VTEX Day 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="block text-white">Olá, sou</span>
            <span className="block text-shine">Lucas Vinicius</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 flex h-10 items-center"
          >
            <span className="font-mono text-base text-brand-violetLight sm:text-lg">
              {"> "}
              <span className="text-white/90">{typed}</span>
              <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-brand-violetLight align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Construo plataformas SaaS, integrações com marketplaces e automações
            com IA. Do cardápio digital com clientes reais ao ERP integrado com
            <span className="text-white"> VTEX, iFood e Mercado Livre</span> —
            em um ecossistema de <span className="text-white">260+ lojas</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#projetos" icon={<Sparkles className="h-4 w-4" />}>
              Ver Projetos
            </MagneticButton>
            <MagneticButton href="#contato" variant="ghost">
              Vamos conversar
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-5 text-xs text-white/50"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              São José dos Campos · SP
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5" />
              Farma Conde · Time de Inovação
            </span>
          </motion.div>
        </div>

        {/* Foto */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow atrás */}
            <div className="absolute inset-0 -z-10 mx-auto h-[280px] w-[280px] rounded-full bg-gradient-to-br from-brand-blue via-brand-violet to-brand-pink opacity-50 blur-3xl sm:h-[380px] sm:w-[380px]" />

            {/* Anéis decorativos estáticos */}
            <div className="absolute inset-0 -z-10 mx-auto h-[340px] w-[340px] rounded-full border border-white/10 sm:h-[460px] sm:w-[460px] [mask-image:linear-gradient(transparent,black,transparent)]" />
            <div className="absolute inset-0 -z-10 mx-auto h-[400px] w-[400px] rounded-full border border-white/5 sm:h-[540px] sm:w-[540px] [mask-image:radial-gradient(black,transparent_70%)]" />

            {/* Foto flutuando */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src="/lucas.png"
                alt="Lucas Vinicius"
                width={440}
                height={520}
                priority
                className="relative z-10 mx-auto h-auto w-[280px] select-none drop-shadow-[0_25px_40px_rgba(139,92,246,0.4)] sm:w-[380px] md:w-[440px]"
              />
            </motion.div>

            {/* Badges flutuantes — versão mobile (compacta) */}
            {mobileBadges.map((b, i) => (
              <motion.div
                key={`m-${b.label}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1 + b.delay,
                  duration: 0.5,
                  type: "spring",
                }}
                style={{
                  top: `calc(50% + ${b.y})`,
                  left: `calc(50% + ${b.x})`,
                  transform: "translate(-50%, -50%)",
                  animation: `float ${5 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                  willChange: "transform",
                }}
                className="absolute z-20 md:hidden"
              >
                <div
                  className={`rounded-full bg-gradient-to-r ${b.color} p-[1px] shadow-lg`}
                >
                  <div className="rounded-full bg-base-900/90 px-2.5 py-0.5 backdrop-blur-md">
                    <span className="font-mono text-[10px] font-medium text-white">
                      {b.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Badges flutuantes — versão desktop (completa) */}
            {desktopBadges.map((b, i) => (
              <motion.div
                key={`d-${b.label}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1 + b.delay,
                  duration: 0.5,
                  type: "spring",
                }}
                style={{
                  top: `calc(50% + ${b.y})`,
                  left: `calc(50% + ${b.x})`,
                  transform: "translate(-50%, -50%)",
                  animation: `float ${5 + (i % 3)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                  willChange: "transform",
                }}
                className="absolute z-20 hidden md:block"
              >
                <div
                  className={`rounded-full bg-gradient-to-r ${b.color} p-[1px] shadow-lg`}
                >
                  <div className="rounded-full bg-base-900/90 px-3 py-1 backdrop-blur-md">
                    <span className="font-mono text-[11px] font-medium text-white">
                      {b.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}

export function HeroStats() {
  return (
    <section className="relative pb-10 pt-6 sm:pb-16 sm:pt-8">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4 rounded-2xl glass px-6 py-5 sm:grid-cols-4 sm:gap-6"
        >
          {[
            { n: 260, s: "+", l: "Lojas integradas no iFood" },
            { n: 5, s: "+", l: "Marketplaces integrados" },
            { n: 2, s: "", l: "SaaS em produção" },
            { n: 10, s: "+", l: "Automações com IA" },
          ].map((stat) => (
            <div key={stat.l} className="text-center">
              <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                <CountUp to={stat.n} suffix={stat.s} />
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-white/50 sm:text-[11px]">
                {stat.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
