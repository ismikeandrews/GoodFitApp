import axios from 'axios';
import { authService } from './'
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
        const { token } = await authService.getData()
        return await axios.get(`${url}/${prefix}/${codCandidato}?token=${token}`);
    }
}

export default candidatoService;