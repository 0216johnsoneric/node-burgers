// Set up MySQL connection.
// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "b3z0s31@",
//   database: "burgers_db"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });


// Export connection for our ORM to use.
// module.exports = connection;

// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "kf3k4aywsrp0d2is.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "eyd92pykgdwo06ae",
    password: "n1ajlcg3k4sxkdj7",
    database: "cwwg0ofw7jc0w422"
  });
};



// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;