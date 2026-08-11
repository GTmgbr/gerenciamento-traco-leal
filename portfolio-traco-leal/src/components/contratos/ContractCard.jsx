function ContractCard({ contrato }) {

    return (

        <a

            href={contrato.arquivo}

            target="_blank"

            rel="noreferrer"

            className="group w-60"

        >

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="flex justify-center items-center h-36">

                    <img

                        src={contrato.logo}

                        alt={contrato.titulo}

                        className="max-h-24 object-contain"

                    />

                </div>

            </div>

            <div className="mt-4 text-center">

                <h3 className="font-semibold text-[#333333]">

                    {contrato.titulo}

                </h3>

                <p className="text-[#333333]">

                    {contrato.ano}

                </p>

            </div>

        </a>

    );

}

export default ContractCard;