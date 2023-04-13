import "./MiOrg.css"

const MiOrg = (props) => {

    return(
        <section className="orgSection">
            <h3 className="title    ">Mi organizacion</h3>
            <img src="/img/add.png" alt="add" onClick={props.isVisible}/>
        </section>
    )
}

export default MiOrg