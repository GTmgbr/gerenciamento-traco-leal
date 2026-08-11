const DashboardService = require("../services/DashboardService");

class DashboardController {

async resumo(req, res) {

    try {

        const dados =
            await DashboardService.resumo();

        return res.json(dados);

    }

    catch (erro) {

        console.error(erro);

        return res.status(500).json({

            erro: "Erro ao carregar resumo do dashboard."

        });

    }

}

async atividades(req, res) {

    try {

        const dados =
            await DashboardService.atividades();

        return res.json(dados);

    }

    catch (erro) {

        console.error(erro);

        return res.status(500).json({

            erro: "Erro ao carregar atividades."

        });

    }

}

}

module.exports = new DashboardController();
