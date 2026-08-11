import { NavLink } from "react-router-dom";

import {
    FileText,
    Award,
    Palette,
    Users,
} from "lucide-react";

const menu = [
    {
        nome: "Contratos",
        rota: "/contratos",
        icone: <FileText size={20} />,
        cor: "bg-sky-500",
    },
    {
        nome: "Atestados",
        rota: "/atestados",
        icone: <Award size={20} />,
        cor: "bg-emerald-500",
    },
    {
        nome: "Peças",
        rota: "/pecas",
        icone: <Palette size={20} />,
        cor: "bg-amber-400",
    },
    {
        nome: "Clientes",
        rota: "/clientes",
        icone: <Users size={20} />,
        cor: "bg-violet-500",
    },
];

function Navbar() {
    return (
        <nav className="bg-red-700 shadow-lg">

            <div className="grid grid-cols-4">

                {menu.map((item) => (

                    <NavLink
                        key={item.nome}
                        to={item.rota}
                        className={({ isActive }) =>
                            `group flex items-center justify-center h-16 text-white uppercase transition-all duration-300 hover:bg-red-800 ${
                                isActive ? "bg-red-900" : ""
                            }`
                        }
                    >

                        <div className="inline-flex flex-col items-center">

                            {/* Ícone + Texto */}

                            <div className="flex items-center gap-3">

                                {item.icone}

                                <span className="font-semibold tracking-wide">
                                    {item.nome}
                                </span>

                            </div>

                            {/* Barra colorida */}

                            <div
                                style={{
                                    marginTop: "4px"
                                }}
                                className={`
                                    mt-[12px]
                                    h-[4px]
                                    w-full
                                    rounded-full
                                    origin-center
                                    transition-transform
                                    duration-300
                                    group-hover:scale-x-90
                                    ${item.cor}
                                `}
                            />

                        </div>

                    </NavLink>

                ))}

            </div>

        </nav>
    );
}

export default Navbar;