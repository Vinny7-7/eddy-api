const express = require('express');
const router = express.Router();

const frase = [{frase: 'O importante não é vencer todos os dias, mas lutar sempre.',autor: 'Waldemar Valle Martins'},{frase: 'Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!',autor: 'Rui Barbosa'},{frase: 'É melhor conquistar a si mesmo do que vencer mil batalhas.',autor: 'Buda'},{frase: 'Quem ousou conquistar e saiu pra lutar, chega mais longe!',autor:'Charlie Brown Jr'},{frase:'Enquanto houver vontade de lutar haverá esperança de vencer.',autor:'Santo Agostinho'},{frase:'Difícil é ganhar um amigo em uma hora; fácil é ofendê-lo em um minuto.',autor:'Provérbio Chinês'},{frase:'O medo de perder tira a vontade de ganhar.',autor:'Mussum'},{frase:'Aquele que não tem confiança nos outros, não lhes pode ganhar a confiança.',autor:'Lao-Tsé'},{frase:'Escolher o seu tempo é ganhar tempo.',autor:'Francis Bacon'},{frase:'Perder para a razão, sempre é ganhar.',autor:'Aldo Novak'},{frase:'Arriscamo-nos a perder quando queremos ganhar demais.',autor:'Jean de La Fontaine'},{frase:'Muitos sabem ganhar dinheiro, mas poucos sabem gastá-lo.',autor:'Henry David Thoreau'},{frase:'Se você pretende ser rico, pense em economizar tanto quanto em ganhar.',autor:'Benjamin Franklin'},{frase:'Para ganhar aquilo que vale a pena ter, pode ser necessário perder tudo mais.',autor:'Bernadette Devlin'},{frase:'A maior caridade é habilitar o pobre a ganhar a sua vida.',autor:'Textos Judaicos'},{frase:'O mundo está perdido para aqueles que o querem ganhar.',autor:'Textos Taoístas'},{frase:'Loteria: acho que, jogando ou não, você tem a mesma chance de ganhar',autor:'Fran Lebowitz'},{frase:'Quem sabe o que se pode ganhar num dia jamais furta.',autor:'George Herbert'},{frase:'A avareza perde tudo ao pretender ganhar tudo.',autor:'Jean de La Fontaine'},{frase:'Para ganhar é preciso gastar.',autor:'Erasmo de Roterdã'},{frase:'Não basta conquistar a sabedoria, é preciso usá-la.',autor:'Cícero'},{frase:'De que serve ao homem conquistar o mundo inteiro se perder a alma?',autor:'Jesus Cristo'},{frase:'De nada serve ao homem conquistar a Lua se acaba por perder a Terra.',autor:'François Mauriac'},{frase:'É fácil adquirir um inimigo; difícil é conquistar um amigo.',autor:'Textos Judaicos'},{frase:'Quer você acredite que consiga fazer uma coisa ou não, você está certo.',autor:'Henry Ford'},{frase:'Acredite na justiça, mas não a que emana dos demais e sim na tua própria.',autor:'Código Samurai'},{frase:'A única forma de vencer uma discussão é evitá-la.',autor:'Dale Carnegie'},{frase:'Não há dor que o sono não consiga vencer.',autor:'Honoré de Balzac'},{frase:'A arte de vencer se aprende nas derrotas.',autor:'Simon Bolívar'},{frase:'Sofrer, é só uma vez; vencer, é para a eternidade.',autor:'Soren Kierkegaard'},{frase:'É mais fácil vencer um mau hábito hoje do que amanhã.',autor:'Confúcio'}];
//{frase:'',autor:''},
router.get('/', (req, res) => {
  console.log('request de: pensamentos')
    const frasea = frase[Math.floor(Math.random() * frase.length)];
    res.json(frasea)
});
  module.exports = router;