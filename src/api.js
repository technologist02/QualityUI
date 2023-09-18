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
    //console.log(film);
    //try{
        const response = await fetch(`${API_URL}/Films`,{
            method: 'POST',
            body: JSON.stringify(film),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
              }
        })
        return response;
    //}
    //catch {
        //alert("Какая-то ошибка")
    //}
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

class Film{
    constructor(mark, thickness, color){
        this.mark = mark;
        this.thickness = thickness;
        this.color = color;
    }
    
}

export {getOrders, getFilms, getExtruders, createExtruder, createFilm, changeFilm, Film}