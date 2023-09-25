export const Standart = ({standart}) => {
    const {id, name, description} = standart;

    return(
        <>
        <tr id={id}>
            <td>{name}</td>
            <td>{description}</td>
            <td>
                <button type="button" className="btn btn-outline-warning" >Изменить</button>
            </td>
        </tr>
        </>
    )
}