import axios from 'axios';
import url from './enviroment';
import { authService } from './'
const prefix = 'experiencia-profissional';

const experienciaProfissionalService = {
    
    async getExperienciaByCurriculoId(codCurriculo) {
        const { token } = await authService.getData()
        const { data } = await axios.get(`${url}/${prefix}/${codCurriculo}?token=${token}`);
        return data
    },

    async setExperienciaProfissional(data) {
        return axios.post(`${url}/${prefix}/`, data);
    },
    
    async updateExperienciaProfissional(codExperiencia, data) {
        return axios.put(`${url}/${prefix}/${codExperiencia}`, data);
    }

};

export default experienciaProfissionalService;
