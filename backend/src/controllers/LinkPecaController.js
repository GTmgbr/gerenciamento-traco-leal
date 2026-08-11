const LinkPecaService = require("../services/LinkPecaService");

class LinkPecaController {

    async listar(req, res) {

        try {

            const links = await LinkPecaService.listar(
                req.params.pecaId
            );

            return res.json(links);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao listar links."

            });

        }

    }

    async criar(req, res) {

        try {

            const dados = {

                pecaId: Number(req.params.pecaId),

                titulo: req.body.titulo,

                url: req.body.url

            };

            const link = await LinkPecaService.criar(dados);

            return res.status(201).json(link);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao cadastrar link."

            });

        }

    }

    async atualizar(req, res) {

        try {

            const dados = {

                titulo: req.body.titulo,

                url: req.body.url

            };

            const link = await LinkPecaService.atualizar(

                req.params.id,

                dados

            );

            return res.json(link);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao atualizar link."

            });

        }

    }

    async excluir(req, res) {

        try {

            await LinkPecaService.excluir(
                req.params.id
            );

            return res.status(204).send();

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao excluir link."

            });

        }

    }

}

module.exports = new LinkPecaController();