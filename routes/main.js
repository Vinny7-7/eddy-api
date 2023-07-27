const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const endpoints = [
    { nome: '8ball (aleatório)', rota: '/v1/8ball', descricao: 'Obter uma resposta aleatória para uma pergunta.' },
    { nome: 'binario codificar (utilidade)', rota: '/v1/binario/codificar/TEXTO', descricao: 'Codificar um texto para binário.' },
    { nome: 'binario decodificar (utilidade)', rota: '/v1/binario/decodificar/BINARIO', descricao: 'Decodificar um código binário para texto.' },
    { nome: 'cantadas (aleatório)', rota: '/v1/cantadas', descricao: 'Obter uma cantada aleatória.' },
    { nome: 'cifra de cesar criptografar (utilidade)', rota: '/v1/cifra-de-cesar/criptografar/cifra=TEXTO&chave=CHAVE(número)', descricao: 'Criptografar um texto usando a cifra de César.' },
    { nome: 'cifra de cesar descriptografar (utilidade)', rota: '/v1/cifra-de-cesar/descriptografar/cifra=TEXTO&chave=CHAVE(número)', descricao: 'Descriptografar um texto criptografado com a cifra de César.' },
    { nome: 'cor (aleatório)', rota: 'v1/cor/CÓDIGO DA COR EM HEX', descricao: 'Obter informações sobre uma cor em formato hexadecimal.' },
    { nome: 'dicionario (utilidade)', rota: '/v1/dicionario/PALAVRA', descricao: 'Consultar o significado de uma palavra no dicionário.' },
    { nome: 'morse codificar (utilidade)', rota: '/v1/morse/codificar/TEXTO', descricao: 'Codificar um texto para código Morse.' },
    { nome: 'morse decodificar (utilidade)', rota: '/v1/morse/decodificar/TEXTO', descricao: 'Decodificar um código Morse para texto.' },
    { nome: 'pensamento (aleatório)', rota: '/v1/pensamento', descricao: 'Obter um pensamento aleatório.' }
  ];

  let html = `
    <style>
      body {
        background-color: #000;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        transition: background-color 0.3s ease;
      }
      .container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        padding: 20px;
      }
      .box {
        background-color: #111;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 20px;
        width: 300px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
        border: 2px solid #00ffff;
      }
      .box:hover {
        box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff;
      }
      h1 {
        text-align: center;
        margin-top: 40px;
        margin-bottom: 20px;
        color: #00ffff;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      h3 {
        margin-top: 0;
        margin-bottom: 10px;
        color: #00ffff;
      }
      p {
        margin-top: 0;
        color: #999;
      }
      a {
        display: inline-block;
        background-color: #00ffff;
        color: #000;
        text-decoration: none;
        padding: 8px 16px;
        border-radius: 4px;
        transition: background-color 0.3s ease;
      }
      a:hover {
        background-color: #00ccff;
      }
      .neon {
        position: relative;
        display: inline-block;
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;
        text-shadow: 0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.6), 0 0 50px rgba(0, 255, 255, 0.6);
      }
    </style>
    <h1 class="neon" data-text="Endpoints">Endpoints</h1>
    <div class="container">
  `;

  endpoints.forEach(endpoint => {
    html += `
      <div class="box">
        <h3>${endpoint.nome}</h3>
        <p>${endpoint.descricao}</p>
        <a href="${endpoint.rota}">Acessar</a>
      </div>
    `;
  });

  html += '</div>';

  res.send(html);
});

module.exports = router;