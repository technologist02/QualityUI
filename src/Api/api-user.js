import { API_URL } from "../config"

export async function registry(user) {
    const response = await fetch(`${API_URL}/Auth/register`,{
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
    }
}

export async function autorize(user) {
    const response = await fetch(`${API_URL}/Auth/login`,{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    console.log(response)
    return response
}

export async function getUserData(token="") {
    const response = await fetch(`${API_URL}/Auth`, {
        headers : {
            'Content-type': 'application/json; charset=UTF-8',
            "Authorization": "Bearer " + token
        }
    })
    return response;
}