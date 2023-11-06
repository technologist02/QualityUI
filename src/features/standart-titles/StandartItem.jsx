import { useDispatch } from "react-redux";
import { changeStandartTitle } from "./edit-standart-title-slice";

export const Standart = ({ standart }) => {
    const { id, name, description } = standart;
    const dispatch = useDispatch()

    return (
        <>
            <tr id={id}>
                <td>{name}</td>
                <td>{description}</td>
                <td>
                    <button type="button" className="btn btn-outline-warning" onClick={() => dispatch(changeStandartTitle(standart))}>
                        Изменить
                    </button>
                </td>
            </tr>
        </>
    );
};
