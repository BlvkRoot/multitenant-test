require('reflect-metadata');
const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log(`API running on port ${port}!`))