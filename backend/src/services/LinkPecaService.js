const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class LinkPecaService {

    async listar(pecaId) {

        return await prisma.link.findMany({

            where: {
                pecaId: Number(pecaId)
            },

            orderBy: {
                id: "asc"
            }

        });

    }

    async criar(dados) {

        return await prisma.link.create({

            data: {

                titulo: dados.titulo,

                url: dados.url,

                peca: {

                    connect: {
                        id: Number(dados.pecaId)
                    }

                }

            }

        });

    }

    async atualizar(id, dados) {

        return await prisma.link.update({

            where: {
                id: Number(id)
            },

            data: {

                titulo: dados.titulo,

                url: dados.url

            }

        });

    }

    async excluir(id) {

        return await prisma.link.delete({

            where: {
                id: Number(id)
            }

        });

    }

}

module.exports = new LinkPecaService();