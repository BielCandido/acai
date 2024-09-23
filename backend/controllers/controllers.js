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

async function executarComando (comando){

    let resultado = []

    var connection = mysql.createConnection({
    host     : '192.168.1.121',
    user     : 'myuser',
    password : 'senha123',
    database : 'db_acaiteria'
    });

    connection.connect();

    await connection.query(comando, function (error, results, fields) {
        if (error) throw error;
        resultado = results;
    });
    
    connection.end();
    return resultado
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