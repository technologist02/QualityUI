import { useContext, useEffect, useLayoutEffect, useState } from "react"
import { DataContext } from "../../Context/Context"
import { ControledSelect } from "../../FormComponents/ControledSelect"
import { Order as order } from "../../Entities/order"
import { ControledInput } from "../../FormComponents/ControledInput"
import { Preloader } from "../Preloader"
import { OrderChangeContext } from "../../Context/add-or-update-order-context"
import { updateOrderQuality } from "../../Api/api-orders"

export const UpdateOrder = () => {

    const {extruders, films, filmMap} = useContext(DataContext)
    const {id, extruderName, mark, thick, color, orderNumber, customer, productionDate, brigadeNumber, width, 
        minThickness, maxThickness, tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, 
        elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD, lightTransmission, coronaTreatment,
        standartQuality, changeMark, changeThick, changeColor, changeExtruder, changeOrderNumber, changeBrigadeNumber,
        changeCustomer, changeProductionDate, changeWidth, changeMinThickness, changeMaxThickness, changeTensileStrengthMD,
        changeTensileStrengthTD, changeElongationAtBreakMD, changeElongationAtBreakTD, changeCoefficientOfFrictionS,
        changeCoefficientOfFrictionD, changeLightTransmission, changeCoronaTreatment, changeStandartQuality, 
    } = useContext(OrderChangeContext);

    const [flag, setFlag] = useState(false)
    
    // const [load, setLoad] = useState(true);
    const [extrudersSelect, setExtrudersSelect] = useState([])
    const [filmMarks, setFilmMarks] = useState([])
    const [filmThicks, setFilmThicks] = useState([])
    const [filmColors, setFilmColors] = useState([])
    const [standartQualityName, setStandartQualityName] = useState("")

    // useEffect(() => {setLoad(false); console.log("загрузка")}, [])
    useEffect(() => {setExtrudersSelect(getExtruderNames());}, [extruders])
    useLayoutEffect(() => {setFilmMarks(getFilmMarks()); console.log("отработали марки")}, [filmMap])
    useLayoutEffect(() => {setFilmThicks(getFilmThikness()); console.log("отработали толщины")}, [mark])
    useLayoutEffect(() => {setFilmColors(getFilmColor()); console.log("отработали цвета")}, [thick])

    function getExtruderNames() {
        try{
            const array = Array.from(extruders.map(extruder => extruder.extruderName));
            extruderName && changeExtruder(array[0]);
            return array
        }
        catch{
            changeExtruder();
            return []
        }
    }
    function getFilmMarks() {
        try{
            const array = Array.from(filmMap.keys())
            if (flag) {
                changeMark(array[0]);
                changeThick();
                changeColor();
            }
            return array
        }
        catch{
            changeMark();
            changeThick();
            changeColor();
            return []
        }
    }
    function getFilmThikness() {
        try{
            const array = Array.from(filmMap.get(mark).keys())
            if (flag) {
                changeThick(array[0]);
                changeColor();
            }
            return array;
        }
        catch{
            changeThick();
            changeColor();
            return []
        } 
    }
    function getFilmColor(){
        try{
            const array = filmMap.get(mark).get(+thick)
            if (flag) {
                changeColor(array[0]);
            }
            return array;
        }
        catch{
            changeColor();
            return []
        }
    }
    const changeFlag = () => setFlag(false);
    
    const handleSubmit = (event) => {
        //event.preventDefault();
        console.log(customer)
        console.log(films)
        console.log(extruders)
        console.log(mark)
        console.log(thick)
        console.log(color)
        const filmID = films.find(x => x.mark === mark && x.thickness === +thick && x.color === color).id
        console.log(filmID)
        const extruderID = extruders.find(x => x.extruderName === extruderName).id
        console.log(extruderID)
        const standartQualityNameId = 1
        
        const OrderQuality = new order(orderNumber, customer, productionDate, brigadeNumber, extruderID, filmID,  width, minThickness, maxThickness,
            tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
            lightTransmission, coronaTreatment, standartQualityNameId)
        OrderQuality.id = id
        updateOrderQuality(OrderQuality)
        setFlag(false);
    }

    return(
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal fade" id="updateOrder" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{`Изменить данные заказа`} </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={changeFlag}></button>
                        </div>
                        <div className="modal-body">
                            {/* <form onSubmit={handleSubmit}> */}
                                <ControledInput type="text" id="orderNumber" text="Номер заказа" value={orderNumber} setValue={(text) => changeOrderNumber(text)}/>
                                <ControledInput type="text" id="customer" text="Заказчик" value={customer} setValue={(text) => changeCustomer(text)}/>
                                <ControledInput type="date" id="productionDate" text="Дата производства" value={productionDate} setValue={(text) => changeProductionDate(text)}/>
                                <ControledInput type="number" id="brigadeNumber" text="Номер смены" value={brigadeNumber} setValue={(text) => changeBrigadeNumber(text)}/>
                                <ControledSelect id="extruderName"
                                    text="Экструдер"
                                    value={extruderName} 
                                    setValue={(text) => changeExtruder(text)} 
                                    options={extrudersSelect}/>
                                <ControledSelect id="filmMark"
                                    text="Марка пленки"
                                    value={mark} 
                                    setValue={(text) => changeMark(text)} 
                                    options={filmMarks}
                                    selectEffect={() => setFlag(true)}
                                    />
                                <ControledSelect id="filmThickness" 
                                    text="Толщина пленки" 
                                    value={thick} 
                                    setValue={(text) => changeThick(text)} 
                                    options={filmThicks}
                                    selectEffect={() => setFlag(true)}
                                    />
                                <ControledSelect id="filmColor" 
                                    text="Цвет" 
                                    value={color} 
                                    setValue={(color) => changeColor(color)} 
                                    options={filmColors}/>
                                <ControledInput type="number" id="width" text="Ширина, мм" value={width} setValue={(text) => changeWidth(text)}/>
                                <ControledInput type="number" id="minThickness" text="Толщина min" value={minThickness} setValue={(text) => changeMinThickness(text)}/>
                                <ControledInput type="number" id="maxThickness" text="Толщина max" value={maxThickness} setValue={(text) => changeMaxThickness(text)}/>
                                <ControledInput type="number" id="tensileStrengthMD" text="Прочность при разрыве вдоль, MPa" value={tensileStrengthMD} setValue={(text) => changeTensileStrengthMD(text)}/>
                                <ControledInput type="number" id="tensileStrengthTD" text="Прочность при разрыве поперек, MPa" value={tensileStrengthTD} setValue={(text) => changeTensileStrengthTD(text)}/>
                                <ControledInput type="number" id="elongationAtBreakMD" text="Удлинение при разрыве вдоль, %" value={elongationAtBreakMD} setValue={(text) => changeElongationAtBreakMD(text)}/>
                                <ControledInput type="number" id="elongationAtBreakTD" text="Удлинение при разрыве поперек, %" value={elongationAtBreakTD} setValue={(text) => changeElongationAtBreakTD(text)}/>
                                <ControledInput type="number" id="coefficientOfFrictionS" text="Коэффициент трения статический" value={coefficientOfFrictionS} setValue={(text) => changeCoefficientOfFrictionS(text)}/>
                                <ControledInput type="number" id="coefficientOfFrictionD" text="Коэффициент трения динамический" value={coefficientOfFrictionD} setValue={(text) => changeCoefficientOfFrictionD(text)}/>
                                <ControledInput type="number" id="lightTransmission" text="Светопропускание, %" value={lightTransmission} setValue={(text) => changeLightTransmission(text)}/>
                                <ControledInput type="number" id="coronaTreatment" text="Активация, Дин" value={coronaTreatment} setValue={(text) => changeCoronaTreatment(text)}/>
                                <ControledInput type="number" id="standartQualityName" text="Стандарт качества" value={standartQuality} setValue={(text) => changeStandartQuality(text)}/>
                                {/* <button type="submit" className="btn btn-primary btn-lg">Сохранить</button> */}
                            {/* </form> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={changeFlag}>Закрыть</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() =>{handleSubmit(); changeFlag()}}>Сохранить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}