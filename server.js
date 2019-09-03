const express = require("express");
const https = require("https");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");
const auth = require("./authTest");
const router = jsonServer.router("datosServidor.json");

const enableHttps = false;

const ssloptiones = {};

const app = express();

app.use(bodyParser.json());
app.use(auth);
app.use("/api", router);
app.use(history());
app.use("/",express.static("./dist/TiendaViajes"));

app.listen(80,() => console.log("HTTP server running en puerto 80"));

if(!enableHttps){
    console.log("HTTPS desabilitado !");
}