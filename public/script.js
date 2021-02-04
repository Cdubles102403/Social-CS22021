const $postContainer = document.getElementById("posts")
//1.1 js reference to the section element with id users
const $userContainer = document.getElementById("users")
spawnPosts()

//1.4 call function to spawn user elements
spawnUsers()






function spawnPosts() {
    const postsHTML = loadData().posts.map( post => `
        <div class="post">
            <p>${post.text}</p>
            <div class="details">
                <div>${post.numLikes}</div>
                <div>${post.user}</div>
                <div>${post.datetime}</div>
            </div>
        </div>
    ` ).join("")
    $postContainer.innerHTML = postsHTML
}

//1.2 define a function to spawn user elements
//1.3 each user element should be a div that shows user info
//... and has a button that says Add Friend (doesn't work)
function spawnUsers(){
    console.log("spawning new user")
    const userHTML = loadData().users.map(user =>`
    <div class="user">
            <button>add user</button>
            <div class="details">
                <div>username: ${user.username}</div>
                <div>first name:${user.firstName}</div>
                <div>last name:${user.lastName}</div>
                <div>age:${user.age}</div>
                <div>Gender:${user.gender}</div>
            </div>
        </div>

    `).join('')
    $userContainer.innerHTML = userHTML
}


function loadData() {
    return {
        posts: [
            {
                text: "I got a new dog last night! It's so cute!",
                user: "kimmy23",
                datetime: new Date(),
                numLikes: 3,
                comments: []
            },
            {
                text: "I got a new dog last night! It's so cute!",
                user: "kimmy23",
                datetime: new Date(),
                numLikes: 3,
                comments: []
            },
            {
                text: "I got a new dog last night! It's so cute!",
                user: "kimmy23",
                datetime: new Date(),
                numLikes: 3,
                comments: []
            },
            {
                text: "I got a new dog last night! It's so cute!",
                user: "kimmy23",
                datetime: new Date(),
                numLikes: 3,
                comments: []
            }
        ],
        users: [
            {
                username: "kimmy23",
                firstName: "Kimberly",
                lastName: "Bash",
                gender: "F",
                age: 45
            },
            {
                username: "wordup",
                firstName: "John",
                lastName: "Word",
                gender: "M",
                age: 31
            },
            {
                username: "dogguy23",
                firstName: "Rob",
                lastName: "Obeneur",
                gender: "M",
                age: 62
            },
            {
                username: "silentninja84",
                firstName: "Lesa",
                lastName: "Kirkland",
                gender: "F",
                age: 17
            }
        ]
    }
}
