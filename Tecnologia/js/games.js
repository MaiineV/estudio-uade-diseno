/* ============================================================
   JUEGOS
   ============================================================ */
const GAMES = [
 {id:'mix',   ic:'🎨', n:'Mezclador de color',   d:'Jugá con los canales RGB y CMYK y mirá la síntesis aditiva y sustractiva en vivo.'},
 {id:'clas',  ic:'🗃️', n:'¿Ráster o vector?',    d:'Clasificá cada formato por tipo y por destino. Con explicación en cada fallo.'},
 {id:'kelvin',ic:'🌡️', n:'Adiviná los Kelvin',   d:'Mirá la luz y decidí si es cálida, neutra o fría. La trampa clásica del parcial.'},
 {id:'tf',    ic:'⏱️', n:'Contrarreloj V/F',      d:'Verdadero o falso a toda velocidad. 10 segundos por afirmación.'},
 {id:'memo',  ic:'🧠', n:'Memotest de conceptos', d:'Encontrá los pares concepto ↔ definición. 8 pares por partida.'},
 {id:'orden', ic:'🔢', n:'Ordená la secuencia',   d:'Historia del color, escala Kelvin, resoluciones y flujo de imprenta.'}
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
      <div style="display:flex;gap:8px;align-items:center">${extra}
        <button class="btn g" id="gBack">← Juegos</button></div></div>
    <div id="gBody">${inner}</div></div>`;
  $('#gBack').onclick=gameHome;
}

function launchGame(id){
  ({mix:gMix, clas:gClas, kelvin:gKelvin, tf:gTF, memo:gMemo, orden:gOrden})[id]();
}

/* ---------- 1. MEZCLADOR ---------- */
function gMix(){
  gameShell('🎨 Mezclador de color', `
    <div class="toolbar" style="margin-bottom:20px">
      <button class="btn p" id="mRGB">RGB · aditiva</button>
      <button class="btn g" id="mCMYK">CMYK · sustractiva</button>
    </div>
    <div class="mix-stage">
      <div>
        <div id="mSliders"></div>
        <div class="expl" id="mInfo"></div>
      </div>
      <div>
        <div class="mix-prev" id="mPrev">—</div>
        <div style="text-align:center;margin-top:12px;font-size:13px;color:var(--txt2)" id="mVal"></div>
        <div class="toolbar" style="justify-content:center;margin-top:14px">
          <button class="btn g" id="mMax">Todo al máximo</button>
          <button class="btn g" id="mZero">Todo a cero</button>
        </div>
      </div>
    </div>`);

  let mode='rgb';
  const S={r:120,g:80,b:200,c:0,m:0,y:0,k:0};

  function render(){
    const sl=$('#mSliders');
    if(mode==='rgb'){
      sl.innerHTML=[['r','Rojo (Red)','#ff3b3b'],['g','Verde (Green)','#2ecc71'],['b','Azul (Blue)','#3b7bff']]
        .map(([k,l,c])=>`<div class="sld"><label>${l} <span>${S[k]}</span></label>
          <input type="range" min="0" max="255" value="${S[k]}" data-k="${k}"
            style="background:linear-gradient(90deg,#000,${c})"></div>`).join('');
      $('#mInfo').innerHTML='<b>Síntesis aditiva.</b> Cada canal es energía lumínica de 0 a 255. Al sumar los tres al máximo se obtiene <b>blanco</b>. R+G = amarillo · R+B = magenta · G+B = cian. Total: 256³ = 16.777.216 colores.';
    }else{
      sl.innerHTML=[['c','Cian','#00aeef'],['m','Magenta','#ec008c'],['y','Amarillo','#fff200'],['k','Negro (Key)','#000']]
        .map(([k,l,c])=>`<div class="sld"><label>${l} <span>${S[k]}%</span></label>
          <input type="range" min="0" max="100" value="${S[k]}" data-k="${k}"
            style="background:linear-gradient(90deg,#fff,${c})"></div>`).join('');
      $('#mInfo').innerHTML='<b>Síntesis sustractiva.</b> Cada tinta resta luz al soporte; la suma de pigmentos tiende al <b>negro</b>. Recordá: hace falta al menos un <b>8 %</b> de variación para que el ojo perciba el cambio.';
    }
    sl.querySelectorAll('input').forEach(i=>i.oninput=()=>{
      S[i.dataset.k]=+i.value;
      i.previousElementSibling.querySelector('span').textContent=i.value+(mode==='cmyk'?'%':'');
      paint();
    });
    paint();
  }
  function paint(){
    const p=$('#mPrev');
    if(mode==='rgb'){
      const hex='#'+[S.r,S.g,S.b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
      p.style.background=`rgb(${S.r},${S.g},${S.b})`;
      p.style.color=(S.r*.299+S.g*.587+S.b*.114)>150?'#111':'#fff';
      p.textContent=hex;
      $('#mVal').innerHTML=`rgb(${S.r}, ${S.g}, ${S.b}) &nbsp;·&nbsp; hex <b>${hex}</b>`;
    }else{
      const f=k=>255*(1-S[k]/100)*(1-S.k/100);
      const r=Math.round(f('c')),g=Math.round(f('m')),b=Math.round(f('y'));
      p.style.background=`rgb(${r},${g},${b})`;
      p.style.color=(r*.299+g*.587+b*.114)>150?'#111':'#fff';
      p.textContent=`C${S.c} M${S.m} Y${S.y} K${S.k}`;
      $('#mVal').innerHTML=`Simulación en pantalla: rgb(${r}, ${g}, ${b})<br><span style="font-size:12px;color:var(--txt3)">El CMYK real depende del papel y del perfil de imprenta.</span>`;
    }
  }
  $('#mRGB').onclick=()=>{mode='rgb';$('#mRGB').className='btn p';$('#mCMYK').className='btn g';render()};
  $('#mCMYK').onclick=()=>{mode='cmyk';$('#mCMYK').className='btn p';$('#mRGB').className='btn g';render()};
  $('#mMax').onclick=()=>{mode==='rgb'?(S.r=S.g=S.b=255):(S.c=S.m=S.y=100,S.k=0);render()};
  $('#mZero').onclick=()=>{mode==='rgb'?(S.r=S.g=S.b=0):(S.c=S.m=S.y=S.k=0);render()};
  render();
}

/* ---------- 2. CLASIFICAR FORMATOS ---------- */
function gClas(){
  let pool=shuffle([...FORMATS]), i=0, score=0, step=0, cur=null, wrong=[];
  gameShell('🗃️ ¿Ráster o vector?', '<div id="cBody"></div>', '<span class="tag acc" id="cScore">0 / 0</span>');
  next();

  function next(){
    if(i>=pool.length) return end();
    cur=pool[i]; step=0; draw();
  }
  function draw(){
    const q = step===0
      ? {t:'¿Es ráster o vectorial?', bins:[['raster','Ráster','píxeles'],['vector','Vectorial','matemático']]}
      : {t:'¿A qué destino está orientado principalmente?', bins:[['pantalla','Pantalla (RGB)','web / digital'],['impresion','Impresión (CMYK)','papel / editable']]};
    $('#cBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/pool.length)*100}%"></i></div>
      <p style="text-align:center;font-size:14px;color:var(--txt2);margin-bottom:10px">${q.t}</p>
      <span class="chip-big">${cur.n}</span>
      <div class="bins" style="max-width:520px;margin:18px auto 0">
        ${q.bins.map(([v,n,d])=>`<button class="bin" data-v="${v}"><div class="bn">${n}</div><div class="bd">${d}</div></button>`).join('')}
      </div>
      <div id="cFb" style="max-width:560px;margin:16px auto 0"></div>`;
    $('#cBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>answer(b.dataset.v,b));
  }
  function answer(v,btn){
    const correct = step===0 ? cur.tipo : cur.dest;
    const ok = v===correct;
    $('#cBody').querySelectorAll('[data-v]').forEach(b=>{
      b.onclick=null;
      if(b.dataset.v===correct) b.style.cssText='border-color:var(--ok);background:rgba(46,204,113,.14);border-style:solid';
      else if(b===btn) b.style.cssText='border-color:var(--bad);background:rgba(255,77,109,.14);border-style:solid';
    });
    if(ok) score++; else wrong.push(cur.n+' — '+cur.e);
    $('#cScore').textContent=`${score} / ${pool.length*2}`;
    $('#cFb').innerHTML=`<div class="expl">${ok?'✅ <b>Correcto.</b> ':'❌ <b>Era '+(step===0?(correct==='raster'?'ráster':'vectorial'):(correct==='pantalla'?'pantalla (RGB)':'impresión (CMYK)'))+'.</b> '}${cur.e}</div>
      <button class="btn p" id="cNext" style="display:block;margin:0 auto">Siguiente →</button>`;
    $('#cNext').onclick=()=>{ if(step===0){step=1;draw();} else {i++;next();} };
  }
  function end(){
    const tot=pool.length*2, pct=Math.round(score/tot*100);
    $('#cBody').innerHTML=`<div class="score"><div class="big">${pct}%</div>
      <div class="msg">${score} de ${tot} aciertos</div>
      <div class="sub">${pct>=80?'Los formatos los tenés.':'Repasá la unidad 9 del resumen.'}</div>
      <button class="btn p" id="cAgain">Jugar de nuevo</button></div>
      ${wrong.length?`<div class="review">${[...new Set(wrong)].map(w=>`<div class="ri">${w}</div>`).join('')}</div>`:''}`;
    $('#cAgain').onclick=gClas;
  }
}

/* ---------- 3. KELVIN ---------- */
function gKelvin(){
  let pool=shuffle([...KELVIN]), i=0, score=0;
  gameShell('🌡️ Adiviná los Kelvin', '<div id="kBody"></div>', '<span class="tag acc" id="kScore">0 / 0</span>');
  draw();

  function kelvinToRGB(k){
    const t=k/100; let r,g,b;
    if(t<=66){ r=255; g=99.47*Math.log(t)-161.12; }
    else { r=329.7*Math.pow(t-60,-0.1332); g=288.12*Math.pow(t-60,-0.0755); }
    if(t>=66) b=255; else if(t<=19) b=0; else b=138.52*Math.log(t-10)-305.04;
    const c=v=>Math.max(0,Math.min(255,Math.round(v)));
    return `rgb(${c(r)},${c(g)},${c(b)})`;
  }
  function draw(){
    if(i>=pool.length) return end();
    const it=pool[i];
    $('#kBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(i/pool.length)*100}%"></i></div>
      <div class="kv-box">
        <div class="kv-light" style="background:${kelvinToRGB(it.k)}">${it.k} K</div>
        <p style="font-size:15px;color:var(--txt2);margin-bottom:16px">Esta luz es…</p>
        <div class="bins" style="max-width:520px;margin:0 auto">
          <button class="bin" data-v="Cálida"><div class="bn">🔥 Cálida</div><div class="bd">4500 K o menos</div></button>
          <button class="bin" data-v="Neutra"><div class="bn">⚪ Neutra</div><div class="bd">~5770 K</div></button>
          <button class="bin" data-v="Fría"><div class="bn">❄️ Fría</div><div class="bd">7500 K o más</div></button>
        </div>
        <div id="kFb" style="margin-top:18px"></div>
      </div>`;
    $('#kBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{
      const ok=b.dataset.v===it.l;
      $('#kBody').querySelectorAll('[data-v]').forEach(x=>{x.onclick=null;
        if(x.dataset.v===it.l) x.style.cssText='border-color:var(--ok);background:rgba(46,204,113,.14);border-style:solid';
        else if(x===b) x.style.cssText='border-color:var(--bad);background:rgba(255,77,109,.14);border-style:solid';});
      if(ok) score++;
      $('#kScore').textContent=`${score} / ${pool.length}`;
      $('#kFb').innerHTML=`<div class="expl">${ok?'✅ <b>Correcto.</b> ':'❌ <b>Era '+it.l.toLowerCase()+'.</b> '}${it.d}
        <br><span style="font-size:12.5px;color:var(--txt3)">Recordá: menos Kelvin = más cálida · más Kelvin = más fría.</span></div>
        <button class="btn p" id="kNext">Siguiente →</button>`;
      $('#kNext').onclick=()=>{i++;draw()};
    });
  }
  function end(){
    const pct=Math.round(score/pool.length*100);
    $('#kBody').innerHTML=`<div class="score"><div class="big">${pct}%</div>
      <div class="msg">${score} de ${pool.length}</div>
      <div class="sub">${pct>=80?'Dominás la escala Kelvin.':'Ojo con la trampa: menos K = más cálida.'}</div>
      <button class="btn p" id="kAgain">Jugar de nuevo</button></div>`;
    $('#kAgain').onclick=gKelvin;
  }
}

/* ---------- 4. CONTRARRELOJ V/F ---------- */
function gTF(){
  let pool=shuffle([...TF]), i=0, score=0, streak=0, best=0, timer=null, left=10, wrong=[];
  gameShell('⏱️ Contrarreloj Verdadero / Falso', '<div id="tBody"></div>',
    '<span class="tag warn" id="tStreak">racha 0</span><span class="tag acc" id="tScore">0</span>');
  draw();

  function draw(){
    if(i>=pool.length) return end();
    const it=pool[i];
    $('#tBody').innerHTML=`
      <div class="tf-box">
        <div class="tf-timer"><i id="tBar" style="width:100%"></i></div>
        <div class="tf-stmt">${it.s}</div>
        <div style="display:flex;gap:12px;justify-content:center">
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
    const it=pool[i], ok = v===it.v;
    $('#tBody').querySelectorAll('[data-v]').forEach(b=>b.onclick=null);
    if(ok){score++;streak++;best=Math.max(best,streak)}
    else {streak=0; wrong.push(`<b>${it.s}</b>${it.e}`)}
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
  const pairs=shuffle([...MEMO]).slice(0,8);
  let deck=shuffle(pairs.flatMap((p,idx)=>[{id:idx,t:p[0],side:0},{id:idx,t:p[1],side:1}]));
  let open=[], found=0, moves=0, lock=false;
  gameShell('🧠 Memotest de conceptos', '<div id="mBody"></div>',
    '<span class="tag acc" id="mMoves">0 jugadas</span>');
  $('#mBody').innerHTML=`<p style="text-align:center;color:var(--txt2);font-size:13.5px;margin-bottom:18px">
      Encontrá los 8 pares <b>concepto ↔ definición</b>.</p>
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
  let ti=0;
  gameShell('🔢 Ordená la secuencia','<div id="oBody"></div>');
  draw();

  function draw(){
    if(ti>=TIMELINES.length) return end();
    const t=TIMELINES[ti];
    let order=shuffle(t.items.map((_,i)=>i));
    while(order.every((v,i)=>v===i)) order=shuffle(order);
    $('#oBody').innerHTML=`
      <div class="qz-bar"><i style="width:${(ti/TIMELINES.length)*100}%"></i></div>
      <p style="text-align:center;font-size:15px;font-weight:600;margin-bottom:18px">${t.t}</p>
      <div class="tl" id="tlList">${order.map(i=>
        `<div class="tli" draggable="true" data-i="${i}"><span class="h">⠿</span><span>${t.items[i]}</span></div>`).join('')}</div>
      <p style="text-align:center;font-size:12.5px;color:var(--txt3);margin-top:12px">Arrastrá para reordenar</p>
      <div style="text-align:center;margin-top:16px"><button class="btn p" id="oCheck">Comprobar</button></div>
      <div id="oFb" style="max-width:600px;margin:14px auto 0"></div>`;
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
      <div class="msg">Completaste las 4 secuencias</div>
      <div class="sub">Historia del color, escala Kelvin, resoluciones y flujo de imprenta.</div>
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
}
