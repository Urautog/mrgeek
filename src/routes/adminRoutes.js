const express = require("express");
const AdminController = require("../controllers/AdminController")
const ProductController = require("../controllers/ProductController")

const router = express.Router();

router.get("/create-product", AdminController.showCreateProduct);
router.get("/products", AdminController.showAllProducts);
router.get("/users", AdminController.showAllUsers);
router.get("/edit-product/:id", AdminController.showEditProduct);
router.post("/create-product", ProductController.createProduct);

module.exports = router;