# Fase C. Mapa de contenidos

Proyecto: landing page de Ingeniería en Informática, UTEM (EFE685).
Equipo: Diego Vásquez Castillo y María García Huarca.

## 1. Orden de las secciones y por qué

La página sigue el orden de las cinco preguntas del encargo (qué es, qué aprenderé, qué podré hacer, qué respaldo tiene, cómo postulo). Ese orden se contrastó con los resultados de la encuesta de la Fase B (7 personas; detalle en `docs/fase-b-audiencia.md`).

| # | Sección | Pregunta que responde | Por qué va en este lugar (evidencia Fase B) |
|---|---|---|---|
| 1 | Portada | ¿Qué es la carrera? | Quien llega por Google o TikTok (5 de 7 usan Google, 2 de 7 TikTok) necesita confirmar en segundos de qué carrera se trata. Incluye los datos clave y el botón "Cómo postular", visible en el encabezado en todo momento. |
| 2 | Sobre la carrera | ¿En qué se diferencia? | Una persona (P6) dudó entre Informática y otras carreras de tecnologías de la información. Va antes del detalle para decidir si seguir leyendo. |
| 3 | Perfil de egreso | ¿Qué podré hacer? | Complementa la duda sobre salidas laborales (P6 y P7). Se redactó en lenguaje claro. |
| 4 | Plan de estudios | ¿Qué aprenderé? | La malla fue marcada por 5 de 7. Incluye el filtro por año, que ayuda a ver una parte a la vez en el celular. |
| 5 | Campo laboral | ¿Dónde trabajaré? | Empleabilidad y sueldos fue marcado por 5 de 7. Muestra datos oficiales con año. |
| 6 | Respaldo institucional | ¿Qué garantías hay? | La falta de acreditación o de información básica generó desconfianza (P3 y P6). |
| 7 | Admisión | ¿Cómo postulo? | Cierra el recorrido con la acción. El costo fue el tema más marcado (6 de 7) y vive aquí. |
| 8 | Preguntas frecuentes | Dudas de la Fase B | Responde dudas concretas de la encuesta: costo, duración real, matemática, acreditación y diferencia con Civil en Computación. |
| 9 | Referencias | ¿De dónde sale esto? | Cada cifra tiene su ID de fuente enlazado desde el texto. |

**Limitación declarada:** el costo fue el tema más marcado y no aparece antes de la sección Admisión. Se mitiga con el botón "Cómo postular" fijo en el encabezado y con la pregunta "¿Cuánto cuesta estudiar la carrera?" en las preguntas frecuentes. Mostrarlo en la portada queda como mejora posible.

**Decisión de diseño por dispositivo:** las 7 personas verían la página desde el celular, por lo que el diseño parte en 360 px y se amplía a 768 y 1280 px.

## 2. Wireframes de baja fidelidad

### Móvil (360 px)

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
| F01 ... F13+             |
+--------------------------+
| Pie: equipo, aviso       |
+--------------------------+
```

### Escritorio (1280 px)

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

## 3. Trazabilidad: sección → fuentes

| Sección | Fuentes (ID) |
|---|---|
| Portada | F01, F02 |
| Sobre la carrera | F01, F08, F09 (comparación); interpretación del equipo identificada como tal |
| Perfil de egreso | F01, F03 |
| Plan de estudios | F02 |
| Campo laboral | F01, F03 (áreas); F04, F05 (indicadores) |
| Respaldo institucional | F06, F12 (acreditación institucional); F01 (certificación de la carrera); F02 (plan oficial); F13 (cuerpo académico) |
| Admisión | F10, F16 (PAES); F14 (acceso directo); F15 (inclusión); F01 (ponderaciones y costos); F07 (fechas) |
| Preguntas frecuentes | F01, F02, F04, F06, F08 |
| Referencias | F01 a F16 (con F12 y F13 ya agregadas) |

*(Los IDs de F12 y F13 existen en el sitio solo después de agregarlos a `src/content/referencias.json`; ver `docs/fase-a-f12-f13.md`.)*
