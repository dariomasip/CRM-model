const { Sequelize } = require("sequelize");

const conectionDatabase = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
  }
);

const testConeccion = async () => {
  try {
    await conectionDatabase.authenticate();
    await conectionDatabase.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConeccion();

module.exports = conectionDatabase;
