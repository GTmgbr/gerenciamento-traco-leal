const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class PecaService {

    async listar() {

        return prisma.peca.findMany({

            include: {
                cliente: true
            },

            orderBy: {
                titulo: "asc"
            }

        });

    }

    async buscar(id) {

        return prisma.peca.findUnique({

            where: {
                id: Number(id)
            },

            include: {

                cliente: true,

                imagens: true,

                links: true,

                arquivos: true

            }

        });

    }

    async criar(dados) {

        return prisma.peca.create({

            data: {

                titulo: dados.titulo,

                slug: dados.slug,

                descricao: dados.descricao,

                categoria: dados.categoria,

                ano: dados.ano,

                cliente: {

                    connect: {

                        id: dados.clienteId

                    }

                }

            },

            include: {

                cliente: true

            }

        });

    }

    async atualizar(id, dados) {

        return prisma.peca.update({

            where: {

                id: Number(id)

            },

            data: {

                titulo: dados.titulo,

                slug: dados.slug,

                descricao: dados.descricao,

                categoria: dados.categoria,

                ano: dados.ano,

                cliente: {

                    connect: {

                        id: dados.clienteId

                    }

                }

            },

            include: {

                cliente: true

            }

        });

    }

    async excluir(id) {

        return prisma.peca.delete({

            where: {

                id: Number(id)

            }

        });

    }

}

module.exports = new PecaService();