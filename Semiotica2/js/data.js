/* ============================================================
   DATA — Semiótica II · UADE Diseño Gráfico
   Segunda parte de la materia: Peirce, la enunciación
   (Benveniste y Bajtín), el lenguaje audiovisual, Verón y
   las narrativas transmedia e interfaces (Scolari).
   ============================================================ */

/* ---------------- 0. CONFIG DE LA MATERIA ---------------- */
const CONFIG = {
  key:'uade-semio2-v1',
  simIntro:'Parte A: opción múltiple sobre todos los autores · Parte B: completar conceptos clave · '+
           'Parte C: desarrollo y análisis de casos (Peirce, Benveniste/Bajtín, Verón, audiovisual y transmedia).',
  fillTitulo:'Completá los conceptos clave de la segunda parte.',
  topFacts:[
    'Peirce: signo <b>triádico</b> = <b>representamen</b> (algo) + <b>objeto</b> (de algo) + <b>interpretante</b> (para alguien)',
    '<b>Ícono</b> = semejanza · <b>Índice</b> = conexión física / coexistencia · <b>Símbolo</b> = convención',
    '<b>Primeridad</b> = cualidad · <b>Segundidad</b> = hecho · <b>Terceridad</b> = ley/hábito (rojo → luz roja → rojo = frenar)',
    '<b>Semiosis ilimitada</b>: el interpretante se vuelve un nuevo representamen. Conocer es <b>inferir</b>',
    'Benveniste: <b>enunciado</b> = lo dicho (¿qué dice?) · <b>enunciación</b> = el modo de decir (¿desde dónde lo dice?)',
    'Bajtín: <b>dialogismo</b>, <b>polifonía</b> y <b>géneros discursivos</b> (tema + estructura + estilo; primarios y secundarios)',
    'Verón: <b>semiosis social</b> · <b>producción → discurso → reconocimiento</b> · el sentido deja <b>huellas</b>',
    'Contrato de lectura: <b>objetivo</b> ("esto es así") · <b>pedagógico</b> ("yo sé, te explico") · <b>cómplice</b> ("vos y yo sabemos")',
    'Audiovisual: <b>percepción · concreción · mediación</b> · hacer-ver, hacer-saber, hacer-hacer',
    'Scolari: transmedia = <b>muchos medios + participación de los usuarios</b> · canon vs <b>fandom</b> · las 10 leyes de la interfaz'
  ],
  imgs:[
    ['semiosis-carpincho.png','Semiosis ilimitada: cada interpretante se vuelve un nuevo representamen'],
    ['peirce-ejemplos.png','Ejemplos de clase: ícono (foto), símbolo (señales), índice (huella) y legisigno (letras)'],
    ['midnight-in-paris.png','Midnight in Paris: la ciudad funciona como personaje'],
    ['medios-espectaculo.png','Los medios como espectáculo: escenas que la televisión terminó normalizando']
  ]
};

/* ---------------- 1. RESUMEN POR UNIDADES ---------------- */
const TOPICS = [
/* ===================== PEIRCE ===================== */
{
  id:'p1', mod:'Peirce', t:'Peirce: conocer es inferir', s:'Pragmatismo · lógica · abducción',
  body:`
  <p><b>Charles Sanders Peirce</b> fue un <b>filósofo, lógico y matemático estadounidense</b>,
  <b>padre del pragmatismo</b> y figura central de la semiótica moderna.</p>
  <ul>
    <li>Su pregunta no es solo <i>qué significa</i> un signo, sino <b>cómo algo llega a funcionar como signo</b>.</li>
    <li>Le interesaba <b>cómo se produce el conocimiento humano</b> en la mente: cómo pasamos de no saber nada a poder construir una nave espacial.</li>
    <li>No le interesan los signos "porque sí": dice que <b>constantemente vemos signos y los interpretamos</b>. Quería entender cómo funciona la mente, y para eso usa la <b>lógica</b>.</li>
    <li>Su teoría sirve para analizar <b>palabras, imágenes, sonidos, objetos, espacios e interfaces</b>.</li>
  </ul>

  <h4>Accedemos al mundo a través de los signos</h4>
  <p>Accedemos al conocimiento a través de <b>ideas y experiencia</b>: aprendemos por experiencia y
  <b>nunca terminamos de pensar, siempre estamos decodificando</b>.</p>
  <div class="key">El pensamiento <b>no copia</b> el mundo: lo <b>interpreta</b> a partir de signos, hipótesis y saberes previos. <b>Conocer es inferir.</b></div>

  <h4>Ejemplo de inferencia (abducción)</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Paso</th><th>Qué pasa</th></tr>
    <tr><td>1. Percibo</td><td>Veo <b>humo</b>.</td></tr>
    <tr><td>2. Hipótesis</td><td>Hay <b>fuego</b>.</td></tr>
    <tr><td>3. Acción</td><td><b>Actúo</b> según esa inferencia.</td></tr>
  </table></div>
  <p>No todos inferimos igual (el ejemplo de clase: Sherlock Holmes). Accedemos al mundo
  <b>según el conocimiento que tenemos</b>: <b>cuanto más sé, más voy a poder interpretar</b>.</p>
  <div class="tip"><b>Diferencia con Saussure:</b> Peirce está alejado de la teoría saussureana. Saussure piensa un signo
  <b>diádico</b> dentro de un sistema cerrado; Peirce piensa un signo <b>triádico</b> y un proceso de interpretación
  <b>abierto e ilimitado</b>.</div>
  `
},
{
  id:'p2', mod:'Peirce', t:'El signo triádico', s:'Representamen · objeto · interpretante',
  body:`
  <p>Para Peirce el signo es una <b>relación triádica</b> (de tres elementos), no una unión de dos caras.</p>
  <div class="tscroll"><table class="t">
    <tr><th>Elemento</th><th>Fórmula</th><th>Qué es</th><th>Ejemplo</th></tr>
    <tr><td>Representamen</td><td><b>ALGO</b></td><td>La forma que aparece: lo que percibimos con <b>todos los sentidos</b> (sólido, olor, sonido…).</td><td>Humo, un ruido</td></tr>
    <tr><td>Objeto</td><td><b>DE ALGO</b></td><td>Aquello a lo que remite: el mundo de las ideas, cosas, conceptos.</td><td>El fuego</td></tr>
    <tr><td>Interpretante</td><td><b>PARA ALGUIEN</b></td><td>El efecto de sentido: el <b>proceso interno</b> que hacemos para interpretar.</td><td>"Hay que salir de acá"</td></tr>
  </table></div>
  <div class="key">Un signo es <b>algo</b> que está <b>en lugar de algo</b> <b>para alguien</b>.</div>

  <h4>El representamen</h4>
  <p>Puede ser una <b>imagen, palabra, sonido, olor, textura, gesto, interfaz, objeto o espacio</b>.
  La experiencia nos da pistas cuando intentamos leer un signo.</p>

  <h4>Las tres condiciones para que algo sea signo</h4>
  <ol style="padding-left:20px;color:var(--txt2);font-size:14.5px">
    <li><b>Cualidades reconocibles y distintivas</b>: el signo debe poder distinguirse (forma, color, sonido, textura, gesto, olor, materialidad). <i>Si no reconozco qué es, no puede ser un signo.</i></li>
    <li><b>Un objeto al que representa</b>: debe remitir a algo (una cosa, idea, acción, acontecimiento o experiencia).</li>
    <li><b>Relación triádica completa</b>: debe ser reconocido como signo de un objeto <b>mediante un interpretante</b>. Esta es la <b>condición suficiente</b>.</li>
  </ol>
  `
},
{
  id:'p3', mod:'Peirce', t:'Objeto e interpretante: sus tipos', s:'Inmediato · dinámico · final',
  body:`
  <h4>Dos tipos de objeto</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Objeto inmediato</th><th>Objeto dinámico</th></tr>
    <tr><td>El aspecto del objeto que el representamen <b>presenta en una semiosis puntual</b>. Es "lo que esta pieza hace aparecer" del objeto.</td>
        <td>La idea o concepto <b>más amplio</b> al que se remite: <b>saberes previos</b>, experiencia cultural y conocimiento acumulado.</td></tr>
    <tr><td><i>Ej.: Messi es jugador de fútbol</i> (lo que muestra la foto en la cancha).</td>
        <td><i>Ej.: Messi tiene familia, una historia, una vida</i> (todo lo que sé de él).</td></tr>
  </table></div>

  <h4>Tres tipos de interpretante</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Tipo</th><th>Qué es</th></tr>
    <tr><td>Inmediato</td><td>La <b>posibilidad</b> de interpretar el signo: el signo "puede ser entendido".</td></tr>
    <tr><td>Dinámico</td><td>Las <b>interpretaciones concretas</b> que se producen en una situación de lectura.</td></tr>
    <tr><td>Final o normal</td><td>La interpretación <b>estabilizada o probable</b> en una <b>comunidad</b> de interpretación.</td></tr>
  </table></div>
  <div class="tip">No podemos entender "todo" el signo: para cada uno es distinto. Pero <b>no toda lectura vale igual</b>:
  se apoya en <b>saberes, hábitos y contextos</b>.</div>
  `
},
{
  id:'p4', mod:'Peirce', t:'La semiosis ilimitada', s:'El interpretante se vuelve representamen',
  body:`
  <p>La <b>semiosis</b> es el proceso de interpretación. Para Peirce es un <b>proceso ilimitado</b>:
  tenemos múltiples cadenas de interpretación y <b>nunca paramos de interpretar signos</b>.</p>
  <div class="key">El <b>interpretante</b> puede transformarse en un <b>nuevo representamen</b>, que genera otro interpretante, y así sucesivamente.</div>
  <figure class="fg"><img src="img/semiosis-carpincho.png" alt="Semiosis ilimitada con el ejemplo del carpincho">
  <figcaption>Ejemplo de clase: «el carpincho es un signo». Carpincho → mascota → fidelidad → un amigo → …</figcaption></figure>

  <h4>El ejemplo de clase: el carpincho</h4>
  <ol style="padding-left:20px;color:var(--txt2);font-size:14.5px">
    <li>Representamen: la palabra <b>c-a-r-p-i-n-c-h-o</b> → objeto: el animal → interpretante: lo que entiendo.</li>
    <li>Ese interpretante se vuelve representamen → objeto: <b>mascota</b> → interpretante: <b>fidelidad</b>.</li>
    <li>Fidelidad se vuelve representamen → objeto: <b>un amigo</b> → interpretante: alguien que está incondicionalmente.</li>
  </ol>

  <h4>Otro ejemplo: el olor a lluvia</h4>
  <p>Representamen: <b>olor a lluvia</b> → objeto: <b>va a llover</b> → interpretante: <b>¿traje paraguas?</b></p>
  <ul>
    <li>La interpretación <b>no queda encerrada</b> en una sola lectura.</li>
    <li>Pero no toda lectura vale igual: depende de <b>saberes, hábitos y contextos</b>.</li>
    <li>La relación entre los tres elementos no se enfoca solamente en lo que percibimos.</li>
  </ul>
  `
},
{
  id:'p5', mod:'Peirce', t:'Primeridad, Segundidad, Terceridad', s:'Las categorías fenomenológicas',
  body:`
  <p>Peirce ordena toda la experiencia en <b>tres categorías fenomenológicas</b>. Son las <b>columnas</b>
  del cuadro de los signos.</p>
  <div class="tscroll"><table class="t">
    <tr><th>Categoría</th><th>Qué es</th><th>Ejemplo del rojo</th></tr>
    <tr><td>Primeridad</td><td><b>Cualidad posible</b>: sensación, color, tono, textura, atmósfera. Todavía <b>no hay hecho ni regla</b>.</td><td>El <b>rojo</b> como color</td></tr>
    <tr><td>Segundidad</td><td><b>Hecho / irrupción</b>: algo ocurre, resiste, marca, golpea, deja huella o produce contacto. La existencia singular.</td><td>Una <b>luz roja encendida</b></td></tr>
    <tr><td>Terceridad</td><td><b>Ley / hábito</b>: código, convención, regla, pensamiento, creencia que orienta acciones.</td><td><b>Rojo = detenerse</b></td></tr>
  </table></div>
  <div class="key">1 = <b>posibilidad</b> · 2 = <b>existencia</b> · 3 = <b>ley</b></div>

  <h4>Las tres tricotomías (las filas)</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Fila</th><th>Pregunta</th><th>Clases</th></tr>
    <tr><td>Representamen</td><td>¿Cómo aparece este signo?</td><td>cualisigno · sinsigno · legisigno</td></tr>
    <tr><td>Objeto</td><td>¿Cómo se vincula con aquello que representa?</td><td>ícono · índice · símbolo</td></tr>
    <tr><td>Interpretante</td><td>¿Qué tipo de interpretación produce?</td><td>rema · dicente · argumento</td></tr>
  </table></div>
  `
},
{
  id:'p6', mod:'Peirce', t:'Las 9 clases de signos', s:'El cuadro 3 × 3 con ejemplos',
  body:`
  <p>Cruzando las tres tricotomías (filas) con las tres categorías (columnas) se obtienen <b>9 clases</b>.</p>
  <div class="tscroll"><table class="t">
    <tr><th></th><th>Primeridad</th><th>Segundidad</th><th>Terceridad</th></tr>
    <tr><td>Representamen<br><small>¿qué imprime en la realidad del intérprete?</small></td>
        <td><b>1 · Cualisigno</b><br>la cualidad sin ocurrir en ningún singular</td>
        <td><b>2 · Sinsigno</b><br>la cualidad en un singular en sí</td>
        <td><b>3 · Legisigno</b><br>la regularidad de esa cualidad en ese singular</td></tr>
    <tr><td>Objeto<br><small>relación del R con el O</small></td>
        <td><b>4 · Ícono</b><br>por <b>semejanza</b></td>
        <td><b>5 · Índice</b><br>por <b>coexistencia</b> / contigüidad</td>
        <td><b>6 · Símbolo</b><br>por <b>convención</b></td></tr>
    <tr><td>Interpretante<br><small>relación que explica el R</small></td>
        <td><b>7 · Rema</b><br>cualidades que definen un O probable</td>
        <td><b>8 · Dicente</b><br>relación real con el O: verdadero o falso</td>
        <td><b>9 · Argumento</b><br>razonamiento complejo que induce</td></tr>
  </table></div>

  <h4>Representamen — cómo se presenta</h4>
  <ul>
    <li><b>Cualisigno</b>: una cualidad pura, todavía no manifestada en un objeto. <i>La "rojez" en abstracto, antes de estar pintada en algo.</i></li>
    <li><b>Sinsigno</b>: una ocurrencia singular, única y concreta. <i>Una mancha de pintura roja derramada en el piso.</i></li>
    <li><b>Legisigno</b>: una ley o patrón general que se repite. <i>La letra "A" que reconocemos en cualquier fuente o cartel.</i></li>
  </ul>
  <h4>Objeto — cómo se relaciona con lo que representa</h4>
  <ul>
    <li><b>Ícono</b>: por <b>semejanza</b>. <i>Una foto o un dibujo realista de un perro.</i></li>
    <li><b>Índice</b>: por <b>conexión física, causal o de coexistencia</b> (indica que algo estuvo ahí). <i>Una huella, el humo de una chimenea, un perfume que te recuerda a alguien.</i></li>
    <li><b>Símbolo</b>: por <b>convención</b> o acuerdo social aprendido. <i>La palabra "PERRO", las formas de saludar en otros países.</i></li>
  </ul>
  <h4>Interpretante — qué efecto produce</h4>
  <ul>
    <li><b>Rema</b>: presenta cualidades que definen un objeto posible; deja la interpretación abierta. <i>Un boceto abstracto o notas sueltas que evocan misterio.</i></li>
    <li><b>Dicente</b>: afirma algo que puede ser <b>verdadero o falso</b>. <i>"Velocidad máxima 60 km/h", un termómetro que marca 38 °C.</i></li>
    <li><b>Argumento</b>: un razonamiento que conduce a una conclusión. <i>Un silogismo o un manual de instrucciones paso a paso.</i></li>
  </ul>
  <figure class="fg"><img src="img/peirce-ejemplos.png" alt="Ejemplos de ícono, símbolo, índice y legisigno">
  <figcaption>Foto de un perro (ícono) · señales viales (símbolo) · la huella/rastro del perro (índice) · letras (legisigno).</figcaption></figure>
  <div class="tip"><b>Dato de clase:</b> «todos los logos son <b>símbolos</b>» — funcionan por convención.</div>
  `
},

/* ===================== ENUNCIACIÓN ===================== */
{
  id:'e1', mod:'Enunciación', t:'Benveniste: enunciado y enunciación', s:'Lo dicho y el modo de decir',
  body:`
  <p><b>Émile Benveniste</b> (1902-1976) fue un <b>lingüista francés</b>, ampliador del pensamiento de Saussure y
  <b>padre de la teoría de la enunciación</b> (hacia 1960). Le interesa <b>cómo el lenguaje construye al sujeto que habla</b>.</p>
  <p>Dice que a Saussure <b>"se le olvidó algo"</b>: el lenguaje no solo es un sistema, sino que <b>nos construye</b>.
  Pone el énfasis en <b>quién habla y a quién le habla</b> (esto se conoce como <b>giro lingüístico</b>).</p>

  <h4>Discurso = enunciado + enunciación</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Enunciado</th><th>Enunciación</th></tr>
    <tr><td><b>Lo dicho</b>, lo explícito: la información, la historia, el tema, lo que la pieza muestra o cuenta.</td>
        <td><b>Lo no dicho de lo dicho</b>: el modo de decir, la voz, el destinatario imaginado, la valoración y la posición ideológica.</td></tr>
    <tr><td><b>¿Qué dice?</b></td><td><b>¿Desde dónde lo dice?</b></td></tr>
  </table></div>
  <div class="key">La enunciación no es "lo dicho": es el <b>acto situado</b> que produce un enunciado.
  El <b>discurso</b> es una instancia que emerge de la combinación de ambos y está formado por muchos enunciados (ej.: una clase).</div>

  <h4>El enunciado como unidad de comunicación</h4>
  <ul>
    <li>Tiene una <b>materialidad significante</b> (gesto, palabra, imagen). Ej.: la materialidad de una imagen (formas, color, líneas); el <b>color rojo</b> es una materialidad que transmite significado.</li>
    <li>Está orientado de un <b>enunciador</b> (el diseñador, quien inicia) a un <b>enunciatario</b> (quien recibe) y muestra la <b>postura</b> de quien lo dice.</li>
    <li>Siempre hay una <b>situación comunicativa concreta</b>: el porqué lo hacés.</li>
  </ul>
  <h4>Los tres elementos que todo enunciado tiene</h4>
  <ul>
    <li><b>Contenido temático</b>: de qué se habla.</li>
    <li><b>Estructuración</b>: cómo se organiza la información, con un formato establecido.</li>
    <li><b>Estilo</b>: la única posibilidad de <b>inscribir nuestra subjetividad</b>. No es fijo: es cómo usás y organizás los materiales (con solo ver el diseño sabés de quién es).</li>
  </ul>
  <p>Los enunciados están <b>atados a las prácticas sociales</b> donde se usan y se pueden agrupar en <b>géneros discursivos</b>.</p>
  `
},
{
  id:'e2', mod:'Enunciación', t:'Las marcas de la enunciación', s:'Yo-tú · deixis · temporalidad · voces',
  body:`
  <div class="key">No existe un <b>yo</b> sin un <b>tú</b>: el acto de comunicación siempre necesita un otro.</div>

  <h4>Los tres argumentos de Benveniste</h4>
  <ol style="padding-left:20px;color:var(--txt2);font-size:14.5px">
    <li><b>Estructura de diálogo</b>: la mantenemos siempre, <b>incluso cuando hablamos con nosotros mismos</b>.</li>
    <li><b>Las deixis</b>: adverbios y demostrativos que organizan las relaciones <b>espaciales y temporales</b> (aquí, allá, este, ahora). Ej.: "está lloviendo, dejé la ropa afuera" se entiende por la situación compartida. Lo que nos constituye (la escuela, la religión, la facultad) aparece en <b>cómo</b> decimos: se muestran las cuestiones ideológicas.</li>
    <li><b>La expresión de la temporalidad</b>: "ayer fue feriado" enuncia un <b>aquí y ahora</b>. Lo que importa es la persona situada en tiempo y espacio, que la hace distinta a otra que dice lo mismo.</li>
  </ol>

  <h4>El lugar de habla: las 4 preguntas</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Pregunta</th><th>Concepto</th><th>Marca</th></tr>
    <tr><td>¿Quién?</td><td><b>Enunciador</b></td><td>El lugar desde donde se habla.</td></tr>
    <tr><td>¿A quién?</td><td><b>Enunciatario</b></td><td>El interlocutor construido.</td></tr>
    <tr><td>¿Cuándo?</td><td><b>Temporalidad</b></td><td>ahora / ayer / mañana</td></tr>
    <tr><td>¿Dónde?</td><td><b>Deixis espacial</b></td><td>aquí / allá / este lugar</td></tr>
  </table></div>
  <p>Todo esto <b>produce sentido</b>: son las <b>huellas</b> de a quién se está hablando y del pensamiento de quien habla.</p>

  <h4>Otras voces en el discurso (antes de Bajtín)</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Forma</th><th>Qué hace</th></tr>
    <tr><td>Negación</td><td>Niega algo ya dicho: <b>pone en escena una voz previa</b>.</td></tr>
    <tr><td>Ironía</td><td>Hace resonar una voz ajena <b>para tomar distancia</b> (ej.: "de tal palo, tal astilla" dicho irónicamente).</td></tr>
    <tr><td>Cita</td><td><b>Retoma un enunciado ajeno</b> y lo reubica en otra escena.</td></tr>
  </table></div>
  `
},
{
  id:'e3', mod:'Enunciación', t:'Bajtín: dialogismo y polifonía', s:'Heteroglosia · la palabra ajena',
  body:`
  <p><b>Mijaíl Bajtín</b> (1895-1975) fue un lingüista, filósofo y profesor <b>ruso</b>. Vivió la Revolución Rusa,
  estuvo preso y desarrolló allí su teoría, que se empezó a conocer en Occidente <b>después de la caída del muro</b>.</p>
  <div class="tip"><b>Puente con Benveniste:</b> del "yo-tú" al <b>diálogo social</b>. Benveniste instala un lugar de habla
  (quién, a quién, cuándo, dónde); Bajtín agrega que <b>la presencia del otro es constitutiva</b> y que nuestra habla está
  "contaminada" por otras voces.</div>

  <h4>Ideas centrales</h4>
  <ul>
    <li><b>Siempre hablamos con palabras ajenas</b>: nunca creamos palabras. El enunciado tiene <b>ecos de discursos anteriores</b>.</li>
    <li><b>Todo pensamiento se construye políticamente: todo es ideológico.</b></li>
    <li><b>Siempre respondemos a signos con signos.</b></li>
    <li>El yo y el tú son <b>constitutivos</b>: siempre tiene que haber un <b>enunciatario</b>, exista o no.</li>
    <li>En el discurso se nota la <b>clase social, profesión o región</b> de quien habla.</li>
    <li>Al adquirir un signo <b>no solo te llevás la palabra y su significado, sino también su ideología</b>. Uno se <b>apropia</b> de la palabra en la enunciación.</li>
  </ul>

  <h4>Heteroglosia y polifonía</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Concepto</th><th>Qué es</th></tr>
    <tr><td>Heteroglosia</td><td>La <b>lengua</b> está construida por <b>muchas voces</b>: traemos distintas clases sociales, religiones, profesiones.</td></tr>
    <tr><td>Polifonía</td><td>Las <b>múltiples voces que aparecen en MI discurso</b>: la palabra no es de nadie, es ajena y está contaminada por otras voces.</td></tr>
  </table></div>
  <div class="key">En diseño: <b>se diseña dentro de una tradición</b>, no sos el primero en diseñar. "Sos una rueda más dentro de la rueda."</div>

  <h4>Los tres estados de la palabra</h4>
  <div class="tscroll"><table class="t">
    <tr><th>De nadie</th><th>Ajena</th><th>Propia</th></tr>
    <tr><td>Diccionario, código disponible.</td>
        <td>Otros ya la usaron y la cargaron de valor; es ajena cuando cito la palabra de alguien.</td>
        <td>La tomo y la hago decir algo <b>en esta situación</b>, desde mi perspectiva.</td></tr>
  </table></div>
  `
},
{
  id:'e4', mod:'Enunciación', t:'El enunciado y la cadena dialógica', s:'Los 5 principios del enunciado',
  body:`
  <h4>Oración, enunciado y discurso</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Oración</th><th>Enunciado</th><th>Discurso</th></tr>
    <tr><td>Unidad mínima de la <b>lengua</b>.</td><td>Unidad de la <b>comunicación</b>.</td><td>Formado por distintos enunciados (ej.: la clase).</td></tr>
  </table></div>

  <h4>Los principios del enunciado</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Principio</th><th>Qué significa</th></tr>
    <tr><td>Cambio de sujetos</td><td>Alguien toma la palabra y <b>cede el turno</b>: alguien tiene que contestar.</td></tr>
    <tr><td>Conclusividad</td><td>Parece "cerrado" y <b>habilita una respuesta</b> (termina la clase y te vas).</td></tr>
    <tr><td>Destinatario</td><td>Está <b>orientado a alguien</b>, real o imaginado.</td></tr>
    <tr><td>Entonación expresiva</td><td>Marca <b>valoración</b>: ironía, solemnidad, cercanía, urgencia.</td></tr>
    <tr><td>Ecos</td><td>Trae <b>huellas de otros enunciados</b> y géneros (su visión del mundo).</td></tr>
  </table></div>

  <div class="key">Todo enunciado es un <b>eslabón en la cadena dialógica</b>. <b>Un diseño es un enunciado.</b></div>
  <p>El enunciado actual entra en diálogo con los <b>anteriores</b> y les agrega variaciones; en el futuro, otros
  lo van a usar de base como vos usaste los previos. <b>Siempre están todos conectados</b>, con los anteriores y con los próximos.
  Cada enunciado puede tener variaciones dentro de un mismo género.</p>
  `
},
{
  id:'e5', mod:'Enunciación', t:'Los géneros discursivos', s:'Tema · estructura · estilo · primarios y secundarios',
  body:`
  <div class="key">Los <b>géneros discursivos</b> son <b>tipos relativamente estables de enunciados</b>, producidos por un hablante en una
  situación comunicativa concreta, orientados a un destinatario, que pueden agruparse porque comparten
  <b>contenido temático, estilo y composición (estructura)</b>.</div>

  <h4>Los tres componentes</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Contenido temático</th><th>Estructura</th><th>Estilo</th></tr>
    <tr><td>De qué se habla.</td><td>Cómo se ordena la información.</td><td>Los recursos que se usan.</td></tr>
  </table></div>
  <p>Ejemplo de clase: para entrar a la cuenta del banco <b>no tenés que pensar cómo se hace</b>, porque el género ya está
  establecido y te anticipa la lectura.</p>

  <h4>El ciclo de vida de un género</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Nacen</th><th>Persisten</th><th>Cambian</th><th>Desaparecen</th></tr>
    <tr><td>En prácticas sociales concretas.</td><td>Porque facilitan <b>expectativas de lectura</b>.</td>
        <td>Cuando cambian las prácticas, tecnologías y públicos.</td><td>O se vuelven memoria cultural.</td></tr>
  </table></div>
  <p>Ej. de clase: la <b>carta de pedida de mano</b> era un documento legal entre personas que muchas veces no se conocían;
  si se cancelaba había que pagar. Era muy importante y terminó desapareciendo porque cambió la práctica social.</p>

  <h4>Primarios y secundarios</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Primarios</th><th>Secundarios</th></tr>
    <tr><td>Más <b>simples</b> y espontáneos.</td><td>Más <b>complejos</b>.</td></tr>
    <tr><td>Vínculo <b>inmediato</b> con la situación.</td><td>Surgen en prácticas culturales <b>elaboradas</b>.</td></tr>
    <tr><td>Generalmente <b>orales</b>.</td><td><b>Absorben y reelaboran</b> a los primarios.</td></tr>
    <tr><td>Conversación, saludo, pedido, disculpa, ir a la verdulería.</td><td>Novela, informe, campaña, audiovisual, sermón.</td></tr>
  </table></div>
  <div class="tip"><b>Ejemplo de clase:</b> en un video guionado, el diálogo parece un género <b>primario</b> (una charla),
  pero es <b>secundario</b> porque todo fue planificado. La diferencia está en la <b>relación del enunciado con la práctica</b>.</div>
  `
},

/* ===================== VERÓN ===================== */
{
  id:'v1', mod:'Verón', t:'Verón y la semiosis social', s:'Del signo al discurso',
  body:`
  <p><b>Eliseo Verón</b> fue un <b>filósofo y sociólogo argentino</b>. Le interesa cómo se integran nuevos discursos en la
  sociedad, cómo la gente cambia de parecer, cómo se <b>instala un sentido</b> y cómo los discursos van cambiando la sociedad.</p>
  <div class="key">No parte de "qué significa un signo", sino de <b>cómo se produce y circula el sentido social</b>.
  Su teoría de los discursos sociales es la <b>semiosis social</b>: todo discurso es un texto encadenado con otros discursos sociales.</div>

  <h4>Tres desplazamientos para leer a Verón</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Desplazamiento</th><th>Qué cambia</th></tr>
    <tr><td>Del signo al discurso</td><td>El objeto de análisis ya no es una unidad aislada: es un <b>fenómeno social</b> materializado en imágenes, objetos, espacios, interfaces, gestos, sonidos y palabras.</td></tr>
    <tr><td>Del mensaje a la circulación</td><td>Entre lo que se produce y lo que los públicos reconocen hay siempre un <b>desfase</b>. El sentido <b>no viaja intacto</b>: se transforma.</td></tr>
    <tr><td>Del significado al sentido social</td><td>Se buscan las <b>condiciones, operaciones y huellas</b> que explican por qué un diseño significa así y por qué puede ser leído de otro modo.</td></tr>
  </table></div>

  <h4>Saussure vs. Verón</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Saussure</th><th>Verón</th></tr>
    <tr><td>Sistema de diferencias; signo dentro de una estructura; valor relacional.</td>
        <td>Discurso como <b>proceso</b>: producción + circulación + reconocimiento; sentido situado socialmente.</td></tr>
    <tr><td>Problema: quedan en segundo plano la <b>historicidad, la circulación y el cambio social</b>.</td>
        <td>La pregunta cambia: de <b>¿qué significa?</b> a <b>¿bajo qué condiciones puede significar así?</b></td></tr>
  </table></div>

  <h4>Lo que toma de Peirce</h4>
  <ul>
    <li><b>Toma</b>: la idea de semiosis como <b>proceso abierto</b>; el sentido se produce en relaciones y no queda encerrado en un signo aislado. Una lógica relacional: un signo genera interpretantes y se integra en nuevas cadenas.</li>
    <li><b>Desplaza</b>: el análisis hacia <b>discursos concretos</b>, operaciones, condiciones sociales de producción y modos de reconocimiento. Lleva la tríada de Peirce a todo un discurso.</li>
  </ul>
  <div class="tip"><b>Todo fenómeno social tiene una dimensión significante.</b> La realidad social no es un dato transparente:
  se construye, se disputa y se estabiliza en procesos de semiosis.</div>
  `
},
{
  id:'v2', mod:'Verón', t:'Producción, discurso y reconocimiento', s:'Condiciones · gramáticas · huellas',
  body:`
  <h4>¿Qué es un discurso para Verón?</h4>
  <ul>
    <li>Un <b>conjunto material de signos y prácticas</b>: un entramado de hilos de otros discursos (una hebra de un hilo).</li>
    <li>Puede ser <b>verbal, visual, espacial, corporal, objetual, sonoro o interactivo</b>.</li>
    <li>Es <b>producido</b> (nadie produce solo: necesita otros discursos) y <b>recepcionado</b> (alguien lo recibe e interpreta).</li>
    <li><b>No termina en sí mismo</b>: circula dentro de un sistema y nunca está aislado.</li>
  </ul>
  <div class="key"><b>Condiciones de producción → DISCURSO → Condiciones de reconocimiento</b><br>
  Producción y reconocimiento <b>hacen sistema</b>.</div>
  <p>Las <b>gramáticas</b> son las reglas (operaciones de sentido) que regulan tanto la <b>generación</b> de un discurso
  (gramática de producción) como su <b>lectura</b> (gramática de reconocimiento).</p>

  <h4>Condiciones de producción: ¿qué hizo posible este diseño?</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Dimensión</th><th>Pregunta</th></tr>
    <tr><td>Historia</td><td>¿Qué estaba ocurriendo en ese momento?</td></tr>
    <tr><td>Economía</td><td>¿Qué mercado, consumo o modelo de negocio interviene?</td></tr>
    <tr><td>Tecnologías</td><td>¿Qué medios, plataformas o técnicas estaban disponibles?</td></tr>
    <tr><td>Instituciones</td><td>¿Quién encarga, regula, financia o legitima?</td></tr>
    <tr><td>Proyecto</td><td>¿Qué decisiones formales y materiales se tomaron?</td></tr>
    <tr><td>Discursos previos</td><td>¿Qué estilos, referencias, géneros o memorias retoma? (política, tradiciones de diseño)</td></tr>
  </table></div>

  <h4>Condiciones de reconocimiento</h4>
  <p><b>Competencias, memoria, posición social, expectativas, usos y contexto cultural.</b> Los públicos no reciben pasivamente:</p>
  <ul>
    <li><b>Público</b>: no es una masa homogénea; cada destinatario está en redes sociales, culturales y económicas distintas.</li>
    <li><b>Contexto</b>: la misma pieza cambia de sentido según época, plataforma, coyuntura o comunidad.</li>
    <li><b>Uso</b>: apropiar, rechazar, remixar, ironizar, compartir, coleccionar o vandalizar también son modos de reconocimiento.</li>
  </ul>
  <div class="tip">El "efecto" de un diseño <b>no se deduce solo de sus formas</b>: hay que observar cómo entra en circulación.
  El sentido <b>no está "adentro" del objeto</b>: emerge de operaciones sociales, convenciones, memorias y posiciones de lectura.</div>

  <h4>Las huellas</h4>
  <p>Una <b>huella</b> es una marca de operaciones sociales en el discurso: permite <b>inferir relaciones</b> con discursos y condiciones que atraviesan la pieza.</p>
  <div class="tscroll"><table class="t">
    <tr><th>Tipo</th><th>Ejemplos</th></tr>
    <tr><td>Visuales</td><td>color · tipografía · encuadre · iconografía</td></tr>
    <tr><td>Materiales</td><td>soporte · textura · técnica · acabado</td></tr>
    <tr><td>Espaciales</td><td>escala · acceso · circulación · jerarquía</td></tr>
    <tr><td>Verbales</td><td>tono · pronombres · imperativos · cuantificación</td></tr>
    <tr><td>Sonoras</td><td>voz · música · ritmo · silencios</td></tr>
    <tr><td>Interactivas</td><td>gestos · feedback · permisos · restricciones</td></tr>
  </table></div>
  <div class="key">Un discurso es un <b>punto de pasaje de sentido</b>: para producirse necesita otros discursos y, al circular,
  puede convertirse en condición de producción de nuevos. <b>No hay un "origen puro"</b>.</div>
  `
},
{
  id:'v3', mod:'Verón', t:'Analizar un diseño con Verón', s:'Los 4 movimientos',
  body:`
  <p><b>El diseño también es discurso social</b>, en todas sus disciplinas:</p>
  <div class="tscroll"><table class="t">
    <tr><th>Campo</th><th>Dónde se lee el discurso</th></tr>
    <tr><td>Gráfico</td><td>tipografía · imagen · jerarquía</td></tr>
    <tr><td>Industrial</td><td>forma · uso · materialidad</td></tr>
    <tr><td>Arquitectura</td><td>acceso · escala · circulación</td></tr>
    <tr><td>Interiores</td><td>atmósfera · recorrido · orientación</td></tr>
    <tr><td>Moda</td><td>cuerpo · pertenencia · identidad</td></tr>
    <tr><td>Audiovisual / UX</td><td>montaje · interfaz · interacción</td></tr>
  </table></div>

  <h4>Los 4 movimientos del análisis</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Movimiento</th><th>Pregunta</th><th>Qué hacer</th></tr>
    <tr><td>1. Delimitar</td><td>¿Cuál es el discurso?</td><td>Elegir una pieza, objeto, espacio, interfaz o sistema <b>concreto</b>. No analizar "la marca" en abstracto.</td></tr>
    <tr><td>2. Reconstruir</td><td>¿Qué condiciones lo hicieron posible?</td><td>Contexto histórico, tecnológico, económico, institucional y discursivo.</td></tr>
    <tr><td>3. Leer huellas</td><td>¿Qué operaciones quedaron materializadas?</td><td>Formas, materiales, espacialidad, lenguaje, sonido, interacción.</td></tr>
    <tr><td>4. Comparar</td><td>¿Qué cambia al circular?</td><td>Contrastar piezas, épocas, soportes y reconocimientos.</td></tr>
  </table></div>

  <h4>Ejemplos de clase</h4>
  <ul>
    <li><b>Logo de Nike</b>: el "swoosh" retoma el ala de <b>Niké, la diosa de la victoria</b> (discurso previo).</li>
    <li><b>Air Force 1</b>: cruza el discurso de la <b>tecnología</b> (aviación) con el de la <b>indumentaria</b>.</li>
    <li><b>Zapatillas Converse</b> y <b>la camiseta de Alemania</b>: piezas que cambian de sentido al circular por distintas épocas y públicos.</li>
  </ul>
  `
},
{
  id:'v4', mod:'Verón', t:'El contrato de lectura', s:'Objetivo · pedagógico · cómplice · lector modelo',
  body:`
  <p>El medio (o el diseño) <b>propone una relación con su destinatario</b>: construye un lugar para quien enuncia y otro para quien interpreta.</p>
  <div class="tscroll"><table class="t">
    <tr><th>Enunciador</th><th>Destinatario</th></tr>
    <tr><td>¿Desde qué posición habla el diseño? ¿Experto, neutral, cercano, provocador, exclusivo?</td>
        <td>¿Qué usuario imagina? ¿Qué sabe? ¿Qué debe hacer? ¿Qué emociones o competencias se le presuponen?</td></tr>
  </table></div>
  <div class="key">El <b>contrato de lectura</b> es la relación entre el discurso del soporte y las posiciones de lectura que propone.
  Es <b>implícito</b> con el espectador: es <b>lo que te mantiene enganchado</b>. Mismo contenido, relaciones distintas.</div>
  <p>Para Verón, la diferencia decisiva suele estar menos en <b>"qué se dice"</b> que en <b>"cómo se organiza el decir"</b>.</p>
  <div class="tscroll"><table class="t">
    <tr><th>Nivel</th><th>Qué es</th></tr>
    <tr><td>Enunciado</td><td>El contenido: la información, tema o propósito.</td></tr>
    <tr><td>Enunciación</td><td>Modalidades del decir: tono, pronombres, jerarquías, imágenes, encuadre, distancia, imperativos, puesta en escena.</td></tr>
    <tr><td>Contrato</td><td>La relación que se construye entre enunciador y destinatario a partir de esas modalidades.</td></tr>
  </table></div>
  <p>Estudiar el contrato es analizar la <b>totalidad de estructuras enunciativas</b> del soporte. El <b>elemento dominante</b> define el tipo de contrato.</p>

  <h4>Los tres tipos de contrato</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Objetivo ("verdadero")</th><th>Pedagógico</th><th>Cómplice</th></tr>
    <tr><td>Neutral, <b>sin marcas de subjetividad</b>. Busca efecto de neutralidad o transparencia: el enunciador <b>se borra</b>, cuantifica, describe, informa impersonalmente.</td>
        <td>Construye una <b>asimetría</b>: uno sabe y orienta; el otro desconoce y aprende, sigue, consulta o recibe instrucciones.</td>
        <td>Busca <b>simetría</b>: proximidad, identificación o pertenencia. Comparte códigos, emociones o referencias y da lugar a la participación.</td></tr>
    <tr><td><b>"Esto es así."</b></td><td><b>"Yo sé, te explico."</b></td><td><b>"Vos y yo sabemos de qué hablamos."</b></td></tr>
  </table></div>
  <div class="tip">El contrato objetivo <b>también es una construcción discursiva</b>: la ausencia aparente de estilo produce un efecto
  de racionalidad, transparencia y universalidad. El pedagógico sirve para <b>orientar, explicar y conducir</b> (museos, hospitales, señalética).</div>

  <h4>El contrato atraviesa todas las disciplinas</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Campo</th><th>Objetivo</th><th>Pedagógico</th><th>Cómplice</th></tr>
    <tr><td>Gráfico</td><td>Grilla, datos, neutralidad</td><td>Infografía, instrucción</td><td>Tono compartido, comunidad</td></tr>
    <tr><td>Industrial</td><td>Función visible, minimalismo</td><td>Forma que enseña el uso</td><td>Objeto-identidad, pertenencia</td></tr>
    <tr><td>Arquitectura</td><td>Orden racional, modulación</td><td>Recorrido guiado, interpretación</td><td>Memorial, experiencia afectiva</td></tr>
    <tr><td>Interiores</td><td>Funcionalidad, señalización</td><td>Orientación, secuencia</td><td>Atmósfera, tematización</td></tr>
    <tr><td>Moda</td><td>Uniformidad, sistema</td><td>Etiquetas, códigos de uso</td><td>Estilo, tribu, identidad</td></tr>
    <tr><td>Audiovisual / UX</td><td>Puesta en escena neutral</td><td>Tutorial, onboarding</td><td>Diálogo, participación</td></tr>
  </table></div>

  <h4>No es una etiqueta fija</h4>
  <ul>
    <li><b>Mismo enunciador</b> no implica misma relación: puede informar, enseñar, seducir, incluir, desafiar o distanciar.</li>
    <li><b>Mismo contenido</b> puede ser asumido por enunciaciones distintas y construir destinatarios diferentes.</li>
    <li><b>Mismo diseño</b>, al circular en otro contexto, puede recibir lecturas no previstas, incluso opuestas.</li>
  </ul>

  <h4>Del contrato de lectura al lector modelo (Eco)</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Verón</th><th>Umberto Eco</th></tr>
    <tr><td>Se concentra en posiciones enunciativas, condiciones de producción y reconocimiento y circulación del sentido.</td>
        <td>El <b>lector modelo</b> es una figura <b>anticipada por la estrategia del texto</b>: un usuario ideal capaz de activar ciertas competencias. Una imagen mental de quien va a recibir el discurso.</td></tr>
    <tr><td><b>¿Qué relación construye este discurso con su destinatario?</b></td><td><b>¿Qué lector / usuario supone este diseño?</b></td></tr>
  </table></div>
  <ul>
    <li><b>Textos abiertos</b>: permiten <b>múltiples interpretaciones</b> y provocan la cooperación activa del lector.</li>
    <li><b>Textos cerrados</b>: más restrictivos; limitan las interpretaciones y diseñan con precisión la experiencia del lector.</li>
  </ul>
  `
},

/* ===================== AUDIOVISUAL ===================== */
{
  id:'a1', mod:'Audiovisual', t:'El lenguaje audiovisual y el documental', s:'Hacer ver, hacer creer, hacer hacer',
  body:`
  <p>El <b>documental</b> es un género discursivo que procura ser un <b>discurso del hacer creer</b>: la <b>construcción de la verdad</b>.
  Construir una postura visual tiene que ver con la <b>mirada del mundo</b> que se tiene. El audiovisual:</p>
  <ul>
    <li><b>Selecciona</b> qué se hace visible y qué queda fuera: es un <b>recorte de la realidad</b>.</li>
    <li><b>Propone modos</b> de mirar, comprender y sentir.</li>
    <li>Puede <b>reafirmar o cuestionar</b> representaciones dominantes (discursos).</li>
  </ul>
  <div class="key">Valor semiótico de la imagen: <b>hacer ver, hacer creer y hacer hacer</b>. Implica lo <b>responsables</b> que somos al diseñar y usar imágenes para representar.</div>

  <h4>Estereotipos: el caso Barbie</h4>
  <ul>
    <li>Barbie nace como un modelo único: todas iguales. Desde chica te imponen <b>roles de género</b> (cuidar un bebé, ser ama de casa).</li>
    <li>Estereotipo de belleza <b>muy cerrado</b>: rubia, alta, blanca, flaca.</li>
    <li>En los <b>90</b> ese discurso empieza a problematizarse (época de las cirugías). Los <b>movimientos feministas</b> piden derechos, igualdad y más representación: un discurso <b>contra lo hegemónico</b> que cambia el relato (hasta llegar a la película).</li>
  </ul>

  <h4>Los tres actos del diseño audiovisual</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Acto</th><th>Qué implica</th><th>Ej.: un film sobre la crisis de 2001</th></tr>
    <tr><td>Percepción</td><td><b>Observar críticamente</b> el entorno: detectar conflictos, silencios, señales y relaciones sociales.</td><td>La falta de trabajo: mostrar la problemática.</td></tr>
    <tr><td>Concreción</td><td><b>Dar forma sensible y material</b> a una idea. No basta con "tener una idea": encuadres, escalas, iluminación, color, voz, música, ritmos.</td><td>Los ángulos, la luz, la música.</td></tr>
    <tr><td>Mediación</td><td><b>Reconocer la interpretación social</b> de las imágenes. Los públicos interpretan, discuten y resignifican; el sentido no equivale a la intención del autor.</td><td>Cómo circula y cómo lo recibe el público.</td></tr>
  </table></div>
  <div class="tip"><b>Circulación, dispositivo y recepción transforman el mensaje</b> (conexión directa con Verón).</div>
  `
},
{
  id:'a2', mod:'Audiovisual', t:'Ciudad, medios y documental', s:'La ciudad como personaje · Volnovich · montaje',
  body:`
  <h4>La ciudad es un campo de intervención</h4>
  <p>La ciudad reúne <b>historias, desigualdades, memorias y disputas</b>. El audiovisual puede registrar esas capas, narrarlas o reconfigurarlas.</p>
  <ul>
    <li>La ciudad puede actuar como <b>personaje / protagonista</b>.</li>
    <li>El espacio funciona como <b>signo, escenario y relación social</b>.</li>
    <li><b>Una locación nunca es solo un fondo neutro.</b></li>
  </ul>
  <figure class="fg"><img src="img/midnight-in-paris.png" alt="Afiche de Midnight in Paris">
  <figcaption>Midnight in Paris: París no es fondo, es protagonista del relato.</figcaption></figure>
  <p>El diseñador es como un <b>nómada crítico</b>: persigue la percepción y el <b>clima de época</b> y se para frente al mundo con una visión.</p>
  <div class="tscroll"><table class="t">
    <tr><th>Hacer-ver</th><th>Hacer-saber</th><th>Hacer-hacer</th></tr>
    <tr><td>Otorgar <b>visibilidad</b>.</td><td>Organizar <b>conocimiento</b>.</td><td>Orientar <b>acciones</b>.</td></tr>
  </table></div>
  <p style="font-size:13px;color:var(--txt3)">(Las tres operaciones se citan en clase a partir de Ledesma.)</p>

  <h4>Los medios: espectáculo y circulación</h4>
  <p>Hay que ser conscientes del <b>poder de las imágenes y los discursos mediáticos</b>: no solo informan, <b>modelan la realidad</b>.
  Ciertas escenas televisivas se terminaban <b>normalizando</b> y marcaban una forma de pensar.</p>
  <figure class="fg"><img src="img/medios-espectaculo.png" alt="Escenas televisivas normalizadas">
  <figcaption>Escenas que en su momento se mostraban como espectáculo y hoy se leen como violencia.</figcaption></figure>

  <h4>Yamila Volnovich — cine documental</h4>
  <ul>
    <li>La imagen documental <b>no es un simple espejo</b> de los hechos: es una <b>construcción situada</b> que selecciona, encuadra, organiza y propone interpretaciones.</li>
    <li>No muestra la realidad tal cual es, sino <b>una versión</b> de ella; retrata las problemáticas de la época y busca hacerlas visibles.</li>
    <li>Las imágenes documentales son <b>vehículos de poder</b>: forman nuestra comprensión del mundo.</li>
  </ul>
  <div class="key"><b>Montaje performativo</b>: la forma en que se organizan las imágenes puede <b>transformar la realidad</b> y reconfigurar el significado de los eventos.
  Ej.: la propaganda nazi construía el relato (ángulos, multitudes) para hacer creer que todos apoyaban a Hitler.</div>
  <p>Los relatos en EE.UU. también cambiaron: del <b>héroe que salva a todos</b> a películas que critican el capitalismo y muestran la decadencia, con la <b>ciudad como parte del relato</b>.</p>
  `
},
{
  id:'a3', mod:'Audiovisual', t:'Casetti: cómo analizar un film', s:'Componentes · 3 niveles · estructura',
  body:`
  <p><b>Francesco Casetti</b> propone <b>desarmar un film para comprenderlo</b>. Analizar es identificar cómo
  personajes, espacios, acontecimientos, transformaciones y relaciones formales <b>producen sentido</b>.</p>

  <h4>Los componentes</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Componente</th><th>Qué mirar</th></tr>
    <tr><td>Personajes + ambientes</td><td>El lugar <b>condiciona</b> al personaje (ej.: un lugar que lo vuelve loco y lo lleva a la violencia).</td></tr>
    <tr><td>Acontecimientos</td><td>Un suceso puede terminar <b>cambiando la trama</b> o al personaje.</td></tr>
    <tr><td>Transformaciones</td><td>Cómo <b>cambia</b> el personaje a lo largo del relato.</td></tr>
  </table></div>

  <h4>Los tres niveles de análisis</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Nivel</th><th>Qué es</th><th>Ej.: El origen (Inception)</th></tr>
    <tr><td>Fenomenológico</td><td>Ver lo que pasa de manera <b>concreta</b>: los hechos más evidentes.</td><td>Cobb (DiCaprio) intenta plantar una idea en la mente de un objetivo.</td></tr>
    <tr><td>Formal</td><td>Identificar las <b>estructuras narrativas</b> y cómo se presentan (ángulos, luces, reglas, roles).</td><td>Las reglas del sueño, los roles y la articulación de los niveles.</td></tr>
    <tr><td>Abstracto</td><td>Ver cómo todo se <b>conecta</b>: los temas y conceptos más amplios.</td><td>Tiempo, percepción y realidad relativa; culpa y perdón.</td></tr>
  </table></div>

  <h4>La estructura narrativa</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Inicio</th><th>Desarrollo</th><th>Final</th></tr>
    <tr><td>Presenta una situación, un conflicto o un <b>desequilibrio</b>.</td>
        <td>Organiza <b>acontecimientos, decisiones y transformaciones</b>.</td>
        <td><b>Cierra, altera o deja abierta</b> la situación narrativa.</td></tr>
  </table></div>
  `
},

/* ===================== TRANSMEDIA ===================== */
{
  id:'t1', mod:'Transmedia', t:'Narrativas transmedia (Scolari)', s:'Muchos medios + participación',
  body:`
  <p><b>Carlos Scolari</b> es un investigador <b>argentino</b> radicado en España. Analiza las nuevas narrativas y se pregunta
  si ya existían en otras épocas.</p>
  <div class="key">Una <b>narrativa transmedia</b> es un relato donde la historia se <b>despliega a través de múltiples medios y plataformas</b>,
  y en el cual una parte de los consumidores <b>asume un rol activo</b> en ese proceso de expansión.<br>
  = <b>expansión del relato en varios medios</b> + <b>colaboración de los usuarios</b> (si no intervienen, no se logra).</div>

  <h4>Cómo funciona</h4>
  <ul>
    <li>Cada medio hace <b>lo que mejor sabe hacer</b>: puede surgir de un libro y pasar a una película, serie o videojuego.</li>
    <li>No todos cuentan lo mismo: es el <b>mismo universo</b> contado desde otro lado. <i>"No debés ver la película para entender el videojuego, y viceversa."</i></li>
    <li>Es una <b>producción integrada</b>: los medios se apoyan entre sí según sus potencialidades.</li>
    <li>Se distribuye en una gama de dispositivos (computadoras, celulares, TV…).</li>
    <li>El uso de más de un medio debe servir a las necesidades del tema, historia u objetivo del proyecto.</li>
  </ul>

  <h4>Canon vs. fandom</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Canon (modelo viejo)</th><th>Fandom (modelo nuevo)</th></tr>
    <tr><td>Todo se pensaba <b>por separado</b> (un libro, una película) y solo importaba la ganancia.</td>
        <td>El contenido <b>lo generan también los usuarios</b>, que proponen ideas.</td></tr>
    <tr><td>La industria cultural definía qué tenía éxito; el público no tenía rol ni opinión.</td>
        <td>Todo se planea <b>con estrategia</b> para que se conecte.</td></tr>
  </table></div>

  <h4>Componentes fundamentales</h4>
  <div class="tscroll"><table class="t">
    <tr><th>Componente</th><th>Qué es</th></tr>
    <tr><td>Trama</td><td>De una trama principal se amplía (nuevos <b>spin-off</b>).</td></tr>
    <tr><td>Universos</td><td>Identidad muy fuerte y muy atractivos visualmente.</td></tr>
    <tr><td>Soportes</td><td>Combinan <b>digitales</b> (plataformas, software) y <b>materiales</b> (libros, historietas, juguetes).</td></tr>
    <tr><td>Participación de los usuarios</td><td>La creación no se centra solo en el autor, sino en lo que los usuarios esperan o quieren ver.</td></tr>
  </table></div>

  <h4>Ejemplos</h4>
  <ul>
    <li><b>Star Wars</b>: nadie la quería producir, fue un éxito y terminó con series, cómics, videojuegos.</li>
    <li><b>Los superhéroes</b> (Batman): nacen en el cómic y hoy tienen películas, series, juegos y muñecos.</li>
    <li><b>Matrix</b> y <b>Harry Potter</b>: universos que se diversifican.</li>
    <li><b>Piratas del Caribe</b>: al revés, nace de un <b>juego de Disney</b> y de ahí salen las películas.</li>
    <li>¿Y más atrás? <b>La religión</b> también funciona como narrativa transmedia: del libro salen relatos, imágenes, series… algo que se naturaliza.</li>
  </ul>
  `
},
{
  id:'t2', mod:'Transmedia', t:'Las 10 leyes de la interfaz', s:'Scolari · la interfaz como mediación',
  body:`
  <p>La <b>interfaz</b> es la interacción que permite la comunicación entre un usuario y un sistema, <b>digital o físico</b>.
  Es una <b>mediación</b>: cómo te apropiás de algo. <b>Todos los objetos tienen interfaces</b>, pensadas para que el usuario entienda.</p>
  <div class="tscroll"><table class="t">
    <tr><th>Ley</th><th>Idea</th><th>Ejemplo de clase</th></tr>
    <tr><td>1. La interfaz es el lugar de la interacción</td><td>Diseñadas para parecer <b>naturales</b>, pero construidas para <b>guiar</b> nuestras interacciones.</td><td>Entrás al aula y vas directo a tu asiento.</td></tr>
    <tr><td>2. Las interfaces no son transparentes</td><td>Siempre hay una <b>jerarquía de poder</b> oculta tras un sistema de reglas. <b>Ninguna interfaz es neutral</b>.</td><td>Ser alumno: estar callado y escuchar.</td></tr>
    <tr><td>3. Conforman un ecosistema</td><td>Se relacionan entre sí; pueden armar <b>círculos cerrados</b> a propósito.</td><td>Si tenés una Mac, necesitás otros productos de la marca.</td></tr>
    <tr><td>4. Las interfaces evolucionan</td><td>Nunca terminan de morir: <b>se modifican</b> con el tiempo.</td><td>De la carreta al auto (quedaron las ruedas); de la piedra y el papiro al e-book.</td></tr>
    <tr><td>5. Coevolucionan con sus usuarios</td><td>Los usuarios <b>ajustan su comportamiento</b> y las interfaces se modifican para nuevas demandas.</td><td>El teclado evolucionó para facilitar al usuario.</td></tr>
    <tr><td>6. No se extinguen, se transforman</td><td>Los elementos del pasado se <b>reciclan</b> en nuevas tecnologías.</td><td>Teclado físico del celular → teclado táctil.</td></tr>
    <tr><td>7. Si no puede hacer algo, lo simulará</td><td>Simulan capacidades para dar una experiencia <b>coherente y completa</b>.</td><td>—</td></tr>
    <tr><td>8. Sometidas a las leyes de la complejidad</td><td>Necesitan que <b>alguien te enseñe</b>; cuando lo entendés, sabés qué hacer.</td><td>—</td></tr>
    <tr><td>9. Diseño y uso son prácticas políticas</td><td>Reflejan decisiones que van más allá de la estética: <b>posturas culturales y políticas</b>.</td><td>Sacar un turno de salud por app; bancos que excluyen a jubilados de PAMI.</td></tr>
    <tr><td>10. La interfaz es el lugar de la innovación</td><td>Donde se materializan <b>nuevas formas de interacción</b>.</td><td>Asistentes por voz (Siri, Alexa, Google Assistant), la IA.</td></tr>
  </table></div>
  <div class="tip"><b>Truco para memorizar:</b> 1-2 qué es (lugar de interacción, no transparente) · 3-6 cómo vive en el tiempo
  (ecosistema, evoluciona, coevoluciona, se transforma) · 7-8 cómo funciona (simula, es compleja) · 9-10 qué implica (política, innovación).</div>
  `
},
{
  id:'t3', mod:'Transmedia', t:'Simondon: técnica y cultura', s:'La tecnología como extensión',
  body:`
  <p>Para <b>Gilbert Simondon</b>, <b>la técnica nace como una necesidad</b>.</p>
  <ul>
    <li>Con el progreso técnico se pensaba la relación con las máquinas como <b>amo y esclavo</b>; la ciencia ficción alimentó el miedo a que <b>se rebelen</b> y nos ataquen. Había mucha <b>desconfianza</b>.</li>
    <li>Simondon lo piensa de forma <b>amigable</b>: la técnica es una <b>condición del ser humano</b>.</li>
    <li>La tecnología se vuelve una <b>extensión</b> de nosotros, como una <b>prótesis</b>: ya no podemos vivir sin ella.</li>
    <li>Antes se pensaba técnica por un lado y persona por otro (algo externo). Hoy la tecnología está <b>dentro nuestro</b> (vacunas, prótesis): <b>somos cuerpos tecnológicos</b>.</li>
  </ul>
  <div class="tscroll"><table class="t">
    <tr><th>Interfaces dinámicas</th><th>Integración cultural</th></tr>
    <tr><td>Deben verse como elementos dinámicos que <b>median y se adaptan a las necesidades humanas</b>, no solo como procesos automáticos.</td>
        <td>Deben integrarse <b>culturalmente</b>, no como herramientas aisladas: la tecnología se vuelve parte de nuestra identidad y permite una relación <b>armónica</b> humano-máquina.</td></tr>
  </table></div>
  `
}
];

/* ---------------- 2. FLASHCARDS ---------------- */
const CARDS = [
/* Peirce */
{c:'Peirce',q:'¿Quién fue Peirce y cuál es su pregunta central?',a:'Filósofo, lógico y matemático <b>estadounidense</b>, padre del <b>pragmatismo</b>. No pregunta solo qué significa un signo sino <b>cómo algo llega a funcionar como signo</b>; le interesa cómo se produce el conocimiento.'},
{c:'Peirce',q:'"Conocer es…" ¿qué, según Peirce?',a:'<b>Inferir.</b> El pensamiento no copia el mundo: lo <b>interpreta</b> a partir de signos, hipótesis y saberes previos.'},
{c:'Peirce',q:'Ejemplo del humo: ¿cómo funciona la inferencia?',a:'Veo <b>humo</b> → hipótesis: <b>hay fuego</b> → <b>actúo</b> según esa inferencia.'},
{c:'Peirce',q:'¿Cuáles son los 3 elementos del signo para Peirce?',a:'<b>Representamen</b> (algo: la forma que aparece) · <b>Objeto</b> (de algo: aquello a lo que remite) · <b>Interpretante</b> (para alguien: el efecto de sentido).'},
{c:'Peirce',q:'¿Qué es el representamen?',a:'La forma en que aparece el signo: lo que percibimos con <b>todos los sentidos</b>. Puede ser imagen, palabra, sonido, olor, textura, gesto, interfaz, objeto o espacio.'},
{c:'Peirce',q:'¿Qué es el interpretante?',a:'El <b>efecto de sentido</b>: el proceso interno que hacemos para interpretar el signo. No es una persona, es la interpretación.'},
{c:'Peirce',q:'¿Cuáles son las 3 condiciones para que algo sea signo?',a:'1. <b>Cualidades reconocibles y distintivas</b>.<br>2. <b>Un objeto</b> al que representa.<br>3. <b>Relación triádica completa</b>: reconocido mediante un interpretante (condición <b>suficiente</b>).'},
{c:'Peirce',q:'Objeto inmediato vs. objeto dinámico',a:'<b>Inmediato</b>: lo que esta pieza hace aparecer del objeto (Messi como jugador).<br><b>Dinámico</b>: el concepto amplio con saberes previos y experiencia cultural (Messi tiene familia, historia).'},
{c:'Peirce',q:'¿Cuáles son los 3 tipos de interpretante?',a:'<b>Inmediato</b>: la posibilidad de ser entendido.<br><b>Dinámico</b>: la interpretación concreta en una situación.<br><b>Final o normal</b>: la interpretación estabilizada en una comunidad.'},
{c:'Peirce',q:'¿Qué es la semiosis ilimitada?',a:'El proceso infinito de interpretación: el <b>interpretante se vuelve un nuevo representamen</b> que genera otro interpretante. Nunca paramos de interpretar.'},
{c:'Peirce',q:'El carpincho: ¿cómo es la cadena de semiosis del ejemplo?',a:'Carpincho → <b>mascota</b> → <b>fidelidad</b> → <b>un amigo</b> (alguien que está incondicionalmente). Cada interpretante se vuelve representamen.'},
{c:'Peirce',q:'Olor a lluvia: representamen, objeto e interpretante',a:'R: <b>olor a lluvia</b> · O: <b>va a llover</b> · I: <b>¿traje paraguas?</b>'},
{c:'Peirce',q:'Si la semiosis es ilimitada, ¿toda lectura vale igual?',a:'<b>No.</b> La interpretación no queda encerrada en una sola lectura, pero se apoya en <b>saberes, hábitos y contextos</b>.'},
{c:'Peirce',q:'¿Qué es la PRIMERIDAD?',a:'La <b>cualidad posible</b>: sensación, color, tono, textura, atmósfera. Todavía no hay hecho ni regla. Ej.: <b>el rojo como color</b>.'},
{c:'Peirce',q:'¿Qué es la SEGUNDIDAD?',a:'El <b>hecho, la irrupción</b>: algo ocurre, resiste, marca, deja huella o produce contacto. Ej.: <b>una luz roja encendida</b>.'},
{c:'Peirce',q:'¿Qué es la TERCERIDAD?',a:'La <b>ley, el hábito, la convención</b>: la regla que orienta acciones. Ej.: <b>rojo = detenerse</b>.'},
{c:'Peirce',q:'¿Cuáles son las 3 tricotomías (filas) y qué pregunta cada una?',a:'<b>Representamen</b>: ¿cómo aparece? (cualisigno, sinsigno, legisigno)<br><b>Objeto</b>: ¿cómo se vincula? (ícono, índice, símbolo)<br><b>Interpretante</b>: ¿qué interpretación produce? (rema, dicente, argumento)'},
{c:'Peirce',q:'¿Qué es un CUALISIGNO? Ejemplo',a:'Una <b>cualidad pura</b> que funciona como signo sin manifestarse en un objeto. Ej.: <b>la "rojez"</b> en abstracto.'},
{c:'Peirce',q:'¿Qué es un SINSIGNO? Ejemplo',a:'Una <b>ocurrencia singular</b>, única y concreta. Ej.: <b>una mancha de pintura roja</b> derramada en el piso.'},
{c:'Peirce',q:'¿Qué es un LEGISIGNO? Ejemplo',a:'Una <b>ley o patrón general</b> que se repite y se reconoce. Ej.: <b>la letra "A"</b> en cualquier tipografía.'},
{c:'Peirce',q:'¿Qué es un ÍCONO? Ejemplo',a:'Se relaciona con su objeto por <b>semejanza</b>. Ej.: una <b>foto o dibujo realista</b> de un perro.'},
{c:'Peirce',q:'¿Qué es un ÍNDICE? Ejemplo',a:'Se relaciona por <b>conexión física, causal o de coexistencia</b>: indica que algo estuvo ahí. Ej.: <b>huella, humo, un perfume</b> que te recuerda a alguien.'},
{c:'Peirce',q:'¿Qué es un SÍMBOLO? Ejemplo',a:'Se relaciona por <b>convención</b> o acuerdo social aprendido. Ej.: <b>la palabra "PERRO"</b>, los saludos de cada país, <b>los logos</b>.'},
{c:'Peirce',q:'¿Qué es un REMA? Ejemplo',a:'Interpretante que presenta cualidades de un <b>objeto posible</b>; deja la interpretación <b>abierta</b>. Ej.: un boceto abstracto o notas sueltas que evocan misterio.'},
{c:'Peirce',q:'¿Qué es un DICENTE? Ejemplo',a:'Interpretante que afirma algo que puede ser <b>verdadero o falso</b>. Ej.: <b>"Velocidad máxima 60 km/h"</b>, un termómetro que marca 38 °C.'},
{c:'Peirce',q:'¿Qué es un ARGUMENTO? Ejemplo',a:'Interpretante que funciona como <b>razonamiento</b> que conduce a una conclusión. Ej.: un <b>silogismo</b> o un <b>manual de instrucciones</b> paso a paso.'},
{c:'Peirce',q:'Según la clase, ¿qué tipo de signo son todos los logos?',a:'<b>Símbolos</b>: funcionan por convención.'},
{c:'Peirce',q:'¿En qué se diferencia el signo de Peirce del de Saussure?',a:'Saussure: <b>diádico</b> (significante + significado) dentro de un sistema. Peirce: <b>triádico</b> (representamen + objeto + interpretante) y un proceso <b>abierto e ilimitado</b> de semiosis.'},

/* Benveniste */
{c:'Benveniste',q:'¿Quién fue Benveniste?',a:'Lingüista <b>francés</b> (1902-1976), ampliador de Saussure y <b>padre de la teoría de la enunciación</b>. Le interesa cómo el lenguaje <b>construye al sujeto que habla</b>.'},
{c:'Benveniste',q:'¿Qué "se le olvidó" a Saussure según Benveniste?',a:'Que el lenguaje <b>nos construye</b>: hay que poner el énfasis en <b>quién habla y a quién le habla</b> (giro lingüístico).'},
{c:'Benveniste',q:'Enunciado vs. enunciación',a:'<b>Enunciado</b>: lo dicho, lo explícito — <b>¿qué dice?</b><br><b>Enunciación</b>: lo no dicho de lo dicho, el modo de decir — <b>¿desde dónde lo dice?</b>'},
{c:'Benveniste',q:'¿Qué es el discurso para Benveniste?',a:'Una instancia que emerge de la combinación de <b>enunciado + enunciación</b>. Está formado por muchos enunciados (ej.: una clase).'},
{c:'Benveniste',q:'¿Qué es la enunciación?',a:'El <b>acto situado</b> que produce un enunciado. No es "lo dicho": es el modo de decir, la voz, el destinatario imaginado, la valoración y la posición ideológica.'},
{c:'Benveniste',q:'Enunciador y enunciatario',a:'<b>Enunciador</b>: quien inicia, el lugar desde donde se habla (el diseñador).<br><b>Enunciatario</b>: el interlocutor construido, quien recibe.'},
{c:'Benveniste',q:'¿Cuáles son los 3 elementos de todo enunciado?',a:'<b>Contenido temático</b> (de qué se habla) · <b>Estructuración</b> (cómo se organiza) · <b>Estilo</b> (los recursos; donde se inscribe la subjetividad).'},
{c:'Benveniste',q:'¿Por qué el estilo es tan importante?',a:'Es la <b>única posibilidad de inscribir nuestra subjetividad</b>. No es fijo: es cómo usás y organizás los materiales (con ver el diseño sabés de quién es).'},
{c:'Benveniste',q:'"No existe un yo sin un…"',a:'<b>Tú.</b> El acto de comunicación siempre necesita un otro.'},
{c:'Benveniste',q:'¿Cuáles son los 3 argumentos de Benveniste?',a:'1. La <b>estructura de diálogo</b> (incluso hablando con uno mismo).<br>2. Las <b>deixis</b> (relaciones espaciales y temporales).<br>3. La <b>expresión de la temporalidad</b> (un aquí y ahora).'},
{c:'Benveniste',q:'¿Qué son las deixis?',a:'Adverbios y demostrativos que organizan las relaciones <b>espaciales y temporales</b> de la enunciación: aquí, allá, este, ahora, ayer.'},
{c:'Benveniste',q:'Las 4 preguntas del lugar de habla',a:'<b>¿Quién?</b> enunciador · <b>¿A quién?</b> enunciatario · <b>¿Cuándo?</b> temporalidad · <b>¿Dónde?</b> deixis espacial.'},
{c:'Benveniste',q:'Negación, ironía y cita: ¿qué tienen en común?',a:'Las tres hacen <b>aparecer otras voces</b> en el discurso: la negación pone en escena una voz previa; la ironía hace resonar una voz ajena para tomar distancia; la cita retoma un enunciado ajeno y lo reubica.'},

/* Bajtín */
{c:'Bajtín',q:'¿Quién fue Bajtín?',a:'Lingüista, filósofo y profesor <b>ruso</b> (1895-1975). Vivió la Revolución Rusa, estuvo preso y su obra se conoció tras la caída del muro.'},
{c:'Bajtín',q:'Puente Benveniste → Bajtín',a:'Del <b>"yo-tú"</b> al <b>diálogo social</b>. Para Bajtín la presencia del otro es constitutiva y nuestra habla está "contaminada" por otras voces.'},
{c:'Bajtín',q:'¿Por qué para Bajtín "siempre hablamos con palabras ajenas"?',a:'Porque nunca creamos palabras: el enunciado tiene <b>ecos de discursos anteriores</b>. Al adquirir un signo nos llevamos también <b>su ideología</b>.'},
{c:'Bajtín',q:'Heteroglosia',a:'La <b>lengua</b> está construida por <b>muchas voces</b>: distintas clases sociales, religiones, profesiones.'},
{c:'Bajtín',q:'Polifonía',a:'Las <b>múltiples voces que aparecen en mi discurso</b>: la palabra no es de nadie, es ajena. En diseño: se diseña dentro de una <b>tradición</b>.'},
{c:'Bajtín',q:'Los tres estados de la palabra',a:'<b>De nadie</b>: diccionario, código disponible.<br><b>Ajena</b>: otros la usaron y la cargaron de valor.<br><b>Propia</b>: la tomo y la hago decir algo en esta situación.'},
{c:'Bajtín',q:'Oración vs. enunciado',a:'<b>Oración</b>: unidad mínima de la <b>lengua</b>.<br><b>Enunciado</b>: unidad de la <b>comunicación</b>.'},
{c:'Bajtín',q:'¿Cuáles son los 5 principios del enunciado?',a:'<b>Cambio de sujetos</b> · <b>Conclusividad</b> · <b>Destinatario</b> · <b>Entonación expresiva</b> · <b>Ecos</b>.'},
{c:'Bajtín',q:'Principio de conclusividad',a:'El enunciado parece <b>"cerrado"</b> y eso <b>habilita una respuesta</b> (termina la clase y te vas).'},
{c:'Bajtín',q:'Principio de entonación expresiva',a:'Marca la <b>valoración</b>: ironía, solemnidad, cercanía, urgencia.'},
{c:'Bajtín',q:'¿Qué es la cadena dialógica?',a:'Todo enunciado es un <b>eslabón</b> que responde a enunciados anteriores y será base de otros futuros. <b>Un diseño es un enunciado.</b>'},
{c:'Bajtín',q:'Definición de géneros discursivos',a:'<b>Tipos relativamente estables de enunciados</b>, producidos en una situación concreta, orientados a un destinatario, que comparten <b>contenido temático, estilo y estructura</b>.'},
{c:'Bajtín',q:'Ciclo de vida de los géneros',a:'<b>Nacen</b> en prácticas sociales · <b>persisten</b> porque facilitan expectativas de lectura · <b>cambian</b> con prácticas, tecnologías y públicos · <b>desaparecen</b> o se vuelven memoria cultural.'},
{c:'Bajtín',q:'Géneros primarios',a:'<b>Simples</b>, espontáneos, vínculo inmediato con la situación, generalmente <b>orales</b>. Ej.: conversación, saludo, pedido, disculpa.'},
{c:'Bajtín',q:'Géneros secundarios',a:'<b>Complejos</b>, surgen en prácticas culturales elaboradas y <b>absorben y reelaboran a los primarios</b>. Ej.: novela, informe, campaña, audiovisual.'},
{c:'Bajtín',q:'Ejemplo de un género que desapareció',a:'La <b>carta de pedida de mano</b>: era un documento legal; cambió la práctica social y el género desapareció.'},

/* Verón */
{c:'Verón',q:'¿Quién fue Eliseo Verón y qué le interesa?',a:'Filósofo y sociólogo <b>argentino</b>. Le interesa <b>cómo se produce y circula el sentido social</b>: cómo se instalan sentidos y cómo los discursos cambian la sociedad.'},
{c:'Verón',q:'¿Qué es la semiosis social?',a:'La teoría de los discursos sociales: todo discurso es un texto <b>encadenado con otros discursos sociales</b>.'},
{c:'Verón',q:'Los 3 desplazamientos de Verón',a:'Del <b>signo al discurso</b> · del <b>mensaje a la circulación</b> · del <b>significado al sentido social</b>.'},
{c:'Verón',q:'¿Cómo cambia la pregunta de Saussure a Verón?',a:'De <b>¿qué significa?</b> a <b>¿bajo qué condiciones puede significar así?</b>'},
{c:'Verón',q:'¿Qué le critica Verón al enfoque de Saussure?',a:'Que deja en segundo plano la <b>historicidad, la circulación y el cambio social</b> del sentido.'},
{c:'Verón',q:'¿Qué toma y qué desplaza Verón de Peirce?',a:'<b>Toma</b> la semiosis como proceso abierto y relacional.<br><b>Desplaza</b> el análisis a discursos concretos, condiciones sociales de producción y modos de reconocimiento.'},
{c:'Verón',q:'El esquema básico de Verón',a:'<b>Condiciones de producción → DISCURSO → Condiciones de reconocimiento</b>. Producción y reconocimiento hacen sistema.'},
{c:'Verón',q:'¿Qué son las gramáticas de producción y reconocimiento?',a:'Las <b>reglas</b> (operaciones de sentido) que regulan la <b>generación</b> de un discurso y su <b>lectura</b>.'},
{c:'Verón',q:'Condiciones de producción: 6 dimensiones',a:'<b>Historia</b> · <b>Economía</b> · <b>Tecnologías</b> · <b>Instituciones</b> · <b>Proyecto</b> · <b>Discursos previos</b>.'},
{c:'Verón',q:'Condiciones de reconocimiento',a:'<b>Competencias, memoria, posición social, expectativas, usos y contexto cultural.</b> Los públicos no reciben pasivamente.'},
{c:'Verón',q:'¿Dónde está el sentido para Verón?',a:'<b>No está "adentro" del objeto</b>: emerge de operaciones sociales, convenciones, memorias y posiciones de lectura.'},
{c:'Verón',q:'¿Qué es una huella?',a:'Una <b>marca de operaciones sociales</b> en el discurso que permite <b>inferir relaciones</b> con discursos y condiciones que atraviesan la pieza.'},
{c:'Verón',q:'Los 6 tipos de huellas',a:'<b>Visuales</b> · <b>Materiales</b> · <b>Espaciales</b> · <b>Verbales</b> · <b>Sonoras</b> · <b>Interactivas</b>.'},
{c:'Verón',q:'"Un discurso es un punto de…"',a:'<b>Pasaje de sentido</b>: necesita otros discursos para producirse y, al circular, puede ser condición de producción de nuevos. No hay "origen puro".'},
{c:'Verón',q:'Los 4 movimientos para analizar un diseño',a:'<b>Delimitar</b> (¿cuál es el discurso?) · <b>Reconstruir</b> (¿qué lo hizo posible?) · <b>Leer huellas</b> (¿qué operaciones quedaron?) · <b>Comparar</b> (¿qué cambia al circular?).'},
{c:'Verón',q:'Ejemplo del logo de Nike',a:'El swoosh retoma <b>el ala de Niké, la diosa de la victoria</b>: un discurso previo como condición de producción.'},
{c:'Verón',q:'¿Qué es el contrato de lectura?',a:'La relación entre el discurso de un soporte y las <b>posiciones de lectura que propone</b>. Es implícito: lo que te mantiene enganchado.'},
{c:'Verón',q:'Contrato OBJETIVO',a:'Sin marcas de subjetividad; el enunciador se <b>borra</b>, cuantifica, informa. Relación: <b>"Esto es así."</b>'},
{c:'Verón',q:'Contrato PEDAGÓGICO',a:'<b>Asimetría</b>: uno sabe y orienta, el otro aprende o sigue instrucciones. Relación: <b>"Yo sé, te explico."</b>'},
{c:'Verón',q:'Contrato CÓMPLICE',a:'<b>Simetría</b>: reduce la distancia, comparte códigos y emociones, invita a participar. Relación: <b>"Vos y yo sabemos de qué hablamos."</b>'},
{c:'Verón',q:'¿Qué define el tipo de contrato?',a:'El <b>elemento dominante</b> de las estructuras enunciativas. Importa menos "qué se dice" que <b>"cómo se organiza el decir"</b>.'},
{c:'Verón',q:'¿El contrato de lectura es fijo?',a:'<b>No.</b> Un mismo enunciador puede cambiar de contrato según soporte, contexto y destinatario; un mismo diseño puede recibir lecturas opuestas al circular.'},
{c:'Verón',q:'Lector modelo (Eco)',a:'Figura <b>anticipada por la estrategia del texto</b>: un usuario ideal capaz de activar ciertas competencias. Pregunta: ¿qué lector supone este diseño?'},
{c:'Verón',q:'Textos abiertos vs. cerrados (Eco)',a:'<b>Abiertos</b>: múltiples interpretaciones, cooperación activa del lector.<br><b>Cerrados</b>: restringen la interpretación y diseñan con precisión la experiencia.'},

/* Audiovisual */
{c:'Audiovisual',q:'¿Qué es el documental como género discursivo?',a:'Un <b>discurso del hacer creer</b>: la construcción de la verdad. Selecciona, propone modos de mirar y puede reafirmar o cuestionar representaciones dominantes.'},
{c:'Audiovisual',q:'Valor semiótico de la imagen',a:'<b>Hacer ver, hacer creer y hacer hacer.</b> Por eso somos responsables al diseñar y usar imágenes.'},
{c:'Audiovisual',q:'Los 3 actos del diseño audiovisual',a:'<b>Percepción</b>: observar críticamente.<br><b>Concreción</b>: dar forma sensible y material.<br><b>Mediación</b>: reconocer la interpretación social.'},
{c:'Audiovisual',q:'¿Qué implica la MEDIACIÓN?',a:'Los públicos <b>interpretan, discuten y resignifican</b>: el sentido no equivale a la intención del autor. Circulación, dispositivo y recepción transforman el mensaje.'},
{c:'Audiovisual',q:'¿Por qué Barbie es ejemplo de estereotipo?',a:'Imponía un <b>modelo único</b> (rubia, alta, blanca, flaca) y roles de género. En los 90 y con los feminismos ese discurso hegemónico se problematiza y cambia.'},
{c:'Audiovisual',q:'La ciudad en el audiovisual',a:'Es un <b>campo de intervención</b>: reúne historias, desigualdades y disputas. Funciona como signo, escenario y relación social. <b>Una locación nunca es un fondo neutro.</b>'},
{c:'Audiovisual',q:'Hacer-ver / hacer-saber / hacer-hacer',a:'<b>Hacer-ver</b>: dar visibilidad · <b>Hacer-saber</b>: organizar conocimiento · <b>Hacer-hacer</b>: orientar acciones.'},
{c:'Audiovisual',q:'Volnovich: ¿qué es la imagen documental?',a:'<b>No es un espejo</b> de los hechos: es una <b>construcción situada</b> que selecciona, encuadra, organiza y propone interpretaciones. Las imágenes son <b>vehículos de poder</b>.'},
{c:'Audiovisual',q:'¿Qué es el montaje performativo?',a:'La forma en que se organizan las imágenes puede <b>transformar la realidad</b> y reconfigurar el sentido de los hechos (ej.: la propaganda nazi).'},
{c:'Audiovisual',q:'Casetti: los 3 niveles de análisis',a:'<b>Fenomenológico</b> (lo concreto, los hechos) · <b>Formal</b> (estructuras, ángulos, luces, reglas) · <b>Abstracto</b> (temas y conceptos amplios).'},
{c:'Audiovisual',q:'Casetti: componentes a observar en un film',a:'<b>Personajes + ambientes</b> · <b>Acontecimientos</b> · <b>Transformaciones</b>.'},
{c:'Audiovisual',q:'La estructura narrativa de un film',a:'<b>Inicio</b>: situación o desequilibrio · <b>Desarrollo</b>: acontecimientos y transformaciones · <b>Final</b>: cierra, altera o deja abierto.'},

/* Transmedia */
{c:'Transmedia',q:'¿Qué es una narrativa transmedia (Scolari)?',a:'Un relato que se <b>despliega en múltiples medios y plataformas</b> y en el que parte de los consumidores <b>asume un rol activo</b> en la expansión.'},
{c:'Transmedia',q:'¿Hace falta ver la película para entender el videojuego?',a:'<b>No.</b> Cada medio cuenta otra parte del mismo universo y hace lo que mejor sabe hacer.'},
{c:'Transmedia',q:'Canon vs. fandom',a:'<b>Canon</b>: todo por separado, la industria decide, público sin rol.<br><b>Fandom</b>: los usuarios generan contenido y proponen; todo se planea con estrategia.'},
{c:'Transmedia',q:'Los 4 componentes de una narrativa transmedia',a:'<b>Trama</b> · <b>Universos</b> · <b>Soportes</b> (digitales y materiales) · <b>Participación de los usuarios</b>.'},
{c:'Transmedia',q:'Ejemplos de transmedia de la clase',a:'Star Wars, Batman y los superhéroes, Matrix, Harry Potter, Piratas del Caribe (nace de un juego de Disney) e incluso <b>la religión</b>.'},
{c:'Transmedia',q:'¿Qué es una interfaz?',a:'La interacción que permite la comunicación entre un usuario y un sistema, <b>digital o físico</b>. Una <b>mediación</b>: cómo te apropiás de algo.'},
{c:'Transmedia',q:'Ley 1 y Ley 2 de la interfaz',a:'<b>1.</b> La interfaz es el <b>lugar de la interacción</b>.<br><b>2.</b> Las interfaces <b>no son transparentes</b>: ninguna es neutral.'},
{c:'Transmedia',q:'Ley 3 y Ley 4 de la interfaz',a:'<b>3.</b> Conforman un <b>ecosistema</b>.<br><b>4.</b> <b>Evolucionan</b>.'},
{c:'Transmedia',q:'Ley 5 y Ley 6 de la interfaz',a:'<b>5.</b> <b>Coevolucionan</b> con sus usuarios.<br><b>6.</b> <b>No se extinguen, se transforman</b>.'},
{c:'Transmedia',q:'Ley 7 y Ley 8 de la interfaz',a:'<b>7.</b> Si no puede hacer algo, <b>lo simulará</b>.<br><b>8.</b> Están sometidas a las <b>leyes de la complejidad</b>.'},
{c:'Transmedia',q:'Ley 9 y Ley 10 de la interfaz',a:'<b>9.</b> El diseño y uso de una interfaz son <b>prácticas políticas</b>.<br><b>10.</b> La interfaz es el <b>lugar de la innovación</b>.'},
{c:'Transmedia',q:'Simondon: ¿cómo piensa la técnica?',a:'La técnica <b>nace como necesidad</b> y es una <b>condición del ser humano</b>. La tecnología es una <b>extensión / prótesis</b>: somos cuerpos tecnológicos.'},
{c:'Transmedia',q:'Interfaces dinámicas e integración cultural',a:'<b>Dinámicas</b>: median y se adaptan a las necesidades humanas.<br><b>Integración cultural</b>: la tecnología se vuelve parte de nuestra identidad, relación armónica humano-máquina.'}
];

/* ---------------- 3. BANCO DE PREGUNTAS ---------------- */
const QUIZ = [
/* ===== Peirce ===== */
{m:'Peirce',sim:true,q:'¿Cuáles son los tres elementos del signo según Peirce?',
 o:['Significante, significado y referente','Representamen, objeto e interpretante','Emisor, mensaje y receptor','Enunciado, enunciación y discurso'],
 r:1,e:'El signo peirceano es triádico: representamen (algo), objeto (de algo) e interpretante (para alguien).'},
{m:'Peirce',q:'Para Peirce, "conocer es…"',
 o:['Copiar fielmente el mundo','Recordar','Inferir','Clasificar en un sistema de diferencias'],
 r:2,e:'El pensamiento no copia el mundo: lo interpreta a partir de signos, hipótesis y saberes previos. Conocer es inferir.'},
{m:'Peirce',q:'En el ejemplo "veo humo → hay fuego → actúo", ¿qué representa "hay fuego"?',
 o:['Una percepción pura','Una hipótesis (inferencia)','Un símbolo','Un género discursivo'],
 r:1,e:'Del humo percibido se infiere la hipótesis de que hay fuego, y se actúa según esa inferencia.'},
{m:'Peirce',q:'¿Qué es el interpretante?',
 o:['La persona que interpreta','El objeto real del mundo','El efecto de sentido que el signo produce','La materialidad del signo'],
 r:2,e:'No es una persona: es el efecto de sentido, el proceso interno de interpretación ("para alguien").'},
{m:'Peirce',q:'¿Cuál es la condición SUFICIENTE para que algo sea signo?',
 o:['Tener cualidades reconocibles','Remitir a un objeto','Que se complete la relación triádica mediante un interpretante','Ser una palabra'],
 r:2,e:'Las cualidades y el objeto son necesarios; la relación triádica completa, mediante un interpretante, es la condición suficiente.'},
{m:'Peirce',q:'"Messi tiene familia, una historia y una vida fuera de la cancha" corresponde al objeto…',
 o:['Inmediato','Dinámico','Final','Rema'],
 r:1,e:'El objeto dinámico es el concepto amplio con saberes previos y experiencia cultural. El inmediato es lo que la pieza hace aparecer (Messi jugador).'},
{m:'Peirce',q:'La interpretación estabilizada o probable en una comunidad de interpretación es el interpretante…',
 o:['Inmediato','Dinámico','Final o normal','Dicente'],
 r:2,e:'Inmediato = posibilidad de ser entendido · Dinámico = interpretación concreta · Final = la estabilizada en una comunidad.'},
{m:'Peirce',sim:true,q:'¿Qué es la semiosis ilimitada?',
 o:['Que un signo tiene un único significado fijo','Que el interpretante se vuelve un nuevo representamen en una cadena sin fin','Que no existen los signos','Que el signo une significante y significado'],
 r:1,e:'Nunca paramos de interpretar: cada interpretante puede convertirse en un nuevo representamen (carpincho → mascota → fidelidad → amigo).'},
{m:'Peirce',q:'En "olor a lluvia → va a llover → ¿traje paraguas?", "¿traje paraguas?" es el…',
 o:['Representamen','Objeto','Interpretante','Cualisigno'],
 r:2,e:'Olor a lluvia es el representamen, "va a llover" el objeto y la pregunta por el paraguas es el interpretante.'},
{m:'Peirce',q:'Si la semiosis es ilimitada, ¿todas las lecturas valen igual?',
 o:['Sí, cualquier interpretación es igual de válida','No: se apoyan en saberes, hábitos y contextos','Sí, porque el signo no tiene objeto','No, solo vale la del autor'],
 r:1,e:'La interpretación no queda encerrada en una sola lectura, pero no toda lectura vale igual.'},
{m:'Peirce',q:'"Una luz roja encendida" es un ejemplo de…',
 o:['Primeridad','Segundidad','Terceridad','Legisigno'],
 r:1,e:'Segundidad: el hecho, algo que ocurre e irrumpe. El rojo como color es Primeridad; rojo = frenar es Terceridad.'},
{m:'Peirce',q:'"Rojo = detenerse" corresponde a la…',
 o:['Primeridad','Segundidad','Terceridad','Semiosis ilimitada'],
 r:2,e:'Terceridad: la ley, el hábito, la convención que orienta acciones.'},
{m:'Peirce',q:'La Primeridad es…',
 o:['Una cualidad posible, sin hecho ni regla','Un hecho singular que irrumpe','Una ley o hábito','Un razonamiento completo'],
 r:0,e:'Sensación, color, tono, textura, atmósfera: la posibilidad pura.'},
{m:'Peirce',sim:true,q:'Una huella de pisadas en el barro es un…',
 o:['Ícono','Índice','Símbolo','Legisigno'],
 r:1,e:'Índice: conexión física o de coexistencia con su objeto; indica que algo estuvo ahí.'},
{m:'Peirce',q:'Una fotografía realista de un perro es un…',
 o:['Ícono','Índice','Símbolo','Dicente'],
 r:0,e:'Ícono: se relaciona con su objeto por semejanza.'},
{m:'Peirce',q:'La palabra escrita "PERRO" es un…',
 o:['Ícono','Índice','Símbolo','Sinsigno'],
 r:2,e:'Símbolo: no hay parecido ni causa, sino un acuerdo cultural.'},
{m:'Peirce',q:'Según la clase, todos los logos son…',
 o:['Íconos','Índices','Símbolos','Cualisignos'],
 r:2,e:'Funcionan por convención: son símbolos.'},
{m:'Peirce',q:'Un perfume que te recuerda a una persona funciona como…',
 o:['Ícono','Índice','Símbolo','Argumento'],
 r:1,e:'Índice: relación de contigüidad/coexistencia con aquello a lo que remite.'},
{m:'Peirce',q:'La letra "A" que reconocés en cualquier tipografía es un…',
 o:['Cualisigno','Sinsigno','Legisigno','Rema'],
 r:2,e:'Legisigno: un patrón general que se repite y se reconoce en casos particulares.'},
{m:'Peirce',q:'Una mancha de pintura roja derramada, única, en el piso es un…',
 o:['Cualisigno','Sinsigno','Legisigno','Símbolo'],
 r:1,e:'Sinsigno: una ocurrencia singular y concreta.'},
{m:'Peirce',q:'La "rojez" en abstracto, antes de estar pintada en algo, es un…',
 o:['Cualisigno','Sinsigno','Legisigno','Índice'],
 r:0,e:'Cualisigno: una cualidad pura que funciona como signo.'},
{m:'Peirce',q:'Un cartel "Velocidad máxima 60 km/h" produce un interpretante…',
 o:['Rema','Dicente','Argumento','Inmediato'],
 r:1,e:'Dicente: afirma algo sobre un estado de cosas que puede ser verdadero o falso.'},
{m:'Peirce',q:'Un manual de instrucciones que te lleva paso a paso a una conclusión es un…',
 o:['Rema','Dicente','Argumento','Ícono'],
 r:2,e:'Argumento: razonamiento complejo que induce al intérprete a una conclusión.'},
{m:'Peirce',q:'Un boceto abstracto que te hace imaginar una atmósfera de misterio es un…',
 o:['Rema','Dicente','Argumento','Legisigno'],
 r:0,e:'Rema: presenta cualidades de un objeto posible y deja la interpretación abierta.'},
{m:'Peirce',q:'La tricotomía del OBJETO responde a la pregunta…',
 o:['¿Cómo aparece el signo?','¿Cómo se vincula con lo que representa?','¿Qué interpretación produce?','¿Quién habla?'],
 r:1,e:'Objeto → ícono, índice, símbolo. Representamen → ¿cómo aparece? Interpretante → ¿qué interpretación produce?'},

/* ===== Enunciación ===== */
{m:'Enunciación',sim:true,q:'Para Benveniste, el ENUNCIADO es…',
 o:['El modo de decir','Lo dicho: lo explícito, el tema','El destinatario imaginado','La posición ideológica'],
 r:1,e:'Enunciado = ¿qué dice? Enunciación = ¿desde dónde lo dice?'},
{m:'Enunciación',q:'"Lo no dicho de lo dicho": el modo de decir, la voz y la posición ideológica es…',
 o:['El enunciado','La enunciación','La oración','El género'],
 r:1,e:'La enunciación es el acto situado que produce un enunciado.'},
{m:'Enunciación',q:'¿Qué le "faltó" a Saussure según Benveniste?',
 o:['Estudiar la lengua como sistema','Pensar que el lenguaje construye al sujeto: quién habla y a quién','Distinguir significante y significado','Estudiar los signos visuales'],
 r:1,e:'Benveniste pone el énfasis en quién habla y a quién le habla (giro lingüístico).'},
{m:'Enunciación',q:'¿Cuáles son los tres elementos que todo enunciado tiene?',
 o:['Contenido temático, estructuración y estilo','Emisor, canal y receptor','Ícono, índice y símbolo','Inicio, desarrollo y final'],
 r:0,e:'De qué se habla, cómo se organiza y con qué recursos (el estilo, donde se inscribe la subjetividad).'},
{m:'Enunciación',q:'Para Benveniste, ¿cuál es la única posibilidad de inscribir nuestra subjetividad?',
 o:['El contenido temático','El estilo','La estructura','La deixis'],
 r:1,e:'El estilo: cómo usás y organizás los materiales. Con ver el diseño sabés de quién es.'},
{m:'Enunciación',q:'"Aquí, allá, este, ahora, ayer" son…',
 o:['Géneros discursivos','Deixis','Huellas sonoras','Cualisignos'],
 r:1,e:'Las deixis organizan las relaciones espaciales y temporales de la enunciación.'},
{m:'Enunciación',q:'¿Cuál NO es uno de los tres argumentos de Benveniste?',
 o:['La estructura de diálogo','Las deixis','La expresión de la temporalidad','La semiosis ilimitada'],
 r:3,e:'La semiosis ilimitada es de Peirce.'},
{m:'Enunciación',q:'"¿A quién?" en el lugar de habla corresponde al…',
 o:['Enunciador','Enunciatario','Deixis espacial','Objeto dinámico'],
 r:1,e:'El enunciatario es el interlocutor construido.'},
{m:'Enunciación',q:'La forma que "hace resonar una voz ajena para tomar distancia" es la…',
 o:['Cita','Negación','Ironía','Conclusividad'],
 r:2,e:'Ironía. La negación pone en escena una voz previa; la cita retoma un enunciado ajeno y lo reubica.'},
{m:'Enunciación',sim:true,q:'Para Bajtín, la POLIFONÍA es…',
 o:['Las múltiples voces que aparecen en mi discurso','Un tipo de contrato de lectura','La unidad mínima de la lengua','El ruido de la comunicación'],
 r:0,e:'La palabra no es de nadie: está contaminada por otras voces. Heteroglosia es que la LENGUA está hecha de muchas voces.'},
{m:'Enunciación',q:'"La lengua está construida por muchas voces: clases sociales, religiones, profesiones" define la…',
 o:['Polifonía','Heteroglosia','Semiosis social','Conclusividad'],
 r:1,e:'Heteroglosia: la pluralidad de voces de la lengua. Polifonía: las voces dentro de un discurso concreto.'},
{m:'Enunciación',q:'Para Bajtín, al apropiarnos de un signo…',
 o:['Solo nos llevamos su significado','Nos llevamos la palabra, su significado y también su ideología','Creamos una palabra nueva','Eliminamos las voces anteriores'],
 r:1,e:'Siempre hablamos con palabras ajenas, cargadas de valor e ideología.'},
{m:'Enunciación',q:'La palabra que tomo y hago decir algo en esta situación, desde mi perspectiva, es la palabra…',
 o:['De nadie','Ajena','Propia','Primaria'],
 r:2,e:'De nadie = diccionario · Ajena = cargada por otros · Propia = la uso en mi situación.'},
{m:'Enunciación',q:'¿Cuál es la unidad de la COMUNICACIÓN para Bajtín?',
 o:['La oración','El enunciado','La palabra','El fonema'],
 r:1,e:'La oración es la unidad mínima de la lengua; el enunciado, la de la comunicación.'},
{m:'Enunciación',q:'"Parece cerrado y habilita una respuesta" describe el principio de…',
 o:['Cambio de sujetos','Conclusividad','Entonación expresiva','Ecos'],
 r:1,e:'Conclusividad (termina la clase y te vas).'},
{m:'Enunciación',q:'El principio del enunciado que "trae huellas de otros enunciados y géneros" es…',
 o:['Destinatario','Ecos','Cambio de sujetos','Conclusividad'],
 r:1,e:'Los ecos conectan el enunciado con su visión del mundo y con discursos anteriores.'},
{m:'Enunciación',sim:true,q:'Los géneros discursivos son…',
 o:['Reglas fijas e inmutables del lenguaje','Tipos relativamente estables de enunciados con tema, estilo y estructura compartidos','Las tres categorías de Peirce','Los tipos de contrato de lectura'],
 r:1,e:'Nacen en prácticas sociales, persisten, cambian y pueden desaparecer.'},
{m:'Enunciación',q:'¿Por qué persisten los géneros discursivos?',
 o:['Porque son obligatorios por ley','Porque facilitan expectativas de lectura','Porque no tienen estilo','Porque son orales'],
 r:1,e:'Te anticipan cómo leer (ej.: entrar a la cuenta del banco sin pensar cómo).'},
{m:'Enunciación',q:'Un saludo o un pedido en la verdulería es un género…',
 o:['Primario','Secundario','Objetivo','Transmedia'],
 r:0,e:'Simple, espontáneo, oral y con vínculo inmediato con la situación.'},
{m:'Enunciación',q:'Una campaña publicitaria o un audiovisual es un género…',
 o:['Primario','Secundario','Pedagógico','Cualisigno'],
 r:1,e:'Complejo, surge en prácticas culturales elaboradas y absorbe y reelabora géneros primarios.'},
{m:'Enunciación',q:'Para Bajtín, todo enunciado es…',
 o:['Un hecho aislado','Un eslabón en la cadena dialógica','Una oración','Un símbolo'],
 r:1,e:'Dialoga con enunciados anteriores y será base de los próximos. Un diseño es un enunciado.'},

/* ===== Verón ===== */
{m:'Verón',sim:true,q:'¿De qué parte Verón para su teoría?',
 o:['De qué significa un signo aislado','De cómo se produce y circula el sentido social','De la fonética','De la estructura de la lengua'],
 r:1,e:'Su teoría es la de la semiosis social: los discursos encadenados con otros discursos sociales.'},
{m:'Verón',q:'¿Cuál NO es uno de los tres desplazamientos de Verón?',
 o:['Del signo al discurso','Del mensaje a la circulación','Del significado al sentido social','De la imagen al texto'],
 r:3,e:'Los tres son: signo → discurso, mensaje → circulación, significado → sentido social.'},
{m:'Verón',q:'Con Verón, la pregunta "¿qué significa?" se transforma en…',
 o:['¿Quién lo dijo?','¿Bajo qué condiciones puede significar así?','¿Cuál es su significante?','¿Es ícono o símbolo?'],
 r:1,e:'El sentido se explica por sus condiciones de producción y reconocimiento.'},
{m:'Verón',q:'¿Qué critica Verón del enfoque de Saussure?',
 o:['Que es demasiado histórico','Que deja en segundo plano la historicidad, la circulación y el cambio social','Que estudia el habla','Que usa tres elementos'],
 r:1,e:'Saussure piensa un sistema de diferencias; Verón, un proceso social.'},
{m:'Verón',q:'¿Qué TOMA Verón de Peirce?',
 o:['La idea de semiosis como proceso abierto y relacional','La dicotomía lengua/habla','Las 10 leyes de la interfaz','El modelo matemático'],
 r:0,e:'Y desplaza el análisis hacia discursos concretos y sus condiciones sociales.'},
{m:'Verón',sim:true,q:'El esquema de Verón es:',
 o:['Emisor → mensaje → receptor','Condiciones de producción → discurso → condiciones de reconocimiento','Representamen → objeto → interpretante','Percepción → concreción → mediación'],
 r:1,e:'Producción y reconocimiento hacen sistema; entre ambas hay siempre un desfase.'},
{m:'Verón',q:'Para Verón, ¿dónde está el sentido?',
 o:['Adentro del objeto','En la intención del autor','Emerge de operaciones sociales, convenciones, memorias y posiciones de lectura','En el diccionario'],
 r:2,e:'El sentido no está "adentro" del objeto.'},
{m:'Verón',q:'"¿Quién encarga, regula, financia o legitima?" corresponde a la dimensión de producción…',
 o:['Historia','Economía','Instituciones','Tecnologías'],
 r:2,e:'Instituciones. Historia: qué pasaba; Economía: mercado; Tecnologías: medios disponibles.'},
{m:'Verón',q:'¿Cuál de estos es una condición de RECONOCIMIENTO?',
 o:['Las tecnologías disponibles al producir','Las competencias y la memoria del público','Las decisiones del proyecto','Quién financia la pieza'],
 r:1,e:'Competencias, memoria, posición social, expectativas, usos y contexto cultural.'},
{m:'Verón',q:'Remixar, ironizar, coleccionar o vandalizar una pieza son…',
 o:['Errores de lectura','Modos de reconocimiento','Condiciones de producción','Géneros primarios'],
 r:1,e:'El uso también es reconocimiento: los públicos no reciben pasivamente.'},
{m:'Verón',q:'Una huella es…',
 o:['Un índice de Peirce exclusivamente','Una marca de operaciones sociales en el discurso que permite inferir relaciones','El logo de una marca','Un error de impresión'],
 r:1,e:'Pueden ser visuales, materiales, espaciales, verbales, sonoras o interactivas.'},
{m:'Verón',q:'El tono, los pronombres y los imperativos son huellas…',
 o:['Visuales','Materiales','Verbales','Interactivas'],
 r:2,e:'Verbales: tono, pronombres, imperativos, cuantificación.'},
{m:'Verón',q:'El feedback, los permisos y las restricciones de una app son huellas…',
 o:['Sonoras','Espaciales','Interactivas','Materiales'],
 r:2,e:'Interactivas: gestos, feedback, permisos, restricciones.'},
{m:'Verón',q:'El primer movimiento para analizar un diseño con Verón es…',
 o:['Comparar','Leer huellas','Delimitar el discurso concreto','Reconstruir condiciones'],
 r:2,e:'Delimitar → Reconstruir → Leer huellas → Comparar. No analizar "la marca" en abstracto.'},
{m:'Verón',q:'"¿Qué cambia al circular?" corresponde al movimiento de…',
 o:['Delimitar','Reconstruir','Leer huellas','Comparar'],
 r:3,e:'Comparar: contrastar piezas, épocas, soportes y reconocimientos.'},
{m:'Verón',sim:true,q:'Un contrato de lectura donde "yo sé, te explico" es…',
 o:['Objetivo','Pedagógico','Cómplice','Abierto'],
 r:1,e:'Pedagógico: asimetría entre quien sabe y quien aprende.'},
{m:'Verón',q:'El contrato donde el enunciador "se borra", cuantifica e informa impersonalmente es…',
 o:['Objetivo','Pedagógico','Cómplice','Dialógico'],
 r:0,e:'Objetivo: "Esto es así". Y también es una construcción discursiva.'},
{m:'Verón',q:'Una marca que te habla con memes y "vos ya sabés de qué hablamos" propone un contrato…',
 o:['Objetivo','Pedagógico','Cómplice','Final'],
 r:2,e:'Cómplice: simetría, códigos compartidos, pertenencia.'},
{m:'Verón',q:'Para Verón, la diferencia decisiva suele estar en…',
 o:['Qué se dice','Cómo se organiza el decir','El precio del producto','La cantidad de texto'],
 r:1,e:'Mismo contenido, relaciones distintas.'},
{m:'Verón',q:'¿El contrato de lectura de una marca es fijo?',
 o:['Sí, cada marca tiene uno solo','No: puede cambiar según soporte, contexto, destinatario y estrategia','Sí, lo define la ley','No, porque no existe'],
 r:1,e:'No es una etiqueta fija ni una identidad permanente.'},
{m:'Verón',q:'El "lector modelo" es un concepto de…',
 o:['Verón','Umberto Eco','Peirce','Scolari'],
 r:1,e:'Eco: una figura anticipada por la estrategia del texto.'},
{m:'Verón',q:'Un texto que permite múltiples interpretaciones y provoca la cooperación del lector es…',
 o:['Cerrado','Abierto','Objetivo','Primario'],
 r:1,e:'Los cerrados restringen la interpretación y diseñan con precisión la experiencia.'},

/* ===== Audiovisual ===== */
{m:'Audiovisual',sim:true,q:'¿Cuáles son los tres actos del diseño audiovisual?',
 o:['Inicio, desarrollo y final','Percepción, concreción y mediación','Producción, discurso y reconocimiento','Fenomenológico, formal y abstracto'],
 r:1,e:'Observar críticamente, dar forma material y reconocer la interpretación social.'},
{m:'Audiovisual',q:'Elegir encuadres, iluminación, música y ritmo corresponde a la…',
 o:['Percepción','Concreción','Mediación','Circulación'],
 r:1,e:'Concreción: no basta con tener una idea, hay que darle forma sensible.'},
{m:'Audiovisual',q:'Que el público resignifique una película según su contexto corresponde a la…',
 o:['Percepción','Concreción','Mediación','Primeridad'],
 r:2,e:'Mediación: el sentido no equivale a la intención del autor.'},
{m:'Audiovisual',q:'El documental es un discurso del…',
 o:['Hacer creer: la construcción de la verdad','Entretenimiento puro','Contrato cómplice','Género primario'],
 r:0,e:'Selecciona, encuadra y propone una versión de la realidad.'},
{m:'Audiovisual',q:'Para Volnovich, la imagen documental es…',
 o:['Un espejo objetivo de los hechos','Una construcción situada que selecciona, encuadra y propone interpretaciones','Un ícono puro','Ficción'],
 r:1,e:'Las imágenes documentales son vehículos de poder.'},
{m:'Audiovisual',q:'El "montaje performativo" significa que…',
 o:['El orden de las imágenes puede transformar la realidad y su sentido','El actor improvisa','El film no tiene montaje','El público edita el film'],
 r:0,e:'Ej.: la propaganda nazi construía el relato de un apoyo total con ángulos y multitudes.'},
{m:'Audiovisual',q:'"Una locación nunca es solo un fondo neutro" significa que…',
 o:['Hay que filmar en estudio','El espacio funciona como signo, escenario y relación social','La ciudad no importa','Los fondos deben ser blancos'],
 r:1,e:'La ciudad puede ser incluso protagonista (Midnight in Paris).'},
{m:'Audiovisual',q:'"Orientar acciones" corresponde a…',
 o:['Hacer-ver','Hacer-saber','Hacer-hacer','Hacer-creer'],
 r:2,e:'Hacer-ver: visibilidad · Hacer-saber: conocimiento · Hacer-hacer: acción.'},
{m:'Audiovisual',q:'En el análisis de Casetti, el nivel que identifica estructuras narrativas, ángulos y luces es el…',
 o:['Fenomenológico','Formal','Abstracto','Pragmático'],
 r:1,e:'Fenomenológico = lo concreto · Formal = estructuras · Abstracto = temas amplios.'},
{m:'Audiovisual',q:'En El origen, "tiempo, percepción y realidad relativa; culpa y perdón" es el nivel…',
 o:['Fenomenológico','Formal','Abstracto','Primario'],
 r:2,e:'El nivel abstracto conecta todo con los temas más amplios.'},
{m:'Audiovisual',q:'En la estructura narrativa, presentar un conflicto o desequilibrio es el…',
 o:['Inicio','Desarrollo','Final','Montaje'],
 r:0,e:'El desarrollo organiza acontecimientos; el final cierra, altera o deja abierto.'},

/* ===== Transmedia ===== */
{m:'Transmedia',sim:true,q:'Según Scolari, una narrativa transmedia necesita…',
 o:['Un solo medio muy exitoso','Expansión en varios medios + participación activa de los usuarios','Que todos los medios cuenten lo mismo','Que el público sea pasivo'],
 r:1,e:'Si los usuarios no intervienen, no se logra.'},
{m:'Transmedia',q:'En una transmedia, ¿hace falta ver la película para entender el videojuego?',
 o:['Sí, siempre','No: cada medio cuenta otra parte del universo','Solo en Star Wars','Depende del precio'],
 r:1,e:'Cada medio hace lo que mejor sabe hacer.'},
{m:'Transmedia',q:'El modelo donde la industria decidía qué tenía éxito y el público no tenía rol es el…',
 o:['Fandom','Canon','Ecosistema','Cómplice'],
 r:1,e:'En el fandom los usuarios generan contenido y proponen ideas.'},
{m:'Transmedia',q:'¿Cuál NO es un componente de las narrativas transmedia?',
 o:['Trama','Universos','Soportes','Ruido'],
 r:3,e:'Los cuatro son trama, universos, soportes y participación de los usuarios.'},
{m:'Transmedia',q:'Piratas del Caribe es un ejemplo particular porque…',
 o:['Nace de un libro','Nace de un juego de Disney y de ahí salen las películas','No tiene películas','Es un género primario'],
 r:1,e:'Muestra que una transmedia no siempre parte de un libro.'},
{m:'Transmedia',q:'"Ninguna interfaz es neutral" corresponde a la ley…',
 o:['1 · lugar de la interacción','2 · no son transparentes','4 · evolucionan','10 · innovación'],
 r:1,e:'Siempre hay una jerarquía de poder oculta tras un sistema de reglas.'},
{m:'Transmedia',q:'Si tenés una Mac y necesitás otros productos de la misma marca, aplica la ley…',
 o:['3 · conforman un ecosistema','5 · coevolucionan','7 · simulan','9 · son políticas'],
 r:0,e:'Las interfaces forman ecosistemas, a veces cerrados a propósito.'},
{m:'Transmedia',q:'El paso del teclado físico del celular al teclado táctil ilustra la ley…',
 o:['2 · no son transparentes','6 · no se extinguen, se transforman','8 · complejidad','10 · innovación'],
 r:1,e:'Los elementos del pasado se reciclan en nuevas tecnologías.'},
{m:'Transmedia',q:'Una app de turnos de salud que deja afuera a quien no tiene smartphone ilustra la ley…',
 o:['1 · lugar de la interacción','4 · evolucionan','9 · el diseño y uso son prácticas políticas','7 · si no puede, simula'],
 r:2,e:'Las interfaces reflejan posturas culturales y políticas.'},
{m:'Transmedia',q:'Los asistentes por voz (Siri, Alexa) ilustran la ley…',
 o:['10 · la interfaz es el lugar de la innovación','3 · ecosistema','8 · complejidad','2 · no transparentes'],
 r:0,e:'Donde se materializan nuevas formas de interacción.'},
{m:'Transmedia',q:'Para Simondon, la tecnología es…',
 o:['Una amenaza externa que nos va a dominar','Una extensión del ser humano, como una prótesis','Algo ajeno a la cultura','Un esclavo'],
 r:1,e:'La técnica es condición humana: somos cuerpos tecnológicos.'}
];

/* ---------------- 4. VERDADERO / FALSO ---------------- */
const TF = [
{s:'Para Peirce el signo es diádico: significante + significado.',v:false,e:'Ese es Saussure. Peirce: triádico (representamen, objeto, interpretante).'},
{s:'Para Peirce, conocer es inferir.',v:true,e:'El pensamiento interpreta el mundo a partir de signos, hipótesis y saberes previos.'},
{s:'El interpretante es la persona que interpreta el signo.',v:false,e:'Es el efecto de sentido, el proceso interno de interpretación; no una persona.'},
{s:'En la semiosis ilimitada, un interpretante puede convertirse en un nuevo representamen.',v:true,e:'Así se forman cadenas sin fin: carpincho → mascota → fidelidad → amigo.'},
{s:'Como la semiosis es ilimitada, todas las interpretaciones valen igual.',v:false,e:'No toda lectura vale igual: se apoya en saberes, hábitos y contextos.'},
{s:'La Primeridad es la ley, el hábito o la convención.',v:false,e:'Esa es la Terceridad. La Primeridad es la cualidad posible.'},
{s:'Una luz roja encendida es un ejemplo de Segundidad.',v:true,e:'Es un hecho, algo que ocurre e irrumpe.'},
{s:'El humo que sale de una chimenea es un índice del fuego.',v:true,e:'Hay una conexión causal/física entre el signo y su objeto.'},
{s:'Una fotografía realista es un símbolo.',v:false,e:'Es un ícono: se relaciona por semejanza.'},
{s:'Según la clase, todos los logos son símbolos.',v:true,e:'Funcionan por convención.'},
{s:'Un legisigno es una ocurrencia única e irrepetible.',v:false,e:'Ese es el sinsigno. El legisigno es un patrón general (la letra "A").'},
{s:'Un dicente afirma algo que puede ser verdadero o falso.',v:true,e:'Ej.: "Velocidad máxima 60 km/h".'},
{s:'El objeto dinámico es lo que una pieza puntual hace aparecer del objeto.',v:false,e:'Ese es el objeto inmediato. El dinámico es el concepto amplio con saberes previos.'},
{s:'Benveniste es considerado el padre de la teoría de la enunciación.',v:true,e:'Lingüista francés, ampliador de Saussure.'},
{s:'El enunciado responde a la pregunta "¿desde dónde lo dice?".',v:false,e:'Esa es la enunciación. El enunciado responde a "¿qué dice?".'},
{s:'Para Benveniste no existe un yo sin un tú.',v:true,e:'La comunicación siempre necesita un otro, incluso cuando hablamos con nosotros mismos.'},
{s:'Las deixis organizan las relaciones espaciales y temporales del discurso.',v:true,e:'Aquí, allá, este, ahora, ayer.'},
{s:'Para Benveniste, el estilo es fijo y no permite marcar la subjetividad.',v:false,e:'Al revés: el estilo es la única posibilidad de inscribir nuestra subjetividad, y no es fijo.'},
{s:'Bajtín era un lingüista francés.',v:false,e:'Era ruso; el francés es Benveniste.'},
{s:'Para Bajtín siempre hablamos con palabras ajenas.',v:true,e:'El enunciado tiene ecos de discursos anteriores.'},
{s:'Heteroglosia y polifonía son exactamente lo mismo.',v:false,e:'Heteroglosia: la lengua hecha de muchas voces. Polifonía: las voces dentro de mi discurso.'},
{s:'La oración es la unidad de la comunicación.',v:false,e:'La oración es la unidad mínima de la lengua; el enunciado, la de la comunicación.'},
{s:'Los géneros secundarios absorben y reelaboran a los primarios.',v:true,e:'Novela, informe, campaña o audiovisual reelaboran conversaciones, saludos, pedidos.'},
{s:'Los géneros discursivos son eternos y nunca desaparecen.',v:false,e:'Nacen, persisten, cambian y pueden desaparecer (la carta de pedida de mano).'},
{s:'Para Bajtín, un diseño es un enunciado.',v:true,e:'Es un eslabón de la cadena dialógica.'},
{s:'Verón fue un filósofo y sociólogo argentino.',v:true,e:'Desarrolló la teoría de la semiosis social.'},
{s:'Para Verón, el sentido está adentro del objeto.',v:false,e:'Emerge de operaciones sociales, convenciones, memorias y posiciones de lectura.'},
{s:'Para Verón, entre producción y reconocimiento siempre hay un desfase.',v:true,e:'El sentido no viaja intacto: se transforma al circular.'},
{s:'Producción y reconocimiento hacen sistema.',v:true,e:'Las condiciones de producción se relacionan con las de reconocimiento.'},
{s:'Para analizar con Verón conviene estudiar "la marca" en abstracto.',v:false,e:'Hay que delimitar una pieza, objeto o interfaz concreta.'},
{s:'Las huellas pueden ser visuales, materiales, espaciales, verbales, sonoras o interactivas.',v:true,e:'Son marcas de operaciones sociales en el discurso.'},
{s:'Un discurso tiene siempre un origen puro.',v:false,e:'No hay "origen puro": cada diseño rearticula materiales culturales previos.'},
{s:'El contrato objetivo no es una construcción discursiva porque no tiene estilo.',v:false,e:'También es una construcción: la ausencia aparente de estilo produce efecto de transparencia.'},
{s:'El contrato pedagógico construye una asimetría entre quien sabe y quien aprende.',v:true,e:'"Yo sé, te explico."'},
{s:'El contrato cómplice busca aumentar la distancia con el destinatario.',v:false,e:'Busca reducirla: simetría, códigos compartidos, pertenencia.'},
{s:'Una misma marca puede usar distintos contratos de lectura.',v:true,e:'Según soporte, contexto, destinatario y estrategia.'},
{s:'El lector modelo es un concepto de Umberto Eco.',v:true,e:'Una figura anticipada por la estrategia del texto.'},
{s:'Los textos cerrados permiten múltiples interpretaciones.',v:false,e:'Esos son los abiertos. Los cerrados restringen la interpretación.'},
{s:'El documental muestra la realidad tal cual es.',v:false,e:'Es una construcción situada: una versión de la realidad.'},
{s:'La mediación implica que el sentido equivale a la intención del autor.',v:false,e:'Al revés: los públicos interpretan y resignifican.'},
{s:'Una locación en un film nunca es solo un fondo neutro.',v:true,e:'El espacio funciona como signo, escenario y relación social.'},
{s:'El nivel fenomenológico de Casetti analiza los temas más abstractos del film.',v:false,e:'El fenomenológico mira lo concreto; el abstracto, los temas amplios.'},
{s:'En una narrativa transmedia todos los medios cuentan exactamente la misma historia.',v:false,e:'Cada medio cuenta otra parte del mismo universo.'},
{s:'Para Scolari, sin participación de los usuarios no hay narrativa transmedia.',v:true,e:'Es uno de sus componentes fundamentales.'},
{s:'Según Scolari, las interfaces son transparentes y neutrales.',v:false,e:'Ley 2: no son transparentes; ninguna interfaz es neutral.'},
{s:'Las interfaces no se extinguen: se transforman.',v:true,e:'Ley 6: los elementos del pasado se reciclan.'},
{s:'Para Simondon la técnica es algo externo y enemigo del ser humano.',v:false,e:'La técnica es condición humana; la tecnología es una extensión, una prótesis.'}
];

/* ---------------- 5. SIMULACRO ---------------- */
const SIM_DEV = [
{q:'1. Explicá el signo triádico de Peirce y la semiosis ilimitada. Dá un ejemplo propio de diseño.',
 m:['<b>Representamen (algo):</b> la forma en que aparece el signo, percibida por cualquier sentido (imagen, palabra, sonido, olor, textura, interfaz, espacio).',
    '<b>Objeto (de algo):</b> aquello a lo que remite. Puede ser <b>inmediato</b> (lo que la pieza hace aparecer) o <b>dinámico</b> (el concepto amplio con saberes previos).',
    '<b>Interpretante (para alguien):</b> el efecto de sentido. Puede ser inmediato, dinámico o final.',
    '<b>Semiosis ilimitada:</b> el interpretante se vuelve un nuevo representamen, en una cadena sin fin (carpincho → mascota → fidelidad → amigo). Pero no toda lectura vale igual: se apoya en saberes, hábitos y contextos.',
    '<b>Ejemplo:</b> el ícono de un tacho de basura en la compu (R) remite a "eliminar archivos" (O) y produce la acción de arrastrar ahí lo que no quiero (I); "tacho" a su vez puede remitir a "descartable", etc.']},
{q:'2. Desarrollá Primeridad, Segundidad y Terceridad y ubicá en el cuadro de 9 clases: una foto de un perro, una huella en el barro, la palabra "PERRO" y un cartel de "Velocidad máxima 60".',
 m:['<b>Primeridad:</b> cualidad posible (el rojo como color). <b>Segundidad:</b> hecho, irrupción (una luz roja encendida). <b>Terceridad:</b> ley, hábito (rojo = frenar).',
    '<b>Foto de un perro:</b> <b>ícono</b> (relación por semejanza, Primeridad en la fila del objeto).',
    '<b>Huella en el barro:</b> <b>índice</b> (conexión física/coexistencia, Segundidad).',
    '<b>Palabra "PERRO":</b> <b>símbolo</b> (convención, Terceridad); además es <b>legisigno</b> en la fila del representamen.',
    '<b>Cartel "Velocidad máxima 60":</b> produce un interpretante <b>dicente</b> (afirma algo verdadero o falso sobre un estado de cosas).']},
{q:'3. Diferenciá enunciado y enunciación según Benveniste y analizá ambos niveles en una pieza gráfica.',
 m:['<b>Enunciado:</b> lo dicho, lo explícito: la información, el tema. Pregunta: <b>¿qué dice?</b>',
    '<b>Enunciación:</b> lo no dicho de lo dicho: el modo de decir, la voz, el destinatario imaginado, la valoración y la ideología. Pregunta: <b>¿desde dónde lo dice?</b> Es el acto situado que produce el enunciado.',
    '<b>Juntos forman el discurso.</b> Todo enunciado tiene contenido temático, estructuración y estilo (donde se inscribe la subjetividad).',
    '<b>Marcas de la enunciación:</b> quién (enunciador), a quién (enunciatario), cuándo (temporalidad), dónde (deixis espacial).',
    '<b>Ejemplo:</b> un afiche de vacunación. Enunciado: "vacunate antes del 30/6 en tu centro de salud". Enunciación: imperativo y tuteo (cercanía), tipografía institucional, logo del Estado (enunciador experto), una familia sonriente (destinatario imaginado: padres jóvenes), "tu barrio" (deixis).']},
{q:'4. Explicá dialogismo, heteroglosia y polifonía en Bajtín. ¿Por qué se dice que "se diseña dentro de una tradición"?',
 m:['<b>Dialogismo:</b> todo enunciado es un eslabón de la <b>cadena dialógica</b>: responde a los anteriores y será base de los próximos. La presencia del otro es constitutiva; siempre hay un enunciatario.',
    '<b>Siempre hablamos con palabras ajenas:</b> no inventamos palabras; al adquirir un signo nos llevamos su ideología. Todo es ideológico.',
    '<b>Heteroglosia:</b> la lengua está hecha de muchas voces (clases sociales, religiones, profesiones). <b>Polifonía:</b> las múltiples voces que aparecen en mi discurso.',
    '<b>Palabra de nadie / ajena / propia:</b> del código disponible, a la cargada por otros, a la que uso en mi situación.',
    '<b>En diseño:</b> no sos el primero en diseñar; cada pieza retoma estilos, géneros y referencias previas y las reelabora ("una rueda más dentro de la rueda").']},
{q:'5. Definí géneros discursivos, sus tres componentes y la diferencia entre primarios y secundarios. Dá un ejemplo de diseño de cada uno.',
 m:['<b>Definición:</b> tipos relativamente estables de enunciados, producidos en una situación comunicativa concreta, orientados a un destinatario y agrupables por similitudes.',
    '<b>Componentes:</b> contenido temático (de qué se habla) · estructura (cómo se ordena) · estilo (los recursos).',
    '<b>Ciclo:</b> nacen en prácticas sociales, persisten porque facilitan expectativas de lectura, cambian con prácticas, tecnologías y públicos, y pueden desaparecer (la carta de pedida de mano).',
    '<b>Primarios:</b> simples, espontáneos, orales, vínculo inmediato (un saludo, un pedido). <b>Secundarios:</b> complejos, elaborados, absorben a los primarios (novela, campaña, audiovisual).',
    '<b>Ejemplo:</b> un posteo que simula un chat entre amigos reelabora un género primario (la conversación) dentro de uno secundario (la campaña publicitaria).']},
{q:'6. Explicá la semiosis social de Verón y el esquema producción → discurso → reconocimiento. ¿En qué se diferencia de Saussure?',
 m:['<b>Semiosis social:</b> todo discurso está encadenado con otros discursos sociales. Verón no pregunta qué significa un signo, sino <b>cómo se produce y circula el sentido social</b>.',
    '<b>Tres desplazamientos:</b> del signo al discurso, del mensaje a la circulación, del significado al sentido social.',
    '<b>Esquema:</b> condiciones de producción (historia, economía, tecnologías, instituciones, proyecto, discursos previos) → discurso (la pieza material) → condiciones de reconocimiento (competencias, memoria, posición social, expectativas, usos, contexto). Siempre hay un <b>desfase</b>.',
    '<b>Huellas:</b> marcas de operaciones sociales (visuales, materiales, espaciales, verbales, sonoras, interactivas) que permiten inferir esas condiciones.',
    '<b>Vs. Saussure:</b> Saussure piensa un sistema de diferencias donde quedan en segundo plano la historicidad y la circulación. La pregunta pasa de "¿qué significa?" a "<b>¿bajo qué condiciones puede significar así?</b>". De Peirce, Verón toma la semiosis como proceso abierto.']},
{q:'7. Aplicá los 4 movimientos de Verón a una pieza concreta (por ejemplo, el logo de Nike o unas zapatillas).',
 m:['<b>1. Delimitar:</b> elegir una pieza concreta (ej.: el logo swoosh de Nike), no "la marca" en abstracto.',
    '<b>2. Reconstruir condiciones:</b> historia y economía (marca deportiva en expansión), discursos previos (el ala de Niké, diosa griega de la victoria), tecnologías e instituciones.',
    '<b>3. Leer huellas:</b> visuales (forma dinámica, curva ascendente = movimiento, velocidad), verbales (el nombre Nike), materiales (bordado en la indumentaria).',
    '<b>4. Comparar:</b> cómo cambia el sentido al circular: en una camiseta deportiva, en la moda urbana, en un meme o una campaña polémica; distintas épocas y públicos lo reconocen de otro modo.',
    '<b>Cierre:</b> el sentido no está "adentro" del logo: emerge de su circulación. Un discurso es un punto de pasaje de sentido.']},
{q:'8. ¿Qué es el contrato de lectura? Explicá los tres tipos y dá un ejemplo de diseño para cada uno.',
 m:['<b>Contrato de lectura:</b> la relación que un discurso/soporte construye entre enunciador y destinatario a partir de las modalidades del decir. Es implícito y es lo que te mantiene enganchado. Importa más "cómo se organiza el decir" que "qué se dice".',
    '<b>Objetivo:</b> el enunciador se borra, cuantifica e informa. "Esto es así". Ej.: un gráfico de datos con grilla neutral, un informe oficial. (También es una construcción: produce efecto de transparencia.)',
    '<b>Pedagógico:</b> asimetría, uno sabe y orienta. "Yo sé, te explico". Ej.: una infografía, un tutorial u onboarding de una app, la señalética de un hospital.',
    '<b>Cómplice:</b> simetría, códigos compartidos, pertenencia. "Vos y yo sabemos de qué hablamos". Ej.: una marca que habla con memes y jerga de su comunidad.',
    '<b>No es fijo:</b> una misma marca puede cambiar de contrato según el soporte, el contexto y el destinatario. Se vincula con el <b>lector modelo</b> de Eco.']},
{q:'9. Explicá los tres actos del diseño audiovisual (percepción, concreción, mediación) aplicados a un film o documental.',
 m:['<b>Percepción:</b> observar críticamente el entorno: detectar conflictos, silencios, señales y relaciones sociales. Ej. (film sobre 2001): la falta de trabajo.',
    '<b>Concreción:</b> dar forma sensible y material a la idea: encuadres, escalas, iluminación, color, voz, música, ritmo. Ej.: los ángulos, la luz y la música elegidos.',
    '<b>Mediación:</b> reconocer la interpretación social: los públicos interpretan y resignifican; el sentido no es la intención del autor. Ej.: cómo circula y cómo lo recibe cada público.',
    '<b>Documental:</b> es un discurso del hacer creer; no es un espejo sino una construcción situada (Volnovich). El montaje performativo puede transformar la realidad.',
    '<b>Valor semiótico:</b> hacer ver, hacer creer, hacer hacer. Implica responsabilidad al representar (ej.: estereotipos como Barbie).']},
{q:'10. Analizá una película con los tres niveles de Casetti (fenomenológico, formal y abstracto).',
 m:['<b>Fenomenológico:</b> lo que pasa de manera concreta, los hechos evidentes. Ej. El origen: Cobb intenta plantar una idea en la mente de un objetivo.',
    '<b>Formal:</b> las estructuras narrativas y cómo se presentan: reglas del sueño, roles, niveles, ángulos, luces.',
    '<b>Abstracto:</b> cómo todo se conecta con los temas amplios: tiempo, percepción, realidad relativa, culpa y perdón.',
    '<b>Componentes:</b> personajes + ambientes (el lugar condiciona al personaje), acontecimientos, transformaciones.',
    '<b>Estructura:</b> inicio (desequilibrio) → desarrollo (acontecimientos y decisiones) → final (cierra, altera o deja abierto).']},
{q:'11. ¿Qué es una narrativa transmedia según Scolari? Explicá sus componentes, la diferencia canon/fandom y analizá un ejemplo.',
 m:['<b>Definición:</b> relato que se despliega a través de múltiples medios y plataformas, donde parte de los consumidores asume un rol activo en la expansión.',
    '<b>Funcionamiento:</b> cada medio hace lo que mejor sabe hacer y cuenta otra parte del universo; no hace falta ver la película para entender el juego. Es una producción integrada.',
    '<b>Componentes:</b> trama (con spin-offs), universos (identidad fuerte), soportes (digitales y materiales) y participación de los usuarios.',
    '<b>Canon vs. fandom:</b> antes todo por separado y la industria decidía; ahora los usuarios generan contenido y todo se planea con estrategia.',
    '<b>Ejemplo:</b> Star Wars: películas, series, cómics, videojuegos, juguetes y fan fiction; o Piratas del Caribe, que nace de un juego de Disney.']},
{q:'12. Elegí 4 de las 10 leyes de la interfaz de Scolari y explicalas con ejemplos. Vinculá con Simondon.',
 m:['<b>Ley 1 — lugar de la interacción:</b> parecen naturales pero guían nuestras acciones (entrar al aula e ir al asiento).',
    '<b>Ley 2 — no son transparentes:</b> ocultan jerarquías de poder; ninguna es neutral (color, tipografía y orden transmiten valores).',
    '<b>Ley 4/6 — evolucionan y no se extinguen, se transforman:</b> de la carreta al auto quedaron las ruedas; del teclado físico al táctil.',
    '<b>Ley 9 — son prácticas políticas:</b> una app de turnos de salud o un banco que excluye a jubilados es una decisión política.',
    '<b>Ley 10 — lugar de la innovación:</b> asistentes de voz, IA.',
    '<b>Simondon:</b> la técnica nace como necesidad y es condición humana; la tecnología es una extensión/prótesis. Las interfaces deben ser dinámicas e integradas culturalmente.']}
];

const SIM_FILL = [
{id:'f1',pre:'El signo para Peirce es (diádico / triádico):',ans:['triadico','triádico']},
{id:'f2',pre:'Elemento del signo de Peirce que es "el efecto de sentido":',ans:['interpretante']},
{id:'f3',pre:'Signo que se relaciona con su objeto por SEMEJANZA:',ans:['icono','ícono']},
{id:'f4',pre:'Signo que se relaciona por CONEXIÓN FÍSICA o coexistencia:',ans:['indice','índice']},
{id:'f5',pre:'Signo que se relaciona por CONVENCIÓN:',ans:['simbolo','símbolo']},
{id:'f6',pre:'Categoría de la cualidad posible (el rojo como color):',ans:['primeridad']},
{id:'f7',pre:'Categoría de la ley o el hábito (rojo = frenar):',ans:['terceridad']},
{id:'f8',pre:'Para Benveniste, "lo dicho" es el:',ans:['enunciado']},
{id:'f9',pre:'Para Benveniste, "el modo de decir" es la:',ans:['enunciacion','enunciación']},
{id:'f10',pre:'Las múltiples voces que aparecen en mi discurso (Bajtín):',ans:['polifonia','polifonía']},
{id:'f11',pre:'Tipos relativamente estables de enunciados (Bajtín):',ans:['generos discursivos','géneros discursivos','generos','géneros']},
{id:'f12',pre:'Teoría de Verón sobre los discursos sociales:',ans:['semiosis social']},
{id:'f13',pre:'Marca de operaciones sociales en el discurso (Verón):',ans:['huella','huellas']},
{id:'f14',pre:'Contrato de lectura "yo sé, te explico":',ans:['pedagogico','pedagógico']},
{id:'f15',pre:'Contrato de lectura "vos y yo sabemos de qué hablamos":',ans:['complice','cómplice']},
{id:'f16',pre:'Figura anticipada por la estrategia del texto (Eco): el lector…',ans:['modelo']},
{id:'f17',pre:'Acto audiovisual de dar forma sensible y material a una idea:',ans:['concrecion','concreción']},
{id:'f18',pre:'Modelo nuevo de transmedia, donde los usuarios generan contenido:',ans:['fandom']}
];

/* ---------------- 6. PLAN DE ESTUDIO ---------------- */
const PLAN = [
 {d:'Bloque 1 — Peirce', t:['Unidades 1 a 6 del Resumen','Juego "La matriz de Peirce" y Clasificador ícono/índice/símbolo','Quiz del módulo Peirce']},
 {d:'Bloque 2 — Enunciación', t:['Unidades 7 a 11 (Benveniste y Bajtín)','Clasificador enunciado/enunciación y primarios/secundarios','Flashcards Benveniste y Bajtín']},
 {d:'Bloque 3 — Verón', t:['Unidades 12 a 15','Juego "Casos prácticos" y Clasificador de contratos','Simulacro: desarrollos 6, 7 y 8']},
 {d:'Bloque 4 — Audiovisual y transmedia', t:['Unidades 16 a 21','Juego "¿Qué ley de la interfaz es?"','Contrarreloj V/F + simulacro completo']}
];

/* ---------------- 7. GLOSARIO ---------------- */
const GLOSARIO = [
['Peirce','Filósofo, lógico y matemático estadounidense; padre del pragmatismo y de la semiótica moderna. Signo triádico.'],
['Pragmatismo','Corriente filosófica fundada por Peirce: el sentido de una idea está en sus consecuencias prácticas.'],
['Inferencia','Operación lógica por la que pasamos de un signo a una hipótesis (veo humo → hay fuego). Para Peirce, conocer es inferir.'],
['Representamen','En Peirce, la forma en que aparece el signo: "algo" percibido por cualquier sentido.'],
['Objeto','En Peirce, aquello a lo que remite el signo: "de algo".'],
['Objeto inmediato','El aspecto del objeto que una pieza hace aparecer en una semiosis puntual.'],
['Objeto dinámico','El concepto amplio al que se remite, con saberes previos y experiencia cultural.'],
['Interpretante','En Peirce, el efecto de sentido que el signo produce: "para alguien". No es una persona.'],
['Interpretante final','La interpretación estabilizada o probable en una comunidad de interpretación.'],
['Semiosis','El proceso de interpretación de los signos.'],
['Semiosis ilimitada','Cadena infinita en la que cada interpretante se vuelve un nuevo representamen.'],
['Primeridad','Categoría de la cualidad posible: sensación, color, tono, sin hecho ni regla.'],
['Segundidad','Categoría del hecho: algo ocurre, irrumpe, deja huella.'],
['Terceridad','Categoría de la ley, el hábito o la convención que orienta acciones.'],
['Cualisigno','Una cualidad que funciona como signo sin manifestarse en un objeto (la rojez).'],
['Sinsigno','Una ocurrencia singular y concreta que funciona como signo (una mancha única).'],
['Legisigno','Un patrón general que se repite y se reconoce (la letra "A").'],
['Ícono','Signo que se relaciona con su objeto por semejanza (una foto).'],
['Índice','Signo que se relaciona con su objeto por conexión física, causal o de coexistencia (huella, humo).'],
['Símbolo','Signo que se relaciona con su objeto por convención (una palabra, un logo).'],
['Rema','Interpretante que presenta cualidades de un objeto posible; interpretación abierta.'],
['Dicente','Interpretante que afirma algo verdadero o falso sobre un estado de cosas.'],
['Argumento','Interpretante que funciona como razonamiento hacia una conclusión.'],
['Benveniste','Lingüista francés (1902-1976), padre de la teoría de la enunciación.'],
['Enunciado','Lo dicho, lo explícito. Responde a "¿qué dice?".'],
['Enunciación','El acto situado de decir: modo, voz, destinatario imaginado, ideología. Responde a "¿desde dónde lo dice?".'],
['Discurso','En Benveniste, la combinación de enunciado y enunciación; en Verón, un conjunto material de signos y prácticas en circulación.'],
['Enunciador','El lugar desde donde se habla; quien inicia el enunciado.'],
['Enunciatario','El interlocutor construido por el enunciado; a quién se habla.'],
['Deixis','Palabras que ubican la enunciación en el espacio y el tiempo: aquí, allá, este, ahora.'],
['Giro lingüístico','El énfasis de Benveniste en quién habla y a quién: el lenguaje construye al sujeto.'],
['Estilo','Los recursos con que se organiza un enunciado; donde se inscribe la subjetividad.'],
['Bajtín','Lingüista y filósofo ruso (1895-1975): dialogismo, polifonía y géneros discursivos.'],
['Dialogismo','Idea de Bajtín: todo enunciado responde a otros y la presencia del otro es constitutiva.'],
['Cadena dialógica','La serie de enunciados conectados entre sí: cada uno es un eslabón.'],
['Heteroglosia','La lengua construida por muchas voces sociales.'],
['Polifonía','Las múltiples voces que aparecen en un discurso.'],
['Palabra ajena','La que otros ya usaron y cargaron de valor; la que cito.'],
['Conclusividad','Principio del enunciado: parece cerrado y habilita una respuesta.'],
['Entonación expresiva','Principio del enunciado que marca la valoración: ironía, solemnidad, urgencia.'],
['Géneros discursivos','Tipos relativamente estables de enunciados con tema, estilo y estructura compartidos.'],
['Género primario','Simple, espontáneo, oral, con vínculo inmediato con la situación.'],
['Género secundario','Complejo, elaborado; absorbe y reelabora géneros primarios.'],
['Verón','Filósofo y sociólogo argentino: semiosis social y contrato de lectura.'],
['Semiosis social','Teoría de Verón: los discursos se producen y circulan encadenados con otros discursos sociales.'],
['Condiciones de producción','Lo que hizo posible un discurso: historia, economía, tecnologías, instituciones, proyecto, discursos previos.'],
['Condiciones de reconocimiento','Desde dónde se lee un discurso: competencias, memoria, posición social, expectativas, usos, contexto.'],
['Gramática','Reglas u operaciones de sentido que regulan la producción o la lectura de un discurso.'],
['Huella','Marca de operaciones sociales en el discurso que permite inferir sus condiciones.'],
['Circulación','El recorrido social de un discurso, donde su sentido se transforma.'],
['Contrato de lectura','La relación que un discurso construye entre enunciador y destinatario.'],
['Contrato objetivo','Neutral, sin marcas de subjetividad: "Esto es así".'],
['Contrato pedagógico','Asimétrico: "Yo sé, te explico".'],
['Contrato cómplice','Simétrico, de pertenencia: "Vos y yo sabemos de qué hablamos".'],
['Lector modelo','Concepto de Eco: el lector ideal que la estrategia del texto anticipa.'],
['Texto abierto','El que permite múltiples interpretaciones y pide la cooperación del lector (Eco).'],
['Texto cerrado','El que restringe las interpretaciones posibles (Eco).'],
['Documental','Género audiovisual del hacer creer: construcción situada de una versión de la realidad.'],
['Percepción','Primer acto del diseño audiovisual: observar críticamente el entorno.'],
['Concreción','Segundo acto: dar forma sensible y material a una idea.'],
['Mediación','Tercer acto: reconocer la interpretación social de las imágenes.'],
['Montaje performativo','La organización de las imágenes puede transformar la realidad y su sentido.'],
['Estereotipo','Representación cerrada y repetida que se naturaliza (ej.: la Barbie original).'],
['Casetti','Teórico del cine: desarmar un film para comprenderlo en tres niveles.'],
['Nivel fenomenológico','En Casetti, lo que pasa concretamente en el film.'],
['Nivel formal','En Casetti, las estructuras narrativas y sus recursos.'],
['Nivel abstracto','En Casetti, los temas y conceptos amplios que conectan todo.'],
['Scolari','Investigador argentino: narrativas transmedia y leyes de la interfaz.'],
['Narrativa transmedia','Relato expandido en múltiples medios con participación activa de los usuarios.'],
['Canon','Modelo viejo: medios aislados, decide la industria, público pasivo.'],
['Fandom','Modelo nuevo: comunidades de usuarios que generan contenido.'],
['Spin-off','Relato derivado que amplía la trama principal.'],
['Interfaz','Mediación que permite la interacción entre un usuario y un sistema, digital o físico.'],
['Simondon','Filósofo de la técnica: la tecnología como extensión del ser humano.']
];

/* Rota las opciones de cada pregunta para que la correcta no caiga casi
   siempre en la misma letra (el simulacro no las mezcla). */
QUIZ.forEach((q,i)=>{
  const k=i%4; if(!k) return;
  q.o=[...q.o.slice(-k),...q.o.slice(0,-k)];
  q.r=(q.r+k)%4;
});
