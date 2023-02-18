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


const rMe = require("./routes/morse-encode");
app.use('/v1/morse-encode/', rMe);
const rMd = require("./routes/morse-decode");
app.use('/v1/morse-decode/', rMd);
const rBd = require("./routes/binario-decode");
app.use('/v1/binario-decode/', rBd);
const rBe = require("./routes/binario-encode");
app.use('/v1/binario-encode/', rBe);
const rPball = require("./routes/8ball");
app.use('/v1/8ball', rPball);
const rCor = require("./routes/cor");
app.use('/v1/cor', rCor);
const rAbraco = require("./routes/abraco");
app.use('/v1/imagens/abraco', rAbraco);
const rFrases = require("./routes/pensamentos");
app.use('/v1/pensamentos', rFrases);
const rCantadas = require("./routes/cantadas");
app.use('/v1/cantadas', rCantadas);
const rmain = require("./routes/main");
app.use('/', rmain);



const port = 3000 || process.env.PORT

app.listen(port, function () {
    console.log("Servidor online na porta: " + port);
});
