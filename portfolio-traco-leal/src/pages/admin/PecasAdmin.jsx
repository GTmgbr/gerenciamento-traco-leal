import { useEffect, useMemo, useState } from "react";

import { useAuth } from "../../context/AuthContext";

import AdminLayout from "../../components/admin/AdminLayout";

import SearchBox from "../../components/admin/pecas/SearchBox";
import NewButton from "../../components/admin/pecas/NewButton";

import PecaTable from "../../components/admin/pecas/PecaTable";
import PecaModal from "../../components/admin/pecas/PecaModal";
import PecaForm from "../../components/admin/pecas/PecaForm";

import {

    listarPecas,

    criarPeca,

    atualizarPeca,

    excluirPeca

} from "../../services/pecas";

function PecasAdmin() {

    const { token } = useAuth();

    const [pesquisa, setPesquisa] = useState("");

    const [pecas, setPecas] = useState([]);

    const [carregando, setCarregando] = useState(true);

    const [modalAberto, setModalAberto] = useState(false);

    const [pecaEditando, setPecaEditando] = useState(null);

    async function carregarPecas() {

        try {

            const dados = await listarPecas();

            setPecas(dados);

        }

        catch (erro) {

            console.error(erro);

        }

        finally {

            setCarregando(false);

        }

    }

    useEffect(() => {

        carregarPecas();

    }, []);

    async function salvarPeca(peca) {

        try {

            if (pecaEditando) {

                await atualizarPeca(

                    pecaEditando.id,

                    peca,

                    token

                );

            }

            else {

                await criarPeca(

                    peca,

                    token

                );

            }

            setPecaEditando(null);

            setModalAberto(false);

            carregarPecas();

        }

        catch (erro) {

            console.error(erro);

            alert("Erro ao salvar peça.");

        }

    }

    async function removerPeca(peca) {

        const confirmar = window.confirm(

            `Deseja realmente excluir "${peca.titulo}"?`

        );

        if (!confirmar) return;

        try {

            await excluirPeca(

                peca.id,

                token

            );

            carregarPecas();

        }

        catch (erro) {

            console.error(erro);

            alert("Erro ao excluir peça.");

        }

    }

    const pecasFiltradas = useMemo(() => {

        return pecas.filter(peca => {

            const texto = pesquisa.toLowerCase();

            return (

                peca.titulo.toLowerCase().includes(texto) ||

                peca.cliente?.nome.toLowerCase().includes(texto) ||

                peca.categoria.toLowerCase().includes(texto)

            );

        });

    }, [pecas, pesquisa]);

    if (carregando) {

        return (

            <AdminLayout>

                <h2>Carregando peças...</h2>

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

                Peças

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

                        setPecaEditando(null);

                        setModalAberto(true);

                    }}

                />

            </div>

            <PecaTable

                pecas={pecasFiltradas}

                onEditar={(peca) => {

                    setPecaEditando(peca);

                    setModalAberto(true);

                }}

                onExcluir={removerPeca}

            />

            <PecaModal

                aberto={modalAberto}

                titulo={

                    pecaEditando

                        ? "Editar Peça"

                        : "Nova Peça"

                }

                onClose={() => {

                    setModalAberto(false);

                    setPecaEditando(null);

                }}

            >

                <PecaForm

                    peca={pecaEditando}

                    onSalvar={salvarPeca}

                    onCancelar={() => {

                        setModalAberto(false);

                        setPecaEditando(null);

                    }}

                />

            </PecaModal>

        </AdminLayout>

    );

}

export default PecasAdmin;