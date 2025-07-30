document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuPanel = document.getElementById('menu-panel');
    const closeButton = document.getElementById('close-button');

    function openMenu() {
        mobileMenu.classList.remove('hidden');
        void menuOverlay.offsetWidth;
        void menuPanel.offsetWidth;
        menuOverlay.classList.remove('opacity-0');
        menuOverlay.classList.add('opacity-100');
        menuPanel.classList.remove('translate-x-full');
        menuPanel.classList.add('translate-x-0');
    }

    function closeMenu() {
        menuOverlay.classList.remove('opacity-100');
        menuOverlay.classList.add('opacity-0');
        menuPanel.classList.remove('translate-x-0');
        menuPanel.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }

    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', openMenu);
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }

    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeMenu);
    }
});
