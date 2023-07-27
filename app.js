const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.get("/ok", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.use("/imagens", express.static(__dirname + '/public'));


const rMe = require("./routes/morse");
app.use('/v1/morse/', rMe);
const rBe = require("./routes/binario");
app.use('/v1/binario/', rBe);
const rPball = require("./routes/8ball");
app.use('/v1/8ball', rPball);
const rCor = require("./routes/cor");
app.use('/v1/cor', rCor);
const rFrases = require("./routes/pensamentos");
app.use('/v1/pensamentos', rFrases);
const rCantadas = require("./routes/cantadas");
app.use('/v1/cantadas', rCantadas);
const rCesar = require("./routes/cifra-de-cesar");
app.use('/v1/cifra-de-cesar', rCesar);
const rDicio = require("./routes/dicionario");
app.use('/v1/dicionario', rDicio);

const rmain = require("./routes/main");
app.use('/', rmain);



const port = 3000 || process.env.PORT

app.listen(port, function() {
  console.log("Servidor online na porta: " + port);
});