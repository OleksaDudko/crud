export function getIce (){
    return fetch("http://localhost:3001/iceCreams").then(res => res.json())
}