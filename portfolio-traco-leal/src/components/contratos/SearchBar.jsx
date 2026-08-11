function SearchBar({ value, onChange }) {

    return (

        <div style={{ marginLeft: "215px", marginTop: "30px", marginBottom: "30px" }}>
            <input

            type="text"

            placeholder="Pesquisar contrato..."

            value={value}

            onChange={(e) => onChange(e.target.value)}

            className="w-[500px] max-w-5xl rounded-lg border-1 border-[#555555] pl-8 pr-5 py-3 text-lg text-[#333333] placeholder:text-[#333333] outline-none focus:border-red-600"

        />
        </div>

    );

}

export default SearchBar;