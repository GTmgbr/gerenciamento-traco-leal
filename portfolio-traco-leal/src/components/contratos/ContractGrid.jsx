import ContractCard from "./ContractCard";

function ContractGrid({ contratos }) {

    return (

        <div className="grid grid-cols-4 gap-4 justify-items-center justify-items-center" style={{ marginLeft: "190px" }}>

            {

                contratos.map((contrato) => (

                    <ContractCard
                        key={contrato.id}
                        contrato={contrato}
                    />

                ))

            }

        </div>

    );

}

export default ContractGrid;