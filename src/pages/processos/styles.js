import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
    },
    content: {
        alignItems: 'center',
        flex: 1,
        paddingBottom: 60,
        paddingHorizontal: 20,
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
    dot: {
        fontSize: 27,
        marginRight: 5,
        marginTop: -11,
    },
    dotAprovado: {
        color: '#63DE9A',
    },
    dotAndamento: {
        color: '#f7d07a',
    },
    dotReprovado: {
        color: '#F06A47',
    },
    status: {
        color: '#A2A2A2',
        fontSize: 14,
        fontWeight: '700',
    },
    vagaEmpty: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingVertical: 70,
    },
    message: {
        color: color.dark_red,
        marginVertical: 20,
        paddingHorizontal: 15,
    },
    btn: {
        backgroundColor: color.dark_red,
        marginVertical: 10,
        paddingHorizontal: 17,
    },
    btnText: {
        color: color.white,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
})