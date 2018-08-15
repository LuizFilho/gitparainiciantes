const express = require('express')
const app = express()

app.get('/', (req,res) => res.status(200).send({message:'Esse é meu novo repositorio Clonado! '}))

app.listen(4001, err => console.log('Api , inicializada na rota 4001'))