function onResponse(response) {
    console.log(response);
    response.text().then(onProcessed);
}
function onError(error) {
    console.log(error);
}
function onProcessed(text) {
    console.log(text);
    nav.innerHTML=text;
}
let nav = document.querySelector("nav");
fetch('navbar.txt')
.then(onResponse, onError);