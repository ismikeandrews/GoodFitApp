import axios from 'axios';

import url from './enviroment'
const prefix = "nivel-usuario"

const nivelUsuarioService = {

        async getNivelUsuarioList(){
                return await axios.get(`${url.development}/${prefix}`);
        },
        
        async getNivelUsuarioById(id){
                return await axios.get(`${url.development}/${prefix}/${id}`)
        },

        async createNivelUsuario(data){
                return await axios.post(`${url.development}/${prefix}`, data)
        },

        async updateNivelUsuario(id, data){
                return await axios.put(`${url.development}/${prefix}/${id}`, data)
        },

        async deleteNivelUsuario(id){
                return await axios.delete(`${url.development}/${prefix}/${id}`)
        }
}



export default nivelUsuarioService;