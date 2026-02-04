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

// Back to Top button
const backToTopBtn = document.getElementById("back-to-top");

// Show button after scrolling down 400px
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Smooth scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

});

