export const InlineCheckBox = ({value, setValue}) => {
    

    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" checked={value} onChange={(event) => setValue(event.target.checked)}/>
            <label className="form-check-label"></label>
        </div>
    )
}