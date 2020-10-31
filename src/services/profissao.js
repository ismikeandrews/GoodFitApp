import axios from 'axios';
import url from './enviroment';

const prefix = 'profissao';

const profissaoService = {
    
    async getProfissaoList() {
        return axios.get(`${url}/${prefix}/`);
    },

    async getProfissaoByProfissaoId(codProfissao) {
        const { data } = await axios.get(`${url}/${prefix}/${codProfissao}`);
        return data
    },

    async setProfissao(data) {
        return axios.post(`${url}/${prefix}/`, data);
    },
    
    async updateProfissao(codProfissao, data) {
        return axios.put(`${url}/${prefix}/${codProfissao}`, data);
    },

    async deleteProfissao(codProfissao) {
        return axios.delete(`${url}/${prefix}/${codProfissao}`);
    },

};

export default profissaoService;
