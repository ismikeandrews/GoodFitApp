import axios from 'axios';
import url from './enviroment';

const prefix = 'profissao';

const profissaoService = {
    
    async getProfissaoList() {
        return axios.get(`${url.development}/${prefix}/`);
    },

    async getProfissaoByProfissaoId(codProfissao) {
        const { data } = await axios.get(`${url.development}/${prefix}/${codProfissao}`);
        return data
    },

    async setProfissao(data) {
        return axios.post(`${url.development}/${prefix}/`, data);
    },
    
    async updateProfissao(codProfissao, data) {
        return axios.put(`${url.development}/${prefix}/${codProfissao}`, data);
    },

    async deleteProfissao(codProfissao) {
        return axios.delete(`${url.development}/${prefix}/${codProfissao}`);
    },

};

export default profissaoService;
