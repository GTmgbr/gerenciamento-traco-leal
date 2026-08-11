const PecaService = require("../services/PecaService");

class PecaController {

    async listar(req, res) {

        try {

            const pecas = await PecaService.listar();

            return res.json(pecas);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao listar peças."

            });

        }

    }

    async buscar(req, res) {

        try {

            const peca = await PecaService.buscar(req.params.id);

            return res.json(peca);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao buscar peça."

            });

        }

    }

    async criar(req, res) {

        try {

            const dados = {

                titulo: req.body.titulo,

                slug: req.body.slug,

                descricao: req.body.descricao,

                categoria: req.body.categoria,

                ano: Number(req.body.ano),

                clienteId: Number(req.body.clienteId)

            };

            const peca = await PecaService.criar(dados);

            return res.status(201).json(peca);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao cadastrar peça."

            });

        }

    }

    async atualizar(req, res) {

        try {

            const dados = {

                titulo: req.body.titulo,

                slug: req.body.slug,

                descricao: req.body.descricao,

                categoria: req.body.categoria,

                ano: Number(req.body.ano),

                clienteId: Number(req.body.clienteId)

            };

            const peca = await PecaService.atualizar(

                req.params.id,

                dados

            );

            return res.json(peca);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao atualizar peça."

            });

        }

    }

    async excluir(req, res) {

        try {

            await PecaService.excluir(req.params.id);

            return res.status(204).send();

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao excluir peça."

            });

        }

    }

}

module.exports = new PecaController();