const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('body.dark');
  themeToggle.textContent = body.classList.contains('dark') ? '🌙' : '☀️';
});
