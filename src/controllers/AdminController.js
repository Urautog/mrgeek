// const database = require("../database/db.json");
const { User, Product } = require("../models");
const { randomUUID } = require("crypto");

const AdminController = {
  showCreateProduct: (req, res) => {
    res.render("admin/create-product");
  },
  showAllProducts: async (req, res) => {
    const products = await Product.findAll();
    res.render("admin/products", { products });
  },
  showEditProduct: async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const product = await Product.findByPk(id);
    res.render("admin/edit-product", { product });
  },
  showAllUsers: async (req, res) => {
    const users = await User.findAll();
    res.render("admin/users", { users });
  },
};

module.exports = AdminController;
