const express = require("express");
const HomeController = require("../controllers/HomeController");

const router = express.Router();

router.get("/", HomeController.showHome);

router.get("/login", HomeController.showLogin);

router.get("/meus-pedidos", HomeController.showMeusPedidos);

router.get("/favoritos", HomeController.showFavoritos);

router.get("/produtos", HomeController.showProdutos);

module.exports = router;