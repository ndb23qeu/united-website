function loadContent()
{
    tab.innerHTML = `
    <li>
        <button>Tom</button>
    </li>
    <li>
        <button>Felix</button>
    </li>
    <li>
        <button>Harry</button>
    </li>
    `;
    header.textContent = "Our Team";
    par.textContent = "This is general info about our team.";
    div.textContent = "Choose a tab to find out more about us";
}
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

                div.textContent = "Info about Tom A";
                e.target.id = "tabActive";
                break;
            case "Felix":

                div.textContent = "Info about Felix A";
                e.target.id = "tabActive";
                break;
            case "Harry":

                div.textContent = "Info about Harry AR";
                e.target.id = "tabActive";
                break;
            default:
                break;
        }
    }
}

let tab = document.querySelector("#tabs");
let div = document.querySelector("#tabText p");
let header = document.querySelector("header > h1");
let par = document.querySelector("section > p");
tab.addEventListener("click", toggleTab);
window.addEventListener("DOMContentLoaded", loadContent, false);