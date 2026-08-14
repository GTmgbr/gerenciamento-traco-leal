const ImagemService = require("../services/ImagemService");

class ImagemController {

    async listar(req, res) {

        try {

            const imagens =
                await ImagemService.listarPorPeca(
                    req.params.pecaId
                );

            const resultado = imagens.map((imagem) => ({

                ...imagem,

                url:
                    `${process.env.APP_URL}/uploads/imagens-pecas/${imagem.arquivo}`

            }));

            return res.json(resultado);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao listar imagens."

            });

        }

    }

    async criar(req, res) {

        try {

            const dados = {

                titulo: req.body.titulo,

                destaque:
                    req.body.destaque === "true",

                arquivo: req.file.filename

            };

            const imagem =
                await ImagemService.criar(
                    req.params.pecaId,
                    dados
                );

            return res.status(201).json({

                ...imagem,

                url:
                    `${process.env.APP_URL}/uploads/imagens-pecas/${imagem.arquivo}`

            });

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao cadastrar imagem."

            });

        }

    }

    async excluir(req, res) {

        try {

            await ImagemService.excluir(
                req.params.id
            );

            return res.status(204).send();

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao excluir imagem."

            });

        }

    }

}

module.exports = new ImagemController();