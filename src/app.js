import { getIce } from "./appi/getIce";
import { addIceCream } from "./appi/addIceCream";
import { delIce } from "./appi/delIce";



const listEl = document.querySelector(".list");
const btnOpenEl = document.querySelector(".btn");
const backdropEl = document.querySelector(".backdrop");
const formEl = document.querySelector(".form")


async function init() {
    const res = await getIce();
    await createIceMurcup(res)
}

init()


function createIceMurcup(arr) {
    const item = arr.map(({id, image, calories, description, name, price, type}) => {
        return `<li class="item" id="${id}">
            <img src="${image}" alt="${description}" class="img">
            <p>${name}</p>
            <p>${price}</p>
            <p>${type}</p>
            <p>${description}</p>
            <p>${calories}</p>
            <div class="wrap">
            <button class="edit" type="button" data-action="edit">Edit</button>
            <button class="delete" type="button" data-action="delete">Delete</button>
            </div>
        </li>`
    }).join("")

    listEl.innerHTML = item

}

btnOpenEl.addEventListener("click", openModal)

function openModal() {
    backdropEl.style.display = "flex";
    backdropEl.style.pointerEvents = "auto";
}

function closeModal() {
    backdropEl.style.display = "none";
    backdropEl.style.pointerEvents = "auto";
}

window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        closeModal()
    }
})

formEl.addEventListener("submit", async (e) => {
    e.preventDefault()
    const data = {
        image: e.currentTarget.elements.link.value,
        name: e.currentTarget.elements.name.value,
        price: e.currentTarget.elements.price.value,
        type: e.currentTarget.elements.type.value,
        description: e.currentTarget.elements.desc.value,
        calories: e.currentTarget.elements.calories.value
    }

    await addIceCream(data)
    const res = await getIce
    createIceMurcup(res)
    formEl.reset();
    closeModal();
})

listEl.addEventListener("click", async (e) => {
    if (e.target.nodeName !== "BUTTON") {
        return
    }

    const action = e.target.dataset.action
    const li = e.target.closest("li");
    const id = li.id;
    if (action === "delete") {
        await delIce(id)
        const res = await getIce()
        createIceMurcup(res)
    }
    if (action === "edit") {
        openModal()
    }
})