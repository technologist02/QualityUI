import { FilmChangeContext } from "../Context/FilmContext";
import { changeFilm } from "../api";
import { useContext } from "react";


export const Modal = () => {
    const {mark, thick, color, filmId, changeMark, changeThick, changeColor, changeFilmId, clearFilmContext} = useContext(FilmChangeContext)


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
                                        <div className="form-floating">
                                            <input type="text" id="mark" className="form-control border border-primary" placeholder="Введите марку" value={mark} onChange={(event) => changeMark(event.target.value)} />
                                            <label htmlFor="mark">Марка</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" id="thick" className="form-control border border-primary" placeholder="Введите толщину" value={thick} onChange={(event) => changeThick(event.target.value)}/>
                                            <label htmlFor="thick">Толщина</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="text" id="color" className="form-control border border-primary" placeholder="Введите цвет" value={color} onChange={(event) => changeColor(event.target.value)}/>
                                            <label htmlFor="color">Цвет</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => clearFilmContext()}>Закрыть</button>
                                    <button type="button" className="btn btn-primary" onClick={() => changeFilm(filmId, mark, thick, color)}>Сохранить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></>
}