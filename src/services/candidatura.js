import axios from 'axios';
import url from './enviroment';
const prefix = 'candidatura';

const candidaturaService = {
    async setCandidatura(data){
        return await axios.post(`${url}/${prefix}/`, data)
    },

    async getCandidaturasByCodCandidato(codCandidato){
        const { data } = await axios.get(`${url}/${prefix}/list/${codCandidato}`)
        return data
    },

    async getCandidatura(codCandidatura){
        const { data } = await axios.get(`${url}/${prefix}/${codCandidatura}`)
        return data
    },

    async cancelCandidatura(codCandidatura){
        return await axios.delete(`${url}/${prefix}/${codCandidatura}`)
    }
}

export default candidaturaService;