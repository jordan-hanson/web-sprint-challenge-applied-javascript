// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const URL = 'https://lambda-times-api.herokuapp.com/articles'
const data = axios.get(URL)
    .then(res => {
        console.log(res.data.articles)
        const firstResponse = res.data.articles.bootstrap
        console.log(firstResponse)
        firstResponse.forEach(topic => {
            return newArticle({ authorName: topic.authorName, headline: topic.headline, authorPhoto: topic.authorPhoto })
        })
    }).catch(err => {
        console.log(err)
    })

function newArticle(d) {
    console.log(d)
    let entryPoint = document.querySelector('.cards-container')
    let card = document.createElement('div')
    let headline = document.createElement('div')
    let author = document.createElement('div')
    let imgDiv = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')
    card.setAttribute('class', 'card')
    headline.setAttribute('class', 'headline')
    headline.textContent = d.headline
    author.setAttribute('class', 'author')
    imgDiv.setAttribute('class', 'img-container')
    img.setAttribute('src', d.authorPhoto)
    span.textContent = `By ${d.authorName}`
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgDiv)
    imgDiv.appendChild(img)
    author.appendChild(span)
    entryPoint.appendChild(card)
}
newArticle(data)