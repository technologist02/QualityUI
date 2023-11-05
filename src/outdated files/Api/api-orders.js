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

export async function updateOrderQuality(order) {
    const response = await fetch(`${API_URL}/OrderQuality`,{
        method: 'PATCH',
        body: JSON.stringify(order),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
    })
    if (response.ok) {
        alert("Данные заказа обновлены")
    }
    else(
        alert("WTF?")
    )
}

export async function getOrderById(id){
    const response = await fetch(`${API_URL}/OrderQuality/${id}`);
    return await response.json();
}
export async function getPassportQuality(id) {
    console.log(id);
    const response = await fetch(`${API_URL}/OrderQuality/passport/${id}`);
    if (response.ok){
        const blob = await response.blob();  
        const link = document.createElement("a");  
        link.href = URL.createObjectURL(blob);  
        link.download = `${id}.xlsx`;  
        document.body.appendChild(link);  
        link.click();  
    }
}