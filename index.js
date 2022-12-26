const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const postsEl = document.getElementById("posts-el")

function showPost(posts) {
    let postInfo = ""
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i]
        postInfo += `
        <div class="container post-container">
            <div class="user-info">
                <img class="user" src="${post.avatar}" alt="">
                <p class="username-p bold-text font-13">${post.name}<span class="location regular-text">${post.location}</span></p>
            </div>
            <img class="post-img" src="${post.post}" alt="">

            <div class="post-footer">
                <div class="post-icons">
                    <img id="like-btn" src="images/icon-heart.png" alt="">
                    <img src="images/icon-comment.png" alt="">
                    <img src="images/icon-dm.png" alt="">
                </div>
                <p class="likes bold-text font-13"><span id="like-number" class="likes bold-text font-13">${post.likes}</span> likes</p>
                <p class="comment regular-text font-13"><span class="bold-text">${post.username}</span> ${post.comment}</p>
            </div>
        </div>`
    }
    postsEl.innerHTML = postInfo
}

showPost(posts)

const postContainers = Array.from(postsEl.getElementsByClassName("post-container"))

postContainers.forEach(function(element) {
    const likeBtn = element.querySelector("#like-btn")
    const likeNumber = element.querySelector("#like-number")
    likeBtn.addEventListener("click", function() {
        likeNumber.textContent = Number(likeNumber.textContent) + 1
    })
})

