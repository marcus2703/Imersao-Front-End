document.getElementById('botao-contraste').addEventListener('click', function () {
    document.body.classList.toggle('contraste'); // Alterna a classe 'contraste' no body

    const logo = document.getElementById('logo-spotify'); // Seleciona a imagem
    let nomeLogo = document.body.classList.contains('contraste') ? 'Spotify_Full_Logo_RGB_Black.png' : 'Spotify_Full_Logo_RGB_White.png'; // Altera imagem para modo contraste
    console.log(nomeLogo);
    logo.src = `assets/icons/${nomeLogo}`; // define o novo src da imagem
    
});
