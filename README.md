# Landing page · Ingeniería en Informática (UTEM)

Página web de una sola vista que presenta la carrera **Ingeniería en Informática** (código DEMRE 21030, Campus Macul) a postulantes de 3.° y 4.° medio y a sus familias. Toda cifra que aparece en la página tiene su año y su fuente oficial citada.

> Proyecto académico de la asignatura EFE685 (Electivo de Computación Móvil). No es el sitio oficial de la UTEM.

## ¿Dónde está publicada?

**https://diegovasjobs.github.io/Landing-para-compu-movil/**

La página se publica sola cada vez que se guarda un cambio en la rama `main` de este repositorio. El proceso tarda 1 a 2 minutos y puede seguirse en la pestaña **Actions** de GitHub.

## ¿Cómo actualizar la información?

No hace falta saber programar. Toda la información está en archivos de texto dentro de la carpeta `src/content/`:

| Archivo | Qué contiene |
| --- | --- |
| `sitio.json` | Título de la página, menú, títulos de cada sección e integrantes |
| `carrera.json` | Nombre, título, grado, duración, vacantes y comparación con carreras afines |
| `perfil-egreso.json` | Lo que podrá hacer quien se titule |
| `malla.json` | Asignaturas por semestre con sus créditos |
| `campo-laboral.json` | Áreas de trabajo, empleabilidad e ingresos |
| `respaldo.json` | Acreditación y otros respaldos institucionales |
| `admision.json` | Vías de ingreso, ponderaciones, fechas, costos y contacto |
| `faq/` | Una pregunta frecuente por archivo |
| `referencias.json` | Lista de fuentes (F01, F02, …) en formato APA 7 |

### Paso a paso para cambiar un dato (ejemplo: el arancel)

1. En GitHub, abre `src/content/admision.json` y presiona el ícono del lápiz (**Edit**).
2. Cambia el número, por ejemplo `"arancelAnual": 4763300`. Escribe los montos **sin puntos ni signo $**.
3. Si el dato viene de una fuente nueva, agrégala primero en `referencias.json` con un ID nuevo (por ejemplo `F12`) y cítala en el campo `fuentes`.
4. Presiona **Commit changes** y escribe una breve descripción del cambio.
5. Espera 1 a 2 minutos y revisa la página publicada.

### ¿Qué pasa si me equivoco?

El sitio revisa los datos antes de publicarse. Si falta un campo, un número está mal escrito, los créditos de la malla no suman 240 o se cita una fuente que no existe, **la publicación se detiene** y la página anterior sigue en línea. En la pestaña **Actions** aparecerá una ✗ roja con el motivo. Basta con corregir el archivo y guardarlo de nuevo.

## ¿Cómo ver la página en mi computador? (opcional)

1. Instala [Node.js](https://nodejs.org/) versión 24 o superior.
2. Descarga este repositorio (botón verde **Code → Download ZIP**) y descomprímelo.
3. Abre una terminal en la carpeta del proyecto y ejecuta:

   ```bash
   npm install      # instala las herramientas (solo la primera vez)
   npm run dev      # abre la página en modo edición
   ```

4. Entra a http://localhost:4321/Landing-para-compu-movil/ en tu navegador. Los cambios en `src/content/` se ven al instante.

Otros comandos útiles:

| Comando | Para qué sirve |
| --- | --- |
| `npm run check` | Revisa que los datos y el código no tengan errores |
| `npm run build` | Genera la versión final en la carpeta `dist/` |
| `npm run preview` | Muestra la versión final antes de publicarla |

## ¿Cómo está organizado el proyecto?

```text
src/
├── content/            # DATOS editables (ver tabla de arriba)
├── content.config.ts   # Reglas que validan los datos
├── components/         # Una pieza por sección de la página
├── layouts/            # Plantilla común (encabezado, pie, metadatos)
├── lib/                # Funciones de apoyo (formato de fechas y pesos)
├── pages/index.astro   # La página: une todas las secciones
└── styles/global.css   # Colores, tipografía y diseño responsivo
public/                 # Ícono e imagen para redes sociales
docs/                   # Evidencias del proceso (fuentes, encuestas, validación)
INFORME.md              # Informe del proyecto
```

## Equipo

- Diego Vásquez Castillo
- María García Huarca

Asignatura EFE685 · Electivo de Computación Móvil · Departamento de Informática y Computación · Universidad Tecnológica Metropolitana.
