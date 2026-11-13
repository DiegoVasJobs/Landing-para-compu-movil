# Fase E. Registro de validación

## 1. Revisión cruzada de afirmaciones

Cada integrante verifica las cifras del sitio contra la fuente primaria (no la comparte quien la redactó). Fecha de consulta de todas las fuentes: 12-11-2026.

| Afirmación en el sitio | Sección | Fuente (ID) | Coincide con la fuente (sí/no) | Revisó | Fecha | Corrección |
|---|---|---|---|---|---|---|
| 8 semestres, 240 créditos SCT | Portada / Plan de estudios | F01, F02 | Sí. Resolución Exenta N.° 03102 (2 de agosto de 2022): 8 semestres y 240 SCT. Coincide con la malla del portal estudiantil (30 SCT por semestre) | María y Diego | 12-11-2026 | |
| 150 vacantes, código 21030 | Portada | F01, F02 | Sí. Oferta Académica UTEM Admisión 2027 y página oficial de la carrera: 150 vacantes y código 21030 | María y Diego | 12-11-2026 | Las vacantes son referenciales según la propia UTEM |
| Empleabilidad al 1.er año 87,1 % | Campo laboral | F04, F05 | Sí. Mi Futuro, ficha de la carrera: 87,1 % | María y Diego | 12-11-2026 | Año del dato según la metodología (F05): titulados 2021 a 2023, ingresos 2022 a 2024 |
| Empleabilidad al 2.º año 96,5 % | Campo laboral | F04, F05 | Sí. Mi Futuro: 96,5 % | María y Diego | 12-11-2026 | Titulados 2020 a 2022, ingresos 2022 a 2024 (F05) |
| Ingreso $2,2 a $2,3 millones | Campo laboral | F04, F05 | Sí. Mi Futuro: de $2.200.000 a $2.300.000 al 4.º año | María y Diego | 12-11-2026 | Titulados 2018 a 2020, ingreso al 4.º año, en pesos de septiembre de 2025 (F05) |
| Retención 1.er año 90,1 % | Campo laboral | F04, F05 | Sí. Mi Futuro: 90,1 % | María y Diego | 12-11-2026 | Estudiantes que ingresaron en 2024 y siguieron en 2025 (F05) |
| Duración real 12,9 semestres | Campo laboral | F04, F05 | Sí. Mi Futuro: 12,9 semestres | María y Diego | 12-11-2026 | Titulados de 2024 (F05) |
| Acreditación institucional 5 años, hasta oct. 2031 | Respaldo | F06, F11 | Sí. Verificada en el buscador de la Comisión Nacional de Acreditación: 5 años, nivel Avanzado, hasta octubre de 2031 | Diego | 12-11-2026 | Un comunicado de prensa del 15-10-2026 respalda "5 años hasta octubre de 2031". La ficha de oferta 2027 de la UTEM (anterior a la reposición) dice "hasta marzo de 2030". Mi Futuro muestra "4 años" (dato desactualizado) |
| Certificación de la carrera 2025 a 2030 | Respaldo | F01 | Sí, solo en F01: certificada por 5 años, del 16-06-2025 al 16-06-2030, por la Agencia Acreditadora de Chile y el CONAIC. No aparece en el buscador de la CNA (se probó con y sin filtro de agencia) | María y Diego | 12-11-2026 | Una sola fuente. Declarado en Limitaciones |
| Ponderaciones de admisión | Admisión | F01 | Sí. NEM 10, ranking 25, lectora 20, M1 30, ciencias o historia 10, M2 5 (suman 100 %). Promedio mínimo 458. Coincide en la página de la carrera y en la Oferta Académica 2027 | María y Diego | 12-11-2026 | |
| Fechas clave 2027 | Admisión | F07 | Sí. Las 5 fechas del sitio coinciden con el calendario DEMRE 2027 | Diego | 12-11-2026 | |
| Matrícula $90.000 y arancel $4.763.300 | Admisión / FAQ | F01 | Sí, pero son valores de 2026. Resolución Exenta N.° 05023 de la UTEM (25-11-2025) y Oferta Académica 2027 (arancel referencial 2026) | María y Diego | 12-11-2026 | Indicar el año 2026 en el sitio |

## 2. Prueba con usuarios

**Método.** Prueba no moderada mediante un formulario de Google, realizada el 12-11-2026 entre las 22:31 y las 22:37, sobre la versión publicada a las 21:24 de ese día (commit `2e847ff`, con el diseño final). Las correcciones de la sección 3 se aplicaron después, en una versión nueva. Cada persona abrió el sitio publicado y, en el formulario, escribió **lo que encontró** en cada tarea y qué tan fácil le resultó. Así se puede comprobar si la respuesta era correcta, y no solo si la persona dice haberla encontrado. La primera pregunta pedía el consentimiento (y la autorización del apoderado para menores de 18 años). La hoja de respuestas, con fecha y hora, se guarda fuera del repositorio y está disponible para el docente.

**Participantes** (público objetivo; pueden coincidir o no con los de la Fase B):

| Código | Perfil | Dispositivo | Consentimiento |
| --- | --- | --- | --- |
| U1 | Egresado/a de enseñanza media | Celular | Sí (18 años o más) |
| U2 | 4.° medio | Computador | Sí (18 años o más) |
| U3 | 4.° medio | Celular | Sí, con autorización del apoderado |

**Tareas:**

| # | Tarea | Respuesta correcta en el sitio |
| --- | --- | --- |
| T1 | ¿Cuántos semestres dura la carrera? | 8 semestres |
| T2 | Busca el plan de estudios: escribe 2 asignaturas del primer año | Cualquiera de los semestres 1 y 2 |
| T3 | ¿La carrera o la universidad está acreditada? ¿Hasta cuándo? | UTEM hasta octubre de 2031; carrera certificada hasta junio de 2030 |
| T4 | ¿Cuáles son las formas de postular y en qué fechas se postula? | PAES, Acceso Directo y Programas de inclusión; postulación del 4 al 7 de enero de 2027 |
| T5 | ¿Cuánto cuesta estudiar la carrera? | Matrícula $90.000 y arancel $4.763.300 (2026) |
| T6 | ¿En qué se diferencia de Ingeniería Civil en Computación? | Duración (8 y 11 semestres), grado y enfoque |
| T7 | ¿De qué fuente sale el dato de empleabilidad? | Mi Futuro (F04, F05) |

**Registro por participante.** ✔ respuesta correcta y fácil · ~ respuesta parcial o le costó · ✘ respuesta incorrecta o no encontrada.

| Código | T1 | T2 | T3 | T4 | T5 | T6 | T7 | ¿Encontró respuesta a su duda principal? | Comentarios |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| U1 | ✔ 8 semestres | ~ correcta, le costó | ~ "5 años", sin fecha; le costó | ~ PAES y acceso directo, sin fechas; le costó | ✔ "4.700.000 aprox." | ✔ duración y complejidad de proyectos | ~ "mifuturo.cl"; le costó | No | Lo más difícil: "las formas de postular". Sugirió que el formulario permitiera avanzar sin responder |
| U2 | ✔ 8 | ✘ "Inglés y programación general" (Inglés es del 3.er año) | ~ "5 años, 2030": mezcló universidad y carrera; le costó | ~ PAES y acceso directo, "2027", sin fechas exactas; le costó | ✔ $4.763.300 | ✔ correcta | ✘ indicó la página de la UTEM; le costó | En parte | Lo más difícil: la diferencia con Civil en Computación. Cambiaría "el orden de los datos" |
| U3 | ✔ 8 semestres | ✔ correcta | ~ "5 años", sin fecha | ~ las 3 vías, sin fechas; le costó | ✔ arancel y matrícula | ~ correcta, le costó | ✔ Mi Futuro, Ministerio de Educación | Sí | Lo más difícil: la diferencia entre ingenierías. Pidió "una estructura más cómoda para celular" |

**Resumen.** T1 y T5 fueron resueltas por las 3 personas sin dificultad. Nadie indicó hasta cuándo está acreditada la universidad (T3) ni las fechas de postulación (T4). Una persona encontró respuesta a su duda principal, otra en parte y otra no.

## 3. Hallazgos y correcciones aplicadas

### Hallazgos de la revisión cruzada

| # | Hallazgo (qué pasó y a quién) | Gravedad (alta/media/baja) | Corrección aplicada | Evidencia (commit o captura) |
|---|---|---|---|---|
| 1 | El folleto antiguo de la carrera muestra empleabilidad de 89,6 % y 95,3 % sin año, y una acreditación que venció en septiembre de 2025 | Media | El sitio usa Mi Futuro, que declara de dónde salen los datos. El folleto no se usa como fuente | Informe, sección 3, punto 3 |
| 2 | Mi Futuro muestra acreditación institucional de "4 años", dato desactualizado. Mi Futuro mismo indica revisar la CNA | Media | El sitio usa la acreditación más reciente de 5 años (ver Informe, sección 3). Contrastada por Diego en el buscador de la CNA el 12-11-2026 | Informe, sección 3, punto 2 |
| 3 | La matrícula y el arancel son valores de 2026, no de 2027 | Media | Resuelto: la sección Admisión muestra "Costos 2026" y la pregunta frecuente dice "En 2026" | Sitio publicado |
| 4 | La resolución de 2022 nombra el grado "Licenciado en Ingeniería Informática" y la página oficial de la carrera "Licenciado en Informática" | Baja | El sitio usa el nombre de la página oficial. Declarado en Limitaciones | Informe, sección 9 |

### Hallazgos de la prueba con usuarios

| # | Hallazgo (qué pasó y a quién) | Gravedad (alta/media/baja) | Corrección aplicada | Evidencia (commit o captura) |
|---|---|---|---|---|
| 1 | Nadie indicó hasta cuándo está acreditada la universidad (U1, U2, U3); U2 confundió la acreditación de la universidad (2031) con la certificación de la carrera (2030) | Alta | El valor destacado de cada tarjeta muestra la fecha de término ("Hasta octubre de 2031" y "Hasta junio de 2030") y la tarjeta se titula "Acreditación de la universidad" para diferenciarla de la carrera | Commit "Aplica correcciones de la prueba con usuarios" |
| 2 | Nadie encontró las fechas de postulación (U1, U2, U3); U1 lo señaló como lo más difícil y U2 pidió cambiar el orden de los datos | Alta | Aviso destacado al inicio de la sección Admisión: "Postulación a carreras 2027: 4 al 7 de enero de 2027", con su fuente | Mismo commit |
| 3 | La diferencia con Civil en Computación costó a U2 y U3, que en el celular veían una tabla ancha con desplazamiento lateral; U3 pidió una estructura más cómoda para celular | Media | En pantallas menores a 768 px la tabla comparativa se muestra como tarjetas apiladas, con la etiqueta de cada dato | Mismo commit |
| 4 | U2 indicó la página de la UTEM como fuente de la empleabilidad y a U1 le costó encontrarla: la fuente solo aparecía como cita [F04] | Media | Bajo "Indicadores de titulados" se escribe el nombre de la fuente: Mi Futuro, del Ministerio de Educación | Mismo commit |
| 5 | U2 nombró Inglés como asignatura del primer año (es del tercero): los semestres no indicaban a qué año corresponden | Media | Cada semestre muestra su año: "Año 1 · Semestre 1" | Mismo commit |
| 6 | U1 señaló que el formulario de la prueba obligaba a escribir algo aunque no encontrara el dato (se pedía escribir "no lo encontré") | Baja | Se registra como limitación del instrumento de prueba; no afecta al sitio | Este registro |

## 4. Evidencias

Hoja de respuestas de la prueba con fecha, hora y consentimiento de cada participante (fuera del repositorio, disponible para el docente) y el commit que aplica las correcciones. Las capturas de Mi Futuro, PageSpeed y CompliaScan están en `docs/evidencias/`.
