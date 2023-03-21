const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closeNav = document.getElementById('close');
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
if (closeNav) {
  closeNav.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}
