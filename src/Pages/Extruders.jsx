import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { extrudersSelector, loadExtruders } from "../features/extruders/extruders-slice"
import { Extruder } from "../features/extruders/ExtruderItem"
import { addExtruder } from "../features/extruders/edit-extruder-slice"
import { EditExtruder } from "../features/extruders/EditExtruder"


export const Extruders = () => {
    const dispatch = useDispatch();
    const extruders = useSelector(extrudersSelector.selectAll)
    const isModalShow = useSelector(state => state.editExtruder.isModalShow)
    useEffect(() => {dispatch(loadExtruders())}, [dispatch])

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={() => dispatch(addExtruder())}>
                Добавить Рабочий центр
            </button>
            {isModalShow && <EditExtruder/>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Рабочий центр</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        extruders.map(extruder => <Extruder key={extruder.extruderId} extruder={extruder}/>)
                    }
                </tbody>
            </table>
        </div>
        
    )
}