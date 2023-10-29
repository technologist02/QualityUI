import { getPassportQuality } from "../../Api/api-orders";
import { useDispatch } from "react-redux";
import { setOrderModal } from "../../features/orders/edit-orders-slice";

export const OrderQuality = ({order, films, extruders, standartTitles}) => {
    const dispatch = useDispatch()
    const {id, orderNumber, customer, productionDate, brigadeNumber, extruderID, filmID, width, minThickness, maxThickness,
         tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
         lightTransmission, coronaTreatment, standartQualityNameID} = order;
    const extruder = extruders.find(extr => extr.id === extruderID)
    const film = films.find(film => film.id === filmID)
    const standartTitle = standartTitles.find(title => title.id === standartQualityNameID)
    
    const orderView =  {
        id: id,
        orderNumber : orderNumber,
        customer: customer,
        productionDate: productionDate,
        brigadeNumber: brigadeNumber,
        extruderName : extruder ? extruder.extruderName : "",
        filmMark: film ? film.mark : "",
        filmThick: film ? film.thickness : "",
        filmColor: film ? film.color : "",
        width: width,
        minThickness: minThickness,
        maxThickness: maxThickness,
        tensileStrengthMD: tensileStrengthMD,
        tensileStrengthTD: tensileStrengthTD,
        elongationAtBreakMD: elongationAtBreakMD,
        elongationAtBreakTD: elongationAtBreakTD,
        coefficientOfFrictionS: coefficientOfFrictionS,
        coefficientOfFrictionD: coefficientOfFrictionD,
        lightTransmission: lightTransmission,
        coronaTreatment: coronaTreatment,
        standartTitle: standartTitle? standartTitle.name : ""
    }

    return (<>
        <td>{orderNumber}</td>
        <td>{customer}</td>
        <td>{productionDate}</td>
        <td>{brigadeNumber}</td>
        <td>
            {extruder ? extruder.extruderName : "-"}
        </td>
        <td>
            {film ? film.mark : "-"}
        </td>
        <td>
            {film ? film.thickness : "-"}
        </td>
        <td>
            {film ? film.color : "-"}
        </td>
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
        <td>{standartTitle? standartTitle.name: "-"}</td>
        <td>
            <button type="button" 
                className="btn btn-outline-warning" 
                data-bs-toggle="modal" 
                data-bs-target="#updateOrder" onClick={()=>dispatch(setOrderModal(orderView))}>Изменить</button> 
        </td>
        <td>
            <button type="button" className="btn btn-outline-info" onClick={() => getPassportQuality(id)}>Паспорт качества</button>
        </td>
    </>)
}