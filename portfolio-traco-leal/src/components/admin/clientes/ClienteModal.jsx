function ClienteModal({ aberto, titulo, children, onClose }) {

    if (!aberto) return null;

    return (

        <div

            onClick={onClose}

            style={{

                position: "fixed",

                inset: 0,

                color: "#333333",

                background: "rgba(0,0,0,.45)",

                display: "flex",

                justifyContent: "center",

                alignItems: "flex-start",

                overflowY: "auto",

                padding: "30px 20px",

                zIndex: 9999

            }}

        >

            <div

                onClick={(e) => e.stopPropagation()}

                style={{

                    width: "850px",

                    maxWidth: "95vw",

                    background: "#fff",

                    borderRadius: "18px",

                    padding: "35px",

                    marginTop: "30px",

                    marginBottom: "30px",

                    boxShadow: "0 20px 60px rgba(0,0,0,.25)"

                }}

            >

                <div

                    style={{

                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: "center",

                        marginBottom: "30px"

                    }}

                >

                    <h2

                        style={{

                            margin: 0

                        }}

                    >

                        {titulo}

                    </h2>

                    <button

                        onClick={onClose}

                        style={{

                            background: "transparent",

                            border: "none",

                            fontSize: "30px",

                            cursor: "pointer",

                            color: "#555"

                        }}

                    >

                        ×

                    </button>

                </div>

                {children}

            </div>

        </div>

    );

}

export default ClienteModal;