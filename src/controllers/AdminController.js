const database = require("../database/db.json");
const { User } = require("../models");
const { randomUUID } = require("crypto");

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
    const product = database.products.find((product) => product.id == id);
    res.render("admin/edit-product", { product });
  },
  showAllUsers: async (req, res) => {
    const users = await User.findAll();
    res.render("admin/users", { users });
  },
};

module.exports = AdminController;
