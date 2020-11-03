import axios from 'axios';
import url from './enviroment';
const prefix = 'candidatura';

const candidaturaService = {
    async setCandidatura(data){
        return await axios.post(`${url.development}/${prefix}/`, data)
    },

    async getCandidaturasByCodCandidato(codCandidato){
        const { data } = await axios.get(`${url.development}/${prefix}/list/${codCandidato}`)
        return data
    },

    async getCandidatura(codCandidatura){
        const { data } = await axios.get(`${url.development}/${prefix}/${codCandidatura}`)
        return data
    },

    async cancelCandidatura(codCandidatura){
        return await axios.delete(`${url.development}/${prefix}/${codCandidatura}`)
    }
}

export default candidaturaService;