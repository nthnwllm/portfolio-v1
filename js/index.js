const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-mobile__link');
const cards = document.querySelectorAll('.card__inner');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped')
    })
})