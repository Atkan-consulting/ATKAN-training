(function(root){
function category(name){const n=name.toLowerCase();if(/curl|biceps/.test(n)&&!/leg/.test(n))return 'Biceps';if(/triceps/.test(n))return 'Triceps';if(/couché|incliné|pector/.test(n))return 'Poitrine';if(/tirage|face pull/.test(n))return 'Dos';if(/épaules|élévations|médecine/.test(n))return 'Épaules';if(/squat|fentes|mollets|leg curl|roumain|sled|sauts|pogos/.test(n))return 'Jambes';if(/gainage|pallof|pont/.test(n))return 'Gainage';if(/mobilité|étirement|équilibre|respiration/.test(n))return 'Mobilité';return 'Cardio'}
const all=[...new Map(Plan.days.flatMap(d=>d.items).map(e=>[e.name,e])).values()].map((e,i)=>({...e,catalogId:'c'+i,category:category(e.name)}));
function compose(plan,edits={}){const hidden=edits.hidden||[];const items=[...plan.items,...(edits.added||[])].filter(e=>!hidden.includes(e.id)).map(e=>({...e,sets:edits.counts?.[e.id]??e.sets}));const order=edits.order||[];items.sort((a,b)=>{const ai=order.indexOf(a.id),bi=order.indexOf(b.id);return (ai<0?1e6:ai)-(bi<0?1e6:bi)});return{...plan,items}}
const api={all,category,compose};if(typeof module!=='undefined')module.exports=api;else root.Catalog=api;
})(globalThis);
