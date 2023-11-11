import { useDispatch } from "react-redux";
import { changeExtruder } from "./edit-extruder-slice";

export const Extruder = ({ extruder }) => {
    const { extruderId, name } = extruder;
    const dispatch = useDispatch();

    return (
        <>
            <tr id={extruderId}>
                <td>{name}</td>
                <td>
                    <button type="button" className="btn btn-outline-warning" onClick={()=>dispatch(changeExtruder(extruder))}>
                        Изменить
                    </button>
                </td>
            </tr>
        </>
    );
};
