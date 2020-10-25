import axios from 'axios';
import url from './enviroment';

const prefix = 'adicional';

const adicionalService = {
    
    async getAdicionalList() {
        return axios.get(`${url}/${prefix}/`);
    },

    async getProfissaoByProfissaoId(codAdicional) {
        return axios.get(`${url}/${prefix}/${codAdicional}`);
    },

    async setExperienciaProfissional(data) {
        return axios.post(`${url}/${prefix}/`, data);
    },
    
    async updateExperienciaProfissional(codExperiencia, data) {
        return axios.put(`${url}/${prefix}/${codExperiencia}`, data);
    },

    async deleteExperienciaProfissional(codCurriculo) {
        return axios.delete(`${url}/${prefix}/${codCurriculo}`);
    },

};

export default adicionalService;


// import axios from 'axios';
// import url from './enviroment';

// const prefix = 'adicional';

// const adicionalService = {
//     async getAdicionalList(){
//         return await axios.get(`${url}/${prefix}/`)
//     }
// }

// export default adicionalService;


// $router->group(['prefix' => 'adicional'], function () use ($router) {
//     $router->get('/', 'AdicionalController@index');
//     $router->get('/{codAdicional}', 'AdicionalController@show');
//     $router->get('/tipo/{codTipoAdicional}', 'AdicionalController@getPorTipo');
//     $router->get('/tipo/nome/{nomeTipoAdicional}', 'AdicionalController@getPorNomeTipo');
//     $router->post('/', 'AdicionalController@store');
//     $router->put('/{codAdicional}', 'AdicionalController@update');
//     $router->delete('/{codAdicional}', 'AdicionalController@destroy');
// });