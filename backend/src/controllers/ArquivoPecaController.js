const ArquivoPecaService = require("../services/ArquivoPecaService");
const path = require("path");

class ArquivoPecaController {

    async listar(req, res) {

        try {

            const arquivos =
                await ArquivoPecaService.listar(
                    req.params.pecaId
                );

            const resultado = arquivos.map(arquivo => ({

                ...arquivo,

                url:
                    `${process.env.APP_URL}/uploads/arquivos-pecas/${arquivo.arquivo}`

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


    async buscar(req, res) {

        try {

            const arquivo =
                await ArquivoPecaService.buscar(
                    req.params.id
                );

            if (!arquivo) {

                return res.status(404).json({

                    erro: "Arquivo não encontrado."

                });

            }

            return res.json(arquivo);

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao buscar arquivo."

            });

        }

    }


    async baixar(req, res) {

        try {

            const arquivo =
                await ArquivoPecaService.buscar(
                    req.params.id
                );

            if (!arquivo) {

                return res.status(404).json({

                    erro: "Arquivo não encontrado."

                });

            }

            const caminho = path.join(

                process.cwd(),

                "uploads",

                "arquivos-pecas",

                arquivo.arquivo

            );

            return res.download(

                caminho,

                arquivo.arquivo,

                (erro) => {

                    if (erro) {

                        console.error(
                            "Erro ao enviar arquivo:",
                            erro
                        );

                    }

                }

            );

        }

        catch (erro) {

            console.error(erro);

            return res.status(500).json({

                erro: "Erro ao baixar arquivo."

            });

        }

    }


    async criar(req, res) {

        try {

            const dados = {

                pecaId:
                    Number(req.params.pecaId),

                titulo:
                    req.body.titulo || "",

                arquivo:
                    req.file.filename

            };

            const arquivo =
                await ArquivoPecaService.criar(dados);

            return res.status(201).json({

                ...arquivo,

                url:
                    `${process.env.APP_URL}/uploads/arquivos-pecas/${arquivo.arquivo}`

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