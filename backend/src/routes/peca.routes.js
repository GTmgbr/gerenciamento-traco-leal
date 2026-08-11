const ImagemPecaController = require("../controllers/ImagemPecaController");
const uploadImagem = require("../middlewares/uploadImagemPeca");

const express = require("express");

const router = express.Router();

const PecaController = require("../controllers/PecaController");

const auth = require("../middlewares/auth");

router.get("/", PecaController.listar);

router.get("/:id", PecaController.buscar);

router.post("/", auth, PecaController.criar);

router.put("/:id", auth, PecaController.atualizar);

router.delete("/:id", auth, PecaController.excluir);

// Imagens da peça

router.get(
    "/:pecaId/imagens",
    ImagemPecaController.listar
);

router.post(
    "/:pecaId/imagens",
    auth,
    uploadImagem.single("arquivo"),
    ImagemPecaController.criar
);

module.exports = router;