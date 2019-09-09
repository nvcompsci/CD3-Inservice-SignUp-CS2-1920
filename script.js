//create global variable
let sessions
fetch("sessions.json")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err))

