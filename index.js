const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.jpg",
        post: "post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "avatar-courbet.jpg",
        post: "post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "avatar-ducreux.jpg",
        post: "post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let content = document.getElementsByClassName("content")[0]

for (let post of posts) {
    content.innerHTML += renderCard(post)
}

function renderCard(post) {
    return ` <div class="insta-card">
        ${renderCardHeader(post)}
        ${renderCardBody(post)}
        ${renderCardFooter(post)}
    </div>
    `
}

function renderCardHeader(post) {
   return `<div class="insta-card-header"><section class='user-details' id='userdetails'>
       <img  class='user avatar' src='${post.avatar}'>
       <div class='nameloc'>
        <h3>${post.name}</h2>
        <h4>${post.location}</h3>
       </div>
   </section></div>`
}

function renderCardBody(post) {
    return `<div class="insta-card-body"><section class='post'>
                    <img src='${post.post}'>
                </section></div>`
}

function renderCardFooter(post) {
    return `<div class="insta-card-footer"><section class='commentsection' >   
                <div class='icons'>
                    <img class='heart' src='icon-heart.png'>
                    <img class='comment'  src='icon-comment.png'>
                    <img class='dm' src='icon-dm.png'>
                </div>
                <h3 id='likesCount' >${post.likes} likes</h3>
                <p><strong>${post.username}</strong> 
                    <span>${post.comment}
                    </p>
                </div>
            </section></div>`
}
