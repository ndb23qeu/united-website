
function loadContent()
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
    par.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam orci dolor, consectetur lobortis imperdiet et, elementum vitae magna. Donec tempor diam vel tristique tincidunt. Duis interdum ligula est, in feugiat sapien varius sed. Sed vestibulum id erat quis mattis. Nam interdum est id mattis vestibulum. Aliquam accumsan aliquam ultricies. Cras nec dictum est. Nunc imperdiet urna ornare ornare ultricies.";
    section.textContent = "Text that appears on tab 1.";
}
function toggleTab(e)
{
    if (e.currentTarget != e.target)
    {
        const bP = e.target.textContent;
        switch (bP)
        {
            case "1":
                document.querySelector("#tabActive").removeAttribute("id");
                section.textContent = "Text that appears on tab 1.";
                e.target.id = "tabActive";
                break;
            case "2":
                document.querySelector("#tabActive").removeAttribute("id");
                section.textContent = "Text that appears on tab 2.";
                e.target.id = "tabActive";
                break;
            case "3":
                document.querySelector("#tabActive").removeAttribute("id");
                section.textContent = "Text that appears on tab 3.";
                e.target.id = "tabActive";
                break;
            case "4":
                document.querySelector("#tabActive").removeAttribute("id");
                section.textContent = "Text that appears on tab 4.";
                e.target.id = "tabActive";
                break;
            default:
                break;
        }
    }
}

let tab = document.querySelector("#tabs");
let section = document.querySelector("#tabText");
let header = document.querySelector("header > h1");
let par = document.querySelector("main > p");
tab.addEventListener("click", toggleTab);
window.addEventListener("DOMContentLoaded", loadContent, false);