import { useEffect } from "react";
import { Standart } from "../components/standart-name-components/StandartItem";
import { useDispatch, useSelector } from "react-redux";
import {
    loadStandartTitles,
    standartTitlesSelector,
} from "../features/standart-titles/standart-titles-slice";

export const StandartTitles = () => {
    const dispatch = useDispatch();
    const standartTitles = useSelector(standartTitlesSelector.selectAll);

    useEffect(() => {
        dispatch(loadStandartTitles());
    }, [dispatch]);

    return (
        <div>
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
