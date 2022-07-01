import React from 'react'
import './App.css'
import { ProjectListScreen } from './screens/project-list'
import { LoginScreen } from './screens/project-list/login'
function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen/> */}
      <LoginScreen />
    </div>
  )
}

export default App
