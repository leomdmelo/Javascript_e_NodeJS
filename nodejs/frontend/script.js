// Seleciona o formulário e a área de resposta
const formulario = document.getElementById('formulario');
const resposta = document.getElementById('resposta');

// URL da API do backend
const apiUrl = 'http://localhost:3000/api/saudacao';

// Captura o evento de envio do formulário
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o recarregamento da página

    // Obtém o valor do campo de entrada
    const nome = document.getElementById('nome').value;

    // Envia os dados para o backend via POST
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome }),
    })
        .then((response) => response.json())
        .then((data) => {
            // Exibe a resposta do backend
            resposta.textContent = data.mensagem;
        })
        .catch((error) => {
            console.error('Erro ao enviar os dados:', error);
            resposta.textContent = 'Erro ao processar a solicitação.';
        });
});