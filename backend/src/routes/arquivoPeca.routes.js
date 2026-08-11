const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth");

const upload =
    require("../middlewares/uploadArquivoPeca");

const ArquivoPecaController =
    require("../controllers/ArquivoPecaController");

router.get(

    "/pecas/:pecaId/arquivos",

    ArquivoPecaController.listar

);

router.post(

    "/pecas/:pecaId/arquivos",

    auth,

    upload.single("arquivo"),

    ArquivoPecaController.criar

);

router.delete(

    "/arquivos/:id",

    auth,

    ArquivoPecaController.excluir

);

module.exports = router;