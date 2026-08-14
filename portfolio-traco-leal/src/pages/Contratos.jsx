import { useEffect, useMemo, useState } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import SearchBar from "../components/contratos/SearchBar";
import CategoryFilter from "../components/contratos/CategoryFilter";
import ContractGrid from "../components/contratos/ContractGrid";
import YearFilter from "../components/contratos/YearFilter";
import Footer from "../components/Footer";

import { listarDocumentos } from "../services/documentos";

function Contratos() {

    const [documentos, setDocumentos] = useState([]);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("Todos");

    const [fromYear, setFromYear] = useState(2010);

    const [toYear, setToYear] = useState(2030);

    const [carregando, setCarregando] = useState(true);

    const [erro, setErro] = useState("");

    useEffect(() => {

        async function carregarDocumentos() {

            try {

                setCarregando(true);

                const dados = await listarDocumentos();

                setDocumentos(dados);

            }

            catch (erro) {

                console.error(erro);

                setErro(
                    "Não foi possível carregar os documentos."
                );

            }

            finally {

                setCarregando(false);

            }

        }

        carregarDocumentos();

    }, []);

    const contratos = useMemo(() => {

        return documentos.filter(
            (documento) =>
                documento.tipo === "CONTRATO" &&
                documento.ativo
        );

    }, [documentos]);

    const categorias = useMemo(() => {

        const nomes = contratos.flatMap(
            (documento) =>
                documento.categorias?.map(
                    (categoria) => categoria.nome
                ) || []
        );

        return [
            "Todos",
            ...new Set(nomes)
        ];

    }, [contratos]);

    const filteredContracts = useMemo(() => {

        return [...contratos]

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
        contratos,
        search,
        category,
        fromYear,
        toYear
    ]);

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

                        Repositório de contratos da agência

                    </h2>

                </div>

                {/* Área principal */}

                <div className="max-w-[1400px] mx-auto mt-12 px-6">

                    {carregando && (

                        <p className="text-center text-gray-500">

                            Carregando contratos...

                        </p>

                    )}

                    {erro && (

                        <p className="text-center text-red-600">

                            {erro}

                        </p>

                    )}

                    {!carregando && !erro && (

                        <>

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
                                    contratos={filteredContracts}
                                />

                            </div>

                        </>

                    )}

                </div>

            </main>

            <Footer />

        </>

    );

}

export default Contratos;