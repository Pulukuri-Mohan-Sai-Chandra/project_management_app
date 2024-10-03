
import './App.css'
import Project from './Components/Project/Project'
import ProjectSideBar from './Components/ProjectSideBar/ProjectSideBar'

function App() {

  return (
    <>
    <div className='flex'>
    <ProjectSideBar/>
    <Project/>
    </div>
    </>
  )
}

export default App
