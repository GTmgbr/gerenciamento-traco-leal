import { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import ImagemModal from "./ImagemModal";
import ImagemForm from "./ImagemForm";
import ImagemCard from "./ImagemCard";

import {
    criarImagem,
    excluirImagem
} from "../../../../services/imagensPeca";

function ImagemManager({

    pecaId,

    imagens,

    carregarImagens

}) {

    const [modalAberto, setModalAberto] = useState(false);

    const { token } = useAuth();

    async function salvarImagem(dados) {

        try {

            await criarImagem(

                pecaId,

                dados,

                token

            );

            setModalAberto(false);

            carregarImagens();

        }

        catch (erro) {

            console.error(erro);

            alert("Erro ao enviar imagem.");

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

                        Imagens da peça

                    </h2>

                    <button

                        onClick={() =>

                            setModalAberto(true)

                        }

                        style={{

                            background: "#2563eb",

                            color: "#fff",

                            border: "none",

                            borderRadius: 8,

                            padding: "10px 18px",

                            cursor: "pointer",

                            fontWeight: 600

                        }}

                    >

                        + Nova imagem

                    </button>

                </div>

                {
                    imagens.length === 0 ? (

                        <p

                            style={{

                                color: "#666"

                            }}

                        >

                            Nenhuma imagem cadastrada.

                        </p>

                    ) : (

                        <div

                            style={{

                                display: "grid",

                                gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",

                                gap: 22

                            }}

                        >

                            {

                                imagens.map(imagem => (

                                    <ImagemCard

                                        key={imagem.id}

                                        imagem={imagem}

                                        onExcluir={removerImagem}

                                    />

                                ))

                            }

                        </div>

                    )

                }

            </div>

            <ImagemModal

                aberto={modalAberto}

                onClose={() =>

                    setModalAberto(false)

                }

            >

                <ImagemForm

                    onSalvar={salvarImagem}

                    onCancelar={() =>

                        setModalAberto(false)

                    }

                />

            </ImagemModal>

        </>

    );

    async function removerImagem(imagem) {

        const confirmar = window.confirm(
            `Deseja realmente excluir "${imagem.legenda || "esta imagem"}"?`
        );

        if (!confirmar) {
            return;
        }

        try {

            await excluirImagem(
                imagem.id,
                token
            );

            carregarImagens();

        }
        catch (erro) {

            console.error(erro);

            alert("Erro ao excluir imagem.");

        }

    }

}

export default ImagemManager;