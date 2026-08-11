function PecaModal({

    aberto,

    titulo,

    children,

    onClose

}) {

    if (!aberto) return null;

    return (

        <div

            onClick={onClose}

            style={{

                position: "fixed",

                inset: 0,

                background: "rgba(0,0,0,.45)",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                padding: 30,

                overflowY: "auto",

                zIndex: 9999

            }}

        >

            <div

                onClick={(e) => e.stopPropagation()}

                style={{
                    color: "#333333",

                    width: "720px",

                    maxWidth: "100%",

                    maxHeight: "90vh",

                    overflowY: "auto",

                    background: "#fff",

                    borderRadius: 18,

                    padding: 35,

                    boxShadow: "0 20px 60px rgba(0,0,0,.25)"

                }}

            >

                <div

                    style={{
                        color: "#333333",

                        display: "flex",

                        justifyContent: "space-between",

                        alignItems: "center",

                        marginBottom: 30

                    }}

                >

                    <h2 style={{ margin: 0 }}>

                        {titulo}

                    </h2>

                    <button

                        onClick={onClose}

                        style={{
                            color: "#333333",

                            border: "none",

                            background: "transparent",

                            fontSize: 30,

                            cursor: "pointer"

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

export default PecaModal;