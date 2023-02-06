const database = require("../database/db.json");
const { Product } = require("../models");
const { randomUUID } = require("crypto");

const ProductsController = {
  showAll: (req, res) => {
    const products = database.products;
    res.render("products", { products });
  },
  createProduct: async (req, res) => {
    if (req.body.length != "undefined") {
      if (req.body.isActive == "on") {
        var isActiveChecked = true;
      }
      const { name, description, price, category, stock, isActive } = req.body;
      const { filename } = req.file;
      await Product.create({
        product_id: randomUUID(),
        name,
        image: filename,
        description,
        price,
        category,
        stock,
        isActive: isActiveChecked,
      });
      res.redirect("/admin/products");
    } else {
      res.send("Produto não criado!");
    }
  },
};
module.exports = ProductsController;
