import { useEffect } from "react";
import { OrderQuality } from "../features/orders/OrderQuality";
import { Preloader } from "../components/Preloader";
//import { UpdateOrder } from "../features/orders/UpdateOrder";
import { useDispatch, useSelector } from "react-redux";
import { loadOrders, ordersSelector } from "../features/orders/orders-slice";
import { loadFilms } from "../features/films/films-slice";
import {loadExtruders,} from "../features/extruders/extruders-slice";
import { loadStandartTitles } from "../features/standart-titles/standart-titles-slice";
import { loadStandartFilms } from "../features/standart-films/standart-films-slice";
//import { OrderFilters } from "../features/orders/OrderFilters";

export const Orders = () => {
    const dispatch = useDispatch();
    const {
        statusFilms,
        statusExtruders,
        statusOrders,
        statusStandartFilms,
        statusStandartTitles,
    } = useSelector((state) => state.appStatusLoad.statusLoad);
    const { error } = useSelector((state) => state.orders);
    const orders = (useSelector(ordersSelector.selectAll));
    
    useEffect(() => {
        dispatch(loadFilms());
        dispatch(loadStandartTitles());
        dispatch(loadStandartFilms());
        dispatch(loadExtruders());
        dispatch(loadOrders());
    }, [dispatch]);
    const load =
        statusFilms === 'fulfilled' &&
        statusExtruders === 'fulfilled' &&
        statusOrders === 'fulfilled' &&
        statusStandartFilms === 'fulfilled' &&
        statusStandartTitles === 'fulfilled';
    //console.log(load)
    return (
        <>

        <div style={{overflow:"scroll", maxHeight:"700px"}}>
            {error && <h2>{error}</h2>}
            {!load && <Preloader />}
            {/* {(state.films.loading === 'loading' || state.extruders.loading === 'loading' || state.orders.loading === 'loading')&& <Preloader/>} */}
            {load && !error && (
                <>
                    <table className="table table-sm table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">№ заказа</th>
                                <th scope="col">Заказчик</th>
                                <th scope="col">Дата</th>
                                {/* <th scope="col">№ смены</th> */}
                                <th scope="col">Экструдер</th>
                                <th scope="col">Марка пленки</th>
                                <th scope="col">Толщина пленки</th>
                                <th scope="col">Цвет</th>
                                <th scope="col">Ширина</th>
                                <th scope="col">Толщ. min</th>
                                <th scope="col">Толщ. max</th>
                                <th scope="col">σ MD, MPa</th>
                                <th scope="col">σ TD, MPa</th>
                                <th scope="col">E MD, %</th>
                                <th scope="col">E TD, %</th>
                                <th scope="col">CoF s</th>
                                <th scope="col">CoF d</th>
                                {/* <th scope="col">Свет, %</th> */}
                                <th scope="col">Corona</th>
                                <th scope="col">Стандарт качества</th>
                                <th>Изменить</th>
                                <th>Печать паспорта</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.orderQualityId}>
                                    <OrderQuality
                                        order={order}
                                        // films={films}
                                        // extruders={extruders}
                                        // standartTitles={standartTitles}
                                    />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
        </>
    );
};
