
document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar'); // Seleciona a barra lateral
    var content = document.querySelector('.content'); // Seleciona o conteúdo principal
    var toggleButton = document.getElementById('toggle-button'); // Seleciona o botão de toggle

    // Adiciona um listener de evento de clique ao botão
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active'); // Alterna a classe 'active' na barra lateral
        content.classList.toggle('shifted'); // Alterna a classe 'shifted' no conteúdo
    });
});
