const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class CategoriaService {

    async listar() {

        return await prisma.categoria.findMany({

            orderBy: {

                nome: "asc"

            }

        });

    }

}

module.exports = new CategoriaService();