import { OrderQuality } from "../components/OrderQuality" 

export const Orders = (props) => {
    const {orders} = props;
    
    return(
    <div>
        <table className="table table-warning table-bordered">
            <thead>
            <tr>
            <th scope="col">№ заказа</th>
            <th scope="col">Заказчик</th>
            <th scope="col">Дата</th>
            <th scope="col">№ смены</th>
            <th scope="col">Экструдер</th>
            <th scope="col">Пленка</th>
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