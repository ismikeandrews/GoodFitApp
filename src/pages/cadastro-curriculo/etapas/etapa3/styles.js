import { StyleSheet } from 'react-native';
import color from '../../../../shared/variables/colors'

export default StyleSheet.create({
    container: {
        marginVertical: 30,
        minHeight: 350,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 100,
    },
    yes: {
        marginTop: 20
    },
    btn: {
        alignItems: 'center',
        borderColor: color.gray,
        borderRadius: 15,
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 10,
        paddingTop: 10,
        width: '48%',
    },
    btnActive: {
        backgroundColor: '#ec377c40',
        borderColor: color.pink_light,
    },
    icon: {
        height: 30,
        marginBottom: 0,
        paddingBottom: 10,
        width: 40,
    },
    label: {
        color: color.gray,
        fontSize: 18,
        textAlign: 'center',
    },
    accordion: {
        borderColor: color.gray,
        borderRadius: 15,
        borderWidth: 1,
        marginTop: 20,
    },
    accordionTitle: {
        color: color.gray,
        fontSize: 18,
        marginLeft: 10,
        paddingVertical: 10,
        textAlign: 'left',
    },
    newTitle: {
        paddingVertical: 5,
        textAlign: 'center',
    },
    xp: {
        display: 'none'
    },
    xpActive: {
        borderColor: color.gray,
        borderRadius: 5,
        borderTopWidth: 0,
        borderWidth: 1,
        display: 'flex',
        marginTop: -3,
        paddingHorizontal: 10,
    },
    form: {
        marginTop: 10,
    },
    formContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    formItem: {
        width: '48%',
    },
    formName: {
        width: '100%',
    },
})