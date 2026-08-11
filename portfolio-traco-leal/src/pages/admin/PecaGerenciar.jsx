import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import ImagemManager from "../../components/admin/pecas/imagens/ImagemManager";
import { listarLinks } from "../../services/linksPeca";
import LinkManager from "../../components/admin/pecas/links/LinkManager";
import { listarArquivos } from "../../services/arquivosPeca";

import ArquivoManager
    from "../../components/admin/pecas/arquivos/ArquivoManager";

import {

    listarImagens,

    criarImagem,

    excluirImagem

} from "../../services/imagensPeca";

import AdminLayout from "../../components/admin/AdminLayout";

import { buscarPeca } from "../../services/pecas";

function PecaGerenciar() {

    const { id } = useParams();

    const { token } = useAuth();

    const [imagens, setImagens] = useState([]);

    const [peca, setPeca] = useState(null);

    const [carregando, setCarregando] = useState(true);

    const [links, setLinks] = useState([]);

    const [arquivos, setArquivos] = useState([]);

    async function carregarImagens() {

        try {

            const dados = await listarImagens(id);

            setImagens(dados);

        }

        catch (erro) {

            console.error(erro);

        }

    }

    async function carregarLinks() {

        try {

            const dados = await listarLinks(id);

            setLinks(dados);

        }

        catch (erro) {

            console.error(erro);

        }

    }

    async function carregarArquivos() {

    try {

        const dados = await listarArquivos(id);

        setArquivos(dados);

    }

    catch (erro) {

        console.error(erro);

    }

}

    useEffect(() => {

        async function carregarPeca() {

            try {

                const dados = await buscarPeca(id);

                setPeca(dados);

            }

            catch (erro) {

                console.error(erro);

            }

            finally {

                setCarregando(false);

            }

        }

        async function carregarTudo() {

            await carregarPeca();

            await carregarImagens();

            await carregarLinks();

            await carregarArquivos();

        }

        carregarTudo();

    }, [id]);

    if (carregando) {

        return (

            <AdminLayout>

                <h2>Carregando...</h2>

            </AdminLayout>

        );

    }

    if (!peca) {

        return (

            <AdminLayout>

                <h2>Peça não encontrada.</h2>

            </AdminLayout>

        );

    }

    return (

        <AdminLayout>

            <h1

                style={{

                    marginTop: 0,

                    marginBottom: 30

                }}

            >

                Gerenciar Peça

            </h1>

            <div

                style={{

                    background: "#fff",

                    borderRadius: 16,

                    padding: 30,

                    marginBottom: 30,

                    boxShadow: "0 8px 20px rgba(0,0,0,.08)",

                    color: "#333"

                }}

            >

                <h2

                    style={{

                        marginTop: 0,

                        marginBottom: 25

                    }}

                >

                    {peca.titulo}

                </h2>

                <p>

                    <strong>Cliente:</strong>{" "}

                    {peca.cliente?.nome}

                </p>

                <p>

                    <strong>Categoria:</strong>{" "}

                    {peca.categoria}

                </p>

                <p>

                    <strong>Ano:</strong>{" "}

                    {peca.ano}

                </p>

                <p>

                    <strong>Descrição:</strong>

                </p>

                <div

                    style={{

                        background: "#f8f8f8",

                        padding: 18,

                        borderRadius: 10,

                        lineHeight: 1.6

                    }}

                >

                    {peca.descricao || "Sem descrição."}

                </div>

            </div>

            <div

                style={{

                    display: "grid",

                    gridTemplateColumns: "repeat(3,1fr)",

                    gap: 25

                }}

            >

                <Card
                    titulo="🖼 Imagens"
                    quantidade={imagens.length}
                />

                <Card

                    titulo="🔗 Links"

                    quantidade={peca.links.length}

                />

                <Card

                    titulo="📁 Arquivos"

                    quantidade={peca.arquivos.length}

                />

            </div>

            <ImagemManager

                pecaId={id}

                imagens={imagens}

                carregarImagens={carregarImagens}

            />

            <LinkManager

                pecaId={id}

                links={links}

                carregarLinks={carregarLinks}

            />

            <ArquivoManager

                pecaId={id}

                arquivos={arquivos}

                carregarArquivos={carregarArquivos}

            />
            

        </AdminLayout>

    );

}

function Card({
    titulo,
    quantidade
}) {

    return (

        <div

            style={{

                background: "#fff",

                borderRadius: 16,

                padding: 30,

                textAlign: "center",

                boxShadow: "0 8px 20px rgba(0,0,0,.08)",

                color: "#333"

            }}

        >

            <h3

                style={{

                    marginTop: 0,

                    marginBottom: 18

                }}

            >

                {titulo}

            </h3>

            <div

                style={{

                    fontSize: 42,

                    fontWeight: 700,

                    color: "#c40000"

                }}

            >

                {quantidade}

            </div>

        </div>

    );

}


export default PecaGerenciar;