import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ClientGrid from "../components/clientes/ClientGrid";

import clients from "../data/clients";

function Clientes() {

    return (

        <>

            <Hero />

            <Navbar />

            <main className="py-16 ">

                <div className="text-center">

                    <h2
                        className="text-3xl font-bold text-[#333333]"
                        style={{
                            marginTop: "25px",
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

                    <ClientGrid
                        clientes={clients}
                    />

                </div>

            </main>

            <Footer />

        </>

    );

}

export default Clientes;