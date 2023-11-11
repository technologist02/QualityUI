//import { getPassportQuality } from "../../Api/api-orders";
import { useDispatch, useSelector } from "react-redux";
import { setOrderModal } from "./edit-orders-slice";
import { filmsSelector } from "../films/films-slice";
import { extrudersSelector } from "../extruders/extruders-slice";
import { standartTitlesSelector } from "../standart-titles/standart-titles-slice";
import { loadPassportQuality } from "./orders-slice";

export const OrderQuality = ({order}) => {
    const dispatch = useDispatch()
    const {orderQualityId, orderNumber, customer, productionDate, brigadeNumber, extruderId, filmId, width, minThickness, maxThickness,
         tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
         lightTransmission, coronaTreatment, standartQualityTitleId} = order;
    const film = useSelector(state => filmsSelector.selectById(state, filmId))
    const extruder = useSelector(state => extrudersSelector.selectById(state, extruderId))
    const standartTitle = useSelector(state => standartTitlesSelector.selectById(state, standartQualityTitleId))

    const orderView =  {
        orderQualityId: orderQualityId,
        orderNumber : orderNumber,
        customer: customer,
        productionDate: productionDate,
        brigadeNumber: brigadeNumber,
        extruderName : extruder ? extruder.name : "",
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
        standartTitle: standartTitle? standartTitle.title : ""
    }

    return (<>
        <td>{orderNumber}</td>
        <td>{customer ? customer: "-"}</td>
        <td>{productionDate}</td>
        {/* <td>{brigadeNumber}</td> */}
        <td>
            {extruder ? extruder.name : "-"}
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
        {/* <td>{lightTransmission}</td> */}
        <td>{coronaTreatment}</td>
        <td>{standartTitle? standartTitle.title: "-"}</td>
        <td>
            <button type="button" 
                className="btn btn-outline-warning" 
                data-bs-toggle="modal" 
                data-bs-target="#updateOrder" onClick={()=>dispatch(setOrderModal(orderView))}>Изменить</button> 
        </td>
        <td>
            <button type="button" className="btn btn-outline-info" onClick={() => dispatch(loadPassportQuality(orderQualityId))}>Паспорт качества</button>
        </td>
    </>)
}