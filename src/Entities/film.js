export class Film{
    constructor(mark, thickness, color, density){
        this.mark = mark;
        this.thickness = thickness;
        this.color = color;
        this.density = density;
    }
}

export function getFilmMap(films) {
    const filmMap = new Map();
    for (let i = 0; i < films.length; i++){
        if (!filmMap.has(films[i].mark)){
            filmMap.set(films[i].mark, new Map())
        }
        if (!filmMap.get(films[i].mark).has(films[i].thickness)){
            filmMap.get(films[i].mark).set(films[i].thickness, [])
        }
        filmMap.get(films[i].mark).get(films[i].thickness).push(films[i].color)
    }
    return filmMap
}

export function filmsParse(films) {
    const marks = new Set();
    const thicks = new Set();
    const colors = new Set();

    for (let film of films) {
        marks.add(film.mark);
        thicks.add(film.thickness);
        colors.add(film.color);
    }

    return {
        marks: Array.from(marks),
        thicks: Array.from(thicks),
        colors: Array.from(colors)
    }
}   
