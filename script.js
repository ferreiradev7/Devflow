const elementsToAnimate = document.querySelectorAll('.feature-card, .plano-card');

// Cria o observador
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});


elementsToAnimate.forEach(element => {
    observer.observe(element);
});


const hamburguer = document.querySelector('.hamburguer-menu');
const navMenu = document.querySelector('.main-nav');

hamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});

document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
    });
});