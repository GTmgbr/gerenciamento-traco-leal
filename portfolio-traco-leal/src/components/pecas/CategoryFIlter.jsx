function CategoryFilter({ value, onChange }) {

    return (

        <div style={{ marginLeft: "215px", marginTop: "20px", marginBottom: "30px" }}>

            <select

                value={value}

                onChange={(e) => onChange(e.target.value)}

                className="w-[500px] rounded-lg border-1 border-[#555555] bg-[#f5f5f5] pl-8 pr-5 py-3 text-[#333333] outline-none focus:border-red-600"

            >

                <option value="Todos">Todos</option>
                <option value="Sites">Sites</option>
                <option value="Impressões">Impressões</option>
                <option value="Documentos">Documentos</option>
                <option value="Termos">Termos</option>

            </select>

        </div>

    );

}

export default CategoryFilter;