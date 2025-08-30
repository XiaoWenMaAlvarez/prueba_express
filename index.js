const express = require('express')
const app = express()
app.use(express.json()) 

app.get('/', (request, response) => {
  response.status(200).json({ message: 'Hola' })
})

app.listen(3000, () => {
  console.log('Servidor levantado')
})
