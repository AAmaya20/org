import './App.css'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import MiOrg from './components/MiOrg/MiOrg'
import Team from './components/Team/Team'
import Footer from './components/Footer'

function App() {

  const [show, updateShowComponent] = useState(true)
  const [contributors, updateContributors] = useState([
    {
      id: uuid(),
      name: "Abraham Amaya",
      position: "Senior",
      photo: "https://github.com/AAmaya20.png",
      team: "Front-End",
      fav: true,
    },
  ])
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      team: "Programacion",
      highlight: "#57C278",
      bg: "#D9F7E9",
    },
    {
      id: uuid(),
      team: "Front-End",
      highlight: "#82CFFA", 
      bg: "#E8F8FF",
    },
    {
      id: uuid(),
      team: "Data Science",
      highlight: "#A6D157",
      bg: "#F0F8E2",
    },
    {
      id: uuid(),
      team: "Devops",
      highlight: "#E06B69",
      bg: "#FDE7E8",
    },
    {
      id: uuid(),
      team: "UX y Disenho",
      highlight: "#DB6EBF",
      bg: "#FAE9F5",
    },
    {
      id: uuid(),
      team: "Movil",
      highlight: "#FFBA05",
      bg: "#FFF5D9",
    },
    {
      id: uuid(),
      team: "Innovacion y Gestion",
      highlight: "#FF8A29",
      bg: "#FFEEDF",
    },
  ])

  const isVisible = () => {
    updateShowComponent(!show)
  }

  const signUpContributor = (contributor) => {
    //Spread operator
    updateContributors([...contributors, contributor])
    console.log(contributors)
  }

  const deleteContributor = (id) => {
    const updatedContributors = contributors.filter( (contributor) => contributor.id !== id)
    updateContributors(updatedContributors)
  }

  const updateColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const updatedTeams = teams.map( (tms) => {
      if(tms.id === id){
        tms.highlight = color
      }
      return tms
    })

    setTeams(updatedTeams)
  }

  const createTeam = (newTeam) => {
    console.log(newTeam)
    setTeams([...teams, {...newTeam, id: uuid(),}])
  }

  const like = (id) => {
    const newContributors = contributors.map( (contributor) => {
      if(contributor.id === id){
        contributor.fav = !contributor.fav
      }
      return contributor
    })
    updateContributors(newContributors)
  }


  return (
    <div className="App">
      <Header />
      {/* {show ? <Form /> : <></>} */}
      {
        show && 
        <Form teams = 
          {teams.map((team) => team.team)} 
          signUpContributor={signUpContributor}  
          createTeam={createTeam}
        />
      }
        <MiOrg isVisible={isVisible}/>
      {
        teams.map( (team) => {
          return(
            <Team 
              data={team}
              key={team.team}
              contributors={contributors.filter(contributor => contributor.team === team.team)}
              deleteContributor={deleteContributor}
              updateColor={updateColor}
              like={like}
            />
          )
        })
      }
      <Footer />
    </div>
  )
}

export default App
