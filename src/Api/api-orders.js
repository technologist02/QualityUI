import { API_URL } from "../config";

export async function getOrders() {
    const response = await fetch(`${API_URL}/OrderQuality`);
    return await response.json();
}

export async function createOrderQuality(order) {
    console.log(order)
    const response = await fetch(`${API_URL}/OrderQuality`,{
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
    })
    if (response.ok) {
        alert("Заказ добавлен")
    }
    else{
        alert("Что-то не так")
    }
}