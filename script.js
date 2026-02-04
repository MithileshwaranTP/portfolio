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

function rotateText() {
    dynamicText.style.opacity = 0;
    setTimeout(() => {
        dynamicText.textContent = texts[index];
        dynamicText.style.opacity = 1;
        index = (index + 1) % texts.length;
    }, 500); // matches the CSS transition duration
}
