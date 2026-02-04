document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Mobile Menu ---------- */
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('#navLinks a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    /* ---------- Rotating Hero Text ---------- */
    const texts = [
        "Automation Engineer",
        "Instrumentation Engineer",
        "Industry 4.0 Enthusiast"
    ];

    let index = 0;
    const dynamicText = document.getElementById("dynamic-text");

    if (!dynamicText) return;

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
        }, 500);
    }
const certMenuBtn = document.getElementById('cert-menu-btn');
const certMenu = document.getElementById('certMenu');

if (certMenuBtn && certMenu) {
    certMenuBtn.addEventListener('click', () => {
        certMenu.classList.toggle('active');
    });
}

    setInterval(rotateText, 2000);
});
