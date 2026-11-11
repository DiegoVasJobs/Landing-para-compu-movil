// Configuración general de Astro.
// Aquí NO hay contenido de la carrera: solo cómo se construye y publica el sitio.
import { defineConfig } from 'astro/config';
// Integración oficial que genera automáticamente sitemap.xml (requisito de SEO).
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Dirección pública del sitio en GitHub Pages. Se usa para el sitemap y las URL de Open Graph.
  site: 'https://diegovasjobs.github.io',
  // GitHub Pages publica el sitio dentro de una subcarpeta con el nombre del repositorio.
  base: '/Landing-para-compu-movil',
  // Integraciones activas: solo el generador de sitemap.
  integrations: [sitemap()],
  // Incluye todo el CSS dentro del HTML: en una página única y liviana evita una
  // petición extra que bloquea el dibujado inicial (mejora el puntaje de Rendimiento).
  build: {
    inlineStylesheets: 'always',
  },
});
