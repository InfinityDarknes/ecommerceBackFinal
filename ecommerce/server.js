const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/productos', require('./routes/productosRoutes'))

//conexion al puerto 5000
app.listen(port, ()=>{
    console.log(`servidor iniciado en el puerto ${port}`)
})