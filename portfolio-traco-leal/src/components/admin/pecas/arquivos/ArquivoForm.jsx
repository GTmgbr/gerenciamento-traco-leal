import { useRef, useState } from "react";

function ArquivoForm({

    onSalvar,

    onCancelar

}) {

    const input = useRef(null);

    const [arquivo, setArquivo] = useState(null);

    const [nomeArquivo, setNomeArquivo] =
        useState("");

    const [titulo, setTitulo] =
        useState("");

    function submit(e) {

        e.preventDefault();

        if (!arquivo) {

            alert("Selecione um arquivo.");

            return;

        }

        onSalvar({

            titulo,

            arquivo

        });

    }

    return (

        <form onSubmit={submit}>

            <h2
                style={{
                    marginTop: 0,
                    marginBottom: 30
                }}
            >
                Novo arquivo
            </h2>

            <div style={{ marginBottom: 22 }}>

                <label style={label}>
                    Título
                </label>

                <input

                    value={titulo}

                    onChange={(e) =>
                        setTitulo(e.target.value)
                    }

                    placeholder="Ex.: Manual da marca"

                    style={inputStyle}

                    required

                />

            </div>

            <div style={{ marginBottom: 30 }}>

                <label style={label}>
                    Arquivo
                </label>

                <input

                    ref={input}

                    type="file"

                    style={{
                        display: "none"
                    }}

                    onChange={(e) => {

                        if (!e.target.files.length) {
                            return;
                        }

                        const arquivoSelecionado =
                            e.target.files[0];

                        setArquivo(
                            arquivoSelecionado
                        );

                        setNomeArquivo(
                            arquivoSelecionado.name
                        );

                    }}

                />

                <button

                    type="button"

                    onClick={() =>
                        input.current.click()
                    }

                    style={botaoArquivo}

                >

                    Escolher arquivo

                </button>

                <div

                    style={{

                        marginTop: 12,

                        color: "#666"

                    }}

                >

                    {nomeArquivo ||
                        "Nenhum arquivo selecionado"}

                </div>

            </div>

            <div

                style={{

                    display: "flex",

                    justifyContent: "flex-end",

                    gap: 15

                }}

            >

                <button

                    type="button"

                    onClick={onCancelar}

                    style={cancelar}

                >

                    Cancelar

                </button>

                <button

                    type="submit"

                    style={salvar}

                >

                    Salvar

                </button>

            </div>

        </form>

    );

}

const label = {

    display: "block",

    marginBottom: 8,

    fontWeight: 600

};

const inputStyle = {

    width: "100%",

    padding: 12,

    borderRadius: 8,

    border: "1px solid #ddd",

    boxSizing: "border-box"

};

const botaoArquivo = {

    background: "#2563eb",

    color: "#fff",

    border: "none",

    padding: "10px 18px",

    borderRadius: 8,

    cursor: "pointer"

};

const cancelar = {

    background: "#eee",

    border: "none",

    padding: "12px 22px",

    borderRadius: 8,

    cursor: "pointer"

};

const salvar = {

    background: "#c40000",

    color: "#fff",

    border: "none",

    padding: "12px 22px",

    borderRadius: 8,

    cursor: "pointer"

};

export default ArquivoForm;