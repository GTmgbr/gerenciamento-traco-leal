import { FaSearch } from "react-icons/fa";

function SearchBox({ value, onChange }) {

    return (

        <div
            style={{
                position: "relative",
                width: "380px"
            }}
        >

            <FaSearch
                style={{
                    position: "absolute",
                    top: "17px",
                    left: "18px",
                    color: "#999"
                }}
            />

            <input

                value={value}

                onChange={(e) => onChange(e.target.value)}

                placeholder="Pesquisar documento..."

                style={{

                    width: "100%",

                    padding: "14px 20px 14px 46px",

                    borderRadius: "10px",

                    color: "#333333",

                    border: "1px solid #ddd",

                    fontSize: "15px",

                    outline: "none"

                }}

            />

        </div>

    );

}

export default SearchBox;