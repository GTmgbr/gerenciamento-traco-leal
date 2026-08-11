const express = require("express");

const router = express.Router();

const ClienteController = require("../controllers/ClienteController");

const auth = require("../middlewares/auth");

const upload = require("../config/multer");

router.get("/", ClienteController.listar);

router.post(
    "/",
    auth,
    upload.single("logo"),
    ClienteController.criar
);

router.put(
    "/:id",
    auth,
    upload.single("logo"),
    ClienteController.atualizar
);

router.delete(
    "/:id",
    auth,
    ClienteController.excluir
);

module.exports = router;