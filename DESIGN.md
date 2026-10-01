# ROST Café — Sistema de diseño

> Revista de café de especialidad sobre papel blanco. Tinta chocolate, detalles en dorado y verde salvia, y la fotografía y las ilustraciones propias de ROST como protagonistas.

**Tema:** claro
**Referencia de estructura:** "Home" (Parallel) de Refero Styles, adaptada. De la referencia se toma la estructura editorial, el ritmo de espaciado, la contención tipográfica y la disciplina del color. La identidad (colores, tipografías, logo, ilustraciones y tono) es de ROST.

## Principios

1. **Se lee como una revista, no como un folleto.** Mucho aire, bloques de texto alineados, fotografía e ilustración como protagonistas. Cada sección tiene una sola idea.
2. **Vender educando.** La página explica qué hace especial al café de especialidad y a la pastelería artesanal, sin tecnicismos. Quien sabe más, valora más lo que compra.
3. **Pensada para quien la usa.** El público principal son mujeres de 40 a 75 años, sobre todo desde el celular: letra grande, alto contraste, botones fáciles de tocar y pocos pasos hasta WhatsApp.
4. **Contención.** Títulos con peso medio, nunca en negrita. Pocos colores, cada uno con un rol fijo. Si un elemento no suma, se saca.

## Colores

| Nombre | Valor | Token | Rol |
|---|---|---|---|
| Papel | `#FFFEFB` | `--color-papel` | Fondo de toda la página. Blanco con un toque cálido casi imperceptible, para que las fotos de comida no se vean frías. |
| Blanco | `#FFFFFF` | `--color-blanco` | Superficie de tarjetas sobre fondos tintados. |
| Chocolate | `#331F13` | `--color-chocolate` | Texto principal, títulos, botón primario, logo. Es la tinta de la marca. |
| Chocolate suave | `#5A4636` | `--color-chocolate-suave` | Texto secundario, bajadas, descripciones. |
| Chocolate niebla | `#8C7B6E` | `--color-chocolate-niebla` | Texto terciario: notas al pie, metadatos. Nunca para texto de lectura. |
| Dorado | `#BF935E` | `--color-dorado` | Solo detalles: líneas finas, el punto final de los títulos principales, números de paso, ornamentos, sello. Nunca en fondos grandes ni como color de texto de lectura (contraste insuficiente). |
| Dorado profundo | `#8A6A45` | `--color-dorado-profundo` | Versión del dorado apta para texto chico: etiquetas en mayúsculas espaciadas. |
| Salvia | `#86986B` | `--color-salvia` | El verde de las hojas del cafeto. Ilustraciones, íconos grandes, líneas de sección en la parte educativa. Nunca como fondo de botón con texto blanco (contraste insuficiente). |
| Salvia profunda | `#56673F` | `--color-salvia-profunda` | Verde apto para texto: etiquetas de la sección educativa, enlaces dentro de ella. |
| Salvia niebla | `#F1F3EC` | `--color-salvia-niebla` | Fondo de bandas educativas ("Aprendé de café"). La única superficie tintada del sitio. |
| Hilo | `#E7E1D8` | `--color-hilo` | Divisores finos, bordes de tarjetas y de campos. El borde más usado del sistema. |
| Cereza | `#D75730` | `--color-cereza` | Solo existe dentro de las ilustraciones (las cerezas del cafeto). No se usa en la interfaz. |

**Regla de color:** el chocolate manda. El dorado y el salvia son detalles y no compiten entre sí en el mismo bloque: en las secciones de venta (tortas, carta, desayunos) el detalle es dorado; en las secciones educativas, salvia. Máximo un detalle de color protagonista por pantalla.

**No se trasladan a la web** los colores de apoyo de la carta impresa: el rosa de pastelería, el celeste de café frío y el verde lima de la opción vegana.

## Tipografía

Las fuentes salen de la carta y los individuales de ROST, para que la web y el local hablen el mismo idioma. Todas están en Google Fonts.

| Rol | Fuente | Pesos | Uso |
|---|---|---|---|
| Títulos | Barlow | 500 | Todos los títulos. Barlow es de la familia DIN, la misma voz de los títulos de la carta ("Nuestros ESPRESSOS", "La leyenda del Pastor"). Peso medio, nunca 600 o más. |
| Títulos grandes | Barlow Condensed | 500 | Solo el título de la portada y los títulos de sección muy cortos. Hace eco del "ROST" del logo sin competir con él. |
| Etiquetas | Josefin Sans | 300 | Etiquetas en mayúsculas con espaciado amplio (`letter-spacing: 0.28em`), como el "CAFÉ" del logo: "APRENDÉ DE CAFÉ", "TORTAS DE LA CASA". |
| Texto | Barlow | 400, 500 | Todo el texto de lectura y la interfaz. |
| Firma manuscrita | Yellowtail | 400 | Una sola frase por página, como la carta ("Bienvenidos al mundo del café"). Nunca en títulos de sección ni en botones. |

El wordmark "ROST" se usa siempre como imagen (SVG del logo oficial), nunca recreado con una fuente.

### Escala

Base de lectura en 18px (más grande que el estándar, por el público).

| Rol | Tamaño escritorio | Tamaño celular | Interlineado | Espaciado |
|---|---|---|---|---|
| Nota | 15px | 15px | 1.5 | 0 |
| Texto | 18px | 18px | 1.65 | 0 |
| Bajada | 21px | 19px | 1.5 | 0 |
| Título chico | 25px | 22px | 1.3 | -0.01em |
| Título | 34px | 28px | 1.2 | -0.01em |
| Portada | 68px | 42px | 1.05 | -0.015em |
| Etiqueta | 13px | 13px | 1.4 | 0.28em (mayúsculas) |

Ancho de lectura: máximo 640px para bloques de texto.

## Espaciado y formas

| Elemento | Valor |
|---|---|
| Ancho máximo de página | 1200px |
| Separación entre secciones | 120px escritorio, 80px celular |
| Separación entre bloques de una sección | 32px |
| Separación entre elementos | 8px, 12px, 16px, 24px |
| Relleno de tarjetas | 32px escritorio, 24px celular |
| Radio de tarjetas | 20px |
| Radio de botones | 10px |
| Radio de campos | 12px |
| Radio de etiquetas y chips | 9999px |
| Sombra (única) | `0 6px 27px rgba(51, 31, 19, 0.07)` |
| Área táctil mínima | 48 × 48px |

## Componentes

### Barra de navegación
Fondo papel, logo horizontal (corona dorada + ROST) a la izquierda, enlaces de sección en Barlow 500 16px en chocolate, y a la derecha el botón "Pedí por WhatsApp". En el celular, logo + botón de WhatsApp + menú. Se queda fija arriba al hacer scroll, con un divisor hilo de 1px.

### Botón primario
Fondo chocolate, texto blanco en Barlow 500 17px, radio 10px, relleno 14px × 22px, alto mínimo 48px. Es el único botón con fondo. Uso: "Encargá tu torta", "Pedí por WhatsApp".

### Botón secundario
Sin fondo, texto chocolate en Barlow 500 17px, subrayado con una línea dorada de 1px separada 4px del texto. Uso: "Ver la carta", "Cómo llegar".

### Portada
Foto propia a sangre (local, barra o una torta) con velo chocolate al 35% para el texto. Etiqueta en Josefin Sans, título en Barlow Condensed 500 blanco, terminado con un punto dorado. Debajo, botón primario (en su versión clara: fondo papel, texto chocolate) y botón secundario en blanco.

### Punto dorado
El punto final de los títulos principales va en dorado. Es la firma gráfica del sitio, heredada del punto naranja de la referencia. Solo en títulos de nivel portada o de sección, nunca en títulos chicos.

### Tarjeta de torta
Foto arriba (proporción 4:5, radio 20px en las esquinas superiores), nombre en Barlow 500 25px, una línea de descripción en chocolate suave, y botón secundario "Encargala". Fondo blanco con sombra única, o sin tarjeta sobre papel.

### Banda educativa
Fondo salvia niebla a todo el ancho, con la trama de hojas de ROST al 6% de opacidad. Etiqueta en salvia profunda, título en chocolate, texto en chocolate suave. Es el único bloque con fondo tintado.

### Paso numerado
Para contenidos en secuencia ("Qué hace a un café de especialidad"): número en Barlow Condensed 500 40px en dorado (o salvia dentro de bandas educativas), línea fina, título chico y texto.

### Ficha de método
Para Chemex, V60, AeroPress, espresso: ilustración a línea de ROST a la izquierda (o arriba en el celular), nombre en Barlow 500, explicación breve y el perfil en la taza ("Bebida limpia en taza · Brillante, con claridad de sabores") en Josefin Sans para la etiqueta y Barlow para el detalle.

### Fila de carta
Nombre en Barlow 500 18px, descripción en Barlow 400 16px chocolate suave, precio alineado a la derecha si corresponde. Separador hilo de 1px entre filas, como en la carta impresa. Agrupadas por categoría con un título chico.

### Sello "Café de especialidad"
El sello circular de ROST (corona + "Café de especialidad · Ramona") en dorado, como ornamento en la portada o en la sección educativa. Uno por página como máximo.

### Horarios y ubicación
Días y horarios en una tabla simple (días en Barlow 500, horas alineadas), dirección "Alvear 210, Ramona" y mapa con esquinas de 20px. Botón secundario "Abrir en Google Maps".

## Imágenes

- **Fotografía propia, siempre.** Local, barra, tortas, desayunos, manos preparando café. Luz cálida y natural, fondos limpios. Nada de fotos de banco de imágenes. La carta de la web va sin precios.
- **Ilustraciones del material de ROST (Canva)** (métodos de preparación, planta del café, granos, bolsa, taza) como recurso educativo, en su color original o en chocolate, a línea. Son de licencia no exclusiva: las gratuitas pueden exportarse sueltas; las Pro se exportan integradas en un diseño compuesto y a tamaño web, nunca como elemento suelto.
- **Trama de hojas** solo como fondo muy sutil (5-8% de opacidad) en bandas educativas y el pie. Nunca detrás de texto de lectura largo.
- Íconos a línea de trazo fino en chocolate. Sin emojis.

## Tono de voz

Español rioplatense, cercano y cálido, con "vos". Didáctico sin ser técnico: se explica el porqué de las cosas con palabras simples ("el agua pasa despacio por el café y sale una taza limpia y brillante"). Frases cortas. Se puede usar el material propio de ROST: la leyenda de Kaldi, la historia del café, los pasos del café de especialidad.

## Accesibilidad

- Contraste AA como mínimo en todo texto: el dorado y el salvia claros nunca se usan para texto de lectura.
- Texto base de 18px, sin textos de lectura por debajo de 15px.
- Áreas táctiles de 48px como mínimo.
- Foco visible en todos los elementos interactivos (contorno de 2px en dorado profundo).
- Las animaciones respetan `prefers-reduced-motion`. Solo transiciones suaves de aparición; nada de parallax ni movimientos grandes.
- Todas las imágenes con texto alternativo descriptivo.

## Sí

- Usar Papel como fondo de toda la página y Salvia niebla solo en bandas educativas.
- Títulos en Barlow o Barlow Condensed 500, nunca más gruesos.
- Terminar los títulos principales con el punto dorado.
- Mantener un solo detalle de color protagonista por pantalla: dorado en venta, salvia en educación.
- Usar las ilustraciones del material de ROST en la parte educativa.
- Llevar cada sección de venta a una acción concreta: WhatsApp, carta o mapa.

## No

- No usar negrita (700 o más) en títulos.
- No usar el dorado ni el salvia claro como color de texto de lectura ni como fondo de botones con texto blanco.
- No usar degradados, sombras de colores, sombras múltiples ni esquinas rectas (0-4px) en tarjetas y botones.
- No usar la firma manuscrita más de una vez por página.
- No traer los colores de apoyo de la carta impresa (rosa, celeste, verde lima).
- No usar fotos de banco de imágenes ni ilustraciones ajenas al material de ROST.
- No recrear el wordmark "ROST" con una fuente: siempre el logo oficial.
- No poner texto de lectura sobre la trama de hojas ni sobre fotos sin velo.

## Variables CSS

```css
:root {
  --color-papel: #FFFEFB;
  --color-blanco: #FFFFFF;
  --color-chocolate: #331F13;
  --color-chocolate-suave: #5A4636;
  --color-chocolate-niebla: #8C7B6E;
  --color-dorado: #BF935E;
  --color-dorado-profundo: #8A6A45;
  --color-salvia: #86986B;
  --color-salvia-profunda: #56673F;
  --color-salvia-niebla: #F1F3EC;
  --color-hilo: #E7E1D8;
  --color-cereza: #D75730;

  --font-titulo: 'Barlow', system-ui, sans-serif;
  --font-titulo-condensado: 'Barlow Condensed', 'Barlow', system-ui, sans-serif;
  --font-etiqueta: 'Josefin Sans', system-ui, sans-serif;
  --font-texto: 'Barlow', system-ui, sans-serif;
  --font-firma: 'Yellowtail', cursive;

  --text-nota: 15px;
  --text-texto: 18px;
  --text-bajada: 21px;
  --text-titulo-chico: 25px;
  --text-titulo: 34px;
  --text-portada: 68px;
  --text-etiqueta: 13px;

  --page-max: 1200px;
  --lectura-max: 640px;
  --section-gap: 120px;
  --block-gap: 32px;
  --card-padding: 32px;

  --radius-tarjeta: 20px;
  --radius-boton: 10px;
  --radius-campo: 12px;
  --radius-chip: 9999px;

  --sombra: 0 6px 27px rgba(51, 31, 19, 0.07);
}

@media (max-width: 640px) {
  :root {
    --text-bajada: 19px;
    --text-titulo-chico: 22px;
    --text-titulo: 28px;
    --text-portada: 42px;
    --section-gap: 80px;
    --card-padding: 24px;
  }
}
```
