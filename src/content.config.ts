/**
 * ESQUEMAS DE LAS COLECCIONES DE CONTENIDO
 * ----------------------------------------------------------------------------
 * Este archivo define las "reglas" que debe cumplir cada archivo de datos de
 * src/content/. Si un dato no cumple su esquema (falta un campo, un número
 * está mal escrito o se cita una fuente que no existe), `npm run build` FALLA
 * y el sitio no se publica. Así garantizamos que toda cifra tenga su fuente.
 *
 * Herramientas usadas:
 *  - defineCollection: declara una colección de contenido de Astro.
 *  - reference('referencias'): obliga a que el ID citado (ej. "F02") exista
 *    en src/content/referencias.json. Es la base de la trazabilidad.
 *  - file() / glob(): "loaders" que leen archivos JSON o Markdown.
 *  - z (Zod): librería que describe y valida la forma de los datos.
 */
import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/* ---------------------------------------------------------------------------
 * Piezas reutilizables
 * ------------------------------------------------------------------------- */

/** Una fuente citada: debe ser un ID existente en la colección "referencias". */
const fuente = reference('referencias');

/** Lista de fuentes citadas: al menos una. */
const fuentes = z.array(fuente).min(1);

/**
 * Tipo de contenido, para mostrar al lector una etiqueta visible
 * (requisito de la Fase D: distinguir dato, interpretación y testimonio).
 */
const tipoContenido = z.enum(['dato', 'interpretacion', 'testimonio']);

/** Año de un dato: número entero razonable (evita errores como 225 o 20255). */
const anio = z.number().int().min(2000).max(2100);

/* ---------------------------------------------------------------------------
 * 1. Referencias (fuentes en formato APA 7)
 * ------------------------------------------------------------------------- */
const referencias = defineCollection({
  loader: file('src/content/referencias.json'),
  schema: z.object({
    /** Fuente primaria (emitida por quien produce el dato) o secundaria. */
    tipo: z.enum(['primaria', 'secundaria']),
    /** Referencia completa en APA 7, tal como se mostrará en el sitio. */
    apa: z.string().min(20),
    /** Enlace consultable por cualquier persona (criterio de trazabilidad). */
    url: z.url(),
    /** Año al que corresponde el dato o la publicación. */
    anioDato: anio,
    /** Fecha en que el equipo consultó la fuente (AAAA-MM-DD). */
    fechaConsulta: z.iso.date(),
  }),
});

/* ---------------------------------------------------------------------------
 * 2. Carrera: identificación (portada) y comparación con carreras afines
 * ------------------------------------------------------------------------- */
const carrera = defineCollection({
  loader: file('src/content/carrera.json'),
  schema: z.object({
    institucion: z.string(),
    nombreOficial: z.string(),
    codigoDemre: z.number().int(),
    titulo: z.string(),
    grado: z.string(),
    duracionSemestres: z.number().int().positive(),
    jornada: z.string(),
    sede: z.string(),
    direccion: z.string(),
    vacantes: z.number().int().positive(),
    fuentes,
    /** Propósito formativo, redactado en lenguaje claro. */
    proposito: z.object({ texto: z.string(), fuentes }),
    /** Carreras afines con las que se compara (mínimo 2, exigido por el enunciado). */
    afines: z
      .array(
        z.object({
          nombre: z.string(),
          codigoDemre: z.number().int(),
          duracionSemestres: z.number().int().positive(),
          grado: z.string(),
          enfoque: z.string(),
          fuentes,
        }),
      )
      .min(2),
    /** Análisis propio del equipo: se muestra con la etiqueta "Interpretación del equipo". */
    interpretacion: z.object({ tipo: z.literal('interpretacion'), texto: z.string() }),
  }),
});

/* ---------------------------------------------------------------------------
 * 3. Perfil de egreso: competencias reescritas en lenguaje claro
 * ------------------------------------------------------------------------- */
const perfilEgreso = defineCollection({
  loader: file('src/content/perfil-egreso.json'),
  schema: z.object({
    /** Posición en la página (Astro no garantiza el orden del archivo). */
    orden: z.number().int().positive(),
    titulo: z.string(),
    descripcion: z.string(),
    fuentes,
  }),
});

/* ---------------------------------------------------------------------------
 * 4. Malla curricular (plan de estudios)
 * ------------------------------------------------------------------------- */
const asignatura = z.object({
  codigo: z.string(),
  nombre: z.string(),
  /** Créditos SCT-Chile de la asignatura. */
  sct: z.number().int().positive(),
  /** Ciclo formativo según la leyenda de la malla oficial. */
  ciclo: z.enum(['CCT', 'CE', 'CT', 'PI', 'PPS']),
});

const malla = defineCollection({
  loader: file('src/content/malla.json'),
  schema: z
    .object({
      nombrePlan: z.string(),
      /** Explicación en lenguaje claro de la sigla SCT (primera aparición). */
      explicacionCreditos: z.string(),
      creditosTotales: z.number().int().positive(),
      fuentes,
      /** Nombre legible de cada ciclo, para la leyenda. */
      ciclos: z.record(asignatura.shape.ciclo, z.string()),
      semestres: z
        .array(
          z.object({
            numero: z.number().int().min(1).max(12),
            asignaturas: z.array(asignatura).min(1),
          }),
        )
        .min(1),
    })
    // Regla de negocio: la suma de créditos debe coincidir con el total oficial.
    .refine(
      (plan) =>
        plan.semestres
          .flatMap((semestre) => semestre.asignaturas)
          .reduce((total, ramo) => total + ramo.sct, 0) === plan.creditosTotales,
      { message: 'La suma de créditos SCT de la malla no coincide con creditosTotales.' },
    ),
});

/* ---------------------------------------------------------------------------
 * 5. Campo laboral: áreas de desempeño e indicadores con año y fuente
 * ------------------------------------------------------------------------- */
const campoLaboral = defineCollection({
  loader: file('src/content/campo-laboral.json'),
  schema: z.object({
    areas: z.array(z.object({ titulo: z.string(), descripcion: z.string() })).min(1),
    fuentesAreas: fuentes,
    indicadores: z
      .array(
        z.object({
          etiqueta: z.string(),
          /** Valor tal como se muestra (ej. "87,1 %"). Texto para respetar el formato chileno. */
          valor: z.string(),
          /** Explicación en lenguaje claro de qué mide y a quiénes considera. */
          detalle: z.string(),
          anio,
          /** Fuente del dato y, si corresponde, de su metodología. */
          fuentes,
        }),
      )
      .min(1),
  }),
});

/* ---------------------------------------------------------------------------
 * 6. Respaldo institucional: acreditación, cuerpo académico, infraestructura
 * ------------------------------------------------------------------------- */
const respaldo = defineCollection({
  loader: file('src/content/respaldo.json'),
  schema: z.object({
    /** Posición en la página (Astro no garantiza el orden del archivo). */
    orden: z.number().int().positive(),
    titulo: z.string(),
    valorDestacado: z.string(),
    descripcion: z.string(),
    tipo: tipoContenido,
    anio,
    fuentes,
  }),
});

/* ---------------------------------------------------------------------------
 * 7. Admisión: vías de ingreso, ponderaciones y fechas clave
 * ------------------------------------------------------------------------- */
const admision = defineCollection({
  loader: file('src/content/admision.json'),
  schema: z
    .object({
      procesoAdmision: anio,
      vias: z
        .array(z.object({ nombre: z.string(), descripcion: z.string(), url: z.url(), fuentes }))
        .min(1),
      ponderaciones: z
        .array(
          z.object({
            prueba: z.string(),
            porcentaje: z.number().min(0).max(100),
            /** true si es una prueba electiva (se elige Ciencias o Historia). */
            electiva: z.boolean().default(false),
          }),
        )
        .min(1),
      notaPonderaciones: z.string(),
      fuentesPonderaciones: fuentes,
      fechas: z
        .array(z.object({ hito: z.string(), inicio: z.iso.date(), fin: z.iso.date().optional() }))
        .min(1),
      fuentesFechas: fuentes,
      costos: z.object({ matricula: z.number().int(), arancelAnual: z.number().int(), anio, fuentes }),
      contacto: z.object({ correo: z.email(), telefono: z.string() }),
    })
    // Regla de negocio: obligatorias + UNA electiva deben sumar 100 %.
    .refine(
      (datos) => {
        const obligatorias = datos.ponderaciones.filter((p) => !p.electiva);
        const electivas = datos.ponderaciones.filter((p) => p.electiva);
        const sumaObligatorias = obligatorias.reduce((total, p) => total + p.porcentaje, 0);
        const electivaMayor = Math.max(0, ...electivas.map((p) => p.porcentaje));
        return sumaObligatorias + electivaMayor === 100;
      },
      { message: 'Las ponderaciones (obligatorias + una electiva) deben sumar 100 %.' },
    ),
});

/* ---------------------------------------------------------------------------
 * 8. Preguntas frecuentes: un archivo Markdown por pregunta
 * ------------------------------------------------------------------------- */
const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    pregunta: z.string(),
    /** Orden de aparición. Cuando termine la encuesta (Fase B), se reordena según la frecuencia de cada duda. */
    orden: z.number().int().positive(),
    tipo: tipoContenido.default('dato'),
    /** Una respuesta puede no tener cifras (por eso la lista puede venir vacía). */
    fuentes: z.array(fuente).default([]),
  }),
});

/* ---------------------------------------------------------------------------
 * 9. Sitio: textos globales (SEO, menú, títulos de sección, equipo)
 * ------------------------------------------------------------------------- */
const sitio = defineCollection({
  loader: file('src/content/sitio.json'),
  schema: z.object({
    /** Título único de la página para buscadores (recomendado: menos de 60 caracteres). */
    tituloSeo: z.string().max(60),
    /** Descripción para buscadores y redes sociales (recomendado: menos de 160 caracteres). */
    descripcionSeo: z.string().max(160),
    nombreSitio: z.string(),
    /** Aviso visible: este es un proyecto académico, no el sitio oficial de la UTEM. */
    aviso: z.string(),
    /** Fecha de la última revisión de los datos (AAAA-MM-DD). */
    actualizado: z.iso.date(),
    asignatura: z.string(),
    integrantes: z.array(z.string()).min(1),
    /** Secciones en el orden en que aparecen (Fase C: arquitectura de información). */
    secciones: z
      .array(
        z.object({
          id: z.enum([
            'sobre',
            'perfil',
            'malla',
            'campo-laboral',
            'respaldo',
            'admision',
            'preguntas',
            'referencias',
          ]),
          /** Texto corto para el menú. */
          menu: z.string(),
          titulo: z.string(),
          /** Pregunta del postulante que responde la sección. */
          pregunta: z.string(),
        }),
      )
      .length(8),
  }),
});

/** Fotos propias. El esquema exige texto alternativo y crédito (requisito de la pauta). */
const fotos = defineCollection({
  loader: file('src/content/fotos.json'),
  schema: z.object({
    archivo: z.string(),
    archivoMenor: z.string(),
    ancho: z.number().int().positive(),
    alto: z.number().int().positive(),
    anchoMenor: z.number().int().positive(),
    alt: z.string().min(20),
    credito: z.string().min(5),
  }),
});

/** Exportamos todas las colecciones para que Astro las registre. */
export const collections = {
  sitio,
  referencias,
  carrera,
  perfilEgreso,
  malla,
  campoLaboral,
  respaldo,
  admision,
  faq,
  fotos,
};
