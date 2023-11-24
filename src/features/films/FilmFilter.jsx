import { useDispatch, useSelector } from "react-redux"
import { Filter } from "../../components/FormComponents/Filter"
import { setColorFilter, setColorFilterStatus, setMarkFilter, setMarkFilterStatus, setThicknessFilter, setThicknessFilterStatus, clearFilters, loadFilms, searchFilms, setSearch } from "./films-slice";

export const FilmFilter = () => {
    const dispatch = useDispatch();
    // const filter = useSelector(state => state.films.filter)
    const mark = useSelector(state => state.films.filters.Mark)
    const thickness = useSelector(state => state.films.filters.Thickness)
    const color = useSelector(state => state.films.filters.Color)

    const filters = useSelector(state => state.films.filters)
    const query1 = Object.keys(filters).filter(key => filters[key].status === true).map(key => (`${key}=${filters[key].value}`));
    const query = `?${query1.join("&")}`

    return (
        <div>
            <button type="button"
                className="btn btn-secondary">Фильтр
            </button>

            <Filter label="Maрка"
                checkboxValue={mark.status}
                setCheckboxValue={e => dispatch(setMarkFilterStatus(e))}
                inputValue={mark.value}
                setInputValue={e => dispatch(setMarkFilter(e))}
            />
            <Filter label="Толщина"
                checkboxValue={thickness.status}
                setCheckboxValue={e => dispatch(setThicknessFilterStatus(e))}
                inputValue={thickness.value}
                setInputValue={e => dispatch(setThicknessFilter(e))}
            />
            <Filter label="Цвет"
                checkboxValue={color.status}
                setCheckboxValue={e => dispatch(setColorFilterStatus(e))}
                inputValue={color.value}
                setInputValue={e => dispatch(setColorFilter(e))}
            />
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => {dispatch(setSearch());
                    console.log(query);
                    dispatch(searchFilms(query))}}
            >
                Поиск
            </button>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {dispatch(loadFilms());dispatch(clearFilters());}}
            >
                Сбросить фильтры
            </button>
        </div>
    )
}