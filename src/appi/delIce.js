// export function delIce(id) {
//     const options = {
//         method: "DELETE",
//     }
//     return fetch(`http://localhost:3001/iceCreams/${id}`, options)
// }

export async function delIce(id) {
    const options = {
        method: "DELETE",
    }
    const res = await fetch(`http://localhost:3001/iceCreams/${id}`, options)
    return res
}