const express = require("express");
const ProductController = require("../controllers/ProductController");
const multer = require("multer");

const router = express.Router();

router.get("/products", ProductController.showAll);

module.exports = router;