import { useState, useEffect, useContext } from "react";
import { Film } from "../components/film-components/FilmItem";
import { DataContext } from "../Context/Context";
import { UpdateFilm } from "../components/film-components/UpdateFilm";
import { AddFilm } from "../components/film-components/AddFilm";


export const Films = () => {
    const {films = [], updateContextFilm} = useContext(DataContext)
    const [load, setLoad] = useState(true);
    
    useEffect(() => {updateContextFilm(); setLoad(false)}, []);

    return(
        <div style={{marginLeft:"1rem"}}>
            <UpdateFilm/>
            <AddFilm/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Марка Пленки</th>
                        <th>Толщина, мкм</th>
                        <th>Цвет</th>
                        <th>Плотность, г/см3</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        films.map(film => <Film key={film.id} film={film}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}
