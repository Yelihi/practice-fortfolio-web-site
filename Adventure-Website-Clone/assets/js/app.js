//! === ADD HEADER STYLES ON SCROLL ===

//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const openMenuIcon = document.querySelector('#menu-toggle-open');
const closeMenuIcon = document.querySelector('#menu-toggle-close');
const mobileMenu = document.querySelector('#mobile-menu');

openMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('menu-opened');
});

closeMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-opened');
})
// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const headerOverlay = document.querySelector('')

//! === SWIPER ===

//! === SCROLL REVEAL ===