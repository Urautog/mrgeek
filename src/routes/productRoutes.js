const express = require("express");
const ProductController = require("../controllers/ProductController");

const router = express.Router();

router.get("/products", ProductController.showAll);

router.get("/products/:id", ProductController.showLogin);

router.post("/admin/newProduct/:id", ProductController.newProduct);

router.put("/admin/products/:id", ProductController.updateProduct);

router.delete("/admin/products/:id", ProductController.deleteProduct);

module.exports = router;