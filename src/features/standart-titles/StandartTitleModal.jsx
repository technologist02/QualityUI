import { useDispatch, useSelector } from "react-redux"
import { ControledInput } from "../../components/FormComponents/ControledInput";
import { resetEditStandartTitle, setStandartTitleDescription, setStandartTitleName } from "./edit-standart-title-slice";
import { createStandartTitle, updateStandartTitle } from "./standart-titles-slice";

export const StandartTitleModal = () => {
    const dispatch = useDispatch();
    const {standart, mode} = useSelector(state => state.editStandartTitle)

    return (
        <div className="pos-center border rounded border-3" style={{backgroundColor:"white",opacity:1, maxWidth:"700"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h5 >{mode}</h5>
                <button
                    type="button"
                    className="btn-close"
                    onClick={() => dispatch(resetEditStandartTitle())}
                ></button>
            </div>
            <div className="modal-body">
                <ControledInput type="text" id="standartName" text="Стандарт качества" value={standart.name} setValue={(text) => dispatch(setStandartTitleName(text))}/>
                <div class="input-group" >
                    <span class="input-group-text">Описание</span>
                    <textarea
                        class="form-control"
                        aria-label="Описание"
                        value={standart.description}
                        onChange={(event) => dispatch(setStandartTitleDescription(event.target.value))}
                        style={{marginRight:"0.25rem", marginBottom: "0.5rem", minHeight:"200"}}
                    >
                    </textarea>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "end"}}>
                <button
                    type="button"
                    className="btn btn-secondary"
                    style={{marginRight: "0.5rem"}}
                    onClick={() => dispatch(resetEditStandartTitle())}
                >
                    Закрыть
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        standart.id === 0 ? dispatch(createStandartTitle(standart)) : dispatch(updateStandartTitle(standart));
                        dispatch(resetEditStandartTitle())
                    }}
                >
                    Сохранить
                </button>
            </div>  
        </div>
    )
}