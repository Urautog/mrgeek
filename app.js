const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");

const homeRoutes = require("./src/routes/homeRoutes");
const productRoutes = require("./src/routes/productRoutes");

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(express.static(__dirname + "/src"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "E-commerce MrGeek",
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true}
  })
);

app.use(homeRoutes);
app.use(productRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
