import React from 'react'
import { useState } from 'react'
import S from './Requisicao.module.css'

const Requisicao = () => {
    const [informacoes, setInformacoes] = useState()
    const [cep, setCep] = useState()
    const inputCep = (e)=>{
        setCep(e.target.value)
    }
    async function handleCep(){
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const json = await response.json()
        setInformacoes(json)
        console.log(json);
    }

  return (
    <div className={S.cep}>
        <input type="text" value={cep} onChange={inputCep} />
        <button onClick={handleCep}>buscar cep</button>
        <h1>{informacoes ? informacoes.cep : "carregando"}</h1>
        <p>{informacoes ? informacoes.localidade : "carregando"}</p>
        <p>{informacoes ? informacoes.bairro : "carregando"}</p>
        <p>{informacoes ? informacoes.logradouro : "carregando"}</p>
    </div>
  )
}
export default Requisicao