const $postContainer = document.getElementById("posts")

const $usersContainer = document.getElementById("users")
document.getElementById("login")
    .onsubmit = login
document.getElementById("createPost")
    .onsubmit = createPost
spawnPosts()
spawnUsers()

function createPost(e) {
    e.preventDefault()
    const payload = {
        body: JSON.stringify({
            text: document.getElementById("newPost").value
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch("/posts", payload)
        .then(res => res.json())
        .then(res => console.log(res.body))
        .catch(error => console.error(error))
}

function login(e) {
    e.preventDefault()
    const payload = {
        body: JSON.stringify({
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
            
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch("/login", payload)
        .then(res => res.json())
        .then(res => console.log(res.body))
        .catch(error => console.error(error))
}

spawnUsers()


function spawnPosts() {
    fetch("/posts")
    .then(res =>res.json())
    .then(posts=>{
        console.log(posts)
        const postsHTML = posts.map( post => `
        <div class="post">
            <p>${post.content}</p>
            <div class="details">
                <div>${post.id}</div>
            </div>
        </div>
    ` ).join("")
    $postContainer.innerHTML = postsHTML
    })
    .catch(err=>console.error(err))
    
}

function spawnUsers() {
    fetch("/users")
    .then(res =>res.json())
    .then(users =>{
        console.log(users)
        const usersHTML = users.map( user => `
        <div class="user">
            <div class="details">
                <div>${user.username}</div>
                <div>${user.first_name}</div>
                <div>${user.last_name}</div>
            </div>
            <button>Add Friend</button>
        </div>
    ` ).join("")
    $usersContainer.innerHTML = usersHTML
    })
}