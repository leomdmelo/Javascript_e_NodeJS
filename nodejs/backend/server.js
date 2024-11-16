const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para permitir CORS e processar JSON no corpo da requisição
app.use(cors());
app.use(express.json());

// Rota GET existente
app.get('/api/mensagem', (req, res) => {
    res.json({ mensagem: 'Olá, frontend! Este é o backend!' });
});

// Rota POST para processar o formulário
app.post('/api/saudacao', (req, res) => {
    const { nome } = req.body; // Extrai o nome do corpo da requisição
    if (nome) {
        res.json({ mensagem: `Olá, ${nome}! Seja bem-vindo!` });
    } else {
        res.status(400).json({ mensagem: 'Nome não fornecido!' });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
});