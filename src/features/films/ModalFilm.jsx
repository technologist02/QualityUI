import { useDispatch, useSelector } from "react-redux";
import { ControledInput } from "../../components/FormComponents/ControledInput";
import { createFilm, updateFilm } from "./films-slice";
import {
    setMark,
    setThick,
    setColor,
    setDensity,
    resetModal,
} from "./edit-film-slice";
import { useEffect } from "react";

export const FilmModal = () => {
    const dispatch = useDispatch();
    const {film, mode} = useSelector((state) => state.editFilm)
    //const film = useSelector((state) => state.editFilm.film);

    
    useEffect(() => {
        const b = document.querySelector("body")
        b.style.overflow = "hidden"
        b.style.paddingRight = "16px"
        return () => {
            b.style.overflow = "";
            b.style.paddingRight = 0
        }
    })

    const handleSubmit = (film) => {
        film.color && film.mark && film.thickness > 0  && film.density > 0 ? dispatch(createFilm(film)) : alert("Заполните все поля!")
    }

    return (
        <div className="modal-dialog modal-dialog-centered"  style={{zIndex:100}}>
                <div
                    className="modal myclass show"
                    style={{display:"block", zIndex:1, background:"rgb(0,0,0,.5)",opacity:1}}
                >
                    <div className="modal-dialog" style={{zIndex:2}}>
                        <div className="modal-content" >
                        <div className="modal-header" style={{ padding: "1rem" }}>
                            <h2
                                className="modal-title fs-5"
                                style= {{textAlign:"start"}}
                            >
                                {mode}
                                {/* {`Изменить данные пленки \n ${film.mark} ${film.thickness}мкм ${film.color}`} */}
                            </h2>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => dispatch(resetModal())}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md">
                                <ControledInput
                                    type="text"
                                    id="mark"
                                    text="Марка"
                                    value={film.mark}
                                    setValue={(text) => dispatch(setMark(text))}
                                />
                            </div>
                            <div className="col-md">
                                <ControledInput
                                    type="number"
                                    id="thick"
                                    text="Толщина"
                                    value={film.thickness}
                                    setValue={(text) =>
                                        dispatch(setThick(text))
                                    }
                                />
                            </div>
                            <div className="col-md">
                                <ControledInput
                                    type="text"
                                    id="color"
                                    text="Цвет"
                                    value={film.color}
                                    setValue={(text) =>
                                        dispatch(setColor(text))
                                    }
                                />
                            </div>
                            <div className="col-md">
                                <ControledInput
                                    type="number"
                                    id="density"
                                    text="Плотность, г/см3"
                                    value={film.density}
                                    setValue={(text) =>
                                        dispatch(setDensity(text))
                                    }
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => dispatch(resetModal())}
                            >
                                Закрыть
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    film.id === 0 ? handleSubmit(film) : dispatch(updateFilm(film));
                                    dispatch(resetModal());
                                }}
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
