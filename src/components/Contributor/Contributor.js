import "./Contributor.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Contributor = (props) => {

    const { name, position, photo, team, id, fav } = props.data
    const { highlight, deleteContributor, like } = props

    return(
        <div className="contributor">
            <AiFillCloseCircle className="delete" onClick={ () => deleteContributor(id)} />
            <div className="head" style={{backgroundColor : highlight}}>
                <img src={photo} alt={name}/>
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h5>{position}</h5>
                { fav ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
            </div>
        </div>
    )
}

export default Contributor