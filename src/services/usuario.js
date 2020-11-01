import axios from 'axios';

import url from './enviroment'
const prefix = "usuario"

const usuarioService = {

        async login(data){
                return await axios.post(`${url}/login`, data)
        },

        async getUsuarioByUsername(username){
                let data = {
                        loginUsuario: username
                }
                return await axios.post(`${url}/${prefix}/find`, data)
        },

        async getUsuarioByEmail(email){
                let data = {
                        email: email
                }
                return await axios.post(`${url}/${prefix}/find`, data)
        },

        async getUsuarioList(){
                return await axios.get(`${url}/${prefix}`);
        },
        
        async getUsuarioById(id){
                const { data } = await axios.get(`${url}/${prefix}/${id}`)
                return data
        },

        async createUsuario(dataObj){
                const { data } = await axios.post(`${url}/${prefix}/`, dataObj)
                return data
        },

        async updateUsuario(id, data){
                return await axios.put(`${url}/${prefix}/${id}`, data)
        },

        async deleteUsuario(id){
                return await axios.delete(`${url}/${prefix}/${id}`)
        }
}



export default usuarioService;