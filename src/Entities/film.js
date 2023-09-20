class Film{
    constructor(mark, thickness, color){
        this.mark = mark;
        this.thickness = thickness;
        this.color = color;
    }
    
}

export function getFilmMap(films) {
    const filmMap = new Map();
    //console.log(films)
    for (let i = 0; i < films.length; i++){
        if (!filmMap.has(films[i].mark)){
            filmMap.set(films[i].mark, new Map())
        }
        if (!filmMap.get(films[i].mark).has(films[i].thickness)){
            filmMap.get(films[i].mark).set(films[i].thickness, [])
        }
        filmMap.get(films[i].mark).get(films[i].thickness).push(films[i].color)
    }
    //console.log(filmMap)
    return filmMap
}
