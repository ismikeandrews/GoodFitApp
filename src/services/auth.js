import AsyncStorage from '@react-native-community/async-storage';

const authService = {
    async saveData(data){
        try {
            let stringData = JSON.stringify(data);
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
    }
};

export default authService;