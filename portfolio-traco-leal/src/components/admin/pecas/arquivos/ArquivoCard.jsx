function ArquivoCard({

    arquivo,

    onExcluir

}) {

    return (

        <div

            style={{

                background: "#fff",

                border: "1px solid #ececec",

                borderRadius: 14,

                padding: 20,

                boxShadow:
                    "0 8px 20px rgba(0,0,0,.08)"

            }}

        >

            <div

                style={{

                    fontSize: 18,

                    fontWeight: 700,

                    color: "#333",

                    marginBottom: 8

                }}

            >

                📁 {arquivo.titulo}

            </div>

            <div

                style={{

                    color: "#777",

                    fontSize: 14,

                    marginBottom: 20,

                    wordBreak: "break-all"

                }}

            >

                {arquivo.arquivo}

            </div>

            <div

                style={{

                    display: "flex",

                    gap: 10

                }}

            >

                <a

                    href={arquivo.url}

                    target="_blank"

                    rel="noopener noreferrer"

                    style={botaoAbrir}

                >

                    Abrir

                </a>

                <button

                    onClick={() =>
                        onExcluir(arquivo)
                    }

                    style={botaoExcluir}

                >

                    Excluir

                </button>

            </div>

        </div>

    );

}

const botaoAbrir = {

    background: "#2563eb",

    color: "#fff",

    borderRadius: 8,

    padding: "9px 15px",

    textDecoration: "none",

    fontWeight: 600

};

const botaoExcluir = {

    background: "#c40000",

    color: "#fff",

    border: "none",

    borderRadius: 8,

    padding: "9px 15px",

    cursor: "pointer",

    fontWeight: 600

};

export default ArquivoCard;