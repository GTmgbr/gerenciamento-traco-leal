const ClienteService = require("../services/ClienteService");

class ClienteController {

    async listar(req, res) {

        try {

            const clientes = await ClienteService.listar();

            return res.json(clientes);

        }

        catch (erro) {

            return res.status(500).json({

                erro: "Erro ao listar clientes."

            });

        }

    }

    async criar(req, res) {

        try {

            const dados = {

                ...req.body,

                ativo: req.body.ativo === "true",

                logo: req.file
                    ? req.file.filename
                    : ""

            };

            const cliente = await ClienteService.criar(dados);

            return res.status(201).json(cliente);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao cadastrar cliente."

            });

        }

    }

    async atualizar(req, res) {

        try {

            const dados = {

                ...req.body,

                ativo: req.body.ativo === "true"

            };

            if (req.file) {

                dados.logo = req.file.filename;

            }

            const cliente = await ClienteService.atualizar(

                Number(req.params.id),

                dados

            );

            return res.json(cliente);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao atualizar cliente."

            });

        }

    }

    async excluir(req, res) {

        try {

            await ClienteService.excluir(
                Number(req.params.id)
            );

            return res.status(204).send();

        }

        catch (erro) {

            console.error(erro);

            if (
                erro.codigo ===
                "CLIENTE_COM_VINCULOS"
            ) {

                return res.status(409).json({

                    erro:
                        "Não é possível excluir este cliente porque ele possui dados associados.",

                    detalhes: {

                        documentos:
                            erro.quantidadeDocumentos,

                        pecas:
                            erro.quantidadePecas

                    }

                });

            }

            if (
                erro.codigo ===
                "CLIENTE_NAO_ENCONTRADO"
            ) {

                return res.status(404).json({

                    erro: "Cliente não encontrado."

                });

            }

            return res.status(500).json({

                erro: "Erro ao excluir cliente."

            });

        }

        }

}

module.exports = new ClienteController();