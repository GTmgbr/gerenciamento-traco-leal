const express = require("express");

const router = express.Router();

const DocumentoController = require("../controllers/DocumentoController");

const auth = require("../middlewares/auth");

const upload = require("../config/multerDocumento");

router.get("/", DocumentoController.listar);

router.post(

    "/",

    auth,

    upload.single("arquivo"),

    DocumentoController.criar

);

router.put(

    "/:id",

    auth,

    upload.single("arquivo"),

    DocumentoController.atualizar

);

router.delete(

    "/:id",

    auth,

    DocumentoController.excluir

);

module.exports = router;