import './Checkbox.css'

type checkboxProps = {
    className?: string;
    checked: boolean;
}

function Checkbox({className, checked}: checkboxProps){
    return (
        <input 
            type="checkbox" 
            className={`default-checkbox ${className? className : ''}`}
            checked={checked}
        />
    )
}

export default Checkbox;