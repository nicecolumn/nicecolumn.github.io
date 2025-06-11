// --- Global Script ---

// Parallax scrolling effect
document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', function() {
        let scrolled = window.scrollY;
        let device_width = window.outerWidth;
        const header = document.querySelector('header');

        if (scrolled > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }        

        if (device_width > 768) {
            document.querySelectorAll('.parallax').forEach(function(element) {
                element.style.backgroundPositionY = (scrolled * 0.1) -60 + '%';
            });

            if (scrolled > 200) {
                const contents = document.querySelectorAll('.content');
                const interval = 500;

                contents.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('show');
                    }, index * interval);
                });
            }
        }
    });
});

// Navigation menu for mobile
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.getElementById('nav-mobile');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('open');
        nav.classList.toggle('open');
    });
    nav.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('open');
        nav.classList.toggle('open');
    })
});