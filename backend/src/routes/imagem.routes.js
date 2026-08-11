const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth");

const upload = require("../middlewares/uploadImagem");

const ImagemController = require("../controllers/ImagemController");

router.get(

    "/pecas/:pecaId/imagens",

    ImagemController.listar

);

router.post(

    "/pecas/:pecaId/imagens",

    auth,

    upload.single("arquivo"),

    ImagemController.criar

);

router.delete(

    "/imagens/:id",

    auth,

    ImagemController.excluir

);

module.exports = router;