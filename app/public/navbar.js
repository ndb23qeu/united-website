function onNavResponse(response) {
    // console.log(response);
    response.text().then(onNavProcessed).then(findActive);
}
function findActive(){
    navByPage = {
        "United" : "#linkHome",
        "United : Climate Action":"#link13",
        "United : Life Below Water":"#link14",
        "United : Life on Land":"#link15",
        "United : Signup":"#linkSignup",
        "United : Our Team":"#linkTeam",
    }
    page  = document.querySelector("title")
    activeNav = document.querySelector((navByPage[page.text]))
    activeNav.classList = "nav active"
    
}
function onNavProcessed(text) {
    //console.log(text);
    nav.innerHTML=text;
}
function onError(error) {
    console.log(error);
}
function onFooterResponse(response) {
    // console.log(response);
    response.text().then(onFooterProcessed);
}
function onFooterProcessed(text) {
    //console.log(text);
    footer.innerHTML=text;
}
nav = document.querySelector("nav");
fetch('navbar.html')
.then(onNavResponse, onError);
footer = document.querySelector("footer");
fetch('footer.html')
.then(onFooterResponse, onError)
