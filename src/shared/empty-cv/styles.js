import { StyleSheet } from 'react-native';
import color from '../../shared/variables/colors';

export default StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginBottom: 20,
    },
    text: {
        color: color.dark_red,
        fontSize: 18,
        marginBottom: 20,
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    btn: {
        backgroundColor: color.dark_red,
        paddingHorizontal: 17,
    },
    btnText: {
        color: color.white,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
});