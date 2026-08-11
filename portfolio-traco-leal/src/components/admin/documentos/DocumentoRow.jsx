import {

    FaEdit,

    FaTrash,

    FaFilePdf

} from "react-icons/fa";

function DocumentoRow({

    documento,

    onEditar,

    onExcluir

}) {

    const urlArquivo =

        `http://localhost:3000/uploads/documentos/${documento.arquivo}`;

    return (

        <tr

            style={{

                borderBottom: "1px solid #eeeeee"

            }}

        >

            <td style={td}>

                {documento.titulo}

            </td>

            <td style={td}>

                {

                    documento.cliente

                        ? documento.cliente.nome

                        : "-"

                }

            </td>

            <td style={td}>

                <div

                    style={{

                        display: "flex",

                        flexWrap: "wrap",

                        gap: 6

                    }}

                >

                    {

                        documento.categorias.map(categoria => (

                            <span

                                key={categoria.id}

                                style={{

                                    background: "#eef2ff",

                                    color: "#4338ca",

                                    padding: "5px 10px",

                                    borderRadius: 999,

                                    fontSize: 12,

                                    fontWeight: 600

                                }}

                            >

                                {categoria.nome}

                            </span>

                        ))

                    }

                </div>

            </td>

            <td style={td}>

                {documento.tipo}

            </td>

            <td style={td}>

                {documento.ano}

            </td>

            <td style={td}>

                <a

                    href={urlArquivo}

                    target="_blank"

                    rel="noreferrer"

                >

                    <FaFilePdf

                        style={{

                            color: "#dc2626",

                            fontSize: 22

                        }}

                    />

                </a>

            </td>

            <td style={td}>

                <span

                    style={{

                        padding: "6px 12px",

                        borderRadius: 999,

                        background:

                            documento.ativo

                                ? "#dcfce7"

                                : "#fee2e2",

                        color:

                            documento.ativo

                                ? "#166534"

                                : "#991b1b",

                        fontSize: 13,

                        fontWeight: 600

                    }}

                >

                    {

                        documento.ativo

                            ? "Ativo"

                            : "Inativo"

                    }

                </span>

            </td>

            <td style={td}>

                <FaEdit

                    onClick={() =>

                        onEditar(documento)

                    }

                    style={{

                        color: "#2563eb",

                        cursor: "pointer",

                        marginRight: 18

                    }}

                />

                <FaTrash

                    onClick={() =>

                        onExcluir(documento)

                    }

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

    padding: 18,

    verticalAlign: "top"

};

export default DocumentoRow;