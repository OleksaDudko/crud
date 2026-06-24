// export function addIceCream(data) {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
//   return fetch("http://localhost:3001/iceCreams",options).then((res) => res.json());
// }

// export function getIce (){
//     return fetch("http://localhost:3001/iceCreams").then(res => res.json())
// }

export async function addIceCream(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const res = await fetch("http://localhost:3001/iceCreams",options);
  const result = await res.json();
  return result
}