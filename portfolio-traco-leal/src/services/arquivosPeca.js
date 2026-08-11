import api from "./api";

export async function listarArquivos(pecaId) {

    const response = await api.get(
        `/pecas/${pecaId}/arquivos`
    );

    return response.data;

}

export async function criarArquivo(pecaId, arquivo, token) {

    const formData = new FormData();

    formData.append("titulo", arquivo.titulo);

    if (arquivo.arquivo) {

        formData.append(
            "arquivo",
            arquivo.arquivo
        );

    }

    const response = await api.post(

        `/pecas/${pecaId}/arquivos`,

        formData,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );

    return response.data;

}

export async function excluirArquivo(id, token) {

    await api.delete(

        `/arquivos/${id}`,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );

}