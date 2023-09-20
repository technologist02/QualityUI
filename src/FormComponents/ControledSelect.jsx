export function ControledSelect(props){
    const {id, text, value, setValue, options} = props
    
    return (
        <div className="form-floating" style={{marginBottom:"0.5rem"}}>
                <select className="form-select" id={id}
                    value={value} onChange={(event) => setValue(event.target.value)}>
                        <option disabled selected>--Выбрать {text.toLowerCase()}--</option>
                        {options.length && options.map(item => <option value={item}>{item}</option>)}
                </select>
                <label htmlFor={id}>{text}</label>
            </div>
    )
}