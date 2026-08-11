const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class DashboardService {

async resumo() {

    const [

        clientes,

        contratos,

        atestados,

        pecas

    ] = await Promise.all([

        prisma.cliente.count(),

        prisma.documento.count({
            where: {
                tipo: "CONTRATO"
            }
        }),

        prisma.documento.count({
            where: {
                tipo: "ATESTADO"
            }
        }),

        prisma.peca.count()

    ]);

    return {

        clientes,

        contratos,

        atestados,

        pecas

    };

}

async atividades() {

    const [

        clientes,

        documentos,

        pecas

    ] = await Promise.all([

        prisma.cliente.findMany({

            select: {

                id: true,

                nome: true,

                createdAt: true,

                updatedAt: true

            }

        }),

        prisma.documento.findMany({

            select: {

                id: true,

                titulo: true,

                tipo: true,

                createdAt: true,

                updatedAt: true

            }

        }),

        prisma.peca.findMany({

            select: {

                id: true,

                titulo: true,

                createdAt: true,

                updatedAt: true

            }

        })

    ]);

    const atividades = [];

    clientes.forEach(cliente => {

        atividades.push({

            tipo: "cliente",

            acao:
                cliente.updatedAt > cliente.createdAt
                    ? "alterado"
                    : "criado",

            titulo: cliente.nome,

            data:
                cliente.updatedAt > cliente.createdAt
                    ? cliente.updatedAt
                    : cliente.createdAt,

            id: cliente.id

        });

    });

    documentos.forEach(documento => {

        atividades.push({

            tipo:
                documento.tipo === "CONTRATO"
                    ? "contrato"
                    : "atestado",

            acao: "cadastrado",

            titulo: documento.titulo,

            data: documento.createdAt,

            id: documento.id

        });

    });

    pecas.forEach(peca => {

        atividades.push({

            tipo: "peca",

            acao:
                peca.updatedAt > peca.createdAt
                    ? "alterada"
                    : "criada",

            titulo: peca.titulo,

            data:
                peca.updatedAt > peca.createdAt
                    ? peca.updatedAt
                    : peca.createdAt,

            id: peca.id

        });

    });

    atividades.sort(

        (a, b) =>
            new Date(b.data) - new Date(a.data)

    );

    return atividades.slice(0, 10);

}


}

module.exports = new DashboardService();
