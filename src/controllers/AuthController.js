const { User } = require("../models");
const bcrypt = require("bcryptjs");

const AuthController = {
  showCadastro: (req, res) => {
    res.render("cadastro");
  },

  showLogin: (req, res) => {
    res.render("login");
  },

  // store: (req, res) => {
  //   const { name, email, password } = req.body;

  //   const verifyExists = User.findOne( {where: { email: email } } );

  //   if (!verifyExists) {
  //     return res.render("cadastro", {
  //       error: "Não foi possivel realizar a operação",
  //     });
  //   }

  //   const hash = bcrypt.hashSync(password, 10);

  //   const newUser = { name, email, hash };

  //   User.create(newUser);

  //   return res.redirect("/auth/login");
  // },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({where: { email: email } });
    const verifyPassword = bcrypt.compareSync(password, user.password);

    if (!user || !verifyPassword) {
      return res.render("login", { error: "Email ou senha inválidos" });
    }

    req.session.user = user;

    return res.redirect("/");
  },
};

module.exports = AuthController;
