(() => {
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const state={page:"overview",tab:"Preparation",selected:"Mira Okafor",month:8,year:2026,seconds:155,running:false,people:[
{name:"Mira Okafor",role:"Product Designer",team:"Design",location:"Lisbon",started:"Mar 2024",status:"Active",salary:"$4,138",initials:"MO"},
{name:"Jonah Reyes",role:"Frontend Engineer",team:"Engineering",location:"Mexico City",started:"Sep 2026",status:"New",salary:"$5,200",initials:"JR"},
{name:"Lena Park",role:"Product Manager",team:"Product",location:"Seoul",started:"Jan 2023",status:"Away",salary:"$5,100",initials:"LP"},
{name:"Theo Brandt",role:"Platform Engineer",team:"Engineering",location:"Berlin",started:"Sep 2026",status:"New",salary:"$5,800",initials:"TB"},
{name:"Amara Nwosu",role:"People Ops Lead",team:"Operations",location:"Lagos",started:"Jun 2021",status:"Active",salary:"$4,950",initials:"AN"},
{name:"Sofia Marin",role:"Brand Designer",team:"Design",location:"Madrid",started:"Nov 2022",status:"Active",salary:"$4,700",initials:"SM"},
{name:"Kai Tanaka",role:"Data Analyst",team:"Product",location:"Osaka",started:"Apr 2025",status:"Active",salary:"$4,450",initials:"KT"},
{name:"Ines Duarte",role:"Talent Partner",team:"Operations",location:"Porto",started:"Aug 2024",status:"Active",salary:"$4,300",initials:"ID"},
{name:"Omar Haddad",role:"Backend Engineer",team:"Engineering",location:"Amman",started:"Feb 2024",status:"Away",salary:"$5,250",initials:"OH"},
{name:"Freya Lund",role:"UX Researcher",team:"Design",location:"Oslo",started:"Jul 2025",status:"Active",salary:"$4,600",initials:"FL"}
],filter:"All",query:"",tasks:[
["Sign employment contract","Preparation",true],["Set up payroll details","Preparation",true],["Assign a buddy","Preparation",false],["Add profile photo","Preparation",false],["Schedule welcome meeting","Setup",false],["Complete team introduction","Team",false],["Review first-week plan","Team",false],["Confirm equipment delivery","Setup",false]
]};
const toast=m=>{let t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("show"),1800)};
const person=name=>state.people.find(p=>p.name===name)||state.people[0];
function pageHead(title,sub,actions=""){return `<div class="page-title"><div><h1>${title}</h1><p>${sub}</p></div><div class="actions">${actions}</div></div>`}
function avatar(p){return `<span class="person-avatar">${p.initials}</span>`}
function progressCard(title,value,note,bars=false){return `<section class="card metric-card"><div class="card-head">${title}<button>↗</button></div><div class="progress-value">${value}</div>${bars?`<div class="mini-bars">${[35,52,44,68,48,83,61,92,73,58,80,66].map(v=>`<i style="height:${v}%"></i>`).join("")}</div>`:`<div class="progress-note">${note}</div>`}</section>`}
function overview(){
let done=state.tasks.filter(t=>t[2]).length;
return `${pageHead("Good afternoon, Amara","Here's your team's pulse today.",`<button class="btn soft" id="quickAdd">＋ Quick add</button><button class="btn primary" id="overviewReport">↗ Report</button>`)}
<div class="overview-grid">
<section class="card profile-card"><div class="profile-art"><div class="portrait-hair"></div><div class="portrait-face"></div><div class="portrait-body"></div></div><div class="profile-shade"></div><div class="profile-info"><b>Mira Okafor</b><small>Product Designer</small></div><span class="salary-tag">$4,138</span></section>
${progressCard("Progress",`5.5 <small>h avg. / workday</small>`,"7 day activity",true)}
<section class="card timer-card"><div class="card-head">Time tracker <button>↗</button></div><div class="timer-ring"><strong id="timerText">02:35</strong><small>Paused · 1:14</small></div><div class="timer-actions"><button id="timerToggle">▶</button><button id="timerReset">↺</button></div></section>
<section class="card onboard-card"><div class="card-head">Onboarding <span class="onboard-percent">${Math.round(done/state.tasks.length*100)}%</span></div><div class="progress-track"><i style="width:${done/state.tasks.length*100}%"></i></div><div class="onboard-tabs">${["Preparation","Setup","Team"].map(t=>`<button class="${state.tab===t?"active":""}" data-tasktab="${t}">${t}</button>`).join("")}</div><div class="task-box"><div class="task-box-title">Onboarding tasks <span>${done}/${state.tasks.length}</span></div>${state.tasks.filter(t=>t[1]===state.tab).map((t,i)=>`<div class="task ${t[2]?"done":""}" data-task-index="${state.tasks.indexOf(t)}"><span class="task-check"></span><span>${t[0]}</span></div>`).join("")}</div></section>
<section class="card left-detail"><div class="card-head">Pension plan <button>⌄</button></div><div class="detail-line"><span>Devices</span><b>Studio laptop 14”　›</b></div><div class="detail-line"><span>Compensation</span><b>›</b></div><div class="detail-line"><span>Benefits</span><b>›</b></div></section>
<section class="card schedule-card"><div class="schedule-head"><b>Sep 28 – Oct 3</b><span>‹　 Sep 21　　Oct 5　 ›</span></div><div class="schedule-grid">${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d,i)=>`<div class="day-col"><label>${d}</label><b>${28+i}</b>${i===1?'<div class="event dark">Weekly team sync</div>':i===2?'<div class="event">1:1 with Mira</div>':i===3?'<div class="event">Onboarding session</div>':i===4?'<div class="event">Design review</div>':""}</div>`).join("")}</div></section>
</div>`}
function peoplePage(){
let rows=state.people.filter(p=>(state.filter==="All"||p.team===state.filter)&&(`${p.name} ${p.role} ${p.location}`).toLowerCase().includes(state.query.toLowerCase()));
return `${pageHead("People",`${state.people.length} people · 5 teams`, `<button class="btn" id="exportPeople">⇩ Export</button><button class="btn primary" id="addPerson">＋ Add member</button>`)}
<div class="people-toolbar"><div class="filters">${["All","Design","Engineering","Product","Operations"].map(f=>`<button class="filter ${state.filter===f?"active":""}" data-filter="${f}">${f}</button>`).join("")}</div><input class="people-search" id="peopleSearch" placeholder="⌕ Search by name or role" value="${state.query}"></div>
<section class="card table-card"><table class="people-table"><thead><tr><th><input type="checkbox" aria-label="Select all"></th><th>Name</th><th>Role</th><th>Team</th><th>Location</th><th>Started</th><th>Status</th></tr></thead><tbody>${rows.map(p=>`<tr data-person="${p.name}"><td><input type="checkbox" aria-label="Select ${p.name}"></td><td class="person-cell">${avatar(p)}${p.name}</td><td>${p.role}</td><td>${p.team}</td><td>${p.location}</td><td>${p.started}</td><td><span class="status-pill ${p.status.toLowerCase()}">${p.status}</span></td></tr>`).join("")||'<tr><td colspan="7">No matching people.</td></tr>'}</tbody></table></section>`}
function payrollPage(){
let p=person(state.selected),monthName=new Date(state.year,state.month,1).toLocaleString("en",{month:"long"});
let first=new Date(state.year,state.month,1).getDay(),days=new Date(state.year,state.month+1,0).getDate();
let cells=Array.from({length:42},(_,i)=>{let day=i-first+1;return day<1||day>days?`<div class="pay-day" style="opacity:.25"></div>`:`<div class="pay-day ${day===17?"selected":""}" data-day="${day}"><b>${day}</b>${day%7===0||day%6===0?"":`<span class="hours">${(7.5+(day%4)*.5).toFixed(1)}h</span>`}</div>`}).join("");
return `${pageHead("Payroll",`${monthName} ${state.year} · Team timesheets`, `<button class="btn" id="payrollExport">⇩ Export</button><button class="btn primary" id="runPayroll">Run payroll ↗</button>`)}
<div class="payroll-layout">
<section class="card team-list"><h3>Team</h3>${state.people.slice(0,7).map(x=>`<div class="team-person ${x.name===state.selected?"active":""}" data-select-person="${x.name}">${avatar(x)}<span>${x.name}<small>${x.role}</small></span></div>`).join("")}</section>
<section class="card payroll-main"><div class="payroll-summary"><div><strong>143.9 <small>hrs / $5,517</small></strong><div style="font-size:7px;color:#93a18f;margin-top:3px">Work hours</div></div><div class="payroll-legend"><span>85%　Regular</span><span>2%　Overtime</span><span>10%　Leave</span></div></div><div class="progress-track"><i style="width:85%"></i></div><div class="month-nav"><button id="prevMonth">‹</button><b>${monthName} ${state.year}</b><button id="nextMonth">›</button></div><div class="payroll-calendar">${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d=>`<div class="pay-day" style="min-height:20px;background:transparent;border:0;padding:3px"><b>${d}</b></div>`).join("")}${cells}</div></section>
<section class="card employee-panel"><h3>Employee details</h3><div class="employee-portrait">${p.initials}</div><div class="emp-name">${p.name}</div><div class="emp-role">${p.role}</div><div class="emp-info"><span>♧ Birthday <b>Apr 14</b></span><span>⌕ Phone <b>+351 912 480 155</b></span><span>✉ Email <b>${p.name.toLowerCase().replace(" ",".")}@grovia.work</b></span><span>⌖ Based in <b>${p.location}</b></span><span>▤ Started <b>${p.started}</b></span><span>Documents <b>—</b></span></div><div class="emp-docs"><button data-doc="Contract">▤ Contract.pdf</button><button data-doc="Payslip">▤ Payslip.pdf</button></div><div class="emp-info" style="margin-top:12px"><span>This month</span><span>Paid time off <b>3 / 25</b></span><span>Learning budget <b>$1,200 / $1,200</b></span><span>Hours vs plan <b>144 / 168</b></span></div><div class="progress-track"><i style="width:85%"></i></div></section>
</div>`}
function render(){let html=state.page==="overview"?overview():state.page==="people"?peoplePage():payrollPage();$("#main").innerHTML=html;$$("[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===state.page));wire()}
function modal(title,body,submit,cb){$("#modalContent").innerHTML=`<h2>${title}</h2><form id="modalForm">${body}<button class="btn primary" type="submit">${submit}</button></form>`;$("#modal").classList.remove("hidden");$("#modalForm").onsubmit=e=>{e.preventDefault();cb(new FormData(e.target));$("#modal").classList.add("hidden")}}
function wire(){
$$("[data-tasktab]").forEach(b=>b.onclick=()=>{state.tab=b.dataset.tasktab;render()});
$$("[data-task-index]").forEach(b=>b.onclick=()=>{let t=state.tasks[+b.dataset.taskIndex];t[2]=!t[2];render();toast(t[2]?"Task completed":"Task reopened")});
$("#timerToggle")?.addEventListener("click",()=>{state.running=!state.running;$("#timerToggle").textContent=state.running?"Ⅱ":"▶";toast(state.running?"Timer started":"Timer paused")});
$("#timerReset")?.addEventListener("click",()=>{state.seconds=155;$("#timerText").textContent="02:35";state.running=false;$("#timerToggle").textContent="▶";toast("Timer reset")});
$$("[data-filter]").forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;render()});
$("#peopleSearch")?.addEventListener("input",e=>{state.query=e.target.value;let pos=e.target.selectionStart;render();$("#peopleSearch").focus();$("#peopleSearch").setSelectionRange(pos,pos)});
$$("[data-person]").forEach(r=>r.onclick=()=>{state.selected=r.dataset.person;state.page="payroll";render()});
$$("[data-select-person]").forEach(b=>b.onclick=()=>{state.selected=b.dataset.selectPerson;render()});
$("#prevMonth")?.addEventListener("click",()=>{state.month--;if(state.month<0){state.month=11;state.year--}render()});
$("#nextMonth")?.addEventListener("click",()=>{state.month++;if(state.month>11){state.month=0;state.year++}render()});
$$("[data-day]").forEach(b=>b.onclick=()=>{ $$(".pay-day").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");toast(`Selected ${b.dataset.day} ${new Date(state.year,state.month).toLocaleString("en",{month:"long"})}`)});
$$("[data-doc]").forEach(b=>b.onclick=()=>toast(`${b.dataset.doc} preview is a demo`));
$("#addPerson")?.addEventListener("click",()=>modal("Add team member",`<label class="field">Full name<input name="name" required placeholder="Full name"></label><label class="field">Role<input name="role" required placeholder="Job title"></label><label class="field">Team<select name="team"><option>Design</option><option>Engineering</option><option>Product</option><option>Operations</option></select></label><label class="field">Location<input name="location" placeholder="City"></label>`,"Add member",f=>{let name=f.get("name").trim();state.people.push({name,role:f.get("role"),team:f.get("team"),location:f.get("location")||"Remote",started:"Nov 2026",status:"New",salary:"—",initials:name.split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase()});render();toast("Team member added")}));
$("#exportPeople")?.addEventListener("click",()=>csv("grovia-people.csv","Name,Role,Team,Location,Started,Status\n"+state.people.map(p=>[p.name,p.role,p.team,p.location,p.started,p.status].join(",")).join("\n")));
$("#payrollExport")?.addEventListener("click",()=>csv("grovia-timesheet.csv","Employee,Hours,Pay,Month\n"+state.people.map(p=>`${p.name},143.9,5517,${new Date(state.year,state.month).toLocaleString("en",{month:"long"})}`).join("\n")));
$("#runPayroll")?.addEventListener("click",()=>modal("Run payroll",`<p style="font-size:9px;color:#80907b">Review the selected pay period before marking it ready.</p><label class="field">Pay period<input name="period" value="${new Date(state.year,state.month).toLocaleString("en",{month:"long"})} ${state.year}" required></label><label class="field">Payment date<input name="date" type="date" required></label>`,"Confirm payroll",()=>toast("Payroll marked as ready (demo)")));
$("#quickAdd")?.addEventListener("click",()=>modal("Quick add",`<label class="field">What would you like to add?<select name="type"><option>Team member</option><option>Time off request</option><option>Onboarding task</option></select></label><label class="field">Name or title<input name="name" required placeholder="Enter a name or task"></label>`,"Add",f=>toast(`${f.get("type")} added (demo)`)));
$("#overviewReport")?.addEventListener("click",()=>{state.page="payroll";render();toast("Opening payroll overview")});
}
function csv(name,data){let a=document.createElement("a"),url=URL.createObjectURL(new Blob([data],{type:"text/csv"}));a.href=url;a.download=name;a.click();URL.revokeObjectURL(url);toast("CSV exported")}
$$("[data-page]").forEach(b=>b.onclick=()=>{state.page=b.dataset.page;render()});
$("#settingsBtn").onclick=()=>modal("Workspace settings",`<label class="field">Workspace name<input value="Grovia"></label><label class="field">Timezone<select><option>Europe/Lisbon</option><option>Asia/Kolkata</option><option>UTC</option></select></label>`,"Save settings",()=>toast("Settings saved (demo)"));
$("#notifyBtn").onclick=()=>toast("You're all caught up");
$("#accountBtn").onclick=()=>toast("Signed in as Amara");
$("#modalClose").onclick=()=>$("#modal").classList.add("hidden");
$("#modal").onclick=e=>{if(e.target.id==="modal")$("#modal").classList.add("hidden")};
let timerInt=setInterval(()=>{if(state.running){state.seconds++;let mm=String(Math.floor(state.seconds/60)).padStart(2,"0"),ss=String(state.seconds%60).padStart(2,"0");let t=$("#timerText");if(t)t.textContent=mm+":"+ss}},1000);
render();
})();