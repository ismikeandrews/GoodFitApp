import axios from 'axios';
import url from './enviroment';

const prefix = 'adicional';

const adicionalService = {
    
    async getAdicionalList() {
        return axios.get(`${url.development}/${prefix}/`);
    },

    async getAdicionalById(codAdicional) {
        return axios.get(`${url.development}/${prefix}/${codAdicional}`);
    },

    async setExperienciaProfissional(data) {
        return axios.post(`${url.development}/${prefix}/`, data);
    },
    
    async updateExperienciaProfissional(codExperiencia, data) {
        return axios.put(`${url.development}/${prefix}/${codExperiencia}`, data);
    },

    async deleteExperienciaProfissional(codCurriculo) {
        return axios.delete(`${url.development}/${prefix}/${codCurriculo}`);
    },

};

export default adicionalService;


