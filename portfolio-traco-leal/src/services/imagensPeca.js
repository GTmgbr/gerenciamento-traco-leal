import api from "./api";

export async function listarImagens(pecaId) {

    const response = await api.get(
        `/pecas/${pecaId}/imagens`
    );

    return response.data;

}

export async function criarImagem(pecaId, imagem, token) {

    const formData = new FormData();

    formData.append("legenda", imagem.legenda);
    formData.append("destaque", imagem.destaque);
    formData.append("ordem", imagem.ordem);

    if (imagem.arquivo) {
        formData.append("arquivo", imagem.arquivo);
    }

    const response = await api.post(

        `/pecas/${pecaId}/imagens`,

        formData,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

    );

    return response.data;

}

export async function excluirImagem(id, token) {

    await api.delete(
        `/imagens/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

}