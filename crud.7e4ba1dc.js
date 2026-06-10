let e=document.querySelector(".list");fetch("http://localhost:3001/iceCreams").then(e=>e.json()).then(i=>{e.innerHTML=i.map(({id:e,image:i,calories:p,description:t,name:c,price:l,type:s})=>`<li class="item" id="${e}">
            <img src="${i}" alt="${t}" class="img">
            <p>${c}</p>
            <p>${l}</p>
            <p>${s}</p>
            <p>${t}</p>
            <p>${p}</p>
        </li>`).join("")});
//# sourceMappingURL=crud.7e4ba1dc.js.map
