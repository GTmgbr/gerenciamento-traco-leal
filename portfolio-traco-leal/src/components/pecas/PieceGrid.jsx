import PieceCard from "./PieceCard";

function PieceGrid({ pieces }) {

    return (

        <div

            className="grid grid-cols-4 gap-4 justify-items-center"

            style={{ marginLeft: "190px" }}

        >

            {

                pieces.map((piece) => (

                    <PieceCard

                        key={piece.id}

                        piece={piece}

                    />

                ))

            }

        </div>

    );

}

export default PieceGrid;