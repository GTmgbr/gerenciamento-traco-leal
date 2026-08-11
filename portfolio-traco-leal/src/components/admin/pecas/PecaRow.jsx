import { useNavigate } from "react-router-dom";

import {
    FaEdit,
    FaTrash
} from "react-icons/fa";

function PecaRow({

    peca,

    onEditar,

    onExcluir

}) {

    const navigate = useNavigate();

    return (

        <tr

            style={{

                borderBottom: "1px solid #eeeeee"

            }}

        >

            <td style={td}>

                {peca.titulo}

            </td>

            <td style={td}>

                {peca.cliente?.nome}

            </td>

            <td style={td}>

                {peca.categoria}

            </td>

            <td style={td}>

                {peca.ano}

            </td>

            <td style={td}>

                <button

                    type="button"

                    onClick={() =>

                        navigate(`/admin/pecas/${peca.id}`)

                    }

                    style={botaoGerenciar}

                >

                    📁 Gerenciar

                </button>

            </td>

            <td style={td}>

                <FaEdit

                    onClick={() =>

                        onEditar(peca)

                    }

                    style={{

                        color: "#2563eb",

                        cursor: "pointer",

                        marginRight: 18

                    }}

                />

                <FaTrash

                    onClick={() =>

                        onExcluir(peca)

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

    padding: 18

};

const botaoGerenciar = {

    background: "#2563eb",

    color: "#fff",

    border: "none",

    borderRadius: 8,

    padding: "8px 14px",

    cursor: "pointer",

    fontWeight: 600,

    fontSize: 14

};

export default PecaRow;