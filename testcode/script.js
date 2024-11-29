const menuItems = document.querySelectorAll('.menu-item');
let selectedIndex = 0;

// Update the menu to reflect the selected item
function updateMenu() {
    menuItems.forEach((item, index) => {
        item.classList.toggle('selected', index === selectedIndex);
    });
}

// Handle keypress events for navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;
    } else if (event.key === 'ArrowRight') {
        selectedIndex = (selectedIndex + 1) % menuItems.length;
    } else if (event.key === 'Enter') {
        // Redirect based on the selected item
        const selectedItem = menuItems[selectedIndex];
        window.open(selectedItem.dataset.link, '_blank');
    }
    updateMenu();
});

// Add touch and click events
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        selectedIndex = index;
        updateMenu();
        window.open(item.dataset.link, '_blank');
    });
});

// Initialize the menu
updateMenu();
