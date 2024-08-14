const express = require('express')
const app = express()
const puerto = 3000
app.use(express.json())
app.use("/api/tecnologies",require('./routes/tecnologias'))

app.listen(puerto, ()=>{ console.log("Servidor Express Archivos Activo, puerto:", puerto) })