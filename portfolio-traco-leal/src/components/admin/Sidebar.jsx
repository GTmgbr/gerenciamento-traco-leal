import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {
    FaHome,
    FaUsers,
    FaFileAlt,
    FaImages,
    FaGlobe,
    FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {

    const navigate = useNavigate();

    const { logout } = useAuth();

    function sair() {

        logout();

        navigate("/admin");

    }

    const menu = [

        {
            nome: "Dashboard",
            rota: "/admin/dashboard",
            icone: <FaHome />
        },

        {
            nome: "Clientes",
            rota: "/admin/clientes",
            icone: <FaUsers />
        },

        {
            nome: "Documentos",
            rota: "/admin/documentos",
            icone: <FaFileAlt />
        },

        {
            nome: "Peças",
            rota: "/admin/pecas",
            icone: <FaImages />
        }

    ];

    return (

        <aside
            style={{
                width: 280,
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRight: "1px solid #e8e8e8",
                boxShadow: "2px 0 12px rgba(0,0,0,.04)"
            }}
        >

            <div>

                <div
                    style={{
                        padding: "35px 20px",
                        textAlign: "center",
                        borderBottom: "1px solid #eeeeee"
                    }}
                >

                    <img
                        src="/images/logo.png"
                        alt="Traço Leal"
                        style={{
                            width: 150
                        }}
                    />

                </div>

                <nav
                    style={{
                        marginTop: 20
                    }}
                >

                    {

                        menu.map((item) => (

                            <NavLink

                                key={item.nome}

                                to={item.rota}

                                style={({ isActive }) => ({

                                    display: "flex",

                                    alignItems: "center",

                                    gap: 18,

                                    padding: "18px 28px",

                                    textDecoration: "none",

                                    fontSize: 16,

                                    borderLeft: isActive
                                        ? "4px solid #c40000"
                                        : "4px solid transparent",

                                    background: isActive
                                        ? "#fff5f5"
                                        : "transparent",

                                    color: isActive
                                        ? "#c40000"
                                        : "#444",

                                    fontWeight: isActive
                                        ? 600
                                        : 500,

                                    transition: ".25s"

                                })}

                            >

                                <span
                                    style={{
                                        fontSize: 18
                                    }}
                                >

                                    {item.icone}

                                </span>

                                {item.nome}

                            </NavLink>

                        ))

                    }

                </nav>

            </div>

            <div
                style={{
                    borderTop: "1px solid #eee",
                    padding: 20
                }}
            >

                <NavLink
                    to="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "12px",
                        color: "#555",
                        textDecoration: "none",
                        borderRadius: 8
                    }}
                >

                    <FaGlobe />

                    Ver site

                </NavLink>

                <button

                    onClick={sair}

                    style={{

                        display: "flex",

                        alignItems: "center",

                        gap: "12px",

                        background: "transparent",

                        border: "none",

                        color: "#c40000",

                        cursor: "pointer",

                        fontSize: "15px",

                        padding: "12px"

                    }}

                >

                    <FaSignOutAlt />

                    Sair

                </button>

            </div>

        </aside>

    );

}

export default Sidebar;