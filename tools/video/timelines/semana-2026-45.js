// Línea de tiempo de la semana 45 (ejemplo). Cada vídeo es una función async que usa los ayudantes del estudio:
// cap(html), card(html), uncard(), see(sel), tap(sel), type(sel,texto,ms), wait(ms), A(codigoEnLaApp), setup(), END
const SPLIT="Pack;Categor\u00eda;C\u00f3digo;Descripci\u00f3n;Unidad;Precio;Cantidad\nSplit hasta 3,5 kW, instalaci\u00f3n est\u00e1ndar;Climatizaci\u00f3n;CL-001;Instalaci\u00f3n split 1\u00d71 hasta 3,5 kW, l\u00ednea hasta 3 m (sin equipo);ud;350,00;1\nSplit hasta 3,5 kW, instalaci\u00f3n est\u00e1ndar;Climatizaci\u00f3n;CL-009;Soporte mural para unidad exterior;ud;45,00;1\nSplit hasta 3,5 kW, instalaci\u00f3n est\u00e1ndar;Climatizaci\u00f3n;CL-007;Desag\u00fce de condensados PVC \u00d820 mm;m;12,00;3\nSplit hasta 3,5 kW, instalaci\u00f3n est\u00e1ndar;Climatizaci\u00f3n;CL-013;Prueba de estanqueidad con nitr\u00f3geno y vac\u00edo;ud;60,00;1\nSplit hasta 3,5 kW, instalaci\u00f3n est\u00e1ndar;Climatizaci\u00f3n;CL-018;Puesta en marcha y certificado de la instalaci\u00f3n;ud;90,00;1\n";
window.T={
'1':async()=>{await setup();A('go("lista")');await cap('Sales de la obra…');await wait(1600);
 await cap('…y el presupuesto <em>ya está hecho</em>');await wait(1200);
 await tap('[data-act="nuevo"]');await type('#f-cliente-nombre','Cliente de ejemplo',60);
 await cap('Eliges la <em>faena</em>');await tap('[data-act="pickPack"][data-c="0"]');await wait(500);
 await tap('[data-act="applyPack"][data-k="0"]');await cap('Entran <em>todas las partidas</em>');await see('.part');await wait(1200);
 await see('#f-caps-0-partidas-4-cant');await cap('Ajustas <em>cantidades</em>');await type('#f-caps-0-partidas-4-cant','4',200);await wait(600);
 await cap('El total, <em>al momento</em>');await see('.tot');await wait(1800);
 await cap('Y el PDF, <em>listo para firmar</em>');await tap('nav [data-view="documento"]');await wait(600);
 for(let i=0;i<4;i++){fr().contentWindow.scrollBy({top:260,behavior:'smooth'});await wait(700);}
 await wait(500);card(END);await wait(4200);},
'2':async()=>{await setup();A('ACTS.nuevo();const p=newPartida();Object.assign(p,{codigo:"E01",desc:"Tubo corrugado Ø20 mm empotrado, incluso rozas y tapado",ud:"m",precio:"9,50"});cur().caps[0].nombre="Canalizaciones";cur().caps[0].partidas.push(p);save();render();');
 await cap('Deja de sumar metros <em>en un papel</em>');await see('.part');await wait(1500);
 await tap('[data-act="addLin"]');await cap('Una línea <em>por tramo</em>');
 await type('#f-caps-0-partidas-0-lineas-0-c','Salón',60);await type('#f-caps-0-partidas-0-lineas-0-l','14,50',130);
 await tap('[data-act="addLin"]');await type('#f-caps-0-partidas-0-lineas-1-c','Dormitorio 1',50);await type('#f-caps-0-partidas-0-lineas-1-l','9,20',130);
 await tap('[data-act="addLin"]');await type('#f-caps-0-partidas-0-lineas-2-c','Cocina, dos tramos',45);await type('#f-caps-0-partidas-0-lineas-2-n','2',150);await type('#f-caps-0-partidas-0-lineas-2-l','4,75',130);
 await cap('Se suma <em>solo</em>');await see('[data-o="q:0:0"]');await wait(2200);
 await cap('Uds × largo × <em>ancho × alto</em>');await wait(2200);
 card(END);await wait(4200);},
'3':async()=>{await setup();
 const C=[`<p style="font-family:Mono;color:#F2C200;font-size:40px;letter-spacing:.12em">REFORMA ELÉCTRICA</p><h1>5 cosas que se <em>olvidan</em> al presupuestar</h1><p>Y que acabas pagando tú.</p>`,
 `<div class="num">01</div><h2>El boletín y la tramitación</h2><p>Si no está en el presupuesto, <b>lo regalas</b>.</p>`,
 `<div class="num">02</div><h2>Las ayudas de albañilería</h2><p>Rozas, tapado y remates: <b>¿quién tapa las rozas?</b></p>`,
 `<div class="num">03</div><h2>El desmontaje de lo viejo</h2><p>Quitar lo antiguo lleva horas. <b>Va en su partida.</b></p>`,
 `<div class="num">04</div><h2>Material menudo y desplazamientos</h2><p>Cajas, bornas, tacos, viajes… <b>se comen el margen</b>.</p>`,
 `<div class="num">05</div><h2>Las protecciones del cuadro</h2><p>Mira qué pide el REBT y <b>preséntalas aparte</b>.</p>`,
 `<h2>¿Cuál se te ha olvidado <em>a ti</em>?</h2><p>Cuéntalo en comentarios 👇</p><p>En Puntal, los <b>packs completos</b> ya las llevan.</p>`];
 for(let i=0;i<C.length;i++){card(C[i]);await wait(i==0?3200:2900);}
 card(END);await wait(4200);},
'4':async()=>{await setup();A('go("documento")');
 card(`<h2>¿Sigues mandando los presupuestos <em>así</em>?</h2><div class="chat"><div class="h">Mensaje · 21:47</div><div class="bub">Lo del baño te sale por unos 1.200 € más o menos 👍</div><div class="bub">El material aparte</div><div class="bub">Ya me dices</div></div><p style="font-size:38px;color:#7f8996">Ejemplo</p>`);
 await wait(4500);uncard();await cap('Mejor <em>así</em>');await wait(1500);
 await cap('Con tu logo y <em>capítulos</em>');for(let i=0;i<3;i++){fr().contentWindow.scrollBy({top:280,behavior:'smooth'});await wait(800);}
 await cap('IVA desglosado y <em>firma del cliente</em>');for(let i=0;i<5;i++){fr().contentWindow.scrollBy({top:420,behavior:'smooth'});await wait(700);}
 await wait(1200);card(END);await wait(4200);},
'5':async()=>{await setup();A('importPacks('+JSON.stringify(SPLIT)+');const pk=S.packs[S.packs.length-1];openPacks.add(pk.id);save();go("banco");');
 await cap('¿Cuánto cobras por instalar <em>un split</em>?');await wait(2200);
 await see('details.pack[open]','start');await cap('Así lo presupuesta <em>un pack</em> de Puntal');await wait(800);
 fr().contentWindow.scrollBy({top:120,behavior:'smooth'});await wait(2600);
 await cap('Precios orientativos: <em>pon los tuyos</em>');await wait(2600);
 await cap('¿Cuánto cobras <em>tú</em>? Comenta 👇');await wait(2800);
 card(END);await wait(4200);}
};
