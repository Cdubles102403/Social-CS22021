const express = require('express');
const SQL = require('sqlite3')
const app = express();
const server = require("http").createServer(app);
const PORT = 8080;

function openDatabase() {
    //opens a new database connection
    let dataBase = new SQL.Database("database.db", function(err) {
        if (err) return err;
        console.log("connected to Database");
    });
    return dataBase;
}

app.post('getPosts',(req,res)=>{

})

app.post('getUsers',(req,res)=>{

})

app.use(express.static("public"))
server.listen(PORT)