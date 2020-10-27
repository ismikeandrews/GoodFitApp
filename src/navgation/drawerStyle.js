import { StyleSheet } from 'react-native';
import color from '../shared/variables/colors'

export default StyleSheet.create({
    sideBar: {
        backgroundColor: color.pink_light,
        minHeight: '100%',
        width: 93,
    },
    menu: {
        backgroundColor: 'transparent',
    },
    btn: {
        marginLeft: 30,
        marginTop: 70,
    },
    item: {
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 30,
        marginVertical: 30,
        paddingVertical: 20,
        width: 350,
        zIndex: 10,
    },
    itemFirst: {
        marginTop: 110,
    },
    itemIcon: {
        paddingLeft: 50,
        paddingRight: 10,
    },
    itemText: {
        color: color.orange,
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    itemTextOdd: {
        color: color.dark_red,
    },
})