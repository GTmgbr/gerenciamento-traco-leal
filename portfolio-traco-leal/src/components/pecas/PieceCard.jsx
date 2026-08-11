import { Link } from "react-router-dom";

function PieceCard({ piece }) {

    return (

        <Link

            to={`/pecas/${piece.slug}`}

            className="group w-60"

        >

            <div className="rounded-xl  bg-white p-6 shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="flex justify-center items-center h-36">

                    <img

                        src={piece.logo}

                        alt={piece.titulo}

                        className="max-h-24 object-contain"

                    />

                </div>

            </div>

            <div className="mt-4 text-center">

                <h3 className="font-semibold text-[#333333]">

                    {piece.titulo}

                </h3>

                <p className="text-[#666666]">

                    {piece.ano}

                </p>

            </div>

        </Link>

    );

}

export default PieceCard;