import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { TouchableOpacity } from 'react-native'
import { IconBox } from '../icon-box'

export default function Checkbox(props){
    const [active, setActive] = useState(false);

    const handleChanges = () => {
        active ? setActive(false) : setActive(true)
        props.parentCallback({active, cod: props.cod})
    }
   
    return (
        <TouchableOpacity
        onPress={() => handleChanges()}>
            <IconBox active={active} name={props.name} img={props.img}></IconBox>
        </TouchableOpacity>
    );
};

// habilidadeObj: {
//     comunicativo: require('../../assets/images/icons/habilidades/comunicativo.png'),
//     camera: require('../../assets/images/icons/habilidades/camera.png'),
//     baby: require('../../assets/images/icons/habilidades/baby.png'),
//     criativo: require('../../assets/images/icons/habilidades/criativo.png'),
//     escrita: require('../../assets/images/icons/habilidades/escrita.png'),
//     html: require('../../assets/images/icons/habilidades/html.png'),
//     instrumento: require('../../assets/images/icons/habilidades/instrumento.png'),
//     inteligente: require('../../assets/images/icons/habilidades/inteligente.png'),
//     matematica: require('../../assets/images/icons/habilidades/matematica.png'),
//     organização: require('../../assets/images/icons/habilidades/organizacao.png'),
//     pintura: require('../../assets/images/icons/habilidades/pintura.png'),
//     relacionamento: require('../../assets/images/icons/habilidades/relacionamento.png')
// }