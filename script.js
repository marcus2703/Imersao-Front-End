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

const searchImput = document.getElementById('search-input');
const resultsArtist = document.getElementById('results-artists');
const resultPlaylist = document.getElementById('results-playlist');

function requestApi(searchTerm){
    const apiUrl = `http://localhost:3000/artists?name_like=${searchTerm}`;
    fetch(apiUrl)
        .then((response) => response.json())
        .then((result) >= displayResults(result))
        //.then(data => {
        // console.log('Resultado filtrado:', data)}); // Exibe no console
    
}

document.addEventListener('input', function(){
    const searchTerm = searchImput.value.toLowerCase();
    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
});