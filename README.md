# PRessence Website (Next.js + Tailwind + Sanity + Vercel)

Proyecto base listo para:
- Sitio corporativo (Inicio, Servicios, Sobre, Contacto)
- Blog administrable con Sanity (sin programar)
- Hosting en Vercel con dominio propio
- Tipografías Google Fonts: Montserrat (principal) y Plus Jakarta Sans como sustituto de Telegraf

## Requisitos
- Node 18+
- Cuenta en Sanity (gratis)
- Cuenta en Vercel (gratis)

## 1) Instalar
```bash
npm install
```

## 2) Configurar variables
Crea un archivo `.env.local` en la raíz, basado en `.env.example`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tuusuario
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/XXXXX
```

## 3) Sanity (CMS)
1. Instala CLI: `npm i -g @sanity/cli`
2. Crea un proyecto: `sanity init` (elige dataset `production`)
3. Crea el esquema `post` en tu Studio con estos campos:
   - title (string)
   - slug (slug, source: title)
   - date (datetime)
   - image (image)
   - category (string)
   - content (array of block)
4. Copia tu `projectId` y `dataset` al `.env.local`

## 4) Ejecutar en local
```bash
npm run dev
```

## 5) Deploy a Vercel
1. Sube a GitHub
2. Importa el repo en Vercel
3. En "Settings → Environment Variables" agrega las variables del `.env.local`
4. Deploy
5. En "Settings → Domains" agrega tu dominio `.com` y ajusta DNS en tu registrador

## 6) Tipografías
- Se usan **Google Fonts** con `next/font/google`:
  - Montserrat → `--font-montserrat`
  - Plus Jakarta Sans (sustituye Telegraf) → `--font-display`
- Si tienes licencia de **Telegraf**, coloca los archivos en `public/fonts/Telegraf` y actualiza `_app.js` para usar `next/font/local` con `--font-display`.

## Notas
- La consulta a Sanity usa ISR (revalidate: 60s).
- El renderer de contenido es básico (párrafos y títulos). Puedes mejorar con un renderer de Portable Text si lo deseas.
