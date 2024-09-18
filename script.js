function setDarkMode() {
    let element = document.body;
    let button = document.getElementById("modeswitchbutton");
    element.classList.add("dark-mode");
    element.classList.remove("light-mode");
    button.innerText = "🌙";
    localStorage.setItem('theme', 'dark');  // Store preference
}

function setLightMode() {
    let element = document.body;
    let button = document.getElementById("modeswitchbutton");
    element.classList.add("light-mode");
    element.classList.remove("dark-mode");
    button.innerText = "☀️";
    localStorage.setItem('theme', 'light');  // Store preference
}

function modeswitch() {
    let element = document.body;
    if (element.classList.contains("light-mode")) {
        setDarkMode();
    } else {
        setLightMode();
    }
}

// Load theme preference on page load
window.onload = function() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
        setDarkMode();
    } else {
        setLightMode();  // Default to light mode if no preference
    }
}
