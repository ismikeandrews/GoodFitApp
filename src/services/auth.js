import AsyncStorage from '@react-native-community/async-storage';
import { candidatoService } from './';

const authService = {

    async saveData(data){
        try {
            const candidatoRes = await candidatoService.getCandidatoByUserId(data.codUsuario)
            const sessionData = {
                codUsuario: data.codUsuario,
                codCandidato: candidatoRes.data.codCandidato,
                token: data.token
            }
            let stringData = JSON.stringify(sessionData);
            await AsyncStorage.setItem('data', stringData);
        } catch (error) {
            console.log(error)
        }
    },

    async getData(){
        try {
            let data = await AsyncStorage.getItem('data')
            return data != null ? JSON.parse(data) : null;
        } catch (error) {
            console.log(error)
        }
    },

    async clearData(){
        try {
            await AsyncStorage.clear()
        } catch (error) {
            console.log(error)
        }
    }
};

export default authService;