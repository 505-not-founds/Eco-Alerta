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