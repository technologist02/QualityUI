import { useState } from "react";
import { useDispatch } from "react-redux"
import { ControledInput } from "../../FormComponents/ControledInput"
import { updateFilm } from "../../features/films/films-slice";
import { Film } from "../../Entities/film"

export const FilmModal = ({props}) => {
    const [markState, setMark] = useState("");
    const [thickState, setThick] = useState("");
    const [colorState, setColor] = useState("");
    const [densityState, setDensity] = useState(0);
    const {filmId, mark, thickness, color, density} = props
    const dispatch = useDispatch()
    
    const changeFilm = () => {
        const newFilm = new Film(markState, thickState, colorState, densityState);
        newFilm.id = filmId;
        dispatch(updateFilm(newFilm));
    }

    return(
        <div className="modal-dialog modal-dialog-centered" id="filmModal" tabIndex="-1">
            <div className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{`Изменить данные пленки \n ${mark} ${thickness}мкм ${color}`} </h1>
                            <button type="button" className="btn-close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md">
                                <ControledInput type="text" 
                                    id="mark"
                                    text="Марка"
                                    value={mark} 
                                    setValue={(event) => setMark(event.target.value)}/>
                            </div>
                            <div className="col-md">
                                <ControledInput type="text" 
                                    id="thick"
                                    text="Толщина"
                                    value={thickness} 
                                    setValue={(event) => setThick(event.target.value)}/>
                            </div>
                            <div className="col-md">
                                <ControledInput type="text" 
                                    id="color"
                                    text="Цвет"
                                    value={color} 
                                    setValue={(text) => setColor(text)}/>
                            </div>
                            <div className="col-md">
                                <ControledInput type="number" 
                                    id="density"
                                    text="Плотность, г/см3"
                                    value={density} 
                                    setValue={(density) => setDensity(density)}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-close">Закрыть</button>
                            <button type="button" className="btn btn-primary btn-close" onClick={() => {changeFilm()}}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}