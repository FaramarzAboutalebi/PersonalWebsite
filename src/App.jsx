import { useState } from 'react'
import Sidenav from './component/Sidenav'
import Main from './component/Main'
import Work from './component/Work'
import Projects from './component/Projects'

function App() {
  

  return (
      <div>

        <Sidenav />
        <Main />
        <Work />
        <Projects />
       

      </div>
  
  )
}

export default App
