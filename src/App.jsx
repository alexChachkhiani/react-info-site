import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState(false)

  function changeMode() {
    setMode(prevMode => !prevMode)
    console.log(mode)
  }
  
  return (
    <>
      <Navbar
        darkMode={mode} 
        toggleDarkMode={changeMode}
      />
      <Main 
        darkMode={mode}
      />
    </>
  )
}

export default App