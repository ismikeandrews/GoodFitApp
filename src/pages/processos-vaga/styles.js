import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 80,
        marginHorizontal: 20,
    },
    logo: {
        alignItems: 'center',
    },
    logoImg: {
        height: 120,
        marginBottom: 30,
        maxWidth: 170,
    },
    text: {
        color: '#6b6b6b',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    title: {
        color: color.pink,
        fontWeight: '700',
        marginTop: 15,
        textAlign: 'left',
    },
    nome: {
        color: color.pink,
        fontSize: 22,
        fontWeight: '700',
    },
    cargo: {
        color: color.orange,
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 20,
    },
    item: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginVertical: 5,
    },
    icon: {
        height: 25,
        marginRight: 10,
        width: 25,
    },
    iconX: {
        marginLeft: 10,
    },
    list: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    btn: {
        alignItems: 'center',
        borderColor: color.dark_red,
        borderRadius: 30,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 130,
        marginTop: 30,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    btnText: {
        color: color.dark_red,
        fontSize: 22,
        fontWeight: 'bold',
    },
    load: {
        minHeight: '100%',
    },
})