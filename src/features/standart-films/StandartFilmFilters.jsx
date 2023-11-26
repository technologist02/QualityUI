import { useDispatch, useSelector } from "react-redux";
import { FilterItem } from "../../components/FormComponents/FilterItem";
import { Filter } from "../../components/Filter";
import { setMarkFilter, setMarkFilterStatus, setThicknessFilter, setThicknessFilterStatus, setColorFilter, setColorFilterStatus, setSearch, clearFilters, loadStandartFilms, setStandartTitleFilter, setStandartTitleFilterStatus } from "./standart-films-slice";

export const StandartFilmsFilter = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.standartFilms.filters)
    const mark = filters.Mark;
    const thickness = filters.Thickness;
    const color = filters.Color;
    const standartTitle = filters.StandartTitle;

    const query1 = Object.keys(filters).filter(key => filters[key].status === true).map(key => (`${key}=${filters[key].value}`));
    const query = `?${query1.join("&")}`

    return (
        <div>
            <Filter>
                <div>
                    <FilterItem label="Maрка"
                        checkboxValue={mark.status}
                        setCheckboxValue={e => dispatch(setMarkFilterStatus(e))}
                        inputValue={mark.value}
                        setInputValue={e => dispatch(setMarkFilter(e))}
                    />
                    <FilterItem label="Толщина"
                        checkboxValue={thickness.status}
                        setCheckboxValue={e => dispatch(setThicknessFilterStatus(e))}
                        inputValue={thickness.value}
                        setInputValue={e => dispatch(setThicknessFilter(e))}
                    />
                    <FilterItem label="Цвет"
                        checkboxValue={color.status}
                        setCheckboxValue={e => dispatch(setColorFilterStatus(e))}
                        inputValue={color.value}
                        setInputValue={e => dispatch(setColorFilter(e))}
                    />
                    <FilterItem label="Стандарт качества"
                        checkboxValue={standartTitle.status}
                        setCheckboxValue={e => dispatch(setStandartTitleFilterStatus(e))}
                        inputValue={standartTitle.value}
                        setInputValue={e => dispatch(setStandartTitleFilter(e))}
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {dispatch(setSearch());
                            console.log(query);
                            dispatch(loadStandartFilms(query))}}
                    >
                        Поиск
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {dispatch(loadStandartFilms());dispatch(clearFilters());}}
                    >
                        Сбросить фильтры
                    </button>
                </div>
            </Filter>
        </div>
    )
}