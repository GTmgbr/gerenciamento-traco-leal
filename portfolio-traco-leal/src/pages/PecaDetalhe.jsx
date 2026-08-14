import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageGallery from "../components/pecas/ImageGallery";
import LinksSection from "../components/pecas/LinksSection";
import FilesSection from "../components/pecas/FilesSection";

import { buscarPecaPorSlug } from "../services/pecas";
import getBackendUrl from "../services/url";

function PecaDetalhe() {

    const { slug } = useParams();

    const [piece, setPiece] = useState(null);

    const [carregando, setCarregando] = useState(true);

    const [erro, setErro] = useState(false);


    useEffect(() => {

        async function carregarPeca() {

            try {

                setCarregando(true);

                setErro(false);

                const dados =
                    await buscarPecaPorSlug(slug);

                setPiece(dados);

            }

            catch (erro) {

                console.error(
                    "Erro ao carregar peça:",
                    erro
                );

                setErro(true);

            }

            finally {

                setCarregando(false);

            }

        }

        carregarPeca();

    }, [slug]);


    if (carregando) {

        return (

            <>

                <Hero />

                <Navbar />

                <main
                    style={{
                        padding: "120px 0",
                        textAlign: "center"
                    }}
                >

                    <p
                        style={{
                            color: "#666666",
                            fontSize: "20px"
                        }}
                    >

                        Carregando peça...

                    </p>

                </main>

                <Footer />

            </>

        );

    }


    if (erro || !piece) {

        return (

            <>

                <Hero />

                <Navbar />

                <main
                    style={{
                        padding: "120px 0",
                        textAlign: "center"
                    }}
                >

                    <h1
                        style={{
                            color: "#333333",
                            fontSize: "38px"
                        }}
                    >

                        Peça não encontrada

                    </h1>

                    <p
                        style={{
                            marginTop: "20px",
                            color: "#666666"
                        }}
                    >

                        Esta peça não existe ou foi removida.

                    </p>

                    <Link
                        to="/pecas"
                        style={{
                            display: "inline-block",
                            marginTop: "30px",
                            color: "#b91c1c",
                            fontWeight: "600",
                            textDecoration: "none"
                        }}
                    >

                        ← Voltar para Peças

                    </Link>

                </main>

                <Footer />

            </>

        );

    }


    /*
        URL base para as imagens cadastradas
        no banco de dados.
    */

    const imagens = (piece.imagens || []).map(

        (imagem) =>
            getBackendUrl(
                `/uploads/imagens/${imagem.arquivo}`
            )

    );


    /*
        Prepara os arquivos para o componente
        FilesSection.
    */

    const arquivos = (piece.arquivos || []).map(

        (arquivo) => ({

            ...arquivo,

            url:
                getBackendUrl(
                    `/uploads/arquivos-pecas/${arquivo.arquivo}`
                )

        })

    );


    return (

        <>

            <Hero />

            <Navbar />

            <main
                style={{
                    width: "1200px",
                    maxWidth: "90%",
                    margin: "70px auto",
                    color: "#333333"
                }}
            >

                {/* BOTÃO VOLTAR */}

                <Link
                    to="/pecas"
                    style={{
                        color: "#b91c1c",
                        fontWeight: "600",
                        textDecoration: "none",
                        fontSize: "18px"
                    }}
                >

                    ← Voltar para Peças

                </Link>


                {/* TÍTULO */}

                <h1
                    style={{
                        fontSize: "44px",
                        marginTop: "35px",
                        marginBottom: "15px",
                        fontWeight: "700"
                    }}
                >

                    {piece.titulo}

                </h1>


                {/* INFORMAÇÕES */}

                <div
                    style={{
                        display: "flex",
                        gap: "50px",
                        marginBottom: "50px",
                        fontSize: "18px",
                        flexWrap: "wrap"
                    }}
                >

                    <div>

                        <strong>
                            Cliente
                        </strong>

                        <p>
                            {piece.cliente?.nome || "Não informado"}
                        </p>

                    </div>


                    <div>

                        <strong>
                            Categoria
                        </strong>

                        <p>
                            {piece.categoria}
                        </p>

                    </div>


                    <div>

                        <strong>
                            Ano
                        </strong>

                        <p>
                            {piece.ano}
                        </p>

                    </div>

                </div>


                {/* DESCRIÇÃO */}

                <section
                    style={{
                        marginBottom: "70px"
                    }}
                >

                    <h2
                        style={{
                            fontSize: "30px",
                            marginBottom: "25px"
                        }}
                    >

                        Sobre o projeto

                    </h2>

                    <p
                        style={{
                            lineHeight: "34px",
                            color: "#555555",
                            fontSize: "19px",
                            textAlign: "justify"
                        }}
                    >

                        {piece.descricao}

                    </p>

                </section>


                {/* GALERIA */}

                {imagens.length > 0 && (

                    <ImageGallery

                        imagens={imagens}

                        titulo={piece.titulo}

                    />

                )}


                {/* LINKS */}

                <LinksSection

                    links={piece.links || []}

                />


                {/* ARQUIVOS */}

                <FilesSection

                    arquivos={arquivos}

                />

            </main>

            <Footer />

        </>

    );

}

export default PecaDetalhe;