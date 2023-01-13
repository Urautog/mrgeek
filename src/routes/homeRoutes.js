const express = require("express");
const HomeController = require("../controllers/HomeController");

const router = express.Router();

router.get("/", HomeController.showHome);

router.get("/login", HomeController.showLogin);

router.get("/meus-pedidos", HomeController.showMeusPedidos);

router.get("/favoritos", HomeController.showFavoritos);

router.get("/meus-dados", HomeController.showMeusDados);

router.get("/finalizacao-pedido", HomeController.showFinalizacaoPedido);

module.exports = router;