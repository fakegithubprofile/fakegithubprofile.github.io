// Get the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Function to switch theme
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');  // Toggles the dark-mode class

  // Change the icon based on the theme
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '🌙';  // Moon icon for dark mode
    localStorage.setItem('theme', 'dark');  // Store user preference
  } else {
    themeToggle.textContent = '☀️';  // Sun icon for light mode
    localStorage.setItem('theme', 'light');  // Store user preference
  }
}

// Load user preference on page load
function loadThemePreference() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '🌙';  // Set icon for dark mode
  } else {
    themeToggle.textContent = '☀️';  // Set icon for light mode
  }
}

// Add event listener to the toggle button
themeToggle.addEventListener('click', toggleTheme);

// Load theme preference when the page loads
loadThemePreference();

