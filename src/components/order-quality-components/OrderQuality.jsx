import { useContext } from "react";
import { DataContext } from "../../Context/Context";
import { getPassportQuality } from "../../Api/api-orders";
import { OrderChangeContext } from "../../Context/add-or-update-order-context";

export const OrderQuality = ({order}) => {
    
    const {films, extruders} = useContext(DataContext)
    const {id, orderNumber, customer, productionDate, brigadeNumber, extruderID, filmID, width, minThickness, maxThickness,
         tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
         lightTransmission, coronaTreatment, standartQualityNameID} = order;

    const {changeOrderId, changeMark, changeThick, changeColor, changeExtruder, changeOrderNumber, changeBrigadeNumber,
        changeCustomer, changeProductionDate, changeWidth, changeMinThickness, changeMaxThickness,
        changeTensileStrengthMD, changeTensileStrengthTD, changeElongationAtBreakMD,
        changeElongationAtBreakTD, changeCoefficientOfFrictionS, changeCoefficientOfFrictionD,
        changeLightTransmission, changeCoronaTreatment, changeStandartQuality} = useContext(OrderChangeContext)
    
    const extruder = extruders.find(extr => extr.id === extruderID)
    const film = films.find(film => film.id === filmID)
    
    const setData = (order) => {
        // const extruder = extruders.find(extr => extr.id === order.extruderID)
        // const film = films.find(film => film.id === order.filmID)
        changeOrderId(id)
        changeMark(film? film.mark : "")
        changeThick(film? film.thickness : 0)
        changeColor(film? film.color : "")
        changeExtruder(extruder? extruder.extruderName : "")
        changeOrderNumber(orderNumber)
        changeBrigadeNumber(brigadeNumber)
        changeCustomer(customer)
        changeProductionDate(productionDate)
        changeWidth(width)
        changeMinThickness(minThickness)
        changeMaxThickness(maxThickness)
        changeTensileStrengthMD(tensileStrengthMD)
        changeTensileStrengthTD(tensileStrengthTD)
        changeElongationAtBreakMD(elongationAtBreakMD)
        changeElongationAtBreakTD(elongationAtBreakTD)
        changeCoefficientOfFrictionS(coefficientOfFrictionS)
        changeCoefficientOfFrictionD(coefficientOfFrictionD)
        changeLightTransmission(lightTransmission)
        changeCoronaTreatment(coronaTreatment)
        changeStandartQuality(standartQualityNameID)
    }

    return (<>
        <td>{orderNumber}</td>
        <td>{customer}</td>
        <td>{productionDate}</td>
        <td>{brigadeNumber}</td>
        <td>
            {extruder && extruder.extruderName}
        </td>
        <td>
            {film && film.mark}
        </td>
        <td>
            {film && film.thickness}
        </td>
        <td>
            {film && film.color}
        </td>
        {/* <td>
            {filmID}
        </td> */}
        <td>{width}</td>
        <td>{minThickness}</td>
        <td>{maxThickness}</td>
        <td>{tensileStrengthMD}</td>
        <td>{tensileStrengthTD}</td>
        <td>{elongationAtBreakMD}</td>
        <td>{elongationAtBreakTD}</td>
        <td>{coefficientOfFrictionS}</td>
        <td>{coefficientOfFrictionD}</td>
        <td>{lightTransmission}</td>
        <td>{coronaTreatment}</td>
        <td>{standartQualityNameID}</td>
        <td>
            <button type="button" 
                className="btn btn-outline-warning" 
                data-bs-toggle="modal" 
                data-bs-target="#updateOrder" onClick={()=>setData()}>Изменить</button> 
        </td>
        <td>
            <button type="button" className="btn btn-outline-info" onClick={() => getPassportQuality(id)}>Паспорт качества</button>
        </td>
    </>)
}