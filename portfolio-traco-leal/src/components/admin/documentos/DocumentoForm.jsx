import { useEffect, useRef, useState } from "react";

import { listarClientes } from "../../../services/clientes";

import { listarCategorias } from "../../../services/categorias";

function DocumentoForm({

    documento,

    onSalvar,

    onCancelar

}) {

    const inputArquivo = useRef(null);

    const [clientes, setClientes] = useState([]);

    const [categorias, setCategorias] = useState([]);

    const [titulo, setTitulo] = useState("");

    const [clienteId, setClienteId] = useState("");

    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState([]);

    const [tipo, setTipo] = useState("CONTRATO");

    const [ano, setAno] = useState(new Date().getFullYear());

    const [ativo, setAtivo] = useState(true);

    const [arquivo, setArquivo] = useState(null);

    const [nomeArquivo, setNomeArquivo] = useState("Nenhum PDF selecionado");

    async function carregarDados() {

        try {

            const listaClientes = await listarClientes();

            const listaCategorias = await listarCategorias();

            setClientes(listaClientes);

            setCategorias(listaCategorias);

        }

        catch (erro) {

            console.error(erro);

        }

}

    useEffect(() => {

    carregarDados();

}, []);

    useEffect(() => {

        if (!documento) {

            setTitulo("");

            setClienteId("");

            setCategoriasSelecionadas([]);

            setTipo("CONTRATO");

            setAno(new Date().getFullYear());

            setAtivo(true);

            setArquivo(null);

            setNomeArquivo("Nenhum PDF selecionado");

            return;

        }

        setTitulo(documento.titulo);

        setTipo(documento.tipo);

        setAno(documento.ano);

        setAtivo(documento.ativo);

        setClienteId(documento.clienteId);

        setCategoriasSelecionadas(

            documento.categorias.map(

                categoria => categoria.id

            )

        );

        setArquivo(documento.arquivo);

        setNomeArquivo(

            documento.arquivo || "PDF já cadastrado"

        );

    }, [documento]);

    function alternarCategoria(id) {

        setCategoriasSelecionadas((anterior) => {

            if (anterior.includes(id)) {

                return anterior.filter(

                    categoriaId => categoriaId !== id

                );

            }

            return [

                ...anterior,

                id

            ];

    });

}

    function submit(e) {

        e.preventDefault();

        console.log({
            clienteId,
            categoriasSelecionadas
        });

        onSalvar({
            titulo,
            clienteId: Number(clienteId),
            categorias: categoriasSelecionadas.map(Number),
            tipo,
            ano: Number(ano),
            ativo,
            arquivo
        });

}

    return (

        <form onSubmit={submit}>

            {/* Título */}

            <div style={{ marginBottom: 22 }}>

                <label style={label}>

                    Título

                </label>

                <input

                    value={titulo}

                    onChange={(e) =>

                        setTitulo(e.target.value)

                    }

                    style={input}

                    required

                />

            </div>

            {/* Cliente */}

            <div style={{ marginBottom: 22 }}>

                <label style={label}>

                    Cliente

                </label>

                <select

                    value={clienteId}

                    onChange={(e) =>
                        setClienteId(
                            e.target.value === ""
                                ? ""
                                : Number(e.target.value)
                        )
                    }

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

            {/* Categorias */}

            <div style={{ marginBottom: 28 }}>

                <label style={label}>

                    Categorias

                </label>

                <div

                    style={{

                        border: "1px solid #dcdcdc",

                        borderRadius: 10,

                        padding: 18,

                        display: "grid",

                        gridTemplateColumns: "repeat(2,1fr)",

                        gap: 12

                    }}

                >

                    {

                        categorias.map(categoria => (

                            <label

                                key={categoria.id}

                                style={{

                                    display: "flex",

                                    alignItems: "center",

                                    gap: 10,

                                    cursor: "pointer"

                                }}

                            >

                                <input

                                    type="checkbox"

                                    checked={

                                        categoriasSelecionadas.includes(

                                            categoria.id

                                        )

                                    }

                                    onChange={() =>

                                        alternarCategoria(

                                            categoria.id

                                        )

                                    }

                                />

                                {categoria.nome}

                            </label>

                        ))

                    }

                </div>

            </div>

            {/* Linha */}

            <div

                style={{

                    display: "flex",

                    gap: 20,

                    marginBottom: 22

                }}

            >

                <div style={{ flex: 1 }}>

                    <label style={label}>

                        Tipo

                    </label>

                    <select

                        value={tipo}

                        onChange={(e) =>

                            setTipo(e.target.value)

                        }

                        style={input}

                    >

                        <option value="CONTRATO">

                            Contrato

                        </option>

                        <option value="ATESTADO">

                            Atestado

                        </option>

                    </select>

                </div>

                <div style={{ width: 140 }}>

                    <label style={label}>

                        Ano

                    </label>

                    <input

                        type="number"

                        value={ano}

                        onChange={(e) =>

                            setAno(e.target.value)

                        }

                        style={input}

                    />

                </div>

            </div>

            {/* Upload */}

            <div style={{ marginBottom: 22 }}>

                <label style={label}>

                    Arquivo PDF

                </label>

                <input

                    type="file"

                    accept="application/pdf"

                    ref={inputArquivo}

                    style={{ display: "none" }}

                    onChange={(e) => {

                        if (e.target.files.length > 0) {

                            setArquivo(

                                e.target.files[0]

                            );

                            setNomeArquivo(

                                e.target.files[0].name

                            );

                        }

                    }}

                />

                <div

                    style={{

                        display: "flex",

                        alignItems: "center",

                        gap: 18

                    }}

                >

                    <button

                        type="button"

                        onClick={() =>

                            inputArquivo.current.click()

                        }

                        style={botaoArquivo}

                    >

                        Escolher PDF

                    </button>

                    <span

                        style={{

                            color: "#666"

                        }}

                    >

                        {nomeArquivo}

                    </span>

                </div>

            </div>

            {/* Status */}

            <div style={{ marginBottom: 30 }}>

                <label

                    style={{

                        display: "flex",

                        gap: 10,

                        alignItems: "center",

                        cursor: "pointer"

                    }}

                >

                    <input

                        type="checkbox"

                        checked={ativo}

                        onChange={(e) =>

                            setAtivo(

                                e.target.checked

                            )

                        }

                    />

                    Documento ativo

                </label>

            </div>

            {/* Botões */}

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

const botaoArquivo = {

    background: "#2563eb",

    color: "#fff",

    border: "none",

    borderRadius: 8,

    padding: "11px 18px",

    cursor: "pointer",

    fontWeight: 600

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

export default DocumentoForm;