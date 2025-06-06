document.addEventListener('DOMContentLoaded',()=>{
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')

    //DECLARANDO O ARRAY DE PERGUNTAS
    const questoes=[
        "1.Você já presenciou uma enchente na sua cidade ou bairro? ",
        "2.Sua casa ou rua já foi afetada por enchentes?",
        "3.você sabe a diferença entre enchentes e alagamentos?",
        "4.você sabe os riscos  à saúde associados às enchentes? ",
        "5.Já utilizou a tecnologia contra enchentes",
        "6.Você conhece alguma ação da sua cidade para lidar com enchentes? ",
        "7.Voce sabe o que deve ser feito durante uma enchente?",
        "8.Você se sente seguro durante os períodos de muita chuva?",
        "9.Você sabe se mora em uma área de risco de enchentes?",
        "10.Você costuma receber alertas sobre enchentes pelo celular, rádio ou redes sociais?",
    ]
    //DECLARANDOS AS VARIAVEIS
    let perguntas = 0;
    const respostas = [];

    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent =questoes[perguntas];
            resposta.value='';
            mensagem.textContent ='';
        }else{
            mostrarResultado();
        }
    }

     function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';

        questoes.forEach((questoes,index)=>{
            const listaItem =document.createElement('li');
            listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua Resposta: <span>${respostas[index]}</span>`
            listaResultado.appendChild(listaItem);
        })
     }

     function nextQuestao(){
        const respostaAtual =resposta.value.trim();
        if(respostaAtual ===''){
            mensagem.textContent ="Por favor , digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();

     }
     function reiniciarQuiz(){
        perguntas = 0
        respostas.length = 0
        containerPerguntas.classList.remove("hidden")
        mostrarPergunta()
    
     }
     proximaPergunta.addEventListener('click',nextQuestao);
     reiniciarBotao.addEventListener('click',reiniciarQuiz);

     mostrarPergunta();


})


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