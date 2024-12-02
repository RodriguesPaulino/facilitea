const express = require('express');
const path = require('path');
const RoutesPublics = require('./routes/RoutesPublics');
const RoutesPrivates = require('./routes/RoutesPrivates');
const app = express();
const cors = require("cors")
app.use(cors())
// Middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, 'frontend')));

// Middleware para JSON
app.use(express.json());
// Rotas públicas e privadas

app.use((err, req, res, next) => {
    console.error(err.stack);  // Mostra o erro no terminal
    res.status(500).send('Algo deu errado!');  // Retorna uma mensagem genérica
});

app.use(RoutesPublics);
app.use(RoutesPrivates);

module.exports = app;
