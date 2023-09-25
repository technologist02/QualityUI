import { useContext } from "react";
import { DataContext } from "../../Context/Context";
import { getPassportQuality } from "../../Api/api-orders";

export const OrderQuality = ({order}) => {
    
    const {films, extruders} = useContext(DataContext)
    
    const {id, orderNumber, customer, productionDate, brigadeNumber, extruderID, filmID, width, minThickness, maxThickness,
         tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
         lightTransmission, coronaTreatment, standartQualityNameID} = order;

    const extruder = extruders.find(extr => extr.id === extruderID)
    const film = films.find(film => film.id === filmID)
    
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
            <button type="button" className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Изменить</button>
        </td>
        <td>
            <button type="button" className="btn btn-outline-info" onClick={() => getPassportQuality(id)}>Паспорт качества</button>
        </td>
    </>)
}