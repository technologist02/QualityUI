import { useDispatch, useSelector } from "react-redux";
import { filmsSelector } from "../films/films-slice";
import { standartTitlesSelector } from "../standart-titles/standart-titles-slice";
import { changeStandartFilm } from "./edit-standart-film-slice";

export const StandartFilmItem = ({ standart }) => {
    const dispatch = useDispatch();
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
    const standartTitle = useSelector(state => standartTitlesSelector.selectById(state, standartQualityNameID));

    const setData = (data) => {
        const standartView = {...data, filmMark:film.mark, filmThick: +film.thickness, filmColor:film.color, standartTitle: standartTitle.name};
        delete standartView.filmID;
        delete standartView.standartQualityNameID;
        dispatch(changeStandartFilm(standartView))
    }
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
            <td>{standartTitle && standartTitle.name}</td>
            <td>
                <button type="button" className="btn btn-outline-warning" onClick={() => setData(standart)}>
                    Изменить
                </button>
            </td>
        </>
    );
};
