//! === ADD HEADER STYLES ON SCROLL ===

//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const openMenuIcon = document.querySelector('#menu-toggle-open');
const closeMenuIcon = document.querySelector('#menu-toggle-close');
const mobileMenu = document.querySelector('#mobile-menu');
const headerOverlay = document.querySelector('#header');
const grassImage = document.querySelector('#grassland');
const skyImage = document.querySelector('#sky');
const mountainsImage = document.querySelector('#mountains');
const heroData = document.querySelector('#hero-data');

openMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('menu-opened');
    headerOverlay.classList.add('menu-opened');
});

closeMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-opened');
    headerOverlay.classList.remove('menu-opened');
})

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    grassImage.style.transform = "translateY(" + scrollPosition * 0.02 + "%)";
    mountainsImage.style.transform = "translateY(" + scrollPosition * 0.04 + "%)";
    skyImage.style.transform = "translateY(" + scrollPosition * 0.01 + "%)";
    heroData.style.transform = "translateY(" + scrollPosition * 0.03 + "%)";
    heroData.style.opacity = 1 - scrollPosition * 0.002;
})
// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---


//! === SWIPER ===

//! === SCROLL REVEAL ===