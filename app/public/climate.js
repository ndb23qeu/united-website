function saveData(res){
    filedata = res
}

function drawContent(){
    header.textContent = filedata.title;
    content.textContent = filedata.mainText;
    tabContent.textContent = filedata.buttons.one;
    for (let i =0; i<buttons.length; i++){
        buttons[i].textContent = (Object.keys(filedata.buttons))[i]
    }
    // highlights the navbar with the current tab
let activeNavTab = document.querySelector("#link13");
activeNavTab.classList.add("active");
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
            document.querySelector("#tabActive").removeAttribute("id");
            tabContent.textContent = filedata.buttons[bP];
            e.target.id = "tabActive";
        }
    }
}

let tab = document.querySelector("#tabs");
let buttons = document.querySelectorAll("#tabs button")
let tabContent = document.querySelector("#tabText");
let header = document.querySelector("header > h1");
let content = document.querySelector("main > p");
tab.addEventListener("click", toggleTab);
window.addEventListener("DOMContentLoaded", loadContent, false);

