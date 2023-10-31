import { useDispatch, useSelector } from "react-redux";
import { ControledInput } from "../../FormComponents/ControledInput";
import {
    setCustomerFilter,
    // setFilmColorFilter,
    // setFilmMarkFilter,
    // setFilmThicknessFilter,
    setOrderNumberFilter,
    // setExtruderFilter,
    clearFilters,
    setWidthFilter,
} from "../../features/orders/orders-slice";

export const OrderFilters = () => {
    const dispatch = useDispatch();
    const {
        orderNumberFilter,
        customerFilter,
        // extruderFilter,
        // filmMarkFilter,
        // filmThicknessFilter,
        // filmColorFilter,
        widthFilter
    } = useSelector((state) => state.orders.filters);

    return (
        <div className="input-group mb-6">
            <ControledInput
                type="text"
                id="OrderNumber"
                text="Номер заказа"
                value={orderNumberFilter}
                setValue={(e) => {
                    dispatch(setOrderNumberFilter(e));
                }}
            />
            <ControledInput
                type="text"
                id="Customer"
                text="Клиент"
                value={customerFilter}
                setValue={(e) => {
                    dispatch(setCustomerFilter(e));
                }}
            />
            {/* <ControledInput
                type="text"
                id="ExtruderName"
                text="Экструдер"
                value={extruderFilter}
                setValue={(e) => {
                    dispatch(setExtruderFilter(e));
                }}
            /> */}
            {/* <ControledInput
                type="text"
                id="FilmMark"
                text="Марка пленки"
                value={filmMarkFilter}
                setValue={(e) => {
                    dispatch(setFilmMarkFilter(e));
                }}
            /> */}
            {/* <ControledInput
                type="text"
                id="FilmThickness"
                text="Толщина пленки"
                value={filmThicknessFilter}
                setValue={(e) => {
                    dispatch(setFilmThicknessFilter(e));
                }}
            /> */}
            {/* <ControledInput
                type="text"
                id="FilmColor"
                text="Цвет пленки"
                value={filmColorFilter}
                setValue={(e) => {
                    dispatch(setFilmColorFilter(e));
                }}
            /> */}
            <ControledInput
                type="text"
                id="Width"
                text="Ширина"
                value={widthFilter}
                setValue={(e) => {
                    dispatch(setWidthFilter(e));
                }}
            />
            <button
                type="button"
                className="btn btn-secondary"
                onClick={() => dispatch(clearFilters())}
            >
                Сбросить фильтры
            </button>
        </div>
    );
};
