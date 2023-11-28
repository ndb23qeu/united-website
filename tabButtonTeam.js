
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

                div.textContent = "HARDCODED Info about Tom A";
                e.target.id = "tabActive";
                break;
            case "Felix":

                div.textContent = "HARDCODED Info about Felix A";
                e.target.id = "tabActive";
                break;
            case "Harry":

                div.textContent = "HARDCODED Info about Harry AR";
                e.target.id = "tabActive";
                break;
            default:
                break;
        }
    }
}

let tab = document.querySelector("#tabs");
let div = document.querySelector("#tabText p");
tab.addEventListener("click", toggleTab);