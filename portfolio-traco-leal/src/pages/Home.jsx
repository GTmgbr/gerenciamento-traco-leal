import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {

    return (

        <>

            <Hero />

            <Navbar />

            <main className="w-full">

                <section className="py-20 px-16">

                    <h2 className="text-5xl font-bold">

                        Bem-vindo

                    </h2>

                    <p className="mt-6 text-lg text-gray-600">

                        Aqui ficará todo o conteúdo da página inicial.

                    </p>

                </section>

            </main>

        </>

    );

}

export default Home;