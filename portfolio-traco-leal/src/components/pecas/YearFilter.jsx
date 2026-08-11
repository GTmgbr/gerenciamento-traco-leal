function YearFilter({ fromYear, toYear, onFromChange, onToChange }) {

    const anos = [];

    for (let ano = 2010; ano <= 2030; ano++) {
        anos.push(ano);
    }

    return (

        <div
            style={{
                marginLeft: "215px",
                marginTop: "30px",
                marginBottom: "40px"
            }}
        >

            <div className="flex items-center gap-6">

                <span className="font-semibold text-[#333333]">

                    Ano

                </span>

                <select

                    value={fromYear}

                    onChange={(e) => onFromChange(Number(e.target.value))}

                    className="w-[170px] rounded-lg border-1 border-[#555555] bg-[#f5f5f5] px-5 py-3 text-[#333333] outline-none focus:border-red-600"

                >

                    {anos.map((ano) => (

                        <option
                            key={ano}
                            value={ano}
                        >

                            {ano}

                        </option>

                    ))}

                </select>

                <span className="text-[#333333]">

                    até

                </span>

                <select

                    value={toYear}

                    onChange={(e) => onToChange(Number(e.target.value))}

                    className="w-[170px] rounded-lg border-1 border-[#555555] bg-[#f5f5f5] px-5 py-3 text-[#333333] outline-none focus:border-red-600"

                >

                    {anos.map((ano) => (

                        <option
                            key={ano}
                            value={ano}
                        >

                            {ano}

                        </option>

                    ))}

                </select>

            </div>

        </div>

    );

}

export default YearFilter;