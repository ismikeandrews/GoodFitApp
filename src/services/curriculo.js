import axios from 'axios';
import url from './enviroment';

const prefix = 'curriculo';

const curriculoService = {
    
    async getCurriculoByCandidatoId(codCandidato) {
        return axios.get(`${url}/${prefix}/candidato/${codCandidato}`);
    }

};

export default curriculoService;