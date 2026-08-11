const ImagemPecaService = require("../services/ImagemPecaService");

class ImagemPecaController {

    async listar(req, res) {

        try {

            const imagens = await ImagemPecaService.listar(

                req.params.pecaId

            );

            const resultado = imagens.map(imagem => ({

                ...imagem,

                url: `http://localhost:3000/uploads/imagens/${imagem.arquivo}`

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

                pecaId: Number(req.params.pecaId),

                legenda: req.body.legenda || "",

                destaque: req.body.destaque === "true",

                ordem: Number(req.body.ordem || 0),

                arquivo: req.file.filename

            };

            const imagem = await ImagemPecaService.criar(dados);

            return res.status(201).json({

                ...imagem,

                url: `http://localhost:3000/uploads/imagens/${imagem.arquivo}`

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

            await ImagemPecaService.excluir(

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

module.exports = new ImagemPecaController();