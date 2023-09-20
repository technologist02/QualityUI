import { API_URL } from "./config";

async function getOrders() {
    const response = await fetch(`${API_URL}/OrderQuality`);
    return await response.json();
}

async function getFilms() {
    const response = await fetch(`${API_URL}/Films`);
    return await response.json();
}
async function createFilm(film) {
    const response = await fetch(`${API_URL}/Films`,{
        method: 'POST',
        body: JSON.stringify(film),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    return response;
}

async function changeFilm(id, mark, thickness, color) {
    const film = {}
    film.id = id;
    film.mark = mark;
    film.thickness = thickness
    film.color = color;
    const response = await fetch(`${API_URL}/Films`,{
        method: 'PATCH',
        body: JSON.stringify(film),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    return response;
}
async function getExtruders() {
    const response = await fetch(`${API_URL}/Extruders`);
    return await response.json();
}

async function createExtruder(extruderName) {
    const extruder = {};
    extruder.extruderName=extruderName;
    const response = await fetch(`${API_URL}/Extruders`,{
        method: 'POST',
        body: JSON.stringify(extruder),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
    })
    return response;
}

async function createOrderQuality(order) {
    console.log(order)
    const response = await fetch(`${API_URL}/OrderQuality`,{
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
    })
    if (response.ok) {
        alert("Заказ добавлен")
    }
    else{
        alert("Что-то не так")
    }
    //return response;
}

export {getOrders, getFilms, getExtruders, createExtruder, createFilm, changeFilm, createOrderQuality}