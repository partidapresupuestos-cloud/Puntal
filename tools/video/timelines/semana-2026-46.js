// Semana 46: Dictar partidas y Croquis. Zona segura de TikTok: textos fuera de los 150 px de arriba, 400 px de abajo y 150 px de la derecha.
(()=>{const s=document.createElement('style');s.textContent=`#cap{top:170px;height:290px;right:150px}#cap div{font-size:84px}.card{padding:170px 150px 420px 90px}.card h1{font-size:112px}.card h2{font-size:92px}.card p{font-size:48px}.num{font-size:190px}`;document.head.appendChild(s);})();
async function full(){const t=await (await fetch('/socios-ptl26/index.html')).text();const m=t.match(/const SOCIOS_BANCOS = (\[.*?\]);\n/);fr().contentWindow.__B=JSON.parse(m[1]);A('__B.forEach(t=>importBanco(t));save();');}
async function nuevo(cliente,cap0){A('ACTS.nuevo();cur().cliente=cur().cliente||{};');await wait(300);
 A(`const b=cur();b.caps[0].nombre=${JSON.stringify(cap0)};save();go("editor");`);await wait(400);
 const e=D().querySelector('#f-cliente-nombre');if(e){e.value=cliente;e.dispatchEvent(new Event('input',{bubbles:true}));}A('window.scrollTo(0,0)');await wait(300);}
async function dictar(frase){A('openDictado(0)');await wait(700);await type('#dpt',frase,38);await wait(300);
 await tap('#dgo');await wait(400);await see('#dres','start');}
function pe(t,p){const W=fr().contentWindow,c=D().querySelector('#dc'),r=c.getBoundingClientRect();
 c.dispatchEvent(new W.PointerEvent(t,{clientX:r.left+p[0]*r.width/c.width,clientY:r.top+p[1]*r.height/c.height,pointerId:1,bubbles:true,isPrimary:true,pointerType:'touch'}));}
async function stroke(pts){const j=()=>(Math.random()-.5)*5;pe('pointerdown',pts[0]);
 for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i],n=14;for(let k=1;k<=n;k++){pe('pointermove',[a[0]+(b[0]-a[0])*k/n+j(),a[1]+(b[1]-a[1])*k/n+j()]);await wait(16);}}pe('pointerup',pts[pts.length-1]);await wait(150);}
async function texto(t,p){await type('#dtx',t,70);await tap('#dtxt');await wait(200);pe('pointerdown',p);pe('pointerup',p);await wait(400);}
window.T={
// 1 · Dictar partidas (electricidad)
'1':async()=>{await setup();await full();await nuevo('Cliente de ejemplo','Instalación eléctrica');
 card(`<p style="font-family:Mono;color:#F2C200;font-size:40px;letter-spacing:.12em">DICTAR PARTIDAS</p><h1>Dilo en voz alta…</h1><p>“Tres puntos de luz en el salón, dos enchufes en la cocina y quince metros de tubo en el pasillo”</p>`);
 await wait(3600);uncard();await cap('…y Puntal <em>lo escribe</em>');
 await dictar('tres puntos de luz en el salón, dos enchufes en la cocina y quince metros de tubo en el pasillo');
 await cap('Partida, cantidad <em>y zona</em>');await wait(2600);
 await cap('Lo revisas <em>y añades</em>');await tap('#dok');await wait(500);await see('.part');await wait(1600);
 await cap('Con tus <em>precios</em>');await see('.tot');await wait(2000);
 card(END);await wait(4200);},
// 2 · Croquis a mano alzada con medidas
'2':async()=>{await setup();await nuevo('Cliente de ejemplo','Fontanería baño');
 await cap('El croquis del baño, <em>en el móvil</em>');await wait(500);A('ACTS.croquis()');await wait(900);await see('#dc');
 await cap('Dibujas la planta <em>con el dedo</em>');await stroke([[220,180],[980,180],[980,700],[220,700],[220,180]]);
 await stroke([[700,180],[700,420],[980,420]]);await stroke([[260,640],[260,560],[360,560],[360,640]]);
 await stroke([[220,520],[140,440]]);
 await cap('Y apuntas <em>las medidas</em>');
 await texto('2,40 m',[520,150]);await texto('1,80 m',[1000,460]);await texto('Plato 120x80',[722,300]);
 await wait(300);await cap('Sale en el <em>documento</em>');await tap('#dok');await wait(500);
 await tap('nav [data-view="documento"]');await wait(700);A('window.scrollTo(0,document.body.scrollHeight)');
 await wait(400);fr().contentWindow.scrollTo({top:fr().contentDocument.body.scrollHeight,behavior:'smooth'});await wait(700);
 const im=D().querySelector('img[src^="data:image/jpeg"]');if(im){im.scrollIntoView({block:'center',behavior:'smooth'});}await wait(1800);
 card(END);await wait(4200);},
// 3 · Dictar partidas (fontanería)
'3':async()=>{await setup();await full();await nuevo('Cliente de ejemplo','Fontanería');
 card(`<p style="font-family:Mono;color:#F2C200;font-size:40px;letter-spacing:.12em">FONTANERÍA</p><h1>Sin teclear <em>en la obra</em></h1><p>Lo dices mientras miras el baño y las partidas salen solas.</p>`);
 await wait(3200);uncard();await cap('Dilo <em>como lo dirías</em>');
 await dictar('colocación del váter en el baño, dos grifos monomando en la cocina, seis metros de multicapa de veinte en el baño y un punto de agua para la lavadora en la galería');
 await cap('Entiende <em>“váter” y “multicapa”</em>');await wait(2800);
 await cap('Añades <em>de una vez</em>');await tap('#dok');await wait(500);await see('.part');await wait(1500);await see('.tot');await wait(1600);
 card(END);await wait(4200);},
// 4 · Tres opciones: básica, recomendada y completa (tarjetas)
'4':async()=>{await setup();
 const C=[`<p style="font-family:Mono;color:#F2C200;font-size:40px;letter-spacing:.12em">PARA VENDER MEJOR</p><h1>No le des un precio. <em>Dale tres.</em></h1>`,
 `<div class="num">01</div><h2>Básica</h2><p>Lo imprescindible para que funcione y cumpla.</p>`,
 `<div class="num">02</div><h2>Recomendada</h2><p>La que tú harías en tu casa. <b>Ponla en el centro.</b></p>`,
 `<div class="num">03</div><h2>Completa</h2><p>Con los extras: más tomas, mejores mecanismos, domótica…</p>`,
 `<h2>El cliente compara <em>y elige</em></h2><p>En vez de “¿sí o no?”, la pregunta pasa a ser <b>“¿cuál?”</b></p>`,
 `<h2>En Puntal, <em>en el mismo presupuesto</em></h2><p>Opciones básica, recomendada y completa, con <b>hoja comparativa</b> para el cliente.</p>`];
 for(let i=0;i<C.length;i++){card(C[i]);await wait(i==0?3000:2700);}
 card(END);await wait(4200);}
};
