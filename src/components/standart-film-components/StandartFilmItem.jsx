import { DataContext } from "../../Context/Context";
import { useContext } from "react";


export const StandartFilmItem = ({standart}) => {
    const {films, standartNames} = useContext(DataContext)
    const {filmID, thicknessVariation,
        tensileStrengthMD, tensileStrengthTD, elongationAtBreakMD, elongationAtBreakTD, coefficientOfFrictionS, coefficientOfFrictionD,
        lightTransmission, coronaTreatment, standartQualityNameID} = standart;

    const film = films.find(film => film.id === filmID)
    const standartName = standartNames.find(x=> x.id == standartQualityNameID)
    return(
        <>
            <td>
                {film && film.mark}
            </td>
            <td>
                {film && film.thickness}
            </td>
            <td>
                {film && film.color}
            </td>
            <td>{thicknessVariation}</td>
            <td>{tensileStrengthMD}</td>
            <td>{tensileStrengthTD}</td>
            <td>{elongationAtBreakMD}</td>
            <td>{elongationAtBreakTD}</td>
            <td>{coefficientOfFrictionS}</td>
            <td>{coefficientOfFrictionD}</td>
            <td>{lightTransmission}</td>
            <td>{coronaTreatment}</td>
            <td>{standartName && standartName.name}</td>
            <td>
                <button type="button" className="btn btn-outline-warning" >Изменить</button>
            </td>
        </>
    )
}