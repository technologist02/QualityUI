import { useDispatch, useSelector } from "react-redux";
import { ControledInput } from "../../components/FormComponents/ControledInput";
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
import { InlineCheckBox } from "../../components/FormComponents/InlineCheckBox";

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
    // if (f) {
    //     state.query = `?${f.join("&")}`;
    //     // dispatchEvent(searchOrders(state.query))
    // }
    return (
        <>
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
            <div >
                <div className="filter-item">
                    <InlineCheckBox value={OrderNumber.status} setValue={e => {dispatch(setOrderNumberFilterStatus(e))}}/>
                    <ControledInput
                        type="text"
                        id="OrderNumber"
                        text="Номер заказа"
                        value={OrderNumber.value}
                        setValue={(e) => {
                            dispatch(setOrderNumberFilter(e));
                        }}
                    />
                </div>
                <div className="filter-item">
                    <InlineCheckBox value={Customer.status} setValue={e => {dispatch(setCustomerFilterStatus(e))}}/>
                    <ControledInput
                        type="text"
                        id="Customer"
                        text="Клиент"
                        value={Customer.value}
                        setValue={(e) => {
                            dispatch(setCustomerFilter(e));
                        }}
                    />
                </div>
                <div className="filter-item">
                    <InlineCheckBox value={Extruder.status} setValue={e => {dispatch(setExtruderFilterStatus(e))}}/>
                    <ControledInput
                        type="text"
                        id="ExtruderName"
                        text="Экструдер"
                        value={Extruder.value}
                        setValue={(e) => {
                            dispatch(setExtruderFilter(e));
                        }}
                    />
                </div>
                <div className="filter-item">
                    <InlineCheckBox value={FilmMark.status} setValue={e => {dispatch(setFilmMarkFilterStatus(e))}}/>
                    <ControledInput
                        type="text"
                        id="FilmMark"
                        text="Марка пленки"
                        value={FilmMark.value}
                        setValue={(e) => {
                            dispatch(setFilmMarkFilter(e));
                        }}
                    />
                </div>
                <div className="filter-item">
                    <InlineCheckBox value={FilmThickness.status} setValue={e => {dispatch(setFilmThicknessFilterStatus(e))}}/>
                    <ControledInput
                        type="text"
                        id="FilmThickness"
                        text="Толщина пленки"
                        value={FilmThickness.value}
                        setValue={(e) => {
                            dispatch(setFilmThicknessFilter(e));
                        }}
                    />
                </div>
                <div className="filter-item">
                    <InlineCheckBox value={FilmColor.status} setValue={e => {dispatch(setFilmColorFilterStatus(e))}}/>
                    <ControledInput
                        type="text"
                        id="FilmColor"
                        text="Цвет пленки"
                        value={FilmColor.value}
                        setValue={(e) => {
                            dispatch(setFilmColorFilter(e));
                        }}
                    />
                </div>
                <div className="filter-item">
                    <InlineCheckBox value={Width.status} setValue={e => {dispatch(setWidthFilterStatus(e))}}/>
                    <ControledInput
                        type="text"
                        id="Width"
                        text="Ширина"
                        value={Width.value}
                        setValue={(e) => {
                            dispatch(setWidthFilter(e));
                        }}
                    />
                </div>

            </div>
        </>
    );
};
