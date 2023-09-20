export function Input(props) {
    const {placeholder, text} = props

    return (
        <div className="form-floating">
            <input type="text" className="form-control" id={placeholder} placeholder={placeholder}/>
                 {/* value={value} onChange={(event) => Setvalue(event.target.value)}/> */}
            <label htmlFor={placeholder}>{text}</label>
        </div>
    )
}