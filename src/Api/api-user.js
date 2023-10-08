import { API_URL } from "../config"

export async function Registry(user) {
    const response = await fetch(`${API_URL}/Registration`,{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    if(response.ok) {
        alert("Регистрация прошла успешно")
    }
    else{
        console.log(response)
        // await response.then(data=>arr.push(data))
        // alert(arr[0])
    }
}