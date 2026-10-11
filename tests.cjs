const assert=require('node:assert/strict'),T=require('./core.js');
assert.deepEqual(T.range('2026-10-11'),{start:'2026-10-05',end:'2026-10-11',previous:'2026-09-28'});
assert.equal(T.range('2026-01-01').start,'2025-12-29');
const sets=T.parseSets('Squat ; 80 ; 8\nRameur ; 0 ; 0 ; 500 ; 120');
const s={id:'1',date:'2026-10-05',name:'Test',notes:'',duration:60,rpe:7,fatigue:3,pain:0,sets};
assert.equal(T.summary([s],'2026-10-11').volume,640);assert.equal(T.summary([s],'2026-10-11').load,420);assert.equal(T.summary([s],'2026-10-12').count,0);
assert.equal(T.summary([s],'2026-10-11').distance,500);
T.validate({version:1,programs:[],sessions:[s]});
assert.throws(()=>T.parseSets('Squat ; -1 ; 8'));assert.throws(()=>T.parseSets('Squat ; ; 8'));assert.throws(()=>T.validate({version:1,programs:[],sessions:[{...s,date:'2026-02-30'}]}));assert.throws(()=>T.validate({version:1,programs:[],sessions:[{...s,rpe:11}]}));assert.throws(()=>T.validate({version:1,programs:[],sessions:[s,s]}));console.log('Tests réussis : calendrier, calculs, validation et doublons.');
const P=require('./plan.js');
assert.equal(P.days.length,6);
assert.equal(P.getDay(3,1).items.filter(e=>e.round===2).length,0);
assert.equal(P.getDay(3,2).items.filter(e=>e.round===2).length,4);
assert.equal(P.getDay(3,3,true).items.filter(e=>e.round===2).length,0);
assert.equal(P.getDay(3,4).items.find(e=>e.name==='Fractionné arbitre').sets,3);
for(const day of [1,2,4]){const n=w=>P.getDay(day,w).items.filter(e=>e.strength).reduce((s,e)=>s+e.sets,0);assert.ok(n(4)/n(1)>=.6&&n(4)/n(1)<=.7)}
for(let d=0;d<6;d++)for(let w=1;w<=4;w++){const p=P.getDay(d,w);assert.equal(new Set(p.items.map(e=>e.id)).size,p.items.length);for(const e of p.items){assert.ok(e.rest>=0);assert.ok(e.sets>=1)}}
T.validate({version:1,programs:[],sessions:[],guided:{demo:{done:{e0_0:true},rests:{e0:60},actual:{}}},timer:{end:Date.now()+60000,remaining:null,label:'Repos',kind:'rest'}});
assert.throws(()=>T.validate({version:1,programs:[],sessions:[],timer:{end:0,remaining:-10,label:'Repos',kind:'rest'}}));
console.log('Programme vérifié : six journées, tours HYROX, allégement S4, repos et état du minuteur.');
global.Plan=P;const C=require('./catalog.js');
const base=P.getDay(1,1),first=base.items[0].id,second=base.items[1].id;
const edited=C.compose(base,{hidden:[first],counts:{[second]:5},added:[{id:'added-test',name:'Test',target:'10 répétitions',sets:2,rest:60}],order:['added-test',second]});
assert.equal(edited.items[0].id,'added-test');assert.equal(edited.items[1].sets,5);assert.ok(!edited.items.some(x=>x.id===first));assert.equal(base.items[0].id,first);assert.equal(C.category('Développé couché'),'Poitrine');assert.equal(C.category('Leg curl'),'Jambes');
assert.throws(()=>T.validate({version:1,programs:[],sessions:[],routineEdits:{w1_d1:{counts:{e0:0}}}}));
T.validate({version:1,programs:[],sessions:[],routineEdits:{w1_d1:{counts:{e0:3},hidden:[],order:[],added:[]}},favorites:['c0']});
console.log('Studio vérifié : catalogue, ajout, retrait, ordre, séries et sauvegardes.');
