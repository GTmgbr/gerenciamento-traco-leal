const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ImagemPecaService {

    async listar(pecaId) {

        return await prisma.imagem.findMany({

            where: {
                pecaId: Number(pecaId)
            },

            orderBy: {
                ordem: "asc"
            }

        });

    }

    async criar(dados) {

        return await prisma.imagem.create({

            data: {

                legenda: dados.legenda,

                arquivo: dados.arquivo,

                destaque: dados.destaque,

                ordem: dados.ordem,

                peca: {

                    connect: {
                        id: Number(dados.pecaId)
                    }

                }

            }

        });

    }

    async excluir(id) {

        return await prisma.imagem.delete({

            where: {
                id: Number(id)
            }

        });

    }

}

module.exports = new ImagemPecaService();