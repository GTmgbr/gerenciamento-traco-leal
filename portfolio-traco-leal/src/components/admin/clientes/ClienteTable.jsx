import ClienteRow from "./ClienteRow";

function ClienteTable({ clientes, onEditar, onExcluir }) {

    return (

        <div

            style={{

                background: "#ffffff",

                borderRadius: "16px",

                color: "#333333",

                overflow: "hidden",

                boxShadow: "0 8px 20px rgba(0,0,0,.08)"

            }}

        >

            <table

                style={{

                    width: "100%",

                    borderCollapse: "collapse"

                }}

            >

                <thead>

                    <tr

                        style={{

                            background: "#f7f7f7",

                            borderBottom: "1px solid #e5e5e5"

                        }}

                    >

                        <th style={th}>Logo</th>

                        <th style={th}>Nome</th>

                        <th style={th}>Site</th>

                        <th style={th}>Status</th>

                        <th style={th}>Ações</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        clientes.length === 0

                            ?

                            <tr>

                                <td

                                    colSpan={5}

                                    style={{

                                        textAlign: "center",

                                        padding: "40px",

                                        color: "#777"

                                    }}

                                >

                                    Nenhum cliente encontrado.

                                </td>

                            </tr>

                            :

                            clientes.map(cliente => (

                                <ClienteRow

                                    key={cliente.id}

                                    cliente={cliente}

                                    onEditar={onEditar}

                                    onExcluir={onExcluir}

                                />

                            ))

                    }

                </tbody>

            </table>

        </div>

    );

}

const th = {

    padding: "18px",

    textAlign: "left",

    fontWeight: 600,

    color: "#444"

};

export default ClienteTable;