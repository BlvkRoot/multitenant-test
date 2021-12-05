const { createConnection } = require("typeorm");

const db_props = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456",
  database: "postgres",
  entities: ["src/entity/**/*.js"],
  migrations: ["src/migration/**/*.js"],
  subscribers: ["src/subscriber/**/*.js"],
  synchronize: true,
  logging: false,
};

const dbConnection = (connection_props = db_props) => {
  try {
    createConnection(connection_props)
        .then(connection => console.log('Connection: ', connection))
        .catch(error => console.log('DB ERROR: ', error))
  } catch (error) {
    console.log("Db connection error: ", error);
  }
};

module.exports = { dbConnection };
