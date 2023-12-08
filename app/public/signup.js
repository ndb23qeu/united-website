function saveData(res){
    filedata = res
}

function drawContent(){
    header.textContent = filedata.title;
    content.textContent = filedata.mainText;
    submitButton.textContent = filedata.button
    for (let i = 0; i<filedata.labels.length; i++){
        labels[i].textContent=filedata.labels[i].text;
        labels[i].htmlFor = filedata.labels[i].owner;
    }
    
    
// highlights the navbar with the current tab
let activeNavTab = document.querySelector("#linkSignup");
activeNavTab.classList.add("active");
}

function loadContent(){
    fetch("signup.json")
    .then(res => res.json())
    .then(saveData)
    .then(drawContent)
    
}



function onResponse(response){
    for(let i=0;i< textEntries.length ;i++){
        textEntries[i].value=''
    }
    console.log(response)
}

function cleartext(){
    for(let i=0;i< textEntries.length ;i++){
        textEntries[i].value=''
    }
}
function processSubmit(e){
    e.preventDefault();
    const message = {
        firstName:textEntries[0].value,
        lastName:textEntries[1].value,
        email:textEntries[2].value,
        comment:textEntries[3].value
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
labels=document.querySelectorAll("#signUp label")
header = document.querySelector("header > h1")
content=document.querySelector("main > p")
form=document.getElementById("signUp")
textEntries=document.querySelectorAll('#signUp input, textarea')
submitButton=document.querySelector('#signUp button')
cleartext()
form.addEventListener("submit",processSubmit, false)
window.addEventListener("DOMContentLoaded", loadContent, false)
