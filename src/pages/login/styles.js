import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors'
// import font from '../../assets/utils/fonts'

export default StyleSheet.create({
    logo: {
        alignItems: 'center',
    },
    logoImg: {
        height: 72,
        marginTop: 30,
        marginBottom: 45,
        width: 100,
    },
    label: {
        marginTop: 20,
    },
    btnLink: {
        alignItems: 'flex-end',
        marginBottom: 25,
        marginRight: 3,
        marginTop: 10,
    },
    link: {
        color: color.pink,
        textAlign: 'right',
    },
    btns: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        width: '48%',
    },
    btnEntrar: {
        backgroundColor: color.pink_light,
        marginBottom: 35,
    },
    btnCadastro: {
        borderColor: color.dark_red,
    },
    btnCodigo: {
        borderColor: color.orange,
    },
    btnTextEntrar: {
        color: color.white,
    },
    btnTextCadastro: {
        color: color.dark_red,
    },
    btnTextCodigo: {
        color: color.orange,
    },
})