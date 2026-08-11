import { useAuth } from "../../context/AuthContext";

function Header() {

    const { usuario } = useAuth();

    const hoje = new Date().toLocaleDateString("pt-BR", {

        day: "2-digit",
        month: "long",
        year: "numeric"

    });

    const inicial = usuario?.nome
        ? usuario.nome.charAt(0).toUpperCase()
        : "?";

    return (

        <header

            style={{

                height: "82px",

                background: "#ffffff",

                borderBottom: "1px solid #e8e8e8",

                color: "#333333",

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",

                padding: "0 40px",

                boxShadow: "0 2px 8px rgba(0,0,0,.04)"

            }}

        >

            <div>

                <h2

                    style={{

                        margin: 0,

                        color: "#333",

                        fontWeight: 700

                    }}

                >

                    Painel Administrativo

                </h2>

                <p

                    style={{

                        margin: "6px 0 0",

                        color: "#888",

                        fontSize: 14

                    }}

                >

                    {hoje}

                </p>

            </div>

            <div

                style={{

                    display: "flex",

                    alignItems: "center",

                    gap: "16px"

                }}

            >

                <div

                    style={{

                        textAlign: "right"

                    }}

                >

                    <strong>

                        {usuario?.nome}

                    </strong>

                    <br />

                    <span

                        style={{

                            color: "#888",

                            fontSize: 13

                        }}

                    >

                        Administrador

                    </span>

                </div>

                <div

                    style={{

                        width: "46px",

                        height: "46px",

                        borderRadius: "50%",

                        background: "#c40000",

                        color: "#ffffff",

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",

                        fontWeight: 700,

                        fontSize: "20px"

                    }}

                >

                    {inicial}

                </div>

            </div>

        </header>

    );

}

export default Header;