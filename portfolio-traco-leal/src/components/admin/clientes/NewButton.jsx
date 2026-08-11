import { FaPlus } from "react-icons/fa";

function NewButton({ onClick }) {

    return (

        <button

            onClick={onClick}

            style={{

                background: "#c40000",

                color: "white",

                border: "none",

                borderRadius: "10px",

                padding: "14px 22px",

                cursor: "pointer",

                fontWeight: 600,

                display: "flex",

                alignItems: "center",

                gap: "10px"

            }}

        >

            <FaPlus />

            Novo Cliente

        </button>

    );

}

export default NewButton;