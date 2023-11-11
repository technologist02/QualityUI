import { useDispatch } from "react-redux";
import { changeStandartTitle } from "./edit-standart-title-slice";

export const Standart = ({ standart }) => {
    const { standartQualityTitleId, title, description } = standart;
    const dispatch = useDispatch()

    return (
        <>
            <tr id={standartQualityTitleId}>
                <td>{title}</td>
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
