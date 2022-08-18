import React from 'react'
import { useState } from 'react'

const Requisicao = () => {
    const [informacoes, setInformacoes] = useState()
    const [cep, setCep] = useState()
    const inputCep = (e)=>{
        setCep(e.target.value)
    }
    async function handleCep(){
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        const json = await response.json()
        setInformacoes(json)
    }

  return (
    <div>
        <input type="text" onChange={inputCep} />
        <button onClick={handleCep}>buscar</button>
        <h1>{informacoes ? informacoes.cep : "carregando"}</h1>
        <img src={informacoes ? informacoes.logradouro : ""} alt="" />
    </div>
  )
}
export default Requisicao