import api from "./api";

export async function listarDocumentos() {

    const response = await api.get("/documentos");

    return response.data;

}

export async function criarDocumento(documento, token) {

    const formData = new FormData();

    formData.append("titulo", documento.titulo);

    formData.append("tipo", documento.tipo);

    formData.append("ano", documento.ano);

    formData.append("ativo", documento.ativo);

    formData.append("clienteId", documento.clienteId);

    formData.append(
        "categorias",
        JSON.stringify(documento.categorias)
    );

    if (documento.arquivo) {

        formData.append("arquivo", documento.arquivo);

    }

    const response = await api.post(

        "/documentos",

        formData,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    return response.data;

}

export async function atualizarDocumento(id, documento, token) {

    const formData = new FormData();

    formData.append("titulo", documento.titulo);

    formData.append("tipo", documento.tipo);

    formData.append("ano", documento.ano);

    formData.append("ativo", documento.ativo);

    formData.append("clienteId", documento.clienteId);

    formData.append(
        "categorias",
        JSON.stringify(documento.categorias)
    );

    if (documento.arquivo instanceof File) {

        formData.append("arquivo", documento.arquivo);

    } else {

        formData.append("arquivo", documento.arquivo || "");

    }

    const response = await api.put(

        `/documentos/${id}`,

        formData,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    return response.data;

}

export async function excluirDocumento(id, token) {

    await api.delete(

        `/documentos/${id}`,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

}