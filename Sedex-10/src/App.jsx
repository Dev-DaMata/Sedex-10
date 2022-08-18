import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Input from './components/Input/Input'
import Requisicao from './components/Requisicao/Requisicao'
function App() {
  return (
    <div className="App">
      <Header/>
      <Input/>
      <Requisicao/>
    </div>
  )
}

export default App