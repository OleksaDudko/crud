// export function getIce (){
//     return fetch("http://localhost:3001/iceCreams").then(res => res.json())
// }

export async function getIce (){
    const res = await fetch("http://localhost:3001/iceCreams")
    const data = await res.json()
    return data
}