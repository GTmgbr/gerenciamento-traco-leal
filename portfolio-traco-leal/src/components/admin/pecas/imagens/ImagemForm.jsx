import { useRef, useState } from "react";

function ImagemForm({

    onSalvar,

    onCancelar

}) {

    const input = useRef(null);

    const [arquivo, setArquivo] = useState(null);

    const [nomeArquivo, setNomeArquivo] = useState("");

    const [legenda, setLegenda] = useState("");

    const [destaque, setDestaque] = useState(false);

    function submit(e) {

        e.preventDefault();

        onSalvar({

            legenda,

            destaque,

            ordem: 1,

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
                Nova imagem
            </h2>

            <div style={{ marginBottom: 22 }}>

                <label style={label}>
                    Legenda
                </label>

                <input
                    value={legenda}
                    onChange={(e) => setLegenda(e.target.value)}
                    style={inputStyle}
                />

            </div>

            <div style={{ marginBottom: 25 }}>

                <label style={label}>
                    Imagem
                </label>

                <input

                    ref={input}

                    type="file"

                    accept="image/*"

                    style={{ display: "none" }}

                    onChange={(e) => {

                        if (!e.target.files.length) return;

                        setArquivo(e.target.files[0]);

                        setNomeArquivo(e.target.files[0].name);

                    }}

                />

                <button

                    type="button"

                    onClick={() => input.current.click()}

                    style={botaoArquivo}

                >

                    Escolher imagem

                </button>

                <div
                    style={{
                        marginTop: 12,
                        color: "#666"
                    }}
                >
                    {nomeArquivo || "Nenhuma imagem selecionada"}
                </div>

            </div>

            <div style={{ marginBottom: 30 }}>

                <label
                    style={{
                        display: "flex",
                        gap: 10,
                        cursor: "pointer"
                    }}
                >

                    <input

                        type="checkbox"

                        checked={destaque}

                        onChange={(e) =>
                            setDestaque(e.target.checked)
                        }

                    />

                    Imagem de destaque

                </label>

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

export default ImagemForm;