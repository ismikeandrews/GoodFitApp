import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 300,
        marginTop: 40,
        paddingTop: 40,
        paddingBottom: 50,
        marginHorizontal: 20,
    },
    contentBtn: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginBottom: 120,
    },
    btn: {
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