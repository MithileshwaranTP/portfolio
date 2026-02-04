const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Rotating/Typewriter text under hero photo
const texts = [
    "Automation Engineer",
    "Instrumentation Engineer",
    "Industry 4.0 Enthusiast",
    "IIoT Specialist"
];

let index = 0;
const dynamicText = document.getElementById("dynamic-text");

function rotateText() {
    dynamicText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

// Change text every 2 seconds
setInterval(rotateText, 2000);
