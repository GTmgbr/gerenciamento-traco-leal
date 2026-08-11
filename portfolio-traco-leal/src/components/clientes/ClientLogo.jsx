function ClientLogo({ cliente, index }) {

    return (

        <div

            style={{
                width: "340px",
                height: "220px",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                cursor: "pointer",

                transition: "0.5s",

                
            }}

        >

            <img

                src={cliente.logo}

                alt={cliente.nome}

                style={{
                    marginLeft: "95px",
                    maxWidth: "340px",
                    maxHeight: "210px",

                    objectFit: "contain",

                    filter: "grayscale(100%)",

                    opacity: "0.7",

                    transition: "0.5s"
                }}

                onMouseEnter={(e) => {

                    e.target.style.filter = "grayscale(0%)";
                    e.target.style.opacity = "1";
                    e.target.style.transform = "scale(1.10)";

                }}

                onMouseLeave={(e) => {

                    e.target.style.filter = "grayscale(100%)";
                    e.target.style.opacity = "0.7";
                    e.target.style.transform = "scale(1)";

                }}

            />

            <p
                style={{
                    marginTop: "12px",
                    marginLeft: "95px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333333",
                    textAlign: "center"
                }}
            >
                {cliente.nome}
            </p>

        </div>

    );

}

export default ClientLogo;