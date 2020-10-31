import axios from 'axios';
import url from './enviroment';

const prefix = 'vaga';

const vagaService = {
    async match(codCandidato, codCurriculo){
        return await axios.get(`${url}/${prefix}/match/${codCandidato}/${codCurriculo}`)
    },

    async getVaga(codVaga){
        const { data } = await axios.get(`${url}/${prefix}/show/${codVaga}`)
        return data
    },

    async getRequisitosByCodVaga(codVaga){
        return await axios.get(`${url}/${prefix}/requisitos/${codVaga}`)
    }
}

export default vagaService;