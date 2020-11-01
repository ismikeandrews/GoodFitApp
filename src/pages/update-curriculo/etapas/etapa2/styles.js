import { StyleSheet } from 'react-native';
import color from '../../../../shared/variables/colors'
// import Constants from 'expo-constants'

export default StyleSheet.create({
    content: {
        marginVertical: 30,
        width: '95%'
    },
    select: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    selectItem: {
        alignItems: 'center',
        borderColor: color.gray,
        borderRadius: 15,
        borderWidth: 2,
        paddingBottom: 10,
        paddingTop: 20,
        width: 270,
    },
    image: {
        height: 60,
        marginBottom: 20,
        paddingBottom: 10,
        width: 60,
    },
    label: {
        color: color.gray,
        fontSize: 18,
        textAlign: 'center',
    },
    list: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContent: {
        borderColor: color.gray,
        borderRadius: 15,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTopWidth: 0,
        borderWidth: 2,
        marginTop: -7,
        paddingVertical: 10,
        paddingLeft: 10,
        width: 270,
    },
    itemText: {
        fontSize: 15,
        marginVertical: 7,
    },
})