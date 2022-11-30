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
};

module.exports = HomeController;
