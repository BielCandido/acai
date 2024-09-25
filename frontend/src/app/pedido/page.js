'use client'

export default async function Page() {
    async function onSubmit(event) {
        event.preventDefault()
        
        const formData = new FormData(event.target)
        const response = await fetch('http:localhost:3001/pedido',{
            method: 'POST',
            body: formData,
        })

        //resposta do backend
        const data = await response.json()
    }

    let tamanhos = await fetch('http:localhost:3001/tamanhos')
    let tamanhosJson = await tamanhos.json()
    console.log(tamanhosJson)

    let tipos = await fetch('http:localhost:3001/tipos')
    let tiposJson = await tipos.json()
    console.log(tiposJson)

    let complementos = await fetch('http:localhost:3001/complementos')
    let complementosJson = await complementos.json()
    console.log(complementosJson)




    return (
        <div>
            <form onSubmit={onSubmit}>
                
                <h2> FAÇA O SEU PEDIDO</h2>
                <div>
                    Tamanhos
                    <select>
                        {tamanhosJson.data.map((tamanho) => (
                            <option value={tamanho.id} key={tamanho.id}>{tamanho.nome}</option>
                        ))}
                    </select>
                </div>

                <div>
                    Tipo de acai <select>
                        {tiposJson.data.map((tipo) => (
                            <option value={tipo.id} key={tipo.id}>{tipo.nome}</option>
                        ))}
                    </select>
                </div>

                <div>
                    Complementos <select>
                        {complementosJson.data.map((complemento) => (
                            <option value={complemento.id} key={complemento.id}>{complemento.nome}</option>
                        ))}
                    </select>

                </div>
                <button type="submit"> Enviar Pedido</button>
            </form>
      </div>
  
    )
  }
  