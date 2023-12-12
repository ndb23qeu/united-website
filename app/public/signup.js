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
    
    
}

function loadContent(){
    fetch("signup.json")
    .then(res => res.json())
    .then(saveData)
    .then(drawContent)
    
}



function onResponse(res){
    return res.text()
    
    
}
function onTextReady(text){
    for(let i=0;i< textEntries.length ;i++){
        textEntries[i].value=''
    }
    if (text.value = "complete"){
        confirmation.textContent="Thank you an email has been sent to your address"
    }else{
        confirmation.text="An error has occured please try again later"
    }
    // console.log(confirmation.text)
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
    .then(onTextReady)
    
}
labels=document.querySelectorAll("#signUp label")
header = document.querySelector("header > h1")
content=document.querySelector("main > p")
form=document.getElementById("signUp")
textEntries=document.querySelectorAll('#signUp input, textarea')
submitButton=document.querySelector('#signUp button')
confirmation=document.querySelector('#post-res')
cleartext()
form.addEventListener("submit",processSubmit, false)
window.addEventListener("DOMContentLoaded", loadContent, false)
