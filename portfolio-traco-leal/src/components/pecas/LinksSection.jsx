import { FaGlobe, FaExternalLinkAlt } from "react-icons/fa";

function LinksSection({ links }) {

    if (!links || links.length === 0) return null;

    return (

        <section
            style={{
                marginTop: "80px",
                marginBottom: "80px"
            }}
        >

            <h2
                style={{
                    fontSize: "30px",
                    color: "#333333",
                    marginBottom: "30px",
                    fontWeight: "700"
                }}
            >

                Links relacionados

            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "25px"
                }}
            >

                {

                    links.map((link, index) => (

                        <a

                            key={index}

                            href={link.url}

                            target="_blank"

                            rel="noreferrer"

                            style={{

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "space-between",

                                padding: "22px",

                                border: "1px solid #dddddd",

                                borderRadius: "14px",

                                background: "#ffffff",

                                textDecoration: "none",

                                color: "#333333",

                                transition: ".3s",

                                boxShadow: "0 4px 12px rgba(0,0,0,.05)"

                            }}

                            onMouseEnter={(e) => {

                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";
                                e.currentTarget.style.borderColor = "#b91c1c";

                            }}

                            onMouseLeave={(e) => {

                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,.05)";
                                e.currentTarget.style.borderColor = "#dddddd";

                            }}

                        >

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "18px"
                                }}
                            >

                                <FaGlobe
                                    size={28}
                                    color="#b91c1c"
                                />

                                <div>

                                    <div
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            marginBottom: "5px"
                                        }}
                                    >

                                        {link.titulo}

                                    </div>

                                    <div
                                        style={{
                                            color: "#666666",
                                            fontSize: "14px"
                                        }}
                                    >

                                        Abrir link

                                    </div>

                                </div>

                            </div>

                            <FaExternalLinkAlt
                                color="#999999"
                            />

                        </a>

                    ))

                }

            </div>

        </section>

    );

}

export default LinksSection;