function saveData(res){
    filedata = res
}

function drawContent(){
    header.textContent = filedata.title;
    content.textContent = filedata.mainText;
    tabContent.textContent = filedata.buttons.default;
    image.setAttribute("alt", filedata.altText.default)
    for (let i =0; i<buttons.length; i++){
        buttons[i].textContent = (Object.keys(filedata.buttons))[i]
    }
}

function loadContent(){
    fetch("climate.json")
    .then(res => res.json())
    .then(saveData)
    .then(drawContent)
    
}

function toggleTab(e)
{
    if (e.currentTarget != e.target)
    {
        const bP = e.target.textContent;
        if (Object.keys(filedata.buttons).includes(bP)){
            if ((document.querySelector('#tabActive')) != null)
            {document.querySelector("#tabActive").removeAttribute("id");}
            tabContent.textContent = filedata.buttons[bP];
            e.target.id = "tabActive";
            image.setAttribute("src", "images/climate" + bP + ".png")
            image.setAttribute("alt", filedata.altText[bP])
        }
    }
}

let tab = document.querySelector("#tabs");
let buttons = document.querySelectorAll("#tabs button")
let tabContent = document.querySelector("#tabText");
let header = document.querySelector("header > h1");
let content = document.querySelector("main > p");
let image = document.querySelector('#mainImg');
tab.addEventListener("click", toggleTab);
window.addEventListener("DOMContentLoaded", loadContent, false);

