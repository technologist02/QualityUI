import { ControledSelect } from "../../components/FormComponents/ControledSelect";
import { ControledInput } from "../../components/FormComponents/ControledInput";
import { useDispatch, useSelector } from "react-redux";
import {
    chooseColor,
    chooseMark,
    chooseThickness,
    setOrderNumber,
    setCustomer,
    setProductionDate,
    setBrigadeNumber,
    setExtruderName,
    setWidth,
    setMinThickness,
    setMaxThickness,
    setTensileStrengthMD,
    setTensileStrengthTD,
    setElongationAtBreakMD,
    setElongationAtBreakTD,
    setCoefficientOfFrictionS,
    setCoefficientOfFrictionD,
    setLightTransmission,
    setCoronaTreatment,
    setStandartTitle,
    resetModal,
} from "./edit-orders-slice";
import { extrudersSelector } from "../extruders/extruders-slice";
import { standartTitlesSelector } from "../standart-titles/standart-titles-slice";
import { updateOrder } from "./orders-slice";

export const UpdateOrder = () => {
    const dispatch = useDispatch();
    const extruders = useSelector((state) => state.editOrder.extruders);
    const extrs = useSelector(extrudersSelector.selectAll);
    const films = useSelector((state) => state.editOrder.films);
    const marks = useSelector((state) => state.editOrder.filmsData.marks);
    const thicks = useSelector((state) => state.editOrder.filmsData.thicks);
    const colors = useSelector((state) => state.editOrder.filmsData.colors);
    const order = useSelector((state) => state.editOrder.order);
    const standartTitles = useSelector(standartTitlesSelector.selectAll);
    const inspectorId = useSelector(state => state.user.userData.userId)

    const handleSubmit = () => {
        const film = films.find( (x) => x.mark === order.filmMark && x.thickness === +order.filmThick && x.color === order.filmColor);
        if(!film) {
            return alert("Выберите корректные данные пленки")
        }
        const filmId = film.filmId
        const extruder = extrs.find((x) => x.name === order.extruderName);
        if(!extruder) {
            return alert("Выберите экструдер")
        }
        const extruderId = extruder.extruderId
        // console.log(extruderId);
        const standartQualityTitle = standartTitles.find(x => x.title === order.standartTitle);
        if (!standartQualityTitle) {
            return alert("Выберите стандарт качества")
        }
        const standartQualityTitleId = standartTitles.find(
            (x) => x.title === order.standartTitle
        ).standartQualityTitleId;
        const order2 = { ...order, extruderId, filmId, standartQualityTitleId, inspectorId };
        delete order2.filmMark;
        delete order2.extruderName;
        delete order2.filmThick;
        delete order2.filmColor;
        delete order2.standartTitle;
        console.log(order2);
        dispatch(updateOrder(order2));
    };

    return (
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div
                className="modal fade"
                id="updateOrder"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="staticBackdropLabel"
                            >
                                {`Изменить данные заказа`}{" "}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => dispatch(resetModal())}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <ControledInput
                                type="text"
                                id="orderNumber"
                                text="Номер заказа"
                                value={order.orderNumber}
                                setValue={(text) =>
                                    dispatch(setOrderNumber(text))
                                }
                            />
                            <ControledInput
                                type="text"
                                id="customer"
                                text="Заказчик"
                                value={order.customer}
                                setValue={(text) => dispatch(setCustomer(text))}
                            />
                            <ControledInput
                                type="date"
                                id="productionDate"
                                text="Дата производства"
                                value={order.productionDate}
                                setValue={(text) =>
                                    dispatch(setProductionDate(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="brigadeNumber"
                                text="Номер смены"
                                value={order.brigadeNumber}
                                setValue={(text) =>
                                    dispatch(setBrigadeNumber(text))
                                }
                            />
                            <ControledSelect
                                id="extruderName"
                                text="Экструдер"
                                value={order.extruderName}
                                setValue={(text) =>
                                    dispatch(setExtruderName(text))
                                }
                                options={extruders}
                            />
                            <ControledSelect
                                id="filmMark"
                                text="Марка пленки"
                                value={order.filmMark}
                                setValue={(text) => {
                                    dispatch(chooseMark(text));
                                }}
                                options={marks}
                            />
                            <ControledSelect
                                id="filmThickness"
                                text="Толщина пленки"
                                value={order.filmThick}
                                setValue={(text) => {
                                    dispatch(chooseThickness(text));
                                }}
                                options={thicks}
                            />
                            <ControledSelect
                                id="filmColor"
                                text="Цвет"
                                value={order.filmColor}
                                setValue={(color) => {
                                    dispatch(chooseColor(color));
                                }}
                                options={colors}
                            />
                            <ControledInput
                                type="number"
                                id="width"
                                text="Ширина, мм"
                                value={order.width}
                                setValue={(text) => dispatch(setWidth(text))}
                            />
                            <ControledInput
                                type="number"
                                id="minThickness"
                                text="Толщина min"
                                value={order.minThickness}
                                setValue={(text) =>
                                    dispatch(setMinThickness(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="maxThickness"
                                text="Толщина max"
                                value={order.maxThickness}
                                setValue={(text) =>
                                    dispatch(setMaxThickness(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="tensileStrengthMD"
                                text="Прочность при разрыве вдоль, MPa"
                                value={order.tensileStrengthMD}
                                setValue={(text) =>
                                    dispatch(setTensileStrengthMD(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="tensileStrengthTD"
                                text="Прочность при разрыве поперек, MPa"
                                value={order.tensileStrengthTD}
                                setValue={(text) =>
                                    dispatch(setTensileStrengthTD(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="elongationAtBreakMD"
                                text="Удлинение при разрыве вдоль, %"
                                value={order.elongationAtBreakMD}
                                setValue={(text) =>
                                    dispatch(setElongationAtBreakMD(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="elongationAtBreakTD"
                                text="Удлинение при разрыве поперек, %"
                                value={order.elongationAtBreakTD}
                                setValue={(text) =>
                                    dispatch(setElongationAtBreakTD(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="coefficientOfFrictionS"
                                text="Коэффициент трения статический"
                                value={order.coefficientOfFrictionS}
                                setValue={(text) =>
                                    dispatch(setCoefficientOfFrictionS(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="coefficientOfFrictionD"
                                text="Коэффициент трения динамический"
                                value={order.coefficientOfFrictionD}
                                setValue={(text) =>
                                    dispatch(setCoefficientOfFrictionD(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="lightTransmission"
                                text="Светопропускание, %"
                                value={order.lightTransmission}
                                setValue={(text) =>
                                    dispatch(setLightTransmission(text))
                                }
                            />
                            <ControledInput
                                type="number"
                                id="coronaTreatment"
                                text="Активация, Дин"
                                value={order.coronaTreatment}
                                setValue={(text) =>
                                    dispatch(setCoronaTreatment(text))
                                }
                            />
                            <ControledSelect
                                id="standartTitles"
                                text="Стандарт качества"
                                value={order.standartTitle}
                                setValue={(text) =>
                                    dispatch(setStandartTitle(text))
                                }
                                options={standartTitles.map(
                                    (title) => title.title
                                )}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => dispatch(resetModal())}
                            >
                                Закрыть
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    handleSubmit();
                                    dispatch(resetModal());
                                }}
                            >
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
