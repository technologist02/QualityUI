import React,{createContext, useState} from "react";

export const FilmChangeContext = createContext();

export const FilmItemContext = (props) => {
    const [filmId, setFilmId] = useState("");
    const [mark, setMark] = useState("");
    const [thick, setThick] = useState("");
    const [color, setColor] = useState("");
    const [density, setDensity] = useState(0);

    function changeMark(mark) {
        setMark(mark);
    }
    function changeThick(thick) {
        setThick(thick);
    }
    function changeColor(color) {
        setColor(color);
    }
    function changeFilmId(id) {
        setFilmId(id);
    }
    function changeDensity(density) {
        setDensity(density);
    }
    function clearFilmContext() {
        setMark("");
        setThick("");
        setColor("");
        setDensity(0);
        setFilmId("");
    }

    const data = {
        mark,
        thick,
        color,
        density,
        filmId,
        changeMark,
        changeThick,
        changeColor,
        changeDensity,
        changeFilmId,
        clearFilmContext
    }

    return <FilmChangeContext.Provider value={data}>
        {props.children}
    </FilmChangeContext.Provider>
}