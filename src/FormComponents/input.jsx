export function Input(props) {
    const {type, id, text} = props

    return (
        <div className="form-floating" style={{marginBottom:"0.5rem"}}>
            <input type={type} className="form-control" id={id} placeholder={id}/>
            <label htmlFor={id}>{text}</label>
        </div>
    )
}