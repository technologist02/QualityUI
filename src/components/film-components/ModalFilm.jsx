import { useDispatch, useSelector } from "react-redux"
import { ControledInput } from "../../FormComponents/ControledInput"
import { updateFilm } from "../../features/films/films-slice";
import { setMark, setThick, setColor, setDensity, resetModal } from "../../features/films/edit-film-slice";

export const FilmModal = () => {
    const dispatch = useDispatch()
    const film = useSelector(state => state.editFilm.film)
    // const changeFilm = () => {
    //     const newFilm = new Film(markState, thickState, colorState, densityState);
    //     newFilm.id = filmId;
    //     dispatch(updateFilm(newFilm));
    // }

    return(
        <div>
            <div className="modal-dialog modal-dialog-centered" tabIndex="-1">
                <div>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <h1>{`Изменить данные пленки \n ${film.mark} ${film.thick}мкм ${film.color}`} </h1>
                            <button type="button" onClick={()=>dispatch(resetModal())}></button>
                        </div>
                        <div>
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
                                    value={film.thick} 
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
                        <div>
                            <button type="button" className="btn btn-secondary" onClick={() => dispatch(resetModal())}>Закрыть</button>
                            <button type="button" className="btn btn-primary" onClick={() => {dispatch(updateFilm(film)); dispatch(resetModal())}}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}