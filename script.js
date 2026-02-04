const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Rotating/Typewriter text under hero photo
const texts = [
    "Automation Engineer",
    "Instrumentation Engineer",
    "Industry 4.0 Enthusiast"
];

let index = 0;
const dynamicText = document.getElementById("dynamic-text");

// Display first text immediately
dynamicText.textContent = texts[index];
index = (index + 1) % texts.length;

// Function for fade effect rotation
function rotateText() {
    dynamicText.style.opacity = 0; // fade out
    setTimeout(() => {
        dynamicText.textContent = texts[index]; // update text
        dynamicText.style.opacity = 1;          // fade in
        index = (index + 1) % texts.length;
    }, 500); // matches CSS transition duration
}

// Start rotation every 2 seconds
setInterval(rotateText, 2000);
