function onNavResponse(response) {
    console.log(response);
    response.text().then(onNavProcessed);
}
function onNavProcessed(text) {
    console.log(text);
    destination.innerHTML=text;
}
function onError(error) {
    console.log(error);
}
function onFooterResponse(response) {
    console.log(response);
    response.text().then(onFooterProcessed);
}
function onFooterProcessed(text) {
    console.log(text);
    destination.innerHTML=text;
}
nav = document.querySelector("nav");
fetch('navbar.html')
.then(onNavResponse, onError);
destination = document.querySelector("footer");
fetch('footer.html')
.then(onFooterResponse, onError)
