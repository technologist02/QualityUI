import { useEffect } from "react";
import { StandartFilmItem } from "../features/standart-films/StandartFilmItem";
import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "../features/films/films-slice";
import { loadStandartTitles } from "../features/standart-titles/standart-titles-slice";
import {
    loadStandartFilms,
    standartFilmsSelector,
} from "../features/standart-films/standart-films-slice";
import { Preloader } from "../components/Preloader";
import { EditStandartFilm } from "../features/standart-films/EditStandartFilm";
import { addStandartFilm } from "../features/standart-films/edit-standart-film-slice";
import { StandartFilmsFilter } from "../features/standart-films/StandartFilmFilters";

export const StandartQualityFilms = () => {
    const dispatch = useDispatch();
    const isModalShow = useSelector(state => state.editStandartFilm.isModalShow)
    const standartFilms = useSelector(standartFilmsSelector.selectAll);
    const {
        statusFilms,
        statusStandartFilms,
        statusStandartTitles,
    } = useSelector((state) => state.appStatusLoad.statusLoad);
    
    const fulfilled =
        statusStandartFilms === "fulfilled" &&
        statusStandartTitles === "fulfilled" &&
        statusFilms === "fulfilled";
    useEffect(() => {
        dispatch(loadFilms()).then(dispatch(loadStandartTitles())).then(dispatch(loadStandartFilms()));
    }, [dispatch]);

    return (
        <div>
            <StandartFilmsFilter/>
            <button type="button" className="btn btn-primary mg-top" onClick={() => dispatch(addStandartFilm())}>
                Добавить стандарт качества
            </button>
            {isModalShow && <EditStandartFilm/>}
            {!fulfilled ? (
                <Preloader />
            ) : (
                <div>

                    <div style={{overflow:"scroll", maxHeight:"700px"}}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Марка пленки</th>
                                    <th scope="col">Толщина пленки</th>
                                    <th scope="col">Цвет</th>
                                    <th scope="col">Отклонение по толщине, %</th>
                                    <th scope="col">σ MD, MPa</th>
                                    <th scope="col">σ TD, MPa</th>
                                    <th scope="col">E MD, %</th>
                                    <th scope="col">E TD, %</th>
                                    <th scope="col">CoF s</th>
                                    <th scope="col">CoF d</th>
                                    <th scope="col">Свет, %</th>
                                    <th scope="col">Активация, дин</th>
                                    <th scope="col">Стандарт качества</th>
                                    <th>Изменить</th>
                                </tr>
                            </thead>
                            <tbody>
                                {standartFilms.map((standart) => (
                                    <tr key={standart.standartQualityFilmId}>
                                        <StandartFilmItem
                                            standart={standart}
                                        />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};
