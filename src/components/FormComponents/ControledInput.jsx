export function ControledInput({type, id, text, value, setValue}){
    // const {type, id, text, value, setValue} = props

    return(
        <div className="form-floating" style={{margin:"0.25rem"}}>
            <input type={type} className="form-control" id={id} placeholder={id}
                 value={value} onChange={(event) => setValue(event.target.value)}/>
            <label htmlFor={id}>{text}</label>
        </div>
    )
}