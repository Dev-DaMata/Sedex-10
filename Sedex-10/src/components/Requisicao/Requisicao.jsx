import React from 'react'
import { useState } from 'react'
const Requisicao = () => {
    const [informacoes, setInformacoes] = useState()

    async function handleRequisicao(cep){
        const response = await fetch(`https://viacep.com.br/ws/${cep}`)
        const json = await response.json()
        setInformacoes(json)
    }
  return (
    <div>
        
            
    </div>
  )
}

export default Requisicao