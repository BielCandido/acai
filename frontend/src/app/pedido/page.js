export default function Page() {
    return (
      <div>
        <div>
            Tamanho
            <select>
                <option selected>Selecione</option> 
                <option>300ml</option>
                <option>500ml</option>
                <option>700ml</option>
                <option>1000ml</option>
            </select>
        </div>
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
            <input class="styled" type="button" value="Fazer pedido"/>
            </div>

      </div>
  
    )
  }
  