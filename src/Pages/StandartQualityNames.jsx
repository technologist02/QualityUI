import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Standart } from "../features/standart-titles/StandartItem";
import {
    loadStandartTitles,
    standartTitlesSelector,
} from "../features/standart-titles/standart-titles-slice";
import { addStandartTitle } from "../features/standart-titles/edit-standart-title-slice";
import { StandartTitleModal } from "../features/standart-titles/StandartTitleModal";

export const StandartTitles = () => {
    const dispatch = useDispatch();
    const standartTitles = useSelector(standartTitlesSelector.selectAll);
    const isModalShow = useSelector(state => state.editStandartTitle.isModalShow)

    useEffect(() => {
        dispatch(loadStandartTitles());
    }, [dispatch]);

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={() => dispatch(addStandartTitle())}>
                Добавить стандарт качества
            </button>
            {isModalShow && <StandartTitleModal/>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Стандарт качества</th>
                        <th>Описание</th>
                        <th>Изменить</th>
                    </tr>
                </thead>
                <tbody>
                    {standartTitles.map((standart) => (
                        <Standart key={standart.id} standart={standart} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
