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


const rPball = require("./routes/8ball");
app.use('/v1/8ball', rPball);
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
