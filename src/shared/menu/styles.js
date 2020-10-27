import { StyleSheet } from 'react-native'

import color from '../variables/colors'

export default StyleSheet.create({
    content: {
        backgroundColor: color.pink_light,
        width: '100%',
    },
    menu: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 15,
        paddingTop: 5,
    },
    btn: {
        marginHorizontal: 12,
    },
    logoImg: {
        height: 45,
        width: 60,
    },
    perfil: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    perfilImg: {
        borderColor: color.dark_red,
        borderRadius: 100,
        borderWidth: 2,
        height: 60,
        width: 60,
    },
})