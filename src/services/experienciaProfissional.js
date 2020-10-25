import axios from 'axios';
import url from './enviroment';

const prefix = 'experiencia-profissional';

const experienciaProfissionalService = {
    
    async getExperienciaByCurriculoId(codCurriculo) {
        return axios.get(`${url}/${prefix}/${codCurriculo}`);
    },

    async setExperienciaProfissional(data) {
        return axios.post(`${url}/${prefix}/`, data);
    },
    
    async updateExperienciaProfissional(codExperiencia, data) {
        return axios.put(`${url}/${prefix}/${codExperiencia}`, data);
    }

};

export default experienciaProfissionalService;
