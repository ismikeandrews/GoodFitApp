import axios from 'axios';
import url from './enviroment';

const prefix = 'adicional';

const adicionalService = {
    
    async getAdicionalList() {
        return axios.get(`${url}/${prefix}/`);
    },

    async getAdicionalById(codAdicional) {
        return axios.get(`${url}/${prefix}/${codAdicional}`);
    },

    async setExperienciaProfissional(data) {
        return axios.post(`${url}/${prefix}/`, data);
    },
    
    async updateExperienciaProfissional(codExperiencia, data) {
        return axios.put(`${url}/${prefix}/${codExperiencia}`, data);
    },

    async deleteExperienciaProfissional(codCurriculo) {
        return axios.delete(`${url}/${prefix}/${codCurriculo}`);
    },

};

export default adicionalService;


