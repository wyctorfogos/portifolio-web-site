const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log(`Server is running and listening on port http://0.0.0.0:${port}!`))