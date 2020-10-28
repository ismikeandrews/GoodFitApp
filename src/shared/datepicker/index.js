import React, {useState, useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


export default Datepicker = (props) => {
    const [dateObj, setDateObj] = useState({timestamp: moment().unix(), isoString: moment().toISOString(), display: moment()});

    const setDates = (event, data) => {
        let parseUnix = moment(data).unix()
        let parseDisplay = moment(data).format("DD/MM/YYYY");
        setDateObj({timestamp: parseUnix, isoString: data, display: parseDisplay})
        const stringObj = JSON.stringify({timestamp: parseUnix, isoString: data, display: parseDisplay})
        props.parentCallback(stringObj);
    }

    return (
        <DateTimePicker
        mode="date"
        value={dateObj.isoString}
        display="default"
        onChange={(event, data) => setDates(event, data)}/>
    )
}