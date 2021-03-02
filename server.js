const express = require('express')
const sql = require('sqlite3')
const app = new express()
const users = loadData().users
const posts = []
const db = new sql.Database('./db/social.db')

app.use(express.static('public'))
app.use(express.json())

app.post("/posts", (req,res)=> {
    const post = req.body;
    if (post.text.length >= 5) {
        const sql = 'INSERT INTO posts(content,user_id) VALUES(?,?)'
        db.run(sql,[post.text,post.user_id])
        posts.push(post)
        res.send({
            message: "Post successfully saved"
        })
    }
    else {
        res.status(401)
        res.send({
            message: "Post is not long enough."
        })
    }
})
app.get("/posts", (req,res) => {
    const sql = "SELECT * FROM posts;"
    db.all(sql,[],(err, rows) => {
        res.send(rows)
    })
})

app.get("/users", (req,res) => {
    const sql = "SELECT * FROM users;"
    db.all(sql,[],(err, rows) => {
        res.send(rows)
    })
})

app.post("/login", (req, res) => {
    const user = req.body
    console.log(user)
    let userMatch = users.find( (u) => u.username == user.username && u.password == user.password )
    if (userMatch) {
        res.send({
            message: "Successful login!",
            userMatch
        })
    }
    else {
        if (user.username.length >= 4 && user.password.length >= 4) {
            const sql = 'INSERT INTO users(username,password,first_name,last_name) VALUES(?,?,?,?)'
            db.run(sql,[user.username,user.password,user.firstname,user.lastname])
            res.send({
                message: "Your account was successfully created."})
        }
        else {
            res.status(401)
            res.send({
                message: "Username or password is invalid."
            })
        }
    }
})

app.listen(8080, () => console.log("Server started"))