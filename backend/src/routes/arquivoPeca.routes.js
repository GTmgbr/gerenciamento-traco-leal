const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth");

const upload =
    require("../middlewares/uploadArquivoPeca");

const ArquivoPecaController =
    require("../controllers/ArquivoPecaController");


// Listar arquivos de uma peça

router.get(

    "/pecas/:pecaId/arquivos",

    ArquivoPecaController.listar

);


// Download de arquivo

router.get(

    "/arquivos/:id/download",

    ArquivoPecaController.baixar

);


// Cadastrar arquivo

router.post(

    "/pecas/:pecaId/arquivos",

    auth,

    upload.single("arquivo"),

    ArquivoPecaController.criar

);


// Excluir arquivo

router.delete(

    "/arquivos/:id",

    auth,

    ArquivoPecaController.excluir

);


module.exports = router;