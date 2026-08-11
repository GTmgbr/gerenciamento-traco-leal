const CategoriaService = require("../services/CategoriaService");

class CategoriaController {

    async listar(req, res) {

        try {

            const categorias = await CategoriaService.listar();

            return res.json(categorias);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao listar categorias."

            });

        }

    }

}

module.exports = new CategoriaController();