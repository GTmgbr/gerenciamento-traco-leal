import { useEffect, useState } from "react";
import { listarClientes } from "../../../services/clientes";

const CATEGORIAS = [
    "Site",
    "Landing Page",
    "Identidade Visual",
    "Material Impresso",
    "Social Media",
    "Vídeo",
    "Outro"
];

function PecaForm({

    peca,

    onSalvar,

    onCancelar

}) {

    const [clientes, setClientes] = useState([]);

    const [titulo, setTitulo] = useState("");

    const [clienteId, setClienteId] = useState("");

    const [categoria, setCategoria] = useState("");

    const [ano, setAno] = useState(new Date().getFullYear());

    const [descricao, setDescricao] = useState("");

    useEffect(() => {

        async function carregarClientes() {

            try {

                const dados = await listarClientes();

                setClientes(dados);

            }

            catch (erro) {

                console.error(erro);

            }

        }

        carregarClientes();

    }, []);

    useEffect(() => {

        if (!peca) {

            setTitulo("");

            setClienteId("");

            setCategoria("");

            setAno(new Date().getFullYear());

            setDescricao("");

            return;

        }

        setTitulo(peca.titulo);

        setClienteId(peca.clienteId);

        setCategoria(peca.categoria);

        setAno(peca.ano);

        setDescricao(peca.descricao);

    }, [peca]);

    function gerarSlug(texto) {

        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");

        }

    function submit(e) {

        e.preventDefault();

        onSalvar({

            titulo,

            slug: gerarSlug(titulo),

            clienteId: Number(clienteId),

            categoria,

            ano: Number(ano),

            descricao

        });

    }
    
    return (

        <form onSubmit={submit}>

            <div style={{ marginBottom: 22 }}>

                <label style={label}>Cliente</label>

                <select

                    value={clienteId}

                    onChange={(e) => setClienteId(e.target.value)}

                    style={input}

                    required

                >

                    <option value="">

                        Selecione um cliente

                    </option>

                    {

                        clientes.map(cliente => (

                            <option

                                key={cliente.id}

                                value={cliente.id}

                            >

                                {cliente.nome}

                            </option>

                        ))

                    }

                </select>

            </div>

            <div style={{ marginBottom: 22 }}>

                <label style={label}>Título</label>

                <input

                    value={titulo}

                    onChange={(e) => setTitulo(e.target.value)}

                    style={input}

                    required

                />

            </div>

            <div

                style={{

                    display: "flex",

                    gap: 20,

                    marginBottom: 22

                }}

            >

                <div style={{ flex: 1 }}>

                    <label style={label}>Categoria</label>

                    <select

                        value={categoria}

                        onChange={(e) => setCategoria(e.target.value)}

                        style={input}

                        required

                    >

                        <option value="">Selecione</option>

                        {

                            CATEGORIAS.map(cat => (

                                <option

                                    key={cat}

                                    value={cat}

                                >

                                    {cat}

                                </option>

                            ))

                        }

                    </select>

                </div>

                <div style={{ width: 140 }}>

                    <label style={label}>Ano</label>

                    <input

                        type="number"

                        value={ano}

                        onChange={(e) => setAno(e.target.value)}

                        style={input}

                    />

                </div>

            </div>

            <div style={{ marginBottom: 30 }}>

                <label style={label}>Descrição</label>

                <textarea

                    rows={6}

                    value={descricao}

                    onChange={(e) =>

                        setDescricao(e.target.value)

                    }

                    style={{

                        ...input,

                        resize: "vertical"

                    }}

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

export default PecaForm;

