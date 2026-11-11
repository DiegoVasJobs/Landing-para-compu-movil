# Fase C · Mapa de contenidos (Producto C)

## 1. Orden de las secciones y su justificación

El orden sigue el recorrido de una persona que todavía no conoce la carrera: primero entender **qué es**, luego **qué se estudia y en qué se trabaja**, después **si es confiable** y, por último, **cómo postular**. Las preguntas frecuentes y las referencias van al final como apoyo.

> PENDIENTE (Diego, después de la encuesta): reforzar cada justificación con los resultados de la Fase B (por ejemplo, "el 80 % marcó empleabilidad entre sus 3 temas") y reordenar si los datos lo indican. El orden se cambia en `src/content/sitio.json` y en `src/pages/index.astro`.

| Orden | Sección | Pregunta que responde | Por qué va en esta posición |
| --- | --- | --- | --- |
| 1 | Portada (hero) | ¿Qué es la carrera? | Es lo primero que se ve: identifica la carrera (nombre, título, duración, jornada) y ofrece accesos directos a Admisión y Malla. |
| 2 | Sobre la carrera | ¿En qué se diferencia? | Quien llega desde Google suele estar comparando carreras parecidas; aclarar la diferencia temprano evita que se vaya. |
| 3 | Perfil de egreso | ¿Qué podré hacer? | Conecta la carrera con resultados concretos antes de entrar al detalle de las asignaturas. |
| 4 | Plan de estudios | ¿Qué aprenderé? | Muestra con detalle el camino de 8 semestres; es la información más extensa, por eso va después del resumen. |
| 5 | Campo laboral | ¿Dónde trabajaré? | Responde la motivación principal (trabajo e ingresos) con datos oficiales y años declarados. |
| 6 | Respaldo institucional | ¿Qué garantías hay? | Una vez interesada, la persona busca confirmar que la institución es confiable. |
| 7 | Admisión | ¿Cómo postulo? | Es el paso de acción: va cuando la persona ya tiene los argumentos para decidir. |
| 8 | Preguntas frecuentes | Dudas de la Fase B | Resuelve las dudas puntuales detectadas en la encuesta. |
| 9 | Referencias | ¿De dónde sale esto? | Cierra la página con la lista completa de fuentes a la que apuntan todas las citas. |

## 2. Wireframes de baja fidelidad

> PENDIENTE (María, tarea M5): agregar imágenes en `docs/wireframes/`.

- Móvil (360 px): `wireframes/movil.png`
- Escritorio (1280 px): `wireframes/escritorio.png`

## 3. Trazabilidad sección → fuentes

| Sección | Contenido | Fuentes (ID) |
| --- | --- | --- |
| Portada | Nombre, título, grado, duración, jornada, sede, vacantes, código DEMRE | F01, F02 |
| Sobre la carrera | Propósito formativo | F01 |
| | Comparación con Ing. Civil en Computación mención Informática | F08 |
| | Comparación con Ing. Civil en Ciencia de Datos | F09 |
| | Análisis propio (etiquetado como interpretación del equipo) | Sin fuente: es opinión del equipo basada en F01, F08 y F09 |
| Perfil de egreso | Cinco competencias en lenguaje claro | F01, F03 |
| Plan de estudios | 44 asignaturas distribuidas en 8 semestres, créditos SCT y ciclos | F02 |
| Campo laboral | Áreas de desempeño | F01, F03 |
| | Empleabilidad, ingresos, retención, duración real | F04, F05 |
| Respaldo | Acreditación institucional | F06, F11 (+ F12 pendiente) |
| | Certificación de la carrera | F01 |
| | Plan oficial | F02 |
| | Cuerpo académico | F13 (pendiente) |
| Admisión | Vías de ingreso | F10 |
| | Ponderaciones, puntaje mínimo, costos | F01 |
| | Fechas clave 2027 | F07 |
| Preguntas frecuentes | Respuestas | Según cada respuesta (ver `src/content/faq/`) |
| Referencias | Lista completa en APA 7 | Todas |
