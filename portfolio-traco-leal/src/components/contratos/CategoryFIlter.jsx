function CategoryFilter({ value, onChange, categorias = [] }) {

    return (

        <div
            style={{
                color: "#333333",
                marginLeft: "215px",
                marginTop: "20px",
                marginBottom: "30px"
            }}
        >

            <select

                value={value}

                onChange={(e) =>
                    onChange(e.target.value)
                }

                className="w-[500px] rounded-lg border-1 border-[#555555] bg-[#f5f5f5] pl-8 pr-5 py-3 text-[#333333] outline-none focus:border-red-600"

            >

                <option value="Todos">
                    Todos
                </option>

                {categorias
                    .filter(
                        (categoria) =>
                            categoria !== "Todos"
                    )
                    .map((categoria) => (

                        <option
                            key={categoria}
                            value={categoria}
                        >

                            {categoria}

                        </option>

                    ))
                }

            </select>

        </div>

    );

}

export default CategoryFilter;