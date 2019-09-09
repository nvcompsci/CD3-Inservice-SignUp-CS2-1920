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
`<h3>${session.Title}</h3>
<p>${session['Description']}</p>`
                                  ).join('')
document.querySelector('article')
    .append(container)
}