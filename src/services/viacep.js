import axios from 'axios';

const viaService = {
        async getLocationData(cep){
                return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        }
}

export default viaService;