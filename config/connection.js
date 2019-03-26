//set up mySQL connection

var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {    
var connection = mysql.createConnection({
    host: "localhost",
    port : 3306,
    user:"root",
    password: "root",
    database:"burgers_db"

    });
};
//Make connection
connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " +connection.threadId);
});

//export connection for our ORM to use
module.exports = connection;
