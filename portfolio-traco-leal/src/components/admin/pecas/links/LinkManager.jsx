import { useState } from "react";

import { useAuth } from "../../../../context/AuthContext";

import LinkModal from "../LinkModal";

import LinkForm from "./LinkForm";

import LinkCard from "./LinkCard";

import {
    criarLink,
    atualizarLink,
    excluirLink
} from "../../../../services/linksPeca";

function LinkManager({

    pecaId,

    links,

    carregarLinks

}) {

    const { token } = useAuth();

    const [modalAberto, setModalAberto] = useState(false);

    const [linkSelecionado, setLinkSelecionado] = useState(null);

    async function salvarLink(dados) {

        try {

            if (linkSelecionado) {

                await atualizarLink(

                    linkSelecionado.id,

                    dados,

                    token

                );

            }

            else {

                await criarLink(

                    pecaId,

                    dados,

                    token

                );

            }

            setModalAberto(false);

            setLinkSelecionado(null);

            await carregarLinks();

        }

        catch (erro) {

            console.error(erro);

            alert("Erro ao salvar link.");

        }

    }

    function novoLink() {

        setLinkSelecionado(null);

        setModalAberto(true);

    }

    function editarLink(link) {

        setLinkSelecionado(link);

        setModalAberto(true);

    }

    async function removerLink(link) {

        const confirmar = window.confirm(

            `Deseja realmente excluir o link "${link.titulo}"?`

        );

        if (!confirmar) {
            return;
        }

        try {

            await excluirLink(

                link.id,

                token

            );

            await carregarLinks();

        }

        catch (erro) {

            console.error(erro);

            alert("Erro ao excluir link.");

        }

    }

    function fecharModal() {

        setModalAberto(false);

        setLinkSelecionado(null);

    }

    return (

        <>

            <div

                style={{

                    background: "#fff",

                    borderRadius: 16,

                    padding: 30,

                    marginTop: 30,

                    boxShadow: "0 8px 20px rgba(0,0,0,.08)",

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
                        Links da peça
                    </h2>

                    <button

                        onClick={novoLink}

                        style={botaoNovo}

                    >

                        + Novo link

                    </button>

                </div>

                {

                    links.length === 0 ? (

                        <p

                            style={{

                                color: "#666",

                                marginBottom: 0

                            }}

                        >

                            Nenhum link cadastrado.

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

                                links.map(link => (

                                    <LinkCard

                                        key={link.id}

                                        link={link}

                                        onEditar={editarLink}

                                        onExcluir={removerLink}

                                    />

                                ))

                            }

                        </div>

                    )

                }

            </div>

            <LinkModal

                aberto={modalAberto}

                onClose={fecharModal}

            >

                <LinkForm

                    link={linkSelecionado}

                    onSalvar={salvarLink}

                    onCancelar={fecharModal}

                />

            </LinkModal>

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

export default LinkManager;