import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { setUsuario, setToken } = useAuth();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function handleSubmit(e) {

        e.preventDefault();

        setErro("");
        setCarregando(true);

        try {

            const resposta = await login(email, senha);

            setUsuario(resposta.usuario);
            setToken(resposta.token);

            navigate("/admin/dashboard");

        } catch {

            setErro("E-mail ou senha inválidos.");

        } finally {

            setCarregando(false);

        }

    }

    return (

        <div
            style={{
                minHeight: "100vh",
                backgroundImage: "url('/images/banner.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
            }}
        >

            {/* Overlay */}

            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,.35)"
                }}
            />

            {/* Card */}

            <div
                style={{
                    position: "relative",
                    width: "430px",
                    background: "#fff",
                    borderRadius: "22px",
                    padding: "45px",
                    boxShadow: "0 25px 70px rgba(0,0,0,.30)"
                }}
            >

                {/* Logo */}

                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "35px"
                    }}
                >

                    <img
                        src="/images/logo.png"
                        alt="Traço Leal"
                        style={{
                            width: "150px"
                        }}
                    />

                    <h2
                        style={{
                            marginTop: "18px",
                            color: "#333",
                            fontSize: "28px",
                            fontWeight: "700"
                        }}
                    >
                        Painel Administrativo
                    </h2>

                    <p
                        style={{
                            marginTop: "8px",
                            color: "#666",
                            fontSize: "15px"
                        }}
                    >
                        Faça login para acessar o sistema.
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <label style={labelStyle}>
                        E-mail
                    </label>

                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                    />

                    <label style={labelStyle}>
                        Senha
                    </label>

                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        style={inputStyle}
                    />

                    {

                        erro &&

                        <p
                            style={{
                                color: "#dc2626",
                                marginBottom: "20px",
                                fontWeight: "500"
                            }}
                        >
                            {erro}
                        </p>

                    }

                    <button
                        type="submit"
                        disabled={carregando}
                        style={buttonStyle}
                        onMouseEnter={(e) => {

                            e.target.style.background = "#a70000";

                        }}
                        onMouseLeave={(e) => {

                            e.target.style.background = "#c40000";

                        }}
                    >

                        {

                            carregando

                                ? "Entrando..."

                                : "Entrar"

                        }

                    </button>

                </form>

            </div>

        </div>

    );

}

const labelStyle = {

    display: "block",

    marginBottom: "8px",

    color: "#333",

    fontWeight: "600",

    fontSize: "15px"

};

const inputStyle = {

    width: "100%",

    padding: "15px",

    marginBottom: "22px",

    border: "1px solid #d5d5d5",

    borderRadius: "10px",

    color: "#333333",

    fontSize: "15px",

    outline: "none",

    boxSizing: "border-box"

};

const buttonStyle = {

    width: "100%",

    padding: "16px",

    border: "none",

    borderRadius: "10px",

    background: "#c40000",

    color: "#fff",

    fontSize: "16px",

    fontWeight: "600",

    cursor: "pointer",

    transition: ".3s"

};

export default Login;