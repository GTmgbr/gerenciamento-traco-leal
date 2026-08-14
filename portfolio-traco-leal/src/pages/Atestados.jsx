import { useEffect, useMemo, useState } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import SearchBar from "../components/contratos/SearchBar";
import CategoryFilter from "../components/contratos/CategoryFilter";
import ContractGrid from "../components/contratos/ContractGrid";
import YearFilter from "../components/contratos/YearFilter";
import Footer from "../components/Footer";

import { listarDocumentos } from "../services/documentos";
import getBackendUrl from "../services/url";

function Atestados() {

    const [documentos, setDocumentos] = useState([]);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("Todos");

    const [fromYear, setFromYear] = useState(2010);

    const [toYear, setToYear] = useState(2030);

    useEffect(() => {

        async function carregarDocumentos() {

            try {

                const dados = await listarDocumentos();

                setDocumentos(dados);

            }

            catch (erro) {

                console.error(
                    "Erro ao carregar atestados:",
                    erro
                );

            }

        }

        carregarDocumentos();

    }, []);

    /*
     * Pega somente os documentos do tipo ATESTADO
     * e que estão ativos.
     */
    const atestados = useMemo(() => {

        return documentos.filter((documento) =>

            documento.tipo === "ATESTADO" &&
            documento.ativo === true

        );

    }, [documentos]);

    /*
     * Obtém todas as categorias existentes
     * nos atestados cadastrados.
     */
    const categorias = useMemo(() => {

        const lista = atestados.flatMap((documento) =>

            documento.categorias?.map(
                (categoria) => categoria.nome
            ) || []

        );

        return [...new Set(lista)].sort(
            (a, b) => a.localeCompare(b)
        );

    }, [atestados]);

    /*
     * Aplica pesquisa, categoria e intervalo de anos.
     */
    const filteredContracts = useMemo(() => {

        return [...atestados]

            .sort((a, b) =>
                a.titulo.localeCompare(b.titulo)
            )

            .filter((item) => {

                const byName =
                    item.titulo
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        );

                const byCategory =
                    category === "Todos" ||
                    item.categorias?.some(
                        (categoria) =>
                            categoria.nome === category
                    );

                const byYear =
                    item.ano >= fromYear &&
                    item.ano <= toYear;

                return (
                    byName &&
                    byCategory &&
                    byYear
                );

            });

    }, [
        atestados,
        search,
        category,
        fromYear,
        toYear
    ]);

    /*
     * Adapta os dados vindos da API para
     * o formato que o ContractGrid / ContractCard
     * já utiliza.
     */
    const contratosParaGrid = useMemo(() => {

        return filteredContracts.map((documento) => ({

            id: documento.id,

            titulo: documento.titulo,

            ano: documento.ano,

            categoria:
                documento.categorias?.[0]?.nome || "",

            categorias:
                documento.categorias || [],

            /*
             * URL do PDF armazenado pelo Multer.
             */
            arquivo:
                getBackendUrl(
                    `/uploads/documentos/${documento.arquivo}`
                ),

            /*
             * Logo do cliente associado ao documento.
             */
            logo:
                documento.cliente?.logo
                    ? getBackendUrl(
                        `/uploads/clientes/${documento.cliente.logo}`
                    )
                    : null,

            cliente:
                documento.cliente

        }));

    }, [filteredContracts]);

    return (

        <>

            <Hero />

            <Navbar />

            <main className="py-14">

                {/* Cabeçalho */}

                <div
                    className="text-center"
                    style={{
                        padding: "40px 0",
                        marginTop: "50px",
                        color: "#333333",
                        marginBottom: "50px"
                    }}
                >

                    <h2 className="text-3xl font-bold mb-8 mt-8">

                        Atestados da agência

                    </h2>

                </div>

                {/* Área principal */}

                <div className="max-w-[1400px] mx-auto mt-12 px-6">

                    {/* Pesquisa */}

                    <SearchBar
                        value={search}
                        onChange={setSearch}
                    />

                    {/* Ano */}

                    <YearFilter
                        fromYear={fromYear}
                        toYear={toYear}
                        onFromChange={setFromYear}
                        onToChange={setToYear}
                    />

                    {/* Categoria */}

                    <div className="mt-6">

                        <CategoryFilter
                            value={category}
                            onChange={setCategory}
                            categorias={categorias}
                        />

                    </div>

                    {/* Cards */}

                    <div className="mt-14">

                        <ContractGrid
                            contratos={contratosParaGrid}
                        />

                    </div>

                </div>

            </main>

            <Footer />

        </>

    );

}

export default Atestados;