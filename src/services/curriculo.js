import axios from 'axios';
import url from './enviroment';

const prefix = 'curriculo';

const curriculoService = {
    
    async getCurriculoByCandidatoId(codCandidato) {
        return axios.get(`${url}/${prefix}/candidato/${codCandidato}`);
    },

    async setCurriculo(data){
        return await axios.post(`${url}/${prefix}/`, data)
    },

    async setAdicionalCurriculo(data){
        return await axios.post(`${url}/${prefix}/adicional`, data)
    },

    async setCargoCurriculo(data){
        return await axios.post(`${url}/${prefix}/cargo`, data)
    }

};

export default curriculoService;

// $router->get('/adicional/{codAdicionalCurriculo}', 'AdicionalCurriculoController@show');
// $router->post('/adicional', 'AdicionalCurriculoController@store');
// $router->post('/adicionais', 'AdicionalCurriculoController@criaAdicionais');
// $router->put('{codCurriculo}/adicionais/', 'AdicionalCurriculoController@editaAdicionais');
// $router->delete('/adicional/{codAdicionalCurriculo}', 'AdicionalCurriculoController@destroy');
// $router->get('/{codCurriculo}/adicional', 'AdicionalController@getEmCurriculo');

// $router->get('{codCurriculo}/cargo', 'CategoriaController@getPorCurriculo');
// $router->get('/cargo/{codCargoCurriculo}', 'CargoCurriculoController@show');
// $router->post('/cargo', 'CargoCurriculoController@store');
// $router->post('/cargos', 'CargoCurriculoController@adicionaCargos');
// $router->put('{codCurriculo}/cargos/', 'CargoCurriculoController@editaCargos');
// $router->delete('/cargo/{codCargoCurriculo}', 'CargoCurriculoController@destroy');