function LinkModal({

    aberto,

    onClose,

    children

}) {

    if (!aberto) {
        return null;
    }

    return (

        <div

            onClick={onClose}

            style={{

                position: "fixed",

                inset: 0,

                background: "rgba(0,0,0,.55)",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                zIndex: 1000,

                padding: 20

            }}

        >

            <div

                onClick={(e) => e.stopPropagation()}

                style={{
                    color: "#333333",

                    width: "100%",

                    maxWidth: 550,

                    background: "#fff",

                    borderRadius: 16,

                    padding: 30,

                    boxSizing: "border-box",

                    boxShadow: "0 20px 50px rgba(0,0,0,.25)"

                }}

            >

                {children}

            </div>

        </div>

    );

}

export default LinkModal;