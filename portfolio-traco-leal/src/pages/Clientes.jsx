import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ClientGrid from "../components/clientes/ClientGrid";

import { listarClientes } from "../services/clientes";

function Clientes() {

    const [clientes, setClientes] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {

        async function carregarClientes() {

            try {

                const dados = await listarClientes();

                setClientes(dados);

            }

            catch (erro) {

                console.error(
                    "Erro ao carregar clientes:",
                    erro
                );

                setErro(true);

            }

            finally {

                setCarregando(false);

            }

        }

        carregarClientes();

    }, []);

    return (

        <>

            <Hero />

            <Navbar />

            <main className="py-16">

                <div className="text-center">

                    <h2
                        className="text-3xl font-bold text-[#333333]"
                        style={{
                            marginTop: "35px",
                            marginBottom: "35px"
                        }}
                    >

                        Clientes

                    </h2>

                    <p
                        className="text-lg text-[#666666]"
                        style={{
                            marginTop: "20px",
                            marginBottom: "40px"
                        }}
                    >

                        Empresas e instituições que confiaram em nosso trabalho

                    </p>

                </div>

                <div
                    className="max-w-[1400px] mx-auto mt-20"
                >

                    {carregando && (

                        <p className="text-center text-[#666666]">

                            Carregando clientes...

                        </p>

                    )}

                    {!carregando && erro && (

                        <p className="text-center text-red-600">

                            Não foi possível carregar os clientes.

                        </p>

                    )}

                    {!carregando && !erro && (

                        <ClientGrid
                            clientes={clientes}
                        />

                    )}

                </div>

            </main>

            <Footer />

        </>

    );

}

export default Clientes;