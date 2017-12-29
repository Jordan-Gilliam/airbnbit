// Create connection to mySQL using sequelize
var Sequelize = require("sequelize");
var mysql = ("mysql");
var sequelize;
// Create the database
if (process.env.JAWSDB_URL) {
    sequelize = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        sequelize = new Sequelize("listings_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
}
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
// console.log(sequelize.config.database);
// Creates mySQL connection using either mysql for jawsDB or Sequelize
module.exports = sequelize;