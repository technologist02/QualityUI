import { useContext, useEffect, useLayoutEffect, useState } from "react"
import { DataContext } from "../Context/Context"
import { getFilmMap } from "../Entities/film"
import { ControledSelect } from "../FormComponents/ControledSelect"
import { createOrderQuality } from "../api"
import { Order as order } from "../Entities/order"
import { ControledInput } from "../FormComponents/ControledInput"
import { Preloader } from "../components/Preloader"


export const ChangeOrderModal = (order) => {

    const {extruders, films} = useContext(DataContext)

    console.log(extruders)
    console.log(films)
    const film = films.find(x=> x.id === order.filmId)
    const extr = extruders.find(x=>x.id === order.extruderId)

    const [extruderName, setExtruderName] = useState(extr.extruderName)
    const [mark, setMark] = useState(film.mark)
    const [thick, setThick] = useState(film.thickness)
    const [color, setColor] = useState(film.color)
    const [extrudersSelect, setExtrudersSelect] = useState([])
    const [filmMarks, setFilmMarks] = useState([])
    const [filmThicks, setFilmThicks] = useState([])
    const [filmColors, setFilmColors] = useState([])
    const [filmMap, setFilmMap] = useState(new Map())

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
    const [standartQualityName, setStandartQualityName] = useState(order.standartQualityName)

    useEffect(() => {setFilmMap(getFilmMap(films))}, [])
    useEffect(() => {setExtrudersSelect(getExtruderNames())}, [])
    useLayoutEffect(() => {setFilmMarks(getFilmMarks())}, [filmMap])
    useLayoutEffect(() => {setFilmThicks(getFilmThikness())}, [mark])
    useLayoutEffect(() => {setFilmColors(getFilmColor())}, [mark, thick])

    function getExtruderNames() {
        try{
            const array = Array.from(extruders.map(extruder => extruder.extruderName));
            return array
        }
        catch{
            setExtruderName();
            return []
        }
    }
    function getFilmMarks() {
        try{
            const array = Array.from(filmMap.keys())
            return array
        }
        catch{
            return []
        }
    }
    function getFilmThikness() {
        try{
            const array = Array.from(filmMap.get(mark).keys())
            return array;
        }
        catch{
            return []
        } 
    }
    function getFilmColor(){
        try{
            const array = filmMap.get(mark).get(+thick)
            return array;
        }
        catch{
            return []
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(customer)
        const filmId = films.find(x => x.mark === mark && x.thickness === thick && x.color === color).id
        const extruderId = extruders.find(x => x.extruderName === extruderName).id
        const standartQualityNameId = 1
        console.log(films)
        console.log(extruders)
        const OrderQuality = new order(orderNumber, customer, productionDate, brigadeNumber, extruderId, filmId,  width, minThickness, maxThickness,
            tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
            lightTransmission, coronaTreatment, standartQualityNameId)
        createOrderQuality(OrderQuality)
    }

    return(
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{`Изменить данные заказа`} </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
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
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button type="button" className="btn btn-primary" >Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}