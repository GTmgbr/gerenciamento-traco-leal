import api from "./api";

export async function listarDocumentos() {

    const response = await api.get("/documentos");

    return response.data;

}