const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())

app.get('/', async (req, res)=>{
    try {
        //response é a resposta do axios, tirando data de dentro
        const {data} =  await axios('https://jsonplaceholder.typicode.com/users')
        return res.json(data)  
    }catch (error) {
        console.error(error)
    } 
})

app.listen(3000, () => console.log('Conectado...'))