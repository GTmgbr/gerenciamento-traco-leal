import api from "./api";

export async function listarClientes() {

    const response = await api.get("/clientes");

    return response.data;

}

export async function criarCliente(cliente, token) {

    const formData = new FormData();

    formData.append("nome", cliente.nome);

    formData.append("site", cliente.site);

    formData.append("descricao", cliente.descricao);

    formData.append("ativo", cliente.ativo);

    if (cliente.logo) {

        formData.append("logo", cliente.logo);

    }

    const response = await api.post(

        "/clientes",

        formData,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    return response.data;

}

export async function atualizarCliente(id, cliente, token) {

    const formData = new FormData();

    formData.append("nome", cliente.nome);

    formData.append("site", cliente.site || "");

    formData.append("descricao", cliente.descricao || "");

    formData.append("ativo", cliente.ativo);

    if (cliente.logo instanceof File) {

        formData.append("logo", cliente.logo);

    }

    const response = await api.put(

        `/clientes/${id}`,

        formData,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    return response.data;

}

export async function excluirCliente(id, token) {

    await api.delete(

        `/clientes/${id}`,

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

}