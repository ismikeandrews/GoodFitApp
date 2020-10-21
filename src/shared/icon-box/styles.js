import { StyleSheet } from 'react-native'

import color from '../variables/colors'

export default StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    item: {
        alignItems: 'center',
        borderColor: color.gray,
        borderRadius: 15,
        borderWidth: 3,
        paddingBottom: 10,
        paddingTop: 20,
        paddingHorizontal: 10,
        width: 145,
    },
    itemActive: {
        backgroundColor: '#ec377c40',
        borderColor: color.pink_light,
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
    }
})