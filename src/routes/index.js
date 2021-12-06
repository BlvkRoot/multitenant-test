const { Router } = require('express');
const { db_props, dbConnection } = require('../database');

const routes = Router();

routes.get('/dbconnection', async (req, res) => {

    db_props.name = "test";    
    db_props.database = "testdb";    

    dbConnection(db_props);

    res.json({
        "db_options": db_props
    });
});


module.exports = routes;