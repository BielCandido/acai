'use client'

import { useState, useEffect } from 'react'

export default function Page() {    
  const [tamanhos, setTamanhos] = useState([])
  const [tipos, setTipos] = useState([])
 
  
  useEffect(() => {
    async function fetchTamanhos() {
      let res = await fetch('http://localhost:3001/tamanhos')
      let data = await res.json()
      setTamanhos(data.data)
    }
    fetchTamanhos()
  }, [])

  useEffect(() => {
    async function fetchTipos() {
      let res = await fetch('http://localhost:3001/tipos')
      let data = await res.json()
      setTipos(data.data)
    }
    fetchTipos()
  }, [])




  async function onSubmit(event) {
          event.preventDefault()
       
          const formData = new FormData(event.target)
          const response = await fetch('http://localhost:3001/pedido', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(Object.fromEntries(formData))
          })
       
          // Handle response if necessary
          const data = await response.json()
          // ...

          const confirmSubmit = window.confirm("Tem certeza que deseja enviar o pedido?");
          
          if (confirmSubmit) {
              // Se o usuário confirmar, o formulário será submetido
              alert("Pedido enviado com sucesso!");
              // Aqui você pode adicionar o código para tratar o envio dos dados
          } else {
              // Se o usuário cancelar, o envio é interrompido
              alert("Envio cancelado.");
          }
        }
 
  return (
    <div class="pedido-container">
    <form class="pedido-form" onSubmit={onSubmit}>
        <h2>FAÇA O SEU PEDIDO</h2>
        
        <div class="form-group">
            <label htmlFor="tamanho">Tamanhos</label>
            <select name="tamanho" id="tamanho" required>
                {tamanhos.map((tamanho) => (
                    <option value={tamanho.id} key={tamanho.id}>
                        {tamanho.nome} - R${tamanho.valor}
                    </option>
                ))}
            </select>
        </div>
        
        <div class="form-group">
            <label htmlFor="tipo">Tipos</label>
            <select name="tipo" id="tipo" required>
                {tipos.map((tipo) => (
                    <option value={tipo.id} key={tipo.id}>
                        {tipo.nome} - R${tipo.valor}
                    </option>
                ))}
            </select>
        </div>
        
        <button class="submit-button" type="submit">Enviar Pedido</button>
    </form>
</div>

        )
}