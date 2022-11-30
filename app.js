const express = require("express");
const app = express();
const port = 5000;

const homeRoutes = require("./src/routes/homeRoutes");

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(express.static(__dirname + "/src"));

app.use(homeRoutes);

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
