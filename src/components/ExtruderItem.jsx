

export const Extruder = ({extruder}) => {
    const {id, extruderName} = extruder;

    return(
        <>
        <tr id={id}>
            <td>{extruderName}</td>
            <td>
                <button type="button" className="btn btn-outline-warning" >Изменить</button>
            </td>
        </tr>
        </>
    )
}