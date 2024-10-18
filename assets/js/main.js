const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('active'); 
    navClose.style.display = 'flex'; 
    navToggle.style.display = 'none'; 
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('active'); 
    navClose.style.display = 'none'; 
    navToggle.style.display = 'flex'; 
});
