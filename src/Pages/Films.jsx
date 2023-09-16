import { useState, useEffect, useContext } from "react";
import { Film as film } from "../api";
import { Film } from "../components/FilmItem";
import { DataContext } from "../components/Context";
import { FilmChangeContext } from "../Context/FilmContext";
import { Modal } from "../components/modal";


export const Films = () => {
    const {films = [], addFilm, updateContextFilm} = useContext(DataContext)
    const {mark, thick, color, changeMark, changeThick, changeColor, clearFilmContext} = useContext(FilmChangeContext)

    const [load, setLoad] = useState(true);
    // const [mark, setMark] = useState("");
    // const [thick, setThick] = useState();
    // const [color, setColor] = useState("");
    
    useEffect(() => {updateContextFilm(); setLoad(false)}, []);

    return(
        <div>
            <Modal></Modal>
            <button type="button" className="btn btn-outline-info mb-1" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Добавить пленку</button>
            <div className="row g-2 mb-1 collapse" id="collapseExample">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" id="mark" className="form-control border border-primary" placeholder="Введите марку" value={mark} onChange={(event) => changeMark(event.target.value)} />
                        <label htmlFor="mark">Марка</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" id="thick" className="form-control border border-primary" placeholder="Введите толщину" value={thick} onChange={(event) => changeThick(event.target.value)}/>
                        <label htmlFor="thick">Толщина</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" id="color" className="form-control border border-primary" placeholder="Введите цвет" value={color} onChange={(event) => changeColor(event.target.value)}/>
                        <label htmlFor="color">Цвет</label>
                    </div>
                </div>
                <div className="col-md">
                    <button type="button" className="btn btn-outline-primary btn-lg" onClick={()=>addFilm(new film(mark, thick, color))}>Сохранить</button>
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
