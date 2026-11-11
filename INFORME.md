# Informe del proyecto: Landing page de Ingeniería en Informática (UTEM)

| | |
| --- | --- |
| **Asignatura** | EFE685 · Electivo de Computación Móvil |
| **Unidad académica** | Departamento de Informática y Computación, Facultad de Ingeniería, UTEM |
| **Docente** | Sebastián Salazar Molina |
| **Fecha de entrega** | 13 de noviembre de 2026 |
| **Sitio publicado** | https://diegovasjobs.github.io/Landing-para-compu-movil/ |
| **Repositorio** | https://github.com/DiegoVasJobs/Landing-para-compu-movil |

## Integrantes

| Nombre completo | RUT | Correo institucional | Carrera | Usuario GitHub |
| --- | --- | --- | --- | --- |
| Diego Vásquez Castillo | PENDIENTE | PENDIENTE | PENDIENTE | DiegoVasJobs |
| María García Huarca | PENDIENTE | PENDIENTE | PENDIENTE | PENDIENTE |

---

## 1. Resumen

Construimos una página web de una sola vista que presenta la carrera Ingeniería en Informática (código DEMRE 21030, Campus Macul) a estudiantes de 3.° y 4.° medio, a sus familias y a personas de 20 años o más que buscan estudiar o cambiar de carrera.

La regla que guió todo el trabajo fue: **ninguna cifra sin su fuente**. Cada dato del sitio muestra su año y un enlace a la fuente oficial de donde salió. El sistema está construido para que sea imposible publicar un dato que cite una fuente inexistente.

Primero investigamos y planificamos el contenido (fases A a E). Solo después diseñamos y programamos el sitio.

## 2. ¿Por qué este enfoque?

Las páginas de promoción de carreras suelen usar frases como "la mejor carrera" sin respaldo. El encargo pedía lo contrario: información verificable y honesta. Por eso:

- Preferimos **fuentes primarias**: la propia universidad, el Ministerio de Educación y el DEMRE.
- Mostramos también los datos menos atractivos. Por ejemplo, la carrera dura formalmente 8 semestres, pero en promedio se tarda 12,9 en terminarla. Creemos que un postulante bien informado toma mejores decisiones.
- Separamos visualmente lo que es **dato oficial**, lo que es **interpretación del equipo** y lo que es **testimonio**.

## 3. Fase A: búsqueda y evaluación de fuentes

Reunimos 13 fuentes, 12 de ellas primarias. Cada una fue evaluada con cinco criterios: autoridad, vigencia, trazabilidad, objetividad y pertinencia. La matriz completa está en el [Anexo A](docs/fase-a-matriz-fuentes.md).

### Decisiones importantes

Al comparar fuentes encontramos diferencias entre documentos oficiales. Las resolvimos así:

1. **La malla de la web no coincidía con la resolución oficial.** Usamos la Resolución Exenta N.° 03102 de 2022, porque es el documento con validez legal y el único que informa los créditos de cada asignatura.
2. **Mi Futuro informaba 4 años de acreditación.** Su dato era de octubre de 2025. Usamos la acreditación vigente de 5 años, otorgada en octubre de 2026.
3. **El folleto mostraba otra empleabilidad sin indicar el año.** Usamos Mi Futuro, porque declara a qué generaciones corresponde cada dato y cómo se calcula.

## 4. Fase B: análisis de audiencia

> PENDIENTE: resumir aquí los resultados de la encuesta (número de participantes, temas más importantes, canales, persona y preguntas priorizadas). Detalle en el [Anexo B](docs/fase-b-audiencia.md) y el instrumento en [fase-b-instrumento.md](docs/fase-b-instrumento.md).

## 5. Fase C: arquitectura de información

La página sigue el recorrido de alguien que no conoce la carrera: **qué es → qué se estudia y en qué se trabaja → si es confiable → cómo postular**. Las preguntas frecuentes y las referencias van al final.

| Orden | Sección | Pregunta que responde |
| --- | --- | --- |
| 1 | Portada | ¿Qué es la carrera? |
| 2 | Sobre la carrera | ¿En qué se diferencia de carreras parecidas? |
| 3 | Perfil de egreso | ¿Qué podré hacer? |
| 4 | Plan de estudios | ¿Qué aprenderé? |
| 5 | Campo laboral | ¿Dónde trabajaré? |
| 6 | Respaldo institucional | ¿Qué garantías hay? |
| 7 | Admisión | ¿Cómo postulo? |
| 8 | Preguntas frecuentes | Dudas reales de la encuesta |
| 9 | Referencias | ¿De dónde sale cada dato? |

> PENDIENTE: justificar el orden con los resultados de la Fase B.

La justificación de cada posición, los wireframes y la tabla que relaciona cada sección con sus fuentes están en el [Anexo C](docs/fase-c-mapa-contenidos.md).

## 6. Fase D: redacción

Todos los textos siguen una guía de estilo común ([guía completa](docs/fase-d-guia-estilo.md)): oraciones de menos de 25 palabras, siglas explicadas la primera vez y cada cifra con su año y su cita.

Los textos no están escritos dentro del código. Están en archivos de datos separados por sección (`src/content/`). Así, una persona de la Escuela puede actualizarlos sin programar (ver [README](README.md)).

## 7. Fase E: validación

> PENDIENTE: resumir la revisión cruzada de afirmaciones, la prueba con usuarios (participantes, tareas logradas, hallazgos) y las correcciones aplicadas. Detalle en el [Anexo D](docs/fase-e-validacion.md).

## 8. Decisiones de implementación (explicadas sin tecnicismos)

| Decisión | Qué significa | Por qué la tomamos |
| --- | --- | --- |
| **Astro** como herramienta | Genera páginas HTML listas antes de publicarlas | Requisito del encargo. Además, la página carga muy rápido porque el navegador casi no tiene que procesar nada |
| **Sitio estático** | La página es igual para todos y no usa base de datos | Es más rápido, más seguro y gratuito de publicar |
| **Datos separados del diseño** | La información está en archivos de texto (`src/content/`) | Permite actualizar un dato sin tocar el diseño ni saber programar |
| **Reglas que validan los datos** | Antes de publicar se revisa cada dato | Si se cita una fuente que no existe, si la malla no suma 240 créditos o si las ponderaciones no suman 100 %, **la publicación se detiene**. Lo comprobamos a propósito (Anexo E) |
| **TypeScript estricto** | Revisión automática del código antes de publicar | Detecta errores antes de que lleguen a la página |
| **Una pieza (componente) por sección** | Cada sección es un archivo independiente | Facilita encontrar y modificar cada parte |
| **Casi cero JavaScript** | Solo un script pequeño para filtrar la malla por año | El filtro ayuda a no perderse entre 44 asignaturas. Si el script no carga, la malla completa se sigue viendo |
| **Accesibilidad (WCAG 2.2)** | Contraste suficiente, navegación con teclado, enlace "saltar al contenido", etiquetas con texto (no solo color) | La página debe poder usarla cualquier persona, incluidas personas con discapacidad |
| **Diseño para celular primero** | Se diseñó primero para 360 px y luego para 768 y 1280 px | El público objetivo es joven y suele navegar desde el celular. PENDIENTE: confirmar con la pregunta 7 de la encuesta |
| **SEO básico** | Título, descripción, idioma `es-CL`, sitemap y vista previa para redes sociales | Para que aparezca bien en Google y al compartir el enlace |
| **Publicación automática** | GitHub publica la página cada vez que se guarda un cambio | Nadie tiene que publicar a mano y nunca se publica una versión con errores |

### Resultados de calidad

> PENDIENTE: completar con los resultados de PageSpeed Insights y CompliaScan sobre el sitio publicado, con capturas en `docs/evidencias/`.

| Herramienta | Resultado |
| --- | --- |
| PageSpeed (Rendimiento / Accesibilidad / Buenas prácticas / SEO) | PENDIENTE |
| CompliaScan | PENDIENTE |

## 9. Limitaciones

- **Malla:** la web de la carrera muestra una malla distinta a la resolución de 2022. Si existe un plan más nuevo aún no publicado en Transparencia, habría que actualizar `malla.json` cuando se publique.
- **Datos de empleabilidad:** corresponden a generaciones tituladas entre 2018 y 2023. Son los más recientes publicados, pero no reflejan necesariamente el mercado actual.
- **Cuerpo académico:** PENDIENTE (completar o eliminar según el resultado de la tarea M2).

## 10. Distribución del trabajo

> PENDIENTE: completar al final, de forma honesta, con lo que hizo cada integrante.

| Integrante | Aportes principales |
| --- | --- |
| Diego Vásquez Castillo | |
| María García Huarca | |

---

## Anexos

- **Anexo A.** [Matriz de fuentes](docs/fase-a-matriz-fuentes.md)
- **Anexo B.** [Instrumento](docs/fase-b-instrumento.md) y [análisis de audiencia](docs/fase-b-audiencia.md)
- **Anexo C.** [Mapa de contenidos y wireframes](docs/fase-c-mapa-contenidos.md)
- **Anexo D.** [Registro de validación](docs/fase-e-validacion.md)
- **Anexo E.** Evidencia técnica: pruebas de que la publicación se detiene ante datos inválidos (ver abajo)

### Anexo E. Evidencia técnica de validación de datos

Para demostrar que el sistema impide publicar datos inválidos, introdujimos errores a propósito y ejecutamos la compilación (`npm run build`):

| Prueba | Error introducido | Resultado |
| --- | --- | --- |
| 1 | En una pregunta frecuente se citó la fuente `F99`, que no existe | La compilación se detuvo con el mensaje: *references "F99" in collection "referencias", but that entry does not exist* |
| 2 | Se cambiaron los créditos de Práctica Profesional de 22 a 20 | La compilación se detuvo con el mensaje: *La suma de créditos SCT de la malla no coincide con creditosTotales* |

Después de cada prueba se restauró el dato correcto y la compilación volvió a terminar sin errores.

El código fuente está comentado en español, archivo por archivo, explicando qué hace cada parte (`src/`).
