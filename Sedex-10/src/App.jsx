import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Input from './components/Input/Input'

function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
    </div>
  )
}

export default App