const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth");

const LinkPecaController = require("../controllers/LinkPecaController");

router.get(
    "/pecas/:pecaId/links",
    LinkPecaController.listar
);

router.post(
    "/pecas/:pecaId/links",
    auth,
    LinkPecaController.criar
);

router.put(
    "/links/:id",
    auth,
    LinkPecaController.atualizar
);

router.delete(
    "/links/:id",
    auth,
    LinkPecaController.excluir
);

module.exports = router;