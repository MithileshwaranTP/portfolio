document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Home Page Mobile Menu ---------- */
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    /* ---------- Rotating Hero Text ---------- */
    const dynamicText = document.getElementById("dynamic-text");
    if (dynamicText) {
        const texts = [
            "Automation Engineer",
            "Instrumentation Engineer",
            "Industry 4.0 Enthusiast"
        ];

        let index = 0;
        // Show first text immediately
        dynamicText.textContent = texts[index];
        dynamicText.style.opacity = 1;
        index++;

        function rotateText() {
            dynamicText.style.opacity = 0;
            setTimeout(() => {
                dynamicText.textContent = texts[index % texts.length];
                dynamicText.style.opacity = 1;
                index++;
            }, 500); // fade transition
        }

        setInterval(rotateText, 2000);
    }

    /* ---------- Certificates Page Mobile Menu ---------- */
    const certMenuBtn = document.getElementById('cert-menu-btn');
    const certMenu = document.getElementById('certMenu');

    if (certMenuBtn && certMenu) {
        certMenuBtn.addEventListener('click', () => {
            certMenu.classList.toggle('active');
        });

        // Optional: close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!certMenu.contains(e.target) && e.target !== certMenuBtn) {
                certMenu.classList.remove('active');
            }
        });
    }

});

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Stop dynamic text when menu is open
    if (navLinks.classList.contains('active')) {
        dynamicText.style.opacity = '0';
    } else {
        dynamicText.style.opacity = '1';
    }
});



