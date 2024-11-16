const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.SERVER_PORT;

// Define a pasta 'public' como raiz para os arquivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// Rota padrão para a página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/src/views/index.html"));
});

// Rota para a página 'contact'
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/views/contact.html"));
  });

// Rota para a página 'about'
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/views/about.html"));
  });

// Rota para a página 'professional_expirience'
app.get("/professional_expirience", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/src/views/professional_expirience.html"));
  });

// Rota para a página 'about'
app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/src/views/projects.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
