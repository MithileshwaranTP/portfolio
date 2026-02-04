document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Home Page Mobile Menu ---------- */
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('navLinks');
    const dynamicText = document.getElementById('dynamic-text');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Hide dynamic text while menu is open
            if (dynamicText) {
                dynamicText.style.opacity = navLinks.classList.contains('active') ? '0' : '1';
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (dynamicText) dynamicText.style.opacity = '1';
            });
        });
    }

    /* ---------- Rotating Hero Text ---------- */
    if (dynamicText) {
        const words = [
            "Automation Engineer",
            "Instrumentation Engineer",
            "Industry 4.0 Enthusiast"
        ];
        let index = 0;

        // Show first text immediately
        dynamicText.textContent = words[index];
        dynamicText.style.opacity = '1';
        index++;

        function updateDynamicText() {
            // Only update if mobile menu is NOT active
            if (!navLinks.classList.contains('active')) {
                dynamicText.textContent = words[index];
                index = (index + 1) % words.length;
            }
        }

        setInterval(updateDynamicText, 2000);
    }

    /* ---------- Certificates Page Mobile Menu ---------- */
    const certMenuBtn = document.getElementById('cert-menu-btn');
    const certMenu = document.getElementById('certMenu');

    if (certMenuBtn && certMenu) {
        certMenuBtn.addEventListener('click', () => {
            certMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!certMenu.contains(e.target) && e.target !== certMenuBtn) {
                certMenu.classList.remove('active');
            }
        });
    }

});
