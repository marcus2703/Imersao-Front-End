document.getElementById('botao-contraste').addEventListener('click', function () {
    document.body.classList.toggle('contraste'); // Alterna a classe 'contraste' no body

    const logo = document.getElementById('logo-spotify'); // Seleciona a imagem
    let nomeLogo = document.body.classList.contains('contraste') ? 'Spotify_Full_Logo_RGB_Black.png' : 'Spotify_Full_Logo_RGB_White.png'; // Altera imagem para modo contraste
    logo.src = `./src/assets/icons/${nomeLogo}`; // define o novo src da imagem
    
});

function greetings(){
    let data = new Date();
    let hora = data.getHours();
    let saudacao = "Bom dia!";

    if(hora >= 12 && hora < 18)
    {
        saudacao = "Boa tarde!";
    }
    else if(hora >= 18)
    {
        saudacao = "Boa noite!";
    }

    return saudacao;
}

function exibirTextoNaTela(id, texto){
    let campo = document.getElementById (id);
    campo.innerHTML = texto;
}

function exibirMensagemgreeting(){
exibirTextoNaTela('greeting', greetings());
}
exibirMensagemgreeting();
