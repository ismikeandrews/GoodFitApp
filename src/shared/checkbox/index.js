import React, { forwardRef, useState, useImperativeHandle } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default function Checkbox(props){
    const [active, setActive] = useState(false);

    const handleChanges = () => {
        active ? setActive(false) : setActive(true)
        props.parentCallback({active, cod: props.cod})
    }
   
    return (
        <TouchableOpacity style={ styles.checkbox }
        onPress={() => handleChanges()}>
            <View style={active ? [styles.item, styles.itemActive] : styles.item }>
                <Image style={ styles.image } source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',}}/>
                <Text style={ styles.label }>{props.name}</Text>
            </View>
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