import {
    FaFilePdf,
    FaFileWord,
    FaFilePowerpoint,
    FaFileExcel,
    FaFileAlt,
    FaDownload
} from "react-icons/fa";

import getBackendUrl from "../../services/url";

function FilesSection({ arquivos }) {

    if (!arquivos || arquivos.length === 0) {
        return null;
    }

    function getIcon(url) {

        const extensao = url
            .split("?")[0]
            .split(".")
            .pop()
            .toLowerCase();

        switch (extensao) {

            case "pdf":
                return (
                    <FaFilePdf
                        size={30}
                        color="#d32f2f"
                    />
                );

            case "doc":
            case "docx":
                return (
                    <FaFileWord
                        size={30}
                        color="#1565c0"
                    />
                );

            case "ppt":
            case "pptx":
                return (
                    <FaFilePowerpoint
                        size={30}
                        color="#ef6c00"
                    />
                );

            case "xls":
            case "xlsx":
                return (
                    <FaFileExcel
                        size={30}
                        color="#2e7d32"
                    />
                );

            default:
                return (
                    <FaFileAlt
                        size={30}
                        color="#666666"
                    />
                );

        }

    }

    return (

        <section
            style={{
                marginTop: "80px",
                marginBottom: "120px"
            }}
        >

            <h2
                style={{
                    fontSize: "30px",
                    fontWeight: "700",
                    color: "#333333",
                    marginBottom: "30px"
                }}
            >

                Arquivos

            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "25px"
                }}
            >

                {

                    arquivos.map((arquivo) => (

                        <a

                            key={arquivo.id}

                            href={
                                getBackendUrl(
                                    `/api/arquivos/${arquivo.id}/download`
                                )
                            }

                            style={{

                                display: "flex",

                                justifyContent: "space-between",

                                alignItems: "center",

                                padding: "22px",

                                border: "1px solid #dddddd",

                                borderRadius: "14px",

                                background: "#ffffff",

                                textDecoration: "none",

                                color: "#333333",

                                transition: ".3s",

                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,.05)"

                            }}

                            onMouseEnter={(e) => {

                                e.currentTarget.style.transform =
                                    "translateY(-4px)";

                                e.currentTarget.style.boxShadow =
                                    "0 10px 25px rgba(0,0,0,.12)";

                                e.currentTarget.style.borderColor =
                                    "#b91c1c";

                            }}

                            onMouseLeave={(e) => {

                                e.currentTarget.style.transform =
                                    "translateY(0)";

                                e.currentTarget.style.boxShadow =
                                    "0 4px 12px rgba(0,0,0,.05)";

                                e.currentTarget.style.borderColor =
                                    "#dddddd";

                            }}

                        >

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "18px"
                                }}
                            >

                                {getIcon(arquivo.arquivo)}

                                <div>

                                    <div
                                        style={{
                                            fontWeight: "600",
                                            fontSize: "18px",
                                            marginBottom: "5px"
                                        }}
                                    >

                                        {arquivo.titulo}

                                    </div>

                                    <div
                                        style={{
                                            color: "#666666",
                                            fontSize: "14px"
                                        }}
                                    >

                                        Download do arquivo

                                    </div>

                                </div>

                            </div>

                            <FaDownload
                                color="#999999"
                                size={18}
                            />

                        </a>

                    ))

                }

            </div>

        </section>

    );

}

export default FilesSection;