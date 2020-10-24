import axios from 'axios';

import url from './enviroment';
const prefix = 'candidato';

const candidatoService = {
    
    async createCandidato(data){
        return await axios.post(`${url}/${prefix}/`, data);
    },

    async getCandidatoByUserId(codUsuario){
        return await axios.get(`${url}/${prefix}/usuario/${codUsuario}`);
    },

    async getCandidatoById(codCandidato){
        return await axios.get(`${url}/${prefix}/${codCandidato}`);
    }
}

export default candidatoService;