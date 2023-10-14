import { API_URL } from "../config";

export async function getStandartFilms() {
    const response = await fetch(`${API_URL}/StandartQualityFilms`);
    const result = await response.json();
    console.log(result)
    return result
}

export async function createStandartFilm(StandartFilm) {
    const response = await fetch(`${API_URL}/StandartQualityFilms`,{
        method: 'POST',
        body: JSON.stringify(StandartFilm),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
    })
    return response;
}