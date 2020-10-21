import { StyleSheet } from 'react-native'

import color from '../variables/colors'

export default StyleSheet.create({
    box: {
        borderColor: color.gray,
        borderRadius: 15,
        borderWidth: 3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    image: {
        height: 50,
        marginRight: 20,
        width: 50,
    },
    text: {
        color: '#a2a2a2',
        fontSize: 18,
    },
    title: {
        color: color.gray,
        fontWeight: '700'
    },
})