import mysql from 'mysql'
//incluir a dependencia MSQL

const mysql = require('mysql2');

//criar conexão com banco de dados MSQL
export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senha123',
    database: 'db_acaiteria'
})

db.connect(function (err) {
    console.log("Conexão com o banco de dados realizado com sucesso!")
})

db.query("SELECT id, tamanho_id, tipo_acai_id, pedidos_id, valor_total FROM produto", function (err, rows, fields){
    if(!err){
        console.log("Resultado: ", rows) 
    }else{
        console.log("Erro: consulta não realizada: ", err)
    }
})
