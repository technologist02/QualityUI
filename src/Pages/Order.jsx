import { useContext, useEffect, useLayoutEffect, useState } from "react"
import { DataContext } from "../Context/Context"
import { getFilmMap } from "../Entities/film"

export const Order = () => {

    const {extruders, films, filmMap, updateContextFilm, updateContextExtruders} = useContext(DataContext)

    const [orderNumber, setOrderNumber] = useState("")
    const [customer, setCustomer] = useState("")
    const [productionDate, setProductionDate] = useState("")
    const [brigadeNumber, setBrigadeNumber] = useState("")
    const [extruderName, setExtruderName] = useState("")
    const [filmMark, setFilmMark] = useState("")
    const [filmThickness, setFilmThickness] = useState("")
    const [filmColor, setFilmColor] = useState("")
    const [width, setWidth] = useState("")
    const [minThickness, setMinThickness] = useState("")
    const [maxThickness, setMaxThickness] = useState("")
    const [tensileStrengthMD, setTensileStrengthMD] = useState("")
    const [tensileStrengthTD, setTensileStrengthTD] = useState("")
    const [elongationAtBreakMD, setElongationAtBreakMD] = useState("")
    const [elongationAtBreakTD, setElongationAtBreakTD] = useState("")
    const [coefficientOfFrictionS, setCoefficientOfFrictionS] = useState("")
    const [coefficientOfFrictionD, setCoefficientOfFrictionD] = useState("")
    const [lightTransmission, setLightTransmission] = useState("")
    const [coronaTreatment, setCoronaTreatment] = useState("")
    const [standartQualityName, setStandartQualityName] = useState("")
    //const [filmMap, setFilmMap] = useState(new Map())

    //useEffect(() => updateContextFilm(), [])
    //useEffect(() => {updateContextFilm()}, []);

    // useLayoutEffect(()=>{setFilmThickness(); setFilmColor()}, filmMark)
    // useLayoutEffect(()=>{setFilmColor()}, filmThickness)
    console.log(films);
    console.log(filmMap)

    return(
        <div style={{marginLeft:"1rem", maxWidth:500}}>
            <h3>Добавить данные по заказу</h3>
            <div className="form-floating">
                <input type="text" className="form-control" id="orderNumber" placeholder="OrderNumber" 
                    value={orderNumber} onChange={(event) => setOrderNumber(event.target.value)}/>
                <label htmlFor="orderNumber">Номер заказа</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="customer" placeholder="Customer" 
                    value={customer} onChange={(event) => setCustomer(event.target.value)}/>
                <label htmlFor="customer">Заказчик</label>
            </div>
            <div className="form-floating">
                <input type="date" className="form-control" id="productionDate" placeholder="productionDate" 
                    value={productionDate} onChange={(event) => setProductionDate(event.target.value)}/>
                <label htmlFor="productionDate">Дата производства</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="brigadeNumber" placeholder="brigadeNumber" 
                    value={brigadeNumber} onChange={(event) => setBrigadeNumber(event.target.value)}/>
                <label htmlFor="brigadeNumber">Номер смены</label>
            </div>
            <div className="form-floating">
                <select className="form-select" id="extruderName"
                    value={extruderName} onChange={(event) => setExtruderName(event.target.value)}>
                        <option disabled selected>--Выбрать рабочий центр--</option>
                        {extruders.length && extruders.map(extruder => <option key={extruder.id} value={extruder.extruderName}>{extruder.extruderName}</option>)}
                </select>
                <label htmlFor="extruderName">Экструдер</label>
            </div>
            <div className="form-floating">
                <select className="form-select" id="filmMark"
                    value={filmMark} onChange={(event) => {setFilmMark(event.target.value)}}>
                        <option disabled>--Выбрать марку пленки--</option>
                        {
                            filmMap.size && Array.from(filmMap.keys()).map(film => <option key={film} value={film}>{film}</option>)
                        }
                </select>
                <label htmlFor="filmMark">Марка пленки</label>
            </div>
            <div className="form-floating">
                <select className="form-select" id="filmThickness"
                    value={filmThickness} onChange={(event) => {setFilmThickness(event.target.value)}}>
                        <option defaultValue={100}>--Выбрать толщину пленки--</option>
                        {
                            filmMark && Array.from(filmMap.get(filmMark).keys()).map(thick => <option value={thick}>{thick}</option>)
                        }
                </select>
                <label htmlFor="filmThickness">Толщина пленки, мкм</label>
            </div>
            <div className="form-floating">
                <select className="form-select" id="filmColor"
                    value={filmColor} onChange={(event) => setFilmColor(event.target.value)}>
                        <option disabled>--Выбрать цвет пленки--</option>
                        {
                            filmThickness && filmMap.get(filmMark).get(+filmThickness).map(color => <option value={color}>{color}</option>)
                        }
                </select>
                <label htmlFor="filmColor">Цвет</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="width" placeholder="width"
                    value={width} onChange={(event) => setWidth(event.target.value)}/>
                <label htmlFor="width">Ширина, мм</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="minThickness" placeholder="minThickness"
                    value={minThickness} onChange={(event) => setMinThickness(event.target.value)}/>
                <label htmlFor="minThickness">Толщина min</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="maxThickness" placeholder="maxThickness"
                    value={maxThickness} onChange={(event) => setMaxThickness(event.target.value)}/>
                <label htmlFor="maxThickness">Толщина max</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="tensileStrengthMD" placeholder="tensileStrengthMD"
                    value={tensileStrengthMD} onChange={(event) => setTensileStrengthMD(event.target.value)}/>
                <label htmlFor="tensileStrengthMD">Прочность при разрыве вдоль, MPa</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="tensileStrengthTD" placeholder="tensileStrengthTD"
                    value={tensileStrengthTD} onChange={(event) => setTensileStrengthTD(event.target.value)}/>
                <label htmlFor="tensileStrengthTD">Прочность при разрыве поперек, MPa</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="elongationAtBreakMD" placeholder="elongationAtBreakMD"
                    value={elongationAtBreakMD} onChange={(event) => setElongationAtBreakMD(event.target.value)}/>
                <label htmlFor="elongationAtBreakMD">Удлинение при разрыве вдоль, %</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="elongationAtBreakTD" placeholder="elongationAtBreakTD"
                    value={elongationAtBreakTD} onChange={(event) => setElongationAtBreakTD(event.target.value)}/>
                <label htmlFor="elongationAtBreakTD">Удлинение при разрыве поперек, %</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="coefficientOfFrictionS" placeholder="coefficientOfFrictionS"
                    value={coefficientOfFrictionS} onChange={(event) => setCoefficientOfFrictionS(event.target.value)}/>
                <label htmlFor="coefficientOfFrictionS">Коэффициент трения статический</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="coefficientOfFrictionD" placeholder="coefficientOfFrictionD"
                    value={coefficientOfFrictionD} onChange={(event) => setCoefficientOfFrictionD(event.target.value)}/>
                <label htmlFor="coefficientOfFrictionD">Коэффициент трения динамический</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="lightTransmission" placeholder="lightTransmission"
                    value={lightTransmission} onChange={(event) => setLightTransmission(event.target.value)}/>
                <label htmlFor="lightTransmission">Светопропускание, %</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="coronaTreatment" placeholder="coronaTreatment"
                    value={coronaTreatment} onChange={(event) => setCoronaTreatment(event.target.value)}/>
                <label htmlFor="coronaTreatment">Активация, Дин</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="standartQualityName" placeholder="standartQualityName"
                    value={standartQualityName} onChange={(event) => setStandartQualityName(event.target.value)}/>
                <label htmlFor="standartQualityName">Стандарт качества</label>
            </div>
        </div>
    )
}