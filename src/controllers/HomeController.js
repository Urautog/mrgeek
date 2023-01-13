const HomeController = {
  showHome: (req, res) => {
    res.render("home");
  },
  showLogin: (req, res) => {
    res.render("login");
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
};

module.exports = HomeController;
