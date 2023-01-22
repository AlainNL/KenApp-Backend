const express = require('express');
const cors = require('cors');
const defibrillateurRoutes = require("./src/defibrillateur/routes");


const app = express()
const port = 3000


app.use(express.json());

app.use(cors());

app.use('/api/defibrillateurs', defibrillateurRoutes)


app.listen(port, () => console.log(`L'application est démarrée sur: http://localhost:${port}`))
