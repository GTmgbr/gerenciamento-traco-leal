const ArquivoPecaService = require("../services/ArquivoPecaService");

class ArquivoPecaController {

    async listar(req, res) {

        try {

            const arquivos = await ArquivoPecaService.listar(
                req.params.pecaId
            );

            const resultado = arquivos.map(arquivo => ({

                ...arquivo,

                url:
                    `http://localhost:3000/uploads/arquivos-pecas/${arquivo.arquivo}`

            }));

            return res.json(resultado);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao listar arquivos."

            });

        }

    }

    async criar(req, res) {

        try {

            const dados = {

                pecaId: Number(req.params.pecaId),

                titulo: req.body.titulo || "",

                arquivo: req.file.filename

            };

            const arquivo =
                await ArquivoPecaService.criar(dados);

            return res.status(201).json({

                ...arquivo,

                url:
                    `http://localhost:3000/uploads/arquivos-pecas/${arquivo.arquivo}`

            });

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao cadastrar arquivo."

            });

        }

    }

    async excluir(req, res) {

        try {

            await ArquivoPecaService.excluir(
                req.params.id
            );

            return res.status(204).send();

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao excluir arquivo."

            });

        }

    }

}

module.exports = new ArquivoPecaController();