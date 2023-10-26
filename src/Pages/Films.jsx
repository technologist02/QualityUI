import { useState, useEffect, useContext } from "react";
import { Film } from "../components/film-components/FilmItem";
import { DataContext } from "../Context/Context";
import { UpdateFilm } from "../components/film-components/UpdateFilm";
import { AddFilm } from "../components/film-components/AddFilm";
import { useDispatch, useSelector } from "react-redux";
import { filmsSelector, loadFilms } from "../features/films/films-slice";



export const Films = () => {
    const [isModalShow, setIsModalShow] = useState(false)
    const dispatch = useDispatch()
    const films2 = useSelector(filmsSelector.selectAll)
    const {films = [], updateContextFilm} = useContext(DataContext)
    const {error, loading} = useSelector(state => state.films);

    // const setModalData = (filmId, thickness, color, density) => {
        
    // }

    useEffect(() => {updateContextFilm(); dispatch(loadFilms())}, [dispatch]);

    return(
        <div style={{marginLeft:"1rem"}}>
            {error && <h2>{error}</h2>}
            {loading === 'loading' && <h2>Loading...</h2>}
            <UpdateFilm/>
            <AddFilm/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Марка Пленки</th>
                        <th>Толщина, мкм</th>
                        <th>Цвет</th>
                        <th>Плотность, г/см3</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        films2.map(film => <Film key={film.id} film={film}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}
