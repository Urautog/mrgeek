const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const db = require("./src/models");

const homeRoutes = require("./src/routes/homeRoutes");
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

// (async () => {
//   await db.sequelize.sync();
// })();

app.use(express.static(__dirname + "/src"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "E-commerce MrGeek",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true}
  })
);

app.use(homeRoutes);
app.use("/auth", authRoutes);
app.use(productRoutes);
app.use("/admin", adminRoutes);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
