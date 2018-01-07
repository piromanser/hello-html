const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', event => {
        alert('You clicked the menu item, congrats!')
    })
})
