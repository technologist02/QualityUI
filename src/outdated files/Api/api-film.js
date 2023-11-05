import { API_URL } from "../config";

export async function getFilms() {
    const response = await fetch(`${API_URL}/Films`);
    return await response.json();
}

export async function createFilm(film) {
    const response = await fetch(`${API_URL}/Films`,{
        method: 'POST',
        body: JSON.stringify(film),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    return response;
}

export async function updateFilm(id, mark, thickness, color, density) {
    const film = {}
    film.id = id;
    film.mark = mark;
    film.thickness = thickness
    film.color = color;
    film.density = density;
    const response = await fetch(`${API_URL}/Films`,{
        method: 'PATCH',
        body: JSON.stringify(film),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    return response;
}