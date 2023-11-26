import { useState } from "react";

export const Filter = (props) => {
    const [isVisible, setVisible] = useState(false);
    const {children} = props;

    const toggleVisible = () => {
        setVisible(!isVisible);
    }

    return (
        <div>
            <button type="button"
                className="btn btn-secondary" onClick={toggleVisible}>Фильтр
            </button>
            {isVisible && <div>{children}</div>}
        </div>
    )
}