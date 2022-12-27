const database = require("../database/db.json");

const ProductsController = {
  showAll: (req, res) => {
    const products = database.products
    res.render("products", {products});
  },
};

module.exports = ProductsController;
