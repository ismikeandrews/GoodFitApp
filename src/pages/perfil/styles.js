import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors'

export default StyleSheet.create({
    container: {
        paddingHorizontal: 30,
    },
    imgBorder: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    img: {
        borderColor: color.pink_light,
        borderRadius: 100,
        borderWidth: 3,
        height: 140,
        width: 140,
    },
    name: {
        color: color.pink,
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 30,
    },
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },
    itemTitle: {
        color: '#555',
        fontSize: 20,
    },
    text: {
        color: color.dark_grey,
        fontSize: 20,
    },
    line: {
        borderColor: color.gray,
        borderTopWidth: 1,
        marginVertical: 30,
    },
    topic: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    topicTitle: {
        color: color.dark_red,
        fontSize: 22,
        marginBottom: 10,
    },
    contentBtn: {
        justifyContent: 'center',
    },
    btn: {
        backgroundColor: 'transparent',
        borderColor: color.dark_red,
        borderWidth: 1,
        marginBottom: 10,
        width: '35%',
    },
    btnText: {
        color: color.dark_red,
        fontWeight: '700',
    },
    logout: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    btnSair: {
        backgroundColor: color.orange,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 5,
        width: '45%',
    },
    btnSairText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginLeft: 10,
    },
})