//create global variable
let sessions
let cartCount = 0
let inCart = []

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
`<div ${session.Spots > 0 ? '' : 'class="empty"'}>
<h3>${session.Title}</h3>
<h3>Presenter${session['Presenter(s)'].split(' and ').length > 1 ? 's' : ''}: ${session['Presenter(s)']}</h3>
<p>${session['Description']}</p>
<button 
    ${session.Spots <= 0 ? 'disabled' : ''}
    onclick="addToCart('${session['Title']}')">Sign Up</button>
</div>`
                                  ).join('')
document.querySelector('article')
    .append(container)
}

function addToCart(sessionName) {
    if (!inCart.includes(sessionName)) {
        inCart.push(sessionName)
        let item = document.createElement('li')
        item.innerHTML = sessionName

        document.querySelector('ul#cart')
            .append(item)

        cartCount++
        let cartCountElem = document.querySelector('span#cartCount')
        cartCountElem.textContent = cartCount
        if (cartCount >= 3) {
            cartCountElem.style.backgroundColor = "green"
        }
        else if (cartCount > 0) {
            cartCountElem.style.backgroundColor = "aqua"
        }
    }
    else {
        alert("You have already added this session to your cart.")
    }
}








