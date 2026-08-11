function ImagemCard({

    imagem,

    onExcluir

}) {

    console.log(imagem);

    return (

        <div

            style={{

                background: "#fff",

                borderRadius: 14,

                overflow: "hidden",

                boxShadow: "0 8px 20px rgba(0,0,0,.08)",

                border: "1px solid #ececec"

            }}

        >

            <img

                src={imagem.url}

                alt={imagem.legenda}

                style={{

                    width: "100%",

                    height: 180,

                    objectFit: "cover",

                    display: "block"

                }}

            />

            <div

                style={{

                    padding: 18

                }}

            >

                <div

                    style={{

                        fontWeight: 700,

                        marginBottom: 10,

                        color: "#333"

                    }}

                >

                    {imagem.legenda || "Sem legenda"}

                </div>

                {

                    imagem.destaque && (

                        <div

                            style={{

                                display: "inline-block",

                                background: "#ffe8a3",

                                color: "#8a5d00",

                                padding: "5px 10px",

                                borderRadius: 999,

                                fontSize: 13,

                                fontWeight: 600,

                                marginBottom: 15

                            }}

                        >

                            ⭐ Destaque

                        </div>

                    )

                }

                <div

                    style={{

                        marginTop: 15

                    }}

                >

                    <button

                        onClick={() => onExcluir(imagem)}

                        style={{

                            background: "#c40000",

                            color: "#fff",

                            border: "none",

                            borderRadius: 8,

                            padding: "10px 16px",

                            cursor: "pointer",

                            fontWeight: 600

                        }}

                    >

                        Excluir

                    </button>

                </div>

            </div>

        </div>

    );

}

export default ImagemCard;