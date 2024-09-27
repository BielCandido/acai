'use client'
import {useEffect, useState } from 'react'

export default function Page(){
    async function fetchRelatorioPedidos() {
        let res = await fetch('http://localhost:3001/relatoriopedidos')
        let data = await res.json()
        setRelatorioPedidos(data.data)
      }

    async function recusarClick (idpedido){
        await fetch(`http://localhost:3001/pedido/${idpedido}`, {
            method: "DELETE"
        }).catch((err) => alert(err))

        fetchRelatorioPedidos() 
    }

    function aprovarClick (elem){
        elem.preventDefault()
        alert("aprovado")
        window.location.href = '/'; // Redireciona para outra página
    }

    const [relatorio, setRelatorioPedidos] = useState([])

    useEffect(() => {
        fetchRelatorioPedidos()
      }, [])

    return(
        <div>
            <table class="tabela">
                <tbody>
                <tr class="linha-cabecalho">
                    <th class="celula">ID do pedido</th>
                    <th class="celula">Data do pedido</th>
                    <th class="celula">Tipo</th>
                    <th class="celula">Tamanho</th>
                    <th class="celula">Valor total</th>
                    <th class="celula">Ações</th>
                </tr>
                {relatorio.map(item=>{
                    return(
                    <tr class="linha" key={item.id_pedido}>
                    <td class="celula">{item.id_pedido}</td>
                    <td class="celula">{item.data_pedido}</td>
                    <td class="celula">{item.tipo}</td>
                    <td class="celula">{item.tamanho}</td>
                    <td class="celula">{item.valor_total}</td>
                    <td class="celula-botao">
                        <input className='botao botao-aprovar' type="button" value="Aprovar" onClick={aprovarClick}/>
                        <input className='botao botao-reprovar'type="button" value="Recusar" onClick={() => recusarClick(item.id_pedido)} />
                    </td>
                </tr>)
                })}
                </tbody>
            </table>
        </div>
    )
}
