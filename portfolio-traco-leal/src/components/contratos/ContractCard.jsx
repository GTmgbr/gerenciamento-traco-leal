import getBackendUrl from "../../services/url";

function ContractCard({ contrato }) {

    /*
     * Arquivo PDF
     *
     * Se já for uma URL/caminho completo,
     * mantém como está.
     *
     * Se for apenas o nome do arquivo vindo
     * da API, monta a URL do backend.
     */
    const arquivoUrl = contrato.arquivo
        ? contrato.arquivo.startsWith("http")
            ? contrato.arquivo
            : contrato.arquivo.startsWith("/uploads")
                ? getBackendUrl(contrato.arquivo)
                : getBackendUrl(
                    `/uploads/documentos/${contrato.arquivo}`
                )
        : null;


    /*
     * Logo
     *
     * Dados antigos:
     * contrato.logo
     *
     * Dados novos da API:
     * contrato.cliente.logo
     */
    const logo = contrato.cliente?.logo || contrato.logo;

    const logoUrl = logo
        ? logo.startsWith("http")
            ? logo
            : logo.startsWith("/uploads")
                ? getBackendUrl(logo)
                : getBackendUrl(
                    `/uploads/clientes/${logo}`
                )
        : null;


    return (

        <a

            href={arquivoUrl || "#"}

            target="_blank"

            rel="noreferrer"

            className="group w-60"

            onClick={(e) => {

                if (!arquivoUrl) {

                    e.preventDefault();

                }

            }}

        >

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="flex justify-center items-center h-36">

                    {logoUrl ? (

                        <img

                            src={logoUrl}

                            alt={
                                contrato.cliente?.nome ||
                                contrato.titulo
                            }

                            className="max-h-24 object-contain"

                        />

                    ) : (

                        <div className="text-gray-400">

                            Sem logo

                        </div>

                    )}

                </div>

            </div>

            <div className="mt-4 text-center">

                <h3 className="font-semibold text-[#333333]">

                    {contrato.titulo}

                </h3>

                <p className="text-[#333333]">

                    {contrato.ano}

                </p>

                {contrato.cliente?.nome && (

                    <p className="text-sm text-[#666666] mt-1">

                        {contrato.cliente.nome}

                    </p>

                )}

            </div>

        </a>

    );

}

export default ContractCard;