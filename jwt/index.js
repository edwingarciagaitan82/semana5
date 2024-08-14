const express = require('express')
const app = express()
const puerto = 3000
app.use(express.json())
app.use("/api/login",require('./routes/login'))

app.listen(puerto, ()=>{ console.log("Servidor Express JWT Activo, puerto:", puerto) })