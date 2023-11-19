import { OrderFilters } from "../features/orders/OrderFilters";
import { Orders } from "./Orders";
import { UpdateOrder } from "../features/orders/UpdateOrder";

export const Main = () => {
    console.log("Render")
    return (
        <div>
            <UpdateOrder />
            <OrderFilters />
            <Orders/>
        </div>
    )
} 