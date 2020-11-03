import axios from 'axios';
import url from './enviroment';

const prefix = 'vaga';

const vagaService = {
    async match(codCandidato, codCurriculo){
        return await axios.get(`${url.development}/${prefix}/match/${codCandidato}/${codCurriculo}`)
    },

    async getVaga(codVaga){
        const { data } = await axios.get(`${url.development}/${prefix}/show/${codVaga}`)
        return data
    },

    async getRequisitosByCodVaga(codVaga){
        return await axios.get(`${url.development}/${prefix}/requisitos/${codVaga}`)
    }
}

export default vagaService;