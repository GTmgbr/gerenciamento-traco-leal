function ImagemModal({

    aberto,

    onClose,

    children

}) {

    if (!aberto) return null;

    return (

        <div

            onClick={onClose}

            style={{
                color: "#333333",

                position: "fixed",

                inset: 0,

                background: "rgba(0,0,0,.45)",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                zIndex: 9999

            }}

        >

            <div

                onClick={(e) => e.stopPropagation()}

                style={{

                    width: 550,

                    maxWidth: "95%",

                    background: "#fff",

                    borderRadius: 18,

                    padding: 30,

                    boxShadow: "0 20px 60px rgba(0,0,0,.25)"

                }}

            >

                {children}

            </div>

        </div>

    );

}

export default ImagemModal;