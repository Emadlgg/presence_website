# PRessence Website

Sitio web corporativo de PRessence construido con **Next.js**, **Tailwind CSS**, **Notion** y deployado en **Vercel**.

## ✨ Características

- 🏢 **Sitio corporativo** con páginas de Inicio, Servicios, Sobre Nosotros y Contacto
- 📝 **Blog administrable** a través de Notion
- 🚀 **Hosting optimizado** en Vercel con dominio personalizado
- 🎨 **Diseño responsive** desarrollado con Tailwind CSS
- ⚡ **Rendimiento optimizado** con ISR (Incremental Static Regeneration)
- 📱 **Integración con Calendly** para gestión de citas
- 📧 **Formularios de contacto** integrados con Formspree
- 🎬 **Carrusel interactivo** de servicios con videos e imágenes

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14
- **Estilos**: Tailwind CSS
- **CMS**: Notion
- **Hosting**: Vercel
- **Tipografías**: Google Fonts (Montserrat + Plus Jakarta Sans)
- **Formularios**: Formspree
- **Calendarios**: Calendly
- **Animaciones**: Framer Motion
- **Carrusel**: Swiper

## 📋 Requisitos

- Node.js 18 o superior
- Notion para la gestión del blog
- Vercel para el hosting
- Formspree para los formularios de contacto
- Calendly para la gestión de citas

## 🚀 Instalación y Configuración

### 1. Instalación de dependencias

```bash
npm install
```

### 2. Configuración de variables de entorno

Crea un archivo `.env.local` con la siguiente configuración:

```env
# Notion
NOTION_TOKEN=tu_token_de_notion
NOTION_DATABASE_ID=tu_database_id

# Integraciones
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/pressence
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/XXXXX
```

### 3. Configuración de Notion

El CMS está configurado con una base de datos de Notion que incluye:

- **Name** (título): Título del artículo
- **Slug** (rich text): URL amigable del artículo
- **Fecha** (date): Fecha de publicación
- **Imagen** (files): Imagen destacada
- **Categoría** (select): Categoría del artículo
- **Excerpt** (rich text): Extracto o resumen
- **Publicado** (checkbox): Control de publicación
- **Contenido**: Bloques de Notion (párrafos, títulos H1, H2)

### 4. Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### 5. Build y Deploy

```bash
npm run build
npm start
```

El sitio está deployado en Vercel con todas las variables de entorno configuradas.

### 6. Dominio

El sitio cuenta con un dominio personalizado configurado a través de Vercel.

## 🎨 Tipografías

El sitio utiliza **Google Fonts** optimizadas:

- **Montserrat**: Tipografía principal
- **Plus Jakarta Sans**: Tipografía display

## 📁 Estructura del Proyecto

```
├── components/          # Componentes React reutilizables
│   ├── Footer.js       # Footer del sitio
│   ├── Header.js       # Navegación principal
│   ├── Hero.js         # Banner principal con video
│   ├── PostCard.js     # Tarjeta de artículo del blog
│   └── ServiceCard.js  # Tarjeta de servicio
├── pages/              # Páginas de Next.js
│   ├── _app.js         # Configuración global
│   ├── index.js        # Página principal
│   ├── about.js        # Sobre Nosotras
│   ├── services.js     # Servicios
│   ├── contact.js      # Contacto
│   ├── blog.js         # Listado de blog
│   └── blog/
│       └── [slug].js   # Artículo individual
├── lib/                # Utilidades
│   └── notion.js       # Cliente y helpers de Notion
├── public/             # Archivos estáticos
│   ├── images/         # Imágenes
│   ├── videos/         # Videos
│   └── fonts/          # Fuentes personalizadas
├── styles/             # Archivos CSS/Tailwind
│   └── globals.css     # Estilos globales
└── README.md
```

## ⚙️ Características Técnicas

- **ISR**: Las consultas a Notion se revalidan cada 60 segundos
- **Optimización de imágenes**: Implementación de Next.js Image component
- **SEO optimizado**: Meta tags configurados en cada página
- **Diseño responsive**: Compatible con todos los dispositivos
- **Videos de fondo**: Hero section con video autoreproducible
- **Carrusel automático**: Servicios con autoplay y loop infinito

## 🎨 Paleta de Colores

- **Primary**: `#f39e19` (Naranja)
- **Primary Blue**: `#16367d` (Azul corporativo)
- **Light Background**: `#fdf3c0` (Amarillo claro)
- **Light Blue**: `#d9faff` (Azul claro)
- **Secondary Yellow**: `#f9c737` (Amarillo secundario)

## 📝 Notas

- El renderer de contenido del blog maneja párrafos, H1 y H2 desde Notion
- Las variables de entorno están configuradas para producción y desarrollo
- El sitio está optimizado para rendimiento y SEO
- Los videos se cargan de forma optimizada con `autoPlay`, `loop`, `muted` y `playsInline`

## 🔧 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera el build de producción
npm start        # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

---

Hecho con ❤️ para PRessence