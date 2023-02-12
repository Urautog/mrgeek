const { User, Product, Category } = require("../models");

const AdminController = {
  showCreateProduct: async (req, res) => {
    const categories = await Category.findAll();
    res.render("admin/create-product", { categories });
  },
  showAllProducts: async (req, res) => {
    const products = await Product.findAll({
      include: [{ association: "category" }],
    });
    console.log(products);
    res.render("admin/products", { products });
  },
  showEditProduct: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    res.render("admin/edit-product", { product });
  },
  showAllUsers: async (req, res) => {
    const users = await User.findAll();
    res.render("admin/users", { users });
  },
};

module.exports = AdminController;
