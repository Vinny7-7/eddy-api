const express = require('express');
const app = express();

app.get("/ok", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

const rPball = require("./routes/8ball");
app.use('/v1/8ball', rPball);
const rFrases = require("./routes/pensamentos");
app.use('/v1/pensamentos', rFrases);
const rCantadas = require("./routes/cantadas");
app.use('/v1/cantadas', rCantadas);
const rmain = require("./routes/main");
app.use('/', rmain);

app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});
