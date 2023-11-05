import { API_URL } from "../config";

export async function getStandartName() {
    const response = await fetch(`${API_URL}/StandartQualityNames`);
    return await response.json();
}

export async function createStandartName(name, description) {
    const standartName = {};
    standartName.name=name;
    standartName.description = description;
    const response = await fetch(`${API_URL}/StandartQualityNames`,{
        method: 'POST',
        body: JSON.stringify(standartName),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
    })
    return response;
}