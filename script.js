//create global variable
let sessions

function loadPage() {
fetch("sessions.json")
    .then(response => response.json())
    .then(json => {console.log(json)
                  sessions = json
                  createCards()})
    .catch(err => console.error(err))
//createCards()
}
function createCards() {
let container = document.createElement('div')
container.innerHTML = sessions.map(session =>
`<div>
<h3>${session.Title}</h3>
<h3>Presenter${session['Presenter(s)'].split(' and ').length > 1 ? 's' : ''}: ${session['Presenter(s)']}</h3>
<p>${session['Description']}</p>
<button onclick="addToCart('${session['Title']}')">Sign Up</button>
</div>`
                                  ).join('')
document.querySelector('article')
    .append(container)
}

function addToCart(sessionName) {
    let item = document.createElement('li')
    item.innerHTML = sessionName
    
    document.querySelector('ul#cart')
        .append(item)
}








