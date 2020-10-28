import axios from 'axios';
import url from './enviroment';

const prefix = 'categoria';

const categoriaService = {
    async getCategoriaList(){
        return await axios.get(`${url}/${prefix}/`);
    },

    async getCategoriaById(codCategoria){
        return await axios.get(`${url}/${prefix}/${codCategoria}`);
    },

    async getCategoriaByProfession(codCategoria){
        return await axios.get(`${url}/${prefix}/${codCategoria}/profissao`);
    },

    async setCategoria(data){
        return await axios.post(`${url}/${prefix}/`, data)
    },

    async updateCategoria(codCategoria, data){
        return await axios.put(`${url}/${prefix}/${codCategoria}`, data)
    },

    async deleteCategoria(codCategoria){
        return await axios.delete(`${url}/${prefix}/${codCategoria}`)
    },
}

export default categoriaService;