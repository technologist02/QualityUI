import { API_URL } from "../config";

export async function getExtruders() {
    const response = await fetch(`${API_URL}/Extruders`);
    return await response.json();
}

export async function createExtruder(extruderName) {
    const extruder = {};
    extruder.extruderName=extruderName;
    const response = await fetch(`${API_URL}/Extruders`,{
        method: 'POST',
        body: JSON.stringify(extruder),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
    })
    return response;
}