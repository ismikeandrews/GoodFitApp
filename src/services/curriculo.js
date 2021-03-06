import axios from 'axios';
import url from './enviroment';
import { authService } from './'

const prefix = 'curriculo';

const curriculoService = {
    
    async getCurriculoByCandidatoId(codCandidato) {
        return axios.get(`${url.development}/${prefix}/candidato/${codCandidato}`);
    },

    async getCurriculo(codCurriculo){
        const { data } = await axios.get(`${url.development}/${prefix}/${codCurriculo}`)
        return data
    },

    async setCurriculo(data){
        return await axios.post(`${url.development}/${prefix}/`, data)
    },

    async setAdicionalCurriculo(data){
        return await axios.post(`${url.development}/${prefix}/adicional`, data)
    },

    async setCargoCurriculo(data){
        return await axios.post(`${url.development}/${prefix}/cargo`, data)
    },

    async setAdicionalCurriculoList(data){
        return await axios.post(`${url.development}/${prefix}/adicionais`, data)
    },

    async setCargoCurriculoList(data){
        return await axios.post(`${url.development}/${prefix}/cargos`, data)
    },

    async getAdicionaisByCurriculo(codCurriculo){
        return await axios.get(`${url.development}/${prefix}/${codCurriculo}/adicional`)
    },

    async getCargosByCurriculo(codCurriculo){
        return await axios.get(`${url.development}/${prefix}/${codCurriculo}/cargo`)
    },

    async setExperiences(expData){
        const { token } = await authService.getData()
        const { data } = await axios.post(`${url.development}/${prefix}/experiencia-profissional?token=${token}`, expData)
        return data
    },

    async getAdicionalListByCurriculoId(codCurriculo){
        const { data } = await axios.get(`${url.development}/${prefix}/${codCurriculo}/adicional`)
        return data
    },

    async getCargoListCurriculoId(codCurriculo){
        const { data } = await axios.get(`${url.development}/${prefix}/${codCurriculo}/cargo`)
        return data
    }
};

export default curriculoService;
