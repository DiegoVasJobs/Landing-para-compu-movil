/**
 * ACCESO A LAS COLECCIONES DE CONTENIDO
 * ----------------------------------------------------------------------------
 * Funciones pequeñas para leer los datos de src/content/ desde las páginas.
 * Si un dato obligatorio no existe, lanzan un error: el build se detiene
 * en vez de publicar una página incompleta.
 */
import { getCollection, getEntry, type CollectionEntry, type CollectionKey } from 'astro:content';

/**
 * Obtiene una entrada que DEBE existir (por ejemplo, la ficha de la carrera).
 * @param coleccion - Nombre de la colección.
 * @param id - Identificador de la entrada dentro del archivo JSON.
 * @returns Los datos validados de la entrada.
 */
export async function obtenerObligatorio<C extends CollectionKey>(
  coleccion: C,
  id: string,
): Promise<CollectionEntry<C>['data']> {
  const entrada = await getEntry(coleccion, id);
  if (!entrada) {
    throw new Error(`Falta la entrada "${id}" en la colección "${coleccion}".`);
  }
  return entrada.data;
}

/** Datos de una sección (título, pregunta y texto del menú) definidos en sitio.json. */
export type SeccionMeta = CollectionEntry<'sitio'>['data']['secciones'][number];

/**
 * Busca los textos de una sección por su ID.
 * @param secciones - Lista de secciones de sitio.json.
 * @param id - ID de la sección buscada.
 * @returns Los textos de esa sección; falla el build si no existe.
 */
export function buscarSeccion(secciones: SeccionMeta[], id: SeccionMeta['id']): SeccionMeta {
  const seccion = secciones.find((s) => s.id === id);
  if (!seccion) {
    throw new Error(`Falta la sección "${id}" en sitio.json.`);
  }
  return seccion;
}

/**
 * Obtiene todas las referencias ordenadas por su ID (F01, F02, ...).
 * @returns Lista de referencias en orden.
 */
export async function obtenerReferencias(): Promise<CollectionEntry<'referencias'>[]> {
  const referencias = await getCollection('referencias');
  return referencias.sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Obtiene las competencias del perfil de egreso según su campo "orden".
 * @returns Lista de competencias ordenadas.
 */
export async function obtenerCompetencias(): Promise<CollectionEntry<'perfilEgreso'>[]> {
  const competencias = await getCollection('perfilEgreso');
  return competencias.sort((a, b) => a.data.orden - b.data.orden);
}

/**
 * Obtiene los elementos de respaldo institucional según su campo "orden".
 * @returns Lista de elementos ordenados.
 */
export async function obtenerRespaldo(): Promise<CollectionEntry<'respaldo'>[]> {
  const respaldo = await getCollection('respaldo');
  return respaldo.sort((a, b) => a.data.orden - b.data.orden);
}

/**
 * Obtiene las preguntas frecuentes según el campo "orden" (prioridad de la Fase B).
 * @returns Lista de preguntas ordenadas.
 */
export async function obtenerPreguntas(): Promise<CollectionEntry<'faq'>[]> {
  const preguntas = await getCollection('faq');
  return preguntas.sort((a, b) => a.data.orden - b.data.orden);
}
