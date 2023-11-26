import { useDispatch, useSelector } from "react-redux";
import {
    setCustomerFilter,
    setFilmColorFilter,
    setFilmMarkFilter,
    setFilmThicknessFilter,
    setOrderNumberFilter,
    setExtruderFilter,
    clearFilters,
    setWidthFilter,
    setOrderNumberFilterStatus,
    setCustomerFilterStatus,
    setExtruderFilterStatus,
    setFilmMarkFilterStatus,
    setFilmThicknessFilterStatus,
    setFilmColorFilterStatus,
    setWidthFilterStatus,
    setSearch,
    searchOrders,
    loadOrders,
} from "./orders-slice";
import { FilterItem } from "../../components/FormComponents/FilterItem";
import { Filter } from "../../components/Filter";

export const OrderFilters = () => {
    const dispatch = useDispatch();
    const {
        OrderNumber,
        Customer,
        Extruder,
        FilmMark,
        FilmThickness,
        FilmColor,
        Width,
    } = useSelector((state) => state.orders.filters);

    const filters = useSelector(state => state.orders.filters)
    const query1 = Object.keys(filters).filter(key => filters[key].status === true).map(key => (`${key}=${filters[key].value}`));
    const query = `?${query1.join("&")}`

    return (
        <>
            <Filter>
                <FilterItem label="Номер заказа"
                    checkboxValue={OrderNumber.status}
                    setCheckboxValue={e => {dispatch(setOrderNumberFilterStatus(e))}}
                    inputValue={OrderNumber.value}
                    setInputValue={e => {dispatch(setOrderNumberFilter(e))}}
                />
                <FilterItem label="Клиент"
                    checkboxValue={Customer.status}
                    setCheckboxValue={e => {dispatch(setCustomerFilterStatus(e))}}
                    inputValue={Customer.value}
                    setInputValue={(e) => {
                        dispatch(setCustomerFilter(e));
                    }}
                />
                <FilterItem label="Экструдер"
                    checkboxValue={Extruder.status}
                    setCheckboxValue={e => {dispatch(setExtruderFilterStatus(e))}}
                    inputValue={Extruder.value}
                    setInputValue={(e) => {
                        dispatch(setExtruderFilter(e));
                    }}
                />
                <FilterItem label="Марка пленки"
                    checkboxValue={FilmMark.status}
                    setCheckboxValue={e => {dispatch(setFilmMarkFilterStatus(e))}}
                    inputValue={FilmMark.value}
                    setInputValue={(e) => {
                        dispatch(setFilmMarkFilter(e));
                    }}
                />
                <FilterItem label="Толщина пленки"
                    checkboxValue={FilmThickness.status}
                    setCheckboxValue={e => {dispatch(setFilmThicknessFilterStatus(e))}}
                    inputValue={FilmThickness.value}
                    setInputValue={(e) => {
                        dispatch(setFilmThicknessFilter(e));
                    }}
                />
                <FilterItem label="Цвет пленки"
                    checkboxValue={FilmColor.status}
                    setCheckboxValue={e => {dispatch(setFilmColorFilterStatus(e))}}
                    inputValue={FilmColor.value}
                    setInputValue={(e) => {
                        dispatch(setFilmColorFilter(e));
                    }}
                />
                <FilterItem label="Ширина"
                    checkboxValue={Width.status}
                    setCheckboxValue={e => {dispatch(setWidthFilterStatus(e))}}
                    inputValue={Width.value}
                    setInputValue={(e) => {
                        dispatch(setWidthFilter(e));
                    }}
                />
                <button
                type="button"
                className="btn btn-primary"
                onClick={() => {dispatch(setSearch());
                    console.log(query);
                    dispatch(searchOrders(query))}}
                >
                    Поиск
                </button>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {dispatch(loadOrders());dispatch(clearFilters());}}
                >
                    Сбросить фильтры
                </button>
            </Filter>
        </>
    );
};
