import { useEffect, useState, useContext } from "react"
import { DataContext } from "../Context/Context"
import { Standart } from "../components/standart-name-components/StandartItem"

export const StandartNames = () => {
    
    const {standartNames, updateContextStandartNames, addStandartName} = useContext(DataContext)
    const [name, setName] = useState("")
    const [description, SetDescription] = useState("")

    useEffect(() => {updateContextStandartNames();}, [])
    
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
                    {
                        standartNames.map(standart => <Standart key={standart.id} standart={standart}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}