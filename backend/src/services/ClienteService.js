const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ClienteService {

    async listar() {

        return await prisma.cliente.findMany({

            orderBy: {
                nome: "asc"

            }

        });

    }

    async criar(dados) {

        return await prisma.cliente.create({

            data: dados

        });

    }

    async atualizar(id, dados) {

    return await prisma.cliente.update({

        where: {

            id: Number(id)

        },

        data: dados

    });

    }

    async excluir(id) {

        
        const clienteId = Number(id);

        const cliente = await prisma.cliente.findUnique({

            where: {
                id: clienteId
            },

            include: {

                documentos: {
                    select: {
                        id: true
                    }
                },

                pecas: {
                    select: {
                        id: true
                    }
                }

            }

        });

        if (!cliente) {

            const erro = new Error(
                "Cliente não encontrado."
            );

            erro.codigo = "CLIENTE_NAO_ENCONTRADO";

            throw erro;

        }

        const quantidadeDocumentos =
            cliente.documentos.length;

        const quantidadePecas =
            cliente.pecas.length;

        if (
            quantidadeDocumentos > 0 ||
            quantidadePecas > 0
        ) {

            const erro = new Error(
                "Não é possível excluir este cliente porque existem documentos ou peças associados a ele."
            );

            erro.codigo = "CLIENTE_COM_VINCULOS";

            erro.quantidadeDocumentos =
                quantidadeDocumentos;

            erro.quantidadePecas =
                quantidadePecas;

            throw erro;

        }

        return await prisma.cliente.delete({

            where: {

                id: clienteId

            }

        });
        

        }


}

module.exports = new ClienteService();