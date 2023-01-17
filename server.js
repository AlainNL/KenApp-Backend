const express = require('express');
const defibrillateurRoutes = require("./src/defibrillateur/routes");


const app = express()
const port = 3000


app.use(express.json())

app.get('/', (req, res) => res.send("start"))

app.use('/api/defibrillateurs', defibrillateurRoutes)


app.listen(port, () => console.log(`L'application est démarrée sur: http://localhost:${port}`))
