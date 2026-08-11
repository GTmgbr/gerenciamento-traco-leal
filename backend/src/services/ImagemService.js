const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ImagemService {

    async listarPorPeca(pecaId) {

        return prisma.imagem.findMany({

            where: {

                pecaId: Number(pecaId)

            },

            orderBy: {

                ordem: "asc"

            }

        });

    }

    async criar(pecaId, dados) {

        return prisma.imagem.create({

            data: {

                titulo: dados.titulo,

                arquivo: dados.arquivo,

                destaque: dados.destaque,

                ordem: 0,

                peca: {

                    connect: {

                        id: Number(pecaId)

                    }

                }

            }

        });

    }

    async excluir(id) {

        return prisma.imagem.delete({

            where: {

                id: Number(id)

            }

        });

    }

}

module.exports = new ImagemService();