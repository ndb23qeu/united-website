function saveData(res){
    filedata = res
}

function drawContent(){
    header.textContent = filedata.title;
    par.textContent = filedata.description;
    div.textContent = filedata.defaultTextContent;
    for (let i =0; i<buttons.length; i++){
        buttons[i].textContent = filedata.members[i].name
    }



}

function loadContent(){
    fetch("team.json")
    .then(res => res.json())
    .then(saveData)
    .then(drawContent)
    
}

//adds attributes to the current button being used and changes content accordingly
function toggleTab(e)
{
    if (e.currentTarget != e.target)
    {
        const button = e.target.textContent;
        let activeTab = document.querySelector("#tabActive");
        if (activeTab != null) {document.querySelector("#tabActive").removeAttribute("id")};
        switch (button)
        {
            case "Tom":

                div.textContent = filedata.members[0].textContent;
                e.target.id = "tabActive";
                break;
            case "Felix":

                div.textContent = filedata.members[1].textContent;
                e.target.id = "tabActive";
                break;
            case "Harry":

                div.textContent = filedata.members[2].textContent;
                e.target.id = "tabActive";
                break;
            default:
                break;
        }
    }
}

let tab = document.querySelector("#tabs");
let div = document.querySelector(".tabText p");
let header = document.querySelector("header > h1");
let par = document.querySelector("section > p");
let buttons =document.querySelectorAll("button");
tab.addEventListener("click", toggleTab);
window.addEventListener("DOMContentLoaded", loadContent, false);
