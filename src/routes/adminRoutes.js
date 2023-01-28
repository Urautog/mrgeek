const express = require("express");
const AdminController = require("../controllers/AdminController");
// const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.get("/create-product", AdminController.showCreateProduct);
router.get("/products", AdminController.showAllProducts);
router.get("/users", AdminController.showAllUsers);
router.get("/edit-product/:id", AdminController.showEditProduct);
// router.post("/create-product", AdminController.showCreateProduct);

module.exports = router;