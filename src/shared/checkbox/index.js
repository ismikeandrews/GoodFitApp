import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { IconBox } from '../icon-box'
export default function Checkbox(props){
    const [active, setActive] = useState(props.active);

    const handleChanges = () => {
        active ? setActive(false) : setActive(true)
        props.parentCallback({active, cod: props.cod})
    }
   
    return (
        <TouchableOpacity
        onPress={() => handleChanges()}>
            <IconBox tipo={props.tipo} active={active} name={props.name} img={props.img}></IconBox>
        </TouchableOpacity>
    );
};

