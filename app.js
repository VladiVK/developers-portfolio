const burgerMenu = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

const currentYear = document.querySelector('#current-year');
currentYear.innerHTML = new Date().getFullYear();

burgerMenu.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  burgerMenu.classList.toggle('toggle');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burgerMenu.classList.toggle('toggle');
  });
});
