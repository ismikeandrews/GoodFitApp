import { StyleSheet } from 'react-native';
// import Constants from 'expo-constants'

import color from './colors'
// import font from '../../assets/utils/fonts'

export default StyleSheet.create({
    container: {
        backgroundColor: color.white,
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 150,
    },
    title: {
        color: color.gray,
        fontSize: 25,
    },
    subtitle: {
        color: color.gray,
        fontSize: 14,
        marginBottom: 10,
    },
    label: {
        color: color.gray,
        fontSize: 18,
        marginBottom: 5,
        marginTop: 15,
    },
    input: {
        backgroundColor: 'transparent',
        borderColor: color.gray,
        borderBottomWidth: 1,
        color: color.gray,
        fontSize: 18,
        height: 40,
    },
    contentBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn: {
        borderRadius: 30,
    },
    btnText: {
        paddingVertical: 10,
        textAlign: 'center',
    }
})