function saveData(res){
    filedata=res
}

function getcontent(){
    fetch ("index.json")
    .then(res=> res.json())
    .then(saveData)
    .then(loadMainContent)
}


//rewrote function with different syntax
function loadMainContent()
{
    let mainButtons = filedata.mainContentPages.map(function(item)
    {
        return `
        <article class="homeButton">
            <a href=${item.link}>
                <img class="image" alt=${item.imageAlt} src=${item.image}>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </a>
        </article>`;
    });
    mainButtons=mainButtons.join("")
    let utilButtons = filedata.utilityPages.map(function(item)
    {
        return `
        <article class="homeButton">
            <a href=${item.link}>
                <h2>${item.title}</h2>
            </a>
        </article>`;
    });
    utilButtons = utilButtons.join("");
    mainB.innerHTML = mainButtons + utilButtons;
    header.textContent = filedata.title;
    par.textContent = filedata.mainText;

    // highlights the navbar with the current tab
let activeNavTab = document.querySelector("#linkHome");
activeNavTab.classList.add("active");
}
/*function loadContent()
{
    let displayButtons1 = filedata.mainContentPages.map(function(item)
    {
        return `
        <article class="homeButton">
            <a href=${item.link}>
                <img alt=${item.imageAlt} src=${item.image}>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </a>
        </article>`;
    });
    displayButtons1 = displayButtons1.join("");
    let displayButtons2 = filedata.utilityPages.map(function(item)
    {
        return `
        <article class="homeButton">
            <a href=${item.link}>
                <h2>${item.title}</h2>
            </a>
        </article>`;
    });
    displayButtons2 = displayButtons2.join("");
    mainB.innerHTML = displayButtons1 + displayButtons2;
    header.textContent = filedata.title;
    par.textContent = filedata.mainText;
};*/


const mainB = document.querySelector("#mainB");
const header = document.querySelector("header > h1");
const par = document.querySelector("main > p");
window.addEventListener("DOMContentLoaded", getcontent, false);

