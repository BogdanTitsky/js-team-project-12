const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  body.classList.add('dark'); 
}

themeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});