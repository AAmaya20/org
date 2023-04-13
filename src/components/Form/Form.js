import "./Form.css"
import { useState } from "react"
import Input from "../Input/Input"
import Dropdown from "../Dropdown/Dropdown"
import Button from "../Button/Button"

const Form = (props) => {


    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")

    const [title, setTitle] = useState("")
    const [color, setColor] = useState("")

    const { signUpContributor, createTeam } = props

    
    const sendData = (event) => {
        event.preventDefault()
        let gotData = {
            name,
            position,
            photo,
            team,
        }
        signUpContributor(gotData)
    }

    const sendTeamData = (e) => {
        e.preventDefault()
        createTeam({team: title, highlight: color})
    }

    return(
        <section className="formulario">
            <form onSubmit={sendData}>
                <h2>Rellena el formulario para crear al colaborador</h2>
                <Input title="Nombre" placeholder="Ingresar nombre" required value={name} setValue={setName}/>
                <Input title="Puesto" placeholder="Ingresar puesto" required value={position} setValue={setPosition} />
                <Input title="Foto" placeholder="Ingresar enlace de foto" required value={photo} setValue={setPhoto} />
                <Dropdown value={team} setValue={setTeam} teams={props.teams}/>
                <Button text="Crear" />
            </form>
            <form onSubmit={sendTeamData}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <Input title="Titulo" placeholder="Ingresar titulo" required value={title} setValue={setTitle} />
                <Input title="Color" placeholder="Ingresar el color en HEX" required value={color} setValue={setColor} type="color" />
                <Button text="Registrar equipo" />
            </form>
        </section>
    )
}

export default Form