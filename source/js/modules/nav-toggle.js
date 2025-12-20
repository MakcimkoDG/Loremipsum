const MENU_BUTTON = document.querySelector('[data-nav-toggle]');
const MAIN_NAV = document.querySelector('[data-main-nav]')

export function toggleMenu() {
    MENU_BUTTON.addEventListener('click',() => MAIN_NAV.classList.toggle('is-open'))
}