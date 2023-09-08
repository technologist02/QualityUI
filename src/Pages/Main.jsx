import React from "react";
import { getOrders } from "../api";
import { getExtruders } from "../api";
import { getFilms } from "../api";
import { useState, useEffect } from "react";
import { Orders } from "./Orders";

export const Main = () => {
    const [orders, setOrders] = useState([]);
    const [films, setFilms] = useState([]);
    const [extruders, setExtruders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOrders().then(data=>{
            setOrders(data); setLoading(false)})
    },[]);

    return (
        <div>
            {
                loading ? <h3>Ололо</h3> : (<Orders orders={orders}/>)
            }
        </div>
    )
} 