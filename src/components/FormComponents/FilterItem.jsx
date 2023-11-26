export const FilterItem = ({label="", checkboxValue="", inputValue="", setInputValue = () => {}, setCheckboxValue = () => {}}) => {
    
    return (
        <div className="filter-item">
            <input className="custom-checkbox form-check-input border border-warning" 
                type="checkbox" 
                checked={checkboxValue} 
                onChange={(event) => setCheckboxValue(event.target.checked)}
            />
            <div className="mb-3">
                <label className="form-label" htmlFor={`${label}`}>{label}</label>
                <input className="form-control border border-warning"
                    type="text"
                    id={`${label}`}
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)} style={{maxWidth:"130px"}}
                />
            </div>
        </div>
    )
}