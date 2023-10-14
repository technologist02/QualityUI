import React,{createContext, useState} from "react";
import { createExtruder, getExtruders } from "../Api/api-extruder";
import { getFilms, createFilm, updateFilm } from "../Api/api-film";
import { getStandartFilms } from "../Api/api-standart-films";
import { getFilmMap } from "../Entities/film";
import { createStandartName, getStandartName } from "../Api/api-standart-name";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const Context = (props) => {

    const [films, setFilms] = useState([])
    // const [orders, setOrders] = useState([])
    const [extruders, setExtruders] = useState([])
    const [standartNames, setStandartNames] = useState([])
    const [standartFilms, setStandartFilms] = useState([])
    const [filmMap, setFilmMap] = useState(new Map())
    const navigate = useNavigate();

    async function updateContextFilm() {
        await getFilms().then(data => {setFilms(data);setFilmMap(getFilmMap(data))});
    }
    async function updateContextExtruders() {
        await getExtruders().then(data => {setExtruders(data)})
    }
    async function updateContextStandartNames() {
        await getStandartName().then(data => {setStandartNames(data)})
    }
    async function updateContextStandartFilms() {
        await getStandartFilms().then(data => {setStandartFilms(data)})
    }

    async function addFilm(film){
        try{
            const response = await createFilm(film);
            console.log(response.status)
            if (response.ok){
                alert('Пленка успешно добавлена');
                updateContextFilm();
            }
            else if(response.status === 401){
                alert("Вы не авторизованы")
                navigate("/Autorization")
            }
            else{
                alert("Что-то пошло не так")
            }
        }
        catch(error){
            console.log(error)
            alert("Oops!")
        }
    }

    async function changeFilm(filmId, mark, thick, color, density){
        try{
            const response = await updateFilm(filmId, mark, thick, color, density);
            if (response.ok){
                alert("Изменения успешно проведены")
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
    
    async function addStandartName(name, description){
        try{
            const response = await createStandartName(name, description);
            if (response.ok){
                alert('Стандарт качества успешно добавлен');
                updateContextStandartNames();
                
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
        standartNames,
        standartFilms,
        addFilm,
        changeFilm,
        updateContextFilm,
        updateContextExtruders,
        updateContextStandartNames,
        updateContextStandartFilms,
        addExtruder,
        addStandartName,
        // orders,
        extruders
    }

    return <DataContext.Provider value={data}>
        {props.children}
    </DataContext.Provider>
}