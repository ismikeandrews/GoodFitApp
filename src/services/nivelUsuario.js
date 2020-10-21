import axios from 'axios';

import url from './enviroment'
const prefix = "nivel-usuario"

const nivelUsuarioService = {

        async getNivelUsuarioList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getNivelUsuarioById(id){
                return await axios.get(`${url}/${prefix}/${id}`)
        },

        async createNivelUsuario(data){
                return await axios.post(`${url}/${prefix}`, data)
        },

        async updateNivelUsuario(id, data){
                return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteNivelUsuario(id){
                return await axios.delete(`${url}/${prefix}/${id}`)
        }
}



export default nivelUsuarioService;