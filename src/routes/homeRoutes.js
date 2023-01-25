const express = require("express");
const HomeController = require("../controllers/HomeController");
const AuthController = require("../controllers/AuthController");

const isLogin = require('../middlewares/isLogin')

const router = express.Router();

router.use(isLogin) //AUTH

router.get("/", HomeController.showHome); //HOME

router.get("/login", HomeController.showLogin); //HOME

router.get("/meus-pedidos", HomeController.showMeusPedidos); //USER

router.get("/favoritos", HomeController.showFavoritos); //USER

router.get("/meus-dados", HomeController.showMeusDados); //USER

router.get("/finalizacao-pedido", HomeController.showFinalizacaoPedido); //USER

router.get("/cadastro", HomeController.showCadastro); //HOME
router.post("/cadastro", AuthController.store); //HOME

module.exports = router;