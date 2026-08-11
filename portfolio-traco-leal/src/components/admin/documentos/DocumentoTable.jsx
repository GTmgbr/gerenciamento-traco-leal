import DocumentoRow from "./DocumentoRow";

function DocumentoTable({

    documentos,

    onEditar,

    onExcluir

}) {

    return (

        <div

            style={{

                background: "#ffffff",

                borderRadius: "16px",

                overflow: "hidden",

                boxShadow: "0 8px 20px rgba(0,0,0,.08)"

            }}

        >

            <table

                style={{
                    color: "#333333",

                    width: "100%",

                    borderCollapse: "collapse"

                }}

            >

                <thead>

                    <tr

                        style={{

                            color: "#333333",

                            background: "#f7f7f7",

                            borderBottom: "1px solid #e5e5e5"

                        }}

                    >

                        <th style={th}>Título</th>

                        <th style={th}>Cliente</th>

                        <th style={th}>Categorias</th>

                        <th style={th}>Tipo</th>

                        <th style={th}>Ano</th>

                        <th style={th}>Arquivo</th>

                        <th style={th}>Status</th>

                        <th style={th}>Ações</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        documentos.length === 0

                            ?

                            <tr>

                                <td

                                    colSpan={8}

                                    style={{

                                        padding: 40,

                                        textAlign: "center",

                                        color: "#777"

                                    }}

                                >

                                    Nenhum documento encontrado.

                                </td>

                            </tr>

                            :

                            documentos.map(documento => (

                                <DocumentoRow

                                    key={documento.id}

                                    documento={documento}

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

export default DocumentoTable;