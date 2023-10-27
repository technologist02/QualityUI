import { useContext, useEffect, useState } from "react";
import { OrderQuality } from "../components/order-quality-components/OrderQuality"
import { DataContext } from "../Context/Context";
import { Preloader } from "../components/Preloader";
import { UpdateOrder } from "../components/order-quality-components/UpdateOrder";
import { useDispatch, useSelector } from "react-redux";
import { loadOrders, ordersSelector } from "../features/orders/orders-slice";
import { filmsSelector, loadFilms } from "../features/films/films-slice";
import { extrudersSelector, loadExtruders } from "../features/extruders/extruders-slice";

export const Orders = () => {
    const dispatch = useDispatch()
    const orders2 = useSelector(ordersSelector.selectAll)
    const films = useSelector(filmsSelector.selectAll)
    const extruders = useSelector(extrudersSelector.selectAll)
    //const {orders} = props;
    //const {updateContextFilm, updateContextExtruders} = useContext(DataContext)
    const [load, setLoad] = useState(true)
    useEffect(() => {dispatch(loadFilms()); dispatch(loadExtruders()); dispatch(loadOrders()); setLoad(false)}, [])

    return(
    <div>
        {/* {load ? <Preloader/> : } */}
        <UpdateOrder/>
        <table className="table table-bordered">
            <thead>
            <tr>
            <th scope="col">№ заказа</th>
            <th scope="col">Заказчик</th>
            <th scope="col">Дата</th>
            <th scope="col">№ смены</th>
            <th scope="col">Экструдер</th>
            <th scope="col">Марка пленки</th>
            <th scope="col">Толщина пленки</th>
            <th scope="col">Цвет</th>
            {/* <th scope="col">Пленка</th> */}
            <th scope="col">Ширина</th>
            <th scope="col">Толщ. min</th>
            <th scope="col">Толщ. max</th>
            <th scope="col">σ MD, MPa</th>
            <th scope="col">σ TD, MPa</th>
            <th scope="col">E MD, %</th>
            <th scope="col">E TD, %</th>
            <th scope="col">CoF s</th>
            <th scope="col">CoF d</th>
            <th scope="col">Свет, %</th>
            <th scope="col">Corona</th>
            <th scope="col">Стандарт качества</th>
            <th>Изменить</th>
            <th>Печать паспорта</th>
            </tr>
            </thead>
            <tbody>
            {
                (orders2.map(order => <tr key={order.id}><OrderQuality order={order} films={films} extruders={extruders}/></tr>))
                        //  : <tr><td>Ничего</td></tr>
            }
            </tbody>
        </table>
    </div>)
}