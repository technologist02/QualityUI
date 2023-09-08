import { useState, useEffect } from "react";
import { getFilms } from "../api";
import { createFilm } from "../api";
import { Film as film } from "../api";
import { Film } from "../components/FilmItem";


export const Films = () => {
    const [films, setFilms] = useState([]);
    const [load, setLoad] = useState(true);
    const [mark, setMark] = useState("");
    const [thick, setThick] = useState();
    const [color, setColor] = useState("");
    
    useEffect(() => {getFilms().then(data => {setFilms(data); setLoad(false)})}, []);

    async function addFilm(film){
        try{
            const response = await createFilm(film);
            if (response.ok){
                alert('Пленка успешно добавлена');
                const newFilms = films.concat(film);
                setFilms(newFilms);
            }
            else{
                alert("Что-то пошло не так")
            }
        }
        catch{
            alert("Oops!")
        }
    }

    return(
        <div>
            <button type="button" className="btn btn-outline-info mb-1" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Добавить пленку</button>
            <div className="row g-2 mb-1 collapse" id="collapseExample">
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" id="mark" className="form-control border border-primary" placeholder="Введите марку" value={mark} onChange={(event) => setMark(event.target.value)} />
                        <label htmlFor="mark">Марка</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="number" id="thick" className="form-control border border-primary" placeholder="Введите толщину" value={thick} onChange={(event) => setThick(event.target.value)}/>
                        <label htmlFor="thick">Толщина</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating">
                        <input type="text" id="color" className="form-control border border-primary" placeholder="Введите цвет" value={color} onChange={(event) => setColor(event.target.value)}/>
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