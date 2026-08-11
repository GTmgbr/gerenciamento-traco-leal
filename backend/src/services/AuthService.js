const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class AuthService {

    async buscarPorEmail(email) {

        return await prisma.usuario.findUnique({

            where: {
                email
            }

        });

    }

}

module.exports = new AuthService();