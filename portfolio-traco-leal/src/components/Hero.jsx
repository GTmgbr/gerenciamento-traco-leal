import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

function Hero() {

    return (

        <section
            className="relative h-[550px] w-full bg-cover"
            style={{
                backgroundImage: "url('/images/banner.png')",
                backgroundPosition: "center 75%",
            }}
        >

            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-black/20">

                {/* Redes Sociais */}
                <div
                    style={{
                        position: "absolute",
                        top: "30px",
                        right: "50px",
                        display: "flex",
                        gap: "20px",
                        zIndex: "10"
                    }}
                >

                    <a
                        href="https://www.instagram.com/tracolealcomunicacao/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: "white",
                            transition: "0.3s"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                            e.currentTarget.style.color = "#d32f2f";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.color = "white";
                        }}
                    >
                        <FaInstagram size={28} />
                    </a>

                    <a
                        href="https://www.facebook.com/tracoleal/?locale=pt_BR"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: "white",
                            transition: "0.3s"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                            e.currentTarget.style.color = "#d32f2f";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.color = "white";
                        }}
                    >
                        <FaFacebookF size={26} />
                    </a>

                    <a
                        href="https://www.youtube.com/@tracoleal"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: "white",
                            transition: "0.3s"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                            e.currentTarget.style.color = "#d32f2f";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.color = "white";
                        }}
                    >
                        <FaYoutube size={30} />
                    </a>

                </div>

                {/* Container central */}
                <div
                    className="w-full h-full flex items-center"
                    style={{ transform: "translateY(-100px)" }}
                >

                    <div className="w-[1400px] mx-auto flex items-center">

                        {/* Logo */}
                        <div style={{ marginLeft: "80px" }}>

                            <img
                                src="/images/logo.png"
                                alt="Traço Leal"
                                className="w-40"
                            />

                        </div>

                        {/* Texto */}
                        <div
                            className="ml-58 text-white"
                            style={{ marginLeft: "120px" }}
                        >

                            <div className="space-y-8">

                                <h1 className="text-2xl leading-relaxed max-w-3xl">
                                    #suldeminasbrasilafora | #40anos
                                </h1>

                                <p className="text-2xl leading-relaxed max-w-3xl">
                                    Há 40 anos acreditamos na criatividade, na lealdade, no trabalho, na dedicação e na inovação.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;