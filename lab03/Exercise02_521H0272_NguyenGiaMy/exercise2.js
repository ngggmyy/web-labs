function addStudent() {
    let firstNameField = document.getElementById('firstname')
    let lastNameField = document.getElementById('lastname')
    let emailField = document.getElementById('email')

    let firstName = firstNameField.value
    let lastName = lastNameField.value
    let email = emailField.value

    // console.log(firstName)
    // console.log(lastName)
    // console.log(email)

    // todo: validate the input 

    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    td1.innerHTML = firstName
    td2.innerHTML = lastName
    td3.innerHTML = email
    td4.innerHTML = '<button onclick="removeStudent(this)" class="btn btn-danger btn-sm">Delete</button>'

    let tbody = document.getElementsByTagName('tbody')[0];
    // console.log(tbody[0]) // undefined
    tbody.appendChild(tr)
    // console.log(tbody[0]) // undefined

    // clear all input values after filling
    firstNameField.value = '';
    lastNameField.value = '';
    emailField.value = '';
}

function removeStudent(element) {
    element.parentElement.parentElement.remove();
}