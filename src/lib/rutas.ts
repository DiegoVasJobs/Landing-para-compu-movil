/**
 * RUTAS DE ARCHIVOS PÚBLICOS
 * ----------------------------------------------------------------------------
 * En GitHub Pages el sitio vive en una subcarpeta (/Landing-para-compu-movil/).
 * Esta función arma la ruta correcta hacia archivos de la carpeta public/
 * sin importar dónde se publique el sitio.
 */

/**
 * Devuelve la ruta de un archivo de public/ considerando la base del sitio.
 * @param archivo - Nombre del archivo, ej. "favicon.svg".
 * @returns Ruta lista para usar en href o src, ej. "/Landing-para-compu-movil/favicon.svg".
 */
export function rutaPublica(archivo: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${archivo.replace(/^\//, '')}`;
}
