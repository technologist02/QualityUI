import { useEffect} from "react";
import { Film } from "../components/film-components/FilmItem";
import { useDispatch, useSelector } from "react-redux";
import { filmsSelector, loadFilms } from "../features/films/films-slice";
import { FilmModal } from "../components/film-components/ModalFilm";



export const Films = () => {
    const dispatch = useDispatch()
    const films2 = useSelector(filmsSelector.selectAll)
    const {error, loading} = useSelector(state => state.films);
    const isModalShow = useSelector(state => state.editFilm.isModalShow)

    useEffect(() => {dispatch(loadFilms())}, [dispatch]);

    return(
        <div style={{marginLeft:"1rem"}}>
            {error && <h2>{error}</h2>}
            {loading === 'loading' && <h2>Loading...</h2>}
            {isModalShow && <FilmModal/>}
            {/* <UpdateFilm/>
            <AddFilm/> */}
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
                        films2.map(film => <Film key={film.id} film={film} />)
                    }
                </tbody>
            </table>
        </div>
    )
}
