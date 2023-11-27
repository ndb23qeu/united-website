class HomeButton1
{
    constructor(link, image, imageAlt, title, desc)
    {
        this.link = link;
        this.image = image;
        this.imageAlt = imageAlt;
        this.title = title;
        this.desc = desc;
    }
}
class HomeButton2
{
    constructor(link, title)
    {
        this.link = link;
        this.title = title;
    }
}
const Button13 = new HomeButton1("","images/logo.jpg","Placeholder Logo","Climate Action","Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
const Button14 = new HomeButton1("","images/logo.jpg","Placeholder Logo","Life Below Water","Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
const Button15 = new HomeButton1("","images/logo.jpg","Placeholder Logo","Life On Land","Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
const ButtonSignup = new HomeButton2("","Contact Us");
const ButtonTeam = new HomeButton2("","About Us");

const buttons1 = [];
const buttons2 = [];

buttons1.push(Button13);
buttons1.push(Button14);
buttons1.push(Button15);

buttons2.push(ButtonSignup);
buttons2.push(ButtonTeam);

function loadContent()
{
    let displayButtons1 = buttons1.map(function(item)
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
    let displayButtons2 = buttons2.map(function(item)
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
    header.textContent = "Home Page";
    par.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam orci dolor, consectetur lobortis imperdiet et, elementum vitae magna. Donec tempor diam vel tristique tincidunt. Duis interdum ligula est, in feugiat sapien varius sed. Sed vestibulum id erat quis mattis. Nam interdum est id mattis vestibulum. Aliquam accumsan aliquam ultricies. Cras nec dictum est. Nunc imperdiet urna ornare ornare ultricies.";
};
const mainB = document.querySelector("#mainB");
const header = document.querySelector("header > h1");
const par = document.querySelector("main > p");
window.addEventListener("DOMContentLoaded", loadContent, false);