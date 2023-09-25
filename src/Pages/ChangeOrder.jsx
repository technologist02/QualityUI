import { useContext, useEffect, useLayoutEffect, useState } from "react"
import { DataContext } from "../Context/Context"
import { getFilmMap } from "../Entities/film"
import { ControledSelect } from "../FormComponents/ControledSelect"
import { createOrderQuality } from "../api"
import { Order as order } from "../Entities/order"
import { ControledInput } from "../FormComponents/ControledInput"
import { Preloader } from "../components/Preloader"
import { useParams } from "react-router-dom"

export const Order = () => {

    const {id} = useParams()
    const [order, setOrder] = useState({})
    const [flag, setFlag] = useState(order? false : true)
    const {extruders, films, filmMap} = useContext(DataContext)
    const film = films.filter(film => film.id === order.filmID)
    const extruder = extruders.filter(extr=>extr.id === order.extruderID)
    const [load, setLoad] = useState(true);

    const [extruderName, setExtruderName] = useState(extruder.extruderName)
    const [mark, setMark] = useState(film.id)
    const [thick, setThick] = useState(film.thickness)
    const [color, setColor] = useState(film.color)
    const [extrudersSelect, setExtrudersSelect] = useState([])
    const [filmMarks, setFilmMarks] = useState([])
    const [filmThicks, setFilmThicks] = useState([])
    const [filmColors, setFilmColors] = useState([])
    //const [filmMap, setFilmMap] = useState(new Map())

    const [orderNumber, setOrderNumber] = useState(order.orderNumber)
    const [customer, setCustomer] = useState(order.customer)
    const [productionDate, setProductionDate] = useState(order.productionDate)
    const [brigadeNumber, setBrigadeNumber] = useState(order.brigadeNumber)
    const [width, setWidth] = useState(order.width)
    const [minThickness, setMinThickness] = useState(order.minThickness)
    const [maxThickness, setMaxThickness] = useState(order.maxThickness)
    const [tensileStrengthMD, setTensileStrengthMD] = useState(order.tensileStrengthMD)
    const [tensileStrengthTD, setTensileStrengthTD] = useState(order.tensileStrengthTD)
    const [elongationAtBreakMD, setElongationAtBreakMD] = useState(order.elongationAtBreakMD)
    const [elongationAtBreakTD, setElongationAtBreakTD] = useState(order.elongationAtBreakTD)
    const [coefficientOfFrictionS, setCoefficientOfFrictionS] = useState(order.coefficientOfFrictionS)
    const [coefficientOfFrictionD, setCoefficientOfFrictionD] = useState(order.coefficientOfFrictionD)
    const [lightTransmission, setLightTransmission] = useState(order.lightTransmission)
    const [coronaTreatment, setCoronaTreatment] = useState(order.coronaTreatment)
    const [standartQualityName, setStandartQualityName] = useState("")

    // useEffect(() => {setFilmMap(getFilmMap(films)); setLoad(false)}, [])
    useEffect(() => {setExtrudersSelect(getExtruderNames()); setLoad(false)}, [])
    useLayoutEffect(() => {setFilmMarks(getFilmMarks())}, [filmMap])
    useLayoutEffect(() => {setFilmThicks(getFilmThikness()); setFlag(true)}, [mark])
    useLayoutEffect(() => {setFilmColors(getFilmColor())}, [mark, thick])

    function getExtruderNames() {
        try{
            const array = Array.from(extruders.map(extruder => extruder.extruderName));
            flag && setExtruderName(array[0]);
            return Array.from(extruders.map(extruder => extruder.extruderName))
        }
        catch{
            setExtruderName();
            return []
        }
    }
    function getFilmMarks() {
        try{
            const array = Array.from(filmMap.keys())
            if (flag) {
                setMark(array[0]);
                setThick();
                setColor();
            }
            return array
        }
        catch{
            setMark();
            setThick();
            setColor();
            return []
        }
    }
    function getFilmThikness() {
        try{
            const array = Array.from(filmMap.get(mark).keys())
            if (flag) {
                setThick(array[0]);
                setColor();
            }
            return array;
        }
        catch{
            setThick();
            setColor();
            return []
        } 
    }
    function getFilmColor(){
        try{
            const array = filmMap.get(mark).get(+thick)
            if (flag) {
                setColor(array[0]);
            }
            return array;
        }
        catch{
            setColor();
            return []
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(customer)
        console.log(films)
        console.log(extruders)
        const filmID = films.find(x => x.mark === mark && x.thickness === thick && x.color === color).id
        const extruderID = extruders.find(x => x.extruderName === extruderName).id
        const standartQualityNameId = 1
        
        const OrderQuality = new order(orderNumber, customer, productionDate, brigadeNumber, extruderID, filmID,  width, minThickness, maxThickness,
            tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
            lightTransmission, coronaTreatment, standartQualityNameId)
        createOrderQuality(OrderQuality)
    }

    return(
        load ? <Preloader/> :
        <div style={{marginLeft:"1rem", maxWidth:500}}>
            <h3>Добавить данные по заказу</h3>
            <form onSubmit={handleSubmit}>
                <ControledInput type="text" id="orderNumber" text="Номер заказа" value={orderNumber} setValue={(text) => setOrderNumber(text)}/>
                <ControledInput type="text" id="customer" text="Заказчик" value={customer} setValue={(text) => setCustomer(text)}/>
                <ControledInput type="date" id="productionDate" text="Дата производства" value={productionDate} setValue={(text) => setProductionDate(text)}/>
                <ControledInput type="number" id="brigadeNumber" text="Номер смены" value={brigadeNumber} setValue={(text) => setBrigadeNumber(text)}/>
                <ControledSelect id="extruderName"
                    text="Экструдер"
                    value={extruderName} 
                    setValue={(text) => setExtruderName(text)} 
                    options={extrudersSelect}/>
                <ControledSelect id="filmMark"
                    text="Марка пленки"
                    value={mark} 
                    setValue={(text) => setMark(text)} 
                    options={filmMarks}/>
                <ControledSelect id="filmThickness" 
                    text="Толщина пленки" 
                    value={thick} 
                    setValue={(text) => setThick(text)} 
                    options={filmThicks}/>
                <ControledSelect id="filmColor" 
                    text="Цвет" 
                    value={color} 
                    setValue={(color) => setColor(color)} 
                    options={filmColors}/>
                <ControledInput type="number" id="width" text="Ширина, мм" value={width} setValue={(text) => setWidth(text)}/>
                <ControledInput type="number" id="minThickness" text="Толщина min" value={minThickness} setValue={(text) => setMinThickness(text)}/>
                <ControledInput type="number" id="maxThickness" text="Толщина max" value={maxThickness} setValue={(text) => setMaxThickness(text)}/>
                <ControledInput type="number" id="tensileStrengthMD" text="Прочность при разрыве вдоль, MPa" value={tensileStrengthMD} setValue={(text) => setTensileStrengthMD(text)}/>
                <ControledInput type="number" id="tensileStrengthTD" text="Прочность при разрыве поперек, MPa" value={tensileStrengthTD} setValue={(text) => setTensileStrengthTD(text)}/>
                <ControledInput type="number" id="elongationAtBreakMD" text="Удлинение при разрыве вдоль, %" value={elongationAtBreakMD} setValue={(text) => setElongationAtBreakMD(text)}/>
                <ControledInput type="number" id="elongationAtBreakTD" text="Удлинение при разрыве поперек, %" value={elongationAtBreakTD} setValue={(text) => setElongationAtBreakTD(text)}/>
                <ControledInput type="number" id="coefficientOfFrictionS" text="Коэффициент трения статический" value={coefficientOfFrictionS} setValue={(text) => setCoefficientOfFrictionS(text)}/>
                <ControledInput type="number" id="coefficientOfFrictionD" text="Коэффициент трения динамический" value={coefficientOfFrictionD} setValue={(text) => setCoefficientOfFrictionD(text)}/>
                <ControledInput type="number" id="lightTransmission" text="Светопропускание, %" value={lightTransmission} setValue={(text) => setLightTransmission(text)}/>
                <ControledInput type="number" id="coronaTreatment" text="Активация, Дин" value={coronaTreatment} setValue={(text) => setCoronaTreatment(text)}/>
                <ControledInput type="number" id="standartQualityName" text="Стандарт качества" value={standartQualityName} setValue={(text) => setStandartQualityName(text)}/>
                <button type="submit" class="btn btn-primary btn-lg">Сохранить</button>
            </form>
        </div>
    )
}