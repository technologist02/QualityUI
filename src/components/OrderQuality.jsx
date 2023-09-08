export const OrderQuality = ({order}) => {
    const {id, orderNumber, customer, productionDate, brigadeNumber, extruderID, filmID, width, minThickness, maxThickness,
         tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
         lightTransmission, coronaTreatment, standartQualityNameID} = order;
    
    return (<>
        <td>{orderNumber}</td>
        <td>{customer}</td>
        <td>{productionDate}</td>
        <td>{brigadeNumber}</td>
        <td>{extruderID}</td>
        <td>{filmID}</td>
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
        <td><button>Изменить</button></td>
    </>)
}