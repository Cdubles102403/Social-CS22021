const express = require('express');
const SQL = require('sqlite3')
const app = express();
const server = require("http").createServer(app);
const PORT = 8080;

app.use(express.static('reusables'))
app.use(express.static("public"))

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

app.post('createPost',(req,res)=>{

})

app.post('signup',(req,res)=>{

})

app.post('login',(req,res)=>{

})

server.listen(PORT)