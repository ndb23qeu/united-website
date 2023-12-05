function toggleNav()
{
    let navbar = document.querySelector('.navBar');
    let classes = navbar.classList;
    classes.toggle('showNav');
    classes.toggle('hideNav')
    console.log('hamburger click')
}

let hbmenu = document.querySelector('#hamburger');
hbmenu.addEventListener('click', toggleNav);