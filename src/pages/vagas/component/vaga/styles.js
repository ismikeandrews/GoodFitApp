import { StyleSheet } from 'react-native';
import color from '../../../../shared/variables/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    logo: {
        alignItems: 'center',
    },
    logoImg: {
        height: 270,
        width: '100%',
        right: 6
    },
    buttons: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btn: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#e6e6e6',
        borderRadius: 10,
        borderWidth: 1,
        elevation: 7,
        marginBottom: 20,
        marginTop: -70,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3, },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        width: '50%',
        zIndex: 3,
    },
    content: {
        backgroundColor: '#fff',
        borderRadius: 50,
        marginTop: -10,
        paddingVertical: 40,
    },
    text: {
        color: '#6b6b6b',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    cargo: {
        marginBottom: 20,
        color: color.pink,
        fontSize: 22,
        fontWeight: '700',
    },
    nome: {
        color: color.orange,
        fontWeight: '700',
    },
    item: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 20,
    },
    title: {
        color: color.pink,
        fontWeight: '700',
        marginHorizontal: 20,
        marginTop: 15,
        textAlign: 'left',
    },
    list: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    icon: {
        height: 25,
        marginRight: 10,
        width: 25,
    },
    iconX: {
        marginLeft: 10,
    },
})