import { useEffect } from "react";
import { StandartFilmItem } from "../components/standart-film-components/StandartFilmItem";
import { useDispatch, useSelector } from "react-redux";
import { filmsSelector, loadFilms } from "../features/films/films-slice";
import {
    loadStandartTitles,
    standartTitlesSelector,
} from "../features/standart-titles/standart-titles-slice";
import {
    loadStandartFilms,
    standartFilmsSelector,
} from "../features/standart-films/standart-films-slice";
import { Preloader } from "../components/Preloader";

export const StandartQualityFilms = () => {
    const dispatch = useDispatch();
    const films = useSelector(filmsSelector.selectAll);
    const standartTitles = useSelector(standartTitlesSelector.selectAll);
    const standartFilms = useSelector(standartFilmsSelector.selectAll);
    const {
        statusFilms,
        // statusExtruders,
        // statusOrders,
        statusStandartFilms,
        statusStandartTitles,
    } = useSelector((state) => state.appStatusLoad.statusLoad);

    //const loading = (statusStandartFilms === 'loading') || (statusStandartTitles === 'loading') || (statusFilms === 'loading')
    const fulfilled =
        statusStandartFilms === "fulfilled" &&
        statusStandartTitles === "fulfilled" &&
        statusFilms === "fulfilled";
    useEffect(() => {
        dispatch(loadFilms());
        dispatch(loadStandartTitles());
        dispatch(loadStandartFilms());
    }, [dispatch]);

    return (
        <div>
            {!fulfilled ? (
                <Preloader />
            ) : (
                <table className="table table-sm table-bordered">
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
                            <tr key={standart.id}>
                                <StandartFilmItem
                                    standart={standart}
                                    films={films}
                                    standartTitles={standartTitles}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
