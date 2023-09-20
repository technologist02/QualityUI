import React from "react";
import { getOrders } from "../api";
import { getExtruders } from "../api";
import { getFilms } from "../api";
import { useState, useEffect } from "react";
import { Orders } from "./Orders";
import { Preloader } from "../components/Preloader";

export const Main = () => {
    const [orders, setOrders] = useState([]);
    const [films, setFilms] = useState([]);
    const [extruders, setExtruders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOrders().then(data=>{
            setOrders(data); setLoading(false)})
    },[]);
    // useEffect(() => {
    //     getOrders().then(data=>{
    //         setOrders(data); setLoading(false)})
    // },[]);

    return (
        <div>
            {
                loading ? <Preloader/> : (<Orders orders={orders}/>)
            }
        </div>
    )
} 