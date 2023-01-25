const express = require("express");
const UserController = require("../controllers/UserController");
const isLogin = require("../middlewares/isLogin");
const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

router.get("/admin/users", UserController.showAll); //ADMIN

router.get("/meus-dados/:id", UserController.showUser); 

router.post("/cadastro/:id", UserController.createUser); //ADMIN

router.delete("/admin/users/:id", UserController.deleteUser);

module.exports = router;
