import { useSelector } from "react-redux";
import { filmsSelector } from "../../features/films/films-slice";
import { standartTitlesSelector } from "../../features/standart-titles/standart-titles-slice";

export const StandartFilmItem = ({ standart }) => {
    const {
        filmID,
        thicknessVariation,
        tensileStrengthMD,
        tensileStrengthTD,
        elongationAtBreakMD,
        elongationAtBreakTD,
        coefficientOfFrictionS,
        coefficientOfFrictionD,
        lightTransmission,
        coronaTreatment,
        standartQualityNameID,
    } = standart;
    const film = useSelector(state => filmsSelector.selectById(state, filmID))
    const standartName = useSelector(state => standartTitlesSelector.selectById(state, standartQualityNameID));

    return (
        <>
            <td>{film && film.mark}</td>
            <td>{film && film.thickness}</td>
            <td>{film && film.color}</td>
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
                <button type="button" className="btn btn-outline-warning">
                    Изменить
                </button>
            </td>
        </>
    );
};
