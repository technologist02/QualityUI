import React,{createContext, useState} from "react";
import { getFilms } from "../api";
import { createFilm } from "../api";

export const DataContext = createContext();

export const Context = (props) => {
    const [films, setFilms] = useState([])
    const [orders, setOrders] = useState([])
    const [extruders, setExtruders] = useState([])

    async function updateContextFilm() {
        await getFilms().then(data => {setFilms(data)});
    }
    async function addFilm(film){
        try{
            const response = await createFilm(film);
            if (response.ok){
                alert('Пленка успешно добавлена');
                updateContextFilm();
            }
            else{
                alert("Что-то пошло не так")
            }
        }
        catch{
            alert("Oops!")
        }
    }


    const data = {
        films,
        addFilm,
        updateContextFilm,
        orders,
        extruders
    }

    return <DataContext.Provider value={data}>
        {props.children}
    </DataContext.Provider>
}