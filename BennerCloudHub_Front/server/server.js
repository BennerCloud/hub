const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define o diretório onde os arquivos estáticos serão servidos
const staticDir = path.join(__dirname, 'C:/Users/gabriel.waldrich/Desktop/codigos/HubBennerCloud/BennerCloudHub_Front/index/index.html');

// Serve os arquivos estáticos
app.use(express.static(staticDir));

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
