(()=>{"use strict";const e=document.querySelector("body");document.querySelector(".sidebar-btn").onclick=function(){const e=document.querySelector(".sidebar");"250px"==e.style.width?e.style.width=0:e.style.width="250px"};const t=document.querySelector(".projects"),c=document.querySelector(".arrow"),s=document.querySelector(".dropdown-container");let d=document.querySelectorAll(".sidebar button"),o=document.querySelectorAll(".sidebar > button"),l=document.querySelectorAll(".todo-container");const a=document.querySelector(".today");o.forEach((e=>{e.onclick=()=>{e.classList.contains("projects")||(d=document.querySelectorAll(".sidebar button"),d.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),l=document.querySelectorAll(".todo-container"),n=a,l.forEach((e=>e.style.display="none")),a.style.display="flex")}})),document.querySelector(".edit"),document.querySelector(".change"),document.querySelector(".add").onclick=()=>{const t=document.createElement("div");t.classList.add("todo-container"),t.style.display="none",e.appendChild(t);const c=document.createElement("button"),o=document.createElement("span");o.classList.add("dot"),o.classList.add("low"),o.onclick=()=>{o.classList.contains("low")?(o.classList.remove("low"),o.classList.add("medium")):o.classList.contains("medium")?(o.classList.remove("medium"),o.classList.add("high")):(o.classList.remove("high"),o.classList.add("low"))};const a=document.createElement("input");a.setAttribute("type","text"),a.classList.add("change"),a.onblur=()=>{0==a.value&&(s.removeChild(c),e.removeChild(t)),l=document.querySelectorAll(".todo-container"),t.classList.add(a.value),a.disabled=!0},a.onkeypress=e=>{"Enter"===e.key&&(a.disabled=!0,t.classList.add(a.value))};const i=document.createElement("i");i.classList.add("fa"),i.classList.add("fa-pencil"),i.classList.add("edit"),i.onclick=()=>{a.disabled=!1,a.focus()};const r=document.createElement("i");r.classList.add("fa"),r.classList.add("fa-trash"),r.onclick=()=>{s.removeChild(c),e.removeChild(t)},c.appendChild(o),c.appendChild(a),c.appendChild(i),c.appendChild(r),s.appendChild(c),a.focus(),c.onclick=()=>{d=document.querySelectorAll(".sidebar button"),d.forEach((e=>e.classList.remove("active"))),c.classList.add("active"),n=t,l=document.querySelectorAll(".todo-container"),l.forEach((e=>{e.style.display="none"})),t.style.display="flex"}};let n=document.querySelector(".today");document.querySelector(".add-todo").onclick=()=>{const e=document.createElement("div"),t=document.createElement("input");t.setAttribute("type","checkbox"),t.setAttribute("name","switch"),t.classList.add("check");const c=document.createElement("input");c.setAttribute("type","text"),c.classList.add("todo-text");const s=document.createElement("i");s.classList.add("fa"),s.classList.add("fa-pencil"),s.classList.add("todo-ico");const d=document.createElement("i");d.classList.add("fa"),d.classList.add("fa-trash"),d.classList.add("todo-ico"),c.onblur=()=>{0==c.value&&n.removeChild(e),c.disabled=!0},c.onkeypress=e=>{"Enter"===e.key&&(c.disabled=!0)},s.onclick=()=>{c.disabled=!1,c.focus()},d.onclick=()=>{n.removeChild(e)},e.appendChild(t),e.appendChild(c),e.appendChild(s),e.appendChild(d),n.appendChild(e),c.focus()},t.onclick=()=>{c.classList.toggle("up"),"none"===s.style.display?s.style.display="flex":s.style.display="none"}})();