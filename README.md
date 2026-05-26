# High Point Querétaro — Landing Page

## Descripción

Landing page promocional para **High Point Querétaro**, un desarrollo de departamentos en preventa ubicado en Centro Sur, Santiago de Querétaro (CP 76090). El proyecto es desarrollado por OR-B Desarrolladora bajo el concepto *Live, Work & Play*.

**Propósito:** Prueba técnica de Mappen

**Stack:** React 19 + TypeScript + Vite. SPA de una sola página sin ruteo ni backend. Imágenes en formato WebP optimizadas para carga rápida y SEO.

## Cómo desplegar

### Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/landing-high-point.git
cd landing-high-point

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo con HMR
npm run dev
```

El sitio estará disponible en `http://localhost:5173`.

### Otros comandos

```bash
npm run build    # Compila TypeScript y genera el bundle de producción en /dist
npm run preview  # Sirve el build de producción localmente para revisión
npm run lint     # Ejecuta ESLint sobre todo el proyecto
```

### Comentarios

## SEO
- Sitio optimizado con descripciones SEO para las imágenes, sitemap.
- Imágenes optimizadas para mayor carga en mobile y desktop.
- Keywords descriptivas y context en index.html

#### Posibles mejoras:
- Agregar env vars para datos que podemos modificar al desplegar como datos de contacto, teléfono, email, url del sitio.
- En la sección de plantas los recursos exportados del figma parece que el estilo background blanco no es visualmente adecuado a la agrupación del figma actual, se podría cambiar background o agrupación del figma para mejorar como visualizar en carrousel.
