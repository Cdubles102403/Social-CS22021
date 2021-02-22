const express = require('express')
const sql = require('sqlite3')
const app = new express()
const users = loadData().users
//3. New posts save on server
//3.1 create variable posts as empty array
const posts = []

const db = new sql.Database('./db/social.db')

//serve client side files
app.use(express.static('public'))
app.use(express.json())

//3.2 define request handler for POST on /posts
app.post("/posts", (req,res)=> {
    const post = req.body;
    //3.2.1. verify the post is at least 5 characters long
    if (post.text.length >= 5) {
        const sql = 'INSERT INTO posts(content,user_id) VALUES(?,?)'
        db.run(sql,[post.text,post.user_id])
        //3.2.2. add to posts array if valid
        posts.push(post)
        //3.2.3. send response 'New post successfully saved.'
        res.send({
            message: "Post successfully saved"
        })
    }
    //3.2.4. if invalid send error response
    else {
        res.status(401)
        res.send({
            message: "Post is not long enough."
        })
    }
})

app.post("/login", (req, res) => {
    const user = req.body
    let userMatch = users.find( (u) => u.username == user.username && u.password == user.password )
    //Does userMatch exist?
    if (userMatch) {
        res.send({
            message: "Successful login!",
            userMatch
        })
    }
    else {
        if (user.username.length >= 4 && user.password.length >= 4) {
            const sql = 'INSERT INTO users(username,password) VALUES(?,?)'
            db.run(sql,[user.username,user.password])
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

app.listen(3000, () => console.log("Server started"))

function loadData() {
    return {
        users:
        [
            {
                id: 1,
                username: "jword",
                password: "hello2021"
            },
            {
                id: 2,
                username: "tommyinnit",
                password: "blockgame"
            },
            {
                id: 3,
                username: "joel15",
                password: "kirby"
            }
        ]
    }
}