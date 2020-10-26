import { StyleSheet } from 'react-native'

import color from '../variables/colors'
// import font from '../../assets/utils/fonts'

export default StyleSheet.create({
    stepper: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    step: {
        borderColor: color.gray,
        borderRadius: 150,
        borderWidth: 2,
        height: 30,
        textAlign: 'center',
        width: 30,
    },
    stepActive: {
        borderColor: color.orange,
        color: color.orange,
    },
    number: {
        color: color.gray,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    numberActive: {
        borderColor: color.orange,
        color: color.orange,
    },
    bar: {
        backgroundColor: color.gray,
        height: 2,
        width: 40,
    },
    barActive: {
        backgroundColor: color.orange,
    }
})