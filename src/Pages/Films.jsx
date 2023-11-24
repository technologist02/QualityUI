import { useEffect} from "react";
import { Film } from "../features/films/FilmItem";
import { useDispatch, useSelector } from "react-redux";
import { clearFilters, filmsSelector, loadFilms } from "../features/films/films-slice";
import { EditFilm } from "../features/films/EditFilm";
import { addFilm } from "../features/films/edit-film-slice";
import { FilmFilter } from "../features/films/FilmFilter";



export const Films = () => {
    const dispatch = useDispatch()
    const films = useSelector(filmsSelector.selectAll)
    const {error, loading} = useSelector(state => state.films);
    const isModalShow = useSelector(state => state.editFilm.isModalShow)

    useEffect(() => {dispatch(loadFilms()); return () => {dispatch(clearFilters()); dispatch(loadFilms())}}, [dispatch] );

    return(
        <div style={{marginLeft:"1rem"}}>
            
            <button className="btn btn-primary" onClick={() => dispatch(addFilm())}>Добавить пленку</button>
            <FilmFilter/>
            {error && <h2>{error}</h2>}
            {loading === 'loading' && <h2>Loading...</h2>}
            {isModalShow && <EditFilm/>}
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
                        films.map(film => <Film key={film.filmId} film={film} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
