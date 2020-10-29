import AsyncStorage from '@react-native-community/async-storage';
import { candidatoService, curriculoService,  } from './';

const authService = {

    async saveData(data){
        try {
            const candidatoRes = await candidatoService.getCandidatoByUserId(data.codUsuario)
            const curriculoRes = await curriculoService.getCurriculoByCandidatoId(candidatoRes.data.codCandidato)
            const sessionData = {
                codUsuario: data.codUsuario,
                codCandidato: candidatoRes.data.codCandidato,
                codEndereco: data.codEndereco,
                token: data.token,
                curriculo: {
                    isSet: curriculoRes.data ? true : false,
                    codCurriculo: curriculoRes.data ? curriculoRes.data.codCurriculo : null
                }
            }
            let stringData = JSON.stringify(sessionData);
            await AsyncStorage.setItem('data', stringData);
        } catch (error) {
            console.log(error)
        }
    },

    async updateCurriculo(codCurriculo){
        let data = await AsyncStorage.getItem('data')
        data = JSON.parse(data)
        data.curriculo.codCurriculo = codCurriculo;
        data.curriculo.isSet = true
        data = JSON.stringify(data);
        await AsyncStorage.setItem('data', data);
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