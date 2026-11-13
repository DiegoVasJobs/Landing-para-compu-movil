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

| Nombre completo | Correo institucional | Carrera | Usuario GitHub |
| --- | --- | --- | --- |
| Diego Vásquez Castillo | dvasquezca@utem.cl | Ingeniería en Informática | DiegoVasJobs |
| María García Huarca | mgarciah@utem.cl | Ingeniería en Informática | xxt-cote |

---

## 1. Resumen

Construimos una página web de una sola vista que presenta la carrera Ingeniería en Informática (código DEMRE 21030, Campus Macul) a estudiantes de 3.° y 4.° medio, a sus familias y a personas de 20 años o más que buscan estudiar o cambiar de carrera.

La regla que guió todo el trabajo fue: **ninguna cifra sin su fuente**. Cada dato del sitio muestra su año y una cita [Fnn] que lleva a la sección Referencias, donde está la dirección completa de la fuente oficial (como texto, para que la página no derive a otros sitios). El sistema está construido para que sea imposible publicar un dato que cite una fuente inexistente.

Primero investigamos y planificamos el contenido (fases A a E). Solo después diseñamos y programamos el sitio.

## 2. ¿Por qué este enfoque?

Las páginas de promoción de carreras suelen usar frases como "la mejor carrera" sin respaldo. El encargo pedía lo contrario: información verificable y honesta. Por eso:

- Preferimos **fuentes primarias**: la propia universidad, el Ministerio de Educación y el DEMRE.
- Mostramos también los datos menos atractivos. Por ejemplo, la carrera dura formalmente 8 semestres, pero en promedio se tarda 12,9 en terminarla. Creemos que un postulante bien informado toma mejores decisiones.
- Separamos visualmente lo que es **dato oficial**, lo que es **interpretación del equipo** y lo que es **testimonio**.

## 3. Fase A: búsqueda y evaluación de fuentes

Reunimos 14 fuentes, 12 de ellas primarias. Cada una fue evaluada con cinco criterios: autoridad, vigencia, trazabilidad, objetividad y pertinencia. La matriz completa está en el Anexo A.

### Decisiones importantes

Al comparar fuentes encontramos diferencias entre documentos oficiales. Las resolvimos así:

1. **La malla de la web no coincidía con la resolución oficial.** Usamos la Resolución Exenta N.° 03102 de 2022, porque es el documento con validez legal y el único que informa los créditos de cada asignatura.
2. **Mi Futuro informaba 4 años de acreditación.** Su dato era de octubre de 2025. Usamos la acreditación más reciente de 5 años, informada por la UTEM en octubre de 2026.
3. **El folleto mostraba otra empleabilidad sin indicar el año.** Usamos Mi Futuro, porque declara a qué generaciones corresponde cada dato y cómo se calcula.

## 4. Fase B: análisis de audiencia

Aplicamos un cuestionario breve de 8 preguntas a **7 personas** del público objetivo (códigos P1 a P7). Todas aceptaron participar. El formulario pedía la autorización del apoderado a las personas menores de 18 años; la única participante menor de edad respondió con esa autorización. Los respaldos de consentimiento se guardan fuera del repositorio y están disponibles para el docente. El análisis completo y el instrumento están en el Anexo B.

**Quiénes respondieron.** 3 egresados de enseñanza media, 2 estudiantes de 4.° medio y 2 personas de 20 años o más que quieren estudiar o cambiar de carrera.

**Qué les importa para decidir** (cada persona marcó 3 temas):

| Tema | Personas (de 7) |
| --- | --- |
| Costo, becas y gratuidad | 6 |
| Qué se estudia (malla) | 5 |
| Empleabilidad y sueldos | 5 |
| Duración real | 3 |
| Acreditación | 1 |
| Puntajes y ponderaciones | 1 |

**Canales.** 5 de 7 buscan información en Google (una de las opciones incluía Mi Futuro y DEMRE), 3 en el sitio de la universidad y 2 en TikTok. Las 7 personas verían la página desde el **celular**.

**Dudas y temores.** Tres mencionaron la dificultad (matemáticas, "no poder con los ramos"). Dos mencionaron el campo laboral: que no exista, o que el mercado esté saturado para recién egresados. Una persona dudó entre Ingeniería en Informática y otras carreras de tecnologías de la información.

**Qué las haría desconfiar de una página.** Una interfaz antigua o desordenada (2 personas). Las demás respuestas fueron distintas entre sí: que la carrera no esté acreditada, que falte información básica (malla, acreditación, duración), que tenga poca reputación, que sea muy insistente o lo muestre todo muy fácil, y que no transmita confianza o seguridad (1 persona cada una).

**Persona (perfil de usuario).** Una persona egresada de enseñanza media, que ya decidió estudiar en general pero compara opciones. Llega desde Google o desde el sitio de la universidad, usando el celular. Lo primero que quiere saber es cuánto cuesta, qué se estudia y cuánto ganará al titularse. Teme que la carrera sea demasiado difícil o que haya poco trabajo. Desconfía de las páginas desordenadas, insistentes o que omiten datos básicos.

**Preguntas priorizadas** (por frecuencia en las respuestas):

1. ¿Cuánto cuesta y hay becas o gratuidad? (6 de 7)
2. ¿Qué se estudia? (5 de 7)
3. ¿Cuánto se gana y hay trabajo? (5 de 7)
4. ¿Cuánto dura realmente la carrera? (3 de 7)
5. ¿Qué tan difícil es? (3 de 7)

Además, una persona pidió ver opiniones de estudiantes, otra pidió la acreditación y la malla, y otra preguntó por el valor de los aranceles.

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
| 8 | Preguntas frecuentes | Dudas reales de la encuesta, ordenadas por frecuencia |
| 9 | Referencias | ¿De dónde sale cada dato? |

**Qué muestra la encuesta sobre el orden.** Los tres temas más marcados fueron costo (6 de 7), malla (5 de 7) y empleabilidad (5 de 7). La malla y el campo laboral van en las posiciones 4 y 5, antes del respaldo institucional y la admisión. Los costos están en Admisión, que es la posición 7. Para que no queden escondidos, el botón "Cómo postular" de la portada lleva directo a esa sección. Las 7 personas usarían el celular, así que el orden se pensó para una lectura vertical en pantalla pequeña. Una persona desconfiaría si faltara información básica (malla, acreditación, duración) y otra si la carrera no estuviera acreditada, por eso esos datos aparecen completos y con su fuente.

La justificación de cada posición, los wireframes y la tabla que relaciona cada sección con sus fuentes están en el Anexo C.

## 6. Fase D: redacción

Todos los textos siguen una guía de estilo común (Anexo D): oraciones de menos de 25 palabras, siglas explicadas la primera vez y cada cifra con su año y su cita.

Los textos no están escritos dentro del código. Están en archivos de datos separados por sección (`src/content/`). Así, una persona de la Escuela puede actualizarlos sin programar (ver [README](README.md)).

## 7. Fase E: validación

**Revisión cruzada de cifras.** Revisamos 12 afirmaciones con cifras del sitio contra su fuente primaria (resolución de la malla, páginas oficiales de la UTEM, Oferta Académica 2027, Mi Futuro y DEMRE). Las 12 coinciden con su fuente; la acreditación institucional se contrastó además con el buscador de la Comisión Nacional de Acreditación. Durante la revisión encontramos diferencias entre documentos oficiales (por ejemplo, el folleto antiguo con una acreditación vencida y la acreditación de "4 años" de Mi Futuro) y las resolvimos usando la fuente más reciente. Detalle en el Anexo E.
**Prueba con usuarios.**

Tres personas del público objetivo (un egresado de enseñanza media y dos estudiantes de 4.° medio, una de ellas menor de edad con autorización de su apoderado) probaron el sitio publicado el 12 de noviembre de 2026. Usamos un formulario en el que cada persona escribía lo que encontraba en 7 tareas concretas, para comprobar si la respuesta era correcta y no solo si decía haberla encontrado.

Todas encontraron la duración y el costo sin dificultad. Sin embargo, **nadie indicó hasta cuándo está acreditada la universidad ni las fechas de postulación**: esos datos estaban en el sitio, pero poco visibles. Además, la comparación con Ingeniería Civil en Computación resultó incómoda en el celular, una persona no reconoció la fuente de la empleabilidad y otra confundió el año de una asignatura.

A partir de esto aplicamos cinco correcciones: la fecha de término de la acreditación se muestra en grande, las fechas de postulación aparecen en un aviso al inicio de Admisión, la tabla comparativa se convierte en tarjetas en el celular, el nombre de la fuente de los indicadores se escribe en el texto y cada semestre de la malla indica su año. Una persona encontró respuesta a su duda principal, otra en parte y otra no; las correcciones apuntan justamente a lo que les faltó. Detalle en el Anexo E.

## 8. Decisiones de implementación (explicadas sin tecnicismos)

| Decisión | Qué significa | Por qué la tomamos |
| --- | --- | --- |
| **Astro** como herramienta | Genera páginas HTML listas antes de publicarlas | Requisito del encargo. Además, la página carga muy rápido porque el navegador casi no tiene que procesar nada |
| **Sitio estático** | La página es igual para todos y no usa base de datos | Es más rápido, más seguro y gratuito de publicar |
| **Datos separados del diseño** | La información está en archivos de texto (`src/content/`) | Permite actualizar un dato sin tocar el diseño ni saber programar |
| **Reglas que validan los datos** | Antes de publicar se revisa cada dato | Si se cita una fuente que no existe, si la malla no suma 240 créditos o si las ponderaciones no suman 100 %, **la publicación se detiene**. Lo comprobamos a propósito (Anexo F) |
| **TypeScript estricto** | Revisión automática del código antes de publicar | Detecta errores antes de que lleguen a la página |
| **Una pieza (componente) por sección** | Cada sección es un archivo independiente | Facilita encontrar y modificar cada parte |
| **Casi cero JavaScript** | Solo un script pequeño para filtrar la malla por año | El filtro ayuda a no perderse entre 44 asignaturas. Si el script no carga, la malla completa se sigue viendo |
| **Accesibilidad (WCAG 2.2)** | Contraste suficiente, navegación con teclado, enlace "saltar al contenido", etiquetas con texto (no solo color) | La página debe poder usarla cualquier persona, incluidas personas con discapacidad |
| **Diseño para celular primero** | Se diseñó primero para 360 px y luego para 768 y 1280 px | El público objetivo es joven y suele navegar desde el celular. En la encuesta, las 7 personas dijeron que verían la página desde el celular |
| **SEO básico** | Título, descripción, idioma `es-CL`, sitemap y vista previa para redes sociales | Para que aparezca bien en Google y al compartir el enlace |
| **Publicación automática** | GitHub publica la página cada vez que se guarda un cambio | Nadie tiene que publicar a mano y nunca se publica una versión con errores |

### Resultados de calidad

Mediciones sobre el sitio publicado, realizadas el 12 de noviembre de 2026. Las capturas están en la carpeta `evidencias/` del repositorio.

| Herramienta | Resultado |
| --- | --- |
| PageSpeed, celulares (Rendimiento / Accesibilidad / Buenas prácticas / SEO) | 100 / 100 / 100 / 100 |
| PageSpeed, escritorio (Rendimiento / Accesibilidad / Buenas prácticas / SEO) | 100 / 100 / 100 / 100 |
| CompliaScan | 95/100 (59 reglas revisadas, 49 aprobadas, 1 problema de gravedad "seria", marcado como probable: la herramienta no detectó un enlace para saltar la navegación) |

La medición anterior de CompliaScan había sido 89/100. La actual (95/100) supera el mínimo de 90 que pide el encargo.

## 9. Limitaciones

- **Malla:** la web de la carrera muestra una malla distinta a la resolución de 2022. Si existe un plan más nuevo aún no publicado en Transparencia, habría que actualizar `malla.json` cuando se publique.
- **Datos de empleabilidad:** corresponden a generaciones tituladas entre 2018 y 2023. Son los más recientes publicados, pero no reflejan necesariamente el mercado actual.
- **Certificación de la carrera:** los datos (2025 a 2030) provienen solo de la página oficial de la carrera. La carrera no aparece en el buscador de la CNA, por lo que no pudimos contrastarlos con una segunda fuente.
- **Costos:** la matrícula ($90.000) y el arancel ($4.763.300) son valores de 2026 y la UTEM los entrega como referenciales. Pueden cambiar para la admisión 2027.
- **Fechas de admisión:** corresponden al proceso 2027 (F07). Deben actualizarse antes de cada nuevo proceso.
- **Cuerpo académico:** no se publicó, porque no encontramos un dato oficial y verificable para la carrera.
- **Nombre del grado:** la resolución de 2022 dice "Licenciado en Ingeniería Informática" y la página oficial de la carrera dice "Licenciado en Informática". El sitio usa el nombre de la página oficial.

## 10. Distribución del trabajo

Ambos integrantes buscamos información por separado y luego la discutimos juntos. Acordamos qué datos incluir según lo que podía ser útil para un postulante y según lo que a nosotros mismos nos habría gustado saber al elegir carrera. Usamos Claude como asistente en varias tareas, según se detalla en el Anexo G; las decisiones, el trabajo con personas reales, la verificación de datos y la revisión final fueron nuestras.

| Integrante | Aportes principales |
| --- | --- |
| Diego Vásquez Castillo | Definición de la carrera y del alcance del proyecto. Organización del trabajo y reparto de tareas. Creación del repositorio, configuración de GitHub Pages y gestión de colaboradores. Preparación, difusión y cierre de la encuesta de la Fase B (7 respuestas reales con consentimiento). Verificación de las 12 cifras del sitio contra su fuente, incluida la acreditación en el buscador de la CNA. Revisión y aprobación de los contenidos, del informe y del anexo de IA antes de publicarlos. Prueba con usuarios junto con María. |
| María García Huarca | Rediseño visual del sitio (portada, íconos y logo propios, gráficos de créditos y de duración). Foto propia del campus. Análisis de la encuesta (Fase B) y justificación del orden de secciones con sus resultados (Fase C). Verificación de 10 de las 12 cifras del sitio contra su fuente (Fase E). Búsqueda de las fuentes F14 a F16. Mediciones de calidad con PageSpeed y CompliaScan. Prueba con usuarios junto con Diego. |

## 11. Glosario

Términos ordenados alfabéticamente, explicados para lectores sin formación técnica.

| Término | Definición | En este proyecto |
| --- | --- | --- |
| Accesibilidad | Cualidad de un sitio que permite usarlo a personas con discapacidad visual, auditiva, motora o cognitiva. | Se siguió la norma WCAG 2.2, nivel AA. |
| Acreditación | Certificación pública de que una institución o carrera cumple estándares de calidad durante un período de años. | Sección Respaldo institucional. |
| APA 7 | Séptima edición de las normas de la American Psychological Association para citar fuentes. | Formato de la sección Referencias y de la matriz de fuentes. |
| Arquitectura de información | Organización y orden del contenido para que el usuario encuentre lo que busca. | Orden de las 9 secciones (Fase C). |
| Astro | Herramienta para construir sitios web que entrega páginas HTML listas y el mínimo de JavaScript. | Tecnología con la que se construyó el sitio. |
| Build (compilación) | Proceso que transforma el código en los archivos finales que se publican. | Se detiene si un dato no cumple su esquema. |
| CNA | Comisión Nacional de Acreditación, organismo público que acredita instituciones y carreras en Chile. | Fuente de la acreditación institucional. |
| Colección de contenido | Conjunto de archivos de datos del mismo tipo que Astro lee y valida automáticamente. | Malla, campo laboral, preguntas frecuentes, referencias y otras. |
| Commit | Registro de un cambio guardado en el repositorio, con autor, fecha y descripción. | Evidencia del aporte de cada integrante. |
| Componente | Pieza reutilizable de una página web, como una tarjeta o una sección. | Un componente por sección del sitio. |
| DEMRE | Departamento de Evaluación, Medición y Registro Educacional, a cargo del proceso de admisión. | Fuente de las fechas de admisión 2027. |
| Empleabilidad | Porcentaje de titulados que obtiene ingresos de al menos el sueldo mínimo tras un período desde la titulación. | Dato de Mi Futuro en la sección Campo laboral. |
| Esquema | Regla que define qué campos y tipos de dato debe tener un archivo. | Impide publicar datos incompletos o mal escritos. |
| Fuente primaria | Documento emitido por quien produce o es responsable del dato. | Por ejemplo, la resolución de la malla o Mi Futuro. |
| Fuente secundaria | Documento que interpreta, resume o comenta datos producidos por otros. | Solo se usó como complemento. |
| GitHub Pages | Servicio gratuito de GitHub que publica sitios web a partir de un repositorio. | Lugar donde está publicada la página. |
| Landing page | Página web de una sola vista con un objetivo concreto, como informar y motivar una postulación. | Producto final del proyecto. |
| Lighthouse | Herramienta de Google que mide rendimiento, accesibilidad, buenas prácticas y SEO, de 0 a 100. | Usada mediante PageSpeed Insights. |
| Malla curricular | Representación del plan de estudios: asignaturas por semestre. | Sección Plan de estudios. |
| Mi Futuro | Portal del Ministerio de Educación con datos de empleabilidad, ingresos y duración de carreras. | Fuente de los indicadores laborales. |
| NEM | Notas de Enseñanza Media: promedio de notas convertido a puntaje. | Ponderación de admisión. |
| Open Graph | Metadatos que definen cómo se ve un enlace al compartirlo en redes sociales. | Título, descripción e imagen al compartir la página. |
| PAES | Prueba de Acceso a la Educación Superior. | Vía regular de admisión. |
| Perfil de egreso | Declaración oficial de lo que sabrá hacer quien se titula. | Sección Perfil de egreso, en lenguaje claro. |
| Perfil de usuario (persona) | Descripción de un usuario representativo construida con datos reales de la audiencia. | Resultado de la encuesta (Fase B). |
| Repositorio | Espacio donde se guarda el código y su historial de cambios. | https://github.com/DiegoVasJobs/Landing-para-compu-movil |
| Responsivo | Diseño que se adapta a distintos tamaños de pantalla. | Revisado en 360, 768 y 1280 píxeles de ancho. |
| SCT | Sistema de Créditos Transferibles de Chile; mide toda la carga de trabajo del estudiante. | 240 créditos SCT en la malla. |
| SEO | Prácticas que ayudan a que una página aparezca bien en buscadores como Google. | Título, descripción, sitemap e idioma. |
| SIES | Servicio de Información de Educación Superior del Ministerio de Educación. | Produce los datos que publica Mi Futuro. |
| Sitio estático | Sitio cuyas páginas se generan una vez y se entregan iguales a todos, sin base de datos. | Tipo de sitio construido. |
| Trazabilidad | Posibilidad de seguir una afirmación hasta su origen verificable. | Cada cifra enlaza a su fuente en Referencias. |
| TypeScript | Lenguaje que agrega tipos de datos a JavaScript para detectar errores antes de publicar. | Usado en modo estricto. |
| WCAG | Pautas internacionales de accesibilidad web del W3C. | Versión 2.2, nivel AA. |
| Wireframe | Boceto simple que muestra la ubicación de los elementos de una página, sin diseño final. | Bocetos de móvil y escritorio (Fase C). |

---

## Anexos

- **Anexo A.** Matriz de fuentes
- **Anexo B.** Instrumento y análisis de audiencia
- **Anexo C.** Mapa de contenidos y wireframes
- **Anexo D.** Guía de estilo de redacción
- **Anexo E.** Registro de validación (revisión cruzada y prueba con usuarios)
- **Anexo F.** Evidencia técnica de validación de datos
- **Anexo G.** Declaración de uso de inteligencia artificial
- **Anexo H.** Guía técnica del código

### Anexo A. Matriz de fuentes

Principio rector: toda afirmación del sitio debe poder rastrearse hasta una fuente identificada, vigente y de autoridad reconocida. Las fuentes se identifican con un ID (F01, F02, …) que es el mismo que aparece en las citas del sitio y en `src/content/referencias.json`.

#### 1. Identificación de las fuentes

| ID | Referencia (APA 7) | Tipo | Fecha del dato | Fecha de consulta | Sección del sitio donde se usa |
| --- | --- | --- | --- | --- | --- |
| F01 | Universidad Tecnológica Metropolitana. (s.f.). *Ingeniería en Informática*. Recuperado el 11 de noviembre de 2026, de https://www.utem.cl/carreras/ingenieria-en-informatica/ | Primaria | 2026 | 11-11-2026 | Portada, Sobre la carrera, Perfil, Campo laboral, Respaldo, Admisión, Preguntas |
| F02 | Universidad Tecnológica Metropolitana. (2022). *Resolución Exenta N.° 03102: Aprueba el rediseño de la carrera de Ingeniería en Informática (21030), plan regular*. https://transparencia.utem.cl/wp-content/uploads/2022/09/DJ-596-RES3102DE2022-REDISE%C3%91O-CARRERA-INGENIERIA-EN-INFORMATICA-.pdf | Primaria | 2022 | 11-11-2026 | Portada, Plan de estudios, Respaldo, Preguntas |
| F03 | Universidad Tecnológica Metropolitana. (2024). *Ingeniería en Informática* [Folleto de carrera]. https://www.utem.cl/wp-content/uploads/2026/05/INGENIERIA_EN_INFORMATICA_UTEM.pdf | Primaria | 2024 | 11-11-2026 | Perfil, Campo laboral |
| F04 | Servicio de Información de Educación Superior. (2025). *Buscador de empleabilidad e ingresos: Universidad Tecnológica Metropolitana, Ingeniería en Informática* [Base de datos]. Mi Futuro, Ministerio de Educación. https://www.mifuturo.cl/buscador-de-empleabilidad-e-ingresos/ | Primaria | 2025 (cohortes 2018–2024) | 11-11-2026 | Campo laboral, Preguntas |
| F05 | Servicio de Información de Educación Superior. (2025). *Metodología buscador de empleabilidad e ingresos 2025-2026*. Ministerio de Educación. https://www.mifuturo.cl/wp-content/uploads/2025/12/Metodologia-Buscador-Empleabilidad-e-Ingresos_2025-2026.pdf | Primaria | 2025 | 11-11-2026 | Campo laboral, Preguntas |
| F06 | Universidad Tecnológica Metropolitana. (2026, 18 de octubre). *UTEM acreditada nivel Avanzado*. Noticias UTEM. https://noticias.utem.cl/2026/10/18/utem-acreditada-nivel-avanzado/ | Secundaria | 2026 | 11-11-2026 | Respaldo, Preguntas |
| F07 | Departamento de Evaluación, Medición y Registro Educacional. (2026). *Calendario proceso de admisión 2027*. Universidad de Chile. https://demre.cl/calendario/calendario-proceso-2027 | Primaria | 2026 | 11-11-2026 | Admisión |
| F08 | Universidad Tecnológica Metropolitana. (s.f.). *Ingeniería Civil en Computación mención Informática*. https://www.utem.cl/carreras/ingenieria-civil-en-computacion-mencion-informatica/ | Primaria | 2026 | 11-11-2026 | Sobre la carrera, Preguntas |
| F09 | Universidad Tecnológica Metropolitana. (s.f.). *Ingeniería Civil en Ciencia de Datos*. https://www.utem.cl/carreras/ingenieria-civil-en-ciencia-de-datos/ | Primaria | 2026 | 11-11-2026 | Sobre la carrera |
| F10 | Universidad Tecnológica Metropolitana. (s.f.). *Admisión*. https://www.utem.cl/admision/ | Primaria | 2026 | 11-11-2026 | Admisión |
| F11 | Universidad Tecnológica Metropolitana. (2026, 2 de abril). *La UTEM se acredita en nivel Avanzado y suma ámbito de Investigación*. Consorcio de Universidades del Estado de Chile. https://www.uestatales.cl/la-utem-se-acredita-en-nivel-avanzado-y-suma-ambito-de-investigacion/ | Secundaria | 2026 | 11-11-2026 | Respaldo |
| F14 | Universidad Tecnológica Metropolitana. (s.f.). *Acceso Directo UTEM*. https://accesodirecto.utem.cl/ | Primaria | 2026 | 12-11-2026 | Admisión |
| F15 | Universidad Tecnológica Metropolitana. (s.f.). *Programas de inclusión y acceso a la educación superior*. https://www.utem.cl/admision/programas-de-inclusion-y-equidad/ | Primaria | 2026 | 12-11-2026 | Admisión |
| F16 | Universidad Tecnológica Metropolitana. (s.f.). *Preguntas frecuentes de admisión*. https://www.utem.cl/admision/preguntas-frecuentes/ | Primaria | 2026 | 12-11-2026 | Admisión |

Resumen: **14 fuentes, 12 primarias y 2 secundarias** (el mínimo exigido es 8, con al menos 5 primarias). Los IDs F12 y F13 no se usaron.

#### 2. Evaluación con los cinco criterios

- **Autoridad:** quién la emite y si tiene competencia sobre el dato.
- **Vigencia:** fecha del dato; se prefiere la más reciente.
- **Trazabilidad:** existe una URL que un tercero puede consultar.
- **Objetividad:** distingue dato, interpretación y publicidad.
- **Pertinencia:** responde una de las cinco preguntas del encargo.

| ID | Autoridad | Vigencia | Trazabilidad | Objetividad | Pertinencia |
| --- | --- | --- | --- | --- | --- |
| F01 | Cumple: la UTEM imparte la carrera y publica sus datos oficiales | Cumple: sitio vigente en 2026; incluye la certificación 2025-2030 y la admisión 2027 | Cumple: URL pública | Cumple con observación: mezcla datos con texto promocional; solo se usaron los datos | Cumple: qué es, qué podré hacer, respaldo y cómo postulo |
| F02 | Cumple: resolución oficial que aprueba el plan de estudios | Cumple con observación: es de 2022 y es el último plan publicado en Transparencia (ver hallazgo 1) | Cumple: PDF público en el portal de Transparencia | Cumple: documento normativo, sin publicidad | Cumple: ¿Qué aprenderé? |
| F03 | Cumple: folleto oficial de la UTEM | No cumple del todo: archivo de 2024 y su dato de empleabilidad no indica año; solo se usó donde coincide con F01 | Cumple: PDF público | Cumple con observación: material de difusión | Cumple: ¿Qué podré hacer? y ¿Dónde trabajaré? |
| F04 | Cumple: Servicio de Información de Educación Superior (Mineduc), organismo oficial de estadísticas | Cumple: publicación 2025-2026 con cohortes declaradas en F05 | Cumple con observación: buscador interactivo; hay que elegir institución y carrera | Cumple: datos estadísticos, sin opinión | Cumple: ¿Dónde trabajaré? |
| F05 | Cumple: mismo organismo que produce los datos de F04 | Cumple: diciembre de 2025 | Cumple: PDF público | Cumple: documento técnico | Cumple: explica el año y el cálculo de los indicadores laborales |
| F06 | No cumple del todo: la UTEM informa una decisión que toma la Comisión Nacional de Acreditación | Cumple: 18 de octubre de 2026, la información más reciente | Cumple: URL pública | No cumple del todo: comunicado celebratorio; solo se usaron años, nivel y vigencia | Cumple: ¿Qué garantías hay? |
| F07 | Cumple: el DEMRE administra el proceso de admisión | Cumple: proceso 2027 | Cumple: URL pública | Cumple: calendario oficial | Cumple: ¿Cómo postulo? |
| F08 | Cumple: la UTEM imparte la carrera afín | Cumple: sitio vigente en 2026 | Cumple: URL pública | Cumple con observación: tono promocional; se usaron duración, grado y enfoque | Cumple: ¿En qué se diferencia? |
| F09 | Cumple: la UTEM imparte la carrera afín | Cumple: sitio vigente en 2026 | Cumple: URL pública | Cumple con observación: tono promocional; se usaron duración, grado y enfoque | Cumple: ¿En qué se diferencia? |
| F10 | Cumple: unidad de admisión de la UTEM | Cumple: admisión 2027 | Cumple: URL pública | Cumple: describe vías de ingreso | Cumple: ¿Cómo postulo? |
| F11 | No cumple del todo: texto de la UTEM publicado por el Consorcio de Universidades del Estado sobre una decisión de la CNA | Cumple con observación: abril de 2026, anterior al recurso de reposición; solo se usó para el nivel y los ámbitos | Cumple: URL pública | No cumple del todo: comunicado institucional | Cumple: ¿Qué garantías hay? |
| F14 | Cumple: la UTEM administra su acceso directo | Cumple: se refiere a la admisión 2027; las fechas del proceso anterior no se usaron | Cumple: URL pública | Cumple: describe requisitos, sin frases promocionales | Cumple: ¿Cómo postulo? |
| F15 | Cumple: programa de la propia UTEM | Cumple: incluye fechas de la admisión 2027 | Cumple: URL pública | Cumple: describe requisitos | Cumple: ¿Cómo postulo? |
| F16 | Cumple: unidad de admisión de la UTEM | Cumple: menciona la matrícula 2026 "por confirmar para 2027" | Cumple: URL pública | Cumple: respuestas informativas | Cumple: ¿Cómo postulo? |

#### 3. Hallazgos al contrastar fuentes

1. **Malla curricular:** la malla publicada en la página web de la carrera (F01) no coincide con la aprobada por la Resolución Exenta 03102 de 2022 (F02); por ejemplo, la web repite "Ingeniería de Software" en los semestres V y VI y no informa créditos. El folleto oficial (F03) sí coincide con la resolución. **Decisión:** usar la resolución, porque es el documento con validez legal y el único que informa los créditos SCT por asignatura.
2. **Acreditación institucional:** Mi Futuro (F04) informa 4 años porque su dato de acreditación está actualizado al 31 de octubre de 2025. La UTEM informa 5 años, nivel Avanzado, hasta octubre de 2031 (F06, octubre de 2026). **Decisión:** usar el dato más reciente, que además se contrastó con el buscador de la Comisión Nacional de Acreditación el 12-11-2026.
3. **Empleabilidad:** el folleto (F03) muestra 89,6 % al primer año y 95,3 % al segundo, sin año del dato. Mi Futuro (F04) muestra 87,1 % y 96,5 %, con cohortes identificadas en su metodología (F05). **Decisión:** usar Mi Futuro, porque declara año y método.
4. **Grado académico:** la resolución (F02) dice "Licenciado en Ingeniería Informática" y la web (F01) dice "Licenciada/o en Informática". **Decisión:** usar la denominación vigente de la web, y registrar la diferencia.
5. **Acceso directo:** la página de Acceso Directo (F14) mezcla información de 2027 con plazos del proceso anterior (desde el 17 de noviembre de 2025). **Decisión:** no publicar fechas de esa vía; solo sus requisitos.

### Anexo B. Instrumento y análisis de audiencia

#### B.1 Instrumento aplicado

Cuestionario breve aplicado mediante Google Forms a personas del público objetivo: estudiantes de 3.° y 4.° medio, sus familias y personas de 20 años o más que buscan estudiar o cambiar de carrera.

##### Consentimiento informado (primera página del formulario)

> **Invitación a participar**
>
> Somos estudiantes de la Universidad Tecnológica Metropolitana (UTEM) y estamos creando, para la asignatura EFE685, una página web que explica la carrera Ingeniería en Informática a futuros postulantes. Queremos saber qué información necesitas para que la página responda tus dudas reales.
>
> - Responder toma alrededor de 5 minutos.
> - Tu participación es **voluntaria**: puedes dejar de responder en cualquier momento.
> - **No pedimos tu nombre completo.** En el informe del proyecto te identificaremos con un código (P1, P2, …) o solo con tu primer nombre.
> - Tus respuestas se usarán **solo** para este trabajo académico. El docente de la asignatura podrá revisar los registros para verificar que la encuesta fue real.
> - Si tienes dudas, escríbenos: Diego Vásquez Castillo o María García Huarca (correos institucionales).
>
> **¿Aceptas participar?** ( ) Sí, acepto · ( ) No acepto
>
> Si eres menor de 18 años: **¿Tu madre, padre o apoderado está de acuerdo con que respondas?** ( ) Sí ( ) No

Los respaldos de consentimiento se guardan fuera del repositorio y solo se muestran al docente si los solicita.

##### Preguntas

| N.° | Pregunta | Tipo de respuesta | Para qué sirve |
| --- | --- | --- | --- |
| 1 | ¿Qué describe mejor tu situación? | Única: 3.° medio · 4.° medio · Egresado/a de enseñanza media · Madre, padre o apoderado · Persona de 20 años o más que quiere estudiar o cambiar de carrera | Contexto del perfil de usuario |
| 2 | ¿Dónde buscas información cuando eliges una carrera? | Múltiple: Google · Instagram · TikTok · YouTube · Sitio de la universidad · Mi Futuro o DEMRE · Ferias o charlas del colegio · Familia y amigos · Otro | Canal de llegada al sitio |
| 3 | ¿Qué es lo primero que quieres saber de una carrera universitaria? | Abierta | Preguntas principales |
| 4 | Marca los **3 temas** que más te importan para decidir | Múltiple (máx. 3): Qué se estudia (malla) · Duración real · Costo, becas y gratuidad · Empleabilidad y sueldos · Acreditación · Puntajes y ponderaciones · Campus y horario · Diferencias con carreras parecidas | Priorización por frecuencia |
| 5 | ¿Qué dudas o temores tienes sobre estudiar Ingeniería en Informática? | Abierta | Dudas y barreras |
| 6 | ¿Qué te haría **desconfiar** de la página de una carrera? | Abierta | Criterios de confianza |
| 7 | ¿Desde qué dispositivo verías esta página? | Única: Celular · Computador · Tableta | Prioridad del diseño responsivo |
| 8 | ¿Hay alguna pregunta que te gustaría ver respondida en la página? | Abierta | Preguntas frecuentes |

#### B.2 Análisis de audiencia

Cuestionario de 8 preguntas aplicado a 7 personas del público objetivo (códigos P1 a P7). Todas aceptaron participar. El instrumento está en el punto B.1 de este anexo. Los respaldos de consentimiento se guardan fuera del repositorio.

##### Respuestas por persona

| Código | Situación | Dónde busca | Temas que más le importan | Duda o temor | Qué le haría desconfiar | Dispositivo |
| --- | --- | --- | --- | --- | --- | --- |
| P1 | 20 años o más, quiere estudiar o cambiar de carrera | Google, Mi Futuro o DEMRE | Costo; empleabilidad y sueldos; acreditación | Dificultad | Página antigua o desordenada | Celular |
| P2 | Egresado/a de enseñanza media | Google, TikTok, sitio de la universidad | Malla; empleabilidad y sueldos; puntajes y ponderaciones | Las matemáticas | Poca reputación | Celular |
| P3 | 4.° medio | TikTok | Malla; costo; empleabilidad y sueldos | No poder con los ramos | Que no esté acreditada | Celular |
| P4 | 4.° medio | Google | Malla; duración real; costo | No me gusta | Que no muestre confianza o seguridad | Celular |
| P5 | Egresado/a de enseñanza media | Google, Instagram, sitio de la universidad, ferias o charlas del colegio | Malla; duración real; costo | Ninguna | Que todo sea muy fácil y muy insistente | Celular |
| P6 | 20 años o más, quiere estudiar o cambiar de carrera | Sitio de la universidad | Malla; costo; empleabilidad y sueldos | Elegir entre ramas de tecnologías de la información; saturación del mercado para recién egresados; otras salidas además de programar | Falta de información básica (malla, acreditación, duración) | Celular |
| P7 | Egresado/a de enseñanza media | Google | Duración real; costo; empleabilidad y sueldos | Que no haya campo laboral | Su interfaz | Celular |

##### Primera cosa que quieren saber (pregunta 3)

Dinero o sueldo (P1, P7), valor o costo (P3, P5), malla y duración (P2, P5, P6). P4 respondió algo no relacionado con la carrera ("Quiero ser carabinero"), por lo que no se usó.

##### Preguntas que les gustaría ver respondidas (pregunta 8)

- P1: la acreditación y la malla.
- P2: opiniones de los alumnos sobre la carrera.
- P5: el valor de los aranceles.
- El resto no escribió una pregunta o respondió "No".

##### Preguntas priorizadas

| Prioridad | Pregunta | Frecuencia |
| --- | --- | --- |
| 1 | ¿Cuánto cuesta y hay becas o gratuidad? | 6 de 7 |
| 2 | ¿Qué se estudia? | 5 de 7 |
| 3 | ¿Cuánto se gana y hay trabajo? | 5 de 7 |
| 4 | ¿Cuánto dura realmente la carrera? | 3 de 7 |
| 5 | ¿Qué tan difícil es? | 3 de 7 |
| 6 | ¿Está acreditada? | 1 de 7 (también pedida en la pregunta 8 y mencionada como causa de desconfianza) |
| 7 | ¿Qué puntajes piden? | 1 de 7 |
| 8 | ¿Qué otras salidas laborales hay además de programar? | 1 de 7 |

##### Perfil de usuario (persona)

Persona egresada de enseñanza media, que compara opciones de carrera. Llega desde Google o desde el sitio de la universidad y usa el celular. Quiere saber cuánto cuesta, qué se estudia y cuánto ganará al titularse. Teme que la carrera sea muy difícil o que haya poco trabajo. Desconfía de las páginas desordenadas, insistentes o con información básica faltante.

### Anexo C. Mapa de contenidos y wireframes

Proyecto: landing page de Ingeniería en Informática, UTEM (EFE685).
Equipo: Diego Vásquez Castillo y María García Huarca.

#### 1. Orden de las secciones y por qué

La página sigue el orden de las cinco preguntas del encargo (qué es, qué aprenderé, qué podré hacer, qué respaldo tiene, cómo postulo). Ese orden se contrastó con los resultados de la encuesta de la Fase B (7 personas; detalle en el Anexo B).

| # | Sección | Pregunta que responde | Por qué va en este lugar (evidencia Fase B) |
|---|---|---|---|
| 1 | Portada | ¿Qué es la carrera? | Quien llega por Google o TikTok (5 de 7 usan Google, 2 de 7 TikTok) necesita confirmar en segundos de qué carrera se trata. Incluye los datos clave y el botón "Cómo postular", visible en el encabezado en todo momento. |
| 2 | Sobre la carrera | ¿En qué se diferencia? | Una persona (P6) dudó entre Informática y otras carreras de tecnologías de la información. Va antes del detalle para decidir si seguir leyendo. |
| 3 | Perfil de egreso | ¿Qué podré hacer? | Complementa la duda sobre salidas laborales (P6 y P7). Se redactó en lenguaje claro. |
| 4 | Plan de estudios | ¿Qué aprenderé? | La malla fue marcada por 5 de 7. Incluye el filtro por año, que ayuda a ver una parte a la vez en el celular. |
| 5 | Campo laboral | ¿Dónde trabajaré? | Empleabilidad y sueldos fue marcado por 5 de 7. Muestra datos oficiales con año. |
| 6 | Respaldo institucional | ¿Qué garantías hay? | La falta de acreditación o de información básica generó desconfianza (P3 y P6). Muestra la acreditación, la certificación de la carrera y el plan oficial. |
| 7 | Admisión | ¿Cómo postulo? | Cierra el recorrido con la acción. El costo fue el tema más marcado (6 de 7) y vive aquí. |
| 8 | Preguntas frecuentes | Dudas de la Fase B | Responde las dudas de la encuesta en orden de frecuencia: costo, trabajo y sueldos, duración real, dificultad (matemática), acreditación y diferencia con Civil en Computación. |
| 9 | Referencias | ¿De dónde sale esto? | Cada cifra tiene su ID de fuente enlazado desde el texto. |

**Limitación declarada:** el costo fue el tema más marcado y no aparece antes de la sección Admisión. Se mitiga con el botón "Cómo postular" fijo en el encabezado y con la pregunta "¿Cuánto cuesta estudiar la carrera?" en las preguntas frecuentes. Mostrarlo en la portada queda como mejora posible.

**Decisión de diseño por dispositivo:** las 7 personas verían la página desde el celular, por lo que el diseño parte en 360 px y se amplía a 768 y 1280 px.

#### 2. Wireframes de baja fidelidad

##### Móvil (360 px)

```
+--------------------------+
| [logo] Ing. Informática ☰|
| [ Cómo postular ]        |
+--------------------------+
| UTEM                     |
| INGENIERÍA EN            |
| INFORMÁTICA              |
| Descripción breve [F01]  |
| [Cómo postular][Ver malla]|
| 8 sem | 240 SCT | 150 vac|
| +----------------------+ |
| | Título / Grado       | |
| | Duración / Jornada   | |
| | Sede / Código 21030  | |
| +----------------------+ |
+--------------------------+
| SOBRE LA CARRERA         |
| tabla comparativa (scroll)|
| [Interpretación equipo]  |
+--------------------------+
| PERFIL DE EGRESO         |
| tarjeta                  |
| tarjeta                  |
+--------------------------+
| PLAN DE ESTUDIOS         |
| barra de créditos        |
| [Todos][A1][A2][A3][A4]  |
| Semestre 1              |
| Semestre 2 ...          |
+--------------------------+
| CAMPO LABORAL            |
| áreas (1 columna)        |
| indicadores (1 columna)  |
+--------------------------+
| RESPALDO INSTITUCIONAL   |
| tarjeta x4 + foto        |
+--------------------------+
| ADMISIÓN                 |
| vías, ponderaciones,     |
| fechas, costos           |
+--------------------------+
| PREGUNTAS FRECUENTES     |
| ▸ pregunta               |
+--------------------------+
| REFERENCIAS              |
| F01 ... F16              |
+--------------------------+
| Pie: equipo, aviso       |
+--------------------------+
```

##### Escritorio (1280 px)

```
+-----------------------------------------------------------------+
| [logo] Ing. Informática UTEM | Carrera Perfil Malla ... [Postular]|
+-----------------------------------------------------------------+
| UTEM                                  +----------------------+  |
| INGENIERÍA EN INFORMÁTICA             | Título    | Ingeniero|  |
| Descripción [F01]                     | Grado     | Lic.     |  |
| [Cómo postular] [Ver la malla]        | Duración  | 8 sem    |  |
| 8 sem    240 SCT    150 vacantes      | Jornada   | Diurna   |  |
|                                       +----------------------+  |
+-----------------------------------------------------------------+
| SOBRE LA CARRERA                                                |
| | Carrera | Duración | Grado | Enfoque |  (3 filas)             |
| [ Interpretación del equipo ]                                   |
+-----------------------------------------------------------------+
| PERFIL DE EGRESO   [tarjeta] [tarjeta] [tarjeta]                |
|                    [tarjeta] [tarjeta]                          |
+-----------------------------------------------------------------+
| PLAN DE ESTUDIOS  barra de créditos  [Todos][A1][A2][A3][A4]    |
| [S1] [S2] [S3] [S4]                                             |
| [S5] [S6] [S7] [S8]                                             |
+-----------------------------------------------------------------+
| CAMPO LABORAL  [área] [área] [área] [área]                      |
|                [indicador] [indicador] [indicador]              |
+-----------------------------------------------------------------+
| RESPALDO       [tarjeta] [tarjeta] [tarjeta] [tarjeta]  [foto]  |
+-----------------------------------------------------------------+
| ADMISIÓN  [vía] [vía] [vía]                                     |
|           Ponderaciones (tabla)  |  Fechas clave + Costos       |
+-----------------------------------------------------------------+
| PREGUNTAS FRECUENTES (acordeón, ancho limitado)                 |
+-----------------------------------------------------------------+
| REFERENCIAS  [F01][F02] / [F03][F04] ... (2 columnas)           |
+-----------------------------------------------------------------+
| PIE: descripción | enlaces | equipo y datos                     |
+-----------------------------------------------------------------+
```

#### 3. Trazabilidad: sección → fuentes

| Sección | Fuentes (ID) |
|---|---|
| Portada | F01, F02 |
| Sobre la carrera | F01, F08, F09 (comparación); interpretación del equipo identificada como tal |
| Perfil de egreso | F01, F03 |
| Plan de estudios | F02 |
| Campo laboral | F01, F03 (áreas); F04, F05 (indicadores) |
| Respaldo institucional | F06, F11 (acreditación institucional); F01 (certificación de la carrera); F02 (plan oficial) |
| Admisión | F10, F16 (PAES); F14 (acceso directo); F15 (inclusión); F01 (ponderaciones y costos); F07 (fechas) |
| Preguntas frecuentes | F01, F02, F04, F05, F06, F08 |
| Referencias | F01 a F11 y F14 a F16 (14 fuentes) |

### Anexo D. Guía de estilo de redacción

Reglas comunes que siguieron todos los textos del sitio (Producto D: los textos finales están en `src/content/`, separados por sección).

#### Reglas

1. **Oraciones cortas:** menos de 25 palabras, en voz activa ("Diseñarás software", no "El software será diseñado").
2. **Hablar de tú:** el texto se dirige directamente a quien postula.
3. **Sin jerga sin explicar:** si un término técnico es necesario, se explica en la misma oración.
4. **Siglas:** la primera vez se escribe el nombre completo. Ejemplos: SCT (Sistema de Créditos Transferibles), DEMRE (Departamento de Evaluación, Medición y Registro Educacional), PAES (Prueba de Acceso a la Educación Superior), NEM (Notas de Enseñanza Media), CNA (Comisión Nacional de Acreditación).
5. **Toda cifra con año y cita:** cada dato verificable muestra el año y un enlace [F0X] a su fuente en Referencias. El sistema impide publicar una cita a una fuente que no existe.
6. **Formato chileno:** decimales con coma (87,1 %), miles con punto ($90.000) y fechas en palabras ("4 de enero de 2027").
7. **Sin publicidad sin evidencia:** no se usan frases como "la mejor carrera" o "líder del mercado".
8. **Distinguir el tipo de contenido** con una etiqueta visible:
   - **Dato oficial:** viene de una fuente institucional.
   - **Interpretación del equipo:** análisis propio basado en fuentes.
   - **Testimonio (opinión personal):** experiencia de una persona identificada, con consentimiento escrito.
9. **Imágenes:** todas con texto alternativo descriptivo. Solo propias, institucionales con autorización o con licencia abierta, siempre con crédito.
10. **Honestidad:** si un dato puede desanimar (por ejemplo, la duración real de 12,9 semestres frente a 8 formales), se informa igual, con su contexto.

### Anexo E. Registro de validación

#### 1. Revisión cruzada de afirmaciones

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

#### 2. Prueba con usuarios

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

#### 3. Hallazgos y correcciones aplicadas

##### Hallazgos de la revisión cruzada

| # | Hallazgo (qué pasó y a quién) | Gravedad (alta/media/baja) | Corrección aplicada | Evidencia (commit o captura) |
|---|---|---|---|---|
| 1 | El folleto antiguo de la carrera muestra empleabilidad de 89,6 % y 95,3 % sin año, y una acreditación que venció en septiembre de 2025 | Media | El sitio usa Mi Futuro, que declara de dónde salen los datos. El folleto no se usa como fuente | Informe, sección 3, punto 3 |
| 2 | Mi Futuro muestra acreditación institucional de "4 años", dato desactualizado. Mi Futuro mismo indica revisar la CNA | Media | El sitio usa la acreditación más reciente de 5 años (ver Informe, sección 3). Contrastada por Diego en el buscador de la CNA el 12-11-2026 | Informe, sección 3, punto 2 |
| 3 | La matrícula y el arancel son valores de 2026, no de 2027 | Media | Resuelto: la sección Admisión muestra "Costos 2026" y la pregunta frecuente dice "En 2026" | Sitio publicado |
| 4 | La resolución de 2022 nombra el grado "Licenciado en Ingeniería Informática" y la página oficial de la carrera "Licenciado en Informática" | Baja | El sitio usa el nombre de la página oficial. Declarado en Limitaciones | Informe, sección 9 |

##### Hallazgos de la prueba con usuarios

| # | Hallazgo (qué pasó y a quién) | Gravedad (alta/media/baja) | Corrección aplicada | Evidencia (commit o captura) |
|---|---|---|---|---|
| 1 | Nadie indicó hasta cuándo está acreditada la universidad (U1, U2, U3); U2 confundió la acreditación de la universidad (2031) con la certificación de la carrera (2030) | Alta | El valor destacado de cada tarjeta muestra la fecha de término ("Hasta octubre de 2031" y "Hasta junio de 2030") y la tarjeta se titula "Acreditación de la universidad" para diferenciarla de la carrera | Commit "Aplica correcciones de la prueba con usuarios" |
| 2 | Nadie encontró las fechas de postulación (U1, U2, U3); U1 lo señaló como lo más difícil y U2 pidió cambiar el orden de los datos | Alta | Aviso destacado al inicio de la sección Admisión: "Postulación a carreras 2027: 4 al 7 de enero de 2027", con su fuente | Mismo commit |
| 3 | La diferencia con Civil en Computación costó a U2 y U3, que en el celular veían una tabla ancha con desplazamiento lateral; U3 pidió una estructura más cómoda para celular | Media | En pantallas menores a 768 px la tabla comparativa se muestra como tarjetas apiladas, con la etiqueta de cada dato | Mismo commit |
| 4 | U2 indicó la página de la UTEM como fuente de la empleabilidad y a U1 le costó encontrarla: la fuente solo aparecía como cita [F04] | Media | Bajo "Indicadores de titulados" se escribe el nombre de la fuente: Mi Futuro, del Ministerio de Educación | Mismo commit |
| 5 | U2 nombró Inglés como asignatura del primer año (es del tercero): los semestres no indicaban a qué año corresponden | Media | Cada semestre muestra su año: "Año 1 · Semestre 1" | Mismo commit |
| 6 | U1 señaló que el formulario de la prueba obligaba a escribir algo aunque no encontrara el dato (se pedía escribir "no lo encontré") | Baja | Se registra como limitación del instrumento de prueba; no afecta al sitio | Este registro |

#### 4. Evidencias

Hoja de respuestas de la prueba con fecha, hora y consentimiento de cada participante (fuera del repositorio, disponible para el docente) y el commit que aplica las correcciones. Las capturas de PageSpeed y CompliaScan están en la carpeta `evidencias/`.

### Anexo F. Evidencia técnica de validación de datos

Para demostrar que el sistema impide publicar datos inválidos, introdujimos errores a propósito y ejecutamos la compilación (`npm run build`):

| Prueba | Error introducido | Resultado |
| --- | --- | --- |
| 1 | En una pregunta frecuente se citó la fuente `F99`, que no existe | La compilación se detuvo con el mensaje: *references "F99" in collection "referencias", but that entry does not exist* |
| 2 | Se cambiaron los créditos de Práctica Profesional de 22 a 20 | La compilación se detuvo con el mensaje: *La suma de créditos SCT de la malla no coincide con creditosTotales* |

Después de cada prueba se restauró el dato correcto y la compilación volvió a terminar sin errores.

El código fuente está comentado en español, archivo por archivo, explicando qué hace cada parte (`src/`), y se explica en el Anexo H.

### Anexo G. Declaración de uso de inteligencia artificial

La asignatura permite usar asistentes de IA si el uso se declara y el equipo puede explicar y defender todo lo entregado. Este anexo indica qué herramienta se usó, para qué, con qué instrucción y qué se modificó. **Los datos del sitio no provienen solo de una IA: cada cifra se verificó en la fuente primaria que se cita.**

> PENDIENTE (María): completar la columna «Qué modificamos» de las filas 1 a 5 y borrar este aviso.

| N.° | Herramienta | Tarea | Instrucción (resumen) | Qué modificamos del resultado |
| --- | --- | --- | --- | --- |
| 1 | Claude (Anthropic) | Revisar el cumplimiento de la pauta y proponer mejoras | «¿el landing cumple con la pauta?»; «necesito que lo termines y lo dejes completo cumpliendo con la pauta de evaluación» | [COMPLETAR] |
| 2 | Claude (Anthropic) | Buscar y contrastar fuentes oficiales (acreditación, calendario DEMRE, carreras afines, vías de ingreso) | «necesito que sea actual y también la malla; busca de otras universidades para poder completar de forma segura…» (se respondió que la malla debe salir del plan de la propia UTEM) | [COMPLETAR: qué fuentes abrieron y verificaron ustedes] |
| 3 | Claude (Anthropic) | Corregir accesibilidad (objetivos táctiles de 24 px, `aside` anidado) tras el escaneo de Compliascan | «quiero mejorar el error anterior que teníamos sobre la página que marcaba 89/100» | [COMPLETAR] |
| 4 | Claude (Anthropic) | Diseño: portada, iconos y logo propios, gráfico de créditos por ciclo, pie de página, encabezado | «quiero que sea un poco más atractiva la página, todo debe seguir igual a la pauta del profesor» | [COMPLETAR] |
| 5 | Claude (Anthropic) | Reescribir las preguntas frecuentes, la interpretación del equipo y las vías de admisión | «creo que las respuestas de las preguntas frecuentes no están tan bien» | [COMPLETAR] |
| 6 | Claude (Anthropic), mediante Claude Code en VS Code | Proponer una estructura por fases para el plan de trabajo, a partir del enunciado | «Revisa la documentación que hay para realizar la tarea… formula un plan»; «no debe ser tan sofisticado» | Diego definió las decisiones del plan: alcance simple y de nivel universitario, reparto de tareas entre los integrantes (María a cargo del diseño y de su parte del contenido), uso de Google Forms con cierre programado y qué se entrega en el repositorio. La IA ordenó esas decisiones por fases y propuso mejoras |
| 7 | Claude (Anthropic), Claude Code | Buscar fuentes oficiales y extraer datos: malla de la Resolución 03102, indicadores de Mi Futuro y su metodología, calendario DEMRE, acreditación, carreras afines (F01 a F11) | «Ayúdame con todo» (carrera Ingeniería en Informática UTEM, código 21030) | María y Diego verificaron las 12 cifras contra su fuente (Anexo E) |
| 8 | Claude (Anthropic), Claude Code | Estructura del proyecto Astro: esquemas de validación de datos, componentes por sección, estilos base, publicación automática en GitHub Pages y README | «Ayúdame con todo» | Se mantuvo la estructura; María reemplazó después el diseño visual (filas 3 y 4) y agregó la foto propia, los íconos y el logo |
| 9 | Claude (Anthropic), Claude Code | Plantillas de las fases A a E, borrador del informe y glosario | «Haz lo de la sección "Yo"» | Las plantillas se completaron con los datos reales de la encuesta y de la revisión de fuentes |
| 10 | Claude (Anthropic), Claude Code | Script de Google Apps Script que crea el formulario de la encuesta y programa su cierre | «¿Podrías hacer tú mismo el form?» | Se revisó la vista previa y la configuración del formulario antes de enviarlo |
| 11 | Claude (Anthropic), Claude Code | Evaluar las fuentes con los cinco criterios, reordenar las preguntas frecuentes según la encuesta, contrastar los conteos de la encuesta con la hoja de respuestas y actualizar el informe | «Haz todo lo que falte y solo déjame lo que sea necesario que haga yo a mano» | Diego revisó los cambios antes de publicarlos |
| 12 | Claude (Anthropic), Claude Code | Script del formulario de la prueba con usuarios, análisis de las respuestas y aplicación de las correcciones al sitio | «quería automatizar lo de las respuestas»; «revísalo y dime qué falta» | Diego consiguió a las 3 participantes y revisó las correcciones en la página antes de publicarlas |

#### Verificación humana
- Datos revisados contra la fuente original por María García Huarca y Diego Vásquez Castillo el 12-11-2026 (12 de 12 cifras). Ver Anexo E.
- Las respuestas de la encuesta fueron recolectadas por el equipo en Google Forms, a personas reales que dieron su consentimiento; la IA no respondió ni generó respuestas.
- El código generado o modificado con ayuda de IA está documentado en `src/` (comentarios en español en cada archivo) y en el Anexo H, Ambos integrantes leímos la guía técnica (Anexo H) junto con el código y podemos explicar cada archivo en la defensa.
- Ninguna imagen proviene de bancos externos: los iconos y el logo del sitio son propios (SVG dibujados para este proyecto) y la foto del campus es propia (María García Huarca, 2026).

### Anexo H. Guía técnica del código

Guía para entender y explicar el proyecto archivo por archivo. Cada archivo de `src/` tiene además comentarios en español que explican sus partes. Se recomienda leerla con el código abierto, en el orden propuesto.

#### 1. Idea general en tres capas

| Capa | Dónde está | Qué hace |
| --- | --- | --- |
| **Contenido** | `src/content/` | Todos los textos y cifras del sitio, en archivos JSON y Markdown. Aquí se actualiza la información. |
| **Reglas** | `src/content.config.ts` | Describe la forma obligatoria de cada archivo de contenido. Si un dato no cumple, la compilación se detiene. |
| **Presentación** | `src/pages/`, `src/layouts/`, `src/components/`, `src/styles/` | Lee el contenido ya validado y lo convierte en HTML con estilos. No contiene datos de la carrera. |

Astro ejecuta todo esto **una sola vez al compilar** (`npm run build`) y genera páginas HTML estáticas en `dist/`. El navegador recibe HTML y CSS listos; el único JavaScript es el filtro de la malla.

#### 2. Orden de lectura sugerido

1. `README.md`: qué es el proyecto y cómo se actualiza.
2. `src/content/*.json` y `src/content/faq/*.md`: los datos.
3. `src/content.config.ts`: las reglas de esos datos.
4. `src/lib/contenido.ts`: cómo se leen los datos.
5. `src/pages/index.astro`: cómo se arma la página.
6. `src/layouts/BaseLayout.astro`: la plantilla común.
7. `src/components/Seccion.astro`, `Cita.astro`, `Etiqueta.astro`: las piezas reutilizables.
8. Un componente de sección, por ejemplo `Admision.astro`.
9. El `<script>` de `Malla.astro`: el único JavaScript.
10. `src/styles/global.css` y `.github/workflows/deploy.yml`.

#### 3. Configuración (raíz del proyecto)

| Archivo | Para qué sirve |
| --- | --- |
| `package.json` | Lista las herramientas (Astro, el generador de sitemap, TypeScript) y los comandos: `dev` (servidor local), `check` (revisa tipos y datos), `build` (revisa y compila), `preview` (muestra lo compilado). Exige Node 24 o superior. |
| `astro.config.mjs` | Dirección pública del sitio (`site`), subcarpeta de GitHub Pages (`base`), generador de `sitemap.xml` y la opción de incluir el CSS dentro del HTML para que cargue más rápido. |
| `tsconfig.json` | Activa la configuración más estricta de TypeScript (`strictest`): prohíbe `any`, variables sin usar y accesos que podrían ser `undefined`. |
| `.gitignore` | Archivos que no se suben: `node_modules/`, `dist/`, `.astro/` y datos privados. |
| `.github/workflows/deploy.yml` | Publicación automática: con cada cambio en `main`, GitHub instala, revisa, compila y publica en GitHub Pages. Si la compilación falla, no publica nada. |

#### 4. Reglas de los datos (`src/content.config.ts`)

Cada colección se declara con `defineCollection`, que tiene dos partes:

- **`loader`**: de dónde salen los datos. `file('…json')` lee un archivo JSON con una lista de elementos; `glob(…)` lee una carpeta de archivos Markdown (las preguntas frecuentes).
- **`schema`**: la forma obligatoria, escrita con **Zod** (`z`). Por ejemplo, `z.number().int().positive()` exige un entero positivo y `z.url()` exige una dirección web válida.

Piezas clave:

| Pieza | Qué garantiza |
| --- | --- |
| `reference('referencias')` | Cada fuente citada (`"F04"`) debe existir en `referencias.json`. Si no existe, la compilación falla. Es la base de la trazabilidad. |
| `fuentes = z.array(fuente).min(1)` | Todo dato con cifras debe citar al menos una fuente. |
| `tipoContenido` | Solo permite `dato`, `interpretacion` o `testimonio`; se muestra como etiqueta visible. |
| `.refine(...)` en `malla` | La suma de créditos SCT de todas las asignaturas debe ser igual a `creditosTotales` (240). |
| `.refine(...)` en `admision` | Las ponderaciones obligatorias más una electiva deben sumar 100 %. |
| `fotos` | Cada foto exige texto alternativo (mínimo 20 caracteres) y crédito. |

Colecciones: `sitio`, `referencias`, `carrera`, `perfilEgreso`, `malla`, `campoLaboral`, `respaldo`, `admision`, `faq` y `fotos`.

#### 5. Funciones de apoyo (`src/lib/`)

| Archivo | Funciones |
| --- | --- |
| `contenido.ts` | `obtenerObligatorio(coleccion, id)`: trae un dato que debe existir; si falta, detiene la compilación. `obtenerCompetencias`, `obtenerRespaldo`, `obtenerPreguntas`, `obtenerReferencias`: traen una colección **ordenada** (Astro no garantiza el orden del archivo, por eso existe el campo `orden`). `buscarSeccion(secciones, id)`: entrega el título y la pregunta de una sección desde `sitio.json`. |
| `formato.ts` | `formatearPesos(90000)` → `$90.000`; `formatearFecha('2027-01-04')` → `4 de enero de 2027`; `formatearRango(inicio, fin)` para periodos. Usan `Intl` con la configuración `es-CL`. |
| `rutas.ts` | `rutaPublica('favicon.svg')` arma la ruta correcta considerando la subcarpeta de GitHub Pages. |

#### 6. Página y plantilla

- **`src/pages/index.astro`**: carga todos los datos con las funciones de `contenido.ts` y los entrega como *props* (parámetros) a cada componente, en el orden definido en la Fase C. No contiene textos propios.
- **`src/layouts/BaseLayout.astro`**: el `<head>` con título, descripción, URL canónica, Open Graph (vista previa en redes), favicon e idioma `lang="es-CL"`; el enlace "Saltar al contenido principal"; el encabezado, el `<main>` y el pie. `<slot />` es el lugar donde entra el contenido de la página.

#### 7. Componentes (`src/components/`)

Cada archivo `.astro` tiene dos partes: entre las líneas `---` va el código que se ejecuta al compilar (props tipadas con `interface Props`); debajo va el HTML; y al final, `<style>` con estilos que solo afectan a ese componente.

**Piezas reutilizables**

| Componente | Qué hace |
| --- | --- |
| `Seccion.astro` | Envoltorio común: `<section>` con su título `h2` y la pregunta que responde. Mantiene la jerarquía de títulos (h1 → h2 → h3). |
| `Cita.astro` | Muestra `[F04]` como enlace a `#ref-F04` en Referencias; puede mostrar el año del dato. |
| `Etiqueta.astro` | Etiqueta visible "Dato oficial", "Interpretación del equipo" o "Testimonio". No depende solo del color: siempre muestra el texto. |
| `Icono.astro` | Íconos propios en SVG, decorativos (`aria-hidden`): no los leen los lectores de pantalla. |
| `Logo.astro` | Logo propio del proyecto (no usa el logo de la UTEM). |
| `Encabezado.astro` | Nombre del sitio, menú hacia cada sección y botón "Cómo postular". En móvil, el menú se desplaza horizontalmente, sin JavaScript. |
| `PiePagina.astro` | Aviso de proyecto académico no oficial, enlaces a secciones, equipo y fecha de revisión de los datos. |

**Secciones** (una por sección obligatoria)

| Componente | Responde | Detalles |
| --- | --- | --- |
| `Hero.astro` | ¿Qué es la carrera? | Nombre, propósito, botones, tres cifras grandes (semestres, créditos, vacantes) y la ficha con título, grado, duración, jornada, sede y código. |
| `SobreCarrera.astro` | ¿En qué se diferencia? | Tabla comparativa con 2 carreras afines y el recuadro "Interpretación del equipo". |
| `PerfilEgreso.astro` | ¿Qué podré hacer? | Tarjetas con las competencias en lenguaje claro. |
| `Malla.astro` | ¿Qué aprenderé? | Semestres con asignaturas, créditos y ciclo; leyenda de ciclos; **filtro por año** (ver abajo). |
| `CampoLaboral.astro` | ¿Dónde trabajaré? | Áreas de trabajo e indicadores de Mi Futuro con año y fuente. Las barras son un apoyo visual: el valor siempre está escrito en texto. Compara la duración formal con la real. |
| `Respaldo.astro` | ¿Qué garantías hay? | Acreditación, certificación de la carrera, plan oficial y la foto propia del campus con su crédito. |
| `Admision.astro` | ¿Cómo postulo? | Vías de ingreso, tabla de ponderaciones, fechas clave, costos y contacto. |
| `PreguntasFrecuentes.astro` | Dudas de la encuesta | Cada pregunta en un `<details>`, que se abre y cierra sin JavaScript. La respuesta en Markdown se convierte con `render()`. |
| `Referencias.astro` | ¿De dónde sale esto? | Lista de fuentes en APA 7 con su ancla `#ref-F01` y la fecha de consulta. |

**El filtro de la malla (único JavaScript)**

1. Los botones "Todos / Año 1 … Año 4" vienen ocultos (`hidden`) en el HTML.
2. El `<script>` los muestra: si el navegador no ejecuta JavaScript, se ve la malla completa sin botones (mejora progresiva).
3. Al hacer clic, marca el botón activo con `aria-pressed` (para lectores de pantalla) y oculta los semestres de otros años con `hidden`.

#### 8. Estilos (`src/styles/global.css`)

- **Variables** en `:root`: colores, espacios y tipografía. Los demás estilos usan esas variables, así que cambiar un color en un solo lugar lo cambia en todo el sitio. Los colores de texto cumplen contraste 4,5:1 (WCAG AA).
- **Diseño móvil primero**: los estilos base son para 360 px, y los bloques `@media (min-width: …)` ajustan para tableta y escritorio.
- **Accesibilidad**: `:focus-visible` (contorno visible al navegar con teclado), `.solo-lector` (texto que solo leen los lectores de pantalla) y respeto de `prefers-reduced-motion`.
- **Clases reutilizables**: `.contenedor` (ancho máximo centrado), `.grilla` (columnas automáticas), `.tarjeta`, `.boton`, `.nota`, `.icono-caja`.

#### 9. Preguntas probables en la defensa

| Pregunta | Respuesta corta |
| --- | --- |
| ¿Por qué no hay textos dentro de los componentes? | Para separar contenido y presentación: los datos están en `src/content/`, validados por un esquema, y se pueden actualizar sin tocar el diseño. |
| ¿Cómo garantizan que toda cifra tenga fuente? | Con `reference('referencias')`: si se cita una fuente que no existe, la compilación falla. Lo probamos a propósito (Anexo F). |
| ¿Por qué Astro? | Genera HTML estático y envía casi cero JavaScript, lo que da buen rendimiento y accesibilidad. |
| ¿Qué pasa si alguien escribe mal un dato? | `npm run build` falla, GitHub no publica y la página anterior sigue en línea. |
| ¿Dónde está el JavaScript? | Solo en el filtro de `Malla.astro`, justificado porque la malla tiene 44 asignaturas y en el celular conviene ver un año a la vez. |
| ¿Por qué el campo `orden`? | Porque Astro no garantiza el orden de lectura de los archivos; así el equipo decide el orden (por ejemplo, el de las preguntas frecuentes según la encuesta). |
