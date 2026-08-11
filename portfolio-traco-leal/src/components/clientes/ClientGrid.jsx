import ClientLogo from "./ClientLogo";

function ClientGrid({ clientes }) {

    return (

        <div
            style={{
                width: "1500px",
                margin: "0 auto"
            }}
        >

            <div
               style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 340px)",
                    justifyContent: "center",
                    columnGap: "30px",
                    rowGap: "40px"
                }}
            >

                {clientes.map((cliente, index) => (

                    <ClientLogo
                        key={cliente.id}
                        cliente={cliente}
                        index={index}
                    />

                ))}

            </div>

        </div>

    );

}

export default ClientGrid;