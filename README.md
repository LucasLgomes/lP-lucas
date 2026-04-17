# Lucas Vinicius — Landing Page Premium

Portfolio pessoal de Lucas Vinicius — Desenvolvedor Full Stack Pleno.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Docker · Nginx

---

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Build de produção local

```bash
npm run build
npm start
```

---

## 🚀 Deploy na Vercel (grátis, recomendado)

1. Entre em https://vercel.com e faça login com o GitHub.
2. Clique em **Add New → Project**.
3. Importe o repositório `LucasLgomes/lP-lucas`.
4. A Vercel detecta Next.js automaticamente — só clicar em **Deploy**.
5. Depois que o primeiro deploy terminar, entre em **Settings → Environment Variables** e adicione:
   - `NEXT_PUBLIC_SITE_URL` = URL que a Vercel te deu (ex.: `https://lp-lucas.vercel.app`)
6. Vá em **Deployments** e clique em **Redeploy** no último deploy (pra ele pegar a env var no QR Code).

Pronto. A cada `git push` na branch `main`, a Vercel redeploya automaticamente.

### Domínio customizado (opcional)

Settings → Domains → Add → aponta o DNS do seu domínio pra Vercel.

---

## 🐳 Deploy em VPS com Docker (alternativa)

```bash
# subir tudo (aplicação + Nginx na porta 80)
docker compose up --build -d

# só a aplicação (porta 3000)
docker compose up --build -d lp

# parar
docker compose down

# ver logs
docker compose logs -f lp
```

### TLS com Let's Encrypt

```bash
sudo apt install certbot
sudo certbot certonly --standalone -d seudominio.com
# copie os arquivos pra ./certs e ajuste nginx.conf pra usar 443
```

---

## Estrutura

```
.
├── app/
│   ├── globals.css            # Tailwind + utilitários glass + spotlight
│   ├── layout.tsx             # Metadata + fonts (Space Grotesk + DM Sans)
│   ├── page.tsx               # Composição da LP
│   ├── icon.tsx               # Favicon dinâmico com ImageResponse
│   └── opengraph-image.tsx    # Preview social (WhatsApp/LinkedIn)
├── components/
│   ├── background/aurora.tsx  # Blobs animados no fundo
│   ├── navbar.tsx             # Nav sticky com progresso de scroll
│   ├── hero.tsx               # Hero + badges flutuantes + stats count-up
│   ├── code-block.tsx         # Código-manifesto animado
│   ├── jornada.tsx            # Timeline storytelling
│   ├── experiencia.tsx        # Cards Farma Conde
│   ├── projetos.tsx           # Bento grid com spotlight follow
│   ├── skills.tsx             # Categorias + Em Progresso + Certificações
│   ├── integracoes.tsx        # Marquee duplo
│   ├── contato.tsx            # CTA VTEX Day + QR Code + CV
│   ├── qr-card.tsx            # QR que aponta pro PDF + download
│   ├── count-up.tsx           # Contador animado
│   ├── magnetic-button.tsx    # Botão com efeito magnético
│   └── whatsapp-fab.tsx       # Botão flutuante de WhatsApp
├── lib/
│   ├── config.ts              # SITE_URL e dados de perfil
│   └── utils.ts               # cn() helper
├── public/
│   ├── lucas.png              # Foto do hero
│   └── cv.pdf                 # Currículo baixado pelo QR Code
├── Dockerfile                 # Multi-stage com Next standalone
├── docker-compose.yml         # lp + nginx
├── nginx.conf                 # Reverse proxy + cache de assets
├── .env.example               # Modelo de variáveis
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## Variáveis de ambiente

| Nome                     | Descrição                                    | Exemplo                        |
| ------------------------ | -------------------------------------------- | ------------------------------ |
| `NEXT_PUBLIC_SITE_URL`   | URL pública (usada no QR Code do currículo) | `https://lp-lucas.vercel.app`  |

---

## Contato

- **E-mail:** lucaslgomes549@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/lucaslima012
- **GitHub:** https://github.com/LucasLgomes
- **Telefone:** (12) 99662-3567
