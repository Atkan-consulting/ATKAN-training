(function(root){
function dateAt(start,offset){const d=new Date(start+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+offset);return d.toISOString().slice(0,10)}
function overview(data,start){const rows=[];for(let week=1;week<=4;week++)for(let day=0;day<6;day++){const date=dateAt(start,(week-1)*7+day),key=`${date}_w${week}_d${day}`,g=data.guided?.[key]||{},p=Catalog.compose(Plan.getDay(day,week,!!g.oneRound),data.routineEdits?.[`w${week}_d${day}`]);const ids=p.items.flatMap(e=>Array.from({length:e.sets},(_,i)=>e.id+'_'+i));const completed=ids.filter(id=>g.done?.[id]).length;rows.push({week,day,date,key,name:p.name,total:ids.length,completed,percent:ids.length?Math.round(100*completed/ids.length):0,state:ids.length&&completed===ids.length?'Terminée':completed?'En cours':'À faire',saved:data.sessions.some(s=>s.id===g.sessionId)})}return rows}
const api={dateAt,overview};if(typeof module!=='undefined')module.exports=api;else root.Tracker=api;
})(globalThis);
