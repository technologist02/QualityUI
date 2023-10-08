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
        alert("WTF?")
        // await response.then(data=>arr.push(data))
        // alert(arr[0])
    }
}

export async function autorize(name, password) {
    const response = await fetch(`${API_URL}/Login`,{
        method: 'POST',
        body: JSON.stringify([name, password]),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    console.log(response)
    return response
}