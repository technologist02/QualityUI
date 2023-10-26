import { useContext } from "react";
import { FilmChangeContext } from "../../Context/add-or-update-film-context";


export const Film = ({film}) => {
    const {id, mark, thickness, color, density} = film;

    const {changeMark, changeThick, changeColor, changeFilmId, changeDensity} = useContext(FilmChangeContext)

    function setData(id, mark, thickness, color, density) {
        changeFilmId(id);
        changeMark(mark);
        changeThick(thickness);
        changeDensity(density)
        changeColor(color);
    }

    return(
        <>
        <tr id={id}>
            <td>{mark}</td>
            <td>{thickness}</td>
            <td>{color}</td>
            <td>{density}</td>
            <td>
                <button type="button" 
                    className="btn btn-outline-warning" 
                    data-bs-toggle="modal" 
                    data-bs-target="#staticBackdrop" 
                    onClick={() => setData(id, mark, thickness, color, density)}>Изменить</button>
            </td>
        </tr>
        </>
    )
}