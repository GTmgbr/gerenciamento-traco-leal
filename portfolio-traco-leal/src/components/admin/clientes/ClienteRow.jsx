import {

    FaEdit,

    FaTrash,

    FaGlobe,

    FaImage

} from "react-icons/fa";

import getBackendUrl from "../../../services/url";

function ClienteRow({ cliente, onEditar, onExcluir }) {

    const logo = cliente.logo

        ? getBackendUrl(
            `/uploads/clientes/${cliente.logo}`
        )

        : null;

    return (

        <tr

            style={{

                borderBottom: "1px solid #eeeeee"

            }}

        >

            <td style={td}>

                {

                    logo

                        ?

                        <img

                            src={logo}

                            alt={cliente.nome}

                            style={{

                                width: 55,

                                height: 55,

                                objectFit: "contain",

                                borderRadius: 8,

                                border: "1px solid #e5e5e5",

                                background: "#fff",

                                padding: 4

                            }}

                        />

                        :

                        <div

                            style={{

                                width: 55,

                                height: 55,

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "center",

                                background: "#f5f5f5",

                                borderRadius: 8,

                                color: "#999",

                                border: "1px solid #e5e5e5"

                            }}

                        >

                            <FaImage />

                        </div>

                }

            </td>

            <td style={td}>

                {cliente.nome}

            </td>

            <td style={td}>

                {

                    cliente.site

                        ?

                        <a

                            href={

                                cliente.site.startsWith("http://") ||

                                cliente.site.startsWith("https://")

                                    ? cliente.site

                                    : `https://${cliente.site}`

                            }

                            target="_blank"

                            rel="noopener noreferrer"

                            style={{

                                color: "#0d6efd",

                                fontSize: 18

                            }}

                        >

                            <FaGlobe />

                        </a>

                        :

                        "-"

                }

            </td>

            <td style={td}>

                <span

                    style={{

                        padding: "6px 12px",

                        borderRadius: "999px",

                        background:

                            cliente.ativo

                                ? "#dcfce7"

                                : "#fee2e2",

                        color:

                            cliente.ativo

                                ? "#166534"

                                : "#991b1b",

                        fontSize: 13,

                        fontWeight: 600

                    }}

                >

                    {

                        cliente.ativo

                            ? "Ativo"

                            : "Inativo"

                    }

                </span>

            </td>

            <td style={td}>

                <FaEdit

                    onClick={() => onEditar(cliente)}

                    style={{

                        color: "#2563eb",

                        cursor: "pointer",

                        marginRight: 18

                    }}

                />

                <FaTrash

                    onClick={() => onExcluir(cliente)}

                    style={{

                        color: "#dc2626",

                        cursor: "pointer"

                    }}

                />

            </td>

        </tr>

    );

}

const td = {

    padding: "18px"

};

export default ClienteRow;