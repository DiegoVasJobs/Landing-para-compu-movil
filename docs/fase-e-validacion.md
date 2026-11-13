# Fase E. Registro de validación

## 1. Revisión cruzada de afirmaciones

Cada integrante verifica las cifras del sitio contra la fuente primaria (no la comparte quien la redactó). Fecha de consulta de todas las fuentes: 12-11-2026.

| Afirmación en el sitio | Sección | Fuente (ID) | Coincide con la fuente (sí/no) | Revisó | Fecha | Corrección |
|---|---|---|---|---|---|---|
| 8 semestres, 240 créditos SCT | Portada / Plan de estudios | F01, F02 | Sí. Resolución Exenta N.° 03102 (2 de agosto de 2022): 8 semestres y 240 SCT. Coincide con la malla del portal estudiantil (30 SCT por semestre) | María | 12-11-2026 | |
| 150 vacantes, código 21030 | Portada | F01, F02 | Sí. Oferta Académica UTEM Admisión 2027 y página oficial de la carrera: 150 vacantes y código 21030 | María | 12-11-2026 | Las vacantes son referenciales según la propia UTEM |
| Empleabilidad al 1.er año 87,1 % | Campo laboral | F04, F05 | Sí. Mi Futuro, ficha de la carrera: 87,1 % | María | 12-11-2026 | PENDIENTE: confirmar el año de los datos (matriz de fuentes o metodología de Mi Futuro) |
| Empleabilidad al 2.º año 96,5 % | Campo laboral | F04, F05 | Sí. Mi Futuro: 96,5 % | María | 12-11-2026 | Mismo pendiente: año del dato |
| Ingreso $2,2 a $2,3 millones | Campo laboral | F04, F05 | Sí. Mi Futuro: de $2.200.000 a $2.300.000 al 4.º año | María | 12-11-2026 | Mismo pendiente: año del dato |
| Retención 1.er año 90,1 % | Campo laboral | F04, F05 | Sí. Mi Futuro: 90,1 % | María | 12-11-2026 | Mismo pendiente: año del dato |
| Duración real 12,9 semestres | Campo laboral | F04, F05 | Sí. Mi Futuro: 12,9 semestres | María | 12-11-2026 | Mismo pendiente: año del dato |
| Acreditación institucional 5 años, hasta oct. 2031 | Respaldo | F06, F11 | PENDIENTE. No verificada aún en el buscador de la CNA | | | Un comunicado de prensa del 15-10-2026 respalda "5 años hasta octubre de 2031". La ficha de oferta 2027 de la UTEM (anterior a la reposición) dice "hasta marzo de 2030". Mi Futuro muestra "4 años" (dato desactualizado) |
| Certificación de la carrera 2025 a 2030 | Respaldo | F01 | Sí, solo en F01: certificada por 5 años, del 16-06-2025 al 16-06-2030, por la Agencia Acreditadora de Chile y el CONAIC. No aparece en el buscador de la CNA (se probó con y sin filtro de agencia) | María | 12-11-2026 | Una sola fuente. Declarado en Limitaciones |
| Ponderaciones de admisión | Admisión | F01 | Sí. NEM 10, ranking 25, lectora 20, M1 30, ciencias o historia 10, M2 5 (suman 100 %). Promedio mínimo 458. Coincide en la página de la carrera y en la Oferta Académica 2027 | María | 12-11-2026 | |
| Fechas clave 2027 | Admisión | F07 | PENDIENTE. Falta comparar las fechas del sitio con el calendario del proceso de admisión 2027 del DEMRE | | | |
| Matrícula $90.000 y arancel $4.763.300 | Admisión / FAQ | F01 | Sí, pero son valores de 2026. Resolución Exenta N.° 05023 de la UTEM (25-11-2025) y Oferta Académica 2027 (arancel referencial 2026) | María | 12-11-2026 | Indicar el año 2026 en el sitio |

## 2. Prueba con usuarios (mínimo 3 personas del público objetivo)

Antes de empezar, pedir consentimiento (mismo texto de la Fase B; autorización de tutor si es menor). Los respaldos de consentimiento se guardan fuera del repositorio.

**Instrucciones:** "Te pediré que uses la página como si estuvieras decidiendo si postular. Piensa en voz alta. No estoy evaluándote a ti, sino a la página."

**Tareas** (anotar si lo logró sin ayuda, el tiempo aproximado y comentarios):

| # | Tarea |
|---|---|
| T1 | Encuentra cuántos semestres dura la carrera. |
| T2 | Encuentra el plan de estudios y qué se ve en el primer año. |
| T3 | Averigua si la carrera está acreditada y hasta cuándo. |
| T4 | Averigua cómo postular y en qué fechas. |
| T5 | Encuentra cuánto cuesta estudiar la carrera. |
| T6 | Averigua en qué se diferencia de Ingeniería Civil en Computación. |
| T7 | Dime de dónde sale el dato de empleabilidad. |

**Registro por participante**

PENDIENTE: completar con los resultados reales de cada persona.

| Participante (código) | Dispositivo | T1 | T2 | T3 | T4 | T5 | T6 | T7 | ¿Encontró respuesta a su duda principal? | Comentarios |
|---|---|---|---|---|---|---|---|---|---|---|
| U1 | | | | | | | | | | |
| U2 | | | | | | | | | | |
| U3 | | | | | | | | | | |

Marcar cada tarea con: ✔ sin ayuda / ~ con dificultad / ✘ no lo logró.

## 3. Hallazgos y correcciones aplicadas

### Hallazgos de la revisión cruzada

| # | Hallazgo (qué pasó y a quién) | Gravedad (alta/media/baja) | Corrección aplicada | Evidencia (commit o captura) |
|---|---|---|---|---|
| 1 | El folleto antiguo de la carrera muestra empleabilidad de 89,6 % y 95,3 % sin año, y una acreditación que venció en septiembre de 2025 | Media | El sitio usa Mi Futuro, que declara de dónde salen los datos. El folleto no se usa como fuente | Informe, sección 3, punto 3 |
| 2 | Mi Futuro muestra acreditación institucional de "4 años", dato desactualizado. Mi Futuro mismo indica revisar la CNA | Media | El sitio usa la acreditación vigente de 5 años (ver Informe, sección 3). PENDIENTE: confirmar en la CNA | Informe, sección 3, punto 2 |
| 3 | La matrícula y el arancel son valores de 2026, no de 2027 | Media | PENDIENTE: indicar "2026" junto al valor en el sitio | |
| 4 | La resolución de 2022 nombra el grado "Licenciado en Ingeniería Informática" y la página oficial de la carrera "Licenciado en Informática" | Baja | El sitio usa el nombre de la página oficial. Declarado en Limitaciones | Informe, sección 9 |

### Hallazgos de la prueba con usuarios

| # | Hallazgo (qué pasó y a quién) | Gravedad (alta/media/baja) | Corrección aplicada | Evidencia (commit o captura) |
|---|---|---|---|---|
| 1 | PENDIENTE | | | |
| 2 | PENDIENTE | | | |
| 3 | PENDIENTE | | | |

## 4. Evidencias

Capturas de pantalla de la prueba, consentimientos (fuera del repositorio) y commits que aplican cada corrección. Las capturas de Mi Futuro, PageSpeed y CompliaScan están en `docs/evidencias/`.
