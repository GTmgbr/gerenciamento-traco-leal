import { useEffect, useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";

import {
buscarResumoDashboard,
buscarAtividadesDashboard
} from "../../services/dashboard";

function Dashboard() {


const [resumo, setResumo] = useState({

    clientes: 0,
    contratos: 0,
    atestados: 0,
    pecas: 0

});

const [atividades, setAtividades] =
    useState([]);

const [carregando, setCarregando] =
    useState(true);

useEffect(() => {

    async function carregarDashboard() {

        try {

            const [
                dadosResumo,
                dadosAtividades
            ] = await Promise.all([

                buscarResumoDashboard(),

                buscarAtividadesDashboard()

            ]);

            setResumo(dadosResumo);

            setAtividades(dadosAtividades);

        }

        catch (erro) {

            console.error(erro);

        }

        finally {

            setCarregando(false);

        }

    }

    carregarDashboard();

}, []);

if (carregando) {

    return (

        <AdminLayout>

            <h1
                style={{
                    marginTop: 0
                }}
            >

                Dashboard

            </h1>

            <p>

                Carregando informações...

            </p>

        </AdminLayout>

    );

}

return (

    <AdminLayout>

        <h1

            style={{

                marginTop: 0,

                marginBottom: 35

            }}

        >

            Dashboard

        </h1>

        <div

            style={{

                display: "grid",

                gridTemplateColumns:
                    "repeat(4, 1fr)",

                gap: 22,

                marginBottom: 35

            }}

        >

            <CardResumo

                titulo="Clientes"

                valor={resumo.clientes}

                icone="👥"

            />

            <CardResumo

                titulo="Contratos"

                valor={resumo.contratos}

                icone="📄"

            />

            <CardResumo

                titulo="Atestados"

                valor={resumo.atestados}

                icone="📋"

            />

            <CardResumo

                titulo="Peças"

                valor={resumo.pecas}

                icone="🎨"

            />

        </div>

        <div

            style={{

                background: "#fff",

                borderRadius: 16,

                padding: 30,

                boxShadow:
                    "0 8px 20px rgba(0,0,0,.08)",

                color: "#333"

            }}

        >

            <h2

                style={{

                    marginTop: 0,

                    marginBottom: 25

                }}

            >

                Últimas atividades

            </h2>

            {

                atividades.length === 0 ? (

                    <p

                        style={{

                            color: "#666"

                        }}

                    >

                        Nenhuma atividade registrada.

                    </p>

                ) : (

                    <div>

                        {

                            atividades.map(

                                atividade => (

                                    <Atividade

                                        key={`${atividade.tipo}-${atividade.id}-${atividade.data}`}

                                        atividade={atividade}

                                    />

                                )

                            )

                        }

                    </div>

                )

            }

        </div>

    </AdminLayout>

);

}

function CardResumo({


titulo,

valor,

icone


}) {


return (

    <div

        style={{

            background: "#fff",

            borderRadius: 16,

            padding: 25,

            boxShadow:
                "0 8px 20px rgba(0,0,0,.08)",

            color: "#333"

        }}

    >

        <div

            style={{

                display: "flex",

                justifyContent:
                    "space-between",

                alignItems: "center"

            }}

        >

            <div>

                <div

                    style={{

                        color: "#777",

                        fontSize: 15,

                        marginBottom: 10

                    }}

                >

                    {titulo}

                </div>

                <div

                    style={{

                        fontSize: 38,

                        fontWeight: 700,

                        color: "#c40000"

                    }}

                >

                    {valor}

                </div>

            </div>

            <div

                style={{

                    fontSize: 35

                }}

            >

                {icone}

            </div>

        </div>

    </div>

);


}

function Atividade({


atividade


}) {


const configuracao = {

    cliente: {

        icone: "👤",

        nome: "Cliente"

    },

    contrato: {

        icone: "📄",

        nome: "Contrato"

    },

    atestado: {

        icone: "📋",

        nome: "Atestado"

    },

    peca: {

        icone: "🎨",

        nome: "Peça"

    }

};

const config =
    configuracao[atividade.tipo];

const data = new Date(
    atividade.data
);

const dataFormatada =
    data.toLocaleDateString(
        "pt-BR",
        {

            day: "2-digit",

            month: "2-digit",

            year: "numeric"

        }

    );

const horaFormatada =
    data.toLocaleTimeString(
        "pt-BR",
        {

            hour: "2-digit",

            minute: "2-digit"

        }

    );

return (

    <div

        style={{

            display: "flex",

            alignItems: "center",

            gap: 18,

            padding: "18px 0",

            borderBottom:
                "1px solid #eee"

        }}

    >

        <div

            style={{

                width: 45,

                height: 45,

                borderRadius: "50%",

                background: "#f5f5f5",

                display: "flex",

                alignItems: "center",

                justifyContent:
                    "center",

                fontSize: 20,

                flexShrink: 0

            }}

        >

            {config.icone}

        </div>

        <div

            style={{

                flex: 1

            }}

        >

            <div

                style={{

                    fontWeight: 600,

                    marginBottom: 5

                }}

            >

                {config.nome}{" "}

                {atividade.acao}

            </div>

            <div

                style={{

                    color: "#555"

                }}

            >

                {atividade.titulo}

            </div>

        </div>

        <div

            style={{

                color: "#888",

                fontSize: 14,

                textAlign: "right",

                whiteSpace: "nowrap"

            }}

        >

            <div>

                {dataFormatada}

            </div>

            <div>

                {horaFormatada}

            </div>

        </div>

    </div>

);

}

export default Dashboard;
