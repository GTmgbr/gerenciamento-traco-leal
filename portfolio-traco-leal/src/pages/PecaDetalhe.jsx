import { Link, useParams } from "react-router-dom";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageGallery from "../components/pecas/ImageGallery";
import LinksSection from "../components/pecas/LinksSection";
import FilesSection from "../components/pecas/FilesSection";

import pieces from "../data/pieces";

function PecaDetalhe() {

    const { slug } = useParams();

    const piece = pieces.find((item) => item.slug === slug);

    if (!piece) {

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

                </main>

                <Footer />

            </>

        );

    }

    return (

        <>

            <Hero />

            <Navbar />

            <main
                style={{
                    width: "1200px",
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
                        fontSize: "18px"
                    }}
                >

                    <div>

                        <strong>Cliente</strong>

                        <p>{piece.cliente}</p>

                    </div>

                    <div>

                        <strong>Categoria</strong>

                        <p>{piece.categoria}</p>

                    </div>

                    <div>

                        <strong>Ano</strong>

                        <p>{piece.ano}</p>

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

                {/* IMAGEM PRINCIPAL */}

                <section
                    style={{
                        marginBottom: "80px"
                    }}
                >

                </section>

                <ImageGallery

                    imagens={piece.imagens}

                    titulo={piece.titulo}

                />

                <LinksSection

                    links={piece.links}

                />

                <FilesSection

                    arquivos={piece.arquivos}

                />
                
            </main>

            <Footer />

        </>

    );

}

export default PecaDetalhe;