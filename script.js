function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return;
  
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  
  themeToggle.innerHTML = theme === "light" ? moonIcon : sunIcon;
}

// Typewriter Effect
const roles = [
  { text: "Building Scalable Systems", gradient: "linear-gradient(135deg, #3b82f6, #8b5cf6)" },
  { text: "Exploring AI", gradient: "linear-gradient(135deg, #f43f5e, #ec4899)" },
  { text: "Designing Interfaces", gradient: "linear-gradient(135deg, #0ea5e9, #10b981)" },
  { text: "Watching Movies", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
  { text: "Playing Games", gradient: "linear-gradient(135deg, #a855f7, #d946ef)" }
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
  const currentRole = roles[roleIndex];
  const typeTextElement = document.querySelector(".typing-text");
  
  if (!typeTextElement) return;

  // Apply gradient on start of new word
  if (!isDeleting && charIndex === 0) {
    typeTextElement.style.backgroundImage = currentRole.gradient;
  }

  if (isDeleting) {
    typeTextElement.textContent = currentRole.text.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 50; // Faster deleting speed
  } else {
    typeTextElement.textContent = currentRole.text.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 100; // Normal typing speed
  }

  if (!isDeleting && charIndex === currentRole.text.length) {
    isDeleting = true;
    typeSpeed = 2000; // Pause at end of word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500; // Pause before typing new word
  }

  setTimeout(typeWriter, typeSpeed);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
  
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Start typewriter effect
  typeWriter();
});
