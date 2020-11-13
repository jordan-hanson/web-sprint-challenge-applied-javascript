// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const URL = 'https://lambda-times-api.herokuapp.com/topics'
console.log(URL)
const e = axios.get(URL)
    .then(res => {
        // console.log(res)
        let tabs = res.data.topics
        // console.log(tabs)
        tabs.forEach(tab => {
            const allTabs = tabMaker(tab)
            console.log(allTabs)
        })
    }).catch(err => {
        console.log(err)
    })

function tabMaker(e) {
    // console.log(e)
    let entryPoint = document.querySelector('.topics')
    let tab = document.createElement('div')
    tab.setAttribute('class', 'tab')
    tab.textContent = e
    // console.log(tab.textContent)
    // console.log(tab)
    entryPoint.appendChild(tab)

    return entryPoint
}
tabMaker(e)