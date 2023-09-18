import React,{createContext, useState} from "react";
import { createExtruder, getExtruders, getFilms } from "../api";
import { createFilm } from "../api";
import { getFilmMap } from "../Entities/film";

export const DataContext = createContext();

export const Context = (props) => {
    const [films, setFilms] = useState([])
    const [orders, setOrders] = useState([])
    const [extruders, setExtruders] = useState([])
    const [filmMap, setFilmMap] = useState(new Map())

    async function updateContextFilm() {
        await getFilms().then(data => {setFilms(data);setFilmMap(getFilmMap(films))});
    }
    async function updateContextExtruders() {
        await getExtruders().then(data => {setExtruders(data)})
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

    async function addExtruder(extruder){
        try{
            const response = await createExtruder(extruder);
            if (response.ok){
                alert('Экструдер успешно добавлен');
                updateContextExtruders();
                
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
        filmMap,
        addFilm,
        updateContextFilm,
        updateContextExtruders,
        addExtruder,
        orders,
        extruders
    }

    return <DataContext.Provider value={data}>
        {props.children}
    </DataContext.Provider>
}