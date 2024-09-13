console.log("Welcome to Aditya Iyer's Academic Resume!");

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('dark') ? '🌙' : '☀️';
});

