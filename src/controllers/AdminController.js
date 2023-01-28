const database = require("../database/db.json");

const AdminController = {
  showCreateProduct: (req, res) => {
    res.render("admin/create-product");
  },
  showAllProducts: (req, res) => {
    const products = database.products;
    res.render("admin/products", { products });
  },
  showEditProduct: (req, res) => {
    const { id } = req.params;
    const product = database.products.find(product => product.id == id);
    res.render("admin/edit-product", { product });
  },
  showAllUsers: (req, res) => {
    const users = database.users;
    res.render("admin/users", { users });
  },
  // showLogin: (req, res) => {
  //   res.render("login");
  // },
  // showMeusPedidos: (req, res) => {
  //   res.render("meus-pedidos");
  // },
  // showFavoritos: (req, res) => {
  //   res.render("favoritos");
  // },
  // showMeusDados: (req, res) => {
  //   res.render("meus-dados");
  // },
  // showFinalizacaoPedido: (req, res) => {
  //   res.render("finalizacao-pedido")
  // },
  // showCadastro: (req, res) => {
  //   res.render("cadastro")
  // }
};

module.exports = AdminController;
