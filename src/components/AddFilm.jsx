import { FilmChangeContext } from "../Context/FilmContext";
import { ControledInput } from "../FormComponents/ControledInput";
import { changeFilm } from "../api";
import { useContext } from "react";


export const AddFilm = () => {
    const {mark, thick, color, filmId, changeMark, changeThick, changeColor, clearFilmContext} = useContext(FilmChangeContext)


    return <>
                    <div className="modal-dialog modal-dialog-centered">
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{`Изменить данные пленки \n ${mark} ${thick}мкм ${color}`} </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                <div className="modal-body">
                                    <div className="col-md">
                                        <ControledInput type="text" 
                                            id="mark"
                                            text="Марка"
                                            value={mark} 
                                            setValue={(text) => changeMark(text)}/>
                                    </div>
                                    <div className="col-md">
                                        <ControledInput type="text" 
                                            id="thick"
                                            text="Толщина"
                                            value={thick} 
                                            setValue={(text) => changeThick(text)}/>
                                    </div>
                                    <div className="col-md">
                                        <ControledInput type="text" 
                                            id="color"
                                            text="Цвет"
                                            value={color} 
                                            setValue={(text) => changeColor(text)}/>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => clearFilmContext()}>Закрыть</button>
                                    <button type="button" className="btn btn-primary" onClick={() => {changeFilm(filmId, mark, thick, color); clearFilmContext()}}>Сохранить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></>
}