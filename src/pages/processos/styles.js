import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors'

export default StyleSheet.create({
    content: {
        height: '80%',
        marginBottom: 100,
        paddingTop: 50,
    },
    contentVagas: {
        alignItems: 'center',
        paddingBottom: 60,
        paddingHorizontal: 10,
    },
    text: {
        color: '#6b6b6b',
        fontSize: 18,
        textAlign: 'center',
    },
    title: {
        color: '#6b6b6b',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        paddingHorizontal: 20,
        textAlign: 'left',
    },
    subtitle: {
        color: '#A2A2A2',
        marginBottom: 20,
        paddingHorizontal: 20,
        textAlign: 'left',
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 15,
        marginTop: 5,
    },
    tabItem: {
        alignItems: 'center',
        borderBottomWidth: 4,
        width: '25%',
    },
    tabAll: {
        borderColor: color.pink_light,
    },
    tabAprovado: {
        borderColor: '#63DE9A',
    },
    tabAndamento: {
        borderColor: '#f7d07a',
    },
    tabReprovado: {
        borderColor: '#F06A47',
    },
    icon: {
        height: 30,
        marginBottom: 10,
        width: 30,
    },
    vagas: {
        paddingHorizontal: 20,
    },
    vagaItem: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection: 'row',
        marginVertical: 10,
        paddingBottom: 10,
        paddingTop: 15,
        paddingHorizontal: 20,
        maxWidth: '100%',
    },
    desc: {
        alignItems: 'flex-start',
        marginLeft: 20,
    },
    logo: {
        height: 50,
        maxWidth: 50,
    },
    cargo: {
        color: '#6b6b6b',
        fontSize: 17,
        fontWeight: '700',
    },
    nome: {
        color: color.pink_light,
        fontSize: 15,
        fontWeight: '700',
        marginVertical: 3,
    },
    statusBox: {
        flexDirection: 'row',
        marginTop: 5,
    },
    status: {
        color: '#A2A2A2',
        fontSize: 14,
        fontWeight: '700',
    },
    statusIcon: {
        marginRight: 5,
    },
    vagaEmpty: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: 70,
    },
    message: {
        color: color.orange,
        marginVertical: 20,
        paddingHorizontal: 15,
    },
    btn: {
        backgroundColor: color.orange,
        marginVertical: 10,
        paddingHorizontal: 17,
    },
    btnText: {
        color: color.white,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    load: {
        minHeight: '65%',
    },
})