import { OrderQuality } from "../components/OrderQuality" 

export const Orders = (props) => {
    const {orders} = props;
    console.log(orders);
    
    return(
    <div>
        <table className="table">
            <thead>
            <tr>
            <th>№ заказа</th>
            <th>Заказчик</th>
            <th>Дата</th>
            <th>№ смены</th>
            <th>Экструдер</th>
            <th>Пленка</th>
            <th>Ширина</th>
            <th>Толщ. min</th>
            <th>Толщ. max</th>
            <th>σ MD, MPa</th>
            <th>σ TD, MPa</th>
            <th>E MD, %</th>
            <th>E TD, %</th>
            <th>CoF s</th>
            <th>CoF d</th>
            <th>Свет, %</th>
            <th>Corona</th>
            <th>Стандарт качества</th>
            </tr>
            </thead>
            <tbody>
            {
                (orders.map(order => <tr><OrderQuality order={order} /></tr>))
                        //  : <tr><td>Ничего</td></tr>
            }
            </tbody>
        </table>
    </div>)
}