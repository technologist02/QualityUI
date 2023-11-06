import { useDispatch } from "react-redux";
import { changeFilm } from "./edit-film-slice";

export const Film = ({ film }) => {
    const { id, mark, thickness, color, density } = film;
    const dispatch = useDispatch();

    return (
        <>
            <tr id={id}>
                <td>{mark}</td>
                <td>{thickness}</td>
                <td>{color}</td>
                <td>{density}</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={() => dispatch(changeFilm(film))}
                    >
                        Изменить
                    </button>
                </td>
            </tr>
        </>
    );
};
