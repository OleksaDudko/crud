export function delIce(id) {
    const options = {
        method: "DELETE",
    }
    return fetch(`http://localhost:3001/iceCreams/${id}`, options)
}