function DocumentoModal({

    aberto,

    titulo,

    children,

    onClose

}) {

    if (!aberto) {

        return null;

    }

    return (

        <div

            style={{

                position: "fixed",

                inset: 0,

                background: "rgba(0,0,0,.45)",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                zIndex: 999

            }}

        >

            <div

                style={{
                    color: "#333333",

                    width: 650,

                    background: "#fff",

                    borderRadius: 12,

                    padding: 30

                }}

            >

                <div

                    style={{

                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: "center",

                        marginBottom: 25

                    }}

                >

                    <h2>{titulo}</h2>

                    <button

                        onClick={onClose}

                        style={{

                            border: "none",

                            background: "transparent",

                            cursor: "pointer",

                            fontSize: 22

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

export default DocumentoModal;