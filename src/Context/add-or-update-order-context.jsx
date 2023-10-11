import React,{createContext, useContext, useState} from "react";
// import { getOrderById } from "../Api/api-orders";
import { DataContext } from "./Context";

export const OrderChangeContext = createContext();

export const OrderItemContext = (props) => {

    const {films, extruders} = useContext(DataContext)
    const [id, setId] = useState()
    const [extruderName, setExtruderName] = useState()
    const [mark, setMark] = useState()
    const [thick, setThick] = useState()
    const [color, setColor] = useState()
    const [orderNumber, setOrderNumber] = useState()
    const [customer, setCustomer] = useState()
    const [productionDate, setProductionDate] = useState()
    const [brigadeNumber, setBrigadeNumber] = useState()
    const [width, setWidth] = useState()
    const [minThickness, setMinThickness] = useState()
    const [maxThickness, setMaxThickness] = useState()
    const [tensileStrengthMD, setTensileStrengthMD] = useState()
    const [tensileStrengthTD, setTensileStrengthTD] = useState()
    const [elongationAtBreakMD, setElongationAtBreakMD] = useState()
    const [elongationAtBreakTD, setElongationAtBreakTD] = useState()
    const [coefficientOfFrictionS, setCoefficientOfFrictionS] = useState()
    const [coefficientOfFrictionD, setCoefficientOfFrictionD] = useState()
    const [lightTransmission, setLightTransmission] = useState()
    const [coronaTreatment, setCoronaTreatment] = useState()
    const [standartQuality, setStandartQuality] = useState("")

    const changeOrderId = (id) =>setId(id);
    const changeMark = (mark) => setMark(mark);
    const changeThick = (thick) => setThick(thick);
    const changeColor = (color) => setColor(color);
    const changeExtruder = (name) => setExtruderName(name);
    const changeOrderNumber = (num) => setOrderNumber(num);
    const changeBrigadeNumber = (num) => setBrigadeNumber(num);
    const changeCustomer = (cus) => setCustomer(cus);
    const changeProductionDate = (date) => setProductionDate(date);
    const changeWidth = (width) => setWidth(width);
    const changeMinThickness = (t) => setMinThickness(t);
    const changeMaxThickness = (t) => setMaxThickness(t)
    const changeTensileStrengthMD = (t) => setTensileStrengthMD(t);
    const changeTensileStrengthTD = (t) => setTensileStrengthTD(t);
    const changeElongationAtBreakMD = (e) => setElongationAtBreakMD(e);
    const changeElongationAtBreakTD = (e) => setElongationAtBreakTD(e);
    const changeCoefficientOfFrictionS = (s) => setCoefficientOfFrictionS(s);
    const changeCoefficientOfFrictionD = (d) => setCoefficientOfFrictionD(d);
    const changeLightTransmission = (l) => setLightTransmission(l);
    const changeCoronaTreatment = (c) => setCoronaTreatment(c);
    const changeStandartQuality = (s) => setStandartQuality(s)

    function updateOrderContext(order) {
        try{
            // getOrderById(id).then(data=>{setOrder(data)}).then(
            //     () => {
                    console.log(order)
                    const film = films.find(x => x.id === order.FilmID);
                    const extruder = extruders.find(x => x.id === order.ExtruderID)
                    console.log(extruders)
                    setId(order.id);
                    setMark(film.mark);
                    changeThick(film.thickness);
                    changeColor(film.color);
                    changeExtruder(extruder.extruderName);
                    changeOrderNumber(order.orderNumber);
                    changeBrigadeNumber(order.brigadeNumber);
                    setCustomer(order.customer);
                    changeProductionDate(order.productionDate);
                    changeWidth(order.width);
                    changeMinThickness(order.minThickness);
                    changeMaxThickness(order.maxThickness);
                    changeTensileStrengthMD(order.tensileStrengthMD);
                    changeTensileStrengthTD(order.tensileStrengthTD);
                    changeElongationAtBreakMD(order.elongationAtBreakMD);
                    changeElongationAtBreakTD(order.elongationAtBreakTD);
                    changeCoefficientOfFrictionS(order.coefficientOfFrictionS);
                    changeCoefficientOfFrictionD(order.coefficientOfFrictionD);
                    changeLightTransmission(order.lightTransmission);
                    changeCoronaTreatment(order.coronaTreatment);
                    changeStandartQuality(order.standartQualityNameID)
            //     }
            // );
        }
        catch{
            // setOrder({});
        }
    }
    const data = {
        id,
        extruderName,
        mark,
        thick,
        color,
        orderNumber,
        customer,
        productionDate,
        brigadeNumber,
        width,
        minThickness,
        maxThickness,
        tensileStrengthMD,
        tensileStrengthTD,
        elongationAtBreakMD,
        elongationAtBreakTD,
        coefficientOfFrictionS,
        coefficientOfFrictionD,
        lightTransmission,
        coronaTreatment,
        standartQuality,
        changeOrderId,
        changeMark,
        changeThick,
        changeColor,
        changeExtruder,
        changeOrderNumber,
        changeBrigadeNumber,
        changeCustomer,
        changeProductionDate,
        changeWidth,
        changeMinThickness,
        changeMaxThickness,
        changeTensileStrengthMD,
        changeTensileStrengthTD,
        changeElongationAtBreakMD,
        changeElongationAtBreakTD,
        changeCoefficientOfFrictionS,
        changeCoefficientOfFrictionD,
        changeLightTransmission,
        changeCoronaTreatment,
        changeStandartQuality,
        updateOrderContext
    }

    return <OrderChangeContext.Provider value={data}>
        {props.children}
    </OrderChangeContext.Provider>
}