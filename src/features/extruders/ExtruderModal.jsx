import { useDispatch, useSelector } from "react-redux"
import { ControledInput } from "../../components/FormComponents/ControledInput"
import { resetExtruder, setExtruderName } from "./edit-extruder-slice"
import { createExtruder, updateExtruder } from "./extruders-slice"


export const ExtruderModal = () => {
    const dispatch = useDispatch()
    const {extruder, mode} = useSelector(state => state.editExtruder)

    return (
        <div className="pos-center border rounded border-3" style={{backgroundColor:"white",opacity:1}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h5 >{mode}</h5>
                <button
                    type="button"
                    className="btn-close"
                    onClick={() => dispatch(resetExtruder())}
                ></button>
            </div>
            <div className="modal-body">
                <ControledInput type="text" id="extruderName" text="Название рабочего центра" value={extruder.extruderName} setValue={(text) => dispatch(setExtruderName(text))}/>
            </div>
            <div style={{display: "flex", justifyContent: "end"}}>
                <button
                    type="button"
                    className="btn btn-secondary"
                    style={{marginRight: "0.5rem"}}
                    onClick={() => dispatch(resetExtruder())}
                >
                    Закрыть
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        extruder.id === 0 ? dispatch(createExtruder(extruder)) : dispatch(updateExtruder(extruder));
                        dispatch(resetExtruder())
                    }}
                >
                    Сохранить
                </button>
            </div>  
        </div>
    )
}