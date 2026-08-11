function LinkCard({

    link,

    onEditar,

    onExcluir

}) {

    return (

        <div

            style={{

                background: "#fff",

                border: "1px solid #ececec",

                borderRadius: 14,

                padding: 20,

                boxShadow: "0 8px 20px rgba(0,0,0,.08)"

            }}

        >

            <div

                style={{

                    fontSize: 18,

                    fontWeight: 700,

                    color: "#333",

                    marginBottom: 10

                }}

            >

                {link.titulo}

            </div>

            <a

                href={link.url}

                target="_blank"

                rel="noopener noreferrer"

                style={{

                    display: "block",

                    color: "#2563eb",

                    textDecoration: "none",

                    wordBreak: "break-all",

                    lineHeight: 1.5,

                    marginBottom: 20

                }}

            >

                {link.url}

            </a>

            <div

                style={{

                    display: "flex",

                    gap: 10

                }}

            >

                <button

                    onClick={() => onEditar(link)}

                    style={botaoEditar}

                >

                    Editar

                </button>

                <button

                    onClick={() => onExcluir(link)}

                    style={botaoExcluir}

                >

                    Excluir

                </button>

            </div>

        </div>

    );

}

const botaoEditar = {

    background: "#2563eb",

    color: "#fff",

    border: "none",

    borderRadius: 8,

    padding: "9px 15px",

    cursor: "pointer",

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

export default LinkCard;