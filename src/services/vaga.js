import axios from 'axios';
import url from './enviroment';

const prefix = 'vaga';

const vagaService = {
    async match(codCandidato, codCurriculo){
        return await axios.get(`${url}/${prefix}/match/${codCandidato}/${codCurriculo}`)
    }
}

export default vagaService;