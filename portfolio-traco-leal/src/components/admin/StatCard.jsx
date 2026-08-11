import {
    FaUsers,
    FaImages,
    FaFileAlt,
    FaClipboardCheck
} from "react-icons/fa";

function StatCard({

    titulo,

    valor

}) {

    const icones = {

        Clientes: <FaUsers />,

        Contratos: <FaFileAlt />,

        Atestados: <FaClipboardCheck />,

        Peças: <FaImages />

    };

    return (

        <div

            style={{

                background: "#ffffff",

                borderRadius: "16px",

                padding: "28px",

                boxShadow: "0 8px 20px rgba(0,0,0,.06)",

                transition: ".3s"

            }}

        >

            <div

                style={{

                    display: "flex",

                    justifyContent: "space-between",

                    alignItems: "center"

                }}

            >

                <div>

                    <p

                        style={{

                            margin: 0,

                            color: "#777",

                            fontSize: 15

                        }}

                    >

                        {titulo}

                    </p>

                    <h2

                        style={{

                            marginTop: "12px",

                            marginBottom: 0,

                            fontSize: "42px",

                            color: "#333"

                        }}

                    >

                        {valor}

                    </h2>

                </div>

                <div

                    style={{

                        width: "60px",

                        height: "60px",

                        borderRadius: "50%",

                        background: "#fff3f3",

                        color: "#c40000",

                        display: "flex",

                        alignItems: "center",

                        justifyContent: "center",

                        fontSize: "26px"

                    }}

                >

                    {icones[titulo]}

                </div>

            </div>

        </div>

    );

}

export default StatCard;