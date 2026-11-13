# Documentación del código

Guía para entender y explicar el proyecto archivo por archivo. Cada archivo de `src/` tiene además comentarios en español que explican sus partes. Se recomienda leerla con el código abierto, en el orden propuesto.

## 1. Idea general en tres capas

| Capa | Dónde está | Qué hace |
| --- | --- | --- |
| **Contenido** | `src/content/` | Todos los textos y cifras del sitio, en archivos JSON y Markdown. Aquí se actualiza la información. |
| **Reglas** | `src/content.config.ts` | Describe la forma obligatoria de cada archivo de contenido. Si un dato no cumple, la compilación se detiene. |
| **Presentación** | `src/pages/`, `src/layouts/`, `src/components/`, `src/styles/` | Lee el contenido ya validado y lo convierte en HTML con estilos. No contiene datos de la carrera. |

Astro ejecuta todo esto **una sola vez al compilar** (`npm run build`) y genera páginas HTML estáticas en `dist/`. El navegador recibe HTML y CSS listos; el único JavaScript es el filtro de la malla.

## 2. Orden de lectura sugerido

1. `README.md`: qué es el proyecto y cómo se actualiza.
2. `src/content/*.json` y `src/content/faq/*.md`: los datos.
3. `src/content.config.ts`: las reglas de esos datos.
4. `src/lib/contenido.ts`: cómo se leen los datos.
5. `src/pages/index.astro`: cómo se arma la página.
6. `src/layouts/BaseLayout.astro`: la plantilla común.
7. `src/components/Seccion.astro`, `Cita.astro`, `Etiqueta.astro`: las piezas reutilizables.
8. Un componente de sección, por ejemplo `Admision.astro`.
9. El `<script>` de `Malla.astro`: el único JavaScript.
10. `src/styles/global.css` y `.github/workflows/deploy.yml`.

## 3. Configuración (raíz del proyecto)

| Archivo | Para qué sirve |
| --- | --- |
| `package.json` | Lista las herramientas (Astro, el generador de sitemap, TypeScript) y los comandos: `dev` (servidor local), `check` (revisa tipos y datos), `build` (revisa y compila), `preview` (muestra lo compilado). Exige Node 24 o superior. |
| `astro.config.mjs` | Dirección pública del sitio (`site`), subcarpeta de GitHub Pages (`base`), generador de `sitemap.xml` y la opción de incluir el CSS dentro del HTML para que cargue más rápido. |
| `tsconfig.json` | Activa la configuración más estricta de TypeScript (`strictest`): prohíbe `any`, variables sin usar y accesos que podrían ser `undefined`. |
| `.gitignore` | Archivos que no se suben: `node_modules/`, `dist/`, `.astro/` y datos privados. |
| `.github/workflows/deploy.yml` | Publicación automática: con cada cambio en `main`, GitHub instala, revisa, compila y publica en GitHub Pages. Si la compilación falla, no publica nada. |

## 4. Reglas de los datos (`src/content.config.ts`)

Cada colección se declara con `defineCollection`, que tiene dos partes:

- **`loader`**: de dónde salen los datos. `file('…json')` lee un archivo JSON con una lista de elementos; `glob(…)` lee una carpeta de archivos Markdown (las preguntas frecuentes).
- **`schema`**: la forma obligatoria, escrita con **Zod** (`z`). Por ejemplo, `z.number().int().positive()` exige un entero positivo y `z.url()` exige una dirección web válida.

Piezas clave:

| Pieza | Qué garantiza |
| --- | --- |
| `reference('referencias')` | Cada fuente citada (`"F04"`) debe existir en `referencias.json`. Si no existe, la compilación falla. Es la base de la trazabilidad. |
| `fuentes = z.array(fuente).min(1)` | Todo dato con cifras debe citar al menos una fuente. |
| `tipoContenido` | Solo permite `dato`, `interpretacion` o `testimonio`; se muestra como etiqueta visible. |
| `.refine(...)` en `malla` | La suma de créditos SCT de todas las asignaturas debe ser igual a `creditosTotales` (240). |
| `.refine(...)` en `admision` | Las ponderaciones obligatorias más una electiva deben sumar 100 %. |
| `fotos` | Cada foto exige texto alternativo (mínimo 20 caracteres) y crédito. |

Colecciones: `sitio`, `referencias`, `carrera`, `perfilEgreso`, `malla`, `campoLaboral`, `respaldo`, `admision`, `faq` y `fotos`.

## 5. Funciones de apoyo (`src/lib/`)

| Archivo | Funciones |
| --- | --- |
| `contenido.ts` | `obtenerObligatorio(coleccion, id)`: trae un dato que debe existir; si falta, detiene la compilación. `obtenerCompetencias`, `obtenerRespaldo`, `obtenerPreguntas`, `obtenerReferencias`: traen una colección **ordenada** (Astro no garantiza el orden del archivo, por eso existe el campo `orden`). `buscarSeccion(secciones, id)`: entrega el título y la pregunta de una sección desde `sitio.json`. |
| `formato.ts` | `formatearPesos(90000)` → `$90.000`; `formatearFecha('2027-01-04')` → `4 de enero de 2027`; `formatearRango(inicio, fin)` para periodos. Usan `Intl` con la configuración `es-CL`. |
| `rutas.ts` | `rutaPublica('favicon.svg')` arma la ruta correcta considerando la subcarpeta de GitHub Pages. |

## 6. Página y plantilla

- **`src/pages/index.astro`**: carga todos los datos con las funciones de `contenido.ts` y los entrega como *props* (parámetros) a cada componente, en el orden definido en la Fase C. No contiene textos propios.
- **`src/layouts/BaseLayout.astro`**: el `<head>` con título, descripción, URL canónica, Open Graph (vista previa en redes), favicon e idioma `lang="es-CL"`; el enlace "Saltar al contenido principal"; el encabezado, el `<main>` y el pie. `<slot />` es el lugar donde entra el contenido de la página.

## 7. Componentes (`src/components/`)

Cada archivo `.astro` tiene dos partes: entre las líneas `---` va el código que se ejecuta al compilar (props tipadas con `interface Props`); debajo va el HTML; y al final, `<style>` con estilos que solo afectan a ese componente.

**Piezas reutilizables**

| Componente | Qué hace |
| --- | --- |
| `Seccion.astro` | Envoltorio común: `<section>` con su título `h2` y la pregunta que responde. Mantiene la jerarquía de títulos (h1 → h2 → h3). |
| `Cita.astro` | Muestra `[F04]` como enlace a `#ref-F04` en Referencias; puede mostrar el año del dato. |
| `Etiqueta.astro` | Etiqueta visible "Dato oficial", "Interpretación del equipo" o "Testimonio". No depende solo del color: siempre muestra el texto. |
| `Icono.astro` | Íconos propios en SVG, decorativos (`aria-hidden`): no los leen los lectores de pantalla. |
| `Logo.astro` | Logo propio del proyecto (no usa el logo de la UTEM). |
| `Encabezado.astro` | Nombre del sitio, menú hacia cada sección y botón "Cómo postular". En móvil, el menú se desplaza horizontalmente, sin JavaScript. |
| `PiePagina.astro` | Aviso de proyecto académico no oficial, enlaces a secciones, equipo y fecha de revisión de los datos. |

**Secciones** (una por sección obligatoria)

| Componente | Responde | Detalles |
| --- | --- | --- |
| `Hero.astro` | ¿Qué es la carrera? | Nombre, propósito, botones, tres cifras grandes (semestres, créditos, vacantes) y la ficha con título, grado, duración, jornada, sede y código. |
| `SobreCarrera.astro` | ¿En qué se diferencia? | Tabla comparativa con 2 carreras afines y el recuadro "Interpretación del equipo". |
| `PerfilEgreso.astro` | ¿Qué podré hacer? | Tarjetas con las competencias en lenguaje claro. |
| `Malla.astro` | ¿Qué aprenderé? | Semestres con asignaturas, créditos y ciclo; leyenda de ciclos; **filtro por año** (ver abajo). |
| `CampoLaboral.astro` | ¿Dónde trabajaré? | Áreas de trabajo e indicadores de Mi Futuro con año y fuente. Las barras son un apoyo visual: el valor siempre está escrito en texto. Compara la duración formal con la real. |
| `Respaldo.astro` | ¿Qué garantías hay? | Acreditación, certificación de la carrera, plan oficial y la foto propia del campus con su crédito. |
| `Admision.astro` | ¿Cómo postulo? | Vías de ingreso, tabla de ponderaciones, fechas clave, costos y contacto. |
| `PreguntasFrecuentes.astro` | Dudas de la encuesta | Cada pregunta en un `<details>`, que se abre y cierra sin JavaScript. La respuesta en Markdown se convierte con `render()`. |
| `Referencias.astro` | ¿De dónde sale esto? | Lista de fuentes en APA 7 con su ancla `#ref-F01` y la fecha de consulta. |

**El filtro de la malla (único JavaScript)**

1. Los botones "Todos / Año 1 … Año 4" vienen ocultos (`hidden`) en el HTML.
2. El `<script>` los muestra: si el navegador no ejecuta JavaScript, se ve la malla completa sin botones (mejora progresiva).
3. Al hacer clic, marca el botón activo con `aria-pressed` (para lectores de pantalla) y oculta los semestres de otros años con `hidden`.

## 8. Estilos (`src/styles/global.css`)

- **Variables** en `:root`: colores, espacios y tipografía. Los demás estilos usan esas variables, así que cambiar un color en un solo lugar lo cambia en todo el sitio. Los colores de texto cumplen contraste 4,5:1 (WCAG AA).
- **Diseño móvil primero**: los estilos base son para 360 px, y los bloques `@media (min-width: …)` ajustan para tableta y escritorio.
- **Accesibilidad**: `:focus-visible` (contorno visible al navegar con teclado), `.solo-lector` (texto que solo leen los lectores de pantalla) y respeto de `prefers-reduced-motion`.
- **Clases reutilizables**: `.contenedor` (ancho máximo centrado), `.grilla` (columnas automáticas), `.tarjeta`, `.boton`, `.nota`, `.icono-caja`.

## 9. Preguntas probables en la defensa

| Pregunta | Respuesta corta |
| --- | --- |
| ¿Por qué no hay textos dentro de los componentes? | Para separar contenido y presentación: los datos están en `src/content/`, validados por un esquema, y se pueden actualizar sin tocar el diseño. |
| ¿Cómo garantizan que toda cifra tenga fuente? | Con `reference('referencias')`: si se cita una fuente que no existe, la compilación falla. Lo probamos a propósito (Informe, Anexo E). |
| ¿Por qué Astro? | Genera HTML estático y envía casi cero JavaScript, lo que da buen rendimiento y accesibilidad. |
| ¿Qué pasa si alguien escribe mal un dato? | `npm run build` falla, GitHub no publica y la página anterior sigue en línea. |
| ¿Dónde está el JavaScript? | Solo en el filtro de `Malla.astro`, justificado porque la malla tiene 44 asignaturas y en el celular conviene ver un año a la vez. |
| ¿Por qué el campo `orden`? | Porque Astro no garantiza el orden de lectura de los archivos; así el equipo decide el orden (por ejemplo, el de las preguntas frecuentes según la encuesta). |
