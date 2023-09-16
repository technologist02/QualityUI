import React,{createContext, useState} from "react";

export const FilmChangeContext = createContext();

export const FilmItemContext = (props) => {
    const [filmId, setFilmId] = useState("");
    const [mark, setMark] = useState("");
    const [thick, setThick] = useState("");
    const [color, setColor] = useState("");

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
    function clearFilmContext() {
        setMark("");
        setThick("");
        setColor("");
        setFilmId("");
    }

    const data = {
        mark,
        thick,
        color,
        filmId,
        changeMark,
        changeThick,
        changeColor,
        changeFilmId,
        clearFilmContext
    }

    return <FilmChangeContext.Provider value={data}>
        {props.children}
    </FilmChangeContext.Provider>
}