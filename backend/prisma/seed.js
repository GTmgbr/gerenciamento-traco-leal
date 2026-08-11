const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {

    // ==========================
    // Usuário administrador
    // ==========================

    const senhaHash = await bcrypt.hash("admin123", 10);

    await prisma.usuario.upsert({

        where: {

            email: "admin@tracoleal.com.br"

        },

        update: {},

        create: {

            nome: "Administrador",

            email: "admin@tracoleal.com.br",

            senha: senhaHash,

            perfil: "ADMIN"

        }

    });

    console.log("Usuário administrador criado/verificado.");

    // ==========================
    // Categorias
    // ==========================

    const categorias = [

        "Site",

        "Revisão XML",

        "Impressão",

        "Landing Page",

        "Identidade Visual",

        "Redes Sociais",

        "E-mail Marketing"

    ];

    for (const nome of categorias) {

        await prisma.categoria.upsert({

            where: {

                nome

            },

            update: {},

            create: {

                nome

            }

        });

    }

    console.log("Categorias criadas/verificadas.");

}

main()

    .catch((e) => {

        console.error(e);

    })

    .finally(async () => {

        await prisma.$disconnect();

    });