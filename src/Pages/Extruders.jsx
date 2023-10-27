import { useEffect, useState } from "react"
import { Extruder } from "../components/extruder-components/ExtruderItem"
//import { AddExtruder } from "../components/extruder-components/add-extruder-modal"
import { useDispatch, useSelector } from "react-redux"
import { extrudersSelector, loadExtruders, createExtruder } from "../features/extruders/extruders-slice"


export const Extruders = () => {
    const [newExtruder, setNewExtruder] = useState()
    const dispatch = useDispatch();
    const extruders = useSelector(extrudersSelector.selectAll)
    useEffect(() => {dispatch(loadExtruders())}, [dispatch])

    return (
        <div>
            {/* <AddExtruder newExtruder={newExtruder} setNewExtruder={(event)=>setNewExtruder(event.target.value)}/> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{marginBottom: 20}}>
                Добавить Рабочий центр
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Создать Рабочий центр</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="add-extruder" placeholder="Название Рабочего центра" value={newExtruder} onChange={(event)=>setNewExtruder(event.target.value)}/>
                                <label htmlFor="add-extruder">Название Рабочего центра</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => dispatch(createExtruder(newExtruder))}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>

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