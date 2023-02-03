const HomeController = {
  showHome: (req, res) => {
    res.render("home");
  },
  showFinalizacaoPedido: (req, res) => {
    res.render("finalizacao-pedido");
  },
};

module.exports = HomeController;
