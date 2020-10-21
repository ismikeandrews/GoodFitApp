import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors'


export default StyleSheet.create({
    imgBorder: {
        alignItems: 'center',
    },
    img: {
        height: 72,
        marginTop: 30,
        marginBottom: 45,
        width: 100,
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
        marginBottom: 10,
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
})