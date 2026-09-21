/* ============================================================
   DATA — Semiótica · UADE Diseño Gráfico
   Contenido armado a partir de los apuntes de las clases 1 a 6
   y de Semántica del objeto.
   ============================================================ */

/* ---------------- 0. CONFIG DE LA MATERIA ---------------- */
const CONFIG = {
  key:'uade-semio-v1',
  simIntro:'Parte A: modelos de comunicación y axiomas · Parte B: Saussure y el signo · '+
           'Parte C: Barthes, imagen, mito y objeto · Parte D: posfotografía y espacio.',
  fillTitulo:'Completá los pares conceptuales de la materia.',
  topFacts:[
    'Saussure: <b>significante + significado</b> (diádico) · Peirce: <b>representamen + objeto + interpretante</b> (triádico)',
    'Las 3 dimensiones: <b>sintáctica</b> (construcción) · <b>semántica</b> (significado) · <b>pragmática</b> (efecto)',
    'Axioma 1: <b>es imposible no comunicar</b>',
    '<b>Significación</b> = relación interna del signo · <b>Valor</b> = diferencia con los otros signos',
    '<b>Sintagma</b> = lo que está (presencia) · <b>Paradigma</b> = lo que podría estar (ausencia)',
    '<b>Sincronía</b> = corte en el tiempo · <b>Diacronía</b> = evolución en el tiempo',
    'Barthes: <b>anclaje</b> (el texto fija el sentido) vs <b>relevo</b> (el texto suma sentido nuevo)',
    'Toda imagen es <b>polisémica</b>: necesita texto y contexto para fijar sentidos',
    'El mito es un <b>lenguaje robado</b>: naturaliza la ideología y oculta la historia',
    'Augé: <b>lugar</b> (identidad, relación, historia) vs <b>no lugar</b> (tránsito y anonimato)'
  ],
  imgs:[
    ['dimensiones-salida.png','Las 3 dimensiones aplicadas a una señal de salida'],
    ['meme-gato-texto.png','Imagen + texto + contexto: sin el texto el meme no significa'],
    ['panzani.png','Panzani: el aviso que analiza Barthes en «Retórica de la imagen»'],
    ['magritte-pipa.png','Magritte: «Ceci n\'est pas une pipe» — el signo no es la cosa'],
    ['mcdonalds-wifi.png','McDonald\'s: los arcos leídos como señal de wifi (relevo)'],
    ['nescafe-metafora.png','Nescafé: metáfora visual entre despertador y café'],
    ['lucky-strike.png','Lucky Strike «It\'s toasted»: función de anclaje del texto'],
    ['van-heusen.png','Van Heusen: «it\'s a man\'s world», el mito del sexismo'],
    ['paris-match.png','Paris Match: el ejemplo canónico del mito según Barthes'],
    ['escarabajo-vw.png','El Escarabajo: el mito del auto popular alemán'],
    ['hippies.png','El hippie: rebeldía convertida en estética de consumo'],
    ['marilyn.png','Marilyn Monroe: el mito construido por la industria'],
    ['berger-desnudo.png','Berger, «Modos de ver»: la construcción de la mirada'],
    ['casio-rolex.png','Valor por oposición: un reloj significa en relación con los otros'],
    ['ferrari-twingo.png','El objeto significa por diferencia dentro del sistema'],
    ['telefonos-diacronia.png','Diacronía del objeto teléfono'],
    ['lacoste.png','La marca como signo: forma + uso + usuario + contexto'],
    ['cuchillo-funcion.png','La función hace nacer al signo, y el signo espectaculariza la función'],
    ['marca-publico.png','El universo simbólico de una marca según quién la use'],
    ['naturaleza-muerta.png','La tradición pictórica de la que la publicidad toma prestigio'],
    ['heineken.png','Publicidad: la imagen sujeta a una intención'],
    ['samsung-note.png','Connotación: qué promete la pieza más allá del producto'],
    ['auto-estatus.png','El objeto como signo de estatus y deseo']
  ]
};

/* ---------------- 1. RESUMEN POR UNIDADES ---------------- */
const TOPICS = [
{
  id:'s1', mod:'Comunicación', t:'Comunicación humana y mediada', s:'Proceso social · códigos · redes',
  body:`
  <p>La comunicación humana es un <b>proceso social</b> que no se limita a transmitir palabras.
  También comunica mediante <b>imágenes, gestos, objetos, espacios, sonidos e interfaces tecnológicas</b>.</p>

  <h4>Características</h4>
  <ul>
    <li>Es un <b>proceso</b> y también un <b>resultado</b>.</li>
    <li>Necesita algún <b>código compartido</b> para que pueda ser comprendida.</li>
    <li>Puede realizarse mediante diferentes <b>medios y tecnologías</b>.</li>
    <li><b>No</b> es necesariamente un proceso de un solo sentido: el receptor puede reaccionar y modificar la interacción.</li>
    <li>Puede darse entre dos personas, de <b>uno a muchos</b> o de <b>muchos a uno</b>.</li>
  </ul>

  <h4>Dos maneras de entenderla</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Transmitir</th><th>Construir sentido</th></tr>
    <tr><td>Un mensaje viaja desde un punto de origen hacia un destino.</td>
        <td>Los participantes interpretan y ajustan el sentido en una interacción.</td></tr>
  </table></div>

  <h4>Comunicación mediada</h4>
  <p>Permite que un mismo mensaje llegue a muchas personas y está ligada a los medios y las tecnologías.
  Desde la <b>imprenta</b> hasta <b>Internet y las redes sociales</b>, los medios fueron transformando la
  <b>velocidad, la escala y las formas de circulación</b> de la información.</p>
  <p>Hoy las redes hacen que la separación entre emisor y receptor sea <b>menos clara</b>: los usuarios
  producen, comparten y responden contenidos. Esto genera:</p>
  <ul>
    <li><b>Sobrecarga informativa</b></li>
    <li><b>Fragmentación de audiencias</b></li>
    <li><b>Fake news</b></li>
    <li><b>Burbujas informativas</b></li>
    <li><b>Sesgos de confirmación</b></li>
  </ul>
  `
},
{
  id:'s2', mod:'Comunicación', t:'Los 4 modos y la imagen', s:'Oral · escrita · gestual · icónica',
  body:`
  <h4>Los 4 modos de comunicación</h4>
  <ul>
    <li><b>Oral</b>: palabra hablada.</li>
    <li><b>Escrita</b>: registro en un soporte.</li>
    <li><b>Gestual</b>: cuerpo y expresión.</li>
    <li><b>Icónica</b>: imágenes y convenciones.</li>
  </ul>
  <p>Pueden <b>reforzarse, complementarse o contradecirse</b> entre sí.</p>

  <h4>Oral vs. escrita</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Oral</th><th>Escrita</th></tr>
    <tr><td>Se produce con palabras habladas.</td><td>Queda <b>registrada</b>.</td></tr>
    <tr><td>Suele requerir compartir <b>tiempo, código y situación</b>.</td>
        <td>Puede circular <b>sin compartir tiempo ni espacio</b>.</td></tr>
    <tr><td>—</td><td>Permite <b>revisar</b> el mensaje antes de publicarlo.</td></tr>
  </table></div>

  <h4>Comunicación gestual</h4>
  <p>Puede ser <b>intencional o involuntaria</b>. Además de los gestos, comunican la <b>mirada</b>,
  la <b>postura</b>, el <b>tono</b> y la <b>distancia</b>. Estos elementos pueden reforzar o
  <b>contradecir</b> lo que se dice verbalmente.</p>
  <figure class="fg"><img src="img/gestual.png" alt="Expresión gestual">
  <figcaption>El gesto puede contradecir lo que dicen las palabras.</figcaption></figure>

  <h4>Las imágenes necesitan código y contexto</h4>
  <p>Las imágenes pueden ser <b>semejantes</b>, <b>convencionales</b> (basadas en acuerdos sociales)
  o <b>abstractas</b>. Pero <b>las imágenes no "hablan solas"</b>: una fotografía, un pictograma, un plano
  o un meme necesitan códigos y contexto para ser interpretados. El texto puede orientar la lectura posible.</p>
  <div class="key">La fórmula de la clase: <b>IMAGEN + TEXTO + CONTEXTO</b></div>
  <figure class="fg"><img src="img/meme-gato-texto.png" alt="Meme con texto">
  <figcaption>Sin el texto y sin el contexto cultural, la imagen no produce ese sentido.</figcaption></figure>
  `
},
{
  id:'s3', mod:'Modelos', t:'Modelos de comunicación', s:'Shannon-Weaver · Jakobson · Palo Alto',
  body:`
  <h4>1. Shannon y Weaver — modelo matemático</h4>
  <p>Es un modelo <b>lineal y técnico</b>. Surgió para resolver problemas de <b>transmisión de información</b>:
  que una señal llegue de un punto a otro con la menor pérdida posible.</p>
  <div class="key">Elementos: <b>Fuente → Transmisor → Canal → Receptor → Destino</b></div>
  <p>Su preocupación es que el mensaje <b>llegue correctamente y pueda ser descifrado</b>.
  El concepto fundamental que incorpora es el <b>RUIDO</b>: cualquier interferencia que dificulte
  que el mensaje llegue bien.</p>
  <div class="tip"><b>Su límite:</b> explica muy bien el <i>transporte</i> de la información, pero no alcanza
  para explicar la comunicación humana porque deja afuera <b>silencios, gestos, tono de voz, contexto
  y relaciones entre las personas</b>.</div>

  <h4>2. Roman Jakobson</h4>
  <p>Plantea que la comunicación está formada por diferentes elementos y que <b>cada elemento activa
  una función del lenguaje</b>.</p>
  <div class="tscroll"><table class="t">
    <tr><th>Elemento</th><th>Qué es</th></tr>
    <tr><td>Emisor</td><td>Inicia la comunicación.</td></tr>
    <tr><td>Receptor</td><td>Recibe el mensaje.</td></tr>
    <tr><td>Mensaje</td><td>Contenido que se comunica.</td></tr>
    <tr><td>Código</td><td>Sistema utilizado para construir y comprender el mensaje.</td></tr>
    <tr><td>Canal</td><td>Medio por el que circula.</td></tr>
    <tr><td>Contexto</td><td>Situación y entorno en el que se produce la comunicación.</td></tr>
  </table></div>
  <p>Para analizar un mensaje no alcanza con preguntarse <i>"¿qué dice?"</i>, sino también
  <b>cómo está construido, quién lo produce, a quién está dirigido y en qué contexto aparece</b>.</p>

  <h4>3. Escuela de Palo Alto — modelo orquestal</h4>
  <p>Surge como <b>alternativa al modelo lineal</b>. Entiende la comunicación como una
  <b>interacción social permanente</b>. No existe un único emisor que transmite algo a un receptor pasivo:
  <b>todos los participantes influyen</b> en la construcción del sentido mediante palabras, gestos,
  silencios, posturas, miradas, espacios, tiempos y vínculos.</p>
  <div class="key">Por eso la metáfora de <b>la orquesta</b>: todos participan simultáneamente
  y se van ajustando durante la interacción.</div>

  <h4>Del telégrafo a la orquesta</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Telégrafo (Shannon-Weaver)</th><th>Orquesta (Palo Alto)</th></tr>
    <tr><td>Una secuencia <b>lineal</b> con origen y destino.</td>
        <td>Una <b>coordinación continua</b> entre participantes.</td></tr>
    <tr><td>El éxito depende de que el mensaje llegue y pueda ser descifrado.</td>
        <td>El sentido se ajusta <b>en tiempo real</b> según el contexto y la relación.</td></tr>
  </table></div>
  `
},
{
  id:'s4', mod:'Dimensiones', t:'Las 3 dimensiones', s:'Sintáctica · semántica · pragmática',
  body:`
  <div class="tscroll"><table class="t">
    <tr><th>Dimensión</th><th>Pregunta</th><th>De qué se ocupa</th></tr>
    <tr><td><b>Sintáctica</b><br><small>construcción</small></td>
        <td>¿Cómo se organiza y transmite el mensaje?</td>
        <td>Relaciones entre signos, códigos y canal.</td></tr>
    <tr><td><b>Semántica</b><br><small>significado</small></td>
        <td>¿Qué significa el mensaje?</td>
        <td>Interpretación mediante códigos y convenciones compartidas.</td></tr>
    <tr><td><b>Pragmática</b><br><small>efecto</small></td>
        <td>¿Qué produce el mensaje en el otro?</td>
        <td>Efectos sobre la conducta, los vínculos y la situación comunicativa.</td></tr>
  </table></div>

  <h4>El ejemplo de la clase: una señal de SALIDA</h4>
  <figure class="fg"><img src="img/dimensiones-salida.png" alt="Señal de salida analizada en 3 dimensiones">
  <figcaption>El mismo signo analizado en las tres dimensiones.</figcaption></figure>
  <ul>
    <li><b>Sintáctica</b> — transferencia del mensaje: tipografía, contraste, flecha y ubicación
    permiten que la señal sea <b>visible y legible</b>.</li>
    <li><b>Semántica</b> — significado del mensaje: la palabra y la flecha significan que existe
    una <b>vía de salida en esa dirección</b>.</li>
    <li><b>Pragmática</b> — la señal <b>orienta el recorrido y modifica la conducta</b> de quienes
    habitan el espacio.</li>
  </ul>
  <div class="key"><b>Truco para el parcial:</b> sintáctica = <b>cómo está hecho</b> ·
  semántica = <b>qué quiere decir</b> · pragmática = <b>qué hace que pase</b>.</div>
  `
},
{
  id:'s5', mod:'Axiomas', t:'Los 5 axiomas de la comunicación', s:'Palo Alto · Watzlawick',
  body:`
  <h4>Axioma 1 — Es imposible no comunicar</h4>
  <p>Todo comportamiento puede adquirir <b>valor de mensaje</b> dentro de una situación.
  Incluso el <b>silencio comunica</b>: no responder, mirar para otro lado.</p>
  <div class="tip"><b>En diseño:</b> la <b>ausencia de señalización</b> en un edificio también comunica:
  puede producir desorientación o exclusión.</div>

  <h4>Axioma 2 — Todo mensaje define una relación</h4>
  <p>La forma en que se comunica algo también <b>establece o refleja una relación</b> entre los
  participantes, y esa relación puede modificar cómo se interpreta el contenido.
  Depende de la forma en la que se dice y de cómo lo toma la otra persona.</p>
  <div class="tip"><b>En diseño:</b> un local puede decir "bienvenidos" y al mismo tiempo comunicar
  <b>distancia</b> mediante barreras, vigilancia o una entrada inaccesible.</div>

  <h4>Axioma 3 — Cada parte ordena la secuencia</h4>
  <p>Cada participante interpreta los hechos desde su propio punto de vista y organiza
  <b>qué considera causa y qué considera respuesta</b>.</p>
  <div class="tip"><b>En diseño:</b> se agregan carteles porque la gente se pierde… y la gente se pierde
  porque el espacio termina saturado de carteles.</div>

  <h4>Axioma 4 — Lenguaje digital y analógico</h4>
  <ul>
    <li><b>Digital</b>: utiliza palabras y signos codificados.</li>
    <li><b>Analógico</b>: comunica mediante formas no verbales — gestos, imágenes, tonos, posturas.</li>
  </ul>
  <div class="tip"><b>En diseño:</b> el texto "acceso para todos" <b>contradice</b> lo analógico
  si la entrada solo tiene escaleras.</div>

  <h4>Axioma 5 — Simetría y complementariedad</h4>
  <ul>
    <li><b>Simétrica</b>: los participantes se posicionan en un <b>plano de igualdad</b>.
    Ej.: dos compañeros debaten una idea. Puede aparecer una <b>escalada</b> por demostrar quién tiene razón.</li>
    <li><b>Complementaria</b>: los participantes ocupan <b>posiciones diferentes</b>.
    Ej.: docente–estudiante, médico–paciente. Puede <b>rigidizarse</b> si una posición nunca admite respuestas.</li>
  </ul>
  <div class="tip"><b>En diseño:</b> una <b>mesa redonda</b> favorece la simetría; un <b>escenario elevado</b>
  o un mostrador alto refuerza la complementariedad.</div>
  `
},
{
  id:'s6', mod:'Semiótica', t:'Qué es la semiótica', s:'Saussure · Peirce · Barthes',
  body:`
  <p>La <b>semiótica</b> es el estudio de los <b>signos</b>. Los signos permiten <b>representar,
  comunicar e interpretar</b> algo.</p>

  <h4>Saussure — semiología (modelo diádico)</h4>
  <p>Ferdinand de Saussure propone la <b>semiología</b>: una ciencia que estudie
  <b>"la vida de los signos en el seno de la vida social"</b>. Para él el signo tiene <b>dos partes</b>:</p>
  <ul>
    <li><b>Significante</b> → forma material del signo. Ej.: la palabra escrita "casa".</li>
    <li><b>Significado</b> → concepto asociado. Ej.: la idea mental de una casa.</li>
  </ul>
  <p>Se interesa principalmente por <b>cómo funcionan los signos dentro de un sistema</b>.</p>

  <h4>Peirce — semiótica (modelo triádico)</h4>
  <p>Charles Peirce plantea una concepción más amplia: el signo es una relación de <b>tres elementos</b>.</p>
  <div class="tscroll"><table class="t">
    <tr><td><b>Representamen</b></td><td>Lo que percibimos como signo.</td></tr>
    <tr><td><b>Objeto</b></td><td>Aquello a lo que el signo hace referencia.</td></tr>
    <tr><td><b>Interpretante</b></td><td>La interpretación que se genera del signo.</td></tr>
  </table></div>
  <p>Introduce la idea de <b>semiosis</b>: el <b>proceso continuo de interpretación</b> mediante el cual
  un signo puede llevar a otro signo y generar nuevas significaciones.</p>
  <div class="key"><b>Clave del parcial:</b> Saussure = <b>2</b> elementos (diádico) ·
  Peirce = <b>3</b> elementos (triádico) + <b>semiosis</b>.</div>

  <h4>Roland Barthes — «La cocina del sentido»</h4>
  <p>Los objetos cotidianos <b>no solamente cumplen una función: también significan</b>.
  Un objeto puede transmitir ideas, valores y significados culturales.</p>
  <p>Por eso el ser humano moderno está constantemente <b>"leyendo" signos</b>: no solo textos, también
  imágenes, gestos, comportamientos, objetos y espacios. Hay <b>dos niveles de lectura</b>:</p>
  <ul>
    <li><b>Lectura literal</b>: lo que vemos directamente.</li>
    <li><b>Lectura de segundo sentido</b>: lo que ese elemento significa cultural, social o ideológicamente.</li>
  </ul>
  <div class="key">"Entrar en la cocina del sentido" = <b>no quedarse con la apariencia o la función</b>
  del objeto, sino analizar qué otros significados transmite.<br>
  El sentido surge al relacionar: <b>FORMA + USO + USUARIO + CONTEXTO CULTURAL</b>.</div>

  <h4>Aplicado al diseño gráfico</h4>
  <p>El diseño <b>organiza signos</b> en diferentes escalas. Una decisión aparentemente estética
  —una tipografía, un color, una imagen, un espacio vacío, una composición— puede participar
  en la construcción de un <b>significado cultural</b>.</p>
  <div class="tip"><b>Idea clave:</b> el diseño no solo sirve para comunicar algo:
  <b>también construye significado</b>.</div>
  `
},
{
  id:'s7', mod:'Saussure', t:'Saussure: lenguaje, lengua y habla', s:'Los 3 conceptos · circuito del habla',
  body:`
  <h4>Quién fue</h4>
  <p>Ferdinand de Saussure <b>(1857–1913)</b>, lingüista suizo, es considerado uno de los padres de la
  <b>lingüística moderna</b> y el <b>fundador de la semiología</b>. Su aporte principal fue pensar la lengua
  como un <b>sistema</b>: el sentido de un signo no depende de ese signo aislado, sino de las
  <b>relaciones y diferencias</b> que mantiene con los demás signos.</p>
  <p>El <b>Curso de Lingüística General</b> se publicó en <b>1916</b>, después de su muerte, por sus
  alumnos <b>Charles Bally y Albert Sechehaye</b>, a partir de apuntes de clase.</p>

  <h4>Sus tres movimientos</h4>
  <ul>
    <li><b>Lingüista</b>: delimita la lengua como objeto científico.</li>
    <li><b>Fundador de la semiología</b>: propone estudiar los signos en la vida social.</li>
    <li><b>Precursor estructuralista</b>: piensa el sentido como un sistema de relaciones.</li>
  </ul>
  <p>Su pensamiento se organiza mediante <b>pares de oposición</b>: significante/significado,
  lengua/habla, significación/valor, sintagma/paradigma, sincronía/diacronía.</p>

  <h4>Lenguaje, lengua y habla</h4>
  <ul>
    <li><b>Lenguaje</b> — la <b>facultad humana general</b> para comunicarse mediante signos.</li>
    <li><b>Lengua</b> — el <b>sistema social y compartido</b> de signos y reglas. Es un código que necesita
    ser compartido por una comunidad. Existe <b>independientemente de la voluntad individual</b>:
    nadie puede decidir por sí solo cambiar el significado de una palabra para toda la comunidad.</li>
    <li><b>Habla</b> — el <b>uso individual, concreto y situado</b> de la lengua.</li>
  </ul>

  <div class="tscroll"><table class="t">
    <tr><th>LENGUA</th><th>HABLA</th></tr>
    <tr><td>Fenómeno social</td><td>Fenómeno individual</td></tr>
    <tr><td>Sistema compartido</td><td>Uso concreto del sistema</td></tr>
    <tr><td>Homogénea</td><td>Heterogénea</td></tr>
    <tr><td>Psíquica</td><td>Física y fisiológica</td></tr>
    <tr><td>Involuntaria</td><td>Voluntaria</td></tr>
    <tr><td>Código en sí mismo</td><td>Uso del código</td></tr>
  </table></div>
  <p><b>Ejemplo:</b> lengua = el idioma español y sus reglas compartidas · habla = la manera particular
  en que una persona usa el español en un audio de WhatsApp.</p>

  <div class="tip"><b>Aplicado al diseño:</b> la <b>lengua</b> es el <b>sistema de identidad visual</b>
  de una marca (el manual de marca); el <b>habla</b> es cada <b>pieza concreta</b>: un posteo, un afiche,
  un folleto.</div>

  <h4>Circuito del habla</h4>
  <p>Para Saussure la comunicación implica tres procesos encadenados:</p>
  <ol style="margin-left:18px;color:var(--txt2);font-size:14px">
    <li><b>Psíquico</b> — el hablante asocia en su mente <b>concepto + imagen acústica</b>. Acá está la lengua.</li>
    <li><b>Fisiológico</b> — intervienen la <b>fonación y la audición</b>; participa el cuerpo.</li>
    <li><b>Físico</b> — las <b>ondas sonoras</b> viajan por el aire.</li>
  </ol>
  <div class="key">Psíquico → Fisiológico → Físico → Fisiológico → Psíquico.<br>
  Empieza en la mente del hablante y <b>termina en la mente del oyente</b>.</div>
  `
},
{
  id:'s8', mod:'Saussure', t:'El signo lingüístico y sus principios', s:'Arbitrariedad · linealidad · mutabilidad',
  body:`
  <h4>Qué es el signo lingüístico</h4>
  <p>Para Saussure es una <b>entidad psíquica de dos caras</b>:</p>
  <ul>
    <li><b>Significante</b> — la <b>imagen acústica</b>: la representación mental del sonido de una palabra.
    <b>No es el sonido físico real</b>, sino la huella que queda en nuestra mente. Ej.: "árbol" → /árbol/.</li>
    <li><b>Significado</b> — el <b>concepto mental</b> asociado a ese significante: la idea de un árbol.</li>
  </ul>
  <div class="key"><b>MUY importante:</b> el signo <b>NO</b> une una palabra con una cosa real.<br>
  Une <b>SIGNIFICANTE ↔ SIGNIFICADO</b>, no palabra ↔ objeto real.<br>
  Un árbol real, una foto de un árbol y el concepto mental de "árbol" son cosas <b>diferentes</b>.</div>
  <figure class="fg"><img src="img/magritte-pipa.png" alt="Ceci n'est pas une pipe">
  <figcaption>Magritte lo dice literal: esto no es una pipa, es la <i>representación</i> de una pipa.</figcaption></figure>

  <h4>Principio 1 — Arbitrariedad</h4>
  <p>La relación entre significante y significado es <b>arbitraria o convencional</b>. No existe una razón
  natural por la cual un objeto deba llamarse "mesa", "table" o de otra manera.</p>
  <ul>
    <li><b>Convencional</b>: funciona porque la <b>comunidad</b> lo reconoce y lo repite.</li>
    <li><b>No individual</b>: nadie puede cambiar la lengua por sí solo; hace falta una <b>práctica social</b>.</li>
  </ul>
  <div class="tip">Arbitrariedad <b>no</b> significa que cada individuo pueda inventar libremente los signos.</div>

  <h4>Principio 2 — Linealidad</h4>
  <p>El significante lingüístico <b>se desarrolla en el tiempo</b>: los elementos aparecen
  <b>uno detrás de otro</b>. Ej.: di-se-ño. No podemos producir simultáneamente todos los sonidos:
  <b>la secuencia y el orden importan</b>.</p>
  <div class="tip"><b>Aplicado al diseño:</b> los <b>recorridos de lectura</b> de una portada, un afiche,
  una interfaz, una pieza editorial o un audiovisual. El orden en que aparecen los elementos
  puede modificar la interpretación.</div>

  <h4>Inmutabilidad y mutabilidad</h4>
  <p>El signo es <b>inmutable y mutable al mismo tiempo</b>.</p>
  <ul>
    <li><b>Inmutabilidad</b>: un individuo <b>no puede cambiar la lengua por sí solo</b>. Nadie puede decidir
    que desde mañana "mesa" signifique "silla". La lengua es un <b>sistema heredado</b> y compartido.</li>
    <li><b>Mutabilidad</b>: la lengua <b>sí se transforma a lo largo del tiempo</b>. Los cambios sociales,
    culturales y tecnológicos modifican los signos. Ej.: la palabra <b>"selfie"</b>; o la evolución del
    latín hacia las lenguas romances.</li>
  </ul>
  <div class="key">No es contradictorio: es inmutable <b>frente al individuo</b> y mutable
  <b>frente al tiempo y a la sociedad</b>.</div>
  `
},
{
  id:'s9', mod:'Saussure', t:'Significación y valor · sintagma y paradigma', s:'Los pares clave de Saussure',
  body:`
  <h4>Significación vs. valor</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Significación</th><th>Valor</th></tr>
    <tr><td>Relación <b>interna</b> del signo: significante + significado.</td>
        <td>Relación <b>diferencial</b> del signo con los demás signos del sistema.</td></tr>
    <tr><td>Qué relación tienen las dos caras del signo.</td>
        <td>Qué lugar ocupa el signo en el sistema y cómo se diferencia de los otros.</td></tr>
  </table></div>
  <div class="key">Por eso Saussure afirma: <b>"la lengua es un sistema de valores"</b>.
  El valor <b>surge por oposición</b>.</div>
  <p>Reconocemos el <b>azul</b> porque no es rojo, verde ni amarillo. "Casa" adquiere su valor en relación
  con <b>casita, departamento, mansión, vivienda</b>.</p>

  <h4>El valor en el diseño</h4>
  <p>Un elemento visual <b>no tiene un significado fijo por sí mismo</b>: su sentido depende del sistema
  en el que aparece y de sus relaciones con otros elementos.</p>
  <ul>
    <li><b>Marca</b>: el logo de Nike adquiere valor porque se diferencia de Adidas o Puma.</li>
    <li><b>Color</b>: adquiere valor por su relación con los demás colores de la composición.</li>
    <li><b>Tipografía</b>: una serif, sans serif, display o manuscrita genera distintas asociaciones
    según el sistema visual en que se use.</li>
    <li><b>Material</b>: vidrio, plástico, metal, madera o tela producen distintos valores culturales.</li>
  </ul>
  <div class="key">En un sistema visual, <b>elegir es diferenciar</b>.</div>
  <figure class="fg"><img src="img/casio-rolex.png" alt="Casio y Rolex">
  <figcaption>Un reloj no significa solo: significa en oposición al otro.</figcaption></figure>

  <h4>Sintagma y paradigma</h4>
  <div class="tscroll"><table class="t">
    <tr><th>SINTAGMA — lo que está</th><th>PARADIGMA — lo que podría estar</th></tr>
    <tr><td>Relaciones <b>en presencia</b>.</td><td>Relaciones <b>en ausencia</b>.</td></tr>
    <tr><td>Los elementos están juntos y forman una <b>cadena o composición</b>.</td>
        <td>Las distintas <b>opciones</b> que podrían ocupar ese lugar.</td></tr>
    <tr><td>Ej.: hombre + bueno · logotipo + color + tipografía + imagen + soporte</td>
        <td>Ej.: serif / sans serif / display / script</td></tr>
  </table></div>
  <p>Una modificación en el orden, el tamaño o la función de un elemento <b>puede cambiar el sentido</b>
  de la composición. Y aunque solo una opción aparezca, <b>las opciones ausentes también influyen</b>
  en la interpretación.</p>

  <h4>Aplicado al diseño</h4>
  <p>Diseñar implica dos operaciones:</p>
  <ol style="margin-left:18px;color:var(--txt2);font-size:14px">
    <li><b>Elegir</b> una opción entre varias posibilidades → <b>paradigma</b>.
    (Tipografía: serif/sans/script/display · Color: neutro/flúo/pastel/saturado · Material: papel/plástico/vidrio/metal)</li>
    <li><b>Combinar</b> las elecciones en una composición concreta → <b>sintagma</b>.
    (Logo + tipografía + color + imagen + soporte)</li>
  </ol>
  <div class="key">El diseño produce sentido mediante <b>elección + combinación</b>.
  El paradigma es <b>virtual</b>: no vemos las opciones descartadas, pero esas ausencias
  también influyen en cómo interpretamos.</div>
  <p>Lo mismo ocurre con el vestuario, el encuadre, el montaje, la música o la selección de escenas.</p>
  `
},
{
  id:'s10', mod:'Saussure', t:'Sincronía y diacronía', s:'El corte vs. la evolución',
  body:`
  <div class="tscroll"><table class="t">
    <tr><th>SINCRONÍA</th><th>DIACRONÍA</th></tr>
    <tr><td>Analiza el sistema <b>en un momento determinado</b>.</td>
        <td>Analiza la <b>evolución del sistema a través del tiempo</b>.</td></tr>
    <tr><td>Es hacer un <b>"corte" en el tiempo</b>.</td><td>Es seguir la <b>transformación</b>.</td></tr>
    <tr><td><i>¿Cómo funciona este sistema ahora?</i></td><td><i>¿Cómo cambió y se transformó?</i></td></tr>
  </table></div>

  <h4>Análisis sincrónico</h4>
  <p>Ej.: analizar las identidades visuales de empresas tecnológicas contemporáneas y observar colores,
  tipografías, formas, estilos, tendencias y relaciones entre marcas. <b>No interesa de dónde vienen</b>
  esos elementos, sino cómo funcionan dentro del sistema en ese momento.</p>
  <p>Se analiza: cómo funciona actualmente el diseño · con qué otros diseños se relaciona ·
  qué elementos se repiten · qué elementos se diferencian · qué valores estéticos predominan ·
  qué tendencias comparte.</p>

  <h4>Análisis diacrónico</h4>
  <p>Ej.: la evolución histórica del logo de <b>Pepsi</b> o <b>Shell</b>. Se estudian cambios de forma,
  tecnología, materiales, usos, valores culturales, tendencias y contextos sociales.</p>
  <p>Se analiza: cómo era originalmente · qué cambios sufrió · qué factores sociales, tecnológicos y
  culturales influyeron · cómo cambió su significado o percepción.</p>
  <figure class="fg"><img src="img/telefonos-diacronia.png" alt="Evolución del teléfono">
  <figcaption>Diacronía: cambia la forma y también el contexto que permite interpretarla.</figcaption></figure>

  <div class="key"><b>Idea importante:</b> en la diacronía <b>no solamente cambia la forma</b>:
  también cambia el <b>contexto</b> que permite interpretar esa forma.</div>

  <h4>Ejemplo de análisis en diseño</h4>
  <p>Se puede analizar cómo se representa un tema en distintas épocas: mujer, infancia, familia,
  masculinidad, vejez, trabajo, belleza.</p>
  <ul>
    <li><b>Sincronía</b>: comparar producciones de una <b>misma</b> época.</li>
    <li><b>Diacronía</b>: comparar producciones de <b>diferentes</b> períodos y observar las
    transformaciones sociales y culturales.</li>
  </ul>
  `
},
{
  id:'s11', mod:'Barthes', t:'Barthes: retórica de la imagen', s:'Los 3 mensajes · anclaje y relevo · figuras',
  body:`
  <div class="key">La imagen <b>no significa solo por lo que muestra</b>, sino por <b>cómo organiza
  culturalmente</b> eso que muestra.</div>

  <h4>La polisemia</h4>
  <p>Barthes dice que <b>toda imagen es polisémica</b>: tiene muchos sentidos posibles. Al ver una imagen
  nos vienen muchos sentidos a la vez, por eso <b>se necesita una palabra que la fije</b> dentro de un sentido.</p>
  <p>Elige estudiar la <b>imagen publicitaria</b> porque es la única que da elementos para
  <b>anclar el sentido</b>: busca comunicar una sola idea y no ser polisémica.
  Es la que permite analizar <b>porque la imagen está sujeta a una intención</b>.</p>

  <h4>Primero: mirar antes de interpretar</h4>
  <p>Barthes parte de un aviso aparentemente simple y pregunta:</p>
  <ul>
    <li>¿Qué objetos aparecen?</li>
    <li>¿Qué texto acompaña a la imagen?</li>
    <li>¿Qué colores dominan?</li>
    <li>¿Qué tipo de escena se construye?</li>
    <li>¿Qué "promesa" ofrece el producto?</li>
  </ul>

  <h4>Los 3 mensajes de la imagen</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Mensaje</th><th>Qué es</th></tr>
    <tr><td><b>Icónico NO codificado</b></td>
        <td>La <b>denotación</b>: la imagen literal, lo reconocible, descriptivo, perceptivo. <i>¿Qué se ve?</i></td></tr>
    <tr><td><b>Icónico codificado</b></td>
        <td>La <b>connotación</b>: las asociaciones culturales, históricas e ideológicas.</td></tr>
    <tr><td><b>Lingüístico</b></td>
        <td><b>Todas las palabras</b> que aparecen en el aviso. Es lo que siempre acompaña.</td></tr>
  </table></div>
  <div class="tip">La <b>denotación es sintagmática</b>: sus elementos <b>están presentes</b> en la imagen.
  La <b>connotación convoca elementos ausentes</b> y culturalmente reconocibles.</div>

  <h4>El caso Panzani, nivel por nivel</h4>
  <figure class="fg"><img src="img/panzani.png" alt="Aviso Panzani">
  <figcaption>El aviso que Barthes analiza en «Retórica de la imagen».</figcaption></figure>
  <div class="tscroll"><table class="t">
    <tr><th>Nivel</th><th>Significante</th><th>Significado</th></tr>
    <tr><td>1 · Denotación</td><td>Red de mercado y provisiones: paquetes de pasta, lata de salsa,
        queso rallado, tomates, champignones, ajíes.</td>
        <td>Frescura, selección de ingredientes, elaboración casera.</td></tr>
    <tr><td>2 · Italianidad</td><td>Paleta tricolor, nombre de marca, tomates, pasta, etiquetas.</td>
        <td>Italia como <b>estereotipo cultural</b>: cocina, tradición, sabor, origen, "auténtico".</td></tr>
    <tr><td>3 · Industria + vida moderna</td><td>Ingredientes frescos junto a productos industrializados.</td>
        <td>La industria alimentaria facilita la vida moderna <b>sin perder la promesa de frescura</b>.</td></tr>
    <tr><td>4 · Naturaleza muerta</td><td>Composición de alimentos dispuestos como una escena pictórica.</td>
        <td>Abundancia, valor cultural, "producto como obra", saber visual sofisticado.
        La publicidad <b>toma prestigio de la tradición pictórica</b>.</td></tr>
  </table></div>

  <h4>Las 2 funciones del texto: ANCLAJE y RELEVO</h4>
  <div class="tscroll"><table class="t">
    <tr><th>ANCLAJE — el texto repite / fija</th><th>RELEVO — el texto suma</th></tr>
    <tr><td>Tiene función <b>denominativa</b>.</td><td>El texto aporta información <b>no presente</b> en la imagen.</td></tr>
    <tr><td><b>Guía</b> la identificación e interpretación y <b>reduce la ambigüedad</b>.</td>
        <td>Texto e imagen se <b>complementan</b> para producir un sentido <b>nuevo</b>.</td></tr>
    <tr><td>Impide que las connotaciones se vuelvan demasiado abiertas.</td>
        <td>La imagen no solo "ilustra": <b>participa</b> del sentido.</td></tr>
    <tr><td>En diseño: el nombre del producto, el slogan, la información técnica.</td>
        <td>Clave para leer <b>memes, historietas, campañas y piezas audiovisuales</b>.</td></tr>
  </table></div>
  <div class="key"><b>La pregunta para resolverlo:</b> ¿el texto <b>repite</b> lo que ya dice la imagen
  (anclaje) o le <b>suma</b> algo que la imagen sola no dice (relevo)?</div>
  <div class="figrow">
    <figure class="fg"><img src="img/lucky-strike.png" alt="Lucky Strike"><figcaption>Anclaje: el texto fija la lectura del producto.</figcaption></figure>
    <figure class="fg"><img src="img/mcdonalds-wifi.png" alt="McDonalds wifi"><figcaption>Relevo: sin la marca, no se sabe qué es.</figcaption></figure>
  </div>

  <h4>Signos lingüísticos vs. signos semiológicos</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Signos lingüísticos</th><th>Signos semiológicos (la imagen)</th></tr>
    <tr><td>Unidades <b>lineales</b></td><td><b>Discontinuos y simultáneos</b></td></tr>
    <tr><td><b>Arbitrariedad</b> del signo</td><td><b>No son totalmente arbitrarios</b></td></tr>
    <tr><td>Ej.: á-r-b-o-l</td><td>Imagen + texto + composición · requieren <b>saber cultural</b></td></tr>
  </table></div>

  <h4>Retórica de la imagen — las figuras</h4>
  <p>Viene de la <b>filosofía griega</b>. La connotación se organiza por <b>figuras y asociaciones
  culturales</b>. Usamos las imágenes retóricas <b>para persuadir</b>.</p>
  <div class="tscroll"><table class="t">
    <tr><td><b>Metáfora</b></td><td>Comparación: una cosa <b>por</b> otra.</td></tr>
    <tr><td><b>Metonimia</b></td><td>Una <b>parte</b> por el <b>todo</b>.</td></tr>
    <tr><td><b>Hipérbole</b></td><td><b>Exageración</b> de un rasgo.</td></tr>
    <tr><td><b>Antítesis</b></td><td><b>Choque</b> de valores.</td></tr>
    <tr><td><b>Elipsis</b></td><td>Sentido por <b>ausencia</b>.</td></tr>
  </table></div>
  <p>Las figuras pueden ser <b>morfológicas</b> (algo se repite y luego se altera),
  <b>acentuativas</b> (acentúan aquello que se quiere comunicar) o <b>contrarias</b> (usan la ironía).</p>
  <div class="tip">En los <b>años 50 y 60</b>, con las grandes editoriales y estudios publicitarios de
  Nueva York, se empieza a <b>asociar emociones a estereotipos</b> y a construir estereotipos
  para que puedan ser consumidos: <b>persuadir a la hora de consumir</b>.</div>
  `
},
{
  id:'s12', mod:'Mito', t:'Barthes: Mitologías', s:'El mito como lenguaje robado',
  body:`
  <p>Barthes analiza la <b>cultura francesa de los años 50 y 60</b> apoyándose en el estructuralismo de
  Saussure. Estudia <b>los mitos que se generan culturalmente</b>.</p>

  <h4>Qué es el mito</h4>
  <ul>
    <li><b>Todo puede ser un mito</b> y todo mito <b>tiene ideología detrás</b>.</li>
    <li>El mito se <b>naturaliza</b>: no vemos el detrás de su construcción, nos parece obvio o natural.</li>
    <li>Según Barthes, el mito <b>oculta la historia social y política</b> detrás de los signos.</li>
    <li>Es una forma de <b>violencia simbólica</b>: impone las visiones de la <b>clase dominante</b>
    como si fueran naturales y universales.</li>
    <li><b>Detrás del mito hay poder</b>: la pregunta siempre es <b>quién construye ese relato</b>.</li>
  </ul>
  <div class="key">El mito es un <b>LENGUAJE ROBADO</b>: toma un signo ya formado
  (significante + significado) y lo <b>vacía</b> para rellenarlo con otro significado ideológico.<br>
  Ej.: "los inmigrantes vienen a robarnos los trabajos" — cuando en realidad buscan una vida mejor.</div>

  <h4>Los dos niveles del mito</h4>
  <figure class="fg"><img src="img/paris-match.png" alt="Tapa de Paris Match">
  <figcaption>El ejemplo canónico: la tapa de Paris Match.</figcaption></figure>
  <div class="tscroll"><table class="t">
    <tr><th></th><th>Primer nivel — DENOTACIÓN</th><th>Segundo nivel — CONNOTACIÓN (mito)</th></tr>
    <tr><td>Significante</td><td>Imagen de un soldado saludando una bandera.</td>
        <td>La misma imagen, ahora usada como <b>símbolo vacío</b>.</td></tr>
    <tr><td>Significado</td><td>Un acto de respeto hacia la bandera.</td>
        <td>Concepto <b>ideológico</b>: la grandeza del Estado, la idea de integración.</td></tr>
    <tr><td>Signo</td><td>Imagen literal de un soldado en contexto patriótico.</td>
        <td><b>Signo mitológico</b>: ya no solo denota una acción, connota ideologías
        (patriotismo, legitimación de estructuras de poder).</td></tr>
  </table></div>
  <div class="tip">Con esa tapa se intenta mostrar un país que <b>integra a sus colonias</b>,
  pero detrás nadie habla de la <b>colonización</b> que hubo en esas zonas.</div>

  <h4>Otros mitos que ve la clase</h4>
  <div class="figrow">
    <figure class="fg"><img src="img/marilyn.png" alt="Marilyn Monroe"><figcaption>Marilyn: el mito del sexismo; los directores no la dejaban salir de ese lugar.</figcaption></figure>
    <figure class="fg"><img src="img/hippies.png" alt="Hippies"><figcaption>El hippie: rebeldía reducida a moda y estética.</figcaption></figure>
    <figure class="fg"><img src="img/escarabajo-vw.png" alt="Escarabajo VW"><figcaption>El Escarabajo: de "auto nazi" a auto tierno.</figcaption></figure>
  </div>
  <ul>
    <li><b>El hippie</b>: una generación que vivía el sueño americano, rebelde, en contra del capitalismo
    y de la guerra de Vietnam. Desafiaron los límites y <b>el capitalismo los terminó reduciendo
    a una época, una moda, una estética</b>.</li>
    <li><b>La industria de la moda</b>: se vende como <b>sustentable</b>, pero la ropa
    <b>no se diseña para durar</b>, lo que impulsa el consumo.</li>
    <li><b>El auto popular alemán — el Escarabajo</b>: Hitler promete un auto para todos en una Alemania
    con hambre tras la Primera Guerra; lo diseña Porsche. Queda marcado como <b>el auto nazi</b> y nunca
    llega a ser realmente popular. Después, para venderlo, hay que <b>sacarle la connotación nazi</b>:
    frente a los autos enormes de Norteamérica, aparece como <b>chiquito y "tierno"</b>.</li>
    <li><b>La industria argentina</b>: un auto utilitario hecho con motor de tractores (éramos grandes
    exportadores agrícolas) y al que costaba conseguirle repuestos. Al cambiar la gestión de gobierno,
    el auto siguiente es <b>totalmente contradictorio</b>: uno de industria nacional, el otro estadounidense.</li>
    <li><b>El tango</b>: el extranjero cree que todos bailamos tango. Se le vende al turista
    <b>una experiencia que no es real</b>.</li>
  </ul>

  <h4>John Berger — «Modos de ver»</h4>
  <figure class="fg"><img src="img/berger-desnudo.png" alt="Desnudo en la pintura">
  <figcaption>La construcción de la imagen femenina en la pintura occidental.</figcaption></figure>
  <p>Berger analiza <b>cómo se representa a las mujeres</b> en la pintura y cómo <b>esa mirada pasa
  a la fotografía</b>.</p>
  <ul>
    <li>Parte de la Biblia: se <b>condena solo a la mujer</b> y no al hombre, siendo ambos culpables;
    se construye una imagen de <b>monstruo y seductora</b>.</li>
    <li>En el <b>Renacimiento</b> se empieza a pintar a Adán y Eva. Hacia <b>1500</b> se representan escenas
    de mujeres desnudas —<b>nunca hombres</b>— compradas por hombres con mucho dinero, y guardadas
    en los <b>gabinetes de curiosidades</b>.</li>
    <li>Analiza la <b>pose</b>: la mujer aparece de forma <b>pasiva</b>, esperando que un hombre actúe.
    Al comparar culturas, en otras se la muestra <b>activa</b>.</li>
    <li>Se pregunta <b>qué es estar desnudo</b>: ¿ser uno mismo?</li>
  </ul>
  `
},
{
  id:'s13', mod:'Objeto', t:'Semántica del objeto', s:'Barthes · coordenadas · polisemia · Papanek',
  body:`
  <p>Barthes se pregunta <b>qué es un objeto</b>: es un <b>signo</b>, una <b>cosa humana destinada a existir</b>.
  Usa el cuerpo teórico de <b>Saussure</b>. Todos los objetos <b>cumplen la función de comunicar</b>.</p>
  <p>¿Qué sentido construyen para nosotros? ¿De qué época son? ¿A qué clase pertenecen?
  Ese sentido se construye <b>en base a lo aprendido y a la experiencia</b> de cada uno.</p>

  <h4>Las 2 coordenadas del objeto</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Coordenada SIMBÓLICA (profunda)</th><th>Coordenada TAXONÓMICA o clasificatoria (extensa)</th></tr>
    <tr><td>Todo objeto tiene <b>profundidad metafórica</b>: remite a su significado.</td>
        <td>Todo objeto <b>participa de una clasificación</b> que impone la sociedad.</td></tr>
    <tr><td>La <b>construcción social</b> que le damos.</td>
        <td>La <b>función</b> que cumple el objeto en su forma literal.</td></tr>
  </table></div>

  <h4>Cómo "objetivar" al objeto</h4>
  <p>Hay que <b>tomar distancia</b> para poder ser analítico:</p>
  <ul>
    <li><b>Estructurar</b> su significado: presentarlo en forma especular, alejarse.</li>
    <li><b>Aislar</b> en el objeto representado el <b>significado</b> y el <b>significante</b>
    (materialidad = conceptos asociados).</li>
    <li><b>Analizar los fragmentos extensos de signos = sintagmas</b>: en qué contexto se diseña.</li>
  </ul>
  <div class="tip">No es lo mismo analizar un objeto <b>aislado</b> que conociendo su <b>contexto</b>:
  al ponerlo en contexto aparecen signos que hubiéramos pasado por alto.</div>

  <h4>Polisemia del objeto</h4>
  <p>El objeto, en tanto signo, presenta una <b>pluralidad de sentidos</b>. El significado
  <b>depende del receptor</b>: el lector del objeto, el intérprete.</p>
  <ul>
    <li>Es de <b>naturaleza codificada</b>: negro → elegancia (en Occidente).</li>
    <li>Es <b>mediador entre los humanos y el mundo</b>: organiza nuestra relación con la realidad.</li>
    <li>El sentido es un <b>proceso de equivalencias</b>: vidrio + transparencia → pureza.</li>
  </ul>

  <h4>Función y significación</h4>
  <div class="key">La <b>función del objeto sustenta un sentido</b>: la función <b>no es solo práctica,
  también es semántica</b>.<br><br>
  <b>"La función hace nacer al signo, pero este signo es reconvertido en el espectáculo de una función."</b></div>
  <figure class="fg"><img src="img/cuchillo-funcion.png" alt="Cuchillo">
  <figcaption>En <i>Scream</i> el cuchillo ya no corta: entretiene a la audiencia.</figcaption></figure>
  <p>Hay una <b>tensión</b> entre la actividad de la función y la inactividad de la significación.
  En un segundo momento vemos que hay <b>toda una carga de sentidos</b> que no tienen que ver con ese uso:
  <b>el sentido desborda el uso del objeto</b>.</p>
  <p>Los objetos no solo transmiten informaciones, sino también <b>sistemas estructurados de signos:
  sistemas de diferencias, oposiciones y contrastes</b>.</p>
  <div class="tip">Las lecturas sobre los objetos se construyen <b>en el espacio y en el tiempo, en la
  sociedad</b>. Y <b>naturalizamos las connotaciones</b>: nos olvidamos de que son construcciones
  sociales, culturales e históricas.</div>
  <figure class="fg"><img src="img/marca-publico.png" alt="Marca y público">
  <figcaption>El universo simbólico que construyó una marca puede "mancharse" según quién la use.</figcaption></figure>

  <h4>Papanek y el fetichismo de los objetos</h4>
  <p>En la industrialización, ¿cuál es el rol de las empresas y los diseñadores? ¿Qué pasa con el
  producto <b>cuando deje de existir</b>, cuando ya fue usado?</p>
  <ul>
    <li>La industria <b>nace para ser descartable</b>: los productos no tienen una segunda vida.
    Papanek sostiene que <b>no hay que descartar el producto</b> y apoya el <b>consumo sustentable</b>.</li>
    <li>En la <b>periferia</b> están los lugares que funcionan como <b>la basura del mundo</b>:
    el lado B de las grandes industrias, que contamina el ecosistema y destruye la calidad de vida.</li>
    <li>Los diseños <b>están diseñados para fallar</b>, para que tengas que cambiarlos constantemente:
    si no, la rueda se rompe, se deja de producir, los empleados no trabajan.</li>
  </ul>

  <h4>Consumo indulgente</h4>
  <p>Consumir <b>sin necesidad real</b> y de manera excesiva, impulsado por el deseo de
  <b>gratificación instantánea</b>. Está motivado por deseos emocionales o psicológicos
  —<b>estrés, ansiedad, insatisfacción</b>— que se intentan resolver comprando.</p>
  `
},
{
  id:'s14', mod:'Posfotografía', t:'Posfotografía', s:'Dubois · extimidad · posverdad · deepfake',
  body:`
  <p>Con lo digital <b>se desdibujan los atributos</b> que la fotografía tenía cuando era analógica.</p>

  <h4>Philippe Dubois — los tres siglos de la fotografía</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Siglo XIX — ÍCONO</th><th>Siglo XX — LA SOSPECHA</th><th>Siglo XXI — ÍNDICE</th></tr>
    <tr><td><b>Documento</b>: se registran los sucesos como pruebas.<br>
            <b>Objetiva</b>: muestra la realidad tal cual es.<br>
            <b>Visión maquínica</b>.<br>
            <b>Memoria</b>: reemplaza a la pintura en el registro del momento.</td>
        <td>La fotografía <b>ya no es tan objetiva</b>: hay alguien que toma decisiones
            (armar el escenario, el ángulo, el encuadre).<br>
            Es <b>subjetiva y codificada</b>.<br>
            La sociedad todavía <b>no tenía herramientas</b> para leer esos discursos.</td>
        <td><b>Crisis de representación</b><br><b>Extimidad</b><br>
            <b>Imagen algorítmica</b><br><b>¿Memoria?</b><br>
            Se rompen los pactos: sospechamos de IA, Photoshop, filtros.</td></tr>
  </table></div>

  <h4>Cómo llegamos ahí</h4>
  <p>La fotografía aparece en <b>1800</b>, en una época obsesionada con <b>representar la realidad tal cual
  era</b> (Renacimiento, perspectiva, hiperrealismo). La <b>pintura</b> entonces toma otro camino: nacen
  las <b>vanguardias</b>, que representan la realidad desde sus propias perspectivas. Muchos pintores
  —retratistas que se quedaban sin trabajo— se vuelven <b>los primeros fotógrafos</b>.</p>
  <p>La <b>burguesía</b> solo podía acceder a retratos pintados; la fotografía se vuelve más accesible y
  la gente empieza a registrarse <b>tres veces en la vida</b>: al nacer, al casarse y al morir.
  Eso se mantiene hasta <b>1900</b>.</p>
  <p>En <b>1930</b> aparece el <b>collage</b> con las vanguardias en la <b>Bauhaus</b>: se ve que con la
  fotografía se puede crear otro discurso, y <b>se empieza a sospechar</b>. La memoria se democratiza:
  hay más cámaras, más acceso, más lugares para revelar.</p>
  <div class="tip">Un sociólogo le saca una foto a una madre y su hijo en una tribu, y ella
  <b>no los reconoce</b>: leer una foto es un <b>código que compartimos socialmente</b>.
  Nuestro sentido predominante es la vista —<b>vemos para creer</b>—, pero otras culturas no decodifican igual.</div>

  <h4>Periodización</h4>
  <div class="tscroll"><table class="t">
    <tr><td><b>1826–1880 · Pioneros</b></td><td>Experimentación fotoquímica, exposición, fijación.
        La analógica deja una <b>huella</b>: hubo una <b>presencia</b> ahí, le dio la luz.
        Cartier-Bresson y <b>el momento decisivo</b>: capturar sin intervenir ni planificar.</td></tr>
    <tr><td><b>1900–1990 · Industrial</b></td><td>Cámara masiva, prensa, álbum, reproducción.
        Registra la narrativa de Estados Unidos como potencia. La <b>crisis de 1930</b>
        (la tierra, la caída de la bolsa) no se muestra en sus fotografías.</td></tr>
    <tr><td><b>1990–2008 · Digital</b></td><td>Sensor, píxel, software, edición.
        <b>Ya no deja huella</b>: no hay presencia.</td></tr>
    <tr><td><b>2008 → Móvil + redes</b></td><td>Captura + circulación en tiempo real. Aparece la
        <b>viralización</b>: miles de fotos, a diferencia de la analógica donde había que
        <b>seleccionar</b> qué conservar. Hay una <b>pérdida de sentido</b>.</td></tr>
    <tr><td><b>2020 → Computacional / algorítmica</b></td><td>La cámara <b>calcula, corrige, completa y genera</b>.
        Con <b>prompts</b> se construye una imagen.</td></tr>
  </table></div>
  <div class="key">La fotografía cambia técnicamente, pero <b>también cambia el modo cultural
  en que la interpretamos</b>.</div>

  <h4>De la intimidad a la extimidad — Paula Sibilia</h4>
  <p>En la época analógica la fotografía servía para <b>reconstruir la memoria familiar</b>; la vida con
  imágenes existía <b>solo en el círculo privado</b> (había que ir a la casa de alguien a ver su álbum).
  Los blogs funcionan como <b>diarios íntimos</b> y ahora se publica todo.</p>
  <ul>
    <li>El concepto pasa de <b>intimidad a EXTIMIDAD</b>: la decisión propia de <b>mostrar la vida privada</b>.</li>
    <li>Se lleva <b>el espectáculo a la vida</b>. <b>Debord</b> estudia la <b>sociedad del espectáculo</b>.
    En 1930 la televisión irrumpe en la escena doméstica, las publicidades se espectacularizan,
    aparecen los <b>reality shows</b>.</li>
    <li><b>El refugio de la intimidad se rompe</b>: si te hacen bullying en el colegio, volver a casa
    ya no te salva. <b>La mirada del otro pesa mucho</b>. Vivimos por la opinión pública.</li>
  </ul>

  <h4>Susan Sontag</h4>
  <ul>
    <li>La fotografía es <b>coleccionar el mundo</b>.</li>
    <li><b>Fotografiar es apropiarse de lo fotografiado</b>.</li>
    <li><b>Encuadrar es recortar tiempo y espacio</b>. Ej.: para desacreditar una marcha, se fotografía
    una zona específica donde hay poca gente.</li>
    <li>La fotografía <b>procura pruebas, pero también interpreta</b> el mundo.</li>
    <li>Una fotografía es <b>signo de ausencia</b>.</li>
  </ul>

  <h4>Joan Fontcuberta y la posfotografía</h4>
  <p>Se pregunta qué pasa con la <b>apropiación, la colaboración y la autoría</b> de la imagen:
  cosas que se pierden. <b>Ya no hay una figura de autor</b>.</p>
  <p>Tanto la analógica como la digital <b>necesitan un referente</b>: que el sujeto fotografiado
  <b>exista</b>. Ahora no: le pedís al chat que lo cree y listo.</p>
  <div class="tscroll"><table class="t">
    <tr><th>Fotografía</th><th>Posfotografía</th></tr>
    <tr><td>Huella / referente</td><td><b>Puede no tener referente</b></td></tr>
    <tr><td>Prueba / memoria</td><td>Flujo / remix / simulación</td></tr>
    <tr><td>Objeto / archivo</td><td>Red / plataforma</td></tr>
    <tr><td>El autor <b>produce</b> imágenes</td><td>El autor <b>selecciona, prescribe, gestiona</b></td></tr>
    <tr><td>Encuadre y selección</td><td>Código / dataset / prompt</td></tr>
    <tr><td>Circulación secundaria</td><td><b>Circulación como función central</b></td></tr>
  </table></div>

  <h4>Analógico vs. digital</h4>
  <div class="tscroll"><table class="t">
    <tr><th></th><th>Analógica</th><th>Digital</th></tr>
    <tr><td>Tiempo</td><td>Momento / espera / memoria</td><td>Tiempo real / instante / archivo</td></tr>
    <tr><td>Valor</td><td>Emocional / conservación</td><td>Estético / social / performativo</td></tr>
    <tr><td>Circulación</td><td>Álbum / copia / objeto</td><td>Compartir / viralizar / remezclar</td></tr>
    <tr><td>Pregunta</td><td>¿Qué quiero <b>recordar</b>?</td><td>¿Qué quiero <b>comunicar ahora</b>?</td></tr>
  </table></div>

  <h4>Posverdad</h4>
  <p>La era <b>después de la verdad</b>, después de la caída de los relatos. <b>Bauman</b> instaura la idea
  de la <b>modernidad líquida</b>. La verdad ahora <b>se construye mediante un relato</b>, a medida del
  sentido que se quiere construir. En el siglo XX se rompen los pilares (Dios, patria, familia).</p>
  <ul>
    <li><b>Deepfake</b>: discurso falso, recreación de una imagen a partir de un prompt.
    Altera rostro, voz, cuerpo y discurso. Es un <b>relato intencionado que busca establecer
    una verdad que es mentira</b>. Los mecanismos de defensa <b>nunca llegan a estar en la vanguardia</b>
    para frenarlo. Puede <b>atentar contra la democracia</b> al interferir en el voto y el pensamiento.</li>
    <li><b>Sesgo de confirmación</b>: buscás algo y al rato todo tu feed es de eso.
    El algoritmo funciona sobre una <b>base económica y de consumo</b>.</li>
    <li><b>Polarización</b>: antes se debatían ideas abiertamente y se construían <b>consensos sociales</b>.
    Ahora, si tenés un ideal político, <b>el algoritmo no te va a contradecir</b>.</li>
  </ul>

  <h4>Poder y tecnología</h4>
  <ul>
    <li><b>Eric Sadin — tecnocracia</b>: el Estado siempre fue más fuerte económicamente que un individuo,
    pero ahora hay <b>multimillonarios que manejan gobiernos</b>: estamos dominados por las tecnologías.</li>
    <li><b>Foucault — biopoder</b>: estudia las <b>instituciones</b> y el control que tienen sobre nosotros.
    Antes <b>el rey</b> tenía poder sobre la vida y la muerte; con la modernidad es <b>el Estado</b> el que
    administra la vida (protección, salud). Hoy esas conductas <b>se conducen con sistemas tecnológicos</b>
    y el Estado se va corriendo.</li>
    <li><b>Influencers virtuales y hologramas</b>: crean mujeres hegemónicas. En Japón, un estudio mostró
    que muchos jóvenes <b>se enamoran de inteligencias virtuales</b>.</li>
  </ul>
  `
},
{
  id:'s15', mod:'Espacio', t:'Diseño y espacio', s:'Lefebvre · Augé · Foucault',
  body:`
  <h4>Henri Lefebvre — el espacio como construcción social</h4>
  <p>Tenemos <b>normalizados</b> los lugares donde estamos: nunca nos ponemos a analizar por qué las
  distribuciones son como son, por qué las cosas se diseñaron así. <b>Los espacios construyen sentido.</b></p>
  <p>Estudia la sociedad del siglo XIX y los espacios <b>en función de las instituciones</b>: cada espacio
  tiene sus propias reglas (un hospital y sus distintas áreas, sus lugares públicos). La <b>geografía,
  la arquitectura y el urbanismo</b> afectan cómo está construido el sentido de los espacios que habitamos.</p>
  <div class="key">Las preguntas de Lefebvre: <b>¿qué sentido construyen los lugares que habitamos?
  ¿Quién puede entrar en ese lugar?</b> Es una relación que <b>se construye socialmente</b>.</div>

  <h4>La tríada espacial</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Práctica espacial<br><small>lo percibido</small></th>
        <th>Representaciones del espacio<br><small>lo concebido</small></th>
        <th>Espacios de representación<br><small>lo vivido</small></th></tr>
    <tr><td>La <b>experiencia concreta</b> del espacio: cómo se usa, cómo se recorre, cómo se comparte,
            qué prácticas habilita o desalienta.<br><br>
            Una plaza no se define solo por su plano: se define por <b>quiénes la usan, a qué hora,
            con qué reglas, miedos o permisos</b>.</td>
        <td>Las formas en que una <b>institución, un proyectista o una disciplina organiza el espacio
            antes de que sea vivido</b>: mapas, planos, zonificaciones, renders, señalética, normativas,
            fotografías, Google Maps.<br><br>
            Definen <b>usos esperados</b>: por dónde se entra, dónde se espera, qué se mira, qué queda oculto.
            Lo concebido <b>anticipa un tipo de usuario</b> y un modo de comportamiento.</td>
        <td>Los espacios cargados de <b>significado emocional, cultural y simbólico</b>.
            No describen solo la forma física: expresan <b>memorias, deseos, conflictos e identidades</b>.
            Cómo la comunidad <b>se apropia</b> del espacio.<br><br>
            Ej.: Cromañón, las <b>estrellas amarillas</b> de los accidentes viales, un mural que
            transforma una pared en <b>memoria pública</b>.</td></tr>
  </table></div>

  <h4>El espacio abstracto</h4>
  <p>Surge con el <b>capitalismo</b>, a fines del siglo XX, y es el que tenemos actualmente. Los espacios
  se producen para <b>generar conductas compulsivas de compra</b>.</p>
  <p>El <b>shopping</b> no busca que hagas relaciones sociales, busca que <b>consumas</b>: por eso el patio
  de comidas, las vidrieras, las cafeterías. Los únicos lugares cómodos exigen consumir.
  Todo lo que hay son <b>objetos de deseo</b> que solo podés tener si los comprás; eso <b>debilita la
  experiencia vivida y la memoria local</b>. Son <b>administraciones del cuerpo</b>.</p>
  <p>Sus tres rasgos:</p>
  <ul>
    <li><b>Homogeneidad</b>: estándares y formas repetibles (centros comerciales, torres corporativas,
    cadenas hoteleras).</li>
    <li><b>Fragmentación</b>: separación de zonas residenciales, comerciales, industriales o turísticas.
    Los <b>barrios privados</b> generan fragmentación: se crean dos realidades, un barrio de gente
    con mucho dinero frente a uno precario.</li>
    <li><b>Jerarquía</b>: desigualdad entre espacios según ubicación, prestigio, vigilancia, acceso
    y valor inmobiliario.</li>
  </ul>
  <p><b>Consecuencias:</b> mercantiliza el espacio (el suelo se vuelve producto, marca o inversión) ·
  controla el movimiento (recorridos pautados, accesos filtrados, vigilancia) · estandariza la vivienda
  y el consumo · puede <b>desplazar poblaciones</b> de bajos recursos en procesos de renovación urbana.</p>
  <div class="tip"><b>Airbnb y gentrificación:</b> permite vivir una experiencia más cercana a la de los
  habitantes, pero concentra turistas, <b>encarece los lugares</b> y complica la vida cotidiana.
  Por un lado se vuelve rentable, por el otro no.</div>

  <h4>Casos que ve la clase</h4>
  <ul>
    <li><b>Unité d'Habitation — Le Corbusier</b>: después de la Segunda Guerra se intenta mejorar la vida
    de las personas con viviendas de muchos recursos para clase baja.
    <b>Potencial</b>: integración de servicios y nuevas formas de vida colectiva.
    <b>Tensión</b>: la vida cotidiana queda <b>prevista desde un programa funcional</b>.</li>
    <li><b>Oscar Niemeyer</b>: diseña un teatro en Brasilia con <b>doble entrada</b>, para quienes pagan
    y para quienes no pueden pagar, promoviendo una cultura <b>no elitista</b>. Pero pensó la ciudad
    para recorrerse <b>en auto</b>, y termina siendo elitista porque todo queda lejos caminando.</li>
    <li><b>Espacio contradictorio</b>: un mismo espacio habitado por dos clases sociales totalmente
    distintas — villa + zona cara.</li>
    <li><b>El puerto de Buenos Aires</b>: se pensó trasladarlo a Avellaneda por la profundidad de la zona,
    pero la disputa entre <b>unitarios y federales</b> por centralizar todo en Buenos Aires
    —y la renta enorme que dejaba— hizo caer el proyecto. Terminó en lo que hoy es Puerto Madero.</li>
  </ul>
  <div class="key"><b>¿Hay solución?</b> Frente al espacio abstracto aparecen los <b>espacios diferenciales</b>,
  de los que la comunidad <b>se apropia</b>: las <b>plazas</b> como puntos de encuentro, democráticas y de
  libre acceso, donde las clases sociales conviven sin necesidad de consumir. Las <b>ferias artesanales</b>
  también buscan generar comunidad.<br><br>
  <b>El espacio es un territorio en disputa</b>: tiene que ver con gestiones y voluntades.</div>

  <h4>Marc Augé — lugares y no lugares</h4>
  <div class="tscroll"><table class="t">
    <tr><th>LUGAR</th><th>NO LUGAR</th></tr>
    <tr><td><b>Identidad</b>: significa algo para quienes lo habitan o reconocen.</td>
        <td>Espacios de <b>tránsito</b> nomás: no hay intención de que generes un vínculo ni te arraigues.</td></tr>
    <tr><td><b>Relación social</b>: favorece encuentros, pertenencia, redes y comunidad.</td>
        <td><b>No están diseñados para que conozcas a alguien</b>.</td></tr>
    <tr><td><b>Historia</b>: conserva marcas, relatos y memorias colectivas.</td>
        <td><b>Anonimato y estandarización</b>. La experiencia se organiza por <b>reglas</b>.</td></tr>
    <tr><td>Ej.: el <b>club de barrio</b>, donde conviven distintas clases sociales y se construye comunidad.
        Querés que vayas y disfrutes: tomarte un café, ir al patio.</td>
        <td>Ej.: <b>autopistas, aeropuertos, hoteles</b>.</td></tr>
  </table></div>
  <div class="tip">Los <b>no lugares</b> se relacionan con los <b>espacios abstractos</b>: están vinculados
  al fin de la comercialización. Pero la frontera no es fija: un <b>cajero automático</b> es un no lugar,
  y sin embargo para gente en situación de calle puede convertirse en un <b>lugar</b>.</div>

  <h4>Michel Foucault — heterotopías</h4>
  <p>Son los <b>"espacios otros"</b>: <b>no comparten el mismo tiempo ni el mismo espacio</b> que la vida
  ordinaria. El tiempo en una cárcel pasa de otra manera y su espacio está construido de forma distinta.
  En un hospital, ese cuerpo no puede tener una vida normal.</p>
  <div class="key"><b>Ojo con este matiz:</b> el hospital <b>no es heterotópico para quienes trabajan ahí</b>,
  sino <b>para las personas recluidas</b>.</div>
  <ul>
    <li><b>Cementerios</b>: se vuelven lugares "impuros", se alejan de la vida.
    Espacios de reflexión, ritual y simbolismo social.</li>
    <li><b>Bibliotecas</b>: lugares de conocimiento y también de <b>clasificación/control</b> de la información.</li>
    <li><b>Museos y cárceles</b>: encapsulan memoria, disciplina y modos de representación.</li>
    <li><b>Telos y hospitales</b>: transitorios, regulados, separados de la vida ordinaria,
    con normas distintas de tiempo y espacio.</li>
    <li><b>Viaje de bodas</b>: el hotel o el tren pueden funcionar como <b>heterotopías temporales</b>.</li>
  </ul>

  <div class="key"><b>Resumen de los tres:</b><br>
  <b>No lugares</b> (Augé) = tránsito, anonimato y estandarización.<br>
  <b>Espacios abstractos</b> (Lefebvre) = separación funcional, homogeneización y control.<br>
  <b>Heterotopías</b> (Foucault) = espacios otros donde se condensan reglas, excepciones, memorias o desvíos.</div>
  `
}
];

/* ---------------- 2. FLASHCARDS ---------------- */
const CARDS = [
{c:'Comunicación',q:'¿Qué necesita la comunicación para ser comprendida?',a:'Algún <b>código compartido</b>. Además es un proceso <b>y</b> un resultado, puede darse por distintos medios y no es necesariamente de un solo sentido.'},
{c:'Comunicación',q:'¿Cuáles son los 4 modos de comunicación?',a:'<b>Oral</b> (palabra hablada) · <b>Escrita</b> (registro en un soporte) · <b>Gestual</b> (cuerpo y expresión) · <b>Icónica</b> (imágenes y convenciones).<br>Pueden reforzarse, complementarse o <b>contradecirse</b>.'},
{c:'Comunicación',q:'¿Qué diferencia a la comunicación oral de la escrita?',a:'<b>Oral</b>: requiere compartir tiempo, código y situación.<br><b>Escrita</b>: queda registrada, circula sin compartir tiempo ni espacio y permite <b>revisar</b> el mensaje antes de publicarlo.'},
{c:'Comunicación',q:'¿Qué fenómenos genera hoy la comunicación mediada en redes?',a:'<b>Sobrecarga informativa</b>, <b>fragmentación de audiencias</b>, <b>fake news</b>, <b>burbujas informativas</b> y <b>sesgos de confirmación</b>. La separación entre emisor y receptor se vuelve menos clara.'},
{c:'Comunicación',q:'¿Por qué las imágenes no "hablan solas"?',a:'Porque necesitan <b>códigos y contexto</b> para ser interpretadas. Una foto, un pictograma, un plano o un meme requieren un saber cultural. Fórmula de la clase: <b>IMAGEN + TEXTO + CONTEXTO</b>.'},
{c:'Comunicación',q:'Además de los gestos, ¿qué comunica en la comunicación gestual?',a:'La <b>mirada</b>, la <b>postura</b>, el <b>tono</b> y la <b>distancia</b>. Puede ser <b>intencional o involuntaria</b> y puede reforzar o contradecir lo verbal.'},
{c:'Modelos',q:'Shannon y Weaver: ¿qué tipo de modelo es y cuáles son sus elementos?',a:'Un modelo <b>lineal y técnico</b> (matemático).<br><b>Fuente → Transmisor → Canal → Receptor → Destino</b>.<br>Su concepto fundamental es el <b>RUIDO</b>.'},
{c:'Modelos',q:'¿Cuál es el límite del modelo de Shannon y Weaver?',a:'Explica muy bien el <b>transporte</b> de la información, pero deja afuera <b>silencios, gestos, tono de voz, contexto y las relaciones</b> entre las personas. No alcanza para explicar la comunicación humana.'},
{c:'Modelos',q:'¿Cuáles son los 6 elementos de Jakobson?',a:'<b>Emisor · Receptor · Mensaje · Código · Canal · Contexto</b>. Cada elemento activa una <b>función del lenguaje</b>.'},
{c:'Modelos',q:'¿Qué propone la Escuela de Palo Alto?',a:'El <b>modelo orquestal</b>: la comunicación es una <b>interacción social permanente</b>. No hay un emisor único ni un receptor pasivo: <b>todos los participantes influyen</b> en la construcción del sentido.'},
{c:'Modelos',q:'¿Qué significa la metáfora de "la orquesta"?',a:'Que <b>todos participan simultáneamente</b> y se van <b>ajustando durante la interacción</b>, con palabras, gestos, silencios, posturas, miradas, espacios, tiempos y vínculos.'},
{c:'Modelos',q:'Del telégrafo a la orquesta: ¿cuál es la diferencia?',a:'<b>Telégrafo</b>: secuencia lineal con origen y destino; el éxito es que el mensaje llegue y se descifre.<br><b>Orquesta</b>: coordinación continua; el sentido <b>se ajusta en tiempo real</b> según contexto y relación.'},
{c:'Dimensiones',q:'¿Qué estudia la dimensión SINTÁCTICA?',a:'La <b>construcción</b>: ¿cómo se organiza y transmite el mensaje? Las relaciones entre signos, códigos y canal.<br>Ej. señal de salida: tipografía, contraste, flecha y ubicación la hacen <b>visible y legible</b>.'},
{c:'Dimensiones',q:'¿Qué estudia la dimensión SEMÁNTICA?',a:'El <b>significado</b>: ¿qué significa el mensaje? Su interpretación mediante <b>códigos y convenciones compartidas</b>.<br>Ej.: la palabra y la flecha significan que hay una vía de salida en esa dirección.'},
{c:'Dimensiones',q:'¿Qué estudia la dimensión PRAGMÁTICA?',a:'El <b>efecto</b>: ¿qué produce el mensaje en el otro? Los efectos sobre la <b>conducta, los vínculos y la situación</b>.<br>Ej.: la señal orienta el recorrido y <b>modifica la conducta</b> de quienes habitan el espacio.'},
{c:'Axiomas',q:'Axioma 1 de la comunicación',a:'<b>Es imposible no comunicar.</b> Todo comportamiento puede adquirir valor de mensaje; incluso el <b>silencio comunica</b>.<br>En diseño: la <b>ausencia de señalización</b> también comunica (desorientación, exclusión).'},
{c:'Axiomas',q:'Axioma 2 de la comunicación',a:'<b>Todo mensaje define una relación.</b> La forma en que se comunica algo establece o refleja una relación, y esa relación modifica cómo se interpreta el contenido.<br>En diseño: un local dice "bienvenidos" pero comunica distancia con barreras o vigilancia.'},
{c:'Axiomas',q:'Axioma 3 de la comunicación',a:'<b>Cada parte ordena la secuencia.</b> Cada participante organiza desde su punto de vista qué considera <b>causa</b> y qué <b>respuesta</b>.<br>En diseño: se agregan carteles porque la gente se pierde / la gente se pierde porque hay demasiados carteles.'},
{c:'Axiomas',q:'Axioma 4 de la comunicación',a:'<b>Lenguaje digital y analógico.</b><br><b>Digital</b>: palabras y signos codificados. <b>Analógico</b>: gestos, imágenes, tonos, posturas.<br>En diseño: "acceso para todos" se contradice si la entrada solo tiene escaleras.'},
{c:'Axiomas',q:'Axioma 5 de la comunicación',a:'<b>Simetría y complementariedad.</b><br><b>Simétrica</b>: plano de igualdad (dos compañeros debatiendo); puede haber <b>escalada</b>.<br><b>Complementaria</b>: posiciones diferentes (docente–estudiante, médico–paciente); puede <b>rigidizarse</b>.'},
{c:'Axiomas',q:'En diseño, ¿qué favorece la simetría y qué la complementariedad?',a:'Una <b>mesa redonda</b> favorece la <b>simetría</b>. Un <b>escenario elevado</b> o un mostrador alto refuerza la <b>complementariedad</b>.'},
{c:'Semiótica',q:'¿Qué es la semiótica?',a:'El <b>estudio de los signos</b>. Los signos permiten <b>representar, comunicar e interpretar</b> algo.'},
{c:'Semiótica',q:'¿Cómo definió Saussure a la semiología?',a:'Como <b>"una ciencia que estudie la vida de los signos en el seno de la vida social"</b>.'},
{c:'Semiótica',q:'★ Saussure vs. Peirce: ¿cuántos elementos tiene el signo?',a:'<b>Saussure = 2</b> (diádico): significante + significado.<br><b>Peirce = 3</b> (triádico): representamen + objeto + interpretante.'},
{c:'Semiótica',q:'¿Cuáles son los 3 elementos del signo según Peirce?',a:'<b>Representamen</b>: lo que percibimos como signo.<br><b>Objeto</b>: aquello a lo que el signo hace referencia.<br><b>Interpretante</b>: la interpretación que se genera del signo.'},
{c:'Semiótica',q:'¿Qué es la SEMIOSIS?',a:'El concepto de <b>Peirce</b>: el <b>proceso continuo de interpretación</b> mediante el cual un signo puede llevar a otro signo y generar nuevas significaciones.'},
{c:'Semiótica',q:'¿Qué plantea Barthes en «La cocina del sentido»?',a:'Que los objetos cotidianos <b>no solo cumplen una función: también significan</b>. Hay que <b>entrar en la cocina del sentido</b>: no quedarse con la apariencia o la función, sino analizar qué otros significados transmiten.'},
{c:'Semiótica',q:'Según Barthes, ¿qué hay que relacionar para analizar el sentido?',a:'<b>FORMA + USO + USUARIO + CONTEXTO CULTURAL.</b> El sentido no se puede analizar de manera aislada.'},
{c:'Semiótica',q:'¿Cuáles son los dos niveles de lectura de Barthes?',a:'<b>Lectura literal</b>: lo que vemos directamente.<br><b>Lectura de segundo sentido</b>: lo que ese elemento significa cultural, social o ideológicamente.'},
{c:'Saussure',q:'Lenguaje, lengua y habla: ¿qué es cada uno?',a:'<b>Lenguaje</b>: la facultad humana general de comunicarse con signos.<br><b>Lengua</b>: el sistema social y compartido de signos y reglas.<br><b>Habla</b>: el uso individual, concreto y situado de la lengua.'},
{c:'Saussure',q:'★ Lengua vs. habla: las 6 oposiciones',a:'<b>Lengua</b>: social · sistema compartido · homogénea · psíquica · involuntaria · el código en sí.<br><b>Habla</b>: individual · uso concreto · heterogénea · física y fisiológica · voluntaria · uso del código.'},
{c:'Saussure',q:'Lengua y habla aplicadas al diseño',a:'<b>Lengua</b> = el <b>sistema de identidad visual</b> de una marca (el manual de marca).<br><b>Habla</b> = cada <b>pieza concreta</b>: un posteo, un afiche, un folleto.'},
{c:'Saussure',q:'¿Cuáles son los 3 procesos del circuito del habla?',a:'<b>Psíquico</b> (concepto + imagen acústica) → <b>Fisiológico</b> (fonación y audición) → <b>Físico</b> (ondas sonoras) → Fisiológico → Psíquico.<br>Empieza en la mente del hablante y termina en la del oyente.'},
{c:'Saussure',q:'¿Qué es el significante para Saussure?',a:'La <b>imagen acústica</b>: la representación mental del sonido de una palabra. <b>No es el sonido físico real</b>, sino la huella que queda en la mente.'},
{c:'Saussure',q:'★ ¿Qué une el signo lingüístico?',a:'Une <b>SIGNIFICANTE ↔ SIGNIFICADO</b>.<br><b>NO</b> une palabra ↔ objeto real. Un árbol real, una foto de un árbol y el concepto de "árbol" son cosas <b>diferentes</b>.'},
{c:'Saussure',q:'¿Qué es la ARBITRARIEDAD del signo?',a:'Que la relación entre significante y significado es <b>convencional</b>: no hay razón natural para que algo se llame "mesa" o "table". Funciona porque <b>la comunidad lo reconoce y lo repite</b>, no porque cada individuo lo invente.'},
{c:'Saussure',q:'¿Qué es la LINEALIDAD del significante?',a:'Que <b>se desarrolla en el tiempo</b>: los elementos aparecen <b>uno detrás de otro</b> (di-se-ño). La <b>secuencia y el orden importan</b>.<br>En diseño: los recorridos de lectura de una portada, un afiche o una interfaz.'},
{c:'Saussure',q:'¿Cómo puede el signo ser inmutable y mutable a la vez?',a:'<b>Inmutable frente al individuo</b>: nadie puede cambiar la lengua por sí solo.<br><b>Mutable frente al tiempo y la sociedad</b>: los cambios sociales, culturales y tecnológicos sí la transforman (ej.: "selfie", el latín → lenguas romances).'},
{c:'Saussure',q:'★ Significación vs. valor',a:'<b>Significación</b>: la relación <b>interna</b> del signo (significante + significado).<br><b>Valor</b>: la relación <b>diferencial</b> con los demás signos del sistema. <b>El valor surge por oposición.</b>'},
{c:'Saussure',q:'¿Por qué "la lengua es un sistema de valores"?',a:'Porque un signo adquiere valor <b>por el lugar que ocupa en el sistema</b> y por aquello que lo diferencia. Reconocemos el azul porque <b>no es</b> rojo, verde ni amarillo.'},
{c:'Saussure',q:'El valor aplicado al diseño',a:'Un elemento visual <b>no tiene significado fijo por sí mismo</b>: depende del sistema y de sus relaciones. Nike vale porque se diferencia de Adidas o Puma.<br><b>En un sistema visual, elegir es diferenciar.</b>'},
{c:'Saussure',q:'★ Sintagma vs. paradigma',a:'<b>Sintagma</b> = <b>lo que está</b>: relaciones <b>en presencia</b>, la cadena o composición (logo + color + tipografía + imagen + soporte).<br><b>Paradigma</b> = <b>lo que podría estar</b>: relaciones <b>en ausencia</b>, las opciones posibles (serif / sans / display / script).'},
{c:'Saussure',q:'¿Cómo produce sentido el diseño según Saussure?',a:'Mediante <b>ELECCIÓN + COMBINACIÓN</b>.<br>Elegir una opción entre varias = <b>paradigma</b>. Organizarlas en una composición concreta = <b>sintagma</b>.'},
{c:'Saussure',q:'¿Por qué el paradigma es "virtual"?',a:'Porque <b>no vemos</b> las opciones que podrían haberse usado y no se usaron, pero esas <b>ausencias también influyen</b> en nuestra interpretación.'},
{c:'Saussure',q:'★ Sincronía vs. diacronía',a:'<b>Sincronía</b>: analiza el sistema <b>en un momento determinado</b>, es un "corte" en el tiempo. <i>¿Cómo funciona ahora?</i><br><b>Diacronía</b>: analiza la <b>evolución a través del tiempo</b>. <i>¿Cómo cambió?</i>'},
{c:'Saussure',q:'En la diacronía, ¿qué cambia además de la forma?',a:'También cambia el <b>CONTEXTO</b> que permite interpretar esa forma. Ej.: la evolución del logo de Pepsi o Shell.'},
{c:'Barthes',q:'¿Qué significa que toda imagen es POLISÉMICA?',a:'Que tiene <b>muchos sentidos posibles</b>. Por eso se necesita una palabra y un contexto que <b>fijen</b> la imagen dentro de un sentido.'},
{c:'Barthes',q:'¿Por qué Barthes elige analizar la imagen publicitaria?',a:'Porque es la única que da elementos para <b>anclar el sentido</b>: busca comunicar <b>una sola idea</b> y no ser polisémica. La imagen está <b>sujeta a una intención</b>.'},
{c:'Barthes',q:'★ ¿Cuáles son los 3 mensajes de la imagen?',a:'<b>1. Icónico NO codificado</b> — la <b>denotación</b>: lo literal, descriptivo, perceptivo.<br><b>2. Icónico codificado</b> — la <b>connotación</b>: lo cultural, histórico, ideológico.<br><b>3. Lingüístico</b> — <b>todas las palabras</b> del aviso.'},
{c:'Barthes',q:'¿Por qué la denotación es sintagmática?',a:'Porque sus elementos <b>están presentes</b> en la imagen. En cambio la <b>connotación convoca elementos ausentes</b> y culturalmente reconocibles.'},
{c:'Barthes',q:'Panzani: ¿cuáles son los 4 niveles de lectura?',a:'<b>1. Denotación</b>: red y provisiones → frescura, elaboración casera.<br><b>2. Italianidad</b>: paleta tricolor, marca → Italia como <b>estereotipo cultural</b>.<br><b>3. Industria + vida moderna</b>: fresco junto a industrializado.<br><b>4. Naturaleza muerta</b>: prestigio de la <b>tradición pictórica</b>.'},
{c:'Barthes',q:'★ ¿Qué es la función de ANCLAJE?',a:'El texto <b>repite y fija</b> el sentido. Tiene función <b>denominativa</b>: guía la identificación, <b>reduce la ambigüedad</b> e impide que las connotaciones se vuelvan demasiado abiertas.<br>Ej.: el nombre del producto, el slogan, la ficha técnica.'},
{c:'Barthes',q:'★ ¿Qué es la función de RELEVO?',a:'El texto <b>suma información que no está en la imagen</b>. Texto e imagen se complementan para producir un <b>sentido nuevo</b>: la imagen no solo "ilustra", <b>participa</b> del sentido.<br>Clave en memes, historietas y piezas audiovisuales.'},
{c:'Barthes',q:'¿Cómo distinguir anclaje de relevo?',a:'Preguntándose: ¿el texto <b>REPITE</b> lo que ya dice la imagen (<b>anclaje</b>) o le <b>SUMA</b> algo que la imagen sola no dice (<b>relevo</b>)?'},
{c:'Barthes',q:'Signos lingüísticos vs. signos semiológicos',a:'<b>Lingüísticos</b>: unidades <b>lineales</b>, arbitrariedad del signo (á-r-b-o-l).<br><b>Semiológicos</b>: imagen + texto + composición, <b>discontinuos y simultáneos</b>, requieren saber cultural y <b>no son totalmente arbitrarios</b>.'},
{c:'Barthes',q:'Nombrá las 5 figuras retóricas de la imagen',a:'<b>Metáfora</b>: una cosa por otra.<br><b>Metonimia</b>: la parte por el todo.<br><b>Hipérbole</b>: exageración de un rasgo.<br><b>Antítesis</b>: choque de valores.<br><b>Elipsis</b>: sentido por ausencia.'},
{c:'Barthes',q:'¿Para qué usamos las figuras retóricas en la imagen?',a:'Como <b>arma para persuadir</b>. La connotación se organiza por figuras y asociaciones culturales.'},
{c:'Mito',q:'★ ¿Qué es el mito según Barthes?',a:'Un <b>lenguaje robado</b>: toma un signo ya formado y lo <b>vacía</b> para rellenarlo con un significado <b>ideológico</b>. <b>Todo puede ser un mito</b> y todo mito tiene ideología detrás.'},
{c:'Mito',q:'¿Qué oculta el mito?',a:'La <b>historia social y política</b> detrás de los signos. Es una forma de <b>violencia simbólica</b>: impone las visiones de la <b>clase dominante</b> como si fueran naturales y universales.'},
{c:'Mito',q:'¿Por qué no vemos que el mito es una construcción?',a:'Porque el mito <b>se naturaliza</b>: nos parece obvio o natural y no vemos el detrás de su construcción. Detrás siempre hay <b>poder</b>: la pregunta es <b>quién construye ese relato</b>.'},
{c:'Mito',q:'Paris Match: los dos niveles del mito',a:'<b>1er nivel (denotación)</b>: un soldado saludando una bandera = acto de respeto.<br><b>2do nivel (connotación)</b>: la misma imagen como <b>símbolo vacío</b> = grandeza del Estado e integración. Oculta la <b>colonización</b>.'},
{c:'Mito',q:'El mito del hippie',a:'Una generación rebelde, anticapitalista y contra la guerra de Vietnam, que desafió los límites. <b>El capitalismo la redujo a una época, una moda y una estética</b>: rebeldía convertida en producto.'},
{c:'Mito',q:'El mito del Escarabajo Volkswagen',a:'Hitler promete un auto para todos en una Alemania con hambre; lo diseña <b>Porsche</b>. Queda marcado como <b>el auto nazi</b> y nunca es realmente popular. Para venderlo en EE.UU. hay que <b>sacarle esa connotación</b>: frente a los autos enormes, aparece como chiquito y "tierno".'},
{c:'Mito',q:'El mito en la industria de la moda',a:'Se vende como <b>sustentable</b>, pero <b>la ropa no se diseña para durar</b>: eso impulsa el consumo.'},
{c:'Mito',q:'¿Qué analiza John Berger en «Modos de ver»?',a:'Cómo se <b>representa a las mujeres</b> en la pintura occidental y cómo <b>esa mirada pasa a la fotografía</b>. Analiza la <b>pose pasiva</b>: la mujer espera que el hombre actúe. Desde 1500 se pintan desnudos femeninos —nunca masculinos— comprados por hombres ricos.'},
{c:'Objeto',q:'¿Qué es un objeto para Barthes?',a:'Un <b>signo</b>: una <b>cosa humana destinada a existir</b>. Todos los objetos cumplen la función de <b>comunicar</b>. Usa el cuerpo teórico de <b>Saussure</b>.'},
{c:'Objeto',q:'★ ¿Cuáles son las 2 coordenadas del objeto?',a:'<b>Coordenada SIMBÓLICA</b> (profunda): todo objeto tiene <b>profundidad metafórica</b>, remite a su significado. Es la construcción social que le damos.<br><b>Coordenada TAXONÓMICA</b> (extensa): todo objeto participa de una <b>clasificación</b> que impone la sociedad. Es su función literal.'},
{c:'Objeto',q:'¿Qué es "objetivar" al objeto?',a:'<b>Tomar distancia</b> para ser analítico: estructurar su significado presentándolo en forma especular, <b>aislar</b> significante y significado, y analizar los <b>sintagmas</b> (en qué contexto se diseña).'},
{c:'Objeto',q:'¿De qué depende el significado del objeto?',a:'Del <b>receptor</b>: el lector del objeto, el intérprete. Es en la <b>lectura</b> donde termina de completarse y construirse el sentido. El objeto es <b>polisémico</b>.'},
{c:'Objeto',q:'★ "La función hace nacer al signo, pero…"',a:'"…pero este signo es <b>reconvertido en el espectáculo de una función</b>."<br>Ej.: en <i>Scream</i> el cuchillo ya no corta, <b>entretiene</b>. <b>El sentido desborda el uso del objeto.</b>'},
{c:'Objeto',q:'¿Por qué la función del objeto no es solo práctica?',a:'Porque <b>también es semántica</b>: la función <b>sustenta un sentido</b>. El sentido es un proceso de equivalencias: vidrio + transparencia → pureza; negro → elegancia (en Occidente).'},
{c:'Objeto',q:'¿Qué significa que naturalizamos las connotaciones?',a:'Que nos <b>olvidamos de que son construcciones</b> sociales, culturales e históricas, y las percibimos como algo natural. Las lecturas sobre los objetos se construyen <b>en el espacio y en el tiempo</b>.'},
{c:'Objeto',q:'¿Qué plantea Papanek?',a:'Que <b>la industria nace para ser descartable</b>: los productos no tienen segunda vida. Sostiene que <b>no hay que descartar el producto</b> y apoya el <b>consumo sustentable</b>. Además, los diseños <b>están diseñados para fallar</b>.'},
{c:'Objeto',q:'¿Qué es el consumo indulgente?',a:'Consumir <b>sin necesidad real</b> y de manera excesiva, impulsado por la <b>gratificación instantánea</b>. Responde a deseos emocionales o psicológicos: estrés, ansiedad, insatisfacción.'},
{c:'Posfotografía',q:'★ Dubois: los tres siglos de la fotografía',a:'<b>XIX — ÍCONO</b>: documento, objetiva, visión maquínica, memoria.<br><b>XX — LA SOSPECHA</b>: ya no es objetiva, es <b>subjetiva y codificada</b>; hay alguien que decide encuadre y ángulo.<br><b>XXI — ÍNDICE</b>: crisis de representación, extimidad, imagen algorítmica, ¿memoria?'},
{c:'Posfotografía',q:'¿Por qué nacen las vanguardias con la fotografía?',a:'Porque la fotografía <b>reemplaza a la pintura</b> en la representación fiel de la realidad. Los pintores deben representar de otra manera: <b>desde sus propias perspectivas</b>. Muchos retratistas se vuelven los primeros fotógrafos.'},
{c:'Posfotografía',q:'¿Cuándo se registraba la gente en el siglo XIX?',a:'<b>Tres veces en la vida</b>: al nacer, al casarse y al morir. Antes solo la <b>burguesía</b> accedía a retratos pintados; la fotografía lo vuelve más accesible.'},
{c:'Posfotografía',q:'¿Qué pasa en 1930 con la sospecha sobre la imagen?',a:'Aparece el <b>collage</b> con las vanguardias en la <b>Bauhaus</b>: se ve que con la fotografía se puede <b>crear otro discurso</b>, y se empieza a sospechar si es verdad o mentira.'},
{c:'Posfotografía',q:'¿Qué diferencia hay entre la foto analógica y la digital en cuanto a la huella?',a:'La <b>analógica deja una huella</b>: hubo una <b>presencia</b> ahí, le dio la luz. La <b>digital ya no deja huella</b>: no hay presencia, hay sensor, píxel y software.'},
{c:'Posfotografía',q:'¿Qué es el "momento decisivo"?',a:'El concepto de <b>Cartier-Bresson</b>: <b>capturar el momento sin intervenir ni planificar</b> nada.'},
{c:'Posfotografía',q:'★ Intimidad vs. extimidad (Paula Sibilia)',a:'<b>Intimidad</b>: la foto reconstruía la memoria familiar, en el <b>círculo privado</b> (había que ir a ver el álbum).<br><b>Extimidad</b>: la <b>decisión propia de mostrar la vida privada</b>. El refugio de la intimidad se rompe y la mirada del otro pesa.'},
{c:'Posfotografía',q:'¿Qué estudia Debord?',a:'La <b>sociedad del espectáculo</b>. En 1930 la televisión irrumpe en la escena doméstica, las publicidades se espectacularizan y aparecen los <b>reality shows</b>: la vida misma se espectaculariza.'},
{c:'Posfotografía',q:'★ Las 5 ideas de Susan Sontag',a:'1. La fotografía es <b>coleccionar el mundo</b>.<br>2. <b>Fotografiar es apropiarse</b> de lo fotografiado.<br>3. <b>Encuadrar es recortar</b> tiempo y espacio.<br>4. Procura <b>pruebas</b>, pero también <b>interpreta</b> el mundo.<br>5. Una fotografía es <b>signo de ausencia</b>.'},
{c:'Posfotografía',q:'¿Qué plantea Joan Fontcuberta?',a:'La <b>posfotografía</b>: se pierden la <b>autoría</b>, la apropiación y la colaboración. <b>Ya no hay figura de autor</b>. Y a diferencia de la analógica y la digital, la imagen generada <b>puede no tener referente</b>.'},
{c:'Posfotografía',q:'★ Fotografía vs. posfotografía',a:'<b>Huella/referente</b> → puede <b>no tener referente</b>.<br><b>Prueba/memoria</b> → flujo, remix, simulación.<br><b>Objeto/archivo</b> → red/plataforma.<br>El autor <b>produce</b> → el autor <b>selecciona y gestiona</b>.<br><b>Encuadre</b> → <b>código, dataset, prompt</b>.'},
{c:'Posfotografía',q:'¿Qué es la posverdad?',a:'La era <b>después de la verdad</b>, tras la caída de los relatos. <b>Bauman</b> aporta la idea de <b>modernidad líquida</b>. La verdad se <b>construye mediante un relato</b>, a medida del sentido que se quiere construir.'},
{c:'Posfotografía',q:'¿Qué es un deepfake y por qué es grave?',a:'Un <b>discurso falso</b>: la recreación de imagen, rostro, voz, cuerpo o discurso a partir de un <b>prompt</b>. Es un <b>relato intencionado que busca establecer una verdad que es mentira</b>. Los mecanismos de defensa nunca van en la vanguardia. Puede <b>atentar contra la democracia</b>.'},
{c:'Posfotografía',q:'Sesgo de confirmación y polarización',a:'<b>Sesgo</b>: buscás algo y todo tu feed se llena de eso; el algoritmo opera sobre una <b>base económica y de consumo</b>.<br><b>Polarización</b>: antes se debatía y se construían <b>consensos sociales</b>; ahora <b>el algoritmo no te contradice</b>.'},
{c:'Posfotografía',q:'¿Qué es el biopoder de Foucault?',a:'Antes <b>el rey</b> tenía poder sobre la vida y la muerte. Con la <b>modernidad</b>, es <b>el Estado</b> el que administra la vida (protección, salud). Hoy esas conductas <b>se conducen con sistemas tecnológicos</b> y el Estado se corre.'},
{c:'Espacio',q:'¿Qué plantea Lefebvre sobre el espacio?',a:'Que tenemos <b>normalizados</b> los lugares y nunca analizamos por qué se diseñaron así. <b>Los espacios construyen sentido</b>, y la geografía, la arquitectura y el urbanismo afectan cómo se construye ese sentido. <b>Es una relación social.</b>'},
{c:'Espacio',q:'★ La tríada espacial de Lefebvre',a:'<b>Práctica espacial</b> (percibido): la experiencia concreta, cómo se usa y se recorre.<br><b>Representaciones del espacio</b> (concebido): planos, renders, señalética, normativas; <b>anticipan un usuario</b>.<br><b>Espacios de representación</b> (vivido): carga emocional y simbólica; cómo la comunidad <b>se apropia</b>.'},
{c:'Espacio',q:'¿Cómo se define una plaza según Lefebvre?',a:'<b>No solo por su plano</b>: se define por <b>quiénes la usan, a qué hora, con qué reglas, miedos o permisos</b>. Esa es la <b>práctica espacial</b>.'},
{c:'Espacio',q:'Ejemplos de espacios de representación',a:'Cromañón, las <b>estrellas amarillas</b> de los accidentes viales, un <b>mural</b> que transforma una pared en <b>memoria pública</b>. Expresan memorias, deseos, conflictos e identidades.'},
{c:'Espacio',q:'★ ¿Qué es el espacio abstracto?',a:'El espacio del <b>capitalismo</b> (fines del s.XX). Se produce para <b>generar conductas compulsivas de compra</b>. El shopping no busca relaciones sociales sino <b>consumo</b>. Son <b>administraciones del cuerpo</b> que debilitan la experiencia vivida y la memoria local.'},
{c:'Espacio',q:'Los 3 rasgos del espacio abstracto',a:'<b>Homogeneidad</b>: estándares repetibles (shoppings, torres, cadenas).<br><b>Fragmentación</b>: separación de zonas; los barrios privados crean dos realidades.<br><b>Jerarquía</b>: desigualdad según ubicación, prestigio, vigilancia, acceso y valor inmobiliario.'},
{c:'Espacio',q:'Consecuencias del espacio abstracto',a:'<b>Mercantiliza</b> el espacio (el suelo se vuelve producto o inversión) · <b>controla el movimiento</b> (recorridos pautados, vigilancia) · <b>estandariza</b> vivienda y consumo · puede <b>desplazar poblaciones</b> de bajos recursos.'},
{c:'Espacio',q:'¿Qué son los espacios diferenciales?',a:'La respuesta al espacio abstracto: espacios de los que <b>la comunidad se apropia</b>. Las <b>plazas</b> como puntos de encuentro democráticos y de libre acceso, donde conviven las clases sin necesidad de consumir. También las ferias artesanales.'},
{c:'Espacio',q:'★ Lugar vs. no lugar (Augé)',a:'<b>LUGAR</b>: tiene <b>identidad</b> (significa algo), <b>relación social</b> (favorece encuentros) e <b>historia</b> (conserva memorias). Ej.: el club de barrio.<br><b>NO LUGAR</b>: espacios de <b>tránsito, anonimato y estandarización</b>. Ej.: autopistas, aeropuertos, hoteles.'},
{c:'Espacio',q:'¿Puede un no lugar volverse lugar?',a:'Sí. Un <b>cajero automático</b> es un no lugar, pero para gente en situación de calle <b>se convierte en un lugar</b>. La frontera no es fija.'},
{c:'Espacio',q:'★ ¿Qué son las heterotopías de Foucault?',a:'Los <b>"espacios otros"</b>: <b>no comparten el mismo tiempo ni espacio</b> que la vida ordinaria. En una cárcel el tiempo pasa distinto; en un hospital el cuerpo no puede tener una vida normal.'},
{c:'Espacio',q:'¿Para quién es heterotópico un hospital?',a:'<b>Para las personas recluidas</b>, NO para quienes trabajan ahí. Es un matiz que suele preguntarse.'},
{c:'Espacio',q:'Ejemplos de heterotopías',a:'<b>Cementerios</b> (lugares "impuros", alejados de la vida) · <b>bibliotecas</b> (conocimiento y control de la información) · <b>museos y cárceles</b> · <b>telos y hospitales</b> · el <b>viaje de bodas</b> como heterotopía temporal.'},
{c:'Espacio',q:'Diferencia entre no lugar, espacio abstracto y heterotopía',a:'<b>No lugares</b> (Augé) = tránsito, anonimato, estandarización.<br><b>Espacios abstractos</b> (Lefebvre) = separación funcional, homogeneización, control.<br><b>Heterotopías</b> (Foucault) = espacios otros con reglas, excepciones, memorias o desvíos.'},
{c:'Espacio',q:'El caso de Niemeyer en Brasilia',a:'Diseña un teatro con <b>doble entrada</b> —para quienes pagan y para quienes no— promoviendo cultura <b>no elitista</b>. Pero pensó la ciudad para recorrerse <b>en auto</b>, y termina siendo elitista porque todo queda lejos caminando.'},
{c:'Espacio',q:'¿Qué es la gentrificación (caso Airbnb)?',a:'La concentración de turistas en un mismo lugar <b>encarece</b> la zona y complica la vida cotidiana de los habitantes. Por un lado se vuelve <b>rentable</b>, por el otro no.'}
];

/* ---------------- 3. BANCO DE PREGUNTAS ---------------- */
const QUIZ = [
{m:'Comunicación',q:'¿Cuál de estas afirmaciones sobre la comunicación humana es FALSA?',
 o:['Es un proceso y también un resultado.','Necesita algún código compartido para ser comprendida.',
    'Es necesariamente un proceso de un solo sentido, del emisor al receptor.',
    'Puede darse entre dos personas, de uno a muchos o de muchos a uno.'],
 r:2,e:'NO es necesariamente de un solo sentido: el receptor puede reaccionar y modificar la interacción.'},
{m:'Comunicación',q:'¿Cuáles son los 4 modos de comunicación?',
 o:['Verbal, no verbal, escrita y digital','Oral, escrita, gestual e icónica',
    'Sintáctica, semántica, pragmática y retórica','Emisor, receptor, mensaje y canal'],
 r:1,e:'Oral (palabra hablada), escrita (registro en un soporte), gestual (cuerpo y expresión) e icónica (imágenes y convenciones). Pueden reforzarse, complementarse o contradecirse.'},
{m:'Comunicación',q:'¿Qué caracteriza a la comunicación escrita frente a la oral?',
 o:['Requiere compartir tiempo, código y situación','Queda registrada, circula sin compartir tiempo ni espacio y permite revisar antes de publicar',
    'Es siempre involuntaria','No necesita un código compartido'],
 r:1,e:'La oral suele requerir compartir tiempo y situación; la escrita queda registrada y permite revisión previa.'},
{m:'Comunicación',q:'Según la clase, ¿qué fórmula se necesita para interpretar una imagen?',
 o:['SIGNIFICANTE + SIGNIFICADO','IMAGEN + TEXTO + CONTEXTO','EMISOR + MENSAJE + RECEPTOR','FORMA + FUNCIÓN'],
 r:1,e:'Las imágenes no "hablan solas": necesitan códigos y contexto. El texto orienta la lectura posible.'},
{m:'Comunicación',q:'¿Qué fenómenos genera hoy la comunicación mediada en redes?',
 o:['Mayor claridad entre emisor y receptor','Sobrecarga informativa, fragmentación de audiencias, fake news, burbujas informativas y sesgos de confirmación',
    'La desaparición del ruido en la transmisión','La imposibilidad de que el receptor produzca contenido'],
 r:1,e:'Al volverse menos clara la separación entre emisor y receptor, aparecen esos cinco fenómenos.'},
{m:'Modelos',q:'¿Cuál es la secuencia del modelo de Shannon y Weaver?',
 o:['Emisor → Código → Contexto → Receptor','Fuente → Transmisor → Canal → Receptor → Destino',
    'Sintáctica → Semántica → Pragmática','Psíquico → Fisiológico → Físico'],
 r:1,e:'Es un modelo lineal y técnico. Su concepto fundamental es el RUIDO.'},
{m:'Modelos',q:'¿Cuál es el concepto fundamental que incorpora el modelo matemático?',
 o:['El contexto','El ruido','La polisemia','El interpretante'],
 r:1,e:'El ruido: cualquier interferencia que dificulte que el mensaje llegue correctamente.'},
{m:'Modelos',q:'¿Cuál es el límite principal del modelo de Shannon y Weaver?',
 o:['No explica cómo se transmite una señal','Deja afuera silencios, gestos, tono de voz, contexto y relaciones entre las personas',
    'No contempla al receptor','Solo sirve para comunicación escrita'],
 r:1,e:'Explica bien el transporte de la información, pero no alcanza para explicar la comunicación humana.'},
{m:'Modelos',q:'¿Cuáles son los 6 elementos de Jakobson?',
 o:['Fuente, transmisor, canal, receptor, destino y ruido','Emisor, receptor, mensaje, código, canal y contexto',
    'Significante, significado, signo, objeto, interpretante y semiosis','Identidad, relación, historia, tránsito, anonimato y regla'],
 r:1,e:'Cada elemento activa una función del lenguaje.'},
{m:'Modelos',q:'¿Qué plantea la Escuela de Palo Alto con el modelo orquestal?',
 o:['Que la comunicación es una transmisión lineal de un emisor a un receptor pasivo',
    'Que la comunicación es una interacción social permanente donde todos los participantes construyen el sentido',
    'Que solo el lenguaje verbal comunica','Que el ruido impide toda comunicación'],
 r:1,e:'Como en una orquesta: todos participan simultáneamente y se ajustan durante la interacción.'},
{m:'Dimensiones',q:'¿Qué pregunta responde la dimensión PRAGMÁTICA?',
 o:['¿Cómo se organiza y transmite el mensaje?','¿Qué significa el mensaje?',
    '¿Qué produce el mensaje en el otro?','¿Quién es el emisor?'],
 r:2,e:'Pragmática = efecto: sobre la conducta, los vínculos y la situación comunicativa.'},
{m:'Dimensiones',q:'En una señal de SALIDA, que la tipografía y el contraste la hagan legible corresponde a la dimensión:',
 o:['Sintáctica','Semántica','Pragmática','Retórica'],
 r:0,e:'Sintáctica = construcción y transferencia del mensaje: tipografía, contraste, flecha y ubicación.'},
{m:'Dimensiones',q:'Que la señal "oriente el recorrido y modifique la conducta" de quienes habitan el espacio es:',
 o:['Sintáctica','Semántica','Pragmática','Denotación'],
 r:2,e:'Pragmática: los efectos sobre la conducta y la situación.'},
{m:'Dimensiones',q:'Que la palabra y la flecha signifiquen que hay una vía de salida en esa dirección es:',
 o:['Sintáctica','Semántica','Pragmática','Connotación'],
 r:1,e:'Semántica: el significado del mensaje según códigos y convenciones compartidas.'},
{m:'Axiomas',q:'"Incluso el silencio comunica" corresponde al axioma:',
 o:['1 — Es imposible no comunicar','2 — Todo mensaje define una relación',
    '3 — Cada parte ordena la secuencia','4 — Lenguaje digital y analógico'],
 r:0,e:'Todo comportamiento puede adquirir valor de mensaje. En diseño: la ausencia de señalización también comunica.'},
{m:'Axiomas',q:'Un local que dice "bienvenidos" pero tiene barreras y vigilancia ilustra el axioma:',
 o:['1','2 — Todo mensaje define una relación','3','5'],
 r:1,e:'La forma en que se comunica algo establece o refleja una relación, y esa relación modifica la interpretación del contenido.'},
{m:'Axiomas',q:'"Se agregan carteles porque la gente se pierde; la gente se pierde porque hay demasiados carteles" ilustra:',
 o:['El axioma 1','El axioma 2','El axioma 3 — cada parte ordena la secuencia','El axioma 4'],
 r:2,e:'Cada participante decide desde su punto de vista qué es causa y qué es respuesta.'},
{m:'Axiomas',q:'El texto "acceso para todos" en una entrada que solo tiene escaleras ilustra:',
 o:['El axioma 4 — contradicción entre lenguaje digital y analógico','El axioma 1','El axioma 5','La función de anclaje'],
 r:0,e:'Digital = palabras y signos codificados. Analógico = gestos, imágenes, formas no verbales. Acá se contradicen.'},
{m:'Axiomas',q:'La relación docente–estudiante o médico–paciente es un ejemplo de relación:',
 o:['Simétrica','Complementaria','Digital','Analógica'],
 r:1,e:'Complementaria: los participantes ocupan posiciones diferentes. Puede rigidizarse si una posición nunca admite respuestas.'},
{m:'Axiomas',q:'En diseño, ¿qué favorece una relación simétrica?',
 o:['Un escenario elevado','Un mostrador alto','Una mesa redonda','Una entrada con vigilancia'],
 r:2,e:'La mesa redonda favorece la simetría; el escenario elevado o el mostrador alto refuerzan la complementariedad.'},
{m:'Semiótica',q:'★ ¿Cuántos elementos tiene el signo para Saussure y cuántos para Peirce?',
 o:['3 y 2 respectivamente','2 (significante y significado) y 3 (representamen, objeto e interpretante)',
    'Ambos 2','Ambos 3'],
 r:1,e:'Saussure es diádico (2); Peirce es triádico (3) e incorpora la semiosis.'},
{m:'Semiótica',q:'¿Qué es el INTERPRETANTE en Peirce?',
 o:['El objeto real al que remite el signo','Lo que percibimos como signo',
    'La interpretación que se genera del signo','La imagen acústica'],
 r:2,e:'Representamen = lo que percibimos. Objeto = a lo que remite. Interpretante = la interpretación generada.'},
{m:'Semiótica',q:'¿Qué es la SEMIOSIS?',
 o:['La unión de significante y significado','El proceso continuo de interpretación por el cual un signo lleva a otro y genera nuevas significaciones',
    'El estudio del espacio social','La función del texto que fija el sentido'],
 r:1,e:'Es el concepto de Peirce que da cuenta del carácter ilimitado de la interpretación.'},
{m:'Semiótica',q:'"Una ciencia que estudie la vida de los signos en el seno de la vida social" es la definición de:',
 o:['La semiología, según Saussure','La pragmática, según Jakobson','La retórica, según Barthes','La heterotopía, según Foucault'],
 r:0,e:'Así define Saussure la ciencia que propone: la semiología.'},
{m:'Semiótica',q:'Según Barthes, para analizar el sentido de un objeto hay que relacionar:',
 o:['Emisor + mensaje + receptor','Forma + uso + usuario + contexto cultural',
    'Sintagma + paradigma','Denotación + ruido'],
 r:1,e:'"Entrar en la cocina del sentido": no quedarse con la apariencia o la función, sino ver qué otros significados transmite.'},
{m:'Saussure',q:'★ ¿Cuál de estos rasgos corresponde a la LENGUA y no al habla?',
 o:['Individual','Heterogénea','Voluntaria','Fenómeno social, homogénea e involuntaria'],
 r:3,e:'Lengua: social, sistema compartido, homogénea, psíquica, involuntaria, el código en sí. Habla: individual, heterogénea, física, voluntaria, uso del código.'},
{m:'Saussure',q:'En diseño, la LENGUA equivaldría a:',
 o:['Un posteo concreto de Instagram','El sistema de identidad visual de una marca (el manual)',
    'Un afiche impreso','La tipografía elegida para una pieza'],
 r:1,e:'Lengua = sistema visual compartido. Habla = cada pieza concreta que usa ese sistema.'},
{m:'Saussure',q:'¿Cuál es el orden del circuito del habla?',
 o:['Físico → psíquico → fisiológico','Psíquico → fisiológico → físico → fisiológico → psíquico',
    'Fisiológico → físico → psíquico','Psíquico → físico → psíquico'],
 r:1,e:'Empieza en la mente del hablante y termina en la mente del oyente.'},
{m:'Saussure',q:'★ El signo lingüístico une:',
 o:['Una palabra con un objeto real','Un significante (imagen acústica) con un significado (concepto mental)',
    'Un representamen con un interpretante','Un sintagma con un paradigma'],
 r:1,e:'NO une palabra ↔ objeto real. Un árbol real, una foto de un árbol y el concepto "árbol" son cosas diferentes.'},
{m:'Saussure',q:'El significante para Saussure es:',
 o:['El sonido físico real de la palabra','La imagen acústica: la representación mental del sonido',
    'El objeto material designado','El contexto cultural'],
 r:1,e:'No es el sonido físico, sino la huella o representación que queda en la mente.'},
{m:'Saussure',q:'¿Qué significa que el signo sea ARBITRARIO?',
 o:['Que cada individuo puede inventar libremente los signos','Que la relación significante-significado es convencional y funciona porque la comunidad la reconoce y la repite',
    'Que el signo cambia todos los días','Que el signo tiene una razón natural'],
 r:1,e:'Arbitrariedad NO significa libertad individual: hace falta una práctica social.'},
{m:'Saussure',q:'La LINEALIDAD del significante implica que:',
 o:['El significante se desarrolla en el tiempo, un elemento detrás de otro','Todos los sonidos se producen simultáneamente',
    'El signo no puede cambiar','El significado es siempre el mismo'],
 r:0,e:'Ej.: di-se-ño. La secuencia y el orden importan. En diseño: los recorridos de lectura.'},
{m:'Saussure',q:'¿Cómo se resuelve la aparente contradicción entre inmutabilidad y mutabilidad?',
 o:['Solo una de las dos es verdadera','Es inmutable frente al individuo y mutable frente al tiempo y la sociedad',
    'Es mutable solo en las lenguas muertas','Depende del hablante'],
 r:1,e:'Nadie puede cambiar la lengua por sí solo, pero los cambios sociales y tecnológicos sí la transforman (ej.: "selfie").'},
{m:'Saussure',q:'★ ¿Cuál es la diferencia entre SIGNIFICACIÓN y VALOR?',
 o:['Son sinónimos','Significación es la relación interna del signo; valor es su relación diferencial con los demás signos del sistema',
    'Significación es el uso; valor es el precio','Significación es el paradigma; valor es el sintagma'],
 r:1,e:'Por eso "la lengua es un sistema de valores": el valor surge por oposición.'},
{m:'Saussure',q:'Que reconozcamos el azul porque no es rojo, verde ni amarillo es un ejemplo de:',
 o:['Significación','Valor','Arbitrariedad','Linealidad'],
 r:1,e:'El valor surge por oposición: el signo vale por lo que lo diferencia de los otros del sistema.'},
{m:'Saussure',q:'★ "Logotipo + color + tipografía + imagen + soporte" es un ejemplo de:',
 o:['Paradigma','Sintagma','Diacronía','Connotación'],
 r:1,e:'Sintagma = lo que está, relaciones en presencia: los elementos juntos formando una composición.'},
{m:'Saussure',q:'★ "Serif / sans serif / display / script" como opciones posibles es un ejemplo de:',
 o:['Sintagma','Paradigma','Sincronía','Denotación'],
 r:1,e:'Paradigma = lo que podría estar, relaciones en ausencia. Es virtual, pero las ausencias influyen en la interpretación.'},
{m:'Saussure',q:'Según Saussure, el diseño produce sentido mediante:',
 o:['Denotación y connotación','Elección (paradigma) + combinación (sintagma)','Anclaje y relevo','Función y forma'],
 r:1,e:'Primero se elige entre opciones posibles, después se combinan en una composición concreta.'},
{m:'Saussure',q:'Analizar las identidades visuales de varias tecnológicas contemporáneas y compararlas entre sí es un análisis:',
 o:['Diacrónico','Sincrónico','Pragmático','Retórico'],
 r:1,e:'Sincronía: un corte en el tiempo. No interesa de dónde vienen los elementos, sino cómo funcionan ahora.'},
{m:'Saussure',q:'Analizar la evolución histórica del logo de Pepsi o Shell es un análisis:',
 o:['Sincrónico','Diacrónico','Sintagmático','Denotativo'],
 r:1,e:'Diacronía: la evolución del sistema a través del tiempo. Y no solo cambia la forma: también el contexto que permite interpretarla.'},
{m:'Barthes',q:'★ ¿Cuáles son los 3 mensajes que identifica Barthes en la imagen publicitaria?',
 o:['Emisor, receptor y canal','Icónico no codificado (denotación), icónico codificado (connotación) y lingüístico',
    'Sintáctico, semántico y pragmático','Representamen, objeto e interpretante'],
 r:1,e:'El lingüístico son todas las palabras del aviso; es lo que siempre acompaña.'},
{m:'Barthes',q:'¿Qué significa que la imagen sea POLISÉMICA?',
 o:['Que tiene un solo sentido posible','Que tiene muchos sentidos posibles y necesita texto y contexto para fijarlos',
    'Que no necesita código','Que es siempre denotativa'],
 r:1,e:'Por eso Barthes estudia la publicidad: es la que da elementos para anclar el sentido.'},
{m:'Barthes',q:'¿Por qué Barthes elige la imagen publicitaria para su análisis?',
 o:['Porque es la más bella','Porque está sujeta a una intención y busca comunicar una sola idea, no ser polisémica',
    'Porque no tiene texto','Porque es la más antigua'],
 r:1,e:'La publicidad da elementos para anclar el sentido; es la única que permite analizar así.'},
{m:'Barthes',q:'¿Por qué la denotación es SINTAGMÁTICA?',
 o:['Porque convoca elementos ausentes','Porque sus elementos están presentes en la imagen',
    'Porque depende del receptor','Porque es ideológica'],
 r:1,e:'La denotación muestra elementos presentes; la connotación convoca elementos ausentes y culturalmente reconocibles.'},
{m:'Barthes',q:'En el aviso Panzani, la paleta tricolor y el nombre de marca connotan:',
 o:['Frescura y elaboración casera','Italia como estereotipo cultural: cocina, tradición, origen, "auténtico"',
    'La industria alimentaria','Abundancia pictórica'],
 r:1,e:'Es el segundo nivel: la "italianidad". La cultura completa lo que la imagen no dice literalmente.'},
{m:'Barthes',q:'En Panzani, que los alimentos estén dispuestos como una escena pictórica remite a:',
 o:['La denotación','La italianidad','La naturaleza muerta: la publicidad toma prestigio de la tradición pictórica','El mensaje lingüístico'],
 r:2,e:'Cuarto nivel: abundancia, valor cultural, "producto como obra", saber visual sofisticado.'},
{m:'Barthes',q:'★ ¿Qué es la función de ANCLAJE?',
 o:['El texto suma información que no está en la imagen','El texto repite y fija el sentido, guiando la interpretación y reduciendo la ambigüedad',
    'La imagen ilustra al texto','El texto contradice a la imagen'],
 r:1,e:'Tiene función denominativa e impide que las connotaciones se vuelvan demasiado abiertas.'},
{m:'Barthes',q:'★ ¿Qué es la función de RELEVO?',
 o:['El texto repite lo que ya dice la imagen','El texto suma información no presente en la imagen y juntos producen un sentido nuevo',
    'El texto identifica el producto','El texto reduce la polisemia a cero'],
 r:1,e:'La imagen no solo "ilustra": participa del sentido. Es clave para leer memes, historietas y piezas audiovisuales.'},
{m:'Barthes',q:'Una imagen de papas fritas donde el logo de wifi permite reconocer la marca es un caso de:',
 o:['Anclaje','Relevo: sin ese elemento no se sabría de qué marca se trata','Denotación pura','Metonimia'],
 r:1,e:'Suma información que la imagen sola no daba.'},
{m:'Barthes',q:'Una foto de una bebida helada acompañada del texto "está fría" es un caso de:',
 o:['Relevo','Anclaje: el texto repite lo que la imagen ya muestra','Elipsis','Antítesis'],
 r:1,e:'La pregunta clave es si el texto repite (anclaje) o suma (relevo).'},
{m:'Barthes',q:'Los signos semiológicos (la imagen) se diferencian de los lingüísticos porque:',
 o:['Son lineales y arbitrarios','Son discontinuos y simultáneos, requieren saber cultural y no son totalmente arbitrarios',
    'No necesitan código','Solo funcionan con texto'],
 r:1,e:'Los lingüísticos son unidades lineales con arbitrariedad del signo (á-r-b-o-l).'},
{m:'Barthes',q:'"Una parte por el todo" es la figura retórica de la:',
 o:['Metáfora','Metonimia','Hipérbole','Elipsis'],
 r:1,e:'Metáfora = una cosa por otra. Metonimia = la parte por el todo. Hipérbole = exageración. Antítesis = choque de valores. Elipsis = sentido por ausencia.'},
{m:'Barthes',q:'"Sentido por ausencia" corresponde a la figura de:',
 o:['Antítesis','Hipérbole','Elipsis','Metonimia'],
 r:2,e:'La elipsis construye sentido con lo que no está.'},
{m:'Mito',q:'★ Según Barthes, el mito es:',
 o:['Un relato antiguo sobre dioses','Un lenguaje robado: un signo vaciado y rellenado con un significado ideológico que se naturaliza',
    'La denotación de una imagen','Un error de interpretación'],
 r:1,e:'Todo puede ser un mito y todo mito tiene ideología detrás. Detrás del mito hay poder.'},
{m:'Mito',q:'¿Qué oculta el mito?',
 o:['El significante','La historia social y política detrás de los signos','El canal de transmisión','El interpretante'],
 r:1,e:'Es una forma de violencia simbólica: impone las visiones de la clase dominante como naturales y universales.'},
{m:'Mito',q:'En la tapa de Paris Match, el segundo nivel (mito) significa:',
 o:['Un acto de respeto hacia la bandera','La grandeza del Estado y la idea de integración, ocultando la colonización',
    'Un retrato documental','La moda militar de la época'],
 r:1,e:'Primer nivel (denotación): un soldado saludando una bandera. Segundo nivel: un signo mitológico que connota patriotismo y legitima estructuras de poder.'},
{m:'Mito',q:'¿Qué pasó con el mito del hippie?',
 o:['Se convirtió en un movimiento político estable','El capitalismo lo redujo a una época, una moda y una estética',
    'Desapareció sin dejar rastro','Se volvió un mito religioso'],
 r:1,e:'Una generación rebelde y anticapitalista terminó convertida en producto de consumo.'},
{m:'Mito',q:'En el caso del Escarabajo Volkswagen, ¿cuál era el problema para venderlo después de la guerra?',
 o:['Que era demasiado caro','Que había que sacarle la connotación nazi que tenía',
    'Que no tenía repuestos','Que era demasiado grande'],
 r:1,e:'Frente a los autos enormes de Norteamérica, apareció como chiquito y "tierno", lo que ayudó a despojarlo de esa connotación.'},
{m:'Mito',q:'¿Qué analiza John Berger en «Modos de ver»?',
 o:['La evolución de la tipografía','Cómo se construye la imagen femenina en la pintura occidental y cómo esa mirada pasa a la fotografía',
    'El espacio urbano','Los formatos de archivo'],
 r:1,e:'Analiza la pose pasiva de la mujer, que espera que el hombre actúe, y los desnudos femeninos comprados por hombres ricos desde 1500.'},
{m:'Objeto',q:'★ ¿Cuáles son las dos coordenadas del objeto según Barthes?',
 o:['Denotativa y connotativa','Simbólica (profunda) y taxonómica o clasificatoria (extensa)',
    'Sintagmática y paradigmática','Sincrónica y diacrónica'],
 r:1,e:'Simbólica = profundidad metafórica, la construcción social. Taxonómica = la clasificación que impone la sociedad, su función literal.'},
{m:'Objeto',q:'¿De qué depende principalmente el significado de un objeto?',
 o:['De su precio','Del receptor: es en la lectura donde se completa el sentido',
    'De su material únicamente','Del fabricante'],
 r:1,e:'El objeto es polisémico: presenta una pluralidad de sentidos y el significado depende de quien lo lee e interpreta.'},
{m:'Objeto',q:'★ "La función hace nacer al signo, pero este signo es reconvertido en…"',
 o:['…una nueva función práctica','…el espectáculo de una función',
    '…un paradigma','…una denotación'],
 r:1,e:'Ej.: en Scream el cuchillo ya no corta, entretiene. El sentido desborda el uso del objeto.'},
{m:'Objeto',q:'Que asociemos vidrio + transparencia → pureza muestra que:',
 o:['El sentido es un proceso de equivalencias','El objeto no tiene función','La función es solo práctica','El objeto es arbitrario'],
 r:0,e:'La función del objeto sustenta un sentido: no es solo práctica, también es semántica.'},
{m:'Objeto',q:'¿Qué plantea Papanek sobre la industria?',
 o:['Que debe producir más rápido','Que nace para ser descartable y que los diseños están hechos para fallar; propone el consumo sustentable',
    'Que el diseño no tiene responsabilidad ambiental','Que hay que aumentar el consumo indulgente'],
 r:1,e:'También señala que la periferia funciona como "la basura del mundo": el lado B de las grandes industrias.'},
{m:'Objeto',q:'El consumo indulgente se define como:',
 o:['Comprar solo lo necesario','Consumir sin necesidad real y de manera excesiva, buscando gratificación instantánea',
    'Consumir productos sustentables','Comprar de forma planificada'],
 r:1,e:'Está impulsado por deseos emocionales o psicológicos: estrés, ansiedad, insatisfacción.'},
{m:'Posfotografía',q:'★ Según Dubois, el siglo XIX es el de la fotografía como:',
 o:['Índice','Ícono: documento, objetiva, visión maquínica, memoria','Sospecha','Simulación'],
 r:1,e:'XIX = ícono · XX = la sospecha (subjetiva y codificada) · XXI = índice (crisis de representación, extimidad, imagen algorítmica).'},
{m:'Posfotografía',q:'¿Qué caracteriza al siglo XX según Dubois?',
 o:['La objetividad absoluta de la imagen','La sospecha: la foto ya no es tan objetiva, hay alguien que decide escenario, ángulo y encuadre',
    'La desaparición del referente','La imagen algorítmica'],
 r:1,e:'Es subjetiva y codificada. En 1930, el collage de la Bauhaus muestra que con la foto se puede crear otro discurso.'},
{m:'Posfotografía',q:'¿Por qué la fotografía analógica "deja huella" y la digital no?',
 o:['Porque la analógica es más nítida','Porque en la analógica hubo una presencia y la luz se plasmó en la película; la digital trabaja con sensor, píxel y software',
    'Porque la digital pesa menos','Porque la analógica es en blanco y negro'],
 r:1,e:'Es la diferencia clave entre huella/referente y su ausencia.'},
{m:'Posfotografía',q:'¿Cuántas veces se registraba la gente con fotografías en el siglo XIX?',
 o:['Todos los días','Tres veces en la vida: al nacer, al casarse y al morir','Una vez al año','Nunca'],
 r:1,e:'Antes solo la burguesía accedía a retratos pintados; la fotografía lo volvió más accesible.'},
{m:'Posfotografía',q:'★ ¿Qué es la EXTIMIDAD?',
 o:['El derecho a la privacidad','La decisión propia de mostrar la vida privada, que rompe el refugio de la intimidad',
    'El anonimato en redes','La memoria familiar'],
 r:1,e:'Concepto de Paula Sibilia. Antes la vida con imágenes existía solo en el círculo privado; ahora se publica todo.'},
{m:'Posfotografía',q:'¿Cuál de estas NO es una idea de Susan Sontag?',
 o:['La fotografía es coleccionar el mundo','Fotografiar es apropiarse de lo fotografiado',
    'Encuadrar es recortar tiempo y espacio','La fotografía siempre muestra la realidad tal cual es, sin interpretarla'],
 r:3,e:'Sontag dice justamente lo contrario: la fotografía procura pruebas, pero TAMBIÉN interpreta el mundo. Y es signo de ausencia.'},
{m:'Posfotografía',q:'★ ¿Qué diferencia central plantea Fontcuberta entre fotografía y posfotografía?',
 o:['El tamaño del archivo','Que la posfotografía puede NO tener referente, y la circulación pasa a ser la función central',
    'Que la posfotografía es en color','Que la posfotografía no usa cámara'],
 r:1,e:'Además, el autor deja de producir imágenes y pasa a seleccionar, prescribir y gestionar. El encuadre se reemplaza por código, dataset y prompt.'},
{m:'Posfotografía',q:'¿Qué es la posverdad?',
 o:['Una verdad comprobada científicamente','La era después de la verdad, donde la verdad se construye mediante un relato a medida del sentido que se quiere construir',
    'Un tipo de encuadre fotográfico','Una figura retórica'],
 r:1,e:'Bauman aporta la idea de modernidad líquida. En el siglo XX se rompen los pilares (Dios, patria, familia).'},
{m:'Posfotografía',q:'¿Por qué el deepfake se considera peligroso para la democracia?',
 o:['Porque consume mucha energía','Porque es un relato intencionado que busca establecer una verdad que es mentira e interfiere en el voto y el pensamiento',
    'Porque es muy caro de producir','Porque solo funciona con video'],
 r:1,e:'Además, los mecanismos de defensa nunca llegan a estar en la vanguardia para frenarlo.'},
{m:'Posfotografía',q:'¿Qué es el biopoder según Foucault?',
 o:['El poder de las redes sociales','Que con la modernidad el Estado pasa a administrar la vida (protección, salud), donde antes estaba el rey con poder sobre la vida y la muerte',
    'El poder económico de las marcas','La capacidad de generar imágenes con IA'],
 r:1,e:'Hoy esas conductas se conducen con sistemas tecnológicos y el Estado se va corriendo.'},
{m:'Espacio',q:'★ ¿Cuáles son los tres momentos de la tríada espacial de Lefebvre?',
 o:['Identidad, relación e historia','Práctica espacial, representaciones del espacio y espacios de representación',
    'Homogeneidad, fragmentación y jerarquía','Lugar, no lugar y heterotopía'],
 r:1,e:'Práctica espacial = lo percibido. Representaciones del espacio = lo concebido (planos, renders, normativas). Espacios de representación = lo vivido (carga simbólica).'},
{m:'Espacio',q:'Los planos, renders, zonificaciones, señalética y normativas corresponden a:',
 o:['La práctica espacial','Las representaciones del espacio (lo concebido)','Los espacios de representación','Las heterotopías'],
 r:1,e:'Definen usos esperados y anticipan un tipo de usuario y un modo de comportamiento.'},
{m:'Espacio',q:'Las estrellas amarillas de los accidentes viales o un mural de memoria son:',
 o:['Representaciones del espacio','Espacios de representación: carga emocional, cultural y simbólica',
    'Práctica espacial','No lugares'],
 r:1,e:'Expresan memorias, deseos, conflictos e identidades: es cómo la comunidad se apropia del espacio.'},
{m:'Espacio',q:'Según Lefebvre, una plaza NO se define solo por su plano sino por:',
 o:['Su superficie en metros cuadrados','Quiénes la usan, a qué hora, con qué reglas, miedos o permisos',
    'El material de sus bancos','Su ubicación en el mapa'],
 r:1,e:'Eso es la práctica espacial: la experiencia concreta del espacio.'},
{m:'Espacio',q:'★ ¿Cuáles son los tres rasgos del espacio abstracto?',
 o:['Identidad, relación e historia','Homogeneidad, fragmentación y jerarquía',
    'Tránsito, anonimato y estandarización','Denotación, connotación y mito'],
 r:1,e:'Homogeneidad (estándares repetibles), fragmentación (separación de zonas) y jerarquía (desigualdad por ubicación, prestigio, vigilancia y valor inmobiliario).'},
{m:'Espacio',q:'¿Qué busca el shopping como espacio abstracto?',
 o:['Que construyas relaciones sociales','Que consumas: por eso el patio de comidas, las vidrieras y las cafeterías',
    'Que conozcas la historia del barrio','Que circules lo más rápido posible'],
 r:1,e:'Los únicos lugares cómodos exigen consumir. Debilita la experiencia vivida y la memoria local.'},
{m:'Espacio',q:'★ ¿Cuáles son los tres rasgos de un LUGAR según Augé?',
 o:['Homogeneidad, fragmentación y jerarquía','Identidad, relación social e historia',
    'Tránsito, anonimato y reglas','Forma, uso y usuario'],
 r:1,e:'Identidad (significa algo), relación social (favorece encuentros) e historia (conserva marcas y memorias). Ej.: el club de barrio.'},
{m:'Espacio',q:'¿Cuál de estos es un ejemplo típico de NO LUGAR?',
 o:['Un club de barrio','Una plaza de encuentro','Un aeropuerto','Un mural comunitario'],
 r:2,e:'No lugares: autopistas, aeropuertos, hoteles. Espacios de tránsito, anonimato y estandarización, organizados por reglas.'},
{m:'Espacio',q:'¿Puede un no lugar convertirse en lugar?',
 o:['No, nunca','Sí: un cajero automático es un no lugar, pero para gente en situación de calle puede volverse un lugar',
    'Solo si se lo remodela','Solo en zonas rurales'],
 r:1,e:'La frontera no es fija: depende de la apropiación y del uso.'},
{m:'Espacio',q:'★ ¿Qué son las heterotopías de Foucault?',
 o:['Espacios comerciales homogéneos','"Espacios otros" que no comparten el mismo tiempo ni espacio que la vida ordinaria',
    'Espacios de libre acceso y democráticos','Los planos y renders de un proyecto'],
 r:1,e:'En una cárcel el tiempo pasa distinto; en un hospital el cuerpo no puede tener una vida normal.'},
{m:'Espacio',q:'Un hospital es heterotópico:',
 o:['Para todos por igual','Para quienes trabajan ahí','Para las personas recluidas, no para quienes trabajan ahí','Para nadie'],
 r:2,e:'Es un matiz importante: la heterotopía lo es respecto de quien queda sujeto a esas reglas de tiempo y espacio.'},
{m:'Espacio',q:'¿Cuál de estos NO es un ejemplo de heterotopía visto en clase?',
 o:['Cementerios','Bibliotecas','Museos y cárceles','Un shopping'],
 r:3,e:'El shopping es el ejemplo de espacio abstracto. Las heterotopías vistas: cementerios, bibliotecas, museos, cárceles, telos, hospitales y el viaje de bodas.'},
{m:'Espacio',q:'¿Qué son los espacios diferenciales?',
 o:['Los espacios privados de acceso restringido','La respuesta al espacio abstracto: espacios de los que la comunidad se apropia, como las plazas',
    'Los no lugares','Los espacios concebidos por el proyectista'],
 r:1,e:'Plazas democráticas y de libre acceso donde las clases conviven sin necesidad de consumir; también las ferias artesanales.'},
{m:'Espacio',q:'La contradicción del caso Niemeyer en Brasilia es que:',
 o:['El teatro era demasiado chico','Pensó una doble entrada para democratizar la cultura, pero diseñó la ciudad para recorrerse en auto, lo que la vuelve elitista',
    'No incluyó espacios verdes','Copió el modelo de Le Corbusier'],
 r:1,e:'Promueve el acceso a la cultura pero, al pensar todo en función del auto, los lugares quedan lejos caminando.'},
{m:'Espacio',q:'La tensión del Unité d’Habitation de Le Corbusier es que:',
 o:['No tenía servicios','Integra servicios y vida colectiva, pero la vida cotidiana queda prevista desde un programa funcional',
    'Era solo para clase alta','No se llegó a construir'],
 r:1,e:'Potencial: nuevas formas de vida colectiva. Tensión: el programa funcional anticipa cómo se debe vivir.'}
];

/* ---------------- 4. VERDADERO / FALSO ---------------- */
const TF = [
{s:'La comunicación es necesariamente un proceso de un solo sentido.',v:false,e:'El receptor puede reaccionar y modificar la interacción.'},
{s:'Las imágenes se interpretan solas, sin necesidad de código ni contexto.',v:false,e:'Las imágenes NO "hablan solas": necesitan códigos y contexto. IMAGEN + TEXTO + CONTEXTO.'},
{s:'El concepto fundamental del modelo de Shannon y Weaver es el ruido.',v:true,e:'Correcto: cualquier interferencia que dificulte que el mensaje llegue bien.'},
{s:'El modelo de Palo Alto es lineal, con un emisor activo y un receptor pasivo.',v:false,e:'Al revés: es el modelo ORQUESTAL, una interacción social permanente donde todos construyen el sentido.'},
{s:'Jakobson plantea 6 elementos: emisor, receptor, mensaje, código, canal y contexto.',v:true,e:'Correcto, y cada elemento activa una función del lenguaje.'},
{s:'La dimensión pragmática se ocupa de cómo está construido el mensaje.',v:false,e:'Esa es la SINTÁCTICA. La pragmática se ocupa del efecto sobre la conducta y los vínculos.'},
{s:'La dimensión semántica se ocupa del significado del mensaje.',v:true,e:'Correcto: la interpretación mediante códigos y convenciones compartidas.'},
{s:'Es imposible no comunicar: incluso el silencio comunica.',v:true,e:'Axioma 1. En diseño, la ausencia de señalización también comunica.'},
{s:'Una relación docente–estudiante es simétrica.',v:false,e:'Es COMPLEMENTARIA: los participantes ocupan posiciones diferentes.'},
{s:'Una mesa redonda favorece la complementariedad.',v:false,e:'Favorece la SIMETRÍA. El escenario elevado refuerza la complementariedad.'},
{s:'Para Saussure el signo tiene tres elementos.',v:false,e:'Saussure es DIÁDICO (2: significante y significado). Peirce es triádico (3).'},
{s:'El interpretante es uno de los tres elementos del signo según Peirce.',v:true,e:'Correcto: representamen, objeto e interpretante.'},
{s:'La semiosis es el proceso continuo de interpretación en el que un signo lleva a otro signo.',v:true,e:'Correcto: es el concepto de Peirce.'},
{s:'El signo lingüístico une una palabra con un objeto real.',v:false,e:'Une SIGNIFICANTE ↔ SIGNIFICADO, no palabra ↔ objeto real.'},
{s:'El significante para Saussure es el sonido físico real de la palabra.',v:false,e:'Es la IMAGEN ACÚSTICA: la representación mental del sonido, no el sonido físico.'},
{s:'La lengua es un fenómeno social, homogéneo e involuntario.',v:true,e:'Correcto. El habla es individual, heterogénea, física y voluntaria.'},
{s:'El habla es el código en sí mismo y la lengua es su uso.',v:false,e:'Al revés: la LENGUA es el código en sí; el HABLA es el uso del código.'},
{s:'En diseño, la lengua equivale al manual de marca y el habla a cada pieza concreta.',v:true,e:'Correcto: el sistema vs. su realización particular.'},
{s:'La arbitrariedad significa que cada individuo puede inventar libremente los signos.',v:false,e:'NO: funciona porque la comunidad lo reconoce y lo repite. Hace falta una práctica social.'},
{s:'La linealidad implica que el significante se desarrolla en el tiempo, un elemento detrás de otro.',v:true,e:'Correcto: di-se-ño. La secuencia y el orden importan.'},
{s:'El signo es inmutable frente al individuo y mutable frente al tiempo y la sociedad.',v:true,e:'Correcto: no es contradictorio, son dos planos distintos.'},
{s:'La significación es la relación del signo con los demás signos del sistema.',v:false,e:'Esa es el VALOR. La significación es la relación interna: significante + significado.'},
{s:'El valor surge por oposición.',v:true,e:'Correcto: "la lengua es un sistema de valores". Reconocemos el azul porque no es rojo, verde ni amarillo.'},
{s:'El sintagma son las relaciones en ausencia.',v:false,e:'Al revés: sintagma = relaciones en PRESENCIA (lo que está). Paradigma = en ausencia (lo que podría estar).'},
{s:'El paradigma es virtual: no vemos las opciones descartadas, pero influyen en la interpretación.',v:true,e:'Correcto.'},
{s:'La sincronía analiza la evolución del sistema a través del tiempo.',v:false,e:'Esa es la DIACRONÍA. La sincronía es un corte en un momento determinado.'},
{s:'En la diacronía cambia la forma y también el contexto que permite interpretarla.',v:true,e:'Correcto: es una idea importante de la clase.'},
{s:'Toda imagen es polisémica.',v:true,e:'Correcto: tiene muchos sentidos posibles, y el texto y el contexto intentan fijarlos.'},
{s:'El mensaje icónico no codificado corresponde a la connotación.',v:false,e:'Corresponde a la DENOTACIÓN: lo literal, descriptivo, perceptivo. El codificado es la connotación.'},
{s:'La denotación es sintagmática porque sus elementos están presentes en la imagen.',v:true,e:'Correcto. La connotación convoca elementos ausentes.'},
{s:'El anclaje es la función del texto que suma información que no está en la imagen.',v:false,e:'Eso es el RELEVO. El anclaje repite y fija el sentido, reduciendo la ambigüedad.'},
{s:'El relevo es clave para leer memes, historietas y piezas audiovisuales.',v:true,e:'Correcto: texto e imagen se complementan para producir un sentido nuevo.'},
{s:'La metonimia es la exageración de un rasgo.',v:false,e:'Esa es la HIPÉRBOLE. La metonimia es la parte por el todo.'},
{s:'La elipsis construye sentido por ausencia.',v:true,e:'Correcto.'},
{s:'Para Barthes el mito es un lenguaje robado.',v:true,e:'Correcto: toma un signo ya formado, lo vacía y lo rellena con un significado ideológico.'},
{s:'El mito muestra abiertamente la ideología que hay detrás.',v:false,e:'Al revés: el mito se NATURALIZA y oculta la historia social y política detrás de los signos.'},
{s:'En la tapa de Paris Match, el primer nivel es un soldado saludando una bandera.',v:true,e:'Correcto: esa es la denotación. El segundo nivel connota la grandeza del Estado y la integración.'},
{s:'John Berger analiza en «Modos de ver» la construcción de la imagen femenina en la pintura occidental.',v:true,e:'Correcto, y cómo esa mirada pasa a la fotografía.'},
{s:'Para Barthes, la coordenada simbólica del objeto es su función literal.',v:false,e:'Esa es la TAXONÓMICA. La simbólica es la profundidad metafórica, la construcción social.'},
{s:'El significado de un objeto depende del receptor.',v:true,e:'Correcto: es en la lectura donde se completa el sentido. El objeto es polisémico.'},
{s:'Según Barthes, el sentido desborda el uso del objeto.',v:true,e:'Correcto: "la función hace nacer al signo, pero este signo es reconvertido en el espectáculo de una función".'},
{s:'Papanek defiende el diseño de productos descartables.',v:false,e:'Al revés: critica que la industria nazca para ser descartable y apoya el consumo sustentable.'},
{s:'Según Dubois, el siglo XIX es el de la sospecha sobre la fotografía.',v:false,e:'El XIX es el del ÍCONO (documento, objetiva). El XX es el de la sospecha.'},
{s:'La fotografía analógica deja una huella; la digital no.',v:true,e:'Correcto: en la analógica hubo una presencia y la luz se plasmó. La digital es sensor, píxel y software.'},
{s:'El "momento decisivo" es un concepto de Cartier-Bresson.',v:true,e:'Correcto: capturar el momento sin intervenir ni planificar.'},
{s:'La extimidad es el derecho a proteger la vida privada.',v:false,e:'Es lo contrario: la decisión propia de MOSTRAR la vida privada. Rompe el refugio de la intimidad.'},
{s:'Para Sontag, fotografiar es apropiarse de lo fotografiado.',v:true,e:'Correcto. Y encuadrar es recortar tiempo y espacio.'},
{s:'Para Sontag, la fotografía solo procura pruebas y nunca interpreta el mundo.',v:false,e:'Procura pruebas PERO TAMBIÉN interpreta el mundo. Y es signo de ausencia.'},
{s:'En la posfotografía, la imagen puede no tener referente.',v:true,e:'Correcto: a diferencia de la analógica y la digital, que necesitaban que el sujeto existiera.'},
{s:'En la posfotografía el autor produce imágenes; en la fotografía las gestiona.',v:false,e:'Al revés: en la fotografía el autor PRODUCE; en la posfotografía SELECCIONA, prescribe y gestiona.'},
{s:'La modernidad líquida es un concepto de Bauman.',v:true,e:'Correcto, ligado a la posverdad y la caída de los relatos.'},
{s:'El biopoder de Foucault describe cómo el Estado moderno administra la vida.',v:true,e:'Correcto: antes el rey tenía poder sobre la vida y la muerte.'},
{s:'Para Lefebvre, las representaciones del espacio son la carga emocional y simbólica del lugar.',v:false,e:'Eso son los ESPACIOS DE REPRESENTACIÓN (lo vivido). Las representaciones del espacio son planos, renders y normativas (lo concebido).'},
{s:'El espacio abstracto se caracteriza por la homogeneidad, la fragmentación y la jerarquía.',v:true,e:'Correcto: es el espacio del capitalismo.'},
{s:'Un aeropuerto es un ejemplo de lugar según Augé.',v:false,e:'Es un NO LUGAR: tránsito, anonimato y estandarización.'},
{s:'Un lugar según Augé tiene identidad, relación social e historia.',v:true,e:'Correcto. Ej.: el club de barrio.'},
{s:'Un cajero automático puede funcionar como lugar para gente en situación de calle.',v:true,e:'Correcto: la frontera entre lugar y no lugar no es fija, depende de la apropiación.'},
{s:'Un hospital es heterotópico tanto para quienes trabajan ahí como para las personas recluidas.',v:false,e:'Solo para las personas RECLUIDAS, no para quienes trabajan ahí.'},
{s:'El shopping es un ejemplo de heterotopía.',v:false,e:'Es un ejemplo de ESPACIO ABSTRACTO. Las heterotopías son cementerios, bibliotecas, museos, cárceles, telos y hospitales.'},
{s:'Las plazas de libre acceso son ejemplos de espacios diferenciales.',v:true,e:'Correcto: espacios de los que la comunidad se apropia, en respuesta al espacio abstracto.'}
];

/* ---------------- 5. SIMULACRO ---------------- */
const SIM_DEV = [
{q:'1. Explicá las tres dimensiones (sintáctica, semántica y pragmática) y aplicalas a una pieza de diseño concreta.',
 m:['<b>Sintáctica — construcción:</b> cómo se organiza y transmite el mensaje; las relaciones entre signos, códigos y canal.',
    '<b>Semántica — significado:</b> qué significa el mensaje, su interpretación mediante códigos y convenciones compartidas.',
    '<b>Pragmática — efecto:</b> qué produce el mensaje en el otro; los efectos sobre la conducta, los vínculos y la situación.',
    '<b>Ejemplo (señal de SALIDA):</b> sintáctica = tipografía, contraste, flecha y ubicación la hacen visible y legible · semántica = la palabra y la flecha significan que hay una vía de salida en esa dirección · pragmática = la señal orienta el recorrido y modifica la conducta de quienes habitan el espacio.']},
{q:'2. Compará el modelo de Shannon y Weaver con el modelo orquestal de Palo Alto. ¿Cuál es el límite del primero?',
 m:['<b>Shannon y Weaver</b> es un modelo <b>lineal y técnico</b>: Fuente → Transmisor → Canal → Receptor → Destino. Su preocupación es que el mensaje llegue y pueda ser descifrado, y su concepto fundamental es el <b>ruido</b>.',
    '<b>Su límite:</b> explica bien el <b>transporte</b> de la información, pero deja afuera silencios, gestos, tono de voz, contexto y las relaciones entre las personas. No alcanza para explicar la comunicación humana.',
    '<b>Palo Alto</b> propone el modelo <b>orquestal</b>: la comunicación es una interacción social permanente; no hay emisor único ni receptor pasivo, <b>todos los participantes influyen</b> en la construcción del sentido.',
    '<b>Del telégrafo a la orquesta:</b> de una secuencia lineal con origen y destino, a una coordinación continua donde el sentido <b>se ajusta en tiempo real</b> según el contexto y la relación.']},
{q:'3. Desarrollá los 5 axiomas de la comunicación y dá un ejemplo de diseño para cada uno.',
 m:['<b>1. Es imposible no comunicar:</b> todo comportamiento puede adquirir valor de mensaje; el silencio comunica. <i>Diseño:</i> la ausencia de señalización produce desorientación o exclusión.',
    '<b>2. Todo mensaje define una relación:</b> la forma en que se dice algo establece o refleja un vínculo. <i>Diseño:</i> un local dice "bienvenidos" pero comunica distancia con barreras o vigilancia.',
    '<b>3. Cada parte ordena la secuencia:</b> cada uno decide qué es causa y qué respuesta. <i>Diseño:</i> se agregan carteles porque la gente se pierde / la gente se pierde porque hay demasiados carteles.',
    '<b>4. Lenguaje digital y analógico:</b> palabras y signos codificados vs. gestos, imágenes, tonos y posturas. <i>Diseño:</i> "acceso para todos" se contradice si la entrada solo tiene escaleras.',
    '<b>5. Simetría y complementariedad:</b> plano de igualdad (con riesgo de escalada) vs. posiciones diferentes (con riesgo de rigidez). <i>Diseño:</i> la mesa redonda favorece la simetría; el escenario elevado, la complementariedad.']},
{q:'4. Compará el modelo de signo de Saussure con el de Peirce.',
 m:['<b>Saussure — diádico (2 elementos):</b> el signo une <b>significante</b> (imagen acústica: la representación mental del sonido) y <b>significado</b> (el concepto mental). NO une palabra con objeto real.',
    '<b>Peirce — triádico (3 elementos):</b> <b>representamen</b> (lo que percibimos como signo), <b>objeto</b> (aquello a lo que remite) e <b>interpretante</b> (la interpretación que se genera).',
    '<b>Peirce incorpora la SEMIOSIS:</b> el proceso continuo de interpretación por el cual un signo lleva a otro signo y genera nuevas significaciones.',
    '<b>Foco:</b> Saussure se interesa por cómo funcionan los signos <b>dentro de un sistema</b>; Peirce plantea una concepción más amplia y abierta del signo.']},
{q:'5. Explicá la diferencia entre lengua y habla, y aplicala al diseño gráfico.',
 m:['<b>Lengua:</b> el sistema social y compartido de signos y reglas. Es <b>social, homogénea, psíquica, involuntaria</b> y es el <b>código en sí mismo</b>. Existe independientemente de la voluntad individual.',
    '<b>Habla:</b> el uso individual, concreto y situado de la lengua. Es <b>individual, heterogénea, física y fisiológica, voluntaria</b> y es el <b>uso del código</b>.',
    '<b>Ejemplo:</b> lengua = el idioma español y sus reglas · habla = cómo una persona lo usa en un audio de WhatsApp.',
    '<b>En diseño:</b> lengua = el <b>sistema de identidad visual</b> de una marca (el manual de marca como representación del sistema) · habla = cada <b>pieza concreta</b>: un posteo, un afiche, un folleto.']},
{q:'6. Explicá la diferencia entre significación y valor, y por qué "en un sistema visual, elegir es diferenciar".',
 m:['<b>Significación:</b> la relación <b>interna</b> del signo, la unión de sus dos caras: significante + significado.',
    '<b>Valor:</b> la relación <b>diferencial</b> del signo con los demás signos del sistema. Un signo adquiere valor por el lugar que ocupa y por aquello que lo diferencia. <b>El valor surge por oposición</b>, por eso "la lengua es un sistema de valores".',
    '<b>Ejemplo:</b> reconocemos el azul porque no es rojo, verde ni amarillo; "casa" vale en relación con casita, departamento, mansión, vivienda.',
    '<b>En diseño:</b> un elemento visual no tiene significado fijo por sí mismo. El logo de Nike vale porque se diferencia de Adidas o Puma; un color vale por su relación con los otros colores de la composición. Por eso <b>elegir es diferenciar</b>.']},
{q:'7. Explicá sintagma y paradigma y cómo operan en el proceso de diseñar.',
 m:['<b>Sintagma — lo que está:</b> relaciones <b>en presencia</b>. Los elementos están juntos y forman una cadena o composición. Ej.: logotipo + color + tipografía + imagen + soporte. Modificar el orden, el tamaño o la función de un elemento puede cambiar el sentido.',
    '<b>Paradigma — lo que podría estar:</b> relaciones <b>en ausencia</b>. Las distintas opciones que podrían ocupar ese lugar. Ej.: serif / sans serif / display / script.',
    '<b>Diseñar es elegir + combinar:</b> se <b>elige</b> una opción entre varias (paradigma) y se <b>combinan</b> las elecciones en una composición concreta (sintagma).',
    'El paradigma es <b>virtual</b>: no vemos las opciones descartadas, pero <b>esas ausencias también influyen</b> en la interpretación. Lo mismo pasa con el vestuario, el encuadre, el montaje o la música.']},
{q:'8. Explicá sincronía y diacronía con un ejemplo de análisis de diseño.',
 m:['<b>Sincronía:</b> analiza el sistema <b>en un momento determinado</b>. Es hacer un "corte" en el tiempo. Pregunta: <i>¿cómo funciona este sistema ahora?</i> Ej.: comparar las identidades visuales de empresas tecnológicas contemporáneas — colores, tipografías, formas, tendencias, relaciones entre marcas.',
    '<b>Diacronía:</b> analiza la <b>evolución a través del tiempo</b>. Pregunta: <i>¿cómo cambió y se transformó?</i> Ej.: la evolución histórica del logo de Pepsi o Shell; los cambios de forma, tecnología, materiales, usos y valores culturales.',
    '<b>Idea clave:</b> en la diacronía <b>no solo cambia la forma</b>, también cambia el <b>contexto</b> que permite interpretar esa forma.',
    'Se puede aplicar a cómo se representa un tema (mujer, infancia, familia, vejez, trabajo, belleza) en una misma época (sincronía) o entre períodos distintos (diacronía).']},
{q:'9. [CLAVE] Explicá los tres mensajes de la imagen según Barthes y analizá el aviso Panzani.',
 m:['<b>Mensaje icónico NO codificado — la denotación:</b> la imagen literal, lo reconocible, descriptivo, perceptivo. Es <b>sintagmática</b>: sus elementos están presentes.',
    '<b>Mensaje icónico codificado — la connotación:</b> las asociaciones culturales, históricas e ideológicas. <b>Convoca elementos ausentes</b> y culturalmente reconocibles.',
    '<b>Mensaje lingüístico:</b> todas las palabras que aparecen en el aviso. Es lo que siempre acompaña.',
    '<b>Panzani, nivel 1 (denotación):</b> significante = red de mercado y provisiones (pasta, salsa, queso, tomates, champignones, ajíes) → significado = frescura, selección de ingredientes, elaboración casera.',
    '<b>Nivel 2 — italianidad:</b> significante = paleta tricolor, nombre de marca, tomates, etiquetas → significado = Italia como <b>estereotipo cultural</b>: cocina, tradición, origen, "auténtico".',
    '<b>Nivel 3 — industria + vida moderna:</b> ingredientes frescos junto a productos industrializados → la industria alimentaria facilita la vida moderna sin perder la promesa de frescura.',
    '<b>Nivel 4 — naturaleza muerta:</b> composición dispuesta como escena pictórica → abundancia, valor cultural, "producto como obra". La publicidad <b>toma prestigio de la tradición pictórica</b>.']},
{q:'10. [CLAVE] Explicá las funciones de ANCLAJE y RELEVO con ejemplos.',
 m:['<b>Anclaje:</b> el texto <b>repite y fija</b> el sentido. Tiene función <b>denominativa</b>: guía la identificación e interpretación, <b>reduce la ambigüedad</b> e impide que las connotaciones se vuelvan demasiado abiertas. <i>En diseño:</i> el nombre del producto, el slogan o la información técnica ayudan a resolver qué estamos viendo y cómo leerlo. <i>Ej.:</i> una bebida helada con el texto "está fría".',
    '<b>Relevo:</b> el texto <b>suma información que no está</b> en la imagen. Texto e imagen se complementan para producir un <b>sentido nuevo</b>; la imagen no solo "ilustra", <b>participa</b> del sentido. Es clave para leer memes, historietas, campañas y piezas audiovisuales. <i>Ej.:</i> unas papas fritas donde el logo permite reconocer de qué marca se trata; sin ese dato no se sabría.',
    '<b>El criterio para distinguirlos:</b> preguntarse si el texto <b>repite</b> lo que la imagen ya dice (anclaje) o le <b>suma</b> algo que la imagen sola no dice (relevo).',
    'Todo esto parte de que <b>toda imagen es polisémica</b>: el texto y el contexto intentan fijar los sentidos posibles.']},
{q:'11. [CLAVE] ¿Qué es el mito según Barthes? Explicá sus dos niveles con el ejemplo de Paris Match.',
 m:['El mito es un <b>LENGUAJE ROBADO</b>: toma un signo ya formado (significante + significado) y lo <b>vacía</b> para rellenarlo con otro significado <b>ideológico</b>.',
    '<b>Todo puede ser un mito</b> y todo mito tiene ideología detrás. El mito <b>se naturaliza</b>: no vemos el detrás de su construcción.',
    'Según Barthes, el mito <b>oculta la historia social y política</b> detrás de los signos. Es una forma de <b>violencia simbólica</b>: impone las visiones de la <b>clase dominante</b> como si fueran naturales y universales. <b>Detrás del mito hay poder</b>: la pregunta es quién construye el relato.',
    '<b>Primer nivel (denotación):</b> significante = la imagen de un soldado saludando una bandera · significado = un acto de respeto · signo = imagen literal en contexto patriótico.',
    '<b>Segundo nivel (connotación / mito):</b> significante = la misma imagen, ahora como <b>símbolo vacío</b> · significado = concepto ideológico: la grandeza del Estado, la idea de integración · <b>signo mitológico</b>: ya no denota una acción, connota patriotismo y legitimación de estructuras de poder.',
    '<b>Lo que oculta:</b> se muestra un país que integra a sus colonias, pero nadie habla de la <b>colonización</b> que hubo en esas zonas.']},
{q:'12. Explicá la semántica del objeto según Barthes: coordenadas, polisemia y la relación entre función y sentido.',
 m:['Para Barthes el objeto es un <b>signo</b>: una cosa humana destinada a existir. Todos los objetos <b>cumplen la función de comunicar</b>. Usa el cuerpo teórico de Saussure.',
    '<b>Coordenada simbólica (profunda):</b> todo objeto tiene <b>profundidad metafórica</b>, remite a su significado. Es la construcción social que le damos.',
    '<b>Coordenada taxonómica o clasificatoria (extensa):</b> todo objeto participa de una <b>clasificación</b> que impone la sociedad. Es la función que cumple en su forma literal.',
    '<b>Polisemia:</b> el objeto presenta una <b>pluralidad de sentidos</b>, y el significado <b>depende del receptor</b>: es en la lectura donde se completa el sentido.',
    '<b>Función y sentido:</b> la función <b>no es solo práctica, también es semántica</b>. El sentido es un proceso de equivalencias (vidrio + transparencia → pureza; negro → elegancia en Occidente). <b>"La función hace nacer al signo, pero este signo es reconvertido en el espectáculo de una función"</b>: en <i>Scream</i> el cuchillo ya no corta, entretiene. <b>El sentido desborda el uso.</b>',
    'Los objetos transmiten <b>sistemas estructurados de signos</b>: diferencias, oposiciones y contrastes. Y <b>naturalizamos las connotaciones</b>, olvidando que son construcciones sociales, culturales e históricas.']},
{q:'13. Desarrollá los tres siglos de la fotografía según Dubois y explicá qué cambia con la posfotografía.',
 m:['<b>Siglo XIX — ÍCONO:</b> documento (se registran sucesos como pruebas), objetiva (muestra la realidad tal cual es), visión maquínica y memoria (reemplaza a la pintura en el registro). La gente se retrataba tres veces en la vida: al nacer, al casarse y al morir.',
    '<b>Siglo XX — LA SOSPECHA:</b> la foto ya no es tan objetiva: hay alguien que toma decisiones (armar el escenario, el ángulo, el encuadre). Es <b>subjetiva y codificada</b>. En 1930 el collage de la Bauhaus muestra que se puede crear otro discurso y se empieza a sospechar.',
    '<b>Siglo XXI — ÍNDICE:</b> crisis de representación, extimidad, imagen algorítmica y una memoria puesta en duda. Se rompen los pactos: sospechamos de IA, Photoshop y filtros.',
    '<b>Fotografía → posfotografía (Fontcuberta):</b> huella/referente → <b>puede no tener referente</b> · prueba/memoria → flujo, remix, simulación · objeto/archivo → red/plataforma · el autor produce → el autor <b>selecciona, prescribe y gestiona</b> · encuadre y selección → <b>código, dataset y prompt</b> · circulación secundaria → <b>circulación como función central</b>.',
    'La fotografía cambia técnicamente, pero <b>también cambia el modo cultural en que la interpretamos</b>.']},
{q:'14. Explicá el paso de la intimidad a la extimidad y las ideas de Susan Sontag sobre la fotografía.',
 m:['<b>Intimidad (Paula Sibilia):</b> en la época analógica la fotografía servía para reconstruir la <b>memoria familiar</b>; la vida con imágenes existía solo en el <b>círculo privado</b> — había que ir a la casa de alguien a ver su álbum.',
    '<b>Extimidad:</b> la <b>decisión propia de mostrar la vida privada</b>. Los blogs funcionan como diarios íntimos y ahora se publica todo. <b>El refugio de la intimidad se rompe</b>: si te hacen bullying en el colegio, volver a casa ya no te salva. La mirada del otro pesa mucho; vivimos por la opinión pública.',
    '<b>Debord — sociedad del espectáculo:</b> en 1930 la televisión irrumpe en la escena doméstica, las publicidades se espectacularizan y aparecen los reality shows: la vida misma se espectaculariza.',
    '<b>Susan Sontag:</b> la fotografía es <b>coleccionar el mundo</b> · <b>fotografiar es apropiarse</b> de lo fotografiado · <b>encuadrar es recortar tiempo y espacio</b> (ej.: fotografiar una zona vacía para desacreditar una marcha) · la fotografía <b>procura pruebas pero también interpreta</b> el mundo · una fotografía es <b>signo de ausencia</b>.']},
{q:'15. Explicá la tríada espacial de Lefebvre y qué es el espacio abstracto.',
 m:['<b>Práctica espacial (lo percibido):</b> la experiencia concreta del espacio: cómo se usa, cómo se recorre, cómo se comparte y qué prácticas habilita o desalienta. Una plaza no se define solo por su plano, sino por quiénes la usan, a qué hora y con qué reglas, miedos o permisos.',
    '<b>Representaciones del espacio (lo concebido):</b> cómo una institución, un proyectista o una disciplina organiza el espacio <b>antes de que sea vivido</b>: mapas, planos, zonificaciones, renders, señalética, normativas, Google Maps. Definen usos esperados y <b>anticipan un tipo de usuario</b> y un modo de comportamiento.',
    '<b>Espacios de representación (lo vivido):</b> espacios cargados de significado <b>emocional, cultural y simbólico</b>; expresan memorias, deseos, conflictos e identidades. Es cómo la comunidad <b>se apropia</b> del espacio: Cromañón, las estrellas amarillas de los accidentes viales, un mural que vuelve una pared memoria pública.',
    '<b>Espacio abstracto:</b> el espacio del <b>capitalismo</b>, producido para generar <b>conductas compulsivas de compra</b>. El shopping no busca relaciones sociales sino consumo. Sus rasgos: <b>homogeneidad</b> (estándares repetibles), <b>fragmentación</b> (separación de zonas, barrios privados) y <b>jerarquía</b> (desigualdad por ubicación, prestigio, vigilancia y valor inmobiliario).',
    '<b>Consecuencias:</b> mercantiliza el espacio, controla el movimiento, estandariza vivienda y consumo, y puede desplazar poblaciones de bajos recursos.',
    '<b>La respuesta:</b> los <b>espacios diferenciales</b>, de los que la comunidad se apropia: las plazas como puntos de encuentro democráticos y de libre acceso. <b>El espacio es un territorio en disputa.</b>']},
{q:'16. Diferenciá lugar y no lugar (Augé) de las heterotopías (Foucault).',
 m:['<b>LUGAR (Augé):</b> tiene <b>identidad</b> (significa algo para quienes lo habitan), <b>relación social</b> (favorece encuentros, pertenencia, comunidad) e <b>historia</b> (conserva marcas, relatos y memorias colectivas). Ej.: el club de barrio, donde conviven distintas clases sociales.',
    '<b>NO LUGAR (Augé):</b> espacios de <b>tránsito</b> donde no hay intención de que generes un vínculo ni te arraigues: autopistas, aeropuertos, hoteles. <b>No están diseñados para que conozcas a alguien</b>; la experiencia se organiza por reglas. Predominan el <b>anonimato y la estandarización</b>.',
    '<b>La frontera no es fija:</b> un cajero automático es un no lugar, pero para gente en situación de calle puede convertirse en un lugar.',
    '<b>HETEROTOPÍAS (Foucault):</b> los <b>"espacios otros"</b>, que <b>no comparten el mismo tiempo ni espacio</b> que la vida ordinaria. En una cárcel el tiempo pasa distinto; en un hospital el cuerpo no puede tener una vida normal. <b>Ojo:</b> el hospital no es heterotópico para quienes trabajan ahí, sino <b>para las personas recluidas</b>.',
    '<b>Ejemplos:</b> cementerios (lugares "impuros", alejados de la vida), bibliotecas (conocimiento y control de la información), museos y cárceles (memoria, disciplina), telos y hospitales, y el viaje de bodas como heterotopía temporal.',
    '<b>Síntesis:</b> no lugares = tránsito, anonimato y estandarización · espacios abstractos = separación funcional, homogeneización y control · heterotopías = espacios otros donde se condensan reglas, excepciones, memorias o desvíos.']}
];

const SIM_FILL = [
{id:'f1',pre:'El signo para Saussure tiene ___ elementos (número):',ans:['2','dos']},
{id:'f2',pre:'El signo para Peirce tiene ___ elementos (número):',ans:['3','tres']},
{id:'f3',pre:'Relaciones EN PRESENCIA, lo que está:',ans:['sintagma','sintagmatica','sintagmático']},
{id:'f4',pre:'Relaciones EN AUSENCIA, lo que podría estar:',ans:['paradigma','paradigmatica','paradigmático']},
{id:'f5',pre:'Análisis del sistema en un momento determinado (un corte en el tiempo):',ans:['sincronia','sincronía','sincronico','sincrónico']},
{id:'f6',pre:'Análisis de la evolución del sistema a través del tiempo:',ans:['diacronia','diacronía','diacronico','diacrónico']},
{id:'f7',pre:'El mensaje icónico NO codificado es la:',ans:['denotacion','denotación','literal']},
{id:'f8',pre:'El mensaje icónico codificado es la:',ans:['connotacion','connotación','cultural']},
{id:'f9',pre:'Función del texto que REPITE y fija el sentido:',ans:['anclaje','ancla']},
{id:'f10',pre:'Función del texto que SUMA un sentido nuevo:',ans:['relevo']},
{id:'f11',pre:'Barthes define al mito como un lenguaje…',ans:['robado']},
{id:'f12',pre:'Espacio de tránsito y anonimato según Augé:',ans:['no lugar','no-lugar','nolugar','no lugares']},
{id:'f13',pre:'"Espacios otros" según Foucault:',ans:['heterotopia','heterotopía','heterotopias','heterotopías']},
{id:'f14',pre:'La decisión propia de mostrar la vida privada:',ans:['extimidad']}
];

/* ---------------- 6. PLAN DE ESTUDIO ---------------- */
const PLAN = [
 {d:'Bloque 1 — Comunicación', t:['Unidades 1 a 5 del Resumen','Flashcards: Comunicación, Modelos, Dimensiones y Axiomas','Juego "¿Qué axioma es?"']},
 {d:'Bloque 2 — Saussure', t:['Unidades 6 a 10','Clasificador: lengua/habla y sintagma/paradigma','Quiz del módulo Saussure']},
 {d:'Bloque 3 — Barthes', t:['Unidades 11, 12 y 13','Clasificador: denotación/connotación y anclaje/relevo','Flashcards Barthes, Mito y Objeto']},
 {d:'Bloque 4 — Cierre', t:['Unidades 14 y 15','Juego "¿Quién lo dijo?" y Contrarreloj V/F','Simulacro completo con respuestas modelo']}
];

/* ---------------- 7. GLOSARIO ---------------- */
const GLOSARIO = [
['Comunicación','Proceso social de construcción de sentido que requiere un código compartido y no se limita a las palabras.'],
['Comunicación mediada','La que usa medios y tecnologías para que un mismo mensaje llegue a muchas personas.'],
['Código','Sistema compartido que permite construir y comprender un mensaje.'],
['Burbuja informativa','Efecto de las redes por el cual solo circula información afín a lo que ya pensás.'],
['Ruido','Concepto de Shannon y Weaver: cualquier interferencia que dificulte que el mensaje llegue correctamente.'],
['Modelo matemático','El de Shannon y Weaver: lineal y técnico. Fuente → Transmisor → Canal → Receptor → Destino.'],
['Modelo orquestal','El de la Escuela de Palo Alto: la comunicación como interacción social permanente donde todos participan.'],
['Sintáctica','Dimensión de la construcción: cómo se organiza y transmite el mensaje.'],
['Semántica','Dimensión del significado: qué significa el mensaje según códigos y convenciones compartidas.'],
['Pragmática','Dimensión del efecto: qué produce el mensaje en la conducta, los vínculos y la situación.'],
['Axioma 1','Es imposible no comunicar: todo comportamiento puede adquirir valor de mensaje, incluso el silencio.'],
['Axioma 2','Todo mensaje define una relación entre los participantes.'],
['Axioma 3','Cada parte ordena la secuencia: cada uno decide qué es causa y qué es respuesta.'],
['Axioma 4','Lenguaje digital (palabras y signos codificados) y analógico (gestos, imágenes, tonos, posturas).'],
['Axioma 5','Relaciones simétricas (igualdad, con riesgo de escalada) y complementarias (posiciones diferentes, con riesgo de rigidez).'],
['Relación simétrica','Los participantes se posicionan en un plano de igualdad. Puede aparecer una escalada.'],
['Relación complementaria','Los participantes ocupan posiciones diferentes (docente–estudiante, médico–paciente).'],
['Semiótica','El estudio de los signos, que permiten representar, comunicar e interpretar.'],
['Semiología','Nombre que le da Saussure: la ciencia que estudia la vida de los signos en el seno de la vida social.'],
['Signo','Unidad que representa algo distinto de sí misma.'],
['Significante','La forma material del signo. Para Saussure, la imagen acústica: la representación mental del sonido.'],
['Significado','El concepto mental asociado al significante.'],
['Representamen','En Peirce, lo que percibimos como signo.'],
['Objeto (Peirce)','Aquello a lo que el signo hace referencia.'],
['Interpretante','En Peirce, la interpretación que se genera del signo.'],
['Semiosis','Proceso continuo de interpretación por el cual un signo lleva a otro signo y genera nuevas significaciones.'],
['La cocina del sentido','Texto de Barthes: no quedarse con la función del objeto, sino analizar qué otros significados transmite.'],
['Lenguaje','La facultad humana general para comunicarse mediante signos.'],
['Lengua','El sistema social y compartido de signos y reglas. Social, homogénea, psíquica, involuntaria: el código en sí.'],
['Habla','El uso individual, concreto y situado de la lengua. Individual, heterogénea, física, voluntaria: el uso del código.'],
['Circuito del habla','Psíquico → fisiológico → físico → fisiológico → psíquico.'],
['Imagen acústica','La representación mental del sonido de una palabra; no el sonido físico real.'],
['Arbitrariedad','La relación entre significante y significado es convencional: funciona porque la comunidad la reconoce y repite.'],
['Linealidad','El significante se desarrolla en el tiempo: los elementos aparecen uno detrás de otro.'],
['Inmutabilidad','Un individuo no puede cambiar la lengua por sí solo: es un sistema heredado y compartido.'],
['Mutabilidad','La lengua sí se transforma con el tiempo por cambios sociales, culturales y tecnológicos.'],
['Significación','La relación interna del signo: significante + significado.'],
['Valor','La relación diferencial del signo con los demás signos del sistema. Surge por oposición.'],
['Sintagma','Relaciones en presencia: los elementos que están juntos y forman una cadena o composición.'],
['Paradigma','Relaciones en ausencia: las opciones que podrían ocupar ese lugar. Es virtual, pero influye.'],
['Sincronía','Análisis del sistema en un momento determinado: un corte en el tiempo.'],
['Diacronía','Análisis de la evolución del sistema a través del tiempo.'],
['Polisemia','La propiedad de tener múltiples sentidos posibles. Toda imagen es polisémica.'],
['Denotación','El mensaje icónico no codificado: lo literal, descriptivo, perceptivo. Es sintagmática.'],
['Connotación','El mensaje icónico codificado: lo cultural, histórico e ideológico. Convoca elementos ausentes.'],
['Mensaje lingüístico','Todas las palabras que aparecen en la pieza. Es lo que siempre acompaña.'],
['Anclaje','Función del texto que repite y fija el sentido: denominativa, guía la interpretación y reduce la ambigüedad.'],
['Relevo','Función del texto que suma información no presente en la imagen para producir un sentido nuevo.'],
['Retórica de la imagen','El estudio de cómo la connotación se organiza por figuras y asociaciones culturales, para persuadir.'],
['Metáfora','Figura retórica: una cosa por otra (comparación).'],
['Metonimia','Figura retórica: la parte por el todo.'],
['Hipérbole','Figura retórica: exageración de un rasgo.'],
['Antítesis','Figura retórica: choque de valores.'],
['Elipsis','Figura retórica: sentido por ausencia.'],
['Mito','Lenguaje robado: un signo vaciado y rellenado con un significado ideológico que se naturaliza.'],
['Violencia simbólica','Imponer las visiones de la clase dominante como si fueran naturales y universales.'],
['Mitologías','Libro de Barthes donde analiza cómo se construyen los mitos en la cultura francesa de los 50 y 60.'],
['Modos de ver','Obra de John Berger sobre la construcción de la imagen femenina y la mirada en la pintura occidental.'],
['Coordenada simbólica','Del objeto: su profundidad metafórica, la construcción social que le damos.'],
['Coordenada taxonómica','Del objeto: la clasificación que impone la sociedad, su función literal.'],
['Objetivar el objeto','Tomar distancia para analizarlo: aislar significante y significado y leer su contexto (sintagmas).'],
['Fetichismo de los objetos','Concepto de Papanek sobre la industria descartable y los diseños hechos para fallar.'],
['Consumo indulgente','Consumir sin necesidad real, de manera excesiva, buscando gratificación instantánea.'],
['Posfotografía','Régimen en el que la imagen puede no tener referente y la circulación pasa a ser la función central.'],
['Ícono / Sospecha / Índice','Los tres siglos de la fotografía según Dubois: XIX, XX y XXI.'],
['Momento decisivo','Concepto de Cartier-Bresson: capturar el momento sin intervenir ni planificar.'],
['Huella','La marca que deja la luz en la película analógica: prueba de que hubo una presencia.'],
['Intimidad','En la época analógica, la vida con imágenes existía solo en el círculo privado.'],
['Extimidad','La decisión propia de mostrar la vida privada. Rompe el refugio de la intimidad.'],
['Sociedad del espectáculo','Concepto de Debord: la vida misma se espectaculariza.'],
['Posverdad','La era después de la verdad: la verdad se construye mediante un relato a medida.'],
['Modernidad líquida','Concepto de Bauman sobre la caída de los relatos sólidos.'],
['Deepfake','Discurso falso generado por IA que altera rostro, voz, cuerpo o discurso para instalar una mentira como verdad.'],
['Sesgo de confirmación','El algoritmo te muestra solo lo que confirma lo que ya pensás o buscaste.'],
['Polarización','Construida sobre la tecnología: el algoritmo no te contradice, así no se construyen consensos.'],
['Biopoder','Concepto de Foucault: el Estado moderno administra la vida (protección, salud) donde antes estaba el rey.'],
['Tecnocracia','Concepto de Eric Sadin: multimillonarios y tecnologías que pasan a manejar gobiernos.'],
['Práctica espacial','En Lefebvre, lo percibido: la experiencia concreta del espacio, cómo se usa y se recorre.'],
['Representaciones del espacio','En Lefebvre, lo concebido: planos, renders, señalética y normativas que anticipan un usuario.'],
['Espacios de representación','En Lefebvre, lo vivido: la carga emocional y simbólica, cómo la comunidad se apropia.'],
['Espacio abstracto','El espacio del capitalismo: homogéneo, fragmentado y jerárquico, orientado al consumo.'],
['Espacios diferenciales','La respuesta al espacio abstracto: espacios de los que la comunidad se apropia, como las plazas.'],
['Espacio contradictorio','Un mismo espacio habitado por clases sociales totalmente distintas: villa + zona cara.'],
['Gentrificación','Encarecimiento de una zona por la concentración de turistas o renovación urbana, que desplaza habitantes.'],
['Lugar','Según Augé: tiene identidad, relación social e historia.'],
['No lugar','Según Augé: espacio de tránsito, anonimato y estandarización, organizado por reglas.'],
['Heterotopía','Según Foucault: "espacios otros" que no comparten el tiempo ni el espacio de la vida ordinaria.']
];
