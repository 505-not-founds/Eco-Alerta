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
        "pergunta1",
        "2",
        "3",
        "4",
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