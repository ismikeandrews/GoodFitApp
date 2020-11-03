import axios from 'axios';
import url from './enviroment';

const prefix = 'categoria';

const categoriaService = {
    async getCategoriaList(){
        return await axios.get(`${url.development}/${prefix}/`);
    },

    async getCategoriaById(codCategoria){
        return await axios.get(`${url.development}/${prefix}/${codCategoria}`);
    },

    async getCategoriaByProfession(codCategoria){
        return await axios.get(`${url.development}/${prefix}/${codCategoria}/profissao`);
    },

    async setCategoria(data){
        return await axios.post(`${url.development}/${prefix}/`, data)
    },

    async updateCategoria(codCategoria, data){
        return await axios.put(`${url.development}/${prefix}/${codCategoria}`, data)
    },

    async deleteCategoria(codCategoria){
        return await axios.delete(`${url.development}/${prefix}/${codCategoria}`)
    },
}

export default categoriaService;