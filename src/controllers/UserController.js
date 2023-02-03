const { validationResult } = require("express-validator");
// const database = require("../database/db.json");
const { User } = require("../models");

const UserController = {
  getUsers: async (req, res) => {
    let users = await User.findAll();
  
  },
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
    if (req.body.name && req.body.password) {
      const { name, password } = req.body;
      await User.create({
        name,
        password,
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
