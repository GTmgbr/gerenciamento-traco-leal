import { useEffect, useMemo, useState } from "react";

import { useAuth } from "../../context/AuthContext";

import AdminLayout from "../../components/admin/AdminLayout";

import SearchBox from "../../components/admin/clientes/SearchBox";
import NewButton from "../../components/admin/clientes/NewButton";
import ClienteTable from "../../components/admin/clientes/ClienteTable";
import ClienteModal from "../../components/admin/clientes/ClienteModal";
import ClienteForm from "../../components/admin/clientes/ClienteForm";

import {
    listarClientes,
    criarCliente,
    atualizarCliente,
    excluirCliente
} from "../../services/clientes";

function ClientesAdmin() {

    const { token } = useAuth();

    const [pesquisa, setPesquisa] = useState("");

    const [clientes, setClientes] = useState([]);

    const [carregando, setCarregando] = useState(true);

    const [clienteEditando, setClienteEditando] = useState(null);

    const [modalAberto, setModalAberto] = useState(false);

    async function carregarClientes() {

        try {

            const dados = await listarClientes();

            setClientes(dados);

        }

        catch (erro) {

            console.error(erro);

        }

        finally {

            setCarregando(false);

        }

    }

    useEffect(() => {

        carregarClientes();

    }, []);

    async function salvarCliente(cliente) {

    console.log("TOKEN:", token);

    try {

        if (clienteEditando) {

            await atualizarCliente(

                clienteEditando.id,

                cliente,

                token

            );

        }

        else {

            await criarCliente(

                cliente,

                token

            );

        }

        setModalAberto(false);

        setClienteEditando(null);

        carregarClientes();

    }

    catch (erro) {

        console.error(erro);

        alert("Erro ao salvar cliente.");

    }

    }

    async function removerCliente(cliente) {

        const confirmar = window.confirm(
            `Deseja realmente excluir o cliente "${cliente.nome}"?`
        );

        if (!confirmar) {
            return;
        }

        try {

            await excluirCliente(
                cliente.id,
                token
            );

            await carregarClientes();

        }

        catch (erro) {

            if (erro.response?.status === 409) {

                const detalhes =
                    erro.response.data?.detalhes;

                const quantidadeDocumentos =
                    detalhes?.documentos || 0;

                const quantidadePecas =
                    detalhes?.pecas || 0;

                let mensagem =
                    `Não é possível excluir o cliente "${cliente.nome}".\n\n`;

                if (quantidadeDocumentos > 0) {

                    mensagem +=
                        `Documentos associados: ${quantidadeDocumentos}\n`;

                }

                if (quantidadePecas > 0) {

                    mensagem +=
                        `Peças associadas: ${quantidadePecas}\n`;

                }

                mensagem +=
                    "\nRemova ou transfira esses dados antes de excluir o cliente.";

                alert(mensagem);

                return;

            }

            if (erro.response?.status === 404) {

                alert(
                    "Este cliente não foi encontrado."
                );

                return;

            }

            console.error(erro);

            alert(
                "Erro ao excluir cliente."
            );

        }

        }


    const clientesFiltrados = useMemo(() => {

        return clientes.filter(cliente =>

            cliente.nome
                .toLowerCase()
                .includes(pesquisa.toLowerCase())

        );

    }, [clientes, pesquisa]);

    if (carregando) {

        return (

            <AdminLayout>

                <h2>Carregando clientes...</h2>

            </AdminLayout>

        );

    }

    return (

        <AdminLayout>

            <h1
                style={{
                    marginTop: 0,
                    marginBottom: 35
                }}
            >

                Clientes

            </h1>

            <div

                style={{

                    display: "flex",

                    justifyContent: "space-between",

                    alignItems: "center",

                    marginBottom: 30

                }}

            >

                <SearchBox

                    value={pesquisa}

                    onChange={setPesquisa}

                />

                <NewButton

                    onClick={() => {

                        setClienteEditando(null);

                        setModalAberto(true);

                    }}

                />

            </div>

            <ClienteTable

                clientes={clientesFiltrados}

                onEditar={(cliente) => {

                    setClienteEditando(cliente);

                    setModalAberto(true);

                }}

                onExcluir={removerCliente}

            />

            <ClienteModal

                aberto={modalAberto}

                titulo={

                    clienteEditando

                        ? "Editar Cliente"

                        : "Novo Cliente"

                }

                onClose={() => {

                    setModalAberto(false);

                    setClienteEditando(null);

                }}

            >

                <ClienteForm

                    cliente={clienteEditando}

                    onSalvar={salvarCliente}

                    onCancelar={() => setModalAberto(false)}

                />

            </ClienteModal>

        </AdminLayout>

    );

}

export default ClientesAdmin;