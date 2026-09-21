/* ============================================================
   APP — router, progreso, resumen, flashcards, quiz, simulacro
   ============================================================ */
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){const j=(Math.random()*(i+1))|0;[a[i],a[j]]=[a[j],a[i]];} return a; };
const norm = s => (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9%\s]/g,'').trim();

/* ---------- PROGRESO (localStorage) ---------- */
const KEY=CONFIG.key;
let P = load();
function load(){
  try{ return Object.assign({read:[],cards:{},quizBest:0,streak:0,sim:{}}, JSON.parse(localStorage.getItem(KEY)||'{}')); }
  catch(e){ return {read:[],cards:{},quizBest:0,streak:0,sim:{}}; }
}
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(P)); }catch(e){} refreshStats(); }
function saveBest(k,v){ if(v>(P[k]||0)){P[k]=v;save();} }

function toast(msg){
  const t=$('#toast'); t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2200);
}

/* ---------- ROUTER ---------- */
const TITLES={inicio:'Inicio',resumen:'Resumen',flashcards:'Flashcards',glosario:'Glosario',
  quiz:'Cuestionario',simulacro:'Simulacro',juegos:'Juegos',material:'Material original'};

function go(v){
  if(!TITLES[v]) v='inicio';
  $$('.view').forEach(s=>s.classList.toggle('on', s.id==='v-'+v));
  $$('#nav a').forEach(a=>a.classList.toggle('on', a.dataset.v===v));
  if(location.hash.slice(1)!==v) history.replaceState(null,'','#'+v);
  $('#mTitle').textContent=TITLES[v];
  closeDrawer();
  window.scrollTo({top:0,behavior:'instant'});
  if(v==='juegos' && $('#gameStage').style.display==='none') gameHome();
}
$$('#nav a').forEach(a=>a.onclick=e=>{e.preventDefault();go(a.dataset.v)});
$$('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));

/* ---------- DRAWER MOBILE ---------- */
function openDrawer(){ $('#side').classList.add('open'); $('#scrim').classList.add('on'); document.body.style.overflow='hidden'; }
function closeDrawer(){ $('#side').classList.remove('open'); $('#scrim').classList.remove('on'); document.body.style.overflow=''; }
$('#mMenu').onclick=()=>$('#side').classList.contains('open')?closeDrawer():openDrawer();
$('#scrim').onclick=closeDrawer;
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeDrawer(); });

/* ---------- TEMA ---------- */
const savedTheme=localStorage.getItem(KEY+'-theme');
if(savedTheme) document.documentElement.dataset.theme=savedTheme;
function toggleTheme(){
  const t=document.documentElement.dataset.theme==='dark'?'light':'dark';
  document.documentElement.dataset.theme=t;
  const m=document.querySelector('meta[name="theme-color"]');
  if(m) m.content = t==='dark' ? '#0c0d12' : '#f4f5f9';
  try{localStorage.setItem(KEY+'-theme',t)}catch(e){}
}
$('#theme').onclick=toggleTheme;
$('#mTheme').onclick=toggleTheme;

/* ============================================================
   GESTOS TÁCTILES
   ============================================================ */
/* swipe horizontal genérico: ignora gestos verticales (deja scrollear) */
function onSwipe(el,{left,right,threshold=60}={}){
  let sx=0,sy=0,dir=null,active=false;
  el.addEventListener('touchstart',e=>{
    if(e.touches.length!==1) return;
    active=true; dir=null; sx=e.touches[0].clientX; sy=e.touches[0].clientY;
  },{passive:true});
  el.addEventListener('touchmove',e=>{
    if(!active) return;
    const dx=e.touches[0].clientX-sx, dy=e.touches[0].clientY-sy;
    if(dir===null && (Math.abs(dx)>10||Math.abs(dy)>10))
      dir = Math.abs(dx)>Math.abs(dy)*1.3 ? 'h' : 'v';
  },{passive:true});
  el.addEventListener('touchend',e=>{
    if(!active) return; active=false;
    if(dir!=='h') return;
    const dx=e.changedTouches[0].clientX-sx;
    if(dx<=-threshold && left) left();
    if(dx>= threshold && right) right();
  },{passive:true});
}

/* abrir el drawer deslizando desde el borde izquierdo */
(function edgeSwipe(){
  let sx=0,sy=0,edge=false,dir=null;
  document.addEventListener('touchstart',e=>{
    if(window.innerWidth>860||e.touches.length!==1) return;
    sx=e.touches[0].clientX; sy=e.touches[0].clientY;
    edge = sx<26 && !$('#side').classList.contains('open'); dir=null;
  },{passive:true});
  document.addEventListener('touchend',e=>{
    if(!edge) return; edge=false;
    const dx=e.changedTouches[0].clientX-sx, dy=e.changedTouches[0].clientY-sy;
    if(dx>70 && Math.abs(dx)>Math.abs(dy)*1.3) openDrawer();
  },{passive:true});
})();
/* cerrar el drawer deslizando hacia la izquierda sobre él */
onSwipe($('#side'),{left:closeDrawer,threshold:50});
$('#reset').onclick=()=>{
  P={read:[],cards:{},quizBest:0,streak:0,sim:{}}; save();
  renderTopics(); buildDeck(); renderSim();
  toast('Progreso reiniciado');
};

/* ============================================================
   INICIO
   ============================================================ */
const TOP_FACTS = CONFIG.topFacts;

function renderHome(){
  $('#nCards').textContent=CARDS.length;
  $('#nQuiz').textContent=QUIZ.length;
  $('#nGlo').textContent=GLOSARIO.length;
  $('#topFacts').innerHTML=TOP_FACTS.map((f,i)=>
    `<li style="padding:7px 0 7px 30px;position:relative;border-bottom:1px solid var(--line)">
      <span style="position:absolute;left:0;top:7px;width:21px;height:21px;border-radius:6px;background:var(--panel2);
      border:1px solid var(--line);display:grid;place-items:center;font-size:11px;font-weight:800;color:var(--acc)">${i+1}</span>${f}</li>`).join('');
  $('#plan').innerHTML=PLAN.map(b=>
    `<div style="margin-bottom:14px"><div style="font-size:13px;font-weight:700;color:var(--acc2);margin-bottom:5px">${b.d}</div>
     <ul style="list-style:none">${b.t.map(x=>`<li style="font-size:13.3px;color:var(--txt2);padding:2px 0 2px 16px;position:relative">
     <span style="position:absolute;left:0;color:var(--txt3)">·</span>${x}</li>`).join('')}</ul></div>`).join('');
  refreshStats();
}
function refreshStats(){
  const t=P.read.length, c=Object.values(P.cards).filter(v=>v>=2).length;
  $('#sTopics').innerHTML=`${t}<span style="font-size:15px;color:var(--txt3)">/${TOPICS.length}</span>`;
  $('#bTopics').style.width=(t/TOPICS.length*100)+'%';
  $('#sCards').innerHTML=`${c}<span style="font-size:15px;color:var(--txt3)">/${CARDS.length}</span>`;
  $('#bCards').style.width=(c/CARDS.length*100)+'%';
  $('#sQuiz').textContent=P.quizBest?P.quizBest+'%':'—';
  $('#bQuiz').style.width=(P.quizBest||0)+'%';
  $('#sStreak').textContent=P.streak||0;
  $('#bStreak').style.width=Math.min(100,(P.streak||0)/TF.length*100)+'%';
}

/* ============================================================
   RESUMEN
   ============================================================ */
function renderTopics(){
  $('#topics').innerHTML=TOPICS.map((t,i)=>{
    const done=P.read.includes(t.id);
    return `<article class="topic" data-id="${t.id}">
      <div class="th"><div class="num">${i+1}</div>
        <div class="tt">${t.t}<small>${t.s}</small></div>
        ${done?'<span class="tag ok">leída</span>':''}
        <span class="chev">▶</span></div>
      <div class="tb">${t.body}
        <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn ${done?'g':'p'}" data-read="${t.id}">${done?'↺ Marcar como no leída':'✓ Marcar como leída'}</button>
          <button class="btn g" data-quizmod="${t.mod||'todos'}">Practicar este tema</button>
        </div>
      </div></article>`;
  }).join('');

  $$('.topic .th').forEach(h=>h.onclick=()=>h.parentElement.classList.toggle('open'));
  $$('[data-read]').forEach(b=>b.onclick=e=>{
    e.stopPropagation();
    const id=b.dataset.read, i=P.read.indexOf(id);
    if(i<0){P.read.push(id);toast('Unidad marcada como leída ✓')} else P.read.splice(i,1);
    save(); const wasOpen=b.closest('.topic').classList.contains('open');
    renderTopics();
    if(wasOpen) $(`.topic[data-id="${id}"]`).classList.add('open');
  });
  $$('[data-quizmod]').forEach(b=>b.onclick=e=>{
    e.stopPropagation();
    go('quiz'); $('#qzMod').value=b.dataset.quizmod; startQuiz();
  });
}
$('#qTopic').oninput=e=>{
  const q=norm(e.target.value);
  $$('.topic').forEach(t=>{
    const hit=!q || norm(t.textContent).includes(q);
    t.classList.toggle('hide',!hit);
    if(q && hit) t.classList.add('open');
  });
};
$('#expandAll').onclick=()=>$$('.topic').forEach(t=>t.classList.add('open'));
$('#collapseAll').onclick=()=>$$('.topic').forEach(t=>t.classList.remove('open'));

/* ============================================================
   FLASHCARDS
   ============================================================ */
let deck=[], di=0, onlyHard=false;
const cats = ['Todas', ...new Set(CARDS.map(c=>c.c))];
$('#fcCat').innerHTML=cats.map(c=>`<option>${c}</option>`).join('');

function buildDeck(){
  const cat=$('#fcCat').value;
  deck = CARDS.map((c,i)=>({...c,i}))
    .filter(c=> (cat==='Todas'||c.c===cat) && (!onlyHard || (P.cards[c.i]||0)<2 ));
  if(!deck.length){ deck=CARDS.map((c,i)=>({...c,i})); toast('No quedan difíciles en esa categoría'); onlyHard=false; }
  deck=shuffle(deck); di=0; showCard();
}
function showCard(){
  const c=deck[di]; if(!c) return;
  const card=$('#fcCard');
  const wasFlipped=card.classList.contains('flip');
  card.classList.remove('flip');
  // si venía dada vuelta, esperamos a que termine el giro para cambiar el texto
  setTimeout(()=>{
    $('#fcTag').textContent=c.c;
    $('#fcQ').innerHTML=c.q;
    $('#fcA').innerHTML=c.a;
  }, wasFlipped?280:0);
  const lvl=P.cards[c.i]||0;
  $('#fcMeta').innerHTML=`Tarjeta <b>${di+1}</b> de <b>${deck.length}</b> &nbsp;·&nbsp; ${
    lvl>=2?'<span class="tag ok">dominada</span>':lvl===1?'<span class="tag warn">en progreso</span>':'<span class="tag">nueva</span>'}`;
  $('#fcBar').style.width=((di)/deck.length*100)+'%';
}
function nav(d){ di=(di+d+deck.length)%deck.length; showCard(); }
function grade(ok){
  const c=deck[di]; if(!c) return;
  P.cards[c.i]=ok ? Math.min(3,(P.cards[c.i]||0)+1) : 0;
  save();
  if(!ok && deck.length>1){ const card=deck.splice(di,1)[0]; deck.splice(Math.min(deck.length, di+3),0,card); }
  else di++;
  if(di>=deck.length){ di=0; toast('¡Mazo completo! Volviendo al principio'); }
  showCard();
}
/* ---------- SWIPE de las tarjetas (touch + mouse) ---------- */
(function cardSwipe(){
  const card=$('#fcCard'), ov=$('#fcOv');
  const TH=85;                       // px para que cuente como calificación
  let sx=0,sy=0,dx=0,dir=null,down=false,pid=null,busy=false;

  const reset=()=>{
    card.style.transition='transform .25s cubic-bezier(.3,1.4,.5,1)';
    card.style.transform=''; ov.style.opacity=0;
  };

  function fly(right){
    busy=true;
    card.style.transition='transform .26s ease, opacity .26s ease';
    card.style.transform=`translateX(${right?700:-700}px) rotate(${right?16:-16}deg)`;
    card.style.opacity='0';
    setTimeout(()=>{
      grade(right);
      card.style.transition='none';
      card.style.transform='translateX(0)';
      ov.style.opacity=0;
      void card.offsetWidth;                       // reflow
      card.style.transition='opacity .22s ease';
      card.style.opacity='1';
      busy=false;
    },260);
  }

  card.addEventListener('pointerdown',e=>{
    if(busy||(e.pointerType==='mouse'&&e.button!==0)) return;
    down=true; dir=null; dx=0; pid=e.pointerId;
    sx=e.clientX; sy=e.clientY;
    card.style.transition='none';
  });

  card.addEventListener('pointermove',e=>{
    if(!down||e.pointerId!==pid) return;
    dx=e.clientX-sx;
    const dy=e.clientY-sy;
    if(dir===null && (Math.abs(dx)>8||Math.abs(dy)>8)){
      dir = Math.abs(dx)>Math.abs(dy)*1.2 ? 'h' : 'v';
      if(dir==='h'){ try{card.setPointerCapture(pid)}catch(err){} }
    }
    if(dir!=='h') return;
    card.style.transform=`translateX(${dx}px) rotate(${dx*0.04}deg)`;
    ov.dataset.dir = dx>0?'ok':'bad';
    ov.textContent  = dx>0?'LA SABÍA':'NO LA SABÍA';
    ov.style.opacity = Math.min(1, Math.abs(dx)/TH);
  });

  function end(e){
    if(!down||(e.pointerId!=null&&e.pointerId!==pid)) return;
    down=false;
    try{card.releasePointerCapture(pid)}catch(err){}
    if(dir==='h'){
      if(Math.abs(dx)>=TH) fly(dx>0); else reset();
    }else if(dir===null){
      card.classList.toggle('flip');   // fue un tap, no un arrastre
    }else{
      reset();
    }
    dir=null; dx=0;
  }
  card.addEventListener('pointerup',end);
  card.addEventListener('pointercancel',end);
})();

$('#fcNext').onclick=()=>nav(1);
$('#fcPrev').onclick=()=>nav(-1);
$('#fcOk').onclick=()=>grade(true);
$('#fcBad').onclick=()=>grade(false);
$('#fcCat').onchange=buildDeck;
$('#fcShuffle').onclick=()=>{deck=shuffle(deck);di=0;showCard();toast('Mazo mezclado')};
$('#fcRestart').onclick=()=>{onlyHard=false;buildDeck()};
$('#fcOnlyHard').onclick=()=>{onlyHard=!onlyHard;$('#fcOnlyHard').className='btn '+(onlyHard?'p':'g');buildDeck()};

document.addEventListener('keydown',e=>{
  if(!$('#v-flashcards').classList.contains('on')) return;
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
  if(e.code==='Space'){e.preventDefault();$('#fcCard').classList.toggle('flip')}
  if(e.key==='ArrowRight')nav(1);
  if(e.key==='ArrowLeft')nav(-1);
  if(e.key==='1')grade(false);
  if(e.key==='2')grade(true);
});

/* ============================================================
   GLOSARIO
   ============================================================ */
function renderGlo(){
  $('#glo').innerHTML=[...GLOSARIO].sort((a,b)=>a[0].localeCompare(b[0],'es'))
    .map(([t,d])=>`<div class="gi"><dt>${t}</dt><dd>${d}</dd></div>`).join('');
}
$('#qGlo').oninput=e=>{
  const q=norm(e.target.value);
  $$('#glo .gi').forEach(g=>g.classList.toggle('hide', !!q && !norm(g.textContent).includes(q)));
};

/* ============================================================
   QUIZ
   ============================================================ */
const mods=['todos',...new Set(QUIZ.map(q=>q.m))];
$('#qzMod').innerHTML=mods.map(m=>`<option value="${m}">${m==='todos'?'Todos los módulos':m}</option>`).join('');

let qz=[], qi=0, qScore=0, qWrong=[];
function startQuiz(){
  const mod=$('#qzMod').value, len=+$('#qzLen').value;
  let pool=QUIZ.filter(q=>mod==='todos'||q.m===mod);
  if(!pool.length){toast('Sin preguntas para ese módulo');return}
  pool=shuffle(pool); if(len>0) pool=pool.slice(0,len);
  qz=pool.map(q=>{
    const idx=shuffle(q.o.map((_,i)=>i));
    return {...q, o:idx.map(i=>q.o[i]), r:idx.indexOf(q.r)};
  });
  qi=0; qScore=0; qWrong=[];
  $('#quizHome').style.display='none'; $('#quizPlay').style.display='';
  drawQ();
}
function drawQ(){
  if(qi>=qz.length) return endQuiz();
  const q=qz[qi];
  $('#quizPlay').innerHTML=`
    <div class="qz-head">
      <span class="tag acc">${q.m}</span>
      <span style="font-size:13px;color:var(--txt3)">Pregunta <b style="color:var(--txt)">${qi+1}</b> de ${qz.length} · aciertos: <b style="color:var(--ok)">${qScore}</b></span>
    </div>
    <div class="qz-bar"><i style="width:${qi/qz.length*100}%"></i></div>
    <div class="qz-q">${q.q}</div>
    <div id="qOpts">${q.o.map((o,i)=>
      `<button class="opt" data-i="${i}"><span class="k">${'ABCD'[i]}</span>${o}</button>`).join('')}</div>
    <div id="qFb"></div>`;
  $$('#qOpts .opt').forEach(b=>b.onclick=()=>pick(+b.dataset.i));
}
function pick(i){
  const q=qz[qi], ok=i===q.r;
  $$('#qOpts .opt').forEach((b,n)=>{
    b.classList.add('dis'); b.onclick=null;
    if(n===q.r) b.classList.add('ok');
    else if(n===i) b.classList.add('bad');
  });
  if(ok) qScore++; else qWrong.push(q);
  $('#qFb').innerHTML=`<div class="expl">${ok?'✅ <b>Correcto.</b> ':'❌ <b>Incorrecto.</b> '}${q.e}</div>
    <button class="btn p" id="qNext">${qi+1<qz.length?'Siguiente pregunta →':'Ver resultado'}</button>`;
  $('#qNext').onclick=()=>{qi++;drawQ()};
}
function endQuiz(){
  const pct=Math.round(qScore/qz.length*100);
  saveBest('quizBest',pct);
  const msg = pct>=90?'Excelente. Estás listo.' : pct>=70?'Muy bien, repasá lo que falló.' :
              pct>=50?'Vas por buen camino, falta afinar.' : 'Volvé al resumen antes de seguir practicando.';
  $('#quizPlay').innerHTML=`<div class="score">
      <div class="big">${pct}%</div>
      <div class="msg">${qScore} de ${qz.length} correctas</div>
      <div class="sub">${msg}</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn p" id="qAgain">Otro intento</button>
        <button class="btn g" id="qHome">Cambiar módulo</button>
      </div>
      ${qWrong.length?`<div class="review">
        <h4 style="font-size:15px;font-weight:700;margin-bottom:12px">Para repasar (${qWrong.length})</h4>
        ${qWrong.map(w=>`<div class="ri"><b>${w.q}</b>${w.e}</div>`).join('')}</div>`:''}
    </div>`;
  $('#qAgain').onclick=startQuiz;
  $('#qHome').onclick=()=>{$('#quizPlay').style.display='none';$('#quizHome').style.display=''};
}
$('#qzStart').onclick=startQuiz;

/* ============================================================
   SIMULACRO
   ============================================================ */
const SIM_MC = QUIZ.filter(q=>q.sim);

function renderSim(){
  $('#sim').innerHTML=`
    <div class="card" style="margin-bottom:20px">
      <h4 style="font-size:15px;font-weight:700;margin-bottom:8px">📋 Estructura del examen</h4>
      <p style="font-size:13.6px;color:var(--txt2)">${CONFIG.simIntro||''}
      Tus respuestas se guardan solas en este navegador.</p>
      <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn p" id="simShow">Revelar todas las respuestas modelo</button>
        ${SIM_FILL.length?'<button class="btn g" id="simCheck">Corregir los completar</button>':''}
        <button class="btn g" id="simClear">Borrar mis respuestas</button>
      </div>
    </div>

    ${SIM_MC.length?'<h3 style="font-size:17px;font-weight:700;margin:26px 0 12px">Parte A · Opción múltiple</h3>':''}
    <div id="simMC"></div>

    ${SIM_FILL.length?'<h3 style="font-size:17px;font-weight:700;margin:30px 0 12px">Parte B · Completar</h3>':''}
    <div class="dev" ${SIM_FILL.length?'':'hidden'}>
      <div class="qn">${CONFIG.fillTitulo||'Completá los espacios en blanco.'}</div>
      ${SIM_FILL.map(f=>`<div style="margin-bottom:10px;font-size:14px;color:var(--txt2)">
        ${f.pre} <input class="fill" data-f="${f.id}" value="${(P.sim[f.id]||'').replace(/"/g,'&quot;')}"></div>`).join('')}
      <div id="fillFb"></div>
    </div>

    ${SIM_DEV.length?'<h3 style="font-size:17px;font-weight:700;margin:30px 0 12px">Parte C · Desarrollo</h3>':''}
    <div id="simDev"></div>`;

  // Opción múltiple
  $('#simMC').innerHTML=SIM_MC.map((q,n)=>`
    <div class="dev">
      <div class="qn">${n+1}. ${q.q}</div>
      <div data-mc="${n}">${q.o.map((o,i)=>
        `<button class="opt" data-i="${i}"><span class="k">${'ABCD'[i]}</span>${o}</button>`).join('')}</div>
      <div class="model" data-mcfb="${n}"></div>
    </div>`).join('');
  $$('[data-mc]').forEach(wrap=>{
    const n=+wrap.dataset.mc, q=SIM_MC[n];
    wrap.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
      const i=+b.dataset.i, ok=i===q.r;
      wrap.querySelectorAll('.opt').forEach((x,j)=>{x.classList.add('dis');x.onclick=null;
        if(j===q.r)x.classList.add('ok'); else if(j===i)x.classList.add('bad');});
      const fb=$(`[data-mcfb="${n}"]`);
      fb.className='model show'; fb.innerHTML=`<div class="mh">${ok?'Correcto':'Incorrecto'}</div>${q.e}`;
    });
  });

  // Completar
  $$('.fill').forEach(inp=>inp.oninput=()=>{P.sim[inp.dataset.f]=inp.value;save()});

  // Desarrollo
  $('#simDev').innerHTML=SIM_DEV.map((d,n)=>`
    <div class="dev">
      <div class="qn">${d.q}</div>
      <textarea data-dev="d${n}" placeholder="Escribí tu respuesta…">${(P.sim['d'+n]||'').replace(/</g,'&lt;')}</textarea>
      <div style="margin-top:10px"><button class="btn g" data-reveal="${n}">Ver respuesta modelo</button></div>
      <div class="model" data-devfb="${n}">
        <div class="mh">Respuesta modelo</div><ul>${d.m.map(x=>`<li>${x}</li>`).join('')}</ul>
      </div>
    </div>`).join('');
  $$('[data-dev]').forEach(t=>t.oninput=()=>{P.sim[t.dataset.dev]=t.value;save()});
  $$('[data-reveal]').forEach(b=>b.onclick=()=>{
    const fb=$(`[data-devfb="${b.dataset.reveal}"]`);
    fb.classList.toggle('show');
    b.textContent=fb.classList.contains('show')?'Ocultar respuesta modelo':'Ver respuesta modelo';
  });

  $('#simShow').onclick=()=>{
    $$('.model').forEach(m=>m.classList.add('show'));
    $$('[data-reveal]').forEach(b=>b.textContent='Ocultar respuesta modelo');
    if(SIM_FILL.length) checkFills();
    toast('Respuestas modelo reveladas');
  };
  if($('#simCheck')) $('#simCheck').onclick=checkFills;
  $('#simClear').onclick=()=>{P.sim={};save();renderSim();toast('Respuestas borradas')};
}
function checkFills(){
  let ok=0;
  SIM_FILL.forEach(f=>{
    const inp=$(`[data-f="${f.id}"]`); if(!inp) return;
    const v=norm(inp.value);
    const hit = v && f.ans.some(a=>norm(a)===v || (v.length>2 && norm(a).includes(v)));
    inp.classList.toggle('ok',!!hit); inp.classList.toggle('bad',!hit);
    if(hit) ok++;
  });
  $('#fillFb').innerHTML=`<div class="expl" style="margin-top:12px">
    <b>${ok} de ${SIM_FILL.length} correctas.</b><br>
    Respuestas esperadas: ${SIM_FILL.map(f=>`<b>${f.ans[0]}</b>`).join(' · ')}</div>`;
}

/* ---------- swipe para avanzar en quiz y juegos ---------- */
// después de responder, deslizar a la izquierda pasa a lo siguiente
['#quizPlay','#gameStage','#sim'].forEach(sel=>{
  const el=$(sel); if(!el) return;
  onSwipe(el,{left:()=>{
    const b = el.querySelector('#qNext,#cNext,#kNext,#tNext,#oNext');
    if(b) b.click();
  },threshold:70});
});

/* ============================================================
   GALERÍA
   ============================================================ */
const IMGS = CONFIG.imgs||[];
function renderGallery(){
  $('#gallery').innerHTML=IMGS.map(([f,c])=>
    `<figure class="fg"><img src="img/${f}" alt="${c}" loading="lazy"><figcaption>${c}</figcaption></figure>`).join('');
}

/* ============================================================
   INIT
   ============================================================ */
renderHome();
renderTopics();
renderGlo();
renderGallery();
renderSim();
buildDeck();
gameHome();
go(location.hash.slice(1) || 'inicio');
window.addEventListener('hashchange',()=>go(location.hash.slice(1)||'inicio'));
