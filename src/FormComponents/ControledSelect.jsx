
function stub(){}

export function ControledSelect({id, text, value, setValue, options, selectEffect = stub}){
    // function stub(){}
    // const {id, text, value, setValue, options, changes=stub} = props
    
    return (
        <div className="form-floating" style={{marginBottom:"0.5rem"}}>
                <select className="form-select" id={id}
                    value={value} onChange={(event) => {setValue(event.target.value); selectEffect()}}>
                        <option disabled selected>--Выбрать {text.toLowerCase()}--</option>
                        {options.length && options.map(item => <option value={item}>{item}</option>)}
                </select>
                <label htmlFor={id}>{text}</label>
            </div>
    )
}