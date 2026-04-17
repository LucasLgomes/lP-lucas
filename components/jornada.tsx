"use client";

import { motion } from "framer-motion";
import { Gamepad2, Bike, BookOpen, Rocket, Code2 } from "lucide-react";

const etapas = [
  {
    idade: "13 anos",
    titulo: "A semente no YouTube",
    icon: Gamepad2,
    cor: "from-sky-500 to-cyan-400",
    texto:
      "Criança curiosa, passava horas assistindo tutoriais de Unity e sonhando em fazer meus próprios jogos. Ali nasceu a paixão por tecnologia que me acompanha até hoje.",
  },
  {
    idade: "Anos depois",
    titulo: "Motoboy pelas ruas",
    icon: Bike,
    cor: "from-orange-500 to-amber-400",
    texto:
      "Trabalhei como motoboy, pegando entregas em São José dos Campos. A rotina era pesada, mas a cabeça nunca deixou de pensar em código e em um futuro diferente.",
  },
  {
    idade: "Virada de chave",
    titulo: "Vendi a moto pelos estudos",
    icon: BookOpen,
    cor: "from-rose-500 to-pink-500",
    texto:
      "Escolhi apostar em mim. Vendi a moto, minha ferramenta de trabalho, e reinvesti tudo em cursos, cursos livres e na faculdade de Análise e Desenvolvimento de Sistemas.",
  },
  {
    idade: "2024",
    titulo: "Primeiro passo na tech",
    icon: Code2,
    cor: "from-indigo-500 to-violet-500",
    texto:
      "Entrei na Farma Conde como Assistente de ERP. Aprendi o negócio por dentro, observando dores reais que logo viraram oportunidades de automação.",
  },
  {
    idade: "2025 — hoje",
    titulo: "Full Stack no time de Inovação",
    icon: Rocket,
    cor: "from-brand-violet to-brand-pink",
    texto:
      "Promovido a Desenvolvedor Full Stack Pleno. Hoje crio integrações com VTEX, iFood e Mercado Livre, e toco os SaaS TudonoCardapio e IntegraTudo em paralelo.",
  },
];

export function Jornada() {
  return (
    <section id="jornada" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand-violetLight">
            Minha jornada
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Da moto ao <span className="text-gradient">código</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Uma história de superação que começou aos 13 anos assistindo vídeos
            de Unity e se transformou em uma carreira na tecnologia.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent sm:left-1/2" />

          <div className="space-y-8">
            {etapas.map((e, i) => {
              const Icon = e.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={e.titulo}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex items-start gap-6 sm:gap-10 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Ícone no meio da linha */}
                  <div className="relative z-10 flex-shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                    <div
                      className={`relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${e.cor} shadow-lg`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                      <span
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${e.cor} opacity-50 blur-md`}
                      />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 sm:w-[calc(50%-2.5rem)]">
                    <div className="glass rounded-2xl p-6 transition-all hover:border-white/15 hover:bg-white/[0.07]">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-brand-violetLight">
                        {e.idade}
                      </span>
                      <h3 className="mt-1.5 font-display text-xl font-semibold text-white">
                        {e.titulo}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">
                        {e.texto}
                      </p>
                    </div>
                  </div>

                  {/* Espaçador para alinhar em desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Frase de impacto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="mx-auto max-w-2xl font-display text-2xl italic text-white/80 sm:text-3xl">
            “Vendi a moto, mas encontrei o caminho.”
          </p>
          <p className="mt-3 text-sm text-white/50">— Lucas Vinicius</p>
        </motion.div>
      </div>
    </section>
  );
}
