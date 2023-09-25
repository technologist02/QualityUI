import { ControledInput } from "../../FormComponents/ControledInput"
import { DataContext } from "../../Context/Context"
import { useContext } from "react"


export const AddExtruder = (props) => {
    const {addExtruder} = useContext(DataContext);
    const {newExtruder,  setNewExtruder} = props

    return (
        <div>
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
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => addExtruder(newExtruder)}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}