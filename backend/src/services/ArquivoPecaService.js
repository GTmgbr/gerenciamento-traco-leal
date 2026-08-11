const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ArquivoPecaService {

    async listar(pecaId) {

        return await prisma.arquivo.findMany({

            where: {
                pecaId: Number(pecaId)
            },

            orderBy: {
                id: "asc"
            }

        });

    }

    async criar(dados) {

        return await prisma.arquivo.create({

            data: {

                titulo: dados.titulo,

                arquivo: dados.arquivo,

                peca: {

                    connect: {
                        id: Number(dados.pecaId)
                    }

                }

            }

        });

    }

    async excluir(id) {

        return await prisma.arquivo.delete({

            where: {
                id: Number(id)
            }

        });

    }

}

module.exports = new ArquivoPecaService();