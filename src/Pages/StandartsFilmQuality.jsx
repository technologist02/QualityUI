import { DataContext } from "../Context/Context"
import { useState, useEffect, useContext } from "react"
import { StandartFilmItem } from "../components/standart-film-components/StandartFilmItem"

export const StandartQualityFilms = () => {
    const {standartFilms, updateContextFilm, updateContextStandartNames, updateContextStandartFilms} = useContext(DataContext)
    const [load, setLoad] = useState(true)

    useEffect(() => {updateContextFilm(); updateContextStandartNames(); updateContextStandartFilms(); setLoad(false)}, [])


    return(
        <div>
            <table className="table table-bordered">
            <thead>
            <tr>
            <th scope="col">Марка пленки</th>
            <th scope="col">Толщина пленки</th>
            <th scope="col">Цвет</th>
            <th scope="col">Отклонение по толщине, %</th>
            <th scope="col">σ MD, MPa</th>
            <th scope="col">σ TD, MPa</th>
            <th scope="col">E MD, %</th>
            <th scope="col">E TD, %</th>
            <th scope="col">CoF s</th>
            <th scope="col">CoF d</th>
            <th scope="col">Свет, %</th>
            <th scope="col">Активация, дин</th>
            <th scope="col">Стандарт качества</th>
            <th>Изменить</th>
            </tr>
            </thead>
            <tbody>
            {
                (standartFilms.map(standart => <tr key={standart.id}><StandartFilmItem standart={standart} /></tr>))
                         //: <tr><td>Ничего</td></tr>
            }
            </tbody>
        </table>
        </div>
    )
}