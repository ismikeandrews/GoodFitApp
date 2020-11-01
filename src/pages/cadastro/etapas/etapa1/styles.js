import { StyleSheet } from 'react-native';
import colors from '../../../../shared/variables/colors'
export default StyleSheet.create({
    content: {
        marginBottom: 40
    },
    perfil: {
        alignItems: 'center',
    },
    perfilImg: {
        height: 100,
        marginVertical: 30,
        width: 100,
        borderRadius: 50,
        borderColor: colors.pink,
        borderWidth: 3
    },
})