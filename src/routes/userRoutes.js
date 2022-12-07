const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/admin/users", UserController.showAll);

router.get("/meus-dados/:id", UserController.showUser);

router.post("/cadastro/:id", UserController.createUser);

router.delete("/admin/users/:id", UserController.deleteUser);

module.exports = router;
