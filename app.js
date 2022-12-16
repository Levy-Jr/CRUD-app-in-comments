const sectionComments = document.querySelector('[data-section-comments]')
const comments = document.querySelector('[data-comments]')

const getData = async () => {
  const res = await fetch('data.json')
  const data = await res.json()

  return data
}

const makeComments = (item) => {
  return `
  <article class="comment">
        <div class="header-comment flex">
          <div class="profile-image"><img src="${item.user.image.png}" alt=""></div>
          <span class="name">${item.user.username}</span>
          <span class="createdAt">${item.createdAt}</span>
        </div>

        <div class="text-content">
          <p>${item.content}</p>
        </div>

        <div class="s-b">
          <div class="likes">
            <div class="icon-vote"><img src="images/icon-plus.svg"></div> <span class="likeNumbers">${item.score}</span><div class="icon-vote"><img src="images/icon-minus.svg"></div>
          </div>
          <div class="reply">
            <div><img src="images/icon-reply.svg" alt=""></div><span>Reply</span>
          </div>
        </div>
      </article>
  `
}

const addComments = () => {
  let text = ""
  getData().then(data => {
    data.comments.forEach(comment => {
      text += makeComments(comment)
      comments.innerHTML = text
    })
  })
}

addComments()

const repliedComments = (item) => {
  return `
  
  `
}

const addReplyComments = () => {

}