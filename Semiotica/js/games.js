/* ============================================================
   JUEGOS — Semiótica
   ============================================================ */

/* ---------- datos de los juegos ---------- */

// 1. ¿Quién lo dijo?
const AUTORES = [
 {a:'Saussure',  t:'Propone la <b>semiología</b>: "una ciencia que estudie la vida de los signos en el seno de la vida social".'},
 {a:'Saussure',  t:'El signo es <b>diádico</b>: significante + significado.'},
 {a:'Saussure',  t:'Distingue <b>lengua</b> (sistema social) de <b>habla</b> (uso individual).'},
 {a:'Saussure',  t:'"La lengua es un <b>sistema de valores</b>": el valor surge por oposición.'},
 {a:'Saussure',  t:'Opone <b>sintagma</b> (lo que está) a <b>paradigma</b> (lo que podría estar).'},
 {a:'Saussure',  t:'Opone <b>sincronía</b> (corte en el tiempo) a <b>diacronía</b> (evolución).'},
 {a:'Peirce',    t:'El signo es <b>triádico</b>: representamen, objeto e interpretante.'},
 {a:'Peirce',    t:'Introduce la <b>semiosis</b>: el proceso continuo de interpretación.'},
 {a:'Barthes',   t:'Los <b>tres mensajes</b> de la imagen: icónico no codificado, icónico codificado y lingüístico.'},
 {a:'Barthes',   t:'Las funciones de <b>anclaje</b> y <b>relevo</b> del texto sobre la imagen.'},
 {a:'Barthes',   t:'El <b>mito</b> es un <b>lenguaje robado</b> que naturaliza la ideología.'},
 {a:'Barthes',   t:'«La cocina del sentido»: los objetos no solo funcionan, <b>también significan</b>.'},
 {a:'Barthes',   t:'Las dos <b>coordenadas del objeto</b>: simbólica y taxonómica.'},
 {a:'Barthes',   t:'Analiza el aviso de <b>Panzani</b> y la "italianidad".'},
 {a:'Jakobson',  t:'Los <b>6 elementos</b>: emisor, receptor, mensaje, código, canal y contexto.'},
 {a:'Shannon y Weaver', t:'El <b>modelo matemático</b> y el concepto de <b>ruido</b>.'},
 {a:'Palo Alto', t:'El <b>modelo orquestal</b> y los <b>5 axiomas</b> de la comunicación.'},
 {a:'Palo Alto', t:'"Es <b>imposible no comunicar</b>".'},
 {a:'Berger',    t:'«Modos de ver»: cómo se construye la <b>imagen femenina</b> en la pintura occidental.'},
 {a:'Dubois',    t:'Los <b>tres siglos</b> de la fotografía: ícono, sospecha e índice.'},
 {a:'Sontag',    t:'"<b>Fotografiar es apropiarse</b> de lo fotografiado" · la foto es <b>signo de ausencia</b>.'},
 {a:'Sontag',    t:'La fotografía es <b>coleccionar el mundo</b>; encuadrar es recortar tiempo y espacio.'},
 {a:'Fontcuberta',t:'La <b>posfotografía</b>: se pierde la autoría y la imagen puede <b>no tener referente</b>.'},
 {a:'Sibilia',   t:'El paso de la <b>intimidad</b> a la <b>extimidad</b>.'},
 {a:'Debord',    t:'La <b>sociedad del espectáculo</b>.'},
 {a:'Bauman',    t:'La <b>modernidad líquida</b>.'},
 {a:'Lefebvre',  t:'La <b>tríada espacial</b>: práctica espacial, representaciones del espacio y espacios de representación.'},
 {a:'Lefebvre',  t:'El <b>espacio abstracto</b> del capitalismo: homogéneo, fragmentado y jerárquico.'},
 {a:'Augé',      t:'<b>Lugares</b> (identidad, relación, historia) y <b>no lugares</b> (tránsito y anonimato).'},
 {a:'Foucault',  t:'Las <b>heterotopías</b>: los "espacios otros".'},
 {a:'Foucault',  t:'El <b>biopoder</b>: el Estado moderno administra la vida.'},
 {a:'Papanek',   t:'La industria <b>nace para ser descartable</b>; propone el consumo sustentable.'},
 {a:'Sadin',     t:'La <b>tecnocracia</b>: multimillonarios y tecnologías que manejan gobiernos.'},
 {a:'Cartier-Bresson', t:'El <b>momento decisivo</b>: capturar sin intervenir ni planificar.'}
];

// 2. Clasificador — duplas conceptuales
const DUPLAS = [
 {id:'denocon', n:'Denotación / Connotación', d:'¿Es lectura literal o cultural?',
  A:'Denotación', Ad:'lo literal, descriptivo',
  B:'Connotación', Bd:'lo cultural e ideológico',
  items:[
   ['Paquetes de pasta, una lata de salsa y tomates dentro de una red','A','Es lo que se ve: la imagen literal, reconocible y perceptiva.'],
   ['La paleta tricolor que evoca Italia como tradición y "autenticidad"','B','La cultura completa lo que la imagen no dice literalmente.'],
   ['Un soldado saludando una bandera','A','Primer nivel: un acto de respeto, la imagen literal.'],
   ['La grandeza del Estado y la idea de integración colonial','B','Segundo nivel: el signo mitológico, ideológico.'],
   ['Una composición de alimentos dispuesta como escena pictórica','A','Lo que está efectivamente presente en la imagen.'],
   ['El prestigio que la publicidad toma de la tradición pictórica','B','Convoca elementos ausentes y culturalmente reconocibles.'],
   ['Una mujer sirviendo corbatas a un hombre en la cama','A','La descripción de lo que muestra la imagen.'],
   ['La idea de que la mujer debe servir al hombre','B','El mensaje ideológico que la pieza construye.'],
   ['Negro = elegancia (en Occidente)','B','Es una equivalencia culturalmente codificada, no una propiedad del color.'],
   ['Un reloj con correa metálica y esfera cuadrada','A','La descripción material del objeto.']]},
 {id:'anclrel', n:'Anclaje / Relevo', d:'¿El texto repite o suma?',
  A:'Anclaje', Ad:'repite y fija el sentido',
  B:'Relevo', Bd:'suma un sentido nuevo',
  items:[
   ['Una bebida cubierta de escarcha con el texto "está fría"','A','El texto repite lo que la imagen ya muestra.'],
   ['Unas papas fritas donde el logo permite reconocer de qué marca son','B','Sin ese dato no se sabría: suma información que la imagen no da.'],
   ['El nombre del producto debajo de la foto del envase','A','Función denominativa: guía la identificación.'],
   ['La ficha técnica al pie de un aviso de electrodomésticos','A','Reduce la ambigüedad y fija la lectura.'],
   ['El globo de diálogo de una historieta que cambia el sentido de la viñeta','B','Texto e imagen se complementan para producir un sentido nuevo.'],
   ['El texto de un meme que resignifica por completo la foto','B','La imagen no ilustra: participa del sentido junto al texto.'],
   ['El epígrafe de una foto periodística que dice quién es la persona','A','Denomina y guía la interpretación.'],
   ['Un slogan que agrega una promesa que la imagen no muestra','B','Aporta información ausente en la imagen.'],
   ['El rótulo "SALIDA" junto a una flecha','A','Repite y fija el sentido que la flecha ya indica.']]},
 {id:'lenhab', n:'Lengua / Habla', d:'¿Sistema compartido o uso concreto?',
  A:'Lengua', Ad:'sistema social compartido',
  B:'Habla', Bd:'uso individual y concreto',
  items:[
   ['El idioma español y sus reglas','A','El sistema compartido por la comunidad.'],
   ['Un audio de WhatsApp de una persona','B','La realización individual y situada del código.'],
   ['El manual de marca de una empresa','A','El sistema visual compartido que ordena las piezas.'],
   ['Un posteo de Instagram de esa marca','B','Una pieza concreta que usa el sistema.'],
   ['Es un fenómeno social, homogéneo e involuntario','A','Son los rasgos de la lengua.'],
   ['Es individual, heterogénea, física y voluntaria','B','Son los rasgos del habla.'],
   ['Es el código en sí mismo','A','La lengua es el código; el habla es su uso.'],
   ['Es el uso del código','B','El habla realiza el sistema.'],
   ['Un afiche impreso de una campaña','B','Una realización particular del sistema.']]},
 {id:'sinpar', n:'Sintagma / Paradigma', d:'¿Lo que está o lo que podría estar?',
  A:'Sintagma', Ad:'relaciones en presencia',
  B:'Paradigma', Bd:'relaciones en ausencia',
  items:[
   ['Logotipo + color + tipografía + imagen + soporte en una pieza terminada','A','Los elementos están presentes formando una cadena.'],
   ['Serif / sans serif / display / script como opciones de tipografía','B','Las opciones posibles para ese lugar; solo una aparece.'],
   ['"Hombre bueno"','A','Los elementos están juntos en la cadena.'],
   ['Neutro / flúo / pastel / saturado como opciones de color','B','El repertorio de opciones entre las que se elige.'],
   ['La composición concreta que entregás al cliente','A','Es el resultado de combinar: la cadena presente.'],
   ['Las tipografías que descartaste y no se ven en la pieza','B','Es virtual, pero esas ausencias influyen en la interpretación.'],
   ['Papel / plástico / vidrio / metal como materiales posibles','B','El repertorio de materiales del que se elige uno.'],
   ['El orden en que se leen los elementos de un afiche','A','Los elementos presentes y sus relaciones.']]},
 {id:'lugnolug', n:'Lugar / No lugar', d:'¿Identidad y relación, o tránsito?',
  A:'Lugar', Ad:'identidad · relación · historia',
  B:'No lugar', Bd:'tránsito · anonimato · reglas',
  items:[
   ['Un club de barrio donde conviven distintas clases sociales','A','Tiene identidad, favorece encuentros y conserva memorias.'],
   ['Un aeropuerto','B','Espacio de tránsito, anonimato y estandarización.'],
   ['Una autopista','B','No está diseñada para que conozcas a alguien.'],
   ['Un hotel de cadena','B','Estandarizado y organizado por reglas.'],
   ['Una plaza donde la gente se encuentra sin necesidad de consumir','A','Tiene relación social y se carga de memoria colectiva.'],
   ['Un mural que transforma una pared en memoria pública','A','Conserva marcas, relatos y memorias colectivas.'],
   ['Un cajero automático usado solo para extraer plata','B','Tránsito puro, sin arraigo.'],
   ['Una feria artesanal de la comunidad del barrio','A','Genera pertenencia y redes entre quienes producen y venden.']]}
];

// 3. ¿Qué axioma es?
const AXIOMAS = [
 {n:1,s:'Un edificio sin ninguna señalización deja a la gente desorientada.',e:'<b>Axioma 1 — es imposible no comunicar.</b> La ausencia de señalización también comunica: produce desorientación o exclusión.'},
 {n:1,s:'Alguien no responde un mensaje y mira para otro lado.',e:'<b>Axioma 1.</b> Todo comportamiento puede adquirir valor de mensaje: incluso el silencio comunica.'},
 {n:2,s:'Un local dice "bienvenidos" pero tiene rejas, vigilancia y una entrada inaccesible.',e:'<b>Axioma 2 — todo mensaje define una relación.</b> La forma en que se comunica establece un vínculo que modifica cómo se interpreta el contenido.'},
 {n:2,s:'La misma frase dicha en tono seco o en tono amable cambia por completo cómo la toma el otro.',e:'<b>Axioma 2.</b> Depende de la forma en la que se dice y de cómo lo toma la otra persona.'},
 {n:3,s:'"Pusimos carteles porque la gente se pierde" / "la gente se pierde porque hay carteles por todos lados".',e:'<b>Axioma 3 — cada parte ordena la secuencia.</b> Cada participante decide desde su punto de vista qué es causa y qué es respuesta.'},
 {n:3,s:'Dos personas discuten y cada una cree que la otra empezó.',e:'<b>Axioma 3.</b> Cada uno organiza los hechos desde su propia puntuación de la secuencia.'},
 {n:4,s:'Un cartel dice "acceso para todos" pero la entrada solo tiene escaleras.',e:'<b>Axioma 4 — lenguaje digital y analógico.</b> Lo digital (el texto) contradice lo analógico (la forma construida).'},
 {n:4,s:'Alguien dice "estoy bien" con los brazos cruzados y sin mirar a los ojos.',e:'<b>Axioma 4.</b> El lenguaje analógico (gestos, postura) contradice al digital (las palabras).'},
 {n:5,s:'Dos compañeros debaten una idea y aparece una escalada por demostrar quién tiene razón.',e:'<b>Axioma 5 — simetría.</b> Los participantes se posicionan en un plano de igualdad; puede aparecer la escalada.'},
 {n:5,s:'Una relación médico–paciente donde el paciente nunca puede repreguntar.',e:'<b>Axioma 5 — complementariedad.</b> Posiciones diferentes que pueden rigidizarse si una nunca admite respuestas.'},
 {n:5,s:'Una mesa redonda en una reunión frente a un escenario elevado con un mostrador alto.',e:'<b>Axioma 5.</b> La mesa redonda favorece la simetría; el escenario elevado refuerza la complementariedad.'}
];

// 5. Memotest — autor ↔ aporte
const MEMO = [
 ['Saussure','Significante + significado (diádico)'],
 ['Peirce','Representamen, objeto e interpretante'],
 ['Jakobson','Los 6 elementos de la comunicación'],
 ['Shannon y Weaver','El ruido y el modelo lineal'],
 ['Palo Alto','El modelo orquestal y los 5 axiomas'],
 ['Barthes','Anclaje y relevo · el mito'],
 ['Berger','«Modos de ver»'],
 ['Dubois','Los tres siglos de la fotografía'],
 ['Sontag','Fotografiar es apropiarse'],
 ['Fontcuberta','La posfotografía sin referente'],
 ['Sibilia','De la intimidad a la extimidad'],
 ['Debord','La sociedad del espectáculo'],
 ['Bauman','La modernidad líquida'],
 ['Lefebvre','La tríada espacial'],
 ['Augé','Lugares y no lugares'],
 ['Foucault','Heterotopías y biopoder'],
 ['Papanek','La industria descartable'],
 ['Cartier-Bresson','El momento decisivo'],
 ['Sadin','La tecnocracia'],
 ['Sintagma','Lo que está: en presencia'],
 ['Paradigma','Lo que podría estar: en ausencia'],
 ['Sincronía','Un corte en el tiempo'],
 ['Diacronía','La evolución en el tiempo'],
 ['Polisemia','Muchos sentidos posibles']
];

// 6. Ordenar secuencias
const TIMELINES = [
 {t:'Ordená el circuito del habla de Saussure',
  items:['Psíquico — el hablante asocia concepto + imagen acústica',
         'Fisiológico — fonación: intervienen los órganos del habla',
         'Físico — las ondas sonoras viajan por el aire',
         'Fisiológico — audición del oyente',
         'Psíquico — el oyente asocia imagen acústica + concepto']},
 {t:'Ordená los tres siglos de la fotografía según Dubois',
  items:['Siglo XIX — ÍCONO: documento, objetiva, memoria',
         'Siglo XX — LA SOSPECHA: subjetiva y codificada',
         'Siglo XXI — ÍNDICE: crisis de representación e imagen algorítmica']},
 {t:'Ordená la periodización técnica de la fotografía',
  items:['1826–1880 — Pioneros: experimentación fotoquímica',
         '1900–1990 — Industrial: cámara masiva, prensa, álbum',
         '1990–2008 — Digital: sensor, píxel, software',
         '2008 → Móvil + redes: captura y circulación en tiempo real',
         '2020 → Computacional: la cámara calcula, completa y genera']},
 {t:'Ordená los 4 niveles de lectura del aviso Panzani',
  items:['Denotación: la red de mercado y las provisiones',
         'Italianidad: la paleta tricolor como estereotipo cultural',
         'Industria + vida moderna: lo fresco junto a lo industrializado',
         'Naturaleza muerta: el prestigio de la tradición pictórica']},
 {t:'Ordená el proceso de diseñar según Saussure',
  items:['Paradigma: identificar las opciones posibles para cada lugar',
         'Elegir: seleccionar una opción y descartar las demás',
         'Sintagma: combinar las elecciones en una composición',
         'La pieza concreta: el habla, la realización del sistema']},
 {t:'Ordená los pasos para "objetivar" un objeto según Barthes',
  items:['Tomar distancia para poder ser analítico',
         'Aislar en el objeto el significante y el significado',
         'Analizar los sintagmas: en qué contexto se diseña',
         'Leer las connotaciones sin naturalizarlas']}
];

/* ---------- menú ---------- */
const GAMES = [
 {id:'autor',  ic:'🎓', n:'¿Quién lo dijo?',      d:'Atribuí cada concepto a su autor. La pregunta más frecuente de la materia.'},
 {id:'clas',   ic:'⚖️', n:'Clasificador',          d:'Cinco duplas: denotación/connotación, anclaje/relevo, lengua/habla, sintagma/paradigma y lugar/no lugar.'},
 {id:'axioma', ic:'🗣️', n:'¿Qué axioma es?',       d:'Situaciones de diseño y de la vida: identificá cuál de los 5 axiomas se aplica.'},
 {id:'tf',     ic:'⏱️', n:'Contrarreloj V/F',      d:'Verdadero o falso a toda velocidad. 10 segundos por afirmación.'},
 {id:'memo',   ic:'🧠', n:'Memotest de autores',   d:'Encontrá los pares autor ↔ aporte. 8 pares por partida.'},
 {id:'orden',  ic:'🔢', n:'Ordená la secuencia',   d:'Circuito del habla, siglos de la fotografía, niveles de Panzani y más.'}
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
  ({autor:gAutor, clas:gClas, axioma:gAxioma, tf:gTF, memo:gMemo, orden:gOrden})[id]();
}

/* ---------- 1. ¿QUIÉN LO DIJO? ---------- */
function gAutor(){
  const todos=[...new Set(AUTORES.map(x=>x.a))];
  let pool=shuffle(AUTORES).slice(0,15), i=0, score=0, wrong=[];
  gameShell('🎓 ¿Quién lo dijo?','<div id="aBody"></div>','<span class="tag acc" id="aScore">0 / 0</span>');
  draw();

  function draw(){
    if(i>=pool.length) return end();
    const it=pool[i];
    const distract=shuffle(todos.filter(a=>a!==it.a)).slice(0,3);
    const opts=shuffle([it.a,...distract]);
    $('#aBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/pool.length)*100}%"></i></div>
      <p style="text-align:center;font-size:13px;color:var(--txt3);margin-bottom:10px">¿De quién es este aporte?</p>
      <span class="chip-big" style="font-size:17px;font-weight:600;line-height:1.5;max-width:620px">${it.t}</span>
      <div style="max-width:560px;margin:20px auto 0">
        ${opts.map(o=>`<button class="opt" data-v="${o}"><span class="k">·</span>${o}</button>`).join('')}
      </div>
      <div id="aFb" style="max-width:600px;margin:14px auto 0"></div>`;
    $('#aBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{
      const ok=b.dataset.v===it.a;
      $('#aBody').querySelectorAll('[data-v]').forEach(x=>{
        x.onclick=null; x.classList.add('dis');
        if(x.dataset.v===it.a) x.classList.add('ok');
        else if(x===b) x.classList.add('bad');
      });
      if(ok) score++; else wrong.push(`<b>${it.a}</b>${it.t}`);
      $('#aScore').textContent=`${score} / ${pool.length}`;
      $('#aFb').innerHTML=`<div class="expl">${ok?'✅ <b>Correcto.</b>':'❌ <b>Era '+it.a+'.</b>'}</div>
        <button class="btn p" id="aNext" style="display:block;margin:0 auto">Siguiente →</button>`;
      $('#aNext').onclick=()=>{i++;draw()};
    });
  }
  function end(){
    const pct=Math.round(score/pool.length*100);
    $('#aBody').innerHTML=`<div class="score"><div class="big">${pct}%</div>
      <div class="msg">${score} de ${pool.length}</div>
      <div class="sub">${pct>=80?'Tenés los autores claros.':'Repasá quién aporta qué: es lo que más se pregunta.'}</div>
      <button class="btn p" id="aAgain">Jugar de nuevo</button></div>
      ${wrong.length?`<div class="review">${wrong.map(w=>`<div class="ri">${w}</div>`).join('')}</div>`:''}`;
    $('#aAgain').onclick=gAutor;
  }
}

/* ---------- 2. CLASIFICADOR ---------- */
function gClas(dupla){
  if(!dupla){
    gameShell('⚖️ Clasificador', `
      <p style="text-align:center;color:var(--txt2);font-size:14px;margin-bottom:20px">Elegí qué dupla querés practicar.</p>
      <div class="gsel">${DUPLAS.map(d=>
        `<button class="gcard" data-d="${d.id}"><h4>${d.n}</h4><p>${d.d}</p>
         <p style="margin-top:8px;font-size:12px;color:var(--txt3)">${d.items.length} casos</p></button>`).join('')}</div>`);
    $('#gBody').querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>gClas(DUPLAS.find(d=>d.id===b.dataset.d)));
    return;
  }
  let pool=shuffle(dupla.items), i=0, score=0, wrong=[];
  gameShell('⚖️ '+dupla.n,'<div id="cBody"></div>',
    `<span class="tag acc" id="cScore">0 / ${pool.length}</span>
     <button class="btn g" id="cOther">Otra dupla</button>`);
  $('#cOther').onclick=()=>gClas();
  draw();

  function draw(){
    if(i>=pool.length) return end();
    const [txt] = pool[i];
    $('#cBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/pool.length)*100}%"></i></div>
      <p style="text-align:center;font-size:13px;color:var(--txt3);margin-bottom:10px">${dupla.d}</p>
      <span class="chip-big" style="font-size:17px;font-weight:600;line-height:1.5;max-width:600px">${txt}</span>
      <div class="bins" style="max-width:520px;margin:20px auto 0">
        <button class="bin" data-v="A"><div class="bn">${dupla.A}</div><div class="bd">${dupla.Ad}</div></button>
        <button class="bin" data-v="B"><div class="bn">${dupla.B}</div><div class="bd">${dupla.Bd}</div></button>
      </div>
      <div id="cFb" style="max-width:600px;margin:16px auto 0"></div>`;
    $('#cBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>answer(b.dataset.v,b));
  }
  function answer(v,btn){
    const [txt,correct,expl]=pool[i];
    const ok=v===correct;
    $('#cBody').querySelectorAll('[data-v]').forEach(b=>{
      b.onclick=null;
      if(b.dataset.v===correct) b.style.cssText='border-color:var(--ok);background:rgba(46,204,113,.14);border-style:solid';
      else if(b===btn) b.style.cssText='border-color:var(--bad);background:rgba(255,77,109,.14);border-style:solid';
    });
    if(ok) score++; else wrong.push(`<b>${txt}</b>${dupla[correct]} — ${expl}`);
    $('#cScore').textContent=`${score} / ${pool.length}`;
    $('#cFb').innerHTML=`<div class="expl">${ok?'✅ <b>Correcto.</b> ':'❌ <b>Era '+dupla[correct]+'.</b> '}${expl}</div>
      <button class="btn p" id="cNext" style="display:block;margin:0 auto">Siguiente →</button>`;
    $('#cNext').onclick=()=>{i++;draw()};
  }
  function end(){
    const pct=Math.round(score/pool.length*100);
    $('#cBody').innerHTML=`<div class="score"><div class="big">${pct}%</div>
      <div class="msg">${score} de ${pool.length}</div>
      <div class="sub">${pct>=80?'Esa dupla la tenés.':'Volvé al resumen: es una distinción que suele preguntarse.'}</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn p" id="cAgain">Repetir esta dupla</button>
        <button class="btn g" id="cPick">Elegir otra</button></div></div>
      ${wrong.length?`<div class="review">${wrong.map(w=>`<div class="ri">${w}</div>`).join('')}</div>`:''}`;
    $('#cAgain').onclick=()=>gClas(dupla);
    $('#cPick').onclick=()=>gClas();
  }
}

/* ---------- 3. ¿QUÉ AXIOMA ES? ---------- */
function gAxioma(){
  let pool=shuffle(AXIOMAS), i=0, score=0, wrong=[];
  const N=['1 · Imposible no comunicar','2 · Define una relación','3 · Ordena la secuencia','4 · Digital y analógico','5 · Simetría / complementariedad'];
  gameShell('🗣️ ¿Qué axioma es?','<div id="xBody"></div>','<span class="tag acc" id="xScore">0 / 0</span>');
  draw();

  function draw(){
    if(i>=pool.length) return end();
    const it=pool[i];
    $('#xBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/pool.length)*100}%"></i></div>
      <span class="chip-big" style="font-size:17px;font-weight:600;line-height:1.5;max-width:620px">${it.s}</span>
      <div style="max-width:560px;margin:20px auto 0">
        ${N.map((n,k)=>`<button class="opt" data-v="${k+1}"><span class="k">${k+1}</span>${n.replace(/^\d+ · /,'')}</button>`).join('')}
      </div>
      <div id="xFb" style="max-width:600px;margin:14px auto 0"></div>`;
    $('#xBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{
      const ok=+b.dataset.v===it.n;
      $('#xBody').querySelectorAll('[data-v]').forEach(x=>{
        x.onclick=null; x.classList.add('dis');
        if(+x.dataset.v===it.n) x.classList.add('ok');
        else if(x===b) x.classList.add('bad');
      });
      if(ok) score++; else wrong.push(`<b>${it.s}</b>${it.e}`);
      $('#xScore').textContent=`${score} / ${pool.length}`;
      $('#xFb').innerHTML=`<div class="expl">${ok?'✅ ':'❌ '}${it.e}</div>
        <button class="btn p" id="xNext" style="display:block;margin:0 auto">Siguiente →</button>`;
      $('#xNext').onclick=()=>{i++;draw()};
    });
  }
  function end(){
    const pct=Math.round(score/pool.length*100);
    $('#xBody').innerHTML=`<div class="score"><div class="big">${pct}%</div>
      <div class="msg">${score} de ${pool.length}</div>
      <div class="sub">${pct>=80?'Los axiomas los tenés.':'Repasá la unidad 5 del resumen.'}</div>
      <button class="btn p" id="xAgain">Jugar de nuevo</button></div>
      ${wrong.length?`<div class="review">${wrong.map(w=>`<div class="ri">${w}</div>`).join('')}</div>`:''}`;
    $('#xAgain').onclick=gAxioma;
  }
}

/* ---------- 4. CONTRARRELOJ V/F ---------- */
function gTF(){
  let pool=shuffle(TF).slice(0,25), i=0, score=0, streak=0, best=0, timer=null, left=10, wrong=[];
  gameShell('⏱️ Contrarreloj Verdadero / Falso','<div id="tBody"></div>',
    '<span class="tag warn" id="tStreak">racha 0</span><span class="tag acc" id="tScore">0</span>');
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
      const bar=$('#tBar'); if(bar) bar.style.width=Math.max(0,left/10*100)+'%';
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
    const pct=Math.round(score/pool.length*100);
    saveBest('streak',best);
    $('#tBody').innerHTML=`<div class="score"><div class="big">${pct}%</div>
      <div class="msg">${score} de ${pool.length} · mejor racha ${best}</div>
      <div class="sub">${pct>=80?'Muy sólido.':'Revisá los que fallaste abajo.'}</div>
      <button class="btn p" id="tAgain">Jugar de nuevo</button></div>
      ${wrong.length?`<div class="review">${wrong.map(w=>`<div class="ri">${w}</div>`).join('')}</div>`:''}`;
    $('#tAgain').onclick=gTF;
  }
}

/* ---------- 5. MEMOTEST ---------- */
function gMemo(){
  const pairs=shuffle(MEMO).slice(0,8);
  let deck=shuffle(pairs.flatMap((p,idx)=>[{id:idx,t:p[0],side:0},{id:idx,t:p[1],side:1}]));
  let open=[], found=0, moves=0, lock=false;
  gameShell('🧠 Memotest de autores','<div id="mBody"></div>','<span class="tag acc" id="mMoves">0 jugadas</span>');
  $('#mBody').innerHTML=`<p style="text-align:center;color:var(--txt2);font-size:13.5px;margin-bottom:18px">
      Encontrá los 8 pares <b>autor ↔ aporte</b>.</p>
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

/* ---------- 6. ORDENAR SECUENCIAS ---------- */
function gOrden(){
  let ti=0, pool=shuffle(TIMELINES).slice(0,4);
  gameShell('🔢 Ordená la secuencia','<div id="oBody"></div>');
  draw();

  function draw(){
    if(ti>=pool.length) return end();
    const t=pool[ti];
    let order=shuffle(t.items.map((_,i)=>i));
    while(order.every((v,i)=>v===i)) order=shuffle(order);
    $('#oBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(ti/pool.length)*100}%"></i></div>
      <p style="text-align:center;font-size:15px;font-weight:600;margin-bottom:18px">${t.t}</p>
      <div class="tl" id="tlList">${order.map(i=>
        `<div class="tli" draggable="true" data-i="${i}"><span class="h">⠿</span><span>${t.items[i]}</span></div>`).join('')}</div>
      <p style="text-align:center;font-size:12.5px;color:var(--txt3);margin-top:12px">Arrastrá para reordenar</p>
      <div style="text-align:center;margin-top:16px"><button class="btn p" id="oCheck">Comprobar</button></div>
      <div id="oFb" style="max-width:620px;margin:14px auto 0"></div>`;
    dragify($('#tlList'));
    $('#oCheck').onclick=()=>{
      const got=[...$('#tlList').children].map(e=>+e.dataset.i);
      const ok=got.every((v,i)=>v===i);
      [...$('#tlList').children].forEach((e,i)=>e.classList.add(+e.dataset.i===i?'ok':'bad'));
      $('#oCheck').style.display='none';
      $('#oFb').innerHTML=`<div class="expl">${ok?'✅ <b>Perfecto.</b> Ese es el orden correcto.':
        '❌ <b>No es el orden.</b> El correcto es:<br>'+t.items.map((x,n)=>`${n+1}. ${x}`).join('<br>')}</div>
        <button class="btn p" id="oNext" style="display:block;margin:0 auto">Siguiente →</button>`;
      $('#oNext').onclick=()=>{ti++;draw()};
    };
  }
  function end(){
    $('#oBody').innerHTML=`<div class="score"><div class="big">✓</div>
      <div class="msg">Completaste las secuencias</div>
      <div class="sub">Volvé a jugar para que te toquen otras.</div>
      <button class="btn p" id="oAgain">Jugar de nuevo</button></div>`;
    $('#oAgain').onclick=gOrden;
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
  // soporte táctil: mover con toques largos no es fiable, así que añadimos botones
  list.querySelectorAll('.tli').forEach((el,idx)=>{
    const up=document.createElement('button');
    up.textContent='↑'; up.className='mini'; up.style.cssText='margin-left:auto;flex-shrink:0';
    up.onclick=e=>{e.stopPropagation(); const p=el.previousElementSibling; if(p) list.insertBefore(el,p)};
    const dn=document.createElement('button');
    dn.textContent='↓'; dn.className='mini'; dn.style.cssText='flex-shrink:0';
    dn.onclick=e=>{e.stopPropagation(); const n=el.nextElementSibling; if(n) list.insertBefore(n,el)};
    el.append(up,dn);
  });
}
