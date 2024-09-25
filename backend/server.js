import express from 'express'
import Router from "./routes/routes.js"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

app.use("/", Router)

app.listen(3001)













/*
const port = 3001

const logins = [1,2]

app.listen(port, () => {
  console.log(`Server runing in port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu trabalho de BD I')
})

app.post('/pedido', (req, res)=> {

    logins.push(req.body)

    res.json(req.body)

})

app.get('/login', (req, res) => {

  res.json(logins)
      
})

//app.listen(3001)

1) Tipo de rota/ método HTTP
2) Endereço
*/
