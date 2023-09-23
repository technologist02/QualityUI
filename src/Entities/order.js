export class Order {
    constructor(orderNumber, customer, productionDate, brigadeNumber, extruderId, filmId,  width, minThickness, maxThickness,
        tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
        lightTransmission, coronaTreatment, standartQualityNameId){
            this.orderNumber = orderNumber
            this.customer = customer
            this.productionDate = productionDate
            this.brigadeNumber = brigadeNumber
            this.extruderID = extruderId
            this.filmID = filmId
            this.width = width
            this.minThickness = minThickness
            this.maxThickness = maxThickness
            this.tensileStrengthMD = tensileStrengthMD
            this.tensileStrengthTD = tensileStrengthTD
            this.elongationAtBreakMD = elongationAtBreakMD
            this.elongationAtBreakTD = elongationAtBreakTD
            this.coefficientOfFrictionS = coefficientOfFrictionS
            this.coefficientOfFrictionD = coefficientOfFrictionD
            this.lightTransmission = lightTransmission
            this.coronaTreatment = coronaTreatment
            this.standartQualityNameId = standartQualityNameId
        }
}