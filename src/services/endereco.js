import axios from 'axios';

import url from './enviroment';
const prefix = 'endereco';

const enderecoService = {

    async createEndereco(data){
        return await axios.post(`${url}/${prefix}/store`, data);
    }
    
};

export default enderecoService;