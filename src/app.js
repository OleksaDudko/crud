import { getIce } from "./appi/getIce";


const listEl = document.querySelector(".list");


getIce().then(res => createIceMurcup(res));


function createIceMurcup(arr) {
    const item = arr.map(({id, image, calories, description, name, price, type}) => {
        return `<li class="item" id="${id}">
            <img src="${image}" alt="${description}" class="img">
            <p>${name}</p>
            <p>${price}</p>
            <p>${type}</p>
            <p>${description}</p>
            <p>${calories}</p>
        </li>`
    }).join("")

    listEl.innerHTML = item

}




