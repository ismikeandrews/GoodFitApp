import axios from 'axios';

import url from './enviroment'
const prefix = 'candidato';

const candidatoService = {
    
    async createCandidato(data){
        return await axios.post(`${url}/${prefix}/`, data)
    }

}

export default candidatoService;