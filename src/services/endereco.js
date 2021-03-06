import axios from 'axios';

import url from './enviroment';
const prefix = 'endereco';

const enderecoService = {

    async createEndereco(dataObj){
        const { data } = await axios.post(`${url.development}/${prefix}/store`, dataObj);
        return data
    },

    async getEnderecoById(codEndereco){
        const { data } = await axios.get(`${url.development}/${prefix}/${codEndereco}`)
        return data
    }
    
};

export default enderecoService;