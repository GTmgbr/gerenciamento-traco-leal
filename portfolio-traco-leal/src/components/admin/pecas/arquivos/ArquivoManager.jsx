import { useState } from "react";

import { useAuth } from "../../../../context/AuthContext";

import ArquivoModal from "./ArquivoModal";

import ArquivoForm from "./ArquivoForm";

import ArquivoCard from "./ArquivoCard";

import {

    criarArquivo,

    excluirArquivo

} from "../../../../services/arquivosPeca";

function ArquivoManager({

    pecaId,

    arquivos,

    carregarArquivos

}) {

    const { token } = useAuth();

    const [modalAberto, setModalAberto] =
        useState(false);

    async function salvarArquivo(dados) {

        try {

            await criarArquivo(

                pecaId,

                dados,

                token

            );

            setModalAberto(false);

            await carregarArquivos();

        }

        catch (erro) {

            console.error(erro);

            alert("Erro ao enviar arquivo.");

        }

    }

    async function removerArquivo(arquivo) {

        const confirmar = window.confirm(

            `Deseja realmente excluir o arquivo "${arquivo.titulo}"?`

        );

        if (!confirmar) {
            return;
        }

        try {

            await excluirArquivo(

                arquivo.id,

                token

            );

            await carregarArquivos();

        }

        catch (erro) {

            console.error(erro);

            alert("Erro ao excluir arquivo.");

        }

    }

    return (

        <>

            <div

                style={{

                    background: "#fff",

                    borderRadius: 16,

                    padding: 30,

                    marginTop: 30,

                    boxShadow:
                        "0 8px 20px rgba(0,0,0,.08)",

                    color: "#333"

                }}

            >

                <div

                    style={{

                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: "center",

                        marginBottom: 25

                    }}

                >

                    <h2
                        style={{
                            margin: 0
                        }}
                    >

                        Arquivos da peça

                    </h2>

                    <button

                        onClick={() =>
                            setModalAberto(true)
                        }

                        style={botaoNovo}

                    >

                        + Novo arquivo

                    </button>

                </div>

                {

                    arquivos.length === 0 ? (

                        <p
                            style={{
                                color: "#666"
                            }}
                        >

                            Nenhum arquivo cadastrado.

                        </p>

                    ) : (

                        <div

                            style={{

                                display: "grid",

                                gridTemplateColumns:
                                    "repeat(auto-fill,minmax(260px,1fr))",

                                gap: 22

                            }}

                        >

                            {

                                arquivos.map(arquivo => (

                                    <ArquivoCard

                                        key={arquivo.id}

                                        arquivo={arquivo}

                                        onExcluir={
                                            removerArquivo
                                        }

                                    />

                                ))

                            }

                        </div>

                    )

                }

            </div>

            <ArquivoModal

                aberto={modalAberto}

                onClose={() =>
                    setModalAberto(false)
                }

            >

                <ArquivoForm

                    onSalvar={salvarArquivo}

                    onCancelar={() =>
                        setModalAberto(false)
                    }

                />

            </ArquivoModal>

        </>

    );

}

const botaoNovo = {

    background: "#2563eb",

    color: "#fff",

    border: "none",

    borderRadius: 8,

    padding: "10px 18px",

    cursor: "pointer",

    fontWeight: 600

};

export default ArquivoManager;