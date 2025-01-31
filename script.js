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

function requestApi(searchTerms){
    const apiUrl = 'https://run.mocky.io/v3/d67a5a73-8c68-42a4-a057-753d66df36e2/artists?name_like=${searchTerm}';
    fetch(`apiUrl`, {
        method: 'GET',
        headers: {'content-type':'application/json'},
        origin: 'http://localhost:5500'
      })
        .then((response) => response.json())
       // .then((result) >= displayResults(result))
}



document.addEventListener('input', function(){
    const searchTerms = searchImput.value.toLowerCase();
    if (searchTerms === ''){
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerms);
});