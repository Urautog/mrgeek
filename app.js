const express = require("express");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(express.static(__dirname + "/src"));

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);

  app.get("/", (req, res) => {
    res.render("home");
  });
  app.get("/login", (req, res) => {
    res.render("login");
  });
  app.get("/meus-pedidos", (req, res) => {
    res.render("meus-pedidos");
  });
  app.get("/favoritos", (req, res) => {
    res.render("favoritos");
  });
});
