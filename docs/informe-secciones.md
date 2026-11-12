# Secciones para INFORME.md

Cómo usar este archivo: copia cada sección a tu `INFORME.md` existente (no reemplaces el archivo completo, porque puede tener contenido que no está aquí). Lo que está entre [CORCHETES] lo debes completar con datos reales: no lo inventes.

---

## 1. Identificación del equipo

| Integrante | Identificación | Correo | Carrera | Usuario de GitHub |
|---|---|---|---|---|
| María García Huarca | Se entrega al docente por canal privado | mgarciah@utem.cl | Ingeniería en Informática | [COMPLETAR] |
| Diego Vásquez Castillo | [COMPLETAR] | [COMPLETAR] | [COMPLETAR] | [COMPLETAR] |

Asignatura: EFE685 Electivo de Computación Móvil. Académico: Sebastián Salazar Molina. Fecha de entrega: 13 de noviembre de 2026.

## 2. Resumen para la Escuela

Se construyó una página de una sola vista que presenta la carrera de Ingeniería en Informática de la UTEM a postulantes de 3.° y 4.° medio, personas egresadas y personas de 20 años o más que quieren cambiar de carrera. Cada cifra del sitio tiene su fuente oficial citada y la fecha de consulta. Los datos se leen desde archivos editables, de modo que la Escuela pueda actualizarlos sin tocar el diseño (ver README).

## 3. Fase A. Fuentes

Se reunieron 16 fuentes (F01 a F16) y se evaluó cada una con cinco criterios: autoridad, vigencia, trazabilidad, objetividad y pertinencia. La matriz completa está en `docs/fase-a-matriz-fuentes.md`. Fuentes primarias: [COMPLETAR conteo]. Secundarias: [COMPLETAR conteo].

Decisiones relevantes:
- La acreditación institucional cambió en octubre de 2026 (de 4 años, hasta marzo de 2030, a 5 años, hasta octubre de 2031, tras un recurso de reposición). Se actualizó el sitio y se citó la fuente más reciente (F12) en lugar de la de abril de 2026 (F11).
- Para el cuerpo académico se usó el informe de autoevaluación de la UTEM (F13) y el sitio aclara que el dato es de toda la universidad, no de la Escuela de Informática.

## 4. Fase B. Audiencia

Se aplicó una encuesta de 8 preguntas a 7 personas del público objetivo, con consentimiento informado (y conformidad del apoderado en el caso de menores). Instrumento, tablas y perfil: `docs/fase-b-audiencia.md`.

Hallazgos principales:
- Los temas más marcados fueron costo, becas y gratuidad (6 de 7), empleabilidad y sueldos (5 de 7) y malla (5 de 7).
- Las 7 personas usarían el celular, por lo que el diseño parte en 360 px.
- Las dudas abiertas más repetidas fueron la dificultad y la matemática (3 de 7) y el campo laboral (2 de 7).
- Lo que genera desconfianza: diseño desordenado, falta de información básica, ausencia de acreditación y tono publicitario.

Limitación: una respuesta (P4) no hablaba de la carrera y solo se usó en las preguntas de selección. Hubo solo 2 participantes de 4.° medio y ninguno de 3.° medio.

## 5. Fase C. Arquitectura de información

El orden de las secciones, los wireframes y la tabla sección → fuentes están en `docs/fase-c-mapa-contenidos.md`. El orden sigue las cinco preguntas del encargo y se contrastó con la encuesta. Una limitación reconocida: el costo, el tema más marcado, aparece en Admisión y en las preguntas frecuentes, no en la portada.

## 6. Fase D. Redacción

- Lenguaje claro, con siglas explicadas en su primera aparición (por ejemplo, SCT y DEMRE).
- Cada cifra lleva su año y una cita enlazada con la sección Referencias.
- Se distinguen con etiquetas visibles el dato oficial y la interpretación del equipo.
- Las fotos son propias y llevan texto alternativo y crédito. Se descartaron imágenes con personas, logos o material oficial sin autorización.

**Testimonio:** se escribió un testimonio con consentimiento, pero se retiró de la página. No respondía una de las preguntas de la Fase B, la sección de preguntas frecuentes no era su lugar natural y la pauta no lo exige.

## 7. Fase E. Validación

Revisión cruzada de cifras: [COMPLETAR resultado, ver tabla en `docs/fase-e-validacion.md`].

Prueba con usuarios: [COMPLETAR: cuántas personas, qué tareas lograron, qué problemas hallaron y qué se corrigió].

## 8. Decisiones de implementación (el porqué)

- **Astro:** genera páginas HTML ya listas y envía al navegador muy poco JavaScript. Eso ayuda al rendimiento en el celular, que usan las 7 personas encuestadas.
- **TypeScript estricto y colecciones con esquema:** los datos (malla, preguntas frecuentes, campo laboral, referencias) viven en archivos de `src/content/` y se validan con un esquema. Si un dato está incompleto o cita una fuente que no existe, la compilación falla en vez de publicar un error.
- **Componentes y layout base:** un componente por sección y un layout que concentra el encabezado, los metadatos y la estructura común.
- **Isla interactiva (filtro por año del plan de estudios):** la malla tiene 8 semestres con varias asignaturas cada uno, y en el celular es larga. El filtro deja ver un año a la vez. Es la única parte con JavaScript y el resto del sitio funciona sin él. [CONFIRMAR cómo está implementada antes de entregar.]
- **Acordeón de preguntas frecuentes:** usa los elementos nativos `details` y `summary`, que funcionan con teclado y sin JavaScript.

## 9. Calidad medible

| Medición | Resultado | Fecha |
|---|---|---|
| Lighthouse móvil: Rendimiento / Accesibilidad / Buenas prácticas / SEO | [COMPLETAR] | [COMPLETAR] |
| Lighthouse escritorio: Rendimiento / Accesibilidad / Buenas prácticas / SEO | [COMPLETAR] | [COMPLETAR] |
| Compliascan | [COMPLETAR] / 100 | [COMPLETAR] |

Medir de nuevo con la versión publicada y pegar las capturas en la carpeta `docs/evidencia/`.

## 10. Distribución del trabajo y coevaluación

| Tarea | Responsable |
|---|---|
| [COMPLETAR] | [COMPLETAR] |

Coevaluación: [COMPLETAR por cada integrante].

## Anexo. Declaración de uso de IA

Herramienta: Claude (Anthropic).

| Tarea | Instrucción (prompt) | Qué se modificó del resultado |
|---|---|---|
| Plantillas de las Fases B y E | [PEGAR el prompt exacto] | [COMPLETAR] |
| Tabulación de la encuesta y redacción del perfil | [PEGAR] | [COMPLETAR] |
| Búsqueda de las fuentes F12 y F13 | [PEGAR] | Se abrieron los enlaces y se verificaron las cifras en las fuentes [COMPLETAR] |
| Cambios de código (foto, retiro del testimonio) | [PEGAR] | [COMPLETAR] |
| Borrador de la Fase C y del informe | [PEGAR] | [COMPLETAR] |

Ninguna cifra proviene solo de la IA: todas se verificaron en las fuentes citadas. El código generado está comentado en los archivos del repositorio y el equipo puede explicarlo.
