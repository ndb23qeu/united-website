
function onResponse(response){
    firstName:firstNameI.value=''
    lastName:lastNameI.value=''
    email:emailAddressI.value=''
    comment:commentI.value=''
    console.log(response)

}

//defining functions to create elements

function createLabel(text, madeFor){
    const label=document.createElement('label')
    label.innerText = text
    label.for = madeFor
    return label
}

function createInput(name,type){
    const input=document.createElement('input')
    input.name=name
    input.type=type
    input.required=true
    //input.placeholder = "test" -- can be added back not sure about asthetics
    return input
}

function processSubmit(e){
    e.preventDefault();
    const message = {
        firstName:firstNameI.value,
        lastName:lastNameI.value,
        email:emailAddressI.value,
        comment:commentI.value
    }
    const serializedMessage = JSON.stringify(message)
    const fetchOptions = {
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body:serializedMessage
    }
    fetch('http://localhost:3000/signupHandler', fetchOptions)
    .then(onResponse)
    
}

//creating the elements
const firstNameL = createLabel("First Name", "firstName")
const lastNameL = createLabel("Last Name", "lastName")
const emailAddressL = createLabel("Email Address", "emailAddress")
const commentL = createLabel("Comment", "comment")

const firstNameI = createInput("firstName","text")
const lastNameI =  createInput("lastName","text")
const emailAddressI = createInput("emailAddress","email")
const commentI =  createInput("comment","text")

const submit = document.createElement('button')
submit.innerText = "Submit"


//appending content to page
const form = document.querySelector("form")

form.appendChild(firstNameL);
form.appendChild(document.createElement('br'))
form.appendChild(firstNameI);
form.appendChild(document.createElement('br'))
form.appendChild(lastNameL);
form.appendChild(document.createElement('br'))
form.appendChild(lastNameI);
form.appendChild(document.createElement('br'))
form.appendChild(emailAddressL);
form.appendChild(document.createElement('br'))
form.appendChild(emailAddressI);
form.appendChild(document.createElement('br'))
form.appendChild(commentL);
form.appendChild(document.createElement('br'))
form.appendChild(commentI);
form.appendChild(document.createElement('br'))
form.appendChild(document.createElement('br'))
form.appendChild(submit);

form.addEventListener("submit",processSubmit, false)