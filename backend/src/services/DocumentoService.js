const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class DocumentoService {

    async listar() {

        return await prisma.documento.findMany({

            include: {

                cliente: true,

                categorias: true

            },

            orderBy: {

                titulo: "asc"

            }

        });

    }

    async criar(dados) {

        return await prisma.documento.create({

            data: {

                titulo: dados.titulo,

                tipo: dados.tipo,

                ano: dados.ano,

                arquivo: dados.arquivo,

                ativo: dados.ativo,

                cliente: {

                    connect: {

                        id: Number(dados.clienteId)

                    }

                },

                categorias: {

                    connect: dados.categorias.map(id => ({

                        id: Number(id)

                    }))

                }

            },

            include: {

                cliente: true,

                categorias: true

            }

        });

    }

    async atualizar(id, dados) {

        const categorias = dados.categorias;

        delete dados.categorias;

        return await prisma.documento.update({

            where: {

                id: Number(id)

            },

            data: {

                ...dados,

                categorias: {

                    set: [],

                    connect: categorias.map(id => ({

                        id

                    }))

                }

            },

            include: {

                cliente: true,

                categorias: true

            }

        });

    }

    async excluir(id) {

        return await prisma.documento.delete({

            where: {

                id: Number(id)

            }

        });

    }

}

module.exports = new DocumentoService();