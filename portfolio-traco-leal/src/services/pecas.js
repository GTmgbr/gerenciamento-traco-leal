import api from "./api";

export async function listarPecas() {

    const response = await api.get("/pecas");

    return response.data;

}


export async function buscarPecaPorSlug(slug) {

    const response = await api.get(
        `/pecas/slug/${slug}`
    );

    return response.data;

}


export async function criarPeca(peca, token) {

    const response = await api.post(

        "/pecas",

        peca,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    return response.data;

}


export async function atualizarPeca(
    id,
    peca,
    token
) {

    const response = await api.put(

        `/pecas/${id}`,

        peca,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    return response.data;

}


export async function excluirPeca(id, token) {

    await api.delete(

        `/pecas/${id}`,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

}


export async function buscarPeca(id) {

    const response = await api.get(
        `/pecas/${id}`
    );

    return response.data;

}