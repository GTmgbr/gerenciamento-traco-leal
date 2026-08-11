import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageGallery({ imagens, titulo }) {

    const [indiceAtual, setIndiceAtual] = useState(0);
    const [fade, setFade] = useState(true);

    function trocarImagem(novoIndice) {

        setFade(false);

        setTimeout(() => {
            setIndiceAtual(novoIndice);
            setFade(true);
        }, 180);

    }

    function proximaImagem() {

        const novoIndice =
            indiceAtual === imagens.length - 1
                ? 0
                : indiceAtual + 1;

        trocarImagem(novoIndice);

    }

    function imagemAnterior() {

        const novoIndice =
            indiceAtual === 0
                ? imagens.length - 1
                : indiceAtual - 1;

        trocarImagem(novoIndice);

    }

    return (

        <section
            style={{
                marginBottom: "90px"
            }}
        >

            <h2
                style={{
                    fontSize: "30px",
                    marginBottom: "35px",
                    color: "#333333"
                }}
            >

                Galeria

            </h2>

            {/* Imagem principal */}

            <div
                style={{
                    width: "70%",
                    position: "relative",
                    marginBottom: "25px"
                }}
            >

                <img

                    src={imagens[indiceAtual]}

                    alt={titulo}

                    style={{

                        width: "100%",

                        borderRadius: "18px",

                        boxShadow: "0 12px 30px rgba(0,0,0,.15)",

                        opacity: fade ? 1 : 0,

                        transition: "opacity .35s ease"

                    }}

                />

                {/* Botão anterior */}

                <button

                    onClick={imagemAnterior}

                    style={{

                        position: "absolute",

                        left: "20px",

                        top: "50%",

                        transform: "translateY(-50%)",

                        width: "50px",

                        height: "50px",

                        borderRadius: "50%",

                        border: "none",

                        background: "rgba(0,0,0,.55)",

                        color: "#fff",

                        cursor: "pointer",

                        display: "flex",

                        justifyContent: "center",

                        alignItems: "center"

                    }}

                >

                    <FaChevronLeft />

                </button>

                {/* Botão próximo */}

                <button

                    onClick={proximaImagem}

                    style={{

                        position: "absolute",

                        right: "20px",

                        top: "50%",

                        transform: "translateY(-50%)",

                        width: "50px",

                        height: "50px",

                        borderRadius: "50%",

                        border: "none",

                        background: "rgba(0,0,0,.55)",

                        color: "#fff",

                        cursor: "pointer",

                        display: "flex",

                        justifyContent: "center",

                        alignItems: "center"

                    }}

                >

                    <FaChevronRight />

                </button>

            </div>

            {/* Indicadores */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "12px",
                    marginBottom: "35px",
                    width: "70%"
                }}
            >

                {

                    imagens.map((_, index) => (

                        <div

                            key={index}

                            onClick={() => trocarImagem(index)}

                            style={{

                                width: indiceAtual === index ? "14px" : "10px",

                                height: indiceAtual === index ? "14px" : "10px",

                                borderRadius: "50%",

                                background:
                                    indiceAtual === index
                                        ? "#b91c1c"
                                        : "#cfcfcf",

                                cursor: "pointer",

                                transition: "all .25s ease"

                            }}

                        />

                    ))

                }

            </div>

            {/* Miniaturas */}

            <div

                style={{

                    display: "flex",

                    gap: "18px",

                    flexWrap: "wrap"

                }}

            >

                {

                    imagens.map((imagem, index) => (

                        <img

                            key={index}

                            src={imagem}

                            alt={titulo}

                            onClick={() => trocarImagem(index)}

                            style={{

                                width: "170px",

                                height: "110px",

                                objectFit: "cover",

                                borderRadius: "10px",

                                cursor: "pointer",

                                transition: ".3s",

                                border:

                                    indiceAtual === index

                                        ? "3px solid #b91c1c"

                                        : "2px solid #dddddd"

                            }}

                            onMouseEnter={(e) => {

                                e.target.style.transform = "scale(1.05)";

                            }}

                            onMouseLeave={(e) => {

                                e.target.style.transform = "scale(1)";

                            }}

                        />

                    ))

                } 

            </div>

        </section>

    );

}

export default ImageGallery;