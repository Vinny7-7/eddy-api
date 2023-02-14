const express = require('express');
const router = express.Router();

const frase = ["Você é eletricista? Porque você iluminou o meu dia.", "Se beleza fosse flor, você seria o Jardim Botânico!", "Você não é GPS quebrado, mas me deixa sem rumo.", "Igual a você, nem o Google Maps encontra.", "Você não é terremoto, mas abalou minhas estruturas.", "Eu não sou Casas Bahia, mas prometo dedicação total a você.", "Você não é pescoço mais mexeu com a minha cabeça!", "Eu ainda não sou doador de órgãos, mas estou disposto a doar meu coração a você.", "Eu não sou Alice, mas, com você, me sinto no País das Maravilhas.", "Me passa seu Instagram? É que a minha mãe falou para eu seguir o meu sonho.", "Sabe estacionar? Porque tem uma vaga o meu coração.", "Meu amor é igual ao mapa de Minecraft: infinito e cheio de surpresas.", "Pesquisas apontam que agente junto é erro de gramática, mas a gente separado é erro do destino.", "O açougueiro, vende carne. O sorveteiro, vende sorvete. O padeiro, vende pão. E, você, vem de zap?", "Onde é que eu deixo meu currículo para concorrer à vaga de amor da sua vida?", "Me chame de lente e vamos manter contato.", "Por acaso seu pai é pirata? Porque você é um tesouro.", "Me chama de urna eletrônica e me dá seu voto de confiança.", "Meu amor por você é igual à obra do governo. Nunca acaba.", "Teu vô é padeiro? Por que tua mãe é um sonho."];
router.get('/', (req, res) => {
  console.log('request de: cantadas')
    const frasea = frase[Math.floor(Math.random() * frase.length)];
    res.json({cantada: frasea})
});
  module.exports = router;
