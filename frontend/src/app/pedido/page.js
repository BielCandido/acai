'use client'

import { useState, useEffect } from 'react'
import '../styles/globals.css'

 
export default function Page() {    
  const [tamanhos, setTamanhos] = useState([])
  const [tipos, setTipos] = useState([])
  const [complementos, setComplementos] = useState([])
 
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

  useEffect(() => {
    async function fetchComplementos() {
      let res = await fetch('http://localhost:3001/complementos')
      let data = await res.json()
      setComplementos(data.data)
    }
    fetchComplementos()
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
        }
 
  return (
            <div>
          <form onSubmit={onSubmit}>
          <h2> FAÇA O SEU PEDIDO</h2>
          <div>
                      Tamanhos
                         <select name="tamanho">
                             {tamanhos.map((tamanho) => (
                                 <option value={tamanho.id} key={tamanho.id}>{tamanho.nome}</option>
                            ))}
                        </select>
                    </div>
                     <div>
                         Tipos
                         <select name="tipo">
                             {tipos.map((tipo) => (
                                 <option value={tipo.id} key={tipo.id}>{tipo.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                         Complementos
                         <select name="complemento">
                             {complementos.map((complemento) => (
                                 <option value={complemento.id} key={complemento.id}>{complemento.nome} - {complemento.valor}</option>
                            ))}
                        </select>
                    </div>

            <button type="submit">Submit</button>
          </form>
          </div>
        )
}

// 'use client'

// export default async function Page() {

//     let tamanhosJson = {data:[]}
//      fetch('http:localhost:3001/tamanhos').then(res => {
//         tamanhosJson = res.body.json()
//     })
//         console.log(tamanhosJson)
    

//     async function onSubmit(event) {
//       event.preventDefault()
   
//       const formData = new FormData(event.target)
//       const response = await fetch('/api/submit', {
//         method: 'POST',
//         body: formData,
//       })
   
//       // Handle response if necessary
//       const data = await response.json()
//       // ...
//     }
   
//     return (
//         <div>
//       <form onSubmit={onSubmit}>
//       <h2> FAÇA O SEU PEDIDO</h2>
//                  <div>
//                      Tamanhos
//                      <select>
//                          {tamanhosJson.data.map((tamanho) => (
//                              <option value={tamanho.id} key={tamanho.id}>{tamanho.nome}</option>
//                         ))}
//                     </select>
//                 </div>
//         <button type="submit">Submit</button>
//       </form>
//       </div>
//     )
//   }

// export default async function Page() {
//     async function onSubmit(event) {
//         debugger
//         event.preventDefault()
        
//         const formData = new FormData(event.target)
//         const response = await fetch('http:localhost:3001/pedido',{
//             method: 'POST',
//             body: formData,
//         })

//         //resposta do backend
//         const data = await response.json()
//     }

//     let tamanhos = await fetch('http:localhost:3001/tamanhos')
//     let tamanhosJson = await tamanhos.json()
//     console.log(tamanhosJson)

//     let tipos = await fetch('http:localhost:3001/tipos')
//     let tiposJson = await tipos.json()
//     console.log(tiposJson)

//     let complementos = await fetch('http:localhost:3001/complementos')
//     let complementosJson = await complementos.json()
//     console.log(complementosJson)




//     return (
//         <div>
//             <form onSubmit={onSubmit}>
                
//                 <h2> FAÇA O SEU PEDIDO</h2>
//                 <div>
//                     Tamanhos
//                     <select>
//                         {tamanhosJson.data.map((tamanho) => (
//                             <option value={tamanho.id} key={tamanho.id}>{tamanho.nome}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     Tipo de acai <select>
//                         {tiposJson.data.map((tipo) => (
//                             <option value={tipo.id} key={tipo.id}>{tipo.nome}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     Complementos <select>
//                         {complementosJson.data.map((complemento) => (
//                             <option value={complemento.id} key={complemento.id}>{complemento.nome}</option>
//                         ))}
//                     </select>

//                 </div>
//                 <button type="submit"> Enviar Pedido</button>
//             </form>
//       </div>
  
//     )
//   }
  