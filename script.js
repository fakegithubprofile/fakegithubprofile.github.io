    	// Get the button and body elements
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to toggle dark mode
darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');  // Toggle the dark-mode class

    // Change the button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = "🌙 Switch to Light Mode";
    } else {
        darkModeToggle.textContent = "☀️ Switch to Dark Mode";
    }
});
