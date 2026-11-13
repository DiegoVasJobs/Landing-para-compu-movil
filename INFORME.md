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

Reunimos 14 fuentes, 12 de ellas primarias. Cada una fue evaluada con cinco criterios: autoridad, vigencia, trazabilidad, objetividad y pertinencia. La matriz completa está en el [Anexo A](docs/fase-a-matriz-fuentes.md).

### Decisiones importantes

Al comparar fuentes encontramos diferencias entre documentos oficiales. Las resolvimos así:

1. **La malla de la web no coincidía con la resolución oficial.** Usamos la Resolución Exenta N.° 03102 de 2022, porque es el documento con validez legal y el único que informa los créditos de cada asignatura.
2. **Mi Futuro informaba 4 años de acreditación.** Su dato era de octubre de 2025. Usamos la acreditación más reciente de 5 años, informada por la UTEM en octubre de 2026.
3. **El folleto mostraba otra empleabilidad sin indicar el año.** Usamos Mi Futuro, porque declara a qué generaciones corresponde cada dato y cómo se calcula.

## 4. Fase B: análisis de audiencia

Aplicamos un cuestionario breve de 8 preguntas a **7 personas** del público objetivo (códigos P1 a P7). Todas aceptaron participar. El formulario pedía la autorización del apoderado a las personas menores de 18 años; la única participante menor de edad respondió con esa autorización. Los respaldos de consentimiento se guardan fuera del repositorio y están disponibles para el docente. Detalle en el [Anexo B](docs/fase-b-audiencia.md) y el instrumento en [fase-b-instrumento.md](docs/fase-b-instrumento.md).

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

La justificación de cada posición, los wireframes y la tabla que relaciona cada sección con sus fuentes están en el [Anexo C](docs/fase-c-mapa-contenidos.md).

## 6. Fase D: redacción

Todos los textos siguen una guía de estilo común ([guía completa](docs/fase-d-guia-estilo.md)): oraciones de menos de 25 palabras, siglas explicadas la primera vez y cada cifra con su año y su cita.

Los textos no están escritos dentro del código. Están en archivos de datos separados por sección (`src/content/`). Así, una persona de la Escuela puede actualizarlos sin programar (ver [README](README.md)).

## 7. Fase E: validación

**Revisión cruzada de cifras.** Revisamos 12 afirmaciones con cifras del sitio contra su fuente primaria (resolución de la malla, páginas oficiales de la UTEM, Oferta Académica 2027, Mi Futuro y DEMRE). Las 12 coinciden con su fuente; la acreditación institucional se contrastó además con el buscador de la Comisión Nacional de Acreditación. Durante la revisión encontramos diferencias entre documentos oficiales (por ejemplo, el folleto antiguo con una acreditación vencida y la acreditación de "4 años" de Mi Futuro) y las resolvimos usando la fuente más reciente. Detalle en el [Anexo D](docs/fase-e-validacion.md).
**Prueba con usuarios.**

> PENDIENTE: resumir la prueba con usuarios (participantes, tareas logradas, hallazgos y correcciones aplicadas) cuando se complete el registro del Anexo D.

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
| **Diseño para celular primero** | Se diseñó primero para 360 px y luego para 768 y 1280 px | El público objetivo es joven y suele navegar desde el celular. En la encuesta, las 7 personas dijeron que verían la página desde el celular |
| **SEO básico** | Título, descripción, idioma `es-CL`, sitemap y vista previa para redes sociales | Para que aparezca bien en Google y al compartir el enlace |
| **Publicación automática** | GitHub publica la página cada vez que se guarda un cambio | Nadie tiene que publicar a mano y nunca se publica una versión con errores |

### Resultados de calidad

Mediciones sobre el sitio publicado, realizadas el 12 de noviembre de 2026. Las capturas están en `docs/evidencias/`.

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

Ambos integrantes buscamos información por separado y luego la discutimos juntos. Acordamos qué datos incluir según lo que podía ser útil para un postulante y según lo que a nosotros mismos nos habría gustado saber al elegir carrera. Usamos Claude como asistente en varias tareas, según se detalla en el Anexo F; las decisiones, el trabajo con personas reales, la verificación de datos y la revisión final fueron nuestras.

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

- **Anexo A.** [Matriz de fuentes](docs/fase-a-matriz-fuentes.md)
- **Anexo B.** [Instrumento](docs/fase-b-instrumento.md) y [análisis de audiencia](docs/fase-b-audiencia.md)
- **Anexo C.** [Mapa de contenidos y wireframes](docs/fase-c-mapa-contenidos.md)
- **Anexo D.** [Registro de validación](docs/fase-e-validacion.md)
- **Anexo E.** Evidencia técnica: pruebas de que la publicación se detiene ante datos inválidos (ver abajo)
- **Anexo F.** [Declaración de uso de IA](docs/anexo-f-declaracion-ia.md)

### Anexo E. Evidencia técnica de validación de datos

Para demostrar que el sistema impide publicar datos inválidos, introdujimos errores a propósito y ejecutamos la compilación (`npm run build`):

| Prueba | Error introducido | Resultado |
| --- | --- | --- |
| 1 | En una pregunta frecuente se citó la fuente `F99`, que no existe | La compilación se detuvo con el mensaje: *references "F99" in collection "referencias", but that entry does not exist* |
| 2 | Se cambiaron los créditos de Práctica Profesional de 22 a 20 | La compilación se detuvo con el mensaje: *La suma de créditos SCT de la malla no coincide con creditosTotales* |

Después de cada prueba se restauró el dato correcto y la compilación volvió a terminar sin errores.

El código fuente está comentado en español, archivo por archivo, explicando qué hace cada parte (`src/`).
