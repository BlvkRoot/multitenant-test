require('reflect-metadata');
const express = require('express');
const { dbConnection } = require('./database');
const routes = require('./routes');

dbConnection();
const app = express()
const port = 3000

app.use(routes);
app.listen(port, () => console.log(`API running on port ${port}!`))