import React from 'react'
import {useState} from 'react'
function Input() {
    const [cep,setCep]= useState("")
    const inputCep = (e)=>{
        setCep(e.target.value)
    }
  return (
    <div>
    <form action="">
        <input type="text" onChange={inputCep} placeholder="Digite um Cep"/>
    </form>
    </div>
  )
}

export default Input