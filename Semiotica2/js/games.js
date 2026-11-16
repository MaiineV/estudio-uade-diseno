/* ============================================================
   JUEGOS — Semiótica II
   ============================================================ */

/* ---------- datos de los juegos ---------- */

// 1. ¿Quién lo dijo?
const AUTORES = [
 {a:'Peirce',     t:'El signo es <b>triádico</b>: representamen, objeto e interpretante.'},
 {a:'Peirce',     t:'"<b>Conocer es inferir</b>": veo humo, supongo fuego y actúo.'},
 {a:'Peirce',     t:'La <b>semiosis ilimitada</b>: el interpretante se vuelve un nuevo representamen.'},
 {a:'Peirce',     t:'<b>Primeridad, Segundidad y Terceridad</b>.'},
 {a:'Peirce',     t:'Ícono, índice y símbolo.'},
 {a:'Peirce',     t:'Es el <b>padre del pragmatismo</b>.'},
 {a:'Benveniste', t:'Es el <b>padre de la teoría de la enunciación</b>.'},
 {a:'Benveniste', t:'Distingue <b>enunciado</b> (lo dicho) de <b>enunciación</b> (el modo de decir).'},
 {a:'Benveniste', t:'"No existe un <b>yo</b> sin un <b>tú</b>."'},
 {a:'Benveniste', t:'Las <b>deixis</b> y la expresión de la temporalidad como marcas del sujeto.'},
 {a:'Benveniste', t:'Dice que a Saussure "se le olvidó" que el lenguaje <b>construye al sujeto que habla</b>.'},
 {a:'Bajtín',     t:'<b>Siempre hablamos con palabras ajenas</b>: nunca creamos palabras.'},
 {a:'Bajtín',     t:'La <b>polifonía</b> y la <b>heteroglosia</b>.'},
 {a:'Bajtín',     t:'Los <b>géneros discursivos</b>: primarios y secundarios.'},
 {a:'Bajtín',     t:'Todo enunciado es un <b>eslabón en la cadena dialógica</b>.'},
 {a:'Bajtín',     t:'La palabra puede ser <b>de nadie, ajena o propia</b>.'},
 {a:'Verón',      t:'La <b>semiosis social</b>: los discursos encadenados con otros discursos.'},
 {a:'Verón',      t:'<b>Condiciones de producción → discurso → condiciones de reconocimiento</b>.'},
 {a:'Verón',      t:'Las <b>huellas</b>: marcas de operaciones sociales en el discurso.'},
 {a:'Verón',      t:'El <b>contrato de lectura</b>: objetivo, pedagógico y cómplice.'},
 {a:'Verón',      t:'"¿Bajo qué <b>condiciones</b> puede significar así?"'},
 {a:'Eco',        t:'El <b>lector modelo</b>, anticipado por la estrategia del texto.'},
 {a:'Eco',        t:'Los <b>textos abiertos</b> y los <b>textos cerrados</b>.'},
 {a:'Casetti',    t:'Desarmar un film en tres niveles: <b>fenomenológico, formal y abstracto</b>.'},
 {a:'Volnovich',  t:'La imagen documental <b>no es un espejo</b>: es una construcción situada.'},
 {a:'Scolari',    t:'Las <b>narrativas transmedia</b>: varios medios + participación de los usuarios.'},
 {a:'Scolari',    t:'Las <b>10 leyes de la interfaz</b>.'},
 {a:'Scolari',    t:'El paso del <b>canon</b> al <b>fandom</b>.'},
 {a:'Simondon',   t:'La técnica es una <b>condición humana</b>: la tecnología como <b>prótesis</b>.'},
 {a:'Saussure',   t:'El signo <b>diádico</b>: significante + significado (el punto de partida que todos discuten).'}
];

// 2. Clasificador — grupos de 2 o 3 categorías
const GRUPOS = [
 {id:'iis', n:'Ícono / Índice / Símbolo', d:'¿Cómo se relaciona el signo con su objeto?',
  bins:[{k:'A',n:'Ícono',d:'semejanza'},{k:'B',n:'Índice',d:'conexión física'},{k:'C',n:'Símbolo',d:'convención'}],
  items:[
   ['Una fotografía de un perro','A','Se parece a lo que representa.'],
   ['Huellas de pisadas en el barro','B','Indica que alguien estuvo ahí: conexión física.'],
   ['La palabra escrita "PERRO"','C','No hay parecido ni causa: es un acuerdo cultural.'],
   ['Humo saliendo de una chimenea','B','Conexión causal con el fuego.'],
   ['Un retrato realista dibujado a lápiz','A','Relación por semejanza.'],
   ['El logo de una marca','C','Según la clase, todos los logos son símbolos.'],
   ['El perfume que te recuerda a una persona','B','Relación de contigüidad / coexistencia.'],
   ['Un pictograma de silueta de avión en el aeropuerto','A','Funciona por parecido con el avión.'],
   ['Una bandera nacional','C','Representa a un país por convención.'],
   ['Fiebre que indica una infección','B','Síntoma: relación causal.'],
   ['La forma de saludar en otro país','C','Se aprende por convención social.'],
   ['Un mapa que reproduce la forma de una costa','A','Semejanza estructural con lo representado.']]},
 {id:'cat', n:'Primeridad / Segundidad / Terceridad', d:'¿Cualidad, hecho o ley?',
  bins:[{k:'A',n:'Primeridad',d:'cualidad posible'},{k:'B',n:'Segundidad',d:'hecho, irrupción'},{k:'C',n:'Terceridad',d:'ley, hábito'}],
  items:[
   ['El rojo como color','A','Cualidad pura, sin hecho ni regla.'],
   ['Una luz roja encendida','B','Un hecho que ocurre.'],
   ['Rojo = detenerse','C','Convención que orienta acciones.'],
   ['Una atmósfera de calma que transmite un azul pálido','A','Sensación, tono.'],
   ['Un portazo que te sobresalta','B','Irrupción: algo que golpea.'],
   ['Saber que el ícono de engranaje significa "configuración"','C','Hábito aprendido.'],
   ['La textura áspera, sin pensar todavía en qué objeto','A','Cualidad posible.'],
   ['Un choque entre dos autos','B','Hecho singular que deja marca.'],
   ['Las normas de tránsito','C','Ley general.']]},
 {id:'rep', n:'Cualisigno / Sinsigno / Legisigno', d:'¿Cómo aparece el representamen?',
  bins:[{k:'A',n:'Cualisigno',d:'cualidad pura'},{k:'B',n:'Sinsigno',d:'ocurrencia única'},{k:'C',n:'Legisigno',d:'patrón general'}],
  items:[
   ['La "rojez" en abstracto','A','Una cualidad aún no manifestada en un objeto.'],
   ['Una mancha de pintura roja derramada en el piso','B','Ocurrencia singular y concreta.'],
   ['La letra "A" que reconocés en cualquier tipografía','C','Modelo general que se reproduce.'],
   ['El brillo metálico como cualidad','A','Cualidad sin soporte singular.'],
   ['Este afiche puntual pegado en esta pared','B','Un ejemplar único.'],
   ['La forma del signo "$" en cualquier contexto','C','Un patrón convencional repetible.'],
   ['Un grito específico que escuchaste anoche','B','Un hecho singular.']]},
 {id:'int', n:'Rema / Dicente / Argumento', d:'¿Qué tipo de interpretación produce?',
  bins:[{k:'A',n:'Rema',d:'posibilidad abierta'},{k:'B',n:'Dicente',d:'verdadero o falso'},{k:'C',n:'Argumento',d:'razonamiento'}],
  items:[
   ['Un boceto abstracto que evoca misterio','A','Deja la interpretación abierta.'],
   ['Un cartel "Velocidad máxima 60 km/h"','B','Afirma algo sobre un estado de cosas.'],
   ['Un manual de instrucciones paso a paso','C','Conduce a una conclusión o acción.'],
   ['Un termómetro que marca 38 °C','B','Información factual verificable.'],
   ['Unas notas musicales sueltas que sugieren una atmósfera','A','Cualidades que definen un objeto posible.'],
   ['Un silogismo: "todos los hombres son mortales…"','C','Razonamiento lógico.'],
   ['El letrero "Abierto" en la puerta de un local','B','Puede ser verdadero o falso.']]},
 {id:'enun', n:'Enunciado / Enunciación', d:'¿Lo dicho o el modo de decirlo?',
  bins:[{k:'A',n:'Enunciado',d:'¿qué dice?'},{k:'B',n:'Enunciación',d:'¿desde dónde lo dice?'}],
  items:[
   ['"Descuento del 30% en zapatillas"','A','Es la información, el contenido.'],
   ['El uso del tuteo y el imperativo "¡Aprovechá!"','B','Modo de decir: cercanía y urgencia.'],
   ['El tema de una campaña: la donación de sangre','A','Lo explícito.'],
   ['Una tipografía institucional seria que construye autoridad','B','La voz y la posición del enunciador.'],
   ['El destinatario imaginado: jóvenes universitarios','B','El enunciatario es parte de la enunciación.'],
   ['La historia que cuenta un corto','A','Lo dicho, el relato.'],
   ['El tono irónico con el que se presenta la historia','B','Valoración: parte de la enunciación.'],
   ['La fecha y el lugar de un evento en un flyer','A','Información explícita.']]},
 {id:'gen', n:'Género primario / secundario', d:'¿Simple y espontáneo, o elaborado?',
  bins:[{k:'A',n:'Primario',d:'simple, oral, inmediato'},{k:'B',n:'Secundario',d:'complejo, elaborado'}],
  items:[
   ['Un saludo en el ascensor','A','Simple y espontáneo.'],
   ['Una novela','B','Práctica cultural elaborada.'],
   ['Pedir algo en la verdulería','A','Vínculo inmediato con la situación.'],
   ['Una campaña publicitaria','B','Reelabora géneros primarios.'],
   ['Una disculpa cara a cara','A','Oral y situacional.'],
   ['Un informe técnico','B','Complejo y planificado.'],
   ['Un video guionado que simula una charla entre amigos','B','Parece primario, pero todo fue planificado.'],
   ['Un audiovisual documental','B','Género secundario.']]},
 {id:'con', n:'Contrato objetivo / pedagógico / cómplice', d:'¿Qué relación propone con el destinatario?',
  bins:[{k:'A',n:'Objetivo',d:'"esto es así"'},{k:'B',n:'Pedagógico',d:'"yo sé, te explico"'},{k:'C',n:'Cómplice',d:'"vos y yo sabemos"'}],
  items:[
   ['Un gráfico de datos con grilla neutral y sin adjetivos','A','El enunciador se borra y cuantifica.'],
   ['El onboarding de una app que te guía paso a paso','B','Asimetría: te enseña a usarla.'],
   ['Una marca que habla con memes y jerga de su comunidad','C','Códigos compartidos y cercanía.'],
   ['La señalética de un hospital','B','Orientar, explicar y conducir.'],
   ['Un informe oficial de estadísticas','A','Efecto de transparencia.'],
   ['Una infografía que explica cómo reciclar','B','Uno sabe y orienta.'],
   ['Una prenda que te hace sentir parte de una tribu','C','Estilo, identidad, pertenencia.'],
   ['Un memorial que busca una experiencia afectiva','C','Identificación emocional.'],
   ['Una forma de objeto minimalista con la función a la vista','A','Función visible, neutralidad.'],
   ['Un tutorial de YouTube','B','"Yo sé, te explico."']]},
 {id:'pr', n:'Producción / Reconocimiento', d:'¿Condición de producción o de reconocimiento?',
  bins:[{k:'A',n:'Producción',d:'qué lo hizo posible'},{k:'B',n:'Reconocimiento',d:'desde dónde se lee'}],
  items:[
   ['Las tecnologías de impresión disponibles en ese momento','A','Tecnologías: condición de producción.'],
   ['La memoria y competencias culturales del público','B','Desde dónde se interpreta.'],
   ['Quién encargó y financió la campaña','A','Instituciones.'],
   ['Un grupo que convierte el afiche en meme irónico','B','El uso también es reconocimiento.'],
   ['Los estilos y referencias previas que retoma la pieza','A','Discursos previos.'],
   ['La posición social de quien mira la publicidad','B','Condición de reconocimiento.'],
   ['El contexto histórico en que se diseñó','A','Historia.'],
   ['Leer la misma pieza 30 años después en otra plataforma','B','El contexto de lectura cambia el sentido.']]},
 {id:'cf', n:'Canon / Fandom', d:'¿Modelo viejo o modelo transmedia?',
  bins:[{k:'A',n:'Canon',d:'medios aislados, decide la industria'},{k:'B',n:'Fandom',d:'los usuarios participan'}],
  items:[
   ['Fans que escriben historias nuevas con los personajes','B','Contenido generado por usuarios.'],
   ['Un libro y una película pensados por separado, solo por ganancia','A','Todo aislado.'],
   ['La industria cultural decide qué tiene éxito','A','El público no tiene rol.'],
   ['Una saga planeada con estrategia para conectar cine, serie y videojuego','B','Producción integrada.'],
   ['Comunidades que proponen teorías y la productora las incorpora','B','La participación modela el relato.'],
   ['El público solo consume, sin opinión','A','Modelo canónico.']]}
];

// 3. La matriz de Peirce — cada caso va a una de las 9 celdas
const MATRIZ_N = ['Cualisigno','Sinsigno','Legisigno','Ícono','Índice','Símbolo','Rema','Dicente','Argumento'];
const MATRIZ = [
 {c:1,s:'La "rojez" pensada en abstracto, antes de estar en un objeto.',e:'Cualisigno (representamen · Primeridad).'},
 {c:1,s:'La suavidad como cualidad, sin pensar en qué tela.',e:'Cualisigno: cualidad pura.'},
 {c:2,s:'Una mancha de pintura roja derramada una única vez en el piso.',e:'Sinsigno (representamen · Segundidad).'},
 {c:2,s:'Este ticket puntual que te dieron hoy en el súper.',e:'Sinsigno: ocurrencia singular.'},
 {c:3,s:'La letra "A" que reconocés en cualquier tipografía.',e:'Legisigno (representamen · Terceridad).'},
 {c:3,s:'La forma de la señal de "pare", válida en cualquier esquina.',e:'Legisigno: patrón general que se repite.'},
 {c:4,s:'Un dibujo realista de un perro.',e:'Ícono (objeto · Primeridad): semejanza.'},
 {c:4,s:'Un retrato fotográfico.',e:'Ícono: se parece a lo que representa.'},
 {c:5,s:'El humo que sale de una chimenea.',e:'Índice (objeto · Segundidad): conexión causal con el fuego.'},
 {c:5,s:'Una huella digital.',e:'Índice: indica que alguien estuvo ahí.'},
 {c:6,s:'La palabra "PERRO" escrita.',e:'Símbolo (objeto · Terceridad): convención.'},
 {c:6,s:'El logo de una marca.',e:'Símbolo: todos los logos funcionan por convención.'},
 {c:7,s:'Un boceto abstracto que te hace imaginar una atmósfera de misterio.',e:'Rema (interpretante · Primeridad): interpretación abierta.'},
 {c:7,s:'Unas notas sueltas de música que sugieren tristeza.',e:'Rema: cualidades que definen un objeto posible.'},
 {c:8,s:'Un termómetro que marca 38 °C.',e:'Dicente (interpretante · Segundidad): verdadero o falso.'},
 {c:8,s:'Un cartel en la ruta: "Velocidad máxima 60 km/h".',e:'Dicente: informa un estado de cosas.'},
 {c:9,s:'Un manual de instrucciones que te guía paso a paso hasta armar un mueble.',e:'Argumento (interpretante · Terceridad).'},
 {c:9,s:'Un silogismo: "Todos los hombres son mortales; Sócrates es hombre; Sócrates es mortal".',e:'Argumento: razonamiento que conduce a una conclusión.'}
];

// 4. ¿Qué ley de la interfaz es?
const LEYES_N = ['Lugar de la interacción','No son transparentes','Forman un ecosistema','Evolucionan','Coevolucionan con sus usuarios',
  'No se extinguen, se transforman','Si no puede, lo simula','Leyes de la complejidad','Son prácticas políticas','Lugar de la innovación'];
const LEYES = [
 {n:1,s:'Entrás al aula y vas directo a tu asiento sin pensarlo.',e:'<b>Ley 1</b>: parecen naturales, pero están construidas para guiar nuestras interacciones.'},
 {n:1,s:'El recorrido de un supermercado te lleva por las góndolas sin que lo notes.',e:'<b>Ley 1</b>: la interfaz es el lugar de la interacción.'},
 {n:2,s:'En clase, ser alumno implica estar callado y escuchar: una regla naturalizada.',e:'<b>Ley 2</b>: hay una jerarquía de poder oculta tras un sistema de reglas.'},
 {n:2,s:'El orden de los botones de una app empuja a aceptar todo y esconde "rechazar".',e:'<b>Ley 2</b>: ninguna interfaz es neutral; las decisiones de diseño transmiten valores.'},
 {n:3,s:'Tenés una Mac y para que todo funcione bien necesitás iPhone y AirPods.',e:'<b>Ley 3</b>: las interfaces conforman un ecosistema, a veces cerrado a propósito.'},
 {n:4,s:'De la piedra y el papiro al libro y al e-book.',e:'<b>Ley 4</b>: las interfaces evolucionan, nunca terminan de morir.'},
 {n:4,s:'De la carreta al auto: lo que quedó fueron las ruedas.',e:'<b>Ley 4</b>: evolucionan.'},
 {n:5,s:'El teclado se fue modificando a medida que los usuarios cambiaban su forma de escribir.',e:'<b>Ley 5</b>: usuarios e interfaces se ajustan mutuamente.'},
 {n:6,s:'El teclado físico de los celulares fue reemplazado por uno táctil en pantalla.',e:'<b>Ley 6</b>: no se extinguen, se reciclan en nuevas tecnologías.'},
 {n:6,s:'El ícono de "guardar" sigue siendo un disquete aunque ya nadie los use.',e:'<b>Ley 6</b>: los elementos del pasado se reciclan.'},
 {n:7,s:'Una pantalla táctil "vibra" y hace ruido de click para simular un botón físico.',e:'<b>Ley 7</b>: si una interfaz no puede hacer algo, lo simula.'},
 {n:8,s:'La primera vez que usás un software profesional necesitás que alguien te enseñe.',e:'<b>Ley 8</b>: están sometidas a las leyes de la complejidad.'},
 {n:9,s:'Sacar un turno de salud solo por app deja afuera a quien no tiene smartphone.',e:'<b>Ley 9</b>: el diseño y uso de una interfaz son prácticas políticas.'},
 {n:9,s:'Un banco cuya app no acepta a jubilados de PAMI.',e:'<b>Ley 9</b>: decisiones que representan posturas culturales y políticas.'},
 {n:10,s:'Los asistentes de voz como Siri o Alexa.',e:'<b>Ley 10</b>: la interfaz es el lugar de la innovación.'},
 {n:10,s:'Pedirle a una IA que te arme una presentación hablándole.',e:'<b>Ley 10</b>: nuevas formas de interacción.'}
];

// 5. Memotest
const MEMO = [
 ['Peirce','Signo triádico'],
 ['Benveniste','Enunciado y enunciación'],
 ['Bajtín','Polifonía'],
 ['Verón','Semiosis social'],
 ['Eco','Lector modelo'],
 ['Casetti','Tres niveles de análisis del film'],
 ['Volnovich','El documental no es un espejo'],
 ['Scolari','Narrativas transmedia'],
 ['Simondon','La tecnología como prótesis'],
 ['Ícono','Semejanza'],
 ['Índice','Conexión física'],
 ['Símbolo','Convención'],
 ['Primeridad','Cualidad posible'],
 ['Segundidad','Hecho, irrupción'],
 ['Terceridad','Ley, hábito'],
 ['Dicente','Verdadero o falso'],
 ['Deixis','Aquí, allá, ahora'],
 ['Heteroglosia','La lengua hecha de muchas voces'],
 ['Contrato pedagógico','"Yo sé, te explico"'],
 ['Contrato cómplice','"Vos y yo sabemos"'],
 ['Huella','Marca de operaciones sociales'],
 ['Fandom','Los usuarios generan contenido']
];

// 6. Ordenar secuencias
const TIMELINES = [
 {t:'Ordená la inferencia del ejemplo de Peirce',
  items:['Percibo: veo humo','Hipótesis: hay fuego','Actúo según esa inferencia']},
 {t:'Ordená la cadena de semiosis del carpincho',
  items:['Carpincho','Mascota','Fidelidad','Un amigo: alguien que está incondicionalmente']},
 {t:'Ordená las categorías con el ejemplo del rojo',
  items:['Primeridad: el rojo como color','Segundidad: una luz roja encendida','Terceridad: rojo = detenerse']},
 {t:'Ordená el esquema de Verón',
  items:['Condiciones de producción','Discurso (la pieza material)','Condiciones de reconocimiento']},
 {t:'Ordená los 4 movimientos para analizar con Verón',
  items:['Delimitar: ¿cuál es el discurso?','Reconstruir: ¿qué condiciones lo hicieron posible?','Leer huellas: ¿qué operaciones quedaron?','Comparar: ¿qué cambia al circular?']},
 {t:'Ordená el ciclo de vida de un género discursivo',
  items:['Nace en una práctica social concreta','Persiste porque facilita expectativas de lectura','Cambia cuando cambian prácticas, tecnologías y públicos','Desaparece o se vuelve memoria cultural']},
 {t:'Ordená los tres actos del diseño audiovisual',
  items:['Percepción: observar críticamente el entorno','Concreción: dar forma sensible y material','Mediación: reconocer la interpretación social']},
 {t:'Ordená la estructura narrativa de un film',
  items:['Inicio: situación, conflicto o desequilibrio','Desarrollo: acontecimientos, decisiones y transformaciones','Final: cierra, altera o deja abierta la situación']},
 {t:'Ordená los niveles de análisis de Casetti (de lo concreto a lo abstracto)',
  items:['Fenomenológico: lo que pasa concretamente','Formal: estructuras narrativas, ángulos, luces','Abstracto: temas y conceptos amplios']},
 {t:'Ordená la evolución de la interfaz del libro (ley 4)',
  items:['Piedra','Papiro','Libro impreso','E-book']}
];

// 7. Casos prácticos — análisis guiado con varias preguntas por pieza
const CASOS = [
 {t:'Campaña de vacunación del Ministerio de Salud',
  d:'Un afiche en la vía pública: foto de una abuela abrazando a su nieto, el texto "Vacunate. Cuidarte es cuidarlos" en tipografía sans serif, el logo del ministerio abajo y un QR para sacar turno.',
  qs:[
   {q:'"Vacunate. Cuidarte es cuidarlos" en imperativo y tuteo pertenece al nivel de…',o:['El enunciado','La enunciación','La Primeridad','El canon'],r:1,e:'El tuteo y el imperativo son modalidades del decir: enunciación (cercanía, orden afectiva).'},
   {q:'El logo del ministerio construye un enunciador…',o:['Cómplice y provocador','Institucional y experto','Ausente','Pedagógico y neutral a la vez, sin marcas'],r:1,e:'El Estado habla desde la autoridad institucional.'},
   {q:'El QR que obliga a sacar turno por celular puede leerse con Scolari como…',o:['Ley 9: la interfaz como práctica política','Ley 6: se transforma','Un ícono','Un género primario'],r:0,e:'Decide quién puede acceder (quien tiene smartphone): una decisión política.'},
   {q:'La foto de la abuela con el nieto, respecto de esas personas, es un…',o:['Símbolo','Índice','Ícono','Legisigno'],r:2,e:'La fotografía se relaciona con lo que muestra por semejanza.'}]},
 {t:'Zapatillas Air Force 1',
  d:'Unas zapatillas de básquet de los 80 que llevan el nombre del avión presidencial de EE.UU. Hoy circulan como objeto de moda urbana, se coleccionan y se customizan, y en redes aparecen memes sobre quienes las usan.',
  qs:[
   {q:'Que el nombre retome el del avión presidencial es, para Verón, una condición de producción del tipo…',o:['Discursos previos','Reconocimiento','Huella sonora','Contrato cómplice'],r:0,e:'Cruza el discurso de la tecnología/aviación con el de la indumentaria.'},
   {q:'Coleccionarlas, customizarlas y hacer memes sobre ellas son…',o:['Condiciones de producción','Modos de reconocimiento','Géneros primarios','Interpretantes finales'],r:1,e:'Apropiar, remixar, ironizar y coleccionar también son modos de reconocimiento.'},
   {q:'Que una zapatilla de básquet hoy sea moda urbana muestra que…',o:['El sentido está adentro del objeto','El sentido no viaja intacto: se transforma al circular','No hay circulación','El contrato de lectura es fijo'],r:1,e:'Del mensaje a la circulación: siempre hay un desfase.'},
   {q:'¿Cuál es el primer movimiento correcto para analizarlas?',o:['Hablar de "la marca Nike" en general','Delimitar este modelo concreto como discurso','Comparar con Adidas','Leer el interpretante final'],r:1,e:'Delimitar: una pieza concreta, no la marca en abstracto.'}]},
 {t:'Onboarding de una app bancaria',
  d:'Al abrir la app por primera vez aparecen 4 pantallas con ilustraciones simples, flechas y textos como "Tocá acá para ver tu saldo". Al final, un botón grande "¡Listo, empecemos!".',
  qs:[
   {q:'¿Qué contrato de lectura propone?',o:['Objetivo','Pedagógico','Cómplice','Ninguno'],r:1,e:'"Yo sé, te explico": asimetría que orienta y conduce (tutorial, onboarding).'},
   {q:'Que existan estas pantallas porque la app es difícil de usar sin ayuda se relaciona con la ley…',o:['8 · complejidad','3 · ecosistema','10 · innovación','6 · se transforma'],r:0,e:'Necesitás que alguien te enseñe; cuando lo entendés, sabés qué hacer.'},
   {q:'Los gestos, el feedback y los botones son huellas…',o:['Materiales','Interactivas','Sonoras','Espaciales'],r:1,e:'Huellas interactivas: gestos, feedback, permisos, restricciones.'},
   {q:'Entrar a ver tu saldo "sin pensar cómo se hace" porque todas las apps bancarias se parecen muestra que…',o:['Los géneros facilitan expectativas de lectura','El texto es abierto','No hay enunciación','Es un índice'],r:0,e:'Los géneros persisten porque anticipan la lectura (el ejemplo del banco de la clase).'}]},
 {t:'Una saga juvenil de fantasía',
  d:'Empezó como una serie de libros. Hoy tiene películas, un videojuego que cuenta la historia de un personaje secundario, un parque temático, juguetes y miles de fanfics que la productora mira para planear nuevas temporadas.',
  qs:[
   {q:'¿Por qué es una narrativa transmedia y no una simple adaptación?',o:['Porque tiene muchas ventas','Porque se expande en varios medios, cada uno cuenta otra parte y los usuarios participan','Porque empezó en un libro','Porque tiene películas'],r:1,e:'Expansión del relato + participación de los usuarios.'},
   {q:'El videojuego sobre un personaje secundario corresponde al componente…',o:['Trama (spin-off)','Soportes','Universos','Canon'],r:0,e:'La trama principal se amplía con spin-offs.'},
   {q:'Que la productora lea los fanfics para planear temporadas es propio del…',o:['Canon','Fandom','Contrato objetivo','Género primario'],r:1,e:'Los usuarios proponen ideas y modelan el relato.'},
   {q:'El parque temático y los juguetes son soportes…',o:['Digitales','Materiales','Sonoros','Primarios'],r:1,e:'Se combinan soportes digitales y materiales.'}]},
 {t:'Documental sobre la crisis de 2001',
  d:'Planos cerrados de caras cansadas, cámara en mano en las marchas, música tensa y luz gris. Termina con una placa de texto con cifras de desempleo. Se estrenó en un festival y años después circula recortado en TikTok con otra música.',
  qs:[
   {q:'Decidir mostrar el desempleo y no otros temas corresponde a la…',o:['Percepción','Concreción','Mediación','Terceridad'],r:0,e:'Observar críticamente el entorno y detectar conflictos.'},
   {q:'La cámara en mano, la luz gris y la música tensa corresponden a la…',o:['Percepción','Concreción','Mediación','Circulación'],r:1,e:'Dar forma sensible y material a la idea.'},
   {q:'Que en TikTok circule recortado con otra música y se lea distinto es…',o:['Percepción','Concreción','Mediación','Un error del autor'],r:2,e:'Circulación, dispositivo y recepción transforman el mensaje.'},
   {q:'La placa final con cifras de desempleo tiende a un contrato…',o:['Cómplice','Objetivo','Pedagógico','Abierto'],r:1,e:'Cuantifica e informa impersonalmente: "esto es así". Aunque el documental en su conjunto es una construcción situada.'}]},
 {t:'Una remera con una frase de una canción',
  d:'Una marca de ropa estampa en una remera un verso famoso de una banda de rock nacional, con tipografía de fanzine. La compran sobre todo fans que se reconocen en esa referencia.',
  qs:[
   {q:'Usar el verso de otro en un diseño nuevo es, para Bajtín, un caso de…',o:['Palabra de nadie','Palabra ajena que se vuelve propia en la nueva situación','Palabra inventada','Ruido'],r:1,e:'Siempre hablamos con palabras ajenas, y nos apropiamos de ellas en la enunciación.'},
   {q:'La presencia de la voz de la banda dentro del diseño de la marca es…',o:['Polifonía','Deixis','Primeridad','Conclusividad'],r:0,e:'Múltiples voces en un mismo discurso.'},
   {q:'¿Qué contrato de lectura propone con los fans?',o:['Objetivo','Pedagógico','Cómplice','Ninguno'],r:2,e:'"Vos y yo sabemos de qué hablamos": código compartido, pertenencia.'},
   {q:'La tipografía de fanzine es una huella…',o:['Visual','Sonora','Interactiva','Espacial'],r:0,e:'Visuales: color, tipografía, encuadre, iconografía. Remite a un discurso previo (la cultura under).'}]}
];

/* ---------- menú ---------- */
const GAMES = [
 {id:'autor',  ic:'🎓', n:'¿Quién lo dijo?',          d:'Peirce, Benveniste, Bajtín, Verón, Eco, Casetti, Scolari… atribuí cada idea a su autor.'},
 {id:'matriz', ic:'🔳', n:'La matriz de Peirce',      d:'Ubicá cada ejemplo en su casillero del cuadro de las 9 clases de signos.'},
 {id:'clas',   ic:'⚖️', n:'Clasificador',             d:'Nueve grupos: ícono/índice/símbolo, categorías, enunciado/enunciación, contratos, canon/fandom y más.'},
 {id:'casos',  ic:'🔍', n:'Casos prácticos',          d:'Analizá piezas reales paso a paso: enunciación, contrato, huellas, transmedia y audiovisual.'},
 {id:'ley',    ic:'📱', n:'¿Qué ley de la interfaz es?', d:'Situaciones cotidianas: identificá cuál de las 10 leyes de Scolari se aplica.'},
 {id:'tf',     ic:'⏱️', n:'Contrarreloj V/F',         d:'Verdadero o falso a toda velocidad. 10 segundos por afirmación.'},
 {id:'memo',   ic:'🧠', n:'Memotest',                 d:'Encontrá los pares autor ↔ idea y concepto ↔ definición. 8 pares por partida.'},
 {id:'orden',  ic:'🔢', n:'Ordená la secuencia',      d:'Semiosis, movimientos de Verón, actos audiovisuales, géneros y más.'}
];

function gameHome(){
  const sel=$('#gameSel'), st=$('#gameStage');
  sel.style.display=''; st.style.display='none'; st.innerHTML='';
  sel.innerHTML=GAMES.map(g=>
    `<button class="gcard" data-g="${g.id}"><span class="ic">${g.ic}</span><h4>${g.n}</h4><p>${g.d}</p></button>`).join('');
  sel.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>launchGame(b.dataset.g));
}

function gameShell(title, inner, extra=''){
  const sel=$('#gameSel'), st=$('#gameStage');
  sel.style.display='none'; st.style.display='';
  st.innerHTML=`<div class="gstage">
    <div class="ghead"><h3>${title}</h3>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">${extra}
        <button class="btn g" id="gBack">← Juegos</button></div></div>
    <div id="gBody">${inner}</div></div>`;
  $('#gBack').onclick=gameHome;
}

function launchGame(id){
  ({autor:gAutor, matriz:gMatriz, clas:gClas, casos:gCasos, ley:gLey, tf:gTF, memo:gMemo, orden:gOrden})[id]();
}

function endScreen(box, score, total, good, bad, again, wrong, extraBtns=''){
  const pct=Math.round(score/total*100);
  box.innerHTML=`<div class="score"><div class="big">${pct}%</div>
    <div class="msg">${score} de ${total}</div>
    <div class="sub">${pct>=80?good:bad}</div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="btn p" id="gAgain">Jugar de nuevo</button>${extraBtns}</div></div>
    ${wrong.length?`<div class="review">${wrong.map(w=>`<div class="ri">${w}</div>`).join('')}</div>`:''}`;
  $('#gAgain').onclick=again;
  return pct;
}

/* marca las opciones de una lista tras responder */
function markOpts(wrap, correct, picked, attr='v'){
  wrap.querySelectorAll(`[data-${attr}]`).forEach(x=>{
    x.onclick=null; x.classList.add('dis');
    if(x.dataset[attr]===String(correct)) x.classList.add('ok');
    else if(x===picked) x.classList.add('bad');
  });
}

/* ---------- 1. ¿QUIÉN LO DIJO? ---------- */
function gAutor(){
  const todos=[...new Set(AUTORES.map(x=>x.a))];
  let pool=shuffle(AUTORES).slice(0,15), i=0, score=0, wrong=[];
  gameShell('🎓 ¿Quién lo dijo?','<div id="aBody"></div>','<span class="tag acc" id="aScore">0 / 0</span>');
  draw();

  function draw(){
    if(i>=pool.length) return endScreen($('#aBody'),score,pool.length,'Tenés los autores claros.','Repasá quién aporta qué: es lo que más se pregunta.',gAutor,wrong);
    const it=pool[i];
    const opts=shuffle([it.a,...shuffle(todos.filter(a=>a!==it.a)).slice(0,3)]);
    $('#aBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/pool.length)*100}%"></i></div>
      <p style="text-align:center;font-size:13px;color:var(--txt3);margin-bottom:10px">¿De quién es esta idea?</p>
      <span class="chip-big" style="font-size:17px;font-weight:600;line-height:1.5;max-width:620px">${it.t}</span>
      <div style="max-width:560px;margin:20px auto 0">
        ${opts.map(o=>`<button class="opt" data-v="${o}"><span class="k">·</span>${o}</button>`).join('')}
      </div>
      <div id="aFb" style="max-width:600px;margin:14px auto 0"></div>`;
    $('#aBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{
      const ok=b.dataset.v===it.a;
      markOpts($('#aBody'),it.a,b);
      if(ok) score++; else wrong.push(`<b>${it.a}</b>${it.t}`);
      $('#aScore').textContent=`${score} / ${pool.length}`;
      $('#aFb').innerHTML=`<div class="expl">${ok?'✅ <b>Correcto.</b>':'❌ <b>Era '+it.a+'.</b>'}</div>
        <button class="btn p" id="kNext" style="display:block;margin:0 auto">Siguiente →</button>`;
      $('#kNext').onclick=()=>{i++;draw()};
    });
  }
}

/* ---------- 2. LA MATRIZ DE PEIRCE ---------- */
function gMatriz(){
  let pool=shuffle(MATRIZ).slice(0,12), i=0, score=0, wrong=[];
  gameShell('🔳 La matriz de Peirce','<div id="mxBody"></div>','<span class="tag acc" id="mxScore">0 / 0</span>');
  draw();

  function grid(){
    const narrow=window.innerWidth<560;
    const cols=narrow?['1ª · Cualidad','2ª · Hecho','3ª · Ley']:['Primeridad','Segundidad','Terceridad'];
    const rows=narrow?['Represen&shy;tamen','Objeto','Interpre&shy;tante']:['Representamen','Objeto','Interpretante'];
    const lab=`color:var(--txt3);font-weight:700;${narrow?'font-size:10.5px':'text-transform:uppercase;letter-spacing:.4px'}`;
    const cell=`padding:12px 2px;border-radius:10px;border:1px solid var(--line);background:var(--panel2);color:var(--txt);font-weight:700;font-size:${narrow?11.5:13.5}px;cursor:pointer;font-family:inherit;transition:.15s`;
    return `<div style="display:grid;grid-template-columns:minmax(0,.8fr) repeat(3,minmax(0,1fr));gap:6px;max-width:600px;margin:18px auto 0;font-size:11.5px">
      <div></div>${cols.map(c=>`<div style="text-align:center;padding:4px 0;${lab}">${c}</div>`).join('')}
      ${rows.map((r,ri)=>`<div style="display:flex;align-items:center;hyphens:manual;${lab}">${r}</div>`+
        [0,1,2].map(ci=>{const n=ri*3+ci+1;return `<button data-c="${n}" style="${cell}"><span style="display:block;font-size:10.5px;color:var(--txt3)">${n}</span>${MATRIZ_N[n-1]}</button>`}).join('')).join('')}
    </div>`;
  }

  function draw(){
    if(i>=pool.length) return endScreen($('#mxBody'),score,pool.length,'Dominás el cuadro de Peirce.','Repasá la unidad 6 del resumen: filas = tricotomías, columnas = categorías.',gMatriz,wrong);
    const it=pool[i];
    $('#mxBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/pool.length)*100}%"></i></div>
      <p style="text-align:center;font-size:13px;color:var(--txt3);margin-bottom:10px">¿En qué casillero va este signo?</p>
      <span class="chip-big" style="font-size:17px;font-weight:600;line-height:1.5;max-width:620px">${it.s}</span>
      ${grid()}
      <div id="mxFb" style="max-width:600px;margin:16px auto 0"></div>`;
    $('#mxBody').querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>{
      const ok=+b.dataset.c===it.c;
      $('#mxBody').querySelectorAll('[data-c]').forEach(x=>{
        x.onclick=null; x.style.cursor='default';
        if(+x.dataset.c===it.c) x.style.cssText+=';border-color:var(--ok);background:rgba(46,204,113,.16)';
        else if(x===b) x.style.cssText+=';border-color:var(--bad);background:rgba(255,77,109,.16)';
        else x.style.opacity='.5';
      });
      if(ok) score++; else wrong.push(`<b>${it.s}</b>${it.e}`);
      $('#mxScore').textContent=`${score} / ${pool.length}`;
      $('#mxFb').innerHTML=`<div class="expl">${ok?'✅ <b>Correcto.</b> ':'❌ <b>Era '+MATRIZ_N[it.c-1]+'.</b> '}${it.e}</div>
        <button class="btn p" id="kNext" style="display:block;margin:0 auto">Siguiente →</button>`;
      $('#kNext').onclick=()=>{i++;draw()};
    });
  }
}

/* ---------- 3. CLASIFICADOR ---------- */
function gClas(grupo){
  if(!grupo){
    gameShell('⚖️ Clasificador', `
      <p style="text-align:center;color:var(--txt2);font-size:14px;margin-bottom:20px">Elegí qué grupo querés practicar.</p>
      <div class="gsel">${GRUPOS.map(d=>
        `<button class="gcard" data-d="${d.id}"><h4>${d.n}</h4><p>${d.d}</p>
         <p style="margin-top:8px;font-size:12px;color:var(--txt3)">${d.items.length} casos</p></button>`).join('')}</div>`);
    $('#gBody').querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>gClas(GRUPOS.find(d=>d.id===b.dataset.d)));
    return;
  }
  const name=k=>grupo.bins.find(b=>b.k===k).n;
  let pool=shuffle(grupo.items), i=0, score=0, wrong=[];
  gameShell('⚖️ '+grupo.n,'<div id="cBody"></div>',
    `<span class="tag acc" id="cScore">0 / ${pool.length}</span>
     <button class="btn g" id="cOther">Otro grupo</button>`);
  $('#cOther').onclick=()=>gClas();
  draw();

  function draw(){
    if(i>=pool.length){
      endScreen($('#cBody'),score,pool.length,'Ese grupo lo tenés.','Volvé al resumen: es una distinción que suele preguntarse.',()=>gClas(grupo),wrong,
        '<button class="btn g" id="cPick">Elegir otro</button>');
      $('#cPick').onclick=()=>gClas(); return;
    }
    const [txt]=pool[i];
    $('#cBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/pool.length)*100}%"></i></div>
      <p style="text-align:center;font-size:13px;color:var(--txt3);margin-bottom:10px">${grupo.d}</p>
      <span class="chip-big" style="font-size:17px;font-weight:600;line-height:1.5;max-width:600px">${txt}</span>
      <div class="bins" style="max-width:${grupo.bins.length>2?640:520}px;margin:20px auto 0">
        ${grupo.bins.map(b=>`<button class="bin" data-v="${b.k}"><div class="bn">${b.n}</div><div class="bd">${b.d}</div></button>`).join('')}
      </div>
      <div id="cFb" style="max-width:600px;margin:16px auto 0"></div>`;
    $('#cBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>answer(b.dataset.v,b));
  }
  function answer(v,btn){
    const [txt,correct,expl]=pool[i], ok=v===correct;
    $('#cBody').querySelectorAll('[data-v]').forEach(b=>{
      b.onclick=null;
      if(b.dataset.v===correct) b.style.cssText='border-color:var(--ok);background:rgba(46,204,113,.14);border-style:solid';
      else if(b===btn) b.style.cssText='border-color:var(--bad);background:rgba(255,77,109,.14);border-style:solid';
    });
    if(ok) score++; else wrong.push(`<b>${txt}</b>${name(correct)} — ${expl}`);
    $('#cScore').textContent=`${score} / ${pool.length}`;
    $('#cFb').innerHTML=`<div class="expl">${ok?'✅ <b>Correcto.</b> ':'❌ <b>Era '+name(correct)+'.</b> '}${expl}</div>
      <button class="btn p" id="cNext" style="display:block;margin:0 auto">Siguiente →</button>`;
    $('#cNext').onclick=()=>{i++;draw()};
  }
}

/* ---------- 4. CASOS PRÁCTICOS ---------- */
function gCasos(caso){
  if(!caso){
    gameShell('🔍 Casos prácticos', `
      <p style="text-align:center;color:var(--txt2);font-size:14px;margin-bottom:20px">
        Elegí una pieza y analizala paso a paso con los autores de la materia.</p>
      <div class="gsel">${CASOS.map((c,n)=>
        `<button class="gcard" data-k="${n}"><h4>${c.t}</h4><p>${c.d.slice(0,110)}…</p>
         <p style="margin-top:8px;font-size:12px;color:var(--txt3)">${c.qs.length} preguntas</p></button>`).join('')}</div>`);
    $('#gBody').querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>gCasos(CASOS[+b.dataset.k]));
    return;
  }
  let i=0, score=0, wrong=[];
  const qs=caso.qs.map(q=>{const idx=shuffle(q.o.map((_,n)=>n));return {...q,o:idx.map(n=>q.o[n]),r:idx.indexOf(q.r)}});
  gameShell('🔍 '+caso.t,'<div id="kBody"></div>',
    `<span class="tag acc" id="kScore">0 / ${qs.length}</span><button class="btn g" id="kOther">Otro caso</button>`);
  $('#kOther').onclick=()=>gCasos();
  draw();

  function draw(){
    if(i>=qs.length){
      endScreen($('#kBody'),score,qs.length,'Buen análisis.','Repasá las explicaciones y probá de nuevo.',()=>gCasos(caso),wrong,
        '<button class="btn g" id="kPick">Elegir otro caso</button>');
      $('#kPick').onclick=()=>gCasos(); return;
    }
    const q=qs[i];
    $('#kBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/qs.length)*100}%"></i></div>
      <div class="card" style="max-width:640px;margin:0 auto 18px;font-size:14px;color:var(--txt2)">
        <span class="tag warn" style="margin-bottom:8px;display:inline-block">La pieza</span><br>${caso.d}</div>
      <div class="qz-q" style="max-width:640px;margin:0 auto 6px">${i+1}. ${q.q}</div>
      <div style="max-width:640px;margin:10px auto 0">
        ${q.o.map((o,n)=>`<button class="opt" data-v="${n}"><span class="k">${'ABCD'[n]}</span>${o}</button>`).join('')}
      </div>
      <div id="kFb" style="max-width:640px;margin:14px auto 0"></div>`;
    $('#kBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{
      const ok=+b.dataset.v===q.r;
      markOpts($('#kBody'),q.r,b);
      if(ok) score++; else wrong.push(`<b>${q.q}</b>${q.o[q.r]} — ${q.e}`);
      $('#kScore').textContent=`${score} / ${qs.length}`;
      $('#kFb').innerHTML=`<div class="expl">${ok?'✅ <b>Correcto.</b> ':'❌ <b>No.</b> '}${q.e}</div>
        <button class="btn p" id="kNext" style="display:block;margin:0 auto">Siguiente →</button>`;
      $('#kNext').onclick=()=>{i++;draw()};
    });
  }
}

/* ---------- 5. ¿QUÉ LEY DE LA INTERFAZ ES? ---------- */
function gLey(){
  let pool=shuffle(LEYES).slice(0,12), i=0, score=0, wrong=[];
  gameShell('📱 ¿Qué ley de la interfaz es?','<div id="lBody"></div>','<span class="tag acc" id="lScore">0 / 0</span>');
  draw();

  function draw(){
    if(i>=pool.length) return endScreen($('#lBody'),score,pool.length,'Las leyes de Scolari las tenés.','Repasá la unidad 20 del resumen.',gLey,wrong);
    const it=pool[i];
    $('#lBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/pool.length)*100}%"></i></div>
      <span class="chip-big" style="font-size:17px;font-weight:600;line-height:1.5;max-width:620px">${it.s}</span>
      <div style="max-width:640px;margin:20px auto 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:0 10px">
        ${LEYES_N.map((n,k)=>`<button class="opt" data-v="${k+1}" style="padding:10px 14px;font-size:13.5px"><span class="k">${k+1}</span>${n}</button>`).join('')}
      </div>
      <div id="lFb" style="max-width:600px;margin:14px auto 0"></div>`;
    $('#lBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{
      const ok=+b.dataset.v===it.n;
      markOpts($('#lBody'),it.n,b);
      if(ok) score++; else wrong.push(`<b>${it.s}</b>${it.e}`);
      $('#lScore').textContent=`${score} / ${pool.length}`;
      $('#lFb').innerHTML=`<div class="expl">${ok?'✅ ':'❌ '}${it.e}</div>
        <button class="btn p" id="kNext" style="display:block;margin:0 auto">Siguiente →</button>`;
      $('#kNext').onclick=()=>{i++;draw()};
    });
  }
}

/* ---------- 6. CONTRARRELOJ V/F ---------- */
function gTF(){
  let pool=shuffle(TF).slice(0,25), i=0, score=0, streak=0, best=0, timer=null, left=10, wrong=[];
  gameShell('⏱️ Contrarreloj Verdadero / Falso','<div id="tBody"></div>',
    '<span class="tag warn" id="tStreak">racha 0</span><span class="tag acc" id="tScore">0</span>');
  $('#gBack').addEventListener('click',()=>clearInterval(timer));
  draw();

  function draw(){
    if(i>=pool.length) return end();
    const it=pool[i];
    $('#tBody').innerHTML=`
      <div class="tf-box">
        <div class="tf-timer"><i id="tBar" style="width:100%"></i></div>
        <div class="tf-stmt">${it.s}</div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <button class="btn s" data-v="1" style="min-width:150px;border-color:rgba(46,204,113,.5)">✔ Verdadero</button>
          <button class="btn s" data-v="0" style="min-width:150px;border-color:rgba(255,77,109,.5)">✘ Falso</button>
        </div>
        <div id="tFb" style="margin-top:18px"></div>
      </div>`;
    $('#tBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>answer(b.dataset.v==='1'));
    left=10; clearInterval(timer);
    timer=setInterval(()=>{
      left-=0.1;
      const bar=$('#tBar'); if(!bar){clearInterval(timer);return}
      bar.style.width=Math.max(0,left/10*100)+'%';
      if(left<=0){clearInterval(timer);answer(null)}
    },100);
  }
  function answer(v){
    clearInterval(timer);
    const it=pool[i], ok=v===it.v;
    $('#tBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=null);
    if(ok){score++;streak++;best=Math.max(best,streak)} else {streak=0;wrong.push(`<b>${it.s}</b>${it.e}`)}
    $('#tStreak').textContent='racha '+streak;
    $('#tScore').textContent=score;
    $('#tFb').innerHTML=`<div class="expl">${v===null?'⏰ <b>Se acabó el tiempo.</b> ':(ok?'✅ <b>Bien.</b> ':'❌ <b>No.</b> ')}
      Es <b>${it.v?'VERDADERO':'FALSO'}</b>. ${it.e}</div>
      <button class="btn p" id="tNext">Siguiente →</button>`;
    $('#tNext').onclick=()=>{i++;draw()};
  }
  function end(){
    saveBest('streak',best);
    endScreen($('#tBody'),score,pool.length,`Muy sólido. Mejor racha: ${best}.`,`Mejor racha: ${best}. Revisá los que fallaste abajo.`,gTF,wrong);
  }
}

/* ---------- 7. MEMOTEST ---------- */
function gMemo(){
  const pairs=shuffle(MEMO).slice(0,8);
  let deck=shuffle(pairs.flatMap((p,idx)=>[{id:idx,t:p[0],side:0},{id:idx,t:p[1],side:1}]));
  let open=[], found=0, moves=0, lock=false;
  gameShell('🧠 Memotest','<div id="mBody"></div>','<span class="tag acc" id="mMoves">0 jugadas</span>');
  $('#mBody').innerHTML=`<p style="text-align:center;color:var(--txt2);font-size:13.5px;margin-bottom:18px">
      Encontrá los 8 pares <b>autor / concepto ↔ idea</b>.</p>
    <div class="memo" id="memoGrid">${deck.map((c,n)=>`<div class="mc" data-n="${n}">${c.t}</div>`).join('')}</div>
    <div id="mEnd" style="margin-top:20px"></div>`;

  $('#memoGrid').querySelectorAll('.mc').forEach(el=>el.onclick=()=>{
    if(lock) return;
    const n=+el.dataset.n;
    if(el.classList.contains('done')||el.classList.contains('up')) return;
    el.classList.add('up'); open.push({n,el});
    if(open.length===2){
      moves++; $('#mMoves').textContent=moves+' jugadas'; lock=true;
      const [a,b]=open;
      if(deck[a.n].id===deck[b.n].id && deck[a.n].side!==deck[b.n].side){
        setTimeout(()=>{a.el.classList.replace('up','done');b.el.classList.replace('up','done');
          open=[];lock=false;found++;if(found===8)finish()},420);
      }else{
        setTimeout(()=>{a.el.classList.remove('up');b.el.classList.remove('up');open=[];lock=false},900);
      }
    }
  });
  function finish(){
    $('#mEnd').innerHTML=`<div class="score" style="padding:26px"><div class="big">${moves}</div>
      <div class="msg">jugadas</div>
      <div class="sub">${moves<=14?'Memoria de élite.':moves<=22?'Muy bien.':'Se puede mejorar: mirá bien antes de tocar.'}</div>
      <button class="btn p" id="memAgain">Jugar de nuevo</button></div>`;
    $('#memAgain').onclick=gMemo;
  }
}

/* ---------- 8. ORDENAR SECUENCIAS ---------- */
function gOrden(){
  let ti=0, pool=shuffle(TIMELINES).slice(0,5), score=0;
  gameShell('🔢 Ordená la secuencia','<div id="oBody"></div>');
  draw();

  function draw(){
    if(ti>=pool.length){
      $('#oBody').innerHTML=`<div class="score"><div class="big">${score}/${pool.length}</div>
        <div class="msg">secuencias perfectas</div>
        <div class="sub">Volvé a jugar para que te toquen otras.</div>
        <button class="btn p" id="oAgain">Jugar de nuevo</button></div>`;
      $('#oAgain').onclick=gOrden; return;
    }
    const t=pool[ti];
    let order=shuffle(t.items.map((_,i)=>i));
    while(order.every((v,i)=>v===i)) order=shuffle(order);
    $('#oBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(ti/pool.length)*100}%"></i></div>
      <p style="text-align:center;font-size:15px;font-weight:600;margin-bottom:18px">${t.t}</p>
      <div class="tl" id="tlList">${order.map(i=>
        `<div class="tli" draggable="true" data-i="${i}"><span class="h">⠿</span><span>${t.items[i]}</span></div>`).join('')}</div>
      <p style="text-align:center;font-size:12.5px;color:var(--txt3);margin-top:12px">Arrastrá o usá las flechas para reordenar</p>
      <div style="text-align:center;margin-top:16px"><button class="btn p" id="oCheck">Comprobar</button></div>
      <div id="oFb" style="max-width:620px;margin:14px auto 0"></div>`;
    dragify($('#tlList'));
    $('#oCheck').onclick=()=>{
      const got=[...$('#tlList').children].map(e=>+e.dataset.i);
      const ok=got.every((v,i)=>v===i);
      if(ok) score++;
      [...$('#tlList').children].forEach((e,i)=>e.classList.add(+e.dataset.i===i?'ok':'bad'));
      $('#oCheck').style.display='none';
      $('#oFb').innerHTML=`<div class="expl">${ok?'✅ <b>Perfecto.</b> Ese es el orden correcto.':
        '❌ <b>No es el orden.</b> El correcto es:<br>'+t.items.map((x,n)=>`${n+1}. ${x}`).join('<br>')}</div>
        <button class="btn p" id="oNext" style="display:block;margin:0 auto">Siguiente →</button>`;
      $('#oNext').onclick=()=>{ti++;draw()};
    };
  }
}

function dragify(list){
  let src=null;
  list.querySelectorAll('.tli').forEach(el=>{
    el.ondragstart=()=>{src=el;el.classList.add('drag')};
    el.ondragend=()=>{el.classList.remove('drag');src=null};
    el.ondragover=e=>{
      e.preventDefault();
      if(!src||src===el) return;
      const r=el.getBoundingClientRect();
      list.insertBefore(src, (e.clientY-r.top)/r.height>0.5 ? el.nextSibling : el);
    };
  });
  // en touch el drag nativo no anda: botones ↑ ↓
  list.querySelectorAll('.tli').forEach(el=>{
    const up=document.createElement('button');
    up.textContent='↑'; up.className='mini'; up.style.cssText='margin-left:auto;flex-shrink:0';
    up.onclick=e=>{e.stopPropagation(); const p=el.previousElementSibling; if(p) list.insertBefore(el,p)};
    const dn=document.createElement('button');
    dn.textContent='↓'; dn.className='mini'; dn.style.cssText='flex-shrink:0';
    dn.onclick=e=>{e.stopPropagation(); const n=el.nextElementSibling; if(n) list.insertBefore(n,el)};
    el.append(up,dn);
  });
}
