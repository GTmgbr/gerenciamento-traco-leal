import { useMemo, useState } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SearchBar from "../components/pecas/SearchBar";
import CategoryFilter from "../components/pecas/CategoryFilter";
import PieceGrid from "../components/pecas/PieceGrid";
import YearFilter from "../components/pecas/YearFilter";

import pieces from "../data/pieces";

function Pecas() {

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("Todos");

    const [fromYear, setFromYear] = useState(2010);

    const [toYear, setToYear] = useState(2030);

    const filteredPieces = useMemo(() => {

    return [...pieces]

        .sort((a, b) => a.titulo.localeCompare(b.titulo))

        .filter((item) => {

            const byName = item.titulo
                .toLowerCase()
                .includes(search.toLowerCase());

            const byCategory =
                category === "Todos"
                ||
                item.categoria === category;

            const byYear =
                item.ano >= fromYear &&
                item.ano <= toYear;

            return byName && byCategory && byYear;

        });

    }, [search, category, fromYear, toYear]);

    return (

        <>

            <Hero />

            <Navbar />

            <main className="py-14">

                {/* Cabeçalho */}

                <div className="text-center" style={{padding: "40px 0", marginTop: "50px", color: "#333333", marginBottom: "50px"}}>

                    <h2 className="text-3xl font-bold mb-8 mt-8">

                        Portfólio de peças produzidas pela agência

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

                    {/* Combobox */}

                    <div className="mt-6">

                        <CategoryFilter
                            value={category}
                            onChange={setCategory}
                        />

                    </div>

                    {/* Cards */}

                    <div className="mt-14">

                        <PieceGrid
                            pieces={filteredPieces}
                        />

                    </div>

                </div>

            </main>

            <Footer />

        </>

    );

}

export default Pecas;