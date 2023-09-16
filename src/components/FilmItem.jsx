import { useState } from "react";
import { useContext } from "react";
import { FilmChangeContext } from "../Context/FilmContext";


export const Film = ({film}) => {
    const {id, mark, thickness, color} = film;
    // const [newMark, setNewMark] = useState("");
    // const [thick, setThick] = useState();
    // const [newColor, setNewColor] = useState("");

    const {changeMark, changeThick, changeColor, changeFilmId, clearFilmContext} = useContext(FilmChangeContext)

    function setData(id, mark, thickness, color) {
        changeFilmId(id);
        changeMark(mark);
        changeThick(thickness);
        changeColor(color);
    }

    return(
        <>
        <tr id={id}>
            <td>{mark}</td>
            <td>{thickness}</td>
            <td>{color}</td>
            <td>
                <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => setData(id, mark, thickness, color)}>Изменить</button>
            </td>
        </tr>
        </>
    )
}