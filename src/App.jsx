import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Players from './components/Players/Players'

function App() {

  return (
    <div>
      <Header></Header>
      <Players></Players>
    </div>
  )
}

export default App
