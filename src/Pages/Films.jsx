import { useState, useEffect, useContext } from "react";
import { Film as film } from "../Entities/film";
import { Film } from "../components/FilmItem";
import { DataContext } from "../Context/Context";
import { FilmChangeContext } from "../Context/FilmContext";
import { AddFilm } from "../components/AddFilm";
import { ControledInput } from "../FormComponents/ControledInput";


export const Films = () => {
    const {films = [], addFilm, updateContextFilm} = useContext(DataContext)
    const {mark, thick, color, changeMark, changeThick, changeColor, clearFilmContext} = useContext(FilmChangeContext)

    const [load, setLoad] = useState(true);
    
    useEffect(() => {updateContextFilm(); setLoad(false)}, []);

    return(
        <div style={{marginLeft:"1rem"}}>
            <AddFilm></AddFilm>
            <button type="button" className="btn btn-primary mb-1" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Добавить пленку</button>
            <div className="row g-2 mb-1 collapse" id="collapseExample">
                <div className="col-md">
                    <ControledInput type="text" 
                        id="mark"
                        text="Марка"
                        value={mark} 
                        setValue={(text) => changeMark(text)}/>
                </div>
                <div className="col-md">
                    <ControledInput type="text" 
                        id="thick"
                        text="Толщина"
                        value={thick} 
                        setValue={(text) => changeThick(text)}/>
                </div>
                <div className="col-md">
                    <ControledInput type="text" 
                        id="color"
                        text="Цвет"
                        value={color} 
                        setValue={(text) => changeColor(text)}/>
                </div>
                <div className="col-md">
                    <button type="button" className="btn btn-outline-primary btn-lg" 
                        onClick={()=>addFilm(new film(mark, thick, color))}>Сохранить
                    </button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Марка Пленки</th>
                        <th>Толщина, мкм</th>
                        <th>Цвет</th>
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
