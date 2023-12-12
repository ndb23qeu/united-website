function saveData(res){
    filedata = res
}

function drawContent(){
    header.textContent = filedata.title;
    par.textContent = filedata.description;
    text.textContent = filedata.defaultTextContent;
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
        if (activeTab != null) {activeTab.removeAttribute("id");};
        switch (button)
        {
            case "Tom":
                section.classList.remove("felix");
                section.classList.remove("harry");
                section.classList.add("tom");
                text.textContent = filedata.members[0].textContent;
                pfp.setAttribute("src", "images/tom.jpg")
                pfp.setAttribute("alt","profile picture for tom")
                e.target.id = "tabActive";
                
                break;
            case "Felix":
                text.textContent = filedata.members[1].textContent;
                section.classList.add("felix");
                section.classList.remove("harry");
                section.classList.remove("tom");
                pfp.setAttribute("src", "images/felix.jpg")
                pfp.setAttribute("alt","profile picture for felix")
                e.target.id = "tabActive";
                break;
            case "Harry":
                section.classList.remove("felix");
                section.classList.add("harry");
                section.classList.remove("tom");
                text.textContent = filedata.members[2].textContent;
                pfp.setAttribute("src", "images/harry.png")
                pfp.setAttribute("alt","profile picture for harry")
                e.target.id = "tabActive";
                break;
            default:
                break;
        }
    }
}

let tab = document.querySelector("#tabs");
let section = document.querySelector("#tabText");
let text = document.querySelector("#tabText > p");
let header = document.querySelector("header > h1");
let par = document.querySelector("section > p");
let buttons =document.querySelectorAll("button");
let pfp = document.querySelector("#teamImage")
tab.addEventListener("click", toggleTab);
window.addEventListener("DOMContentLoaded", loadContent, false);
