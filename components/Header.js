// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const entryPoint = document.querySelector('.header-container')
    let header = document.createElement('div')
    let span = document.createElement('span')
    let h1 = document.createElement('h1')
    let spanTemp = document.createElement('span')
    header.setAttribute('class', 'header')
    span.setAttribute('class', 'date')
    span.textContent = 'MARCH 28, 2020'
    h1.textContent = 'Lambda Times'
    spanTemp.setAttribute('class', 'temp')
    spanTemp.textContent = '98 F'
    header.appendChild(span)
    header.appendChild(h1)
    header.appendChild(spanTemp)
    entryPoint.append(header)
    return
}
Header()
