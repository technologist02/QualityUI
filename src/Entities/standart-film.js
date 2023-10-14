export class StandartFilm{
    constructor(filmId, thicknessVariation,
        tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
        lightTransmission, coronaTreatment, standartQualityNameId) {
            this.filmID = filmId
            this.thicknessVariation = thicknessVariation
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