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
    fetch("land.json")
    .then(res => res.json())
    .then(saveData)
    .then(drawContent)
}

/*function loadContent()
{
    tab.innerHTML = `
    <li>
        <button id="tabActive">1</button>
    </li>
    <li>
        <button>2</button>
    </li>
    <li>
        <button>3</button>
    </li>
    <li>
        <button>4</button>
    </li>`;
    header.textContent = "Placeholder Title";
    content.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam orci dolor, consectetur lobortis imperdiet et, elementum vitae magna. Donec tempor diam vel tristique tincidunt. Duis interdum ligula est, in feugiat sapien varius sed. Sed vestibulum id erat quis mattis. Nam interdum est id mattis vestibulum. Aliquam accumsan aliquam ultricies. Cras nec dictum est. Nunc imperdiet urna ornare ornare ultricies.";
    tabContent.textContent = "Text that appears on tab 1.";
}*/
function toggleTab(e)
{
    if (e.currentTarget != e.target)
    {
        const bP = e.target.textContent;
        if (Object.keys(filedata.buttons).includes(bP)){
            document.querySelector("#tabActive").removeAttribute("id");
            tabContent.textContent = filedata.buttons[bP];
            e.target.id = "tabActive";
            image.setAttribute("src", "images/land" + bP + ".png")
            image.setAttribute("alt", filedata.altText[bP])
        }
        /*switch (bP)
        {
            case "1":
                document.querySelector("#tabActive").removeAttribute("id");
                tabContent.textContent = "Text that appears on tab 1.";
                e.target.id = "tabActive";
                break;
            case "2":
                document.querySelector("#tabActive").removeAttribute("id");
                tabContent.textContent = "Text that appears on tab 2.";
                e.target.id = "tabActive";
                break;
            case "3":
                document.querySelector("#tabActive").removeAttribute("id");
                tabContent.textContent = "Text that appears on tab 3.";
                e.target.id = "tabActive";
                break;
            case "4":
                document.querySelector("#tabActive").removeAttribute("id");
                tabContent.textContent = "Text that appears on tab 4.";
                e.target.id = "tabActive";
                break;
            default:
                break;
        }*/
    }
}

let tab = document.querySelector("#tabs");
let buttons = document.querySelectorAll("#tabs button")
let tabContent = document.querySelector("#tabText");
let header = document.querySelector("header > h1");
let content = document.querySelector("#pageSummary");
let image = document.querySelector('#mainImg');
tab.addEventListener("click", toggleTab);
window.addEventListener("DOMContentLoaded", loadContent, false);

