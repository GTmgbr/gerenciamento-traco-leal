import { useEffect, useState } from "react";

function LinkForm({

    link,

    onSalvar,

    onCancelar

}) {

    const [titulo, setTitulo] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {

        if (!link) {

            setTitulo("");
            setUrl("");

            return;

        }

        setTitulo(link.titulo || "");
        setUrl(link.url || "");

    }, [link]);

    function submit(e) {

        e.preventDefault();

        onSalvar({

            titulo,
            url

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
                {link ? "Editar link" : "Novo link"}
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

                    placeholder="Ex.: Site institucional"

                    style={input}

                    required

                />

            </div>

            <div style={{ marginBottom: 30 }}>

                <label style={label}>
                    URL
                </label>

                <input

                    type="url"

                    value={url}

                    onChange={(e) =>
                        setUrl(e.target.value)
                    }

                    placeholder="https://exemplo.com.br"

                    style={input}

                    required

                />

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

                    style={botaoCancelar}

                >
                    Cancelar
                </button>

                <button

                    type="submit"

                    style={botaoSalvar}

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

    fontWeight: 600,

    color: "#444"

};

const input = {

    width: "100%",

    padding: "12px 14px",

    borderRadius: 8,

    border: "1px solid #dcdcdc",

    outline: "none",

    fontSize: 15,

    boxSizing: "border-box"

};

const botaoCancelar = {

    background: "#efefef",

    border: "none",

    borderRadius: 8,

    padding: "12px 22px",

    cursor: "pointer",

    fontWeight: 600

};

const botaoSalvar = {

    background: "#c40000",

    color: "#fff",

    border: "none",

    borderRadius: 8,

    padding: "12px 24px",

    cursor: "pointer",

    fontWeight: 600

};

export default LinkForm;