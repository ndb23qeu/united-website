function loadContent()
{
    linkHome.innerHTML = `<a id="logoa" href="index.html"><img id="logoimg" alt="Placeholder Logo" src="images/logo.jpg"></a>`;
    link13.innerHTML = `<a href="page13.html">Climate Action</a>`;
    link14.innerHTML = `<a href="page14.html">Life Below Water</a>`;
    link15.innerHTML = `<a href="page15.html">Life On Land</a>`;
    linkSignup.innerHTML = `<a href="signup.html">Sign Up</a>`;
    linkTeam.innerHTML = `<a href="team.html">Our Team</a>`;
    footer.innerHTML = `<p>copyright<br>sources</p>`;
}
let linkHome = document.querySelector("#logoli");
let link13 = document.querySelector("#link13");
let link14 = document.querySelector("#link14");
let link15 = document.querySelector("#link15");
let linkSignup = document.querySelector("#linkSignup");
let linkTeam = document.querySelector("#linkTeam");
let footer = document.querySelector("footer");
window.addEventListener("DOMContentLoaded", loadContent, false);