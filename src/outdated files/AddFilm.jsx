import { ControledInput } from "../components/FormComponents/ControledInput"
import { FilmChangeContext } from "../../Context/add-or-update-film-context"
import { useContext } from "react"
import { DataContext } from "../../Context/Context"
import { Film as film } from "../Entities/film"

export const AddFilm = () =>{

    const {mark, thick, color, density, 
        changeMark, changeThick, changeColor, changeDensity, clearFilmContext} = useContext(FilmChangeContext)
    const {addFilm} = useContext(DataContext)
    return(
        <>
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
                    <ControledInput type="number" 
                        id="density"
                        text="Плотность, г/см3"
                        value={density} 
                        setValue={(density) => changeDensity(density)}/>
                </div>
                <div className="col-md">
                    <button type="button" className="btn btn-outline-primary btn-lg" 
                        onClick={()=>{addFilm(new film(mark, thick, color, density))}}>Сохранить
                    </button>
                </div>
            </div>
        </>
    )
}