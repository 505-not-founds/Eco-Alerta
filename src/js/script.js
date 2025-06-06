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
    'src/assets/tecnologia1.gif',
    'src/assets/tecnologia2.gif',
    'src/assets/enchente1.jpg',
    'src/assets/enchente2.jpg'
];

let i = 0;
const tempo = 5000;

function slideShowBanner() {
    const banner = document.getElementById('banner');
    if (!banner) return;
""
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

// Cores
function trocar(cor){
    document.body.style.background=cor
}