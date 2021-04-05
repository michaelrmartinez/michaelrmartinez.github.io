// VARIABLES ----------
// navmenu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.navbar__link');

// FUNCTIONS ----------
// Display mobile menu
const mobileMenu = function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
}

// Close menu
const closeMenu = function () {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
    body.classList.remove('active');
}


// EVENT LISTENERS ----------
menu.addEventListener('click', mobileMenu);

navLinks.forEach(navLink => {
    navLink.addEventListener('click', closeMenu);
});