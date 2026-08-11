import api from "./api";

export async function listarLinks(pecaId) {

    const response = await api.get(
        `/pecas/${pecaId}/links`
    );

    return response.data;

}

export async function criarLink(pecaId, link, token) {

    const response = await api.post(

        `/pecas/${pecaId}/links`,

        link,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    return response.data;

}

export async function atualizarLink(id, link, token) {

    const response = await api.put(

        `/links/${id}`,

        link,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    return response.data;

}

export async function excluirLink(id, token) {

    await api.delete(

        `/links/${id}`,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

}