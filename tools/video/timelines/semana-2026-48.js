// Semana 48: una visita, todo apuntado (Croquis y Dictar en climatización y cocina). Zona segura de TikTok: textos fuera de los 150 px de arriba, 400 px de abajo y 150 px de la derecha.
(()=>{const s=document.createElement('style');s.textContent=`#cap{top:170px;height:290px;right:150px}#cap div{font-size:84px}.card{padding:170px 150px 420px 90px}.card h1{font-size:112px}.card h2{font-size:92px}.card p{font-size:48px}.num{font-size:190px}`;document.head.appendChild(s);})();
async function full(){const t=await (await fetch('/socios-ptl26/index.html')).text();const m=t.match(/const SOCIOS_BANCOS = (\[.*?\]);\n/);fr().contentWindow.__B=JSON.parse(m[1]);A('__B.forEach(t=>importBanco(t));save();');}
async function nuevo(cliente,cap0){A('ACTS.nuevo();cur().cliente=cur().cliente||{};');await wait(300);
 A(`const b=cur();b.caps[0].nombre=${JSON.stringify(cap0)};save();go("editor");`);await wait(400);
 const e=D().querySelector('#f-cliente-nombre');if(e){e.value=cliente;e.dispatchEvent(new Event('input',{bubbles:true}));}A('window.scrollTo(0,0)');await wait(300);}
async function dictar(frase){A('openDictado(0)');await wait(600);await type('#dpt',frase,30);await wait(300);
 await tap('#dgo');await wait(400);await see('#dres','start');}
function pe(t,p){const W=fr().contentWindow,c=D().querySelector('#dc'),r=c.getBoundingClientRect();
 c.dispatchEvent(new W.PointerEvent(t,{clientX:r.left+p[0]*r.width/c.width,clientY:r.top+p[1]*r.height/c.height,pointerId:1,bubbles:true,isPrimary:true,pointerType:'touch'}));}
async function stroke(pts){const j=()=>(Math.random()-.5)*5;pe('pointerdown',pts[0]);
 for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i],n=8;for(let k=1;k<=n;k++){pe('pointermove',[a[0]+(b[0]-a[0])*k/n+j(),a[1]+(b[1]-a[1])*k/n+j()]);await wait(16);}}pe('pointerup',pts[pts.length-1]);await wait(150);}
async function texto(t,p){await type('#dtx',t,40);await tap('#dtxt');await wait(200);pe('pointerdown',p);pe('pointerup',p);await wait(250);}
window.T={
// 1 · Croquis del split: unidades, recorrido y medidas
'1':async()=>{await setup();await nuevo('Cliente de ejemplo','Climatización salón');
 card(`<p style="font-family:Mono;color:#F2C200;font-size:40px;letter-spacing:.12em">CROQUIS · CLIMATIZACIÓN</p><h1>¿Por dónde va <em>la línea?</em></h1><p>Dibújalo en la visita y no lo vuelvas a preguntar.</p>`);
 await wait(2700);uncard();A('ACTS.croquis()');await wait(900);await see('#dc');
 await cap('La planta, <em>con el dedo</em>');
 await stroke([[160,200],[1040,200],[1040,760],[160,760],[160,200]]);await stroke([[640,200],[640,760]]);
 await cap('Interior, exterior <em>y recorrido</em>');
 await stroke([[240,230],[520,230],[520,270],[240,270],[240,230]]);
 await stroke([[1060,300],[1160,300],[1160,420],[1060,420],[1060,300]]);
 await stroke([[520,250],[620,250],[1040,250],[1040,330],[1060,340]]);
 await cap('Y las <em>medidas</em>');
 await texto('Split salón',[250,330]);await texto('5 m de línea',[680,310]);await texto('Ud. exterior',[800,470]);
 await wait(400);await cap('Queda en el <em>presupuesto</em>');await tap('#dok');await wait(600);await see('.fotos .foto','center');await wait(2600);
 card(END);await wait(4200);},
// 2 · Dictar partidas (climatización)
'2':async()=>{await setup();await full();await nuevo('Cliente de ejemplo','Climatización');
 card(`<p style="font-family:Mono;color:#F2C200;font-size:40px;letter-spacing:.12em">FRIGORISTAS</p><h1>Dilo en voz alta…</h1><p>“Un split de tres coma cinco en el salón, cinco metros de línea frigorífica y una bomba de condensados en el salón”</p>`);
 await wait(4000);uncard();await cap('…y Puntal <em>lo escribe</em>');
 await dictar('un split de tres coma cinco en el salón, cinco metros de línea frigorífica en el salón y una bomba de condensados en el salón');
 await cap('De tu banco <em>de precios</em>');await wait(2800);
 await cap('Revisas <em>y añades</em>');await tap('#dok');await wait(500);await see('.part');await wait(1500);await see('.tot');await wait(1800);
 card(END);await wait(4200);},
// 3 · Cocina: dictar + croquis en la misma visita
'3':async()=>{await setup();await full();await nuevo('Cliente de ejemplo','Electricidad cocina');
 card(`<p style="font-family:Mono;color:#F2C200;font-size:40px;letter-spacing:.12em">ELECTRICISTAS</p><h1>La cocina, <em>en una visita</em></h1><p>Primero lo dices. Luego lo dibujas.</p>`);
 await wait(2300);uncard();await cap('1. <em>Dictar</em>');
 await dictar('seis enchufes, una toma de veinticinco amperios y cuatro puntos de luz en la cocina');
 await wait(900);await tap('#dok');await wait(400);
 await cap('2. <em>Croquis</em>');A('ACTS.croquis()');await wait(900);await see('#dc');
 await stroke([[200,200],[1000,200],[1000,720],[200,720],[200,200]]);
await texto('3,60 m',[520,170]);
 await tap('#dok');await wait(600);await cap('Todo en el <em>mismo presupuesto</em>');await see('.tot');await wait(1500);
 card(END);await wait(4200);},
// 4 · Pendientes de respuesta (tema secundario)
'4':async()=>{await setup();
 A(`const d=n=>new Date(Date.now()-n*864e5).toISOString().slice(0,10);const a=S.presupuestos[0];a.estado="enviado";a.fecha=d(10);a.enviadoEl=d(9);
 const b=JSON.parse(JSON.stringify(a));b.id=uid();b.num=a.num.replace(/001$/,"002");b.cliente.nombre="Cliente de ejemplo 2";b.obra="Cambio de cuadro (ejemplo)";b.fecha=d(13);b.enviadoEl=d(12);b.caps=[b.caps[2]];S.presupuestos.push(b);save();go("inicio");`);
 card(`<p style="font-family:Mono;color:#F2C200;font-size:40px;letter-spacing:.12em">SEGUIMIENTO</p><h1>Lo mandaste. <em>No contestan.</em></h1><p>¿Y ahora qué?</p>`);
 await wait(3200);uncard();await cap('Puntal te <em>avisa</em> a los 7 días');await see('.panel.warn','start');await wait(2400);
 await cap('Mensaje <em>ya escrito</em>');await tap('[data-act="seguir"]');await wait(600);await see('.seg');await wait(2600);
 await cap('Lo mandas <em>por WhatsApp</em>');await wait(2200);
 card(`<h2>Un mensaje a tiempo <em>cierra trabajos</em></h2><p>Y si te dicen que sí, lo marcas como <b>aceptado</b> en un toque.</p>`);await wait(3000);
 card(END);await wait(4200);}
};
