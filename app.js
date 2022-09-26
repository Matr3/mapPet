const { connect } = require('http2');
var mysql = require('mysql');

// Set database connection credentials
var config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db',
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conexion exitosa");
    }
});
conexion.end();