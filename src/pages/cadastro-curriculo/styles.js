import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: 140,
        paddingTop: 70,
        paddingHorizontal: 20,
    },
    contentBtn: {
        flexDirection: 'row-reverse'
    },
    btn: {
        marginHorizontal: 5,
        width: '48%',
    },
    btnText: {
        color: color.white,
    },
    btnPrev: {
        backgroundColor: color.dark_red,
    },
    btnNext: {
        backgroundColor: color.pink_light,
    },
    btnCadastrar: {
        backgroundColor: color.orange,
    },
})