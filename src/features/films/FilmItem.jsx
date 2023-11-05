import { useDispatch } from "react-redux";
import { showFilmModal } from "./edit-film-slice";

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
                        onClick={() => dispatch(showFilmModal(film))}
                    >
                        Изменить
                    </button>
                </td>
            </tr>
        </>
    );
};
