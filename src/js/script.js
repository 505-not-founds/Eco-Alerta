document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.6
    });

    cards.forEach(card => observer.observe(card));
});

// carregamento

const imagens = [
    'src/assets/enchente.webp',
    'src/assets/enchente3.jpg',
    'src/assets/enchente4.jpg',
    'src/assets/enchente2.avif'
];

let i = 0;
const tempo = 100000;

function slideShowBanner() {
    const banner = document.getElementById('banner');
    if (!banner) return;

    banner.style.backgroundImage = `url(${imagens[i]})`;
    i = (i + 1) % imagens.length;

    setTimeout(slideShowBanner, tempo);
}

window.onload = slideShowBanner;

//   Menu hambuerger

const toggle = document.getElementById('botao-menu');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});