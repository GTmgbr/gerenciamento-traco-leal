import PecaRow from "./PecaRow";

function PecaTable({

    pecas,

    onEditar,

    onExcluir

}) {

    return (

        <div

            style={{

                background: "#fff",

                borderRadius: 16,

                overflow: "hidden",

                boxShadow: "0 8px 20px rgba(0,0,0,.08)"

            }}

        >

            <table

                style={{

                    width: "100%",

                    borderCollapse: "collapse",

                    color: "#333"

                }}

            >

                <thead>

                    <tr

                        style={{

                            background: "#f7f7f7",

                            borderBottom: "1px solid #e5e5e5"

                        }}

                    >

                        <th style={th}>Título</th>

                        <th style={th}>Cliente</th>

                        <th style={th}>Categoria</th>

                        <th style={th}>Ano</th>

                        <th style={th}>Conteúdo</th>

                        <th style={th}>Ações</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        pecas.length === 0

                            ?

                            <tr>

                                <td

                                    colSpan={6}

                                    style={{

                                        padding: 40,

                                        textAlign: "center",

                                        color: "#777"

                                    }}

                                >

                                    Nenhuma peça encontrada.

                                </td>

                            </tr>

                            :

                            pecas.map(peca => (

                                <PecaRow

                                    key={peca.id}

                                    peca={peca}

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

    padding: 18,

    textAlign: "left",

    fontWeight: 600,

    color: "#444"

};

export default PecaTable;