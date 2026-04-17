import { ImageResponse } from "next/og";

export const alt =
  "Lucas Vinicius — Desenvolvedor Full Stack | Integrações, Automações e SaaS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#05060A",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.35) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(139,92,246,0.35) 0%, transparent 50%), radial-gradient(circle at 60% 100%, rgba(236,72,153,0.25) 0%, transparent 50%)",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        {/* Top: avatar + badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 68,
              height: 68,
              borderRadius: 18,
              background:
                "linear-gradient(135deg, #2563EB 0%, #8B5CF6 60%, #EC4899 100%)",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            L
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              fontSize: 22,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            lucasvinicius.dev
          </div>
        </div>

        {/* Meio: título gigante */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 32,
              color: "#A78BFA",
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Desenvolvedor Full Stack Pleno
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -3,
              backgroundImage:
                "linear-gradient(90deg, #FFFFFF 30%, #60A5FA 55%, #A78BFA 80%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Lucas Vinicius
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Integrações · SaaS · Automações com IA — VTEX, iFood, Mercado Pago,
            PagBank e +260 lojas em produção.
          </div>
        </div>

        {/* Rodapé: stack */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          {[
            "Java Spring Boot",
            "Angular",
            "Node.js",
            "PHP",
            "VTEX",
            "n8n",
            "Mercado Pago",
          ].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                fontSize: 22,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
