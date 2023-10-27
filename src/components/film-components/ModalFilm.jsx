import { useDispatch, useSelector } from "react-redux"
import { ControledInput } from "../../FormComponents/ControledInput"
import { updateFilm } from "../../features/films/films-slice";
import { setMark, setThick, setColor, setDensity, resetModal } from "../../features/films/edit-film-slice";

export const FilmModal = () => {
    const dispatch = useDispatch()
    const film = useSelector(state => state.editFilm.film)

    return(
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-dialog" id="modal-film" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header" style={{padding:3}}>
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{`Изменить данные пленки \n ${film.mark} ${film.thickness}мкм ${film.color}`} </h1>
                            <button type="button" className="btn-close" onClick={()=>dispatch(resetModal())}></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md">
                                <ControledInput type="text" 
                                    id="mark"
                                    text="Марка"
                                    value={film.mark} 
                                    setValue={(text) => dispatch(setMark(text))}/>
                            </div>
                            <div className="col-md">
                                <ControledInput type="number" 
                                    id="thick"
                                    text="Толщина"
                                    value={film.thickness} 
                                    setValue={(text) => dispatch(setThick(text))}/>
                            </div>
                            <div className="col-md">
                                <ControledInput type="text" 
                                    id="color"
                                    text="Цвет"
                                    value={film.color} 
                                    setValue={(text) => dispatch(setColor(text))}/>
                            </div>
                            <div className="col-md">
                                <ControledInput type="number" 
                                    id="density"
                                    text="Плотность, г/см3"
                                    value={film.density} 
                                    setValue={(text) => dispatch(setDensity(text))}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => dispatch(resetModal())}>Закрыть
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={() => {dispatch(updateFilm(film)); dispatch(resetModal())}}>Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}