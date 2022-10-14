function openMenu() {
    document.body.classList += " menu_open"
    document.body.classList.remove('menu_close')
}

function closeMenu() {
    document.body.classList.remove('menu_open')
    document.body.classList += " menu_close"
}
  