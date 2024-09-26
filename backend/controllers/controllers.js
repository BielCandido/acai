import mysql from "mysql2/promise"
export const getTamanhos = async (_, res) => {

    var x =  await executeSQL("SELECT * FROM tamanho")

    return res.send(200, { 
        data: x.map((item) => {
            return {
                id: item.id, nome: item.tipo, valor: item.valor
            }
        }) 
     });
}

export const getTipos = async (_, res) => {

    var y = await executeSQL("SELECT * FROM tipo_acai")

    return res.send(200, { 
        data: y.map((item1) => {
            return {
                id: item1.id, nome: item1.tipo, valor: item1.valor
            }
        }) 
        
     });
}

export const getComplementos = async (_, res) => {
    var z = await executeSQL("SELECT * FROM complemento")

    return res.send(200, { 
        data: z.map((item2) => {
            return {
                id: item2.id, nome: item2.nome, valor: item2.valor
            }
        }) 
     });
}
export const postPedido = async (req, res) => {
    var tipo = await executeSQL("SELECT valor FROM tipo_acai WHERE id=?", [req.body.tipo])
    var tamanho = await executeSQL("SELECT valor FROM tamanho WHERE id=?", [req.body.tamanho])

    var valorTotal = parseFloat(tipo[0].valor)+parseFloat(tamanho[0].valor)

    var resultado = await executeSQL("INSERT INTO pedido (data_pedido) VALUES (now());")
    var pedidoId = resultado.insertId;
    var resultado2 = await executeSQL("INSERT INTO produto (tamanho_id, tipo_acai_id, pedidos_id, valor_total) VALUES (? , ? , ?, ?);", [req.body.tamanho, req.body.tipo, pedidoId, valorTotal])

 

// INSERT INTO pedido (data_pedido) VALUES (now());
// INSERT INTO produto (tamanho_id, tipo_acai_id, pedidos_id, valor_total) VALUES (1 , 1 , last_insert_id(), 20);
   return res.send(200, {
    data: {
        id: resultado2.insertId
    }
   })
}

async function executeSQL(query, params = []) {

    const connection = await mysql.createConnection({
      host: '192.168.1.121', // Your database host
      user: 'myuser',      // Your database user
      password: 'senha123', // Your database password
      database: 'db_acaiteria' // Your database name
    });
  
    try {
      // Execute the query with the provided parameters
      const [rows, fields] = await connection.execute(query, params);
      return rows;
    } catch (err) {
      console.error('SQL Error:', err);
      throw err;
    } finally {
      // Close the connection
      await connection.end();
    }
  }