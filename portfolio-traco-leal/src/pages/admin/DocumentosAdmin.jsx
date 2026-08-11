import { useEffect, useMemo, useState } from "react";

import { useAuth } from "../../context/AuthContext";

import AdminLayout from "../../components/admin/AdminLayout";

import SearchBox from "../../components/admin/documentos/SearchBox";
import NewButton from "../../components/admin/documentos/NewButton";

import DocumentoTable from "../../components/admin/documentos/DocumentoTable";
import DocumentoModal from "../../components/admin/documentos/DocumentoModal";
import DocumentoForm from "../../components/admin/documentos/DocumentoForm";

import {

    listarDocumentos,

    criarDocumento,

    atualizarDocumento,

    excluirDocumento

} from "../../services/documentos";

function DocumentosAdmin() {

    const { token } = useAuth();

    const [pesquisa, setPesquisa] = useState("");

    const [documentos, setDocumentos] = useState([]);

    const [carregando, setCarregando] = useState(true);

    const [modalAberto, setModalAberto] = useState(false);

    const [documentoEditando, setDocumentoEditando] = useState(null);

    async function carregarDocumentos() {

        try {

            const dados = await listarDocumentos();

            setDocumentos(dados);

        }

        catch (erro) {

            console.error(erro);

        }

        finally {

            setCarregando(false);

        }

    }

    useEffect(() => {

        carregarDocumentos();

    }, []);

    async function salvarDocumento(documento) {

        try {

            if (documentoEditando) {

                await atualizarDocumento(

                    documentoEditando.id,

                    documento,

                    token

                );

            }

            else {

                await criarDocumento(

                    documento,

                    token

                );

            }

            setDocumentoEditando(null);

            setModalAberto(false);

            carregarDocumentos();

        }

        catch (erro) {

            console.error(erro);

            alert("Erro ao salvar documento.");

        }

    }

    async function removerDocumento(documento) {

        const confirmar = window.confirm(

            `Deseja realmente excluir "${documento.titulo}"?`

        );

        if (!confirmar) {

            return;

        }

        try {

            await excluirDocumento(

                documento.id,

                token

            );

            carregarDocumentos();

        }

        catch (erro) {

            console.error(erro);

            alert("Erro ao excluir documento.");

        }

    }

    const documentosFiltrados = useMemo(() => {

        return documentos.filter(documento =>

            documento.titulo

                .toLowerCase()

                .includes(pesquisa.toLowerCase())

        );

    }, [documentos, pesquisa]);

    if (carregando) {

        return (

            <AdminLayout>

                <h2>Carregando documentos...</h2>

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

                Documentos

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

                        setDocumentoEditando(null);

                        setModalAberto(true);

                    }}

                />

            </div>

            <DocumentoTable

                documentos={documentosFiltrados}

                onEditar={(documento) => {

                    setDocumentoEditando(documento);

                    setModalAberto(true);

                }}

                onExcluir={removerDocumento}

            />

            <DocumentoModal

                aberto={modalAberto}

                titulo={

                    documentoEditando

                        ? "Editar Documento"

                        : "Novo Documento"

                }

                onClose={() => {

                    setModalAberto(false);

                    setDocumentoEditando(null);

                }}

            >

                <DocumentoForm

                    documento={documentoEditando}

                    onSalvar={salvarDocumento}

                    onCancelar={() => {

                        setModalAberto(false);

                        setDocumentoEditando(null);

                    }}

                />

            </DocumentoModal>

        </AdminLayout>

    );

}

export default DocumentosAdmin;