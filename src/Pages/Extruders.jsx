import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { extrudersSelector, loadExtruders } from "../features/extruders/extruders-slice"
import { Extruder } from "../features/extruders/ExtruderItem"
import { ExtruderModal } from "../features/extruders/ExtruderModal"
import { addExtruder } from "../features/extruders/edit-extruder-slice"


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
            {isModalShow && <ExtruderModal/>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Рабочий центр</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        extruders.map(extruder => <Extruder key={extruder.id} extruder={extruder}/>)
                    }
                </tbody>
            </table>
        </div>
        
    )
}