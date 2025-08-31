# PRessence Website

Sitio web corporativo de PRessence construido con **Next.js**, **Tailwind CSS**, **Sanity CMS** y deployado en **Vercel**.

## ✨ Características

- 🏢 **Sitio corporativo** con páginas de Inicio, Servicios, Sobre Nosotros y Contacto
- 📝 **Blog administrable** a través de Sanity CMS
- 🚀 **Hosting optimizado** en Vercel con dominio personalizado
- 🎨 **Diseño responsive** desarrollado con Tailwind CSS
- ⚡ **Rendimiento optimizado** con ISR (Incremental Static Regeneration)
- 📱 **Integración con Calendly** para gestión de citas
- 📧 **Formularios de contacto** integrados con Formspree

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14
- **Estilos**: Tailwind CSS
- **CMS**: Sanity
- **Hosting**: Vercel
- **Tipografías**: Google Fonts (Montserrat + Plus Jakarta Sans)
- **Formularios**: Formspree
- **Calendarios**: Calendly

## 📋 Requisitos

- Node.js 18 o superior
- Sanity CMS para la gestión del blog
- Vercel para el hosting
- Formspree para los formularios de contacto
- Calendly para la gestión de citas

## 🚀 Instalación y Configuración

### 1. Instalación de dependencias

```bash
npm install
```

### 2. Configuración de variables de entorno

El archivo `.env.local` contiene la configuración necesaria:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Integraciones
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/pressence
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/XXXXX
```

### 3. Configuración de Sanity CMS

El CMS está configurado con el esquema `post` que incluye:

- Título y slug del artículo
- Fecha de publicación
- Imagen destacada
- Categoría
- Contenido rich text

### 4. Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### 5. Deploy

El sitio está deployado en Vercel con todas las variables de entorno configuradas.

### 6. Dominio

El sitio cuenta con un dominio personalizado configurado a través de Vercel.

## 🎨 Tipografías

El sitio utiliza **Google Fonts** optimizadas:

- **Montserrat**: Tipografía principal
- **Plus Jakarta Sans**: Tipografía display

### Telegraf (alternativa)

El proyecto está preparado para utilizar la tipografía **Telegraf** como alternativa a Plus Jakarta Sans, colocando los archivos en `public/fonts/Telegraf/` y configurando `next/font/local`.

## 📁 Estructura del Proyecto

```
├── components/          # Componentes React reutilizables
├── pages/              # Páginas de Next.js
├── public/             # Archivos estáticos
├── styles/             # Archivos CSS/Tailwind
├── lib/                # Utilidades y configuración
├── sanity/             # Configuración de Sanity
└── README.md
```

## ⚙️ Características Técnicas

- **ISR**: Las consultas a Sanity se revalidan cada 60 segundos
- **Optimización de imágenes**: Implementación de Next.js Image component
- **SEO optimizado**: Meta tags y sitemap configurados
- **Diseño responsive**: Compatible con todos los dispositivos

## 📝 Notas

- El renderer de contenido del blog maneja párrafos y títulos básicos
- Las variables de entorno están configuradas para producción y desarrollo
- El sitio está optimizado para rendimiento y SEO

---

Hecho con ❤️ para PRessence