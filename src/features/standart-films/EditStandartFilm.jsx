import { ControledInput } from "../../components/FormComponents/ControledInput";
import { useDispatch, useSelector } from "react-redux"
import { standartTitlesSelector } from "../standart-titles/standart-titles-slice";
import { createStandartFilm, updateStandartFilm } from "./standart-films-slice";
import { chooseColor, chooseMark, chooseThickness, resetStandartFilm, setCoefficientOfFrictionD, setCoefficientOfFrictionS, setCoronaTreatment, setElongationAtBreakMD, setElongationAtBreakTD, setLightTransmission, setStandartTitle, setTensileStrengthMD, setTensileStrengthTD, setThicknessVariation } from "./edit-standart-film-slice";
import { ControledSelect } from "../../components/FormComponents/ControledSelect";

export const EditStandartFilm = () => {
    const dispatch = useDispatch();
    const {standartFilm, films, filmsData, mode} = useSelector(state => state.editStandartFilm)
    const standartTitles = useSelector(standartTitlesSelector.selectAll);

    const handleSubmit = () => {
        const filmId = films.find(
            (x) =>
                x.mark === standartFilm.filmMark &&
                x.thickness === +standartFilm.filmThick &&
                x.color === standartFilm.filmColor
        ).filmId;
        // console.log(filmID);
        const standartQualityTitleId = standartTitles.find(
            (x) => x.title === standartFilm.standartTitle
        ).standartQualityTitleId;
        // console.log(standartQualityNameId);
        const newStandartTitle = { ...standartFilm, filmId, standartQualityTitleId };
        delete newStandartTitle.filmMark;
        delete newStandartTitle.filmThick;
        delete newStandartTitle.filmColor;
        delete newStandartTitle.standartTitle;
        // console.log(newStandartTitle);
        standartFilm.standartQualityFilmId === 0 ? dispatch(createStandartFilm(newStandartTitle)) : dispatch(updateStandartFilm(newStandartTitle));
    };

    return (
        <div
            className="pos-center border rounded border-3"
            style={{ backgroundColor: "white", opacity: 1 }}
        >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5>{mode}</h5>
                <button
                    type="button"
                    className="btn-close"
                    onClick={() => dispatch(resetStandartFilm())}
                ></button>
            </div>
            <div className="modal-body">
                <ControledSelect
                    id="standartTitle"
                    text="Стандарт качества"
                    options={standartTitles.map(title => title.title)}
                    value={standartFilm.standartTitle}
                    setValue={(text) => dispatch(setStandartTitle(text))}
                />
                <ControledSelect
                    id="filmMark"
                    text="Марка пленки"
                    options={filmsData.marks}
                    value={standartFilm.filmMark}
                    setValue={(text) => dispatch(chooseMark(text))}
                />
                <ControledSelect
                    id="filmThick"
                    text="Толщина пленки"
                    options={filmsData.thicks}
                    value={standartFilm.filmThick}
                    setValue={(text) => dispatch(chooseThickness(text))}
                />
                <ControledSelect
                    id="filmColor"
                    text="Цвет пленки"
                    options={filmsData.colors}
                    value={standartFilm.filmColor}
                    setValue={(text) => dispatch(chooseColor(text))}
                />
                <ControledInput
                    type="number"
                    id="thicknessVariation"
                    text="Отклонение по толщине, %"
                    value={standartFilm.thicknessVariation}
                    setValue={(text) => dispatch(setThicknessVariation(text))}
                />
                <ControledInput
                    type="number"
                    id="tensileStrengthMD"
                    text="Прочность при разрыве вдоль, MPa"
                    value={standartFilm.tensileStrengthMD}
                    setValue={(text) => dispatch(setTensileStrengthMD(text))}
                />
                <ControledInput
                    type="number"
                    id="tensileStrengthTD"
                    text="Прочность при разрыве поперек, MPa"
                    value={standartFilm.tensileStrengthTD}
                    setValue={(text) => dispatch(setTensileStrengthTD(text))}
                />
                <ControledInput
                    type="number"
                    id="elongationAtBreakMD"
                    text="Удлинение при разрыве вдоль, %"
                    value={standartFilm.elongationAtBreakMD}
                    setValue={(text) => dispatch(setElongationAtBreakMD(text))}
                />
                <ControledInput
                    type="number"
                    id="elongationAtBreakTD"
                    text="Удлинение при разрыве поперек, %"
                    value={standartFilm.elongationAtBreakTD}
                    setValue={(text) => dispatch(setElongationAtBreakTD(text))}
                />
                <ControledInput
                    type="number"
                    id="coefficientOfFrictionS"
                    text="Коэффициент трения статический"
                    value={standartFilm.coefficientOfFrictionS}
                    setValue={(text) =>
                        dispatch(setCoefficientOfFrictionS(text))
                    }
                />
                <ControledInput
                    type="number"
                    id="coefficientOfFrictionD"
                    text="Коэффициент трения динамический"
                    value={standartFilm.coefficientOfFrictionD}
                    setValue={(text) =>
                        dispatch(setCoefficientOfFrictionD(text))
                    }
                />
                <ControledInput
                    type="number"
                    id="lightTransmission"
                    text="Светопропускание, %"
                    value={standartFilm.lightTransmission}
                    setValue={(text) => dispatch(setLightTransmission(text))}
                />
                <ControledInput
                    type="number"
                    id="coronaTreatment"
                    text="Активация, Дин"
                    value={standartFilm.coronaTreatment}
                    setValue={(text) => dispatch(setCoronaTreatment(text))}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ marginRight: "0.5rem" }}
                    onClick={() => dispatch(resetStandartFilm())}
                >
                    Закрыть
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        handleSubmit();
                        dispatch(resetStandartFilm());
                    }}
                >
                    Сохранить
                </button>
            </div>
        </div>
    );
}