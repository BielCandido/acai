export default async function Page() {

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

        {/* 
        <div>
            Tipo de açaí
            <select>
                <option selected>Selecione</option> 
                <option>Tradicional</option>
                <option>Zero</option>
                <option>Banana</option>
                <option>Morango</option>
            </select>
        </div>
        <div>
            Complementos
            <select>
                <option selected>Selecione</option> 
                <option>Leite em pó - R$2,00</option>
                <option>Paçoca - R$2,00</option>
                <option>Leite condensado - R$2,00</option>
                <option>Granola- R$2,00</option>
                <option>Morango -  R$3,00</option>
                <option>Banana - R$3,00</option>
                <option>Kiwi - R$3,00</option>
                <option>Gotas de chocolate - R$3,50</option>
                <option>Ovomaltine- R$3,00</option>
                <option>Nutella- R$4,00</option>
                
                
            </select>
        </div>
            <div>
            <input type="button" value="Fazer pedido"/>
            </div> */}

      </div>
  
    )
  }
  