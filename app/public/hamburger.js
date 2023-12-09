function toggleNav()
{
    let navbar = document.querySelector('.navBar');
    let classes = navbar.classList;
    
    if (classes.contains('showNav'))
    {
        classes.remove('showNav');
        classes.add('hideNav');
    }
    else
    {
        classes.add('showNav');
        classes.remove('hideNav');
    }
    console.log('hamburger click');
}

let hbmenu = document.querySelector('#hamburger');
hbmenu.addEventListener('click', toggleNav);