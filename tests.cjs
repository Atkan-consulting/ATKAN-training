const assert=require('node:assert/strict'),T=require('./core.js');
assert.deepEqual(T.range('2026-10-11'),{start:'2026-10-05',end:'2026-10-11',previous:'2026-09-28'});
assert.equal(T.range('2026-01-01').start,'2025-12-29');
const sets=T.parseSets('Squat ; 80 ; 8\nRameur ; 0 ; 0 ; 500 ; 120');
const s={id:'1',date:'2026-10-05',name:'Test',notes:'',duration:60,rpe:7,fatigue:3,pain:0,sets};
assert.equal(T.summary([s],'2026-10-11').volume,640);assert.equal(T.summary([s],'2026-10-11').load,420);assert.equal(T.summary([s],'2026-10-12').count,0);
assert.equal(T.summary([s],'2026-10-11').distance,500);
T.validate({version:1,programs:[],sessions:[s]});
assert.throws(()=>T.parseSets('Squat ; -1 ; 8'));assert.throws(()=>T.parseSets('Squat ; ; 8'));assert.throws(()=>T.validate({version:1,programs:[],sessions:[{...s,date:'2026-02-30'}]}));assert.throws(()=>T.validate({version:1,programs:[],sessions:[{...s,rpe:11}]}));assert.throws(()=>T.validate({version:1,programs:[],sessions:[s,s]}));console.log('Tests réussis : calendrier, calculs, validation et doublons.');
