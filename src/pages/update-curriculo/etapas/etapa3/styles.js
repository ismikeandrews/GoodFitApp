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
    label: {
        color: color.gray,
        fontSize: 18,
        textAlign: 'center',
    },
    accordion: {
        borderColor: color.dark_red,
        borderBottomWidth: 2,
        marginTop: 20,
    },
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    delete: {
        marginLeft: 15,
    },
    deleteIcon: {
        height: 70,
        marginTop: 10,
        width: 70,
    },
    accordiontIcon: {
        paddingRight: 30,
        width: '10%',
    },
    accordionTitle: {
        color: color.dark_red,
        fontSize: 20,
        paddingLeft: 10,
        paddingVertical: 10,
        textAlign: 'left',
        width: '90%',
    },
    newAccordion: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 20,
    },
    newTitle: {
        marginBottom: 10,
    },
    xp: {
        display: 'none'
    },
    xpActive: {
        display: 'flex',
        marginTop: -3,
        paddingHorizontal: 20,
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
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 18,
        marginVertical: 5,
    },
    itemText: {
        fontSize: 15,
        marginVertical: 5,
        width: '90%',
    },
    form: {
        marginTop: 10,
    },
    formItem: {
        marginBottom: 15
    },
    calendar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    calendarIcon: {
        width: '5%',
    },
    calendarInput: {
        width: '90%',
    },
    checkboxContent: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkbox: {
        borderColor: color.dark_red,
        borderRadius: 5,
        borderWidth: 2,
        color: color.dark_red,
        height: 26,
        width: 26,
    },
    checkboxText: {
        color: color.dark_grey,
        fontSize: 16,
        marginLeft: 10,
    },
    present: {
        color: color.dark_grey,
        fontSize: 16,
        marginBottom: 20,
        marginTop: 10,
    },
})