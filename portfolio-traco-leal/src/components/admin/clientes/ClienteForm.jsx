import { useEffect, useState } from "react";

function ClienteForm({

    cliente,

    onSalvar,

    onCancelar

}) {

    const [nome, setNome] = useState("");

    const [site, setSite] = useState("");

    const [descricao, setDescricao] = useState("");

    const [logo, setLogo] = useState(null);

    useEffect(() => {

        if (cliente) {

            setNome(cliente.nome || "");

            setSite(cliente.site || "");

            setDescricao(cliente.descricao || "");

        }

    }, [cliente]);

    function submit(e) {

        e.preventDefault();

        onSalvar({

            nome,

            site,

            descricao,

            ativo: true,

            logo

        });

    }

    return (

        <form
            onSubmit={submit}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 18
            }}
        >

            <div>

                <label
                    style={{
                        display: "block",
                        marginBottom: 6,
                        fontWeight: 600
                    }}
                >

                    Nome

                </label>

                <input

                    value={nome}

                    onChange={(e) => setNome(e.target.value)}

                    required

                    style={inputStyle}

                />

            </div>

            <div>

                <label
                    style={{
                        display: "block",
                        marginBottom: 6,
                        fontWeight: 600
                    }}
                >

                    Logo

                </label>

                <div
    style={{
        display: "flex",
        alignItems: "center",
        gap: 15
    }}
>

    <label

        htmlFor="logo"

        style={{

            background: "#c40000",

            color: "#fff",

            padding: "10px 18px",

            borderRadius: 8,

            cursor: "pointer",

            fontWeight: 600,

            display: "inline-block"

        }}

    >

        Escolher logo

    </label>

            <input

                id="logo"

                type="file"

                accept="image/png,image/jpeg,image/webp"

                style={{

                    display: "none"

                }}

                onChange={(e) => {

                    setLogo(e.target.files[0]);

                }}

            />

            <span
                style={{
                    color: "#666"
                }}
            >

                {

                    logo

                        ? logo.name

                        : "Nenhum arquivo selecionado"

                }

            </span>

        </div>

            </div>

            <div>

                <label
                    style={{
                        display: "block",
                        marginBottom: 6,
                        fontWeight: 600
                    }}
                >

                    Site

                </label>

                <input

                    value={site}

                    onChange={(e) => setSite(e.target.value)}

                    style={inputStyle}

                />

            </div>

            <div>

                <label
                    style={{
                        display: "block",
                        marginBottom: 6,
                        fontWeight: 600
                    }}
                >

                    Descrição

                </label>

                <textarea

                    value={descricao}

                    onChange={(e) =>

                        setDescricao(e.target.value)

                    }

                    rows={5}

                    style={textareaStyle}

                />

            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 15,
                    marginTop: 15
                }}
            >

                <button

                    type="button"

                    onClick={onCancelar}

                    style={cancelarStyle}

                >

                    Cancelar

                </button>

                <button

                    type="submit"

                    style={salvarStyle}

                >

                    Salvar

                </button>

            </div>

        </form>

    );

}

const inputStyle = {

    width: "100%",

    padding: "12px",

    border: "1px solid #d8d8d8",

    borderRadius: "8px",

    fontSize: "15px",

    boxSizing: "border-box"

};

const textareaStyle = {

    width: "100%",

    padding: "12px",

    border: "1px solid #d8d8d8",

    borderRadius: "8px",

    fontSize: "15px",

    resize: "vertical",

    boxSizing: "border-box"

};

const cancelarStyle = {

    padding: "12px 22px",

    border: "1px solid #d0d0d0",

    background: "#fff",

    borderRadius: "8px",

    cursor: "pointer",

    fontWeight: 600

};

const salvarStyle = {

    padding: "12px 24px",

    background: "#c40000",

    color: "#fff",

    border: "none",

    borderRadius: "8px",

    cursor: "pointer",

    fontWeight: 600

};

export default ClienteForm;