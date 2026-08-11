import api from "./api";

export async function buscarResumoDashboard() {

const response = await api.get(
    "/dashboard/resumo"
);

return response.data;

}

export async function buscarAtividadesDashboard() {

const response = await api.get(
    "/dashboard/atividades"
);

return response.data;

}
