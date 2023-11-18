
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
let section = document.querySelector("#section");
tab.addEventListener("click", toggleTab);