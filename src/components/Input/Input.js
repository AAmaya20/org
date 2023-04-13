import "./Input.css"

const Input = (props) => {

    const { type = "text" } = props

    const manageValue = (e) => {
        props.setValue(e.target.value)
    }

    return(
        <div className={`input campo-${type}`} >
            <label>{props.title}</label>
            <input 
                placeholder={props.placeholder} 
                required={props.required} 
                value={props.value}
                onChange={manageValue}
                type={type}
            />
        </div>
    )
}

export default Input