import axios from 'axios';
import url from './enviroment';
const prefix = 'empresa';

export default empresaService = {
    async getEmpresa(codEmpresa){
        const { data } = await axios.get(`${url.development}/${prefix}/${codEmpresa}`);
        return data
    }
}