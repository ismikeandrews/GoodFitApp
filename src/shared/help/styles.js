import { StyleSheet } from 'react-native';
import color from '../variables/colors'

export default StyleSheet.create({
    help: {
        bottom: 40,
        position: 'absolute',
        right: 25,
    },
    btn: {
        backgroundColor: color.orange,
        borderColor: color.pink_light,
        borderWidth: 3,
        borderRadius: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3, },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    text: {
        color: '#fff',
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})