const growingUp = document.querySelector('#growingUp');
const growingDown = document.querySelector('#growingDown');
const alphabet = document.querySelector('#alphabet');
const userList = document.querySelector('#userList');

let users = [];

async function fetchUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await response.json();
    renderUsers(users);
    console.log(users);
}
fetchUsers()

function renderUsers(users){
    userList.textContent = ''
    users.forEach(user => {
        
        const listItem = document.createElement('div')
        listItem.className = 'divUser'
        userList.appendChild(listItem);

        const idItem = document.createElement('h3')
        idItem.innerHTML = `id - ${user.id}`
        listItem.appendChild(idItem);

        const nameItem = document.createElement('h3')
        nameItem.innerHTML = `name : ${user.name}`
        listItem.appendChild(nameItem);

        const phoneItem = document.createElement('h3')
        phoneItem.innerHTML = `phone : ${user.phone}`
        listItem.appendChild(phoneItem);

        const emailItem = document.createElement('h3')
        emailItem.innerHTML = `email : ${user.email}`
        listItem.appendChild(emailItem);

    })
}

growingUp.addEventListener('click', growingUpFunc);
function growingUpFunc(){
    const sortedUsers = [...users].sort((a,b)=> a.id - b.id)
    renderUsers(sortedUsers)

}
growingDown.addEventListener('click', growingDownFunc);
function growingDownFunc(){
    const sortedUsers = [...users].sort((a,b)=> b.id - a.id)
    renderUsers(sortedUsers)

}