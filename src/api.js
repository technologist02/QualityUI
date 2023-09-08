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

async function getExtruders() {
    const response = await fetch(`${API_URL}/Extruders`);
    return await response.json();
}

class Film{
    constructor(mark, thickness, color){
        this.mark = mark;
        this.thickness = thickness;
        this.color = color;
    }
    
}

export {getOrders, getFilms, getExtruders, createFilm, Film}