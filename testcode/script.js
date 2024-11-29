const menuItems = document.querySelectorAll('.menu-item');
let selectedIndex = 0;

// Тексты на разных языках
const texts = {
    en: {
        title: 'thinkaboutrue',
        info: 'hiii! i am <strong>thinkaboutrue, true eye, hleb</strong>. I do stuff and mostly hang out in Telegram and rarely in Discord. I know a bit about Android devices. Below are the links to my Telegram and TikTok:',
        footer: 'Made with <a href="bruh.html" target="_blank" class="footer-link">❤️</a> by thinkaboutrue'
    },
    ru: {
        title: 'thinkaboutrue',
        info: 'привет!!!! я <strong>thinkaboutrue, тру ай, хлеб</strong>. я занимаюсь хуйней и в основном обитаю в тг и редко в дс. немного разбираюсь в дегроид девайсах. ниже будут ссылки на мой тг и тикток:',
        footer: 'Made with <a href="bruh.html" target="_blank" class="footer-link">❤️</a> by thinkaboutrue'
    }
};

// Функция для смены языка
function changeLanguage(language) {
    const text = texts[language] || texts.en;  // Если язык не найден, по умолчанию будет английский

    document.getElementById('title').innerHTML = text.title;
    document.getElementById('info').innerHTML = text.info;
    document.getElementById('footer').innerHTML = text.footer;
}

// Получаем язык устройства
const userLanguage = navigator.language || navigator.userLanguage;
const language = userLanguage.startsWith('ru') ? 'ru' : 'en';  // Если язык русский, то выберем русский

// Применяем выбранный язык
changeLanguage(language);

// Update the menu to reflect the selected item
function updateMenu() {
    menuItems.forEach((item, index) => {
        item.classList.toggle('selected', index === selectedIndex);
    });
}

// Handle keypress events for navigation (excluding settings button)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;
    } else if (event.key === 'ArrowRight') {
        selectedIndex = (selectedIndex + 1) % menuItems.length;
    } else if (event.key === 'Enter') {
        // Redirect based on the selected item
        const selectedItem = menuItems[selectedIndex];
        window.open(selectedItem.dataset.link, '_blank');  // Open in new tab
    }
    updateMenu();
});

// Add touch and click events for mobile compatibility
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        selectedIndex = index;
        updateMenu();
        window.open(item.dataset.link, '_blank');  // Open in new tab
    });
});

// Initialize the menu
updateMenu();
