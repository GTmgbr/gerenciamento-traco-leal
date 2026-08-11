const DocumentoService = require("../services/DocumentoService");

class DocumentoController {

    async listar(req, res) {

        try {

            const documentos = await DocumentoService.listar();

            return res.json(documentos);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao listar documentos."

            });

        }

    }

    async criar(req, res) {

        try {

            const categorias = req.body.categorias
                ? JSON.parse(req.body.categorias)
                : [];

            const dados = {

                titulo: req.body.titulo,

                tipo: req.body.tipo,

                ano: Number(req.body.ano),

                ativo: req.body.ativo === "true",

                clienteId: Number(req.body.clienteId),

                categorias,

                arquivo: req.file

                    ? req.file.filename

                    : ""

            };

            console.log("BODY:");
            console.log(req.body);

            console.log("FILE:");
            console.log(req.file);

            console.log("DADOS:");
            console.log(dados);

            const documento = await DocumentoService.criar(dados);

            return res.status(201).json(documento);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao cadastrar documento."

            });

        }

    }

    async atualizar(req, res) {

        try {

            const categorias = req.body.categorias
                ? JSON.parse(req.body.categorias)
                : [];

            const dados = {

                titulo: req.body.titulo,

                tipo: req.body.tipo,

                ano: Number(req.body.ano),

                ativo: req.body.ativo === "true",

                clienteId: Number(req.body.clienteId),

                categorias: JSON.parse(req.body.categorias)

            };

            if (req.file) {

                dados.arquivo = req.file.filename;

            }

            const documento = await DocumentoService.atualizar(

                req.params.id,

                dados

            );

            return res.json(documento);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao atualizar documento."

            });

        }

    }

    async excluir(req, res) {

        try {

            await DocumentoService.excluir(req.params.id);

            return res.status(204).send();

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao excluir documento."

            });

        }

    }

}

module.exports = new DocumentoController();