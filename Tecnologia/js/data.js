/* ============================================================
   DATA — Tecnología / Teoría del Color · UADE Diseño Gráfico
   Todo el contenido proviene de los apuntes, resúmenes y
   modelos de parcial de la cátedra.
   ============================================================ */

/* ---------------- 0. CONFIG DE LA MATERIA ---------------- */
const CONFIG = {
  key:'uade-tecno-v1',
  simIntro:'Módulo 1: teoría y física del color · Módulo 2: modelos y síntesis · '+
           'Módulo 3: ráster/vector y formatos · Módulo 4: resolución, perfiles y tratamiento digital.',
  fillTitulo:'5 y 10. Completá la tabla de comparación y las unidades mínimas.',
  topFacts:[
    'Espectro visible: <b>380 – 780 nm</b>',
    'RGB = <b>16.777.216</b> colores (256³), canales de <b>0 a 255</b>',
    'Kelvin: cálida <b>≤4500</b> · neutra <b>~5770</b> · fría <b>≥7500</b>',
    'Variación mínima de tinta perceptible: <b>8 %</b>',
    'Negro enriquecido: <b>C84 M83 Y73 K80</b> (papel grueso)',
    'Impresión <b>300 dpi</b> · pantalla <b>72 ppi</b> · gigantografía <b>30–50 dpi</b>',
    'El <b>ráster se rompe</b> al escalar; el <b>vector nunca</b>',
    'El gamut del <b>RGB es más amplio</b> que el del CMYK',
    'Newton <b>1704</b> (física) → Goethe <b>1810</b> (fisiología) → Ostwald <b>s.XX</b> (psicología)',
    'Conos = <b>color</b> · Bastones = <b>luminosidad</b>'
  ],
  imgs:[
    ['percepcion-ojo.png','Percepción: sin ojo y cerebro no hay color'],
    ['prisma-newton.png','Newton: descomposición de la luz blanca'],
    ['espectro-a-circulo.png','De la línea recta del espectro al círculo cromático'],
    ['circulo-cromatico.png','Círculo cromático de 12 colores'],
    ['calidos-frios.png','Ostwald: división en cálidos y fríos'],
    ['sintesis-aditiva.png','Síntesis aditiva RGB: la suma da blanco'],
    ['sintesis-sustractiva.png','Síntesis sustractiva CMY: la suma tiende al negro'],
    ['atributos-hsb.png','Matiz, luminosidad y saturación']
  ]
};

/* ---------------- 1. RESUMEN POR UNIDADES ---------------- */
const TOPICS = [
{
  id:'t1', mod:'Color', t:'Naturaleza y percepción del color', s:'Qué es el color · espectro visible · ojo y cerebro',
  body:`
  <p><b>El color es una percepción visual</b>, no una propiedad química de los objetos. Depende de cómo la luz
  interactúa con las superficies y de cómo nuestro cerebro interpreta esa energía electromagnética.
  Lo que vemos como color es, en realidad, <b>la longitud de onda reflejada</b>.</p>

  <h4>Los 3 elementos indispensables</h4>
  <ul>
    <li><b>Luz</b> — energía electromagnética (sin luz no hay color).</li>
    <li><b>Superficie / pigmento</b> — el objeto que absorbe unas longitudes de onda y refleja otras. Una pared, la piel, el pelo: todas son superficies.</li>
    <li><b>Sistema de recepción</b> — el <b>ojo humano</b> + el <b>cerebro</b> que interpreta.</li>
  </ul>

  <figure class="fg"><img src="img/percepcion-ojo.png" alt="Círculo cromático con un ojo en el centro">
  <figcaption>Sin ojo y cerebro no hay color: la percepción es la que cierra el circuito.</figcaption></figure>

  <h4>Espectro visible</h4>
  <p>La única radiación que podemos traducir a color está en la franja de <b>380 a 780 nm</b> (algunos apuntes
  de la cátedra la citan como 380–750 nm). Fuera de esa franja están los <b>rayos infrarrojos</b> y los
  <b>rayos ultravioleta</b>, que el ojo no percibe.</p>
  <div class="key"><b>Ojo con esto:</b> el resumen principal dice "por arriba infrarrojos, por debajo ultravioleta".
  Si la pregunta es de opción múltiple, la clave del examen es el rango <b>380–780 nm</b>.</div>

  <h4>Biología de la percepción (la retina)</h4>
  <ul>
    <li><b>Conos</b> → absorben las radiaciones electromagnéticas <b>cromáticas</b> (los colores) y las transforman en impulsos eléctricos.</li>
    <li><b>Bastones</b> → procesan las variaciones de <b>luminosidad</b> (luz y sombra).</li>
  </ul>

  <h4>Colores no monocromáticos</h4>
  <p>El rosado, el marrón o el <b>magenta</b> no tienen una longitud de onda única en el espectro: son
  <b>interpretaciones del cerebro</b> frente a combinaciones simultáneas de dos o más longitudes de onda.
  El magenta es la suma de los dos extremos del espectro (380 nm + 780 nm), por eso no aparece en el arcoíris.</p>

  <h4>El color es subjetivo y cultural</h4>
  <p>La percepción varía según el entorno, las emociones, la economía, la religión y la historia:</p>
  <ul>
    <li>El <b>azul ultramar</b> fue el pigmento más caro de Europa, más que el oro.</li>
    <li>El <b>rosa</b> era históricamente un color masculino; las niñas usaban celeste por la conexión con la Virgen María.</li>
    <li>En <b>Asia</b> el luto es <b>blanco</b>, no negro; y el amarillo llegó a estar prohibido para el pueblo.</li>
    <li>Los curas visten de <b>negro</b> porque es acromático: no representa ningún color.</li>
    <li>Las novias visten de blanco por su asociación con la pureza.</li>
  </ul>
  <div class="tip"><b>Frase para citar:</b> "La artista más reconocida es la naturaleza, la creadora de los mejores colores."</div>
  `
},
{
  id:'t2', mod:'Historia', t:'Historia de la teoría del color', s:'Newton 1704 · Goethe 1810 · Ostwald s.XX',
  body:`
  <p>Tres hitos, tres disciplinas. Es una de las preguntas de relación (columna A / columna B) más
  frecuentes del parcial.</p>

  <div class="tscroll"><table class="t">
    <tr><th>Disciplina</th><th>Autor y año</th><th>Aporte</th></tr>
    <tr><td>Física</td><td>Isaac Newton · 1704</td><td>Demostró la <b>descomposición de la luz blanca</b> con un prisma en 7 colores y <b>dobló la línea recta del espectro</b> para crear el primer <b>círculo cromático</b> cerrado. Propuso el primer modelo primario <b>RYB</b>.</td></tr>
    <tr><td>Fisiología / Filosofía</td><td>Johann Goethe · 1810</td><td>Desplazó el foco <b>de la luz al ojo humano</b>. Propuso los <b>colores secundarios</b> (verde, naranja, violeta) y estudió cómo percibimos el color.</td></tr>
    <tr><td>Psicología</td><td>Wilhelm Ostwald · siglo XX</td><td>Dividió el círculo según la <b>experiencia subjetiva y emocional</b>: <b>cálidos vs. fríos</b>. Es la base del diseño y del marketing actual.</td></tr>
  </table></div>

  <div class="figrow">
    <figure class="fg"><img src="img/prisma-newton.png" alt="Prisma descomponiendo luz"><figcaption>Newton: el prisma descompone la luz blanca.</figcaption></figure>
    <figure class="fg"><img src="img/espectro-a-circulo.png" alt="De línea recta a círculo"><figcaption>De la línea infinita al círculo cerrado (1704).</figcaption></figure>
    <figure class="fg"><img src="img/calidos-frios.png" alt="Círculo dividido cálidos y fríos"><figcaption>Ostwald: división emocional cálidos / fríos.</figcaption></figure>
  </div>

  <h4>De la línea infinita al círculo cerrado</h4>
  <p>En la naturaleza la luz es una <b>línea recta</b> (el espectro). En 1704 Newton <b>dobló esa línea</b>
  para conectar sus extremos opuestos (rojo y violeta). Al hacerlo creó el <b>círculo cromático</b>:
  transformó un fenómeno físico infinito en un <b>sistema geométrico cerrado y controlable</b> por el ser humano.</p>

  <h4>Los 7 colores del prisma</h4>
  <p>Rojo · Anaranjado · Amarillo · Verde · Azul · Índigo · Violeta. En realidad todos son combinaciones de
  los tres canales R, G y B.</p>
  <div class="key"><b>Truco mnemotécnico:</b> <b>F–F–P</b> = <b>F</b>ísica (Newton) → <b>F</b>isiología (Goethe) → <b>P</b>sicología (Ostwald).
  Y el orden cronológico: 1704 → 1810 → siglo XX.</div>
  `
},
{
  id:'t3', mod:'Atributos', t:'Atributos del color (modelo HSB)', s:'Matiz · Saturación · Luminosidad',
  body:`
  <figure class="fg"><img src="img/atributos-hsb.png" alt="Sliders de matiz, luminosidad y saturación">
  <figcaption>Los tres sliders: matiz (arriba), luminosidad (medio) y saturación (abajo).</figcaption></figure>

  <h4>Matiz / Tono (Hue)</h4>
  <p>Es el <b>color puro</b>, la <b>identidad</b> del color: lo que nos permite identificarlo y ubicarlo
  dentro del círculo cromático. Es lo que hace que un rojo sea rojo y no verde.</p>

  <h4>Saturación</h4>
  <p>Es la <b>pureza o intensidad cromática</b>. Un color muy saturado es vivo; a medida que se le mezcla
  <b>gris</b>, pierde saturación hasta volverse acromático.</p>

  <h4>Luminosidad / Valor (Brightness)</h4>
  <p>Es la <b>cantidad de luz</b>: su nivel de claridad (cercanía al <b>blanco</b>) u oscuridad
  (cercanía al <b>negro</b>).</p>

  <div class="key"><b>No confundir:</b> saturación = cuánto <i>gris</i> tiene. Luminosidad = cuánta <i>luz</i> tiene.
  Un rojo puede ser muy oscuro y aun así estar 100% saturado.</div>

  <h4>Blanco y negro: acromáticos</h4>
  <ul>
    <li>Son <b>acromáticos</b>: no tienen tono ni matiz, no tienen longitud de onda propia.</li>
    <li><b>Blanco</b> = la suma absoluta de todas las longitudes de onda del espectro visible. Luz en pleno.</li>
    <li><b>Negro</b> = la falta total de radiación lumínica. Ausencia total.</li>
    <li>En física óptica son <b>valores de saturación lumínica</b>, no colores.</li>
  </ul>

  <h4>Colores complementarios</h4>
  <ul>
    <li>Cian ↔ Rojo</li>
    <li>Magenta ↔ Verde</li>
    <li>Amarillo ↔ Azul</li>
  </ul>

  <h4>Vantablack</h4>
  <p>Material hecho de <b>nanotubos de carbono</b> que absorbe hasta el <b>99,96 % de la luz visible</b>.
  Es el material más oscuro conocido: el caso límite del negro como ausencia de radiación.</p>
  `
},
{
  id:'t4', mod:'Kelvin', t:'Temperatura de color (Kelvin)', s:'Fría 7500K · Neutra 5770K · Cálida 4500K',
  body:`
  <p>La <b>temperatura de color</b> indica el matiz que puede tener una <b>luz blanca</b> y se mide en
  <b>grados Kelvin (K)</b>. La luz es blanca, pero puede tener distintos matices.</p>

  <div class="tscroll"><table class="t">
    <tr><th>Tipo</th><th>Valor</th><th>Tiende a</th><th>Sensación / uso</th></tr>
    <tr><td>Luz fría</td><td>7500 K o más</td><td>Azul</td><td>Tensión, suspenso, expectativa. Distancia y calma.</td></tr>
    <tr><td>Luz neutra</td><td>5770 K – 5800 K</td><td>Blanco equilibrado</td><td>Foto de producto, noticieros, estudios de TV.</td></tr>
    <tr><td>Luz cálida</td><td>4500 K o menos</td><td>Rojo / amarillo</td><td>Energía, cercanía, intimidad, romanticismo o terror. Campañas de verano.</td></tr>
  </table></div>

  <div class="key"><b>Trampa clásica del examen:</b> es <b>contraintuitivo</b>. A <b>MENOR</b> Kelvin → luz más
  <b>CÁLIDA</b>. A <b>MAYOR</b> Kelvin → luz más <b>FRÍA</b>. Si una opción dice "la luz cálida tiene mayor
  valor de Kelvin", es falsa.</div>

  <div class="tip"><b>Cómo recordarlo:</b> pensá en una llama de gas: la parte azul es la más caliente
  físicamente, pero visualmente la llamamos "fría". La escala Kelvin mide temperatura física, no sensación.</div>
  `
},
{
  id:'t5', mod:'RGB', t:'Modelo RGB — síntesis aditiva', s:'Colores luz · inmateriales · 0 a 255 · pantallas',
  body:`
  <figure class="fg"><img src="img/sintesis-aditiva.png" alt="Círculos rojo verde y azul que suman blanco">
  <figcaption>Síntesis aditiva: R + G + B al máximo = blanco.</figcaption></figure>

  <h4>Qué es</h4>
  <p>Es el modelo de colores <b>INMATERIALES</b> (trabaja con luz), el que usan <b>pantallas, monitores,
  proyectores, fotografía digital y web</b>. Se basa en la combinación de los tres colores luminosos
  primarios: <b>Red, Green, Blue</b>.</p>

  <h4>Síntesis aditiva</h4>
  <p>Cada combinación <b>añade luz</b> hasta formar el blanco. La suma de las tres energías al máximo
  (255, 255, 255) produce <b>blanco</b>.</p>
  <ul>
    <li>Rojo + Verde = <b>Amarillo</b></li>
    <li>Rojo + Azul = <b>Magenta</b></li>
    <li>Verde + Azul = <b>Cian</b></li>
  </ul>

  <h4>Canales de energía, no colores</h4>
  <div class="key"><b>Frase clave de la cátedra:</b> "RGB no son colores, son <b>canales de energía</b>."
  La luz es energía lumínica formada por tres canales. Cada canal va de <b>0</b> (ausencia máxima) a
  <b>255</b> (máxima intensidad).</div>

  <h4>16.777.216 colores</h4>
  <p>Al combinar las distintas intensidades de los 3 canales se logran <b>256 × 256 × 256 = 256³ =
  16.777.216</b> colores matemáticos posibles, expresables en <b>código hexadecimal</b>.
  Es el <b>espectro matemático</b>: no podemos materializar ni visualizar todos esos colores.</p>

  <h4>Valor hexadecimal</h4>
  <p>Valor numérico precedido por <b>#</b> que denomina a cada uno de los 16.777.216 colores que
  podemos construir en Photoshop. Ej.: <b>#FF0000</b> = rojo puro (R255 G0 B0).</p>

  <h4>Canales</h4>
  <p>Los canales representan la información de cada componente de color de una imagen. Cada canal
  almacena la <b>intensidad o energía lumínica</b> correspondiente a ese color.</p>

  <div class="tip"><b>Importante:</b> el <b>gamut (espectro) del RGB es MÁS AMPLIO que el del CMYK</b>.
  Por eso hay colores que se ven en pantalla y no se pueden imprimir.</div>
  `
},
{
  id:'t6', mod:'CMYK', t:'Modelo CMYK — síntesis sustractiva', s:'Colores pigmento · materiales · imprenta',
  body:`
  <figure class="fg"><img src="img/sintesis-sustractiva.png" alt="Círculos cian magenta amarillo que dan negro">
  <figcaption>Síntesis sustractiva: los pigmentos restan luz hasta el negro.</figcaption></figure>

  <h4>Qué es</h4>
  <p>Es el modelo de colores <b>MATERIALES</b> (trabaja con pigmentos físicos), utilizado en
  <b>impresión, imprenta, publicaciones editoriales y papelería</b>. Usa las tintas
  <b>Cian, Magenta, Yellow y Key/Black</b>.</p>

  <h4>Síntesis sustractiva</h4>
  <p>A diferencia del RGB, los colores se forman <b>restando o sustrayendo</b>: cada capa de pigmento
  <b>resta luz al soporte</b> absorbiendo ciertas longitudes de onda, hasta formar el <b>negro</b>.</p>
  <ul>
    <li>Cian − Amarillo = <b>Verde</b></li>
    <li>Cian − Magenta = <b>Azul</b></li>
    <li>Magenta − Amarillo = <b>Rojo</b></li>
  </ul>

  <h4>Cómo se construye el color</h4>
  <p>El color se construye mediante la <b>deposición de pigmentos en diferentes ángulos (tramado)</b>
  sobre el soporte. Su <b>gamut es más reducido</b> que el del RGB.</p>

  <h4>Cuatricromía</h4>
  <p>Es la <b>técnica de impresión estándar</b> que permite reproducir una amplia gama de colores
  mediante la mezcla de las cuatro tintas básicas: cian, magenta, amarillo y negro (CMYK).</p>

  <h4>Comparativa RGB vs CMYK</h4>
  <div class="tscroll"><table class="t">
    <tr><th></th><th>RGB</th><th>CMYK</th></tr>
    <tr><td>Tipo de síntesis</td><td>Aditiva</td><td>Sustractiva</td></tr>
    <tr><td>Naturaleza</td><td>Colores luz — inmateriales</td><td>Colores pigmento — materiales</td></tr>
    <tr><td>Soporte</td><td>Pantallas y dispositivos digitales</td><td>Papel, imprenta, material</td></tr>
    <tr><td>Suma total</td><td>Da <b>blanco</b></td><td>Tiende al <b>negro</b></td></tr>
    <tr><td>Gamut</td><td>Espectro <b>más amplio</b></td><td>Espectro <b>más reducido</b></td></tr>
    <tr><td>Orden</td><td>Modelo aditivo o 1ª luz</td><td>Modelo sustractivo, 2ª luz o 1er pigmento</td></tr>
  </table></div>
  `
},
{
  id:'t7', mod:'Impresión', t:'Impresión: negros, tintas especiales y tramas', s:'8% · negro enriquecido · Pantone · AM/FM',
  body:`
  <h4>Regla del 8 %</h4>
  <div class="key">Se requiere al menos un <b>8 % de variación</b> en los porcentajes de tinta para que
  el ojo perciba un cambio de color en un impreso. Es un valor numérico muy preguntado.</div>

  <h4>Formulación de negros</h4>
  <ul>
    <li><b>Negro 100 % (solo K)</b> → para <b>textos editoriales y líneas finas</b>. Al usar una sola
    tinta se evitan los <b>descalces de registro</b> que harían ver el texto borroso o con halos de color.</li>
    <li><b>Negro profundo / enriquecido</b> → para <b>áreas grandes</b> en papel grueso:
    <b>C 84 % · M 83 % · Y 73 % · K 80 %</b>. En papeles finos se usa <b>C 30 % / K 100 %</b>.</li>
  </ul>
  <div class="tip"><b>Pregunta típica:</b> "¿Por qué no usar negro enriquecido en tipografía pequeña?"
  → Porque requiere 4 tintas en registro perfecto; el mínimo desplazamiento produce <b>descalce</b>,
  el texto pierde nitidez y aparecen bordes de color. Además satura de tinta el papel fino.</div>

  <h4>Colores especiales / tintas planas (Pantone)</h4>
  <p>Son <b>tintas premezcladas formuladas por catálogo</b>, fuera de la cuatricromía tradicional,
  para obtener colores específicos que <b>no se pueden lograr con la combinación CMYK</b>
  (fluorescentes, metalizados, un rojo corporativo exacto). Se usan para <b>garantizar la estabilidad
  colorimétrica exacta del tono en grandes tiradas corporativas</b>.</p>

  <h4>Tramas de impresión</h4>
  <ul>
    <li><b>AM — Amplitud Modulada</b>: trama convencional, puntos alineados que <b>varían de tamaño</b>.</li>
    <li><b>FM — Frecuencia Modulada</b>: trama estocástica, puntos del mismo tamaño distribuidos aleatoriamente.</li>
    <li>La <b>superposición en registro</b> de los 4 colores con distinta angulación genera la
    <b>Roseta de impresión</b>.</li>
  </ul>
  <p>Al materializarse o imprimirse, <b>tanto las imágenes ráster como las vectoriales</b> se transforman
  en un tramado de puntos superpuestos con distinta angulación.</p>
  `
},
{
  id:'t8', mod:'Ráster/Vector', t:'Ráster vs. Vectorial', s:'La pregunta clave del examen',
  body:`
  <div class="key"><b>PREGUNTA CLAVE DE EXAMEN FINAL:</b> "La diferencia radical entre un objeto ráster y
  un vector es que <b>el objeto ráster se rompe (se pixela) al escalarse</b> por estar compuesto de píxeles,
  <b>mientras que el vector nunca se rompe</b> gracias a su construcción matemática."</div>

  <div class="tscroll"><table class="t">
    <tr><th>Criterio</th><th>Gráfico ráster (mapa de bits)</th><th>Gráfico vectorial</th></tr>
    <tr><td>Unidad mínima</td><td><b>Píxel</b> (grilla con valor de brillo y color)</td><td><b>Punto</b> de ancla / nodo</td></tr>
    <tr><td>Estructura</td><td>Matriz fija de píxeles</td><td>Ecuaciones matemáticas y curvas Bézier</td></tr>
    <tr><td>Escalabilidad</td><td><b>Limitada</b>: al agrandarse se rompe o pixela</td><td><b>Infinita</b>: sin pérdida de calidad</td></tr>
    <tr><td>Software nativo</td><td>Adobe Photoshop (.psd)</td><td>Adobe Illustrator (.ai)</td></tr>
    <tr><td>Aplicación</td><td>Retoque fotográfico, composición, fotomontaje</td><td>Logotipos, marca, iconografía, señalética</td></tr>
  </table></div>

  <h4>Píxel</h4>
  <p>Es la <b>unidad mínima</b> que forma una imagen digital. Cada píxel almacena información de
  <b>color y luminosidad</b>, y se construye internamente a partir de los <b>tres canales o energías del
  modelo RGB</b>. "Romper" o pixelar una imagen ocurre cuando el píxel se visualiza al 100 %.</p>

  <h4>Vector</h4>
  <p>Es una <b>línea hacia cualquier dirección que para existir necesita al menos dos puntos</b>: uno que
  la inicie y otro que la termine (pudiendo incorporar puntos adicionales en el medio). Es el resultado
  <b>matemático de la distancia entre esos puntos</b>. No tiene píxeles; su unidad mínima es el <b>punto</b>.</p>
  <p>Su construcción prioriza la <b>precisión geométrica</b> mediante trazados, <b>nodos, curvas Bézier</b>,
  contornos, rellenos y degradados. Es la estructura principal para crear <b>logotipos</b>, ya que deben
  poder escalarse sin perder calidad.</p>

  <h4>Remuestreo o interpolación</h4>
  <p>Proceso de cambiar la resolución <b>agregando píxeles que la imagen originalmente no posee</b>
  (por ejemplo, subir en Photoshop de 72 a 150 o 300 ppi). El software "inventa" esos píxeles promediando
  los vecinos: por eso el remuestreo hacia arriba nunca recupera detalle real.</p>
  `
},
{
  id:'t9', mod:'Formatos', t:'Formatos de archivo', s:'JPG · PNG · TIFF · WEBP · GIF · RAW · AI · EPS · SVG',
  body:`
  <h4>Formatos para pantalla / web (RGB)</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Formato</th><th>Compresión</th><th>Transparencia</th><th>Notas</th></tr>
    <tr><td>.WEBP</td><td>Sí, moderna</td><td>Sí</td><td><b>Óptimo para web</b>. Pensado para RGB.</td></tr>
    <tr><td>.JPG</td><td><b>Con pérdida</b></td><td><b>No</b></td><td>Pesa poco a cambio de calidad. Reduce la paleta de colores y <b>unifica colores en función del promedio</b>. Compatible con <b>RGB y CMYK</b>.</td></tr>
    <tr><td>.PNG</td><td><b>Sin pérdida</b></td><td><b>Sí</b> — es su propiedad principal</td><td>Diseñado para <b>pantallas (RGB)</b>, no para impresión.</td></tr>
    <tr><td>.GIF</td><td>Sí</td><td>Sí, de baja calidad</td><td>Animaciones sencillas en web. <b>Limitado a 256 colores</b>. No se usa en diseño profesional.</td></tr>
  </table></div>

  <h4>Formatos para impresión y trabajo</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Formato</th><th>Tipo</th><th>Notas</th></tr>
    <tr><td>.TIFF / .TIF</td><td>Ráster</td><td><b>Ideal para impresión de imágenes ráster.</b> Mejor en <b>CMYK</b> aunque trabaja en ambos. Permite <b>no comprimir</b>, guarda capas y transparencias. Archivos <b>pesados</b>.</td></tr>
    <tr><td>.PSD</td><td>Ráster editable</td><td>Nativo de Photoshop.</td></tr>
    <tr><td>.AI</td><td>Vectorial editable</td><td>Nativo de Illustrator.</td></tr>
    <tr><td>.PDF</td><td>Mixto</td><td>Formato de <b>intercambio universal</b>, apto para web e impresión.</td></tr>
    <tr><td>.EPS</td><td>Vectorial</td><td><b>Encapsulado</b>. Se usa en Illustrator y Corel.</td></tr>
    <tr><td>.SVG</td><td>Vectorial</td><td>Basado en <b>código</b>. Estándar para intercambio y web.</td></tr>
    <tr><td>.CDR</td><td>Vectorial</td><td>Nativo de CorelDRAW.</td></tr>
    <tr><td>RAW</td><td>Ráster</td><td>Archivo <b>"en crudo"</b> del sensor de la cámara, sin procesar ni comprimir. Nativo de la fotografía digital, conserva toda la información.</td></tr>
    <tr><td>.BMP</td><td>Ráster</td><td>Estándar de Windows, sin compresión, muy pesado, en desuso.</td></tr>
    <tr><td>.TGA (Targa)</td><td>Ráster</td><td>Compresión sin pérdida. Estándar de <b>texturas en 3D y videojuegos</b>.</td></tr>
  </table></div>

  <div class="key"><b>Regla de oro de la cátedra:</b> para <b>pantallas</b> → WEBP, JPG o PNG.
  Para <b>impresión</b> → TIFF (o PDF). <b>No usamos GIF.</b></div>
  <div class="tip"><b>Ojo:</b> guardar en JPG o PNG <b>ya es de por sí comprimir</b> el archivo.
  Toda compresión implica pérdida de información y de tamaño.</div>
  `
},
{
  id:'t10', mod:'Resolución', t:'Resolución, unidades y perfiles de color', s:'PPI · DPI · 300 vs 72 · sRGB · ICC',
  body:`
  <h4>Resolución</h4>
  <p>Es la <b>cantidad de píxeles por unidad de medida</b> (pulgada o centímetro) que tiene una imagen.
  <b>No es lo mismo que calidad.</b></p>

  <h4>Unidades de medida</h4>
  <ul>
    <li><b>PPI</b> — píxeles por pulgada (pantalla).</li>
    <li><b>PPC</b> — píxeles por centímetro.</li>
    <li><b>DPI</b> — puntos por pulgada (<b>impresión</b>, puntos de tinta).</li>
    <li><b>cm²</b> — mide 1 × 1 cm.</li>
    <li><b>Pulgada²</b> — mide 2,54 cm × 2,54 cm.</li>
  </ul>

  <h4>Valores estándar</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Destino</th><th>Resolución</th></tr>
    <tr><td>Impresión de alta calidad</td><td><b>300 ppi / dpi</b></td></tr>
    <tr><td>Periódicos</td><td>150 dpi</td></tr>
    <tr><td>Pantallas / web</td><td><b>72 ppi</b> (72 a 96 ppi)</td></tr>
    <tr><td>Gigantografías (+10 m de lectura)</td><td>30 – 50 dpi</td></tr>
  </table></div>
  <div class="key"><b>Regla de las gigantografías:</b> a <b>mayor distancia de lectura, menor resolución
  requerida</b>. Un cartel de autopista no necesita 300 dpi.</div>
  <p>Una resolución demasiado baja hace que la imagen se vea <b>pixelada</b>; una excesivamente alta
  aumenta el peso del archivo <b>sin aportar mejora visible</b>.</p>

  <h4>Soporte</h4>
  <p>Es el <b>material sobre el cual se imprime</b>, generalmente el papel. Sus características influyen
  directamente en la calidad final de la impresión.</p>

  <h4>Perfiles de color</h4>
  <p>Son <b>archivos que describen cómo un dispositivo interpreta y reproduce los colores</b>.
  Su función es <b>garantizar la consistencia del color entre distintos dispositivos</b>.</p>
  <ul>
    <li><b>sRGB</b> — estándar recomendado para <b>monitores y web</b>. Asegura que los colores se vean
    parecidos en cualquier pantalla.</li>
    <li><b>Adobe RGB (1998)</b> — espectro <b>más amplio</b>, para edición fotográfica e impresión
    profesional. Requiere mejor monitor y hardware compatible.</li>
    <li><b>FOGRA39 / ISO</b> — perfiles estándar para <b>imprenta offset</b>.</li>
    <li><b>Perfiles ICC</b> — gestionan cómo se <b>traducen</b> los colores entre dispositivos
    (monitor, cámara, impresora) para que la reproducción sea lo más fiel posible.</li>
  </ul>

  <h4>Escala de grises</h4>
  <ul>
    <li>Representa imágenes usando solo tonos grises, del negro al blanco.</li>
    <li>Se obtiene <b>promediando los valores de los 3 canales RGB</b>, asignando un valor de
    iluminación a cada píxel: elimina la información de color pero <b>mantiene estructura y contraste</b>.</li>
  </ul>

  <h4>Profundidad de color y peso</h4>
  <ul>
    <li>Medida binaria: <b>8 bits = 1 byte</b>.</li>
    <li>RGB estándar de 8 bits por canal × 3 canales = <b>24 bits por píxel</b>.</li>
    <li>En software puede configurarse en <b>8, 16 o 32 bits</b> según la fidelidad y el rango dinámico requeridos.</li>
  </ul>
  `
},
{
  id:'t11', mod:'Programas', t:'Programas y las 4 dimensiones del diseño digital', s:'Photoshop · Illustrator · Figma · Premiere',
  body:`
  <h4>Las 4 dimensiones (apuntes de cátedra)</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Dimensión</th><th>Programa</th><th>Para qué</th></tr>
    <tr><td>Del <b>píxel</b> (imagen fija ráster)</td><td>Adobe Photoshop</td><td>Retoque, fotomontaje, corrección de color, composición.</td></tr>
    <tr><td><b>Vectorial</b> (imagen fija vectorial)</td><td>Adobe Illustrator</td><td>Sistemas de identidad, marcas, logotipos, iconografía, precisión formal.</td></tr>
    <tr><td><b>Interactiva</b> (interfaces y sistemas)</td><td>Figma</td><td>Prototipado interactivo, componentes reutilizables, Auto Layout, trabajo colaborativo en tiempo real (UX/UI).</td></tr>
    <tr><td><b>Temporal</b> (audiovisual)</td><td>Adobe Premiere Pro</td><td>Edición de video y audio en timeline multipista, narrativa, ritmo y montaje no destructivo.</td></tr>
  </table></div>

  <h4>Adobe Photoshop</h4>
  <ul>
    <li>Programa de edición y tratamiento de imágenes digitales orientado al trabajo con gráficos
    <b>ráster o mapa de bits</b>. Se basa en la <b>manipulación de píxeles</b>.</li>
    <li>Ideal para <b>edición fotográfica, retoque, composición visual compleja</b> y producción de piezas
    para medios impresos y digitales.</li>
    <li>Sistema de trabajo por <b>capas</b>: organiza los elementos de forma jerárquica y flexible; cada capa
    puede contener imágenes, texto, formas, efectos o ajustes, permitiendo editar cada componente
    sin afectar al resto.</li>
    <li><b>Máscaras de capa</b>: permiten ocultar o revelar partes de una imagen <b>sin eliminar información
    de manera definitiva</b>.</li>
    <li><b>Capas de ajuste</b>: modifican color, contraste, exposición y saturación <b>sin alterar
    permanentemente</b> la imagen original.</li>
    <li>Al estar basado en píxeles, si la imagen se amplía demasiado <b>pierde calidad y se pixela</b>.</li>
  </ul>
  <div class="tip"><b>Edición no destructiva</b> = máscaras de capa + capas de ajuste + objetos inteligentes.
  Es uno de los fundamentos profesionales del programa.</div>

  <h4>Adobe Illustrator</h4>
  <ul>
    <li>Software de <b>diseño y dibujo vectorial</b>: construcción <b>matemática</b> de formas, líneas y curvas.</li>
    <li>Trabaja con <b>objetos escalables</b>: se amplían o reducen <b>sin pérdida de calidad</b>.</li>
    <li>Apropiado para <b>logotipos, isotipos, sistemas de identidad visual, ilustraciones, iconografía,
    señalética e infografías</b>.</li>
    <li>Su fortaleza es la <b>precisión formal</b>: trazados, <b>nodos, curvas Bézier</b>, contornos,
    rellenos, transparencias y degradados con alto grado de control.</li>
    <li>Fuerte integración <b>tipográfica</b>: convertir texto en curvas, jerarquizar composiciones.</li>
    <li>Permite símbolos, estilos, guías, retículas y <b>mesas de trabajo múltiples</b>.
    Se trabaja <b>sin preocuparse por la resolución</b>.</li>
  </ul>

  <h4>Diferencia entre un programa vectorial y uno rasterizado</h4>
  <p>La diferencia está en <b>cómo manejan las imágenes</b>: Illustrator es vectorial y trabaja con vectores,
  lo que permite escalar a cualquier tamaño sin perder calidad; Photoshop es rasterizado y trabaja con
  píxeles, y al ampliar una imagen los píxeles se hacen visibles y la imagen pierde calidad.</p>
  `
},
{
  id:'t12', mod:'Técnico', t:'Hardware y herramientas técnicas', s:'Dot pitch · RAM · GPU · histograma · EXIF',
  body:`
  <h4>Dot pitch / Pixel pitch</h4>
  <p>Es la <b>distancia física en milímetros entre un píxel y el siguiente</b> en un monitor.
  <b>Cuanto menor es el dot pitch, mayor definición y detalle</b> tiene la pantalla
  (un monitor 4K tiene menor dot pitch que un Full HD).</p>

  <h4>Componentes de hardware para diseño</h4>
  <ul>
    <li><b>RAM</b> — permite ejecutar múltiples aplicaciones livianas o pesadas simultáneamente sin congelamientos.</li>
    <li><b>Placa de video (GPU)</b> — unidad clave para el procesamiento gráfico, el renderizado y las
    previsualizaciones en tiempo real.</li>
  </ul>

  <h4>Histograma</h4>
  <p>Gráfico que muestra la <b>distribución de píxeles según su luminosidad</b>:
  sombras → medios tonos → luces. Sirve para evaluar exposición y contraste.</p>

  <h4>Metadatos (EXIF)</h4>
  <p>Información técnica que el archivo guarda <b>sobre sí mismo</b>: fecha, apertura, velocidad de
  disparo, dimensiones, perfil de color, autor y modelo de cámara.</p>

  <h4>Herramientas de corrección en Photoshop</h4>
  <ul>
    <li><b>Pincel corrector puntual / pincel corrector</b> — corrige imperfecciones tomando la
    <b>textura</b> de una zona fuente y fusionándola con el <b>color e iluminación</b> de la zona destino.</li>
    <li><b>Pincel de ojos rojos</b> — herramienta automatizada para neutralizar el reflejo del flash en las pupilas.</li>
  </ul>
  `
}
];

/* ---------------- 2. FLASHCARDS ---------------- */
const CARDS = [
{c:'Color',q:'¿Qué es el color?',a:'Una <b>percepción visual</b>. Depende de cómo la luz interactúa con los objetos y de cómo el cerebro interpreta esa energía electromagnética. Lo que vemos es la <b>longitud de onda reflejada</b>.'},
{c:'Color',q:'¿Qué 3 elementos son indispensables para que exista color?',a:'<b>Luz</b> + <b>superficie / pigmento</b> + <b>sistema de recepción (ojo humano y cerebro)</b>.'},
{c:'Color',q:'¿Cuál es el rango del espectro visible?',a:'De <b>380 a 780 nanómetros</b>. Por encima: <b>infrarrojos</b>. Por debajo: <b>ultravioleta</b>.'},
{c:'Color',q:'¿Qué hacen los conos y los bastones?',a:'<b>Conos</b>: absorben las radiaciones electromagnéticas cromáticas (colores) y las transforman en impulsos eléctricos.<br><b>Bastones</b>: procesan las variaciones de luminosidad (luz y sombra).'},
{c:'Color',q:'¿Por qué el magenta es un color "no monocromático"?',a:'Porque <b>no tiene una longitud de onda única</b> en el espectro: es una interpretación del cerebro al recibir simultáneamente los <b>dos extremos del espectro (380 nm + 780 nm)</b>. Por eso no aparece en el arcoíris.'},
{c:'Historia',q:'Isaac Newton, 1704 — ¿qué aportó y desde qué disciplina?',a:'Desde la <b>Física</b>. Demostró la <b>descomposición de la luz blanca</b> con un prisma en 7 colores y <b>dobló la línea recta del espectro</b> creando el primer <b>círculo cromático</b>. Propuso el modelo primario <b>RYB</b>.'},
{c:'Historia',q:'Johann Goethe, 1810 — ¿qué aportó y desde qué disciplina?',a:'Desde la <b>Fisiología / Filosofía</b>. Desplazó el foco <b>de la luz al ojo humano</b>, propuso los <b>colores secundarios</b> (verde, naranja, violeta) y estudió cómo percibimos el color.'},
{c:'Historia',q:'Wilhelm Ostwald, siglo XX — ¿qué aportó y desde qué disciplina?',a:'Desde la <b>Psicología</b>. Dividió el círculo cromático según la <b>experiencia subjetiva y emocional</b>: <b>colores cálidos vs. fríos</b>. Base del diseño y el marketing actual.'},
{c:'Historia',q:'¿Qué significa "de la línea infinita al círculo cerrado"?',a:'En la naturaleza la luz es una <b>línea recta</b> (el espectro). Newton <b>dobló esa línea</b> uniendo sus extremos, convirtiendo un fenómeno físico infinito en un <b>sistema geométrico cerrado y controlable</b>: el círculo cromático.'},
{c:'Atributos',q:'¿Qué es el MATIZ o TONO (Hue)?',a:'El <b>color puro</b>: la <b>identidad</b> del color, lo que nos permite identificarlo y ubicarlo dentro del círculo cromático.'},
{c:'Atributos',q:'¿Qué es la SATURACIÓN?',a:'La <b>pureza o intensidad cromática</b>. Cuanto más <b>gris</b> se le mezcla, <b>menor</b> es la saturación.'},
{c:'Atributos',q:'¿Qué es la LUMINOSIDAD o VALOR?',a:'La <b>cantidad de luz</b>: nivel de claridad (cercanía al <b>blanco</b>) u oscuridad (cercanía al <b>negro</b>).'},
{c:'Atributos',q:'¿Por qué el blanco y el negro son acromáticos?',a:'Porque <b>no tienen tono ni matiz</b>, no poseen longitud de onda propia. Son <b>valores de saturación lumínica</b>: el blanco es la suma de todas las longitudes de onda (luz en pleno) y el negro la ausencia total de radiación lumínica.'},
{c:'Atributos',q:'Nombrá los 3 pares de colores complementarios',a:'Cian ↔ Rojo · Magenta ↔ Verde · Amarillo ↔ Azul.'},
{c:'Atributos',q:'¿Qué es el Vantablack?',a:'Material hecho de <b>nanotubos de carbono</b> que absorbe hasta el <b>99,96 % de la luz visible</b>. El material más oscuro conocido.'},
{c:'Kelvin',q:'¿En qué unidad se mide la temperatura de color y qué indica?',a:'En <b>grados Kelvin (K)</b>. Indica el <b>matiz</b> que puede tener una <b>luz blanca</b>.'},
{c:'Kelvin',q:'¿Qué valores corresponden a luz fría, neutra y cálida?',a:'<b>Fría: 7500 K o más</b> (tiende al azul — tensión, suspenso, distancia).<br><b>Neutra: 5770–5800 K</b> (foto de producto, noticiero).<br><b>Cálida: 4500 K o menos</b> (tiende al rojo/amarillo — intimidad, romanticismo, terror).'},
{c:'Kelvin',q:'¿A menor Kelvin, la luz es más cálida o más fría?',a:'Más <b>CÁLIDA</b>. Es contraintuitivo: <b>menos Kelvin = más cálida</b>, <b>más Kelvin = más fría</b>. Es la trampa clásica del examen.'},
{c:'RGB',q:'¿Qué es el modelo RGB?',a:'El modelo de colores <b>INMATERIALES</b> (trabaja con <b>luz</b>), usado en pantallas, monitores, proyectores y web. Combina los primarios luminosos <b>Red, Green, Blue</b>.'},
{c:'RGB',q:'¿Qué es la síntesis aditiva?',a:'Cada combinación <b>AÑADE luz</b> hasta formar el <b>blanco</b>. La suma de los tres canales al máximo (255,255,255) da blanco.'},
{c:'RGB',q:'¿Qué dan las mezclas de a dos en RGB?',a:'Rojo + Verde = <b>Amarillo</b><br>Rojo + Azul = <b>Magenta</b><br>Verde + Azul = <b>Cian</b>'},
{c:'RGB',q:'¿Por qué se dice que RGB no son colores?',a:'Porque son <b>3 canales de energía</b> lumínica, no pigmentos. Cada canal va de <b>0</b> (ausencia máxima) a <b>255</b> (máxima intensidad).'},
{c:'RGB',q:'¿Cuántos colores permite construir el modelo RGB y por qué?',a:'<b>16.777.216</b> colores, porque son <b>256 × 256 × 256 = 256³</b> (los tres canales de 0 a 255). Es el "espectro matemático", expresable en <b>hexadecimal</b>.'},
{c:'RGB',q:'¿Qué es el valor hexadecimal?',a:'Un <b>valor numérico precedido por #</b> que denomina a cada uno de los 16.777.216 colores construibles en Photoshop. Ej.: #FF0000 = rojo puro.'},
{c:'CMYK',q:'¿Qué es el modelo CMYK?',a:'El modelo de colores <b>MATERIALES</b> (trabaja con <b>pigmentos físicos</b>), usado en impresión. Tintas <b>Cian, Magenta, Yellow y Key (negro)</b>.'},
{c:'CMYK',q:'¿Qué es la síntesis sustractiva?',a:'Cada capa de pigmento <b>RESTA luz</b> al soporte absorbiendo longitudes de onda, hasta tender al <b>negro</b>.'},
{c:'CMYK',q:'¿Qué modelo tiene mayor gamut, RGB o CMYK?',a:'<b>RGB</b>. Su espectro es más amplio; el de CMYK es más reducido. Por eso hay colores que se ven en pantalla pero no se pueden imprimir.'},
{c:'CMYK',q:'¿Qué es la cuatricromía?',a:'La <b>técnica de impresión estándar</b> que reproduce una amplia gama de colores mediante la mezcla de las cuatro tintas básicas <b>CMYK</b>.'},
{c:'CMYK',q:'¿Cómo se construye el color en el modelo CMYK sobre el soporte?',a:'Mediante la <b>deposición de pigmentos en diferentes ángulos (tramado)</b> sobre el soporte.'},
{c:'Impresión',q:'¿Cuál es la variación mínima de tinta para que el ojo perciba un cambio de color?',a:'<b>8 %</b>.'},
{c:'Impresión',q:'¿Cuándo se usa negro 100 % K y cuándo negro enriquecido?',a:'<b>K 100 %</b> → textos editoriales y líneas finas (evita descalces).<br><b>Negro profundo</b> (C84 M83 Y73 K80) → áreas grandes en papel grueso. En papel fino: C30 / K100.'},
{c:'Impresión',q:'¿Por qué NO usar negro enriquecido en tipografía pequeña?',a:'Porque requiere <b>4 tintas en registro perfecto</b>; el mínimo desplazamiento genera <b>descalce</b>, el texto pierde nitidez y aparecen halos de color. Además satura de tinta el papel.'},
{c:'Impresión',q:'¿Qué es un color especial o tinta plana (Pantone)?',a:'Una <b>tinta premezclada formulada por catálogo</b>, <b>fuera de la cuatricromía</b>, para lograr colores que el CMYK no puede (fluo, metalizados, un corporativo exacto) y <b>garantizar estabilidad del tono en grandes tiradas</b>.'},
{c:'Impresión',q:'¿Qué son las tramas AM y FM, y qué es la roseta?',a:'<b>AM (Amplitud Modulada)</b>: trama convencional, puntos alineados de tamaño variable.<br><b>FM (Frecuencia Modulada)</b>: estocástica, puntos iguales distribuidos al azar.<br>La <b>superposición en registro</b> de los 4 colores genera la <b>roseta de impresión</b>.'},
{c:'Ráster/Vector',q:'★ ¿Cuál es la diferencia radical entre un objeto ráster y un vector?',a:'El objeto <b>ráster se rompe (se pixela) al escalarse</b> por estar compuesto de píxeles, mientras que el <b>vector nunca se rompe</b> gracias a su construcción matemática.'},
{c:'Ráster/Vector',q:'¿Qué es un píxel?',a:'La <b>unidad mínima</b> que forma una imagen digital. Almacena información de <b>color y luminosidad</b> y se construye a partir de los <b>3 canales RGB</b>.'},
{c:'Ráster/Vector',q:'¿Qué es un vector?',a:'Una <b>línea hacia cualquier dirección que para existir necesita al menos dos puntos</b>: uno que la inicie y otro que la termine. Es el resultado <b>matemático</b> de la distancia entre esos puntos. Su unidad mínima es el <b>punto</b>.'},
{c:'Ráster/Vector',q:'¿Qué son las curvas Bézier y los nodos?',a:'Elementos propios de la <b>construcción vectorial</b>. Permiten controlar trazados con precisión geométrica en Illustrator.'},
{c:'Ráster/Vector',q:'¿Qué es el remuestreo o interpolación?',a:'Cambiar la resolución <b>agregando píxeles que la imagen originalmente no posee</b> (ej.: subir de 72 a 300 ppi en Photoshop). El software los "inventa" promediando vecinos.'},
{c:'Ráster/Vector',q:'¿Cuándo se dice que una imagen "se rompe"?',a:'Cuando el <b>píxel se visualiza al 100 %</b>, es decir, cuando se hace visible al ampliar la imagen.'},
{c:'Formatos',q:'.JPG — características',a:'Compresión <b>CON pérdida</b>. Pesa poco a cambio de calidad: reduce la paleta de colores y <b>unifica colores en función del promedio</b>. Sirve en <b>RGB y CMYK</b>. <b>No guarda transparencia.</b>'},
{c:'Formatos',q:'.PNG — características',a:'Compresión <b>SIN pérdida</b>. Diseñado para <b>pantallas (RGB)</b>, no para impresión. Su propiedad principal es que <b>admite transparencia</b>.'},
{c:'Formatos',q:'.TIFF — características',a:'Formato <b>ideal para impresión de imágenes ráster</b>. Mejor en <b>CMYK</b>, aunque trabaja en ambos. <b>Permite no comprimir</b>, guarda capas y transparencias. Archivos <b>pesados</b>.'},
{c:'Formatos',q:'.WEBP — características',a:'Formato moderno <b>óptimo para web</b>, pensado para <b>RGB</b> / pantallas.'},
{c:'Formatos',q:'.GIF — características',a:'Orientado a <b>animaciones sencillas en web</b> (RGB). Limitado a <b>256 colores</b>, con transparencia de baja calidad. <b>No se usa</b> en diseño profesional.'},
{c:'Formatos',q:'¿Qué es un archivo RAW?',a:'Un archivo <b>"en crudo"</b> que captura el sensor de la cámara, <b>sin procesar ni comprimir</b>. Nativo de la fotografía digital, conserva toda la información capturada.'},
{c:'Formatos',q:'.EPS, .SVG, .AI, .CDR — ¿qué son?',a:'Formatos <b>vectoriales</b>.<br><b>.AI</b>: nativo de Illustrator. <b>.EPS</b>: encapsulado (Illustrator y Corel). <b>.SVG</b>: basado en código, estándar web. <b>.CDR</b>: nativo de CorelDRAW.'},
{c:'Formatos',q:'¿Qué formatos para pantalla y cuáles para impresión?',a:'<b>Pantalla</b>: WEBP, JPG o PNG.<br><b>Impresión</b>: TIFF (o PDF).<br><b>No usamos GIF.</b>'},
{c:'Formatos',q:'¿Qué implica guardar en JPG o PNG?',a:'Ya es <b>comprimir</b> el archivo de por sí. <b>Toda compresión indica pérdida de información y de tamaño.</b>'},
{c:'Resolución',q:'¿Qué es la resolución?',a:'La <b>cantidad de píxeles por unidad de medida</b> (pulgada o centímetro) de una imagen. <b>No es lo mismo que calidad.</b>'},
{c:'Resolución',q:'PPI vs DPI',a:'<b>PPI</b> = píxeles por pulgada → <b>pantalla</b>.<br><b>DPI</b> = puntos por pulgada (puntos de tinta) → <b>impresión</b>.'},
{c:'Resolución',q:'Valores estándar de resolución',a:'Impresión alta calidad: <b>300 ppi/dpi</b>. Periódicos: 150 dpi. Pantalla/web: <b>72 ppi</b> (72–96). Gigantografías a +10 m: 30–50 dpi.'},
{c:'Resolución',q:'¿Qué pasa con las gigantografías?',a:'A <b>mayor distancia de lectura, menor resolución requerida</b>. Un cartel visto a más de 10 m puede imprimirse a 30–50 dpi.'},
{c:'Resolución',q:'¿Cuánto mide una pulgada cuadrada?',a:'<b>2,54 cm × 2,54 cm</b>. (El cm² mide 1 × 1 cm.)'},
{c:'Resolución',q:'¿Qué es el soporte?',a:'El <b>material sobre el cual se va a imprimir</b>, generalmente el papel. Sus características influyen directamente en la calidad final.'},
{c:'Perfiles',q:'¿Qué es un perfil de color y para qué sirve?',a:'Un <b>archivo que describe cómo un dispositivo interpreta y reproduce los colores</b>. Sirve para <b>garantizar la consistencia del color entre distintos dispositivos</b>.'},
{c:'Perfiles',q:'sRGB vs Adobe RGB (1998)',a:'<b>sRGB</b>: estándar para <b>monitores y web</b>; asegura colores parecidos en cualquier pantalla.<br><b>Adobe RGB (1998)</b>: espectro <b>más amplio</b>, para edición fotográfica e impresión profesional; requiere mejor hardware.'},
{c:'Perfiles',q:'¿Qué son los perfiles ICC y FOGRA39?',a:'<b>ICC</b>: gestionan cómo se <b>traducen</b> los colores entre dispositivos (monitor, cámara, impresora).<br><b>FOGRA39 / ISO</b>: perfiles estándar para <b>imprenta offset</b>.'},
{c:'Perfiles',q:'¿Cómo se obtiene la escala de grises desde RGB?',a:'<b>Promediando los valores de los 3 canales</b> y asignando un valor de iluminación a cada píxel: elimina la información de color pero <b>mantiene estructura y contraste</b>.'},
{c:'Técnico',q:'¿Qué es la profundidad de color?',a:'La cantidad de bits por píxel. <b>8 bits = 1 byte</b>. RGB estándar: 8 bits × 3 canales = <b>24 bits por píxel</b>. En software puede ser 8, 16 o 32 bits.'},
{c:'Técnico',q:'¿Qué es el dot pitch / pixel pitch?',a:'La <b>distancia física en milímetros entre un píxel y el siguiente</b> en un monitor. <b>Cuanto menor, mayor definición</b> (un 4K tiene menor dot pitch que un Full HD).'},
{c:'Técnico',q:'¿Qué es un histograma?',a:'Gráfico que muestra la <b>distribución de píxeles según su luminosidad</b>: sombras → medios tonos → luces.'},
{c:'Técnico',q:'¿Qué son los metadatos EXIF?',a:'Información técnica que el archivo guarda <b>sobre sí mismo</b>: fecha, apertura, velocidad de disparo, dimensiones, perfil de color, autor y modelo de cámara.'},
{c:'Técnico',q:'RAM vs GPU en un equipo de diseño',a:'<b>RAM</b>: permite ejecutar múltiples aplicaciones simultáneamente sin congelamientos.<br><b>GPU (placa de video)</b>: procesamiento gráfico, renderizado y previsualizaciones en tiempo real.'},
{c:'Programas',q:'¿Cuáles son las 4 dimensiones del diseño digital y sus programas?',a:'<b>Píxel</b> → Photoshop · <b>Vectorial</b> → Illustrator · <b>Interactiva</b> → Figma · <b>Temporal</b> → Premiere Pro.'},
{c:'Programas',q:'¿Qué es Photoshop y para qué sirve?',a:'Programa de edición y tratamiento de imágenes <b>ráster</b> basado en la <b>manipulación de píxeles</b>. Ideal para retoque fotográfico, fotomontaje, corrección de color y composición compleja.'},
{c:'Programas',q:'¿Qué es Illustrator y para qué sirve?',a:'Software de diseño y dibujo <b>vectorial</b> basado en la <b>construcción matemática</b> de formas. Ideal para logotipos, identidad visual, iconografía, señalética e infografías escalables.'},
{c:'Programas',q:'¿Qué es la edición no destructiva?',a:'Trabajar mediante <b>máscaras de capa</b> y <b>capas de ajuste</b>, que permiten ocultar o modificar información <b>sin eliminar píxeles definitivamente</b>.'},
{c:'Programas',q:'¿Qué hace el pincel corrector puntual?',a:'Corrige imperfecciones tomando la <b>textura</b> de una zona fuente y fusionándola con el <b>color y la iluminación</b> de la zona destino.'},
{c:'Programas',q:'¿Para qué sirve Figma?',a:'Es la <b>dimensión interactiva</b>: prototipado interactivo, componentes reutilizables, Auto Layout y trabajo colaborativo en tiempo real para <b>UX/UI</b>.'},
{c:'Programas',q:'¿Qué diferencia hay entre un programa vectorial y uno rasterizado?',a:'Illustrator (vectorial) trabaja con <b>vectores</b> y permite escalar a cualquier tamaño <b>sin perder calidad</b>; Photoshop (rasterizado) trabaja con <b>píxeles</b> y al ampliar los píxeles se hacen visibles y la imagen pierde calidad.'}
];

/* ---------------- 3. BANCO DE PREGUNTAS (múltiple opción) ---------------- */
const QUIZ = [
{m:'Color',q:'¿Cómo se define el color y cuál es el rango del espectro visible?', sim:true,
 o:['Es una propiedad química intrínseca de los objetos; rango entre 100 y 500 nm.',
    'Es una percepción visual fruto de la interacción entre luz, superficie y sistema visual humano (ojo/cerebro); rango entre 380 y 780 nm.',
    'Es la suma de las energías lumínicas visibles e invisibles; rango de 0 a 255 Kelvin.',
    'Es el resultado exclusivo del modelo CMYK; rango entre 200 y 1000 nm.'],
 r:1,e:'El color NO es una propiedad del objeto: es una percepción que requiere luz + superficie + ojo/cerebro. El rango del espectro visible es 380–780 nm.'},
{m:'Color',q:'¿Qué elemento NO es indispensable para que exista el color?',
 o:['La luz','Una superficie o pigmento','El ojo humano y el cerebro','Una pantalla digital'],
 r:3,e:'El color existe mucho antes que las pantallas. Los tres elementos indispensables son luz, superficie/pigmento y el sistema de recepción (ojo + cerebro).'},
{m:'Color',q:'En la retina, ¿qué función cumplen los BASTONES?',
 o:['Absorben las radiaciones cromáticas y las convierten en color',
    'Procesan las variaciones de luminosidad (luz y sombra)',
    'Generan la temperatura de color en Kelvin',
    'Traducen el modelo CMYK a RGB'],
 r:1,e:'Bastones = luminosidad (luz/sombra). Conos = color (radiaciones cromáticas).'},
{m:'Color',q:'¿Por qué el magenta no aparece en el arcoíris?',
 o:['Porque es un color acromático',
    'Porque es un color no monocromático: no tiene longitud de onda única, resulta de combinar los dos extremos del espectro',
    'Porque pertenece exclusivamente al modelo RGB',
    'Porque su longitud de onda está en el infrarrojo'],
 r:1,e:'El magenta es una interpretación del cerebro al recibir simultáneamente los extremos del espectro (380 nm + 780 nm). No es monocromático.'},
{m:'Historia',q:'Relacione: I. Newton (Física) · II. Goethe (Fisiología) · III. Ostwald (Psicología) con 1. división cálidos/fríos, 2. descomposición de la luz blanca y primer círculo cromático RYB, 3. foco en la percepción del ojo y colores secundarios.', sim:true,
 o:['I-1, II-2, III-3','I-2, II-3, III-1','I-3, II-1, III-2','I-2, II-1, III-3'],
 r:1,e:'Newton → descomposición de la luz (2). Goethe → percepción del ojo y secundarios (3). Ostwald → cálidos vs. fríos (1). Respuesta: I-2, II-3, III-1.'},
{m:'Historia',q:'¿En qué año y con qué acción creó Newton el círculo cromático?',
 o:['En 1810, mezclando pigmentos primarios',
    'En 1704, doblando la línea recta del espectro para unir sus extremos',
    'En el siglo XX, clasificando colores por emoción',
    'En 1704, promediando los canales RGB'],
 r:1,e:'En 1704 Newton dobló la línea recta del espectro conectando sus extremos opuestos, transformando un fenómeno físico infinito en un sistema geométrico cerrado.'},
{m:'Historia',q:'¿Qué modelo primario propuso Newton?',
 o:['CMYK','RGB','RYB (red, yellow, blue)','HSB'],
 r:2,e:'Newton propuso el primer modelo primario RYB, utilizado en soportes como lienzos y pintura.'},
{m:'Historia',q:'¿Cuáles son los colores secundarios que propuso Goethe?',
 o:['Cian, magenta y amarillo','Verde, naranja y violeta','Rojo, verde y azul','Blanco, negro y gris'],
 r:1,e:'Goethe, desde la fisiología, introdujo el análisis de los secundarios: verde, naranja y violeta.'},
{m:'Atributos',q:'¿Cuál de estas definiciones corresponde a la SATURACIÓN?',
 o:['La cantidad de luz, su cercanía al blanco o al negro',
    'La identidad del color dentro del círculo cromático',
    'La pureza o intensidad cromática; disminuye al mezclarse con gris',
    'El matiz que puede tener una luz blanca'],
 r:2,e:'Saturación = pureza/intensidad. Cuanto más gris se mezcla, menor saturación. La cantidad de luz es luminosidad; la identidad es el matiz.'},
{m:'Atributos',q:'El MATIZ o HUE es...',
 o:['La cantidad de gris de un color','El color puro: la identidad que permite identificarlo en el círculo cromático',
    'El grado de claridad u oscuridad','La medida en grados Kelvin'],
 r:1,e:'El matiz es la identidad esencial del color y su posición en el círculo cromático.'},
{m:'Atributos',q:'¿Por qué el blanco y el negro se consideran acromáticos?',
 o:['Porque se imprimen solo con tinta K',
    'Porque no tienen tono ni matiz: son valores de saturación lumínica, no colores con longitud de onda propia',
    'Porque pertenecen únicamente al modelo CMYK',
    'Porque son los únicos colores del espectro visible'],
 r:1,e:'No tienen matiz. El blanco es la suma de todas las longitudes de onda (luz en pleno) y el negro la ausencia total de radiación lumínica.'},
{m:'Atributos',q:'¿Cuál es el complementario del CIAN?',
 o:['Verde','Rojo','Amarillo','Magenta'],
 r:1,e:'Los pares complementarios son: Cian↔Rojo, Magenta↔Verde, Amarillo↔Azul.'},
{m:'Atributos',q:'¿Qué es el Vantablack?',
 o:['Un perfil de color para imprenta offset',
    'Una tinta Pantone metalizada',
    'Un material de nanotubos de carbono que absorbe hasta el 99,96 % de la luz visible',
    'El negro enriquecido de la cuatricromía'],
 r:2,e:'Vantablack: nanotubos de carbono, absorbe hasta el 99,96 % de la luz visible.'},
{m:'Kelvin',q:'Indique la afirmación CORRECTA respecto a la temperatura de color:', sim:true,
 o:['Se mide en grados Kelvin; una luz cálida tiene mayor valor de Kelvin que una luz fría.',
    'A menor valor en grados Kelvin (ej. 4500 K), la luz adquiere matices más cálidos; a mayor valor (ej. 7500 K), los matices son más fríos.',
    'La luz neutra estándar para estudio de TV o foto de producto se ubica sobre los 10.000 K.',
    'Los valores Kelvin indican directamente el porcentaje de tinta magenta en la impresión.'],
 r:1,e:'Es contraintuitivo pero así funciona: MENOS Kelvin = más cálida (rojo/amarillo); MÁS Kelvin = más fría (azul). La neutra está en 5770–5800 K.'},
{m:'Kelvin',q:'Una escena de suspenso con luz azulada y sensación de tensión corresponde aproximadamente a:',
 o:['3000 K','4500 K','5770 K','7500 K o más'],
 r:3,e:'Luz fría (7500 K o más): tiende al azul y transmite tensión, suspenso y expectativa.'},
{m:'Kelvin',q:'¿Qué temperatura se usa para fotografía de producto y estudios de televisión?',
 o:['Cálida, 4500 K o menos','Neutra, 5770–5800 K','Fría, 7500 K o más','10.000 K'],
 r:1,e:'La luz neutra (≈5770 K) es blanca equilibrada: es la de referencia para producto y TV.'},
{m:'RGB',q:'El modelo RGB se caracteriza por:',
 o:['Ser un modelo de colores materiales basado en pigmentos',
    'Ser un modelo de colores inmateriales formado por 3 canales de energía de 0 a 255, cuya suma máxima da blanco',
    'Trabajar por sustracción de luz hasta llegar al negro',
    'Estar limitado a 256 colores'],
 r:1,e:'RGB: colores luz / inmateriales, 3 canales de energía (0–255), síntesis aditiva, suma máxima = blanco.'},
{m:'RGB',q:'¿Cuántos colores permite construir el modelo RGB de 8 bits por canal?',
 o:['256','65.536','16.777.216','4.294.967.296'],
 r:2,e:'256 × 256 × 256 = 256³ = 16.777.216 colores, el "espectro matemático" expresable en hexadecimal.'},
{m:'RGB',q:'En síntesis aditiva, Rojo + Verde =',
 o:['Cian','Magenta','Amarillo','Blanco'],
 r:2,e:'R+G = Amarillo · R+B = Magenta · G+B = Cian. Los tres juntos = blanco.'},
{m:'RGB',q:'¿Qué afirmación sobre los canales RGB es correcta?',
 o:['Son tres colores pigmento que se mezclan físicamente',
    'Son tres canales de energía lumínica; cada uno va de 0 (ausencia) a 255 (máxima intensidad)',
    'Van de 0 a 100 %, como el CMYK',
    'Solo existen en el modo escala de grises'],
 r:1,e:'Frase de la cátedra: "RGB no son colores, son canales de energía." Cada canal: 0 a 255.'},
{m:'RGB',q:'¿Qué es el valor hexadecimal?',
 o:['El porcentaje de tinta de cada canal CMYK',
    'Un valor numérico precedido por # que denomina a cada uno de los 16.777.216 colores construibles',
    'La distancia en mm entre píxeles de un monitor',
    'La cantidad de bits por canal'],
 r:1,e:'El hexadecimal (#RRGGBB) nombra cada color del espectro matemático RGB.'},
{m:'CMYK',q:'El modelo CMYK se caracteriza por:',
 o:['Ser aditivo y dar blanco al sumar todo',
    'Ser sustractivo: cada capa de pigmento resta luz al soporte y la suma tiende al negro',
    'Tener un gamut más amplio que el RGB',
    'Ser el modelo nativo de las pantallas'],
 r:1,e:'CMYK: colores pigmento / materiales, síntesis sustractiva, la suma tiende al negro, gamut más reducido que RGB.'},
{m:'CMYK',q:'¿Qué modelo tiene el espectro (gamut) más amplio?',
 o:['CMYK, porque usa 4 tintas','RGB, porque trabaja con energía lumínica','Ambos tienen el mismo gamut','Depende del papel'],
 r:1,e:'EL MODELO RGB ES MÁS GRANDE QUE EL CMYK. Por eso hay colores visibles en pantalla que no se pueden imprimir.'},
{m:'CMYK',q:'¿Qué significa la K de CMYK?',
 o:['Kelvin','Key / Black (negro)','Kilobyte','Kilo-pixel'],
 r:1,e:'K = Key o Black, la tinta negra de la cuatricromía.'},
{m:'CMYK',q:'¿Qué es la cuatricromía?',
 o:['Un perfil de color ICC',
    'La técnica de impresión estándar que reproduce colores mezclando las cuatro tintas CMYK',
    'La división del círculo cromático en 4 cuadrantes',
    'Un sistema de tintas Pantone'],
 r:1,e:'Cuatricromía = impresión estándar con cian, magenta, amarillo y negro.'},
{m:'Impresión',q:'¿Cuál es la variación mínima porcentual de tinta para que el ojo perciba un cambio de color en impresión?', sim:true,
 o:['1 %','5 %','8 %','15 %'],
 r:2,e:'Se requiere al menos un 8 % de variación para que el cambio sea perceptible.'},
{m:'Impresión',q:'¿Por qué NO se usa negro enriquecido (C84 M83 Y73 K80) en cuerpos de texto pequeños?',
 o:['Porque es más caro que el negro 100 %',
    'Porque requiere 4 tintas en registro perfecto y cualquier desplazamiento produce descalce, restando nitidez al texto',
    'Porque el papel no absorbe el cian',
    'Porque el negro enriquecido no existe en CMYK'],
 r:1,e:'El descalce de registro entre las 4 tintas produce halos de color y pérdida de nitidez en tipografías finas. Por eso se usa K 100 %.'},
{m:'Impresión',q:'¿Qué es un color especial o tinta plana (Pantone)?',
 o:['Un color obtenido promediando los canales RGB',
    'Una tinta premezclada formulada por catálogo, fuera de la cuatricromía, para garantizar estabilidad exacta del tono',
    'El negro profundo usado en papel grueso',
    'Un perfil de color para monitores'],
 r:1,e:'Las tintas planas se formulan fuera del CMYK (fluo, metalizados, corporativos) y aseguran el tono exacto en tiradas grandes.'},
{m:'Impresión',q:'La superposición en registro de las 4 tintas con distinta angulación genera:',
 o:['El histograma','La roseta de impresión','El gamut','El dot pitch'],
 r:1,e:'La roseta de impresión es el patrón que resulta de superponer las tramas de los 4 colores en distintos ángulos.'},
{m:'Impresión',q:'Las tramas AM y FM se diferencian en que:',
 o:['AM usa puntos alineados que varían de tamaño; FM usa puntos iguales distribuidos aleatoriamente (estocástica)',
    'AM es para RGB y FM para CMYK',
    'AM se usa en pantallas y FM en papel',
    'No hay diferencia, son sinónimos'],
 r:0,e:'AM = Amplitud Modulada (puntos de tamaño variable, alineados). FM = Frecuencia Modulada o estocástica (puntos iguales, distribución aleatoria).'},
{m:'Ráster/Vector',q:'★ ¿Cuál es la diferencia radical entre un objeto ráster y un vector al escalarlos?',
 o:['El vector pierde color y el ráster no',
    'El ráster se rompe (se pixela) por estar compuesto de píxeles; el vector nunca se rompe por su construcción matemática',
    'Ambos se pixelan, pero el vector más lentamente',
    'El ráster se puede escalar infinitamente y el vector no'],
 r:1,e:'Pregunta clave de examen. Ráster = píxeles → se rompe. Vector = ecuaciones matemáticas → nunca se rompe.'},
{m:'Ráster/Vector',q:'La unidad mínima de un gráfico ráster es ____ y la de construcción vectorial es ____:',
 o:['el vector / el píxel','el píxel / el punto (nodo de ancla)','el nodo / el trazado','el bit / el byte'],
 r:1,e:'Ráster → píxel. Vectorial → punto de ancla o nodo.'},
{m:'Ráster/Vector',q:'Las curvas Bézier y los nodos son propios de la construcción:',
 o:['ráster','vectorial','tramada','hexadecimal'],
 r:1,e:'Bézier y nodos = construcción vectorial (Illustrator).'},
{m:'Ráster/Vector',q:'¿Qué es el remuestreo o interpolación?',
 o:['Convertir una imagen de RGB a CMYK',
    'Agrandar una imagen agregando píxeles que originalmente no posee',
    'Aplicar una trama de impresión',
    'Reducir la profundidad de color a 256 tonos'],
 r:1,e:'Ej.: subir en Photoshop de 72 a 150/300 ppi. El software inventa los píxeles nuevos promediando los vecinos.'},
{m:'Ráster/Vector',q:'¿Qué es un vector, técnicamente?',
 o:['Una matriz fija de píxeles',
    'Una línea hacia cualquier dirección que para existir necesita al menos dos puntos: uno inicial y uno final',
    'Un canal de energía de 0 a 255',
    'Un punto de tinta con angulación'],
 r:1,e:'El vector es el resultado matemático de la distancia entre al menos dos puntos.'},
{m:'Formatos',q:'¿Qué formato es IDEAL para impresión de imágenes ráster?',
 o:['.GIF','.PNG','.TIFF','.WEBP'],
 r:2,e:'TIFF: mejor en CMYK, permite no comprimir, guarda capas y transparencias. Ideal para impresión.'},
{m:'Formatos',q:'¿Cuál es la propiedad PRINCIPAL del .PNG?',
 o:['Es vectorial','Admite transparencia y usa compresión sin pérdida','Está limitado a 256 colores','Es el estándar para imprenta CMYK'],
 r:1,e:'PNG: compresión sin pérdida, diseñado para pantallas (RGB), su cualidad principal es la transparencia.'},
{m:'Formatos',q:'¿Qué hace el .JPG al comprimir?',
 o:['Conserva toda la información original',
    'Reduce la paleta de colores y unifica colores en función del promedio, con pérdida de calidad',
    'Convierte la imagen en vectores',
    'Agrega un canal alfa de transparencia'],
 r:1,e:'JPG: compresión con pérdida. Disminuye la profundidad de color y unifica píxeles parecidos promediándolos. No guarda transparencia.'},
{m:'Formatos',q:'¿Cuál de estos formatos está limitado a 256 colores?',
 o:['.TIFF','.PNG','.GIF','.WEBP'],
 r:2,e:'GIF: 256 colores, animaciones sencillas en web, transparencia de baja calidad. No se usa en diseño profesional.'},
{m:'Formatos',q:'¿Qué es un archivo RAW?',
 o:['Un vector encapsulado','Un archivo "en crudo" del sensor de la cámara, sin procesar ni comprimir',
    'Un perfil ICC','Un formato de animación web'],
 r:1,e:'RAW conserva toda la información capturada por el sensor, sin pérdida. Nativo de la fotografía digital.'},
{m:'Formatos',q:'¿Cuáles de estos son formatos VECTORIALES?',
 o:['.JPG, .PNG, .TIFF','.AI, .EPS, .SVG, .CDR','.RAW, .BMP, .TGA','.GIF, .WEBP, .PSD'],
 r:1,e:'AI (Illustrator), EPS (encapsulado), SVG (código) y CDR (CorelDRAW) son vectoriales.'},
{m:'Formatos',q:'Guardar una imagen en JPG o PNG implica que:',
 o:['No se pierde nada de información','Ya se está comprimiendo el archivo, y toda compresión implica pérdida de información y de tamaño',
    'La imagen se convierte a CMYK','La imagen pasa a ser vectorial'],
 r:1,e:'Según la cátedra: guardar en jpg o png es de por sí comprimir. Toda compresión indica pérdida de información y de tamaño.'},
{m:'Resolución',q:'Un diseñador prepara una pieza para revista impresa de alta calidad y otra para redes sociales. ¿Cuál es la configuración correcta?', sim:true,
 o:['Impresión: 72 ppi, RGB, JPG / Pantalla: 300 ppi, CMYK, TIFF',
    'Impresión: 300 ppi/dpi, CMYK, TIFF o PDF / Pantalla: 72-96 ppi, sRGB, JPG o PNG',
    'Impresión: 150 ppi, RGB, WEBP / Pantalla: 300 ppi, CMYK, PNG',
    'Ambas a 300 ppi en Adobe RGB guardadas en GIF'],
 r:1,e:'Impresión alta calidad: 300 ppi, CMYK, TIFF/PDF. Pantalla: 72–96 ppi, sRGB, JPG/PNG.'},
{m:'Resolución',q:'¿Qué diferencia hay entre PPI y DPI?',
 o:['PPI es para impresión y DPI para pantalla',
    'PPI = píxeles por pulgada (pantalla); DPI = puntos de tinta por pulgada (impresión)',
    'Son exactamente lo mismo',
    'PPI mide la profundidad de color y DPI el gamut'],
 r:1,e:'PPI → píxeles por pulgada (pantalla). DPI → puntos por pulgada, puntos de tinta (impresión).'},
{m:'Resolución',q:'Para una gigantografía que se lee a más de 10 metros, la resolución adecuada es:',
 o:['300 dpi','150 dpi','30–50 dpi','600 dpi'],
 r:2,e:'A mayor distancia de lectura, menor resolución requerida: 30–50 dpi a más de 10 metros.'},
{m:'Resolución',q:'¿Es lo mismo resolución que calidad?',
 o:['Sí, siempre','No: la resolución es la cantidad de píxeles por unidad de medida; una resolución excesiva solo aumenta el peso sin mejora visible',
    'Sí, si la imagen está en CMYK','Solo en imágenes vectoriales'],
 r:1,e:'La resolución no es calidad. Muy baja → pixelado; excesivamente alta → archivo pesado sin mejora visible.'},
{m:'Resolución',q:'Una pulgada cuadrada mide:',
 o:['1 cm × 1 cm','2,54 cm × 2,54 cm','10 mm × 10 mm','72 px × 72 px'],
 r:1,e:'1 pulgada = 2,54 cm, entonces una pulgada cuadrada mide 2,54 × 2,54 cm.'},
{m:'Perfiles',q:'¿Para qué sirve un perfil de color?',
 o:['Para aumentar la resolución de una imagen',
    'Para describir cómo un dispositivo interpreta y reproduce los colores, garantizando consistencia entre dispositivos',
    'Para comprimir archivos sin pérdida',
    'Para convertir vectores en píxeles'],
 r:1,e:'Los perfiles (sRGB, Adobe RGB, FOGRA39, ICC) garantizan la consistencia del color entre monitor, cámara e impresora.'},
{m:'Perfiles',q:'¿Cuál es el perfil recomendado para monitores y web?',
 o:['Adobe RGB (1998)','FOGRA39','sRGB','CMYK Coated'],
 r:2,e:'sRGB es el estándar para pantallas y web: asegura que los colores se vean parecidos en cualquier monitor.'},
{m:'Perfiles',q:'¿Cuándo conviene Adobe RGB (1998)?',
 o:['Para publicar en redes sociales','Para edición fotográfica e impresión profesional, por tener un espectro más amplio',
    'Para animaciones GIF','Para imprimir periódicos'],
 r:1,e:'Adobe RGB tiene un gamut más amplio pero requiere monitor y hardware compatibles.'},
{m:'Perfiles',q:'¿Cómo se obtiene una imagen en escala de grises a partir de RGB?',
 o:['Bajando la resolución a 72 ppi',
    'Promediando los valores de los 3 canales y asignando un valor de iluminación a cada píxel',
    'Aplicando el perfil FOGRA39',
    'Convirtiendo a modo Pantone'],
 r:1,e:'Se promedian los 3 canales: se elimina la información de color pero se mantienen estructura y contraste.'},
{m:'Técnico',q:'¿Qué es el dot pitch o pixel pitch?',
 o:['La cantidad de tinta depositada por punto',
    'La distancia física en mm entre un píxel y el siguiente en un monitor; a menor dot pitch, mayor definición',
    'El número de colores que puede mostrar una pantalla',
    'La frecuencia de refresco del monitor'],
 r:1,e:'Menor dot pitch = mayor definición y detalle. Un 4K tiene menor dot pitch que un Full HD.'},
{m:'Técnico',q:'En RGB estándar de 8 bits por canal, ¿cuántos bits tiene cada píxel?',
 o:['8 bits','16 bits','24 bits','32 bits'],
 r:2,e:'8 bits × 3 canales (R, G, B) = 24 bits por píxel. Y 8 bits = 1 byte.'},
{m:'Técnico',q:'¿Qué muestra un histograma?',
 o:['La distribución de píxeles según su luminosidad: sombras, medios tonos y luces',
    'El gamut del perfil de color',
    'La cantidad de capas de un archivo PSD',
    'Los ángulos de trama de la impresión'],
 r:0,e:'El histograma grafica cómo se distribuyen los píxeles entre sombras, medios tonos y luces.'},
{m:'Técnico',q:'Los metadatos EXIF de una foto incluyen:',
 o:['Solo el nombre del archivo',
    'Fecha, apertura, velocidad de disparo, dimensiones, perfil de color, autor y modelo de cámara',
    'El perfil ICC de la impresora únicamente',
    'La cantidad de tinta usada al imprimir'],
 r:1,e:'EXIF = información técnica que el archivo guarda sobre sí mismo.'},
{m:'Programas',q:'¿Cuáles son las 4 dimensiones del diseño digital y sus programas?',
 o:['Píxel/Photoshop · Vectorial/Illustrator · Interactiva/Figma · Temporal/Premiere Pro',
    'Píxel/Illustrator · Vectorial/Photoshop · Interactiva/Premiere · Temporal/Figma',
    'Impresión/InDesign · Web/Figma · Video/After Effects · 3D/Blender',
    'Raster/Corel · Vector/Inkscape · UI/XD · Audio/Audition'],
 r:0,e:'Píxel → Photoshop. Vectorial → Illustrator. Interactiva → Figma. Temporal → Premiere Pro.'},
{m:'Programas',q:'¿Qué es la edición no destructiva en Photoshop?',
 o:['Guardar siempre en formato PSD',
    'Trabajar con máscaras de capa y capas de ajuste, que ocultan o modifican sin eliminar píxeles definitivamente',
    'Usar solo herramientas vectoriales',
    'Trabajar a 300 ppi desde el inicio'],
 r:1,e:'Máscaras de capa + capas de ajuste = edición no destructiva, uno de los fundamentos profesionales del programa.'},
{m:'Programas',q:'¿Para qué es especialmente apropiado Illustrator?',
 o:['Retoque fotográfico y fotomontaje',
    'Logotipos, sistemas de identidad visual, iconografía, señalética e infografías',
    'Edición de video en timeline',
    'Prototipado interactivo con Auto Layout'],
 r:1,e:'Illustrator: precisión formal, escalabilidad infinita. Ideal para marca e iconografía.'},
{m:'Programas',q:'¿Qué hace el pincel corrector puntual?',
 o:['Neutraliza el reflejo del flash en las pupilas',
    'Corrige imperfecciones tomando la textura de una zona fuente y fusionándola con el color e iluminación del destino',
    'Convierte píxeles en vectores',
    'Aplica un perfil ICC a la selección'],
 r:1,e:'Toma textura de la fuente y la fusiona con color e iluminación del destino. (Neutralizar el flash es el pincel de ojos rojos.)'},
{m:'Programas',q:'Figma corresponde a la dimensión:',
 o:['Del píxel','Vectorial','Interactiva','Temporal'],
 r:2,e:'Figma = dimensión interactiva: prototipado, componentes reutilizables, Auto Layout, colaboración en tiempo real (UX/UI).'}
];

/* ---------------- 4. VERDADERO / FALSO (contrarreloj) ---------------- */
const TF = [
{s:'El color es una propiedad química intrínseca de los objetos.',v:false,e:'Es una PERCEPCIÓN VISUAL, no una propiedad del objeto.'},
{s:'El espectro visible va de 380 a 780 nanómetros.',v:true,e:'Correcto. Fuera de ese rango: infrarrojos y ultravioleta.'},
{s:'Los conos procesan la luminosidad y los bastones el color.',v:false,e:'Al revés: conos = color, bastones = luminosidad.'},
{s:'Newton creó el círculo cromático doblando la línea recta del espectro en 1704.',v:true,e:'Correcto, desde la Física.'},
{s:'Goethe propuso el modelo primario RYB.',v:false,e:'El RYB lo propuso Newton. Goethe propuso los secundarios.'},
{s:'Ostwald dividió el color según la experiencia subjetiva y emocional: cálidos vs. fríos.',v:true,e:'Correcto, desde la Psicología.'},
{s:'A mayor cantidad de grados Kelvin, la luz es más cálida.',v:false,e:'Al revés: más Kelvin = más FRÍA. Menos Kelvin = más cálida.'},
{s:'La luz neutra ronda los 5770 K.',v:true,e:'Correcto: 5770–5800 K, usada en foto de producto y TV.'},
{s:'En el modelo RGB la suma de los tres canales al máximo da blanco.',v:true,e:'Correcto: síntesis aditiva.'},
{s:'RGB es un modelo de colores materiales.',v:false,e:'RGB = INMATERIALES (luz). CMYK = materiales (pigmento).'},
{s:'Cada canal RGB va de 0 a 100.',v:false,e:'Va de 0 a 255.'},
{s:'El modelo RGB permite construir 16.777.216 colores.',v:true,e:'256³ = 16.777.216.'},
{s:'El gamut del CMYK es más amplio que el del RGB.',v:false,e:'Al revés: EL RGB ES MÁS GRANDE QUE EL CMYK.'},
{s:'En CMYK, la suma de todos los pigmentos tiende al negro.',v:true,e:'Correcto: síntesis sustractiva.'},
{s:'Se necesita al menos un 8 % de variación de tinta para percibir un cambio de color impreso.',v:true,e:'Correcto, valor clave del examen.'},
{s:'El negro enriquecido es el adecuado para tipografías pequeñas.',v:false,e:'Se usa K 100 % para textos: el enriquecido produce descalce de registro.'},
{s:'Los colores Pantone se obtienen mezclando CMYK.',v:false,e:'Son tintas PREMEZCLADAS formuladas FUERA de la cuatricromía.'},
{s:'Un objeto vectorial nunca se rompe al escalarse.',v:true,e:'Correcto: su construcción es matemática. Pregunta clave de examen.'},
{s:'La unidad mínima del gráfico vectorial es el píxel.',v:false,e:'Es el PUNTO (nodo de ancla). El píxel es del ráster.'},
{s:'Las curvas Bézier pertenecen a la construcción vectorial.',v:true,e:'Correcto: trazados, nodos y Bézier son de Illustrator.'},
{s:'El remuestreo agrega píxeles que la imagen originalmente no posee.',v:true,e:'Correcto: interpolación.'},
{s:'El .JPG guarda transparencia.',v:false,e:'NO guarda transparencia. El que la guarda es el PNG (y el TIFF).'},
{s:'El .PNG usa compresión sin pérdida.',v:true,e:'Correcto, y su propiedad principal es la transparencia.'},
{s:'El .TIFF es el formato ideal para impresión de imágenes ráster.',v:true,e:'Correcto: mejor en CMYK, permite no comprimir, guarda capas y transparencias.'},
{s:'El .GIF admite millones de colores.',v:false,e:'Está limitado a 256 colores.'},
{s:'El .SVG es un formato vectorial basado en código.',v:true,e:'Correcto. El .EPS es vectorial encapsulado.'},
{s:'El archivo RAW viene comprimido desde la cámara.',v:false,e:'Es un archivo "en crudo", SIN procesar ni comprimir.'},
{s:'Para pantalla se usan 72 ppi y para impresión de alta calidad 300 ppi.',v:true,e:'Correcto (pantalla 72–96 ppi).'},
{s:'DPI significa píxeles por pulgada.',v:false,e:'DPI = puntos (de tinta) por pulgada, medida de impresión. PPI = píxeles por pulgada.'},
{s:'A mayor distancia de lectura, una gigantografía requiere mayor resolución.',v:false,e:'Al revés: a mayor distancia, MENOR resolución (30–50 dpi a +10 m).'},
{s:'Resolución y calidad son sinónimos.',v:false,e:'No lo son. Una resolución excesiva solo aumenta el peso sin mejora visible.'},
{s:'Una pulgada cuadrada mide 2,54 × 2,54 cm.',v:true,e:'Correcto.'},
{s:'sRGB es el perfil recomendado para monitores y web.',v:true,e:'Correcto. Adobe RGB (1998) es para edición fotográfica profesional.'},
{s:'Los perfiles ICC gestionan la traducción de color entre dispositivos.',v:true,e:'Correcto: monitor, cámara, impresora.'},
{s:'La escala de grises se obtiene promediando los 3 canales RGB.',v:true,e:'Correcto: elimina color pero mantiene estructura y contraste.'},
{s:'8 bits equivalen a 1 byte.',v:true,e:'Correcto. RGB de 8 bits por canal = 24 bits por píxel.'},
{s:'Cuanto MAYOR es el dot pitch, mayor es la definición de la pantalla.',v:false,e:'Al revés: a MENOR dot pitch, mayor definición.'},
{s:'Photoshop trabaja con gráficos ráster y Illustrator con vectores.',v:true,e:'Correcto: dimensión del píxel vs. dimensión vectorial.'},
{s:'Figma corresponde a la dimensión temporal del diseño digital.',v:false,e:'Figma = dimensión INTERACTIVA. La temporal es Premiere Pro.'},
{s:'Las máscaras de capa eliminan definitivamente los píxeles ocultos.',v:false,e:'NO: por eso son edición NO destructiva; ocultan sin eliminar.'},
{s:'El Vantablack absorbe hasta el 99,96 % de la luz visible.',v:true,e:'Correcto: está hecho de nanotubos de carbono.'},
{s:'El magenta tiene una longitud de onda única en el espectro.',v:false,e:'Es un color NO monocromático: es la suma de los dos extremos del espectro.'},
{s:'El blanco y el negro son acromáticos.',v:true,e:'Correcto: no tienen tono ni matiz.'},
{s:'La roseta de impresión resulta de superponer las 4 tintas en registro con distinta angulación.',v:true,e:'Correcto.'},
{s:'En síntesis aditiva, Verde + Azul = Cian.',v:true,e:'Correcto. R+G=Amarillo, R+B=Magenta, G+B=Cian.'},
{s:'El complementario del magenta es el amarillo.',v:false,e:'El complementario del magenta es el VERDE. Amarillo↔Azul, Cian↔Rojo.'}
];

/* ---------------- 5. SIMULACRO (basado en el modelo de la cátedra) ---------------- */
const SIM_DEV = [
{q:'3. Describa brevemente los tres atributos o dimensiones del color (modelo HSB/HSV).',
 m:['<b>Tono / Matiz (Hue):</b> el color puro, su identidad; lo que permite identificarlo y ubicarlo en el círculo cromático.',
    '<b>Saturación:</b> la pureza o intensidad cromática; disminuye a medida que se mezcla con gris.',
    '<b>Luminosidad / Valor:</b> la cantidad de luz; grado de claridad (cercanía al blanco) u oscuridad (cercanía al negro).']},
{q:'6. ¿Qué es un Color Especial (ej. sistema Pantone) y en qué situaciones se utiliza?',
 m:['Es una <b>tinta premezclada formulada por catálogo</b>, fuera de la cuatricromía tradicional CMYK.',
    'Permite obtener colores que <b>no se pueden lograr</b> con la combinación de las cuatro tintas: fluorescentes, metalizados, un corporativo exacto.',
    'Se utiliza para <b>garantizar la estabilidad colorimétrica exacta del tono</b> en grandes tiradas corporativas, donde el color de marca no puede variar.']},
{q:'7b. ¿Por qué no se debe utilizar el "negro enriquecido o profundo" (C 84 %, M 83 %, Y 73 %, K 80 %) en cuerpos de texto tipográficos pequeños?',
 m:['Porque exige <b>cuatro tintas superpuestas en registro perfecto</b>.',
    'El mínimo desplazamiento entre planchas produce <b>descalce</b>: aparecen halos de color y el texto pierde nitidez y legibilidad.',
    'Además <b>satura de tinta</b> el soporte, sobre todo en papeles finos.',
    'Por eso, para textos editoriales y líneas finas se usa <b>negro 100 % K</b> (una sola tinta).']},
{q:'8. [PREGUNTA CLAVE] Explique la diferencia radical entre un objeto ráster y un objeto vectorial al momento de escalarlos.',
 m:['El objeto <b>ráster se rompe (se pixela) al escalarse</b>, porque está compuesto por una matriz fija de <b>píxeles</b>: al ampliarlo, el píxel se visualiza al 100 % y se hace visible.',
    'El objeto <b>vectorial nunca se rompe</b>, porque está construido mediante <b>ecuaciones matemáticas</b> (puntos, nodos y curvas Bézier) que se recalculan a cualquier tamaño.',
    'Por eso los logotipos se construyen en vectores: deben poder escalarse sin perder calidad.']},
{q:'9. Clasifique los formatos: .PNG, .TIFF, .AI, .WEBP, .EPS — indicando si son ráster o vectoriales y si están orientados a pantalla (RGB) o impresión (CMYK).',
 m:['<b>.PNG</b> → Ráster · Pantalla (RGB). Compresión sin pérdida, admite transparencia.',
    '<b>.TIFF</b> → Ráster · Impresión (CMYK, aunque trabaja en ambos). Permite no comprimir; guarda capas y transparencias. Pesado.',
    '<b>.AI</b> → Vectorial · Editable nativo de Illustrator; sirve para ambos destinos.',
    '<b>.WEBP</b> → Ráster · Pantalla / web (RGB). Formato moderno optimizado.',
    '<b>.EPS</b> → Vectorial · Encapsulado, de intercambio (Illustrator y Corel); apto para impresión.']},
{q:'12a. Defina: Remuestreo o Interpolación.',
 m:['Proceso de <b>cambiar la resolución agregando píxeles que la imagen originalmente no posee</b> (por ejemplo, subir en Photoshop de 72 a 150 o 300 ppi).',
    'El software genera esos píxeles nuevos <b>promediando los vecinos</b>, por lo que no recupera detalle real.']},
{q:'12b. Defina: Máscara de Capa (edición no destructiva).',
 m:['Recurso que permite <b>ocultar o revelar partes de una imagen sin eliminar información de manera definitiva</b>.',
    'Junto con las <b>capas de ajuste</b> (color, contraste, exposición, saturación) constituye la <b>edición no destructiva</b>, uno de los fundamentos profesionales de Photoshop.']},
{q:'12c. Defina: Perfil de Color (ej. sRGB vs. FOGRA39).',
 m:['Archivo que <b>describe cómo un dispositivo interpreta y reproduce los colores</b>, para garantizar consistencia entre dispositivos.',
    '<b>sRGB</b>: estándar para monitores y web.',
    '<b>Adobe RGB (1998)</b>: espectro más amplio, para edición fotográfica profesional.',
    '<b>FOGRA39 / ISO</b>: perfiles estándar para imprenta offset.',
    'Los <b>perfiles ICC</b> gestionan la traducción de color entre monitor, cámara e impresora.']},
{q:'12d. Defina: Trama de semitono / Roseta de impresión.',
 m:['La <b>trama de semitono</b> es el método para convertir tonos continuos en <b>puntos de tinta</b> sobre el papel. Puede ser <b>AM</b> (amplitud modulada: puntos alineados de tamaño variable) o <b>FM</b> (frecuencia modulada o estocástica: puntos iguales distribuidos al azar).',
    'La <b>roseta de impresión</b> es el patrón que se genera al superponer <b>en registro</b> las cuatro tintas con <b>distinta angulación</b>.']}
];

const SIM_FILL = [
{id:'f1',pre:'RGB — Tipo de síntesis:',ans:['aditiva'],after:''},
{id:'f2',pre:'CMYK — Tipo de síntesis:',ans:['sustractiva','substractiva'],after:''},
{id:'f3',pre:'RGB — La suma total al máximo da:',ans:['blanco'],after:''},
{id:'f4',pre:'CMYK — La suma total de pigmentos tiende al:',ans:['negro'],after:''},
{id:'f5',pre:'RGB — Amplitud del espectro (gamut):',ans:['amplio','mas amplio','más amplio','grande','mayor'],after:''},
{id:'f6',pre:'CMYK — Amplitud del espectro (gamut):',ans:['reducido','mas reducido','más reducido','chico','menor','pequeño'],after:''},
{id:'f7',pre:'La unidad mínima de un gráfico ráster en Photoshop es el:',ans:['pixel','píxel'],after:''},
{id:'f8',pre:'La unidad mínima técnica de construcción en Illustrator es el:',ans:['punto','nodo','punto de ancla'],after:''},
{id:'f9',pre:'Las curvas de Bézier y los nodos son propios de la construcción:',ans:['vectorial','vector'],after:''},
{id:'f10',pre:'Variación mínima de tinta para percibir un cambio de color (en %):',ans:['8','8%','8 %'],after:''}
];

/* ---------------- 6. MEMOTEST (pares concepto ↔ definición) ---------------- */
const MEMO = [
 ['RGB','Colores luz · inmateriales · aditivo'],
 ['CMYK','Colores pigmento · materiales · sustractivo'],
 ['Matiz','La identidad del color'],
 ['Saturación','Pureza; baja al mezclar gris'],
 ['Luminosidad','Cantidad de luz: claro u oscuro'],
 ['7500 K','Luz fría · tensión y suspenso'],
 ['4500 K','Luz cálida · intimidad y terror'],
 ['PPI','Píxeles por pulgada · pantalla'],
 ['DPI','Puntos de tinta por pulgada · impresión'],
 ['.TIFF','Ideal para impresión ráster'],
 ['.PNG','Sin pérdida · con transparencia'],
 ['.JPG','Con pérdida · sin transparencia'],
 ['Vector','Nunca se rompe al escalar'],
 ['Píxel','Unidad mínima de la imagen digital'],
 ['Pantone','Tinta plana fuera de la cuatricromía'],
 ['8 %','Variación mínima perceptible de tinta'],
 ['sRGB','Perfil estándar para web y monitores'],
 ['Dot pitch','Distancia en mm entre píxeles del monitor'],
 ['Conos','Perciben el color'],
 ['Bastones','Perciben la luminosidad'],
 ['Figma','Dimensión interactiva · UX/UI'],
 ['Premiere Pro','Dimensión temporal · audiovisual'],
 ['Roseta','Superposición en registro de 4 tintas'],
 ['Vantablack','Absorbe el 99,96 % de la luz']
];

/* ---------------- 7. CLASIFICAR FORMATOS ---------------- */
const FORMATS = [
 {n:'.JPG',  tipo:'raster', dest:'pantalla', e:'Ráster · compresión con pérdida · RGB y CMYK · sin transparencia.'},
 {n:'.PNG',  tipo:'raster', dest:'pantalla', e:'Ráster · sin pérdida · RGB · su propiedad principal es la transparencia.'},
 {n:'.WEBP', tipo:'raster', dest:'pantalla', e:'Ráster · formato moderno óptimo para web · pensado para RGB.'},
 {n:'.GIF',  tipo:'raster', dest:'pantalla', e:'Ráster · 256 colores · animaciones web · no se usa en diseño profesional.'},
 {n:'.TIFF', tipo:'raster', dest:'impresion',e:'Ráster · ideal para impresión · mejor en CMYK · permite no comprimir.'},
 {n:'.PSD',  tipo:'raster', dest:'impresion',e:'Ráster editable nativo de Photoshop · trabaja con capas.'},
 {n:'RAW',   tipo:'raster', dest:'impresion',e:'Ráster · archivo en crudo del sensor · sin procesar ni comprimir.'},
 {n:'.BMP',  tipo:'raster', dest:'impresion',e:'Ráster · estándar de Windows · sin compresión · muy pesado, en desuso.'},
 {n:'.TGA',  tipo:'raster', dest:'pantalla', e:'Ráster · sin pérdida · estándar de texturas en 3D y videojuegos.'},
 {n:'.AI',   tipo:'vector', dest:'impresion',e:'Vectorial editable nativo de Illustrator.'},
 {n:'.EPS',  tipo:'vector', dest:'impresion',e:'Vectorial encapsulado · se usa en Illustrator y Corel.'},
 {n:'.SVG',  tipo:'vector', dest:'pantalla', e:'Vectorial basado en código · estándar web.'},
 {n:'.CDR',  tipo:'vector', dest:'impresion',e:'Vectorial nativo de CorelDRAW.'}
];

/* ---------------- 8. TEMPERATURA DE COLOR (juego) ---------------- */
const KELVIN = [
 {k:2700, l:'Cálida', d:'Bombilla incandescente. Muy cálida, anaranjada.'},
 {k:4500, l:'Cálida', d:'Límite de la luz cálida según la cátedra: 4500 K o menos.'},
 {k:5770, l:'Neutra', d:'Luz neutra de referencia: foto de producto, noticieros, estudios de TV.'},
 {k:5800, l:'Neutra', d:'Luz blanca equilibrada.'},
 {k:6500, l:'Neutra', d:'Blanco de día, todavía dentro de la zona neutra-fría.'},
 {k:7500, l:'Fría',   d:'Límite de la luz fría según la cátedra: 7500 K o más.'},
 {k:9000, l:'Fría',   d:'Muy azulada: tensión, suspenso, expectativa.'},
 {k:3200, l:'Cálida', d:'Tungsteno de estudio. Cálida: intimidad, romanticismo o terror.'},
 {k:10000,l:'Fría',   d:'Cielo azul en sombra. Extremadamente fría.'}
];

/* ---------------- 9. LÍNEA DE TIEMPO (juego de ordenar) ---------------- */
const TIMELINES = [
 {t:'Ordená la evolución de la teoría del color (del más antiguo al más reciente)',
  items:['Newton (Física, 1704) — descompone la luz blanca y crea el círculo cromático',
         'Goethe (Fisiología, 1810) — desplaza el foco al ojo humano y los secundarios',
         'Ostwald (Psicología, s. XX) — divide el color en cálidos y fríos']},
 {t:'Ordená de MENOR a MAYOR temperatura de color (Kelvin)',
  items:['Luz cálida — 4500 K o menos','Luz neutra — 5770 K','Luz fría — 7500 K o más']},
 {t:'Ordená de MENOR a MAYOR resolución requerida',
  items:['Gigantografía a +10 m — 30–50 dpi','Pantalla / web — 72 ppi','Periódico — 150 dpi','Impresión de alta calidad — 300 dpi']},
 {t:'Ordená el flujo de trabajo de una pieza para imprenta',
  items:['Definir soporte y tamaño final','Trabajar en CMYK a 300 ppi','Formular el negro según el uso (K100 para texto)',
         'Aplicar el perfil de imprenta (FOGRA39)','Exportar en TIFF o PDF']}
];

/* ---------------- 10. GLOSARIO ---------------- */
const GLOSARIO = [
['Color','Percepción visual resultante de la interacción entre luz, superficie y el sistema ojo/cerebro.'],
['Espectro visible','Franja de radiación que el ojo traduce a color: 380 a 780 nm.'],
['Infrarrojo / Ultravioleta','Radiaciones fuera del espectro visible: por encima y por debajo del rango perceptible.'],
['Conos','Células de la retina que absorben las radiaciones cromáticas y las convierten en impulsos eléctricos.'],
['Bastones','Células de la retina que procesan las variaciones de luminosidad (luz y sombra).'],
['Círculo cromático','Sistema geométrico cerrado creado por Newton (1704) al doblar la línea recta del espectro.'],
['RYB','Primer modelo primario propuesto por Newton: red, yellow, blue. Usado en lienzos y pintura.'],
['RGB','Modelo aditivo de colores luz / inmateriales. Tres canales de energía de 0 a 255. Suma = blanco.'],
['CMYK','Modelo sustractivo de colores pigmento / materiales: cian, magenta, amarillo y negro (key). Suma = negro.'],
['Síntesis aditiva','Cada combinación añade luz hasta formar el blanco.'],
['Síntesis sustractiva','Cada capa de pigmento resta luz al soporte hasta tender al negro.'],
['Gamut','Amplitud del espectro de color reproducible. El del RGB es más amplio que el del CMYK.'],
['Espacio de color','Herramienta que estandariza un color dentro de un área de referencia para que se vea bien en pantalla e impresión.'],
['Matiz / Hue','El color puro: la identidad del color dentro del círculo cromático.'],
['Saturación','Pureza o intensidad cromática. Disminuye al mezclarse con gris.'],
['Luminosidad / Valor','Cantidad de luz: claridad (blanco) u oscuridad (negro).'],
['Acromático','Sin tono ni matiz: blanco, negro y grises.'],
['Complementarios','Cian↔Rojo, Magenta↔Verde, Amarillo↔Azul.'],
['Temperatura de color','Matiz de una luz blanca, medido en grados Kelvin. Menos K = más cálida; más K = más fría.'],
['Kelvin (K)','Unidad de la escala de temperatura de color. Cálida ≤4500, neutra ~5770, fría ≥7500.'],
['Valor hexadecimal','Valor numérico con # que denomina a cada uno de los 16.777.216 colores RGB construibles.'],
['Canal','Información de un componente de color de la imagen; almacena la intensidad o energía lumínica de ese color.'],
['Escala de grises','Imagen de solo tonos grises, obtenida promediando los 3 canales RGB. Mantiene estructura y contraste.'],
['Vantablack','Material de nanotubos de carbono que absorbe hasta el 99,96 % de la luz visible.'],
['Colores no monocromáticos','Tonos sin longitud de onda única (rosado, marrón, magenta): son interpretaciones del cerebro.'],
['Cuatricromía','Técnica de impresión estándar que reproduce color mezclando las 4 tintas CMYK.'],
['Color especial / Tinta plana','Tinta premezclada (Pantone) formulada fuera del CMYK para tonos exactos, fluo o metalizados.'],
['Negro 100 % K','Negro de una sola tinta, usado en textos editoriales y líneas finas para evitar descalces.'],
['Negro enriquecido','Negro profundo para áreas grandes: C84 M83 Y73 K80 (papel grueso) o C30/K100 (papel fino).'],
['Regla del 8 %','Variación mínima de tinta necesaria para que el ojo perciba un cambio de color impreso.'],
['Trama AM','Amplitud Modulada: puntos alineados que varían de tamaño.'],
['Trama FM','Frecuencia Modulada o estocástica: puntos iguales distribuidos aleatoriamente.'],
['Roseta de impresión','Patrón generado al superponer en registro las 4 tintas con distinta angulación.'],
['Tramado','Deposición de pigmentos en diferentes ángulos sobre el soporte para construir el color.'],
['Soporte','Material sobre el cual se imprime, generalmente papel. Influye en la calidad final.'],
['Ráster / Mapa de bits','Imagen compuesta por una matriz fija de píxeles. Se rompe al escalarse.'],
['Vectorial','Imagen construida por ecuaciones matemáticas, nodos y curvas Bézier. Nunca se rompe.'],
['Píxel','Unidad mínima de la imagen digital; almacena color y luminosidad a partir de los 3 canales RGB.'],
['Vector','Línea que para existir necesita al menos dos puntos (inicial y final); resultado matemático de su distancia.'],
['Nodo / Punto de ancla','Unidad mínima de construcción vectorial.'],
['Curvas Bézier','Curvas definidas matemáticamente, propias de la construcción vectorial.'],
['Remuestreo / Interpolación','Cambiar la resolución agregando píxeles que la imagen originalmente no posee.'],
['Resolución','Cantidad de píxeles por unidad de medida. No es lo mismo que calidad.'],
['PPI','Píxeles por pulgada. Medida de pantalla (72–96 ppi).'],
['PPC','Píxeles por centímetro.'],
['DPI','Puntos (de tinta) por pulgada. Medida de impresión (300 dpi alta calidad, 150 en periódicos).'],
['Perfil de color','Archivo que describe cómo un dispositivo interpreta y reproduce los colores.'],
['sRGB','Perfil estándar para monitores y web.'],
['Adobe RGB (1998)','Perfil de espectro más amplio para edición fotográfica e impresión profesional.'],
['FOGRA39 / ISO','Perfiles estándar para imprenta offset.'],
['Perfil ICC','Perfil que gestiona la traducción de color entre dispositivos (monitor, cámara, impresora).'],
['Profundidad de color','Cantidad de bits por píxel. 8 bits = 1 byte; RGB de 8 bits × 3 canales = 24 bits por píxel.'],
['Dot pitch / Pixel pitch','Distancia física en mm entre un píxel y el siguiente. A menor dot pitch, mayor definición.'],
['Histograma','Gráfico de distribución de píxeles según luminosidad: sombras, medios tonos y luces.'],
['Metadatos EXIF','Información técnica que el archivo guarda sobre sí mismo: fecha, apertura, velocidad, autor, cámara.'],
['Edición no destructiva','Trabajo con máscaras de capa y capas de ajuste sin eliminar píxeles definitivamente.'],
['Máscara de capa','Recurso que oculta o revela partes de una imagen sin borrar información.'],
['Capa de ajuste','Capa que modifica color, contraste, exposición o saturación sin alterar la imagen original.'],
['Pincel corrector puntual','Corrige imperfecciones tomando la textura de una zona fuente y fusionándola con color e iluminación del destino.'],
['Dimensión del píxel','Imagen fija ráster → Adobe Photoshop.'],
['Dimensión vectorial','Imagen fija vectorial → Adobe Illustrator.'],
['Dimensión interactiva','Interfaces y sistemas → Figma (prototipado, componentes, Auto Layout, UX/UI).'],
['Dimensión temporal','Audiovisual → Adobe Premiere Pro (timeline multipista, montaje no destructivo).'],
['RAM','Permite ejecutar múltiples aplicaciones simultáneamente sin congelamientos.'],
['GPU / Placa de video','Unidad clave para procesamiento gráfico, renderizado y previsualización en tiempo real.']
];

/* ---------------- 11. PLAN DE ESTUDIO ---------------- */
const PLAN = [
 {d:'Bloque 1 — Fundamentos', t:['Leé las unidades 1 a 4 del Resumen','Flashcards de las categorías Color, Historia, Atributos y Kelvin','Quiz rápido de 10 preguntas']},
 {d:'Bloque 2 — Modelos de color', t:['Unidades 5, 6 y 7','Jugá al Mezclador de color (RGB y CMYK)','Flashcards RGB, CMYK e Impresión']},
 {d:'Bloque 3 — Técnica digital', t:['Unidades 8, 9 y 10','Juego "Ráster o Vector"','Flashcards Formatos, Resolución y Perfiles']},
 {d:'Bloque 4 — Cierre', t:['Unidades 11 y 12','Contrarreloj Verdadero/Falso','Simulacro completo con autocorrección']}
];
