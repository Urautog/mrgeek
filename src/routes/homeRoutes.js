const express = require("express");
const HomeController = require("../controllers/HomeController");
const isLogin = require('../middlewares/isLogin')

const router = express.Router();

router.get("/", HomeController.showHome); //HOME

// router.get("/login", HomeController.showLogin); //AUTH

router.get("/finalizacao-pedido", HomeController.showFinalizacaoPedido); //USER

// router.get("/cadastro", HomeController.showCadastro); //AUTH



module.exports = router;