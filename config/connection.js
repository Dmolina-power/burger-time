var mysql = require("mysql");
var connection; 

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "rx37llhe7crtb49s",
  password: "gtwfo4tov2c4t51h",
  database: "burgers_db"
});
  

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
