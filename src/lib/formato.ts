/**
 * FUNCIONES DE FORMATO
 * ----------------------------------------------------------------------------
 * Transforman datos "crudos" de los archivos JSON en texto legible para
 * personas en Chile (pesos con punto de miles, fechas en español, etc.).
 * Se usan solo al construir el sitio: no envían JavaScript al navegador.
 */

/** Configuración regional del sitio: español de Chile. */
const LOCALE = 'es-CL';

/** Formateador de pesos chilenos sin decimales. Ej.: 90000 → "$90.000". */
const formateadorPesos = new Intl.NumberFormat(LOCALE, {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

/** Formateador de fechas largas. Ej.: "30 de noviembre de 2026". */
const formateadorFecha = new Intl.DateTimeFormat(LOCALE, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // Usamos UTC para que la fecha no cambie según la zona horaria del servidor.
  timeZone: 'UTC',
});

/**
 * Convierte un monto entero a pesos chilenos.
 * @param monto - Monto en pesos (número entero).
 * @returns Texto con formato de moneda chilena.
 */
export function formatearPesos(monto: number): string {
  return formateadorPesos.format(monto);
}

/**
 * Convierte una fecha ISO (AAAA-MM-DD) en texto largo en español.
 * @param fechaIso - Fecha en formato AAAA-MM-DD.
 * @returns Fecha legible, ej. "4 de enero de 2027".
 */
export function formatearFecha(fechaIso: string): string {
  return formateadorFecha.format(new Date(`${fechaIso}T00:00:00Z`));
}

/**
 * Muestra una fecha única o un rango de fechas.
 * @param inicio - Fecha de inicio (AAAA-MM-DD).
 * @param fin - Fecha de término opcional (AAAA-MM-DD).
 * @returns "4 de enero de 2027" o "4 de enero de 2027 al 7 de enero de 2027".
 */
export function formatearRango(inicio: string, fin?: string): string {
  return fin ? `${formatearFecha(inicio)} al ${formatearFecha(fin)}` : formatearFecha(inicio);
}
