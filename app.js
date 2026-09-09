let type="players";
let data=[];

function loadRanking(t){
 type=t;
 fetch("data/"+t+".json")
 .then(r=>r.json())
 .then(d=>{
 data=d;
 render();
 });
}

function render(){
let server=document.getElementById("server").value;
let month=document.getElementById("month").value;

let html="";

data.filter(x=>x.server==server && x.month==month)
.forEach(x=>{
html+=`
<tr>
<td>${x.rank}</td>
<td>${x.name}</td>
<td>${x.guild}</td>
<td>${x.kill_fame}</td>
</tr>`;
});

document.getElementById("ranking").innerHTML=html;
}

loadRanking("players");
