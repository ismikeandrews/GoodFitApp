import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors'

export default StyleSheet.create({
    contentBtn: {
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
    },
    btn: {
        width: '48%',
        marginVertical: 30,
        marginHorizontal: 5,
    },
    btnText: {
        color: color.white,
    },
    btnCadastrar: {
        backgroundColor: color.orange,
    },
    btnNext: {
        backgroundColor: color.pink_light,
    },
    btnPrev: {
        backgroundColor: color.dark_red,
    },
})