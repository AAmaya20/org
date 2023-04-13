import "./Team.css"
import Contributor from "../Contributor/Contributor"
import hexToRgba from "hex-to-rgba"

const Team = (props) => {
    //Destructuracion
    const {team, highlight, bg, id} = props.data
    const { contributors, deleteContributor, updateColor, like } = props

    const teamStyle = {borderBottom: "4px " + "solid " + highlight,}

    
    return(
        <>{
            contributors.length > 0  &&
            <section className="team" style={{backgroundColor: hexToRgba(highlight,0.6), }}>
                <input 
                    type="color"
                    className="input-color"
                    value={highlight}
                    onChange={ (e) => {
                        updateColor(e.target.value, id)
                    }}
                />
                <h3 style={teamStyle}>{team}</h3>
                <div className="contributors">
                    {
                        contributors.map((contributor, index) => 
                            <Contributor 
                                data={contributor} 
                                key={index} 
                                highlight={highlight}
                                deleteContributor={deleteContributor}
                                like={like}
                            />
                        )
                    }

                </div>
            </section>
        }</>
    )
}

export default Team