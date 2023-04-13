import "./Dropdown.css"

const Dropdown = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => {
    //  return <option></option>
    //})

    const setChange = (e) => {
        props.setValue(e.target.value)
    }
    return(
        <div className="dropdown">
            <label>Equipos</label>
            <select value={props.value} onChange={setChange}>
                <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
                {props.teams.map( (team, index) => {
                    return(
                        <option key={index} value={team}>{team}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Dropdown