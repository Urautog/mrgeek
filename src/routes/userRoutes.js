const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const isLogin = require("../middlewares/isLogin");

const UserController = require("../controllers/UserController");

router.use(isLogin);

const validations = [
  check("name").notEmpty().withMessage("O campo NOME não pode estar vazio!"),
  check("email")
    .notEmpty()
    .withMessage("O campo EMAIL não pode estar vazio!")
    .bail()
    .isEmail()
    .withMessage("Email inválido!"),
  check("password")
    .notEmpty()
    .withMessage("O campo SENHA não pode estar vazio!")
    .bail()
    .isLength({ min: 8 })
    .withMessage("A SENHA deve ter no mínimo 8 caracteres"),
];

router.get("/meus-pedidos", UserController.showMeusPedidos);

router.get("/favoritos", UserController.showFavoritos);

router.get("/meus-dados", UserController.showMeusDados);

router.post("/auth/cadastro", UserController.createUser)


// router.post("/cadastro", UserController.createUser);

// router.post("/cadastro", validations, UserController.createUser); Essa ROTA tem que ir pro auth

// router.post("/cadastro", AuthController.store); //HOME

module.exports = router;
