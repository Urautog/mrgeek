const express = require("express");
const ProductController = require("../controllers/ProductController");

const router = express.Router();

router.get("/products", ProductController.showAll);

module.exports = router;