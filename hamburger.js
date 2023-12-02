function toggleNav()
{
    let links = document.querySelector('.navBar');
    let classes = links.classList;
    classes.toggle('showNav');
    classes.toggle('hideNav')
    console.log('hamburger click')
}

let hbmenu = document.querySelector('#hamburger');
hbmenu.addEventListener('click', toggleNav);