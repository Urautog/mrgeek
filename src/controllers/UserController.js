const { validationResult } = require("express-validator");
const { User } = require("../models");
const {randomUUID} = require("crypto")
const bcrypt = require("bcryptjs");

const UserController = {
  showMeusPedidos: (req, res) => {
    res.render("meus-pedidos");
  },
  showFavoritos: (req, res) => {
    res.render("favoritos");
  },
  showMeusDados: (req, res) => {
    res.render("meus-dados");
  },
  createUser: async (req, res) => {
    if (req.body.firstName && req.body.password) {
      const { firstName, lastName, email, tel, password } = req.body;
      const hash = bcrypt.hashSync(password, 10)
      await User.create({
        user_id: randomUUID(),
        firstName,
        lastName,
        email,
        tel,
        password: hash,
      });
      res.render("home");
    } else {
      res.send("Não adicionado");
    }
  },
};

module.exports = UserController;

// createUser: (req, res) => {
//   const resultValidations = validationResult(req);

//   if (resultValidations.errors.length > 0) {
//     console.log(req);
//     return res.render("cadastro", {
//       errors: resultValidations.mapped(),
//       oldData: req.body,
//     });
//   }
// },
