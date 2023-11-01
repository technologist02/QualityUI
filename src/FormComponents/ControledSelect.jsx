
function stub(){}

export function ControledSelect({id, text, value, setValue, options, selectEffect = stub}){
    return (
        <div className="form-floating" style={{margin:"0.25rem"}}>
                <select className="form-select" id={id}
                    value={value} onChange={(event) => {setValue(event.target.value); selectEffect()}}>
                        <option selected>--Выбрать {text.toLowerCase()}--</option>
                        {options.length && options.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
                <label htmlFor={id}>{text}</label>
            </div>
    )
}