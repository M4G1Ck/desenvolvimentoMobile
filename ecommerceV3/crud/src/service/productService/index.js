/* eslint-disable prettier/prettier */
import Api from "../Api";

const getAllProdutos = () => {
    return Api.get(`listar-todos`);
};

const getProdutoById = (id) => {
    return Api.get(`buscar/${id}`);
};

const deleteProduto = (id) => {
    return Api.delete(`deletar/${id}`);
};

const postProduto = (produto) => {
    return Api.post(`cadastrar`, produto);
};

const putProduto = (id, produto) => {
    return Api.put(`atualizar/${id}`, produto);
};

export default {
    getAllProdutos,
    getProdutoById,
    deleteProduto,
    postProduto,
    putProduto,
};