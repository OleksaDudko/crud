import { getIce } from "./appi/getIce";


const listEl = document.querySelector(".list");
const btnOpenEl = document.querySelector(".btn");
const backdropEl = document.querySelector(".backdrop");
const formEl = document.querySelector(".form")

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

btnOpenEl.addEventListener("click", openModal)

function openModal() {
    backdropEl.style.display = "flex";
    backdropEl.style.pointerevents = "auto";
}

function closeModal(params) {
    backdropEl.style.display = "none";
    backdropEl.style.pointerevents = "auto";
}

window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        closeModal()
    }
})

backdropEl.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        closeModal()
    }
})

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = {
        img: e.currenTarget.elements.link.value,
        name: e.currenTarget.elements.name.value,
        price: e.currenTarget.elements.price.value,
        type: e.currenTarget.elements.type.value,
        description: e.currenTarget.elements.desc.value,
        calories: e.currenTarget.elements.calories.value
    }

    formEl.reset();
    closeModal()
})