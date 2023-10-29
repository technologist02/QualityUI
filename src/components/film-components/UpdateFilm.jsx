import { FilmChangeContext } from "../../Context/add-or-update-film-context";
import { ControledInput } from "../../FormComponents/ControledInput";
import { useContext } from "react";
import { DataContext } from "../../Context/Context";

export const UpdateFilm = () => {
    const {
        mark,
        thick,
        color,
        density,
        filmId,
        changeMark,
        changeThick,
        changeColor,
        changeDensity,
        clearFilmContext,
    } = useContext(FilmChangeContext);
    const { changeFilm } = useContext(DataContext);

    return (
        <>
            <div className="modal-dialog modal-dialog-centered">
                <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1
                                    className="modal-title fs-5"
                                    id="staticBackdropLabel"
                                >
                                    {`Изменить данные пленки \n ${mark} ${thick}мкм ${color}`}{" "}
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="col-md">
                                    <ControledInput
                                        type="text"
                                        id="mark"
                                        text="Марка"
                                        value={mark}
                                        setValue={(text) => changeMark(text)}
                                    />
                                </div>
                                <div className="col-md">
                                    <ControledInput
                                        type="text"
                                        id="thick"
                                        text="Толщина"
                                        value={thick}
                                        setValue={(text) => changeThick(text)}
                                    />
                                </div>
                                <div className="col-md">
                                    <ControledInput
                                        type="text"
                                        id="color"
                                        text="Цвет"
                                        value={color}
                                        setValue={(text) => changeColor(text)}
                                    />
                                </div>
                                <div className="col-md">
                                    <ControledInput
                                        type="number"
                                        id="density"
                                        text="Плотность, г/см3"
                                        value={density}
                                        setValue={(density) =>
                                            changeDensity(density)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onClick={() => clearFilmContext()}
                                >
                                    Закрыть
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    onClick={() => {
                                        changeFilm(
                                            filmId,
                                            mark,
                                            thick,
                                            color,
                                            density
                                        );
                                        clearFilmContext();
                                    }}
                                >
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
