import { StyleSheet } from 'react-native';
import color from '../variables/colors'

export default StyleSheet.create({
    content: {
        marginTop: 10
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        paddingBottom: 50,
        paddingHorizontal: 30,
        position: 'relative',
    },
    title: {
        marginTop: 20,
    },
    tabs: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderColor: color.gray,
        marginBottom: 30,
    },
    tabsItem: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
    },
    tabsImg: {
        height: 30,
        padding: 10,
        width: 35,
    },
    bar: {
        backgroundColor: color.gray,
        height: 45,
        marginTop: 15,
        width: 1,
    },
    desc: {
        marginBottom: 30
    },
    textAreaContainer: {
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
        height: 170,
    },
    textArea: {
        color: color.gray,
        justifyContent: 'flex-start',
    },
    btn: {
        backgroundColor: color.pink_light,
        width: '48%',
    },
    btnText: {
        color: color.white,
    },
})