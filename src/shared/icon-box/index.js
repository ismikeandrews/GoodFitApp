import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import getImageForHabilidade from '../../helper/getImageForHabilidades';
import getImageForProfissao from '../../helper/getImageForProfissao'
class IconBox extends React.Component {
    render() {
        return (    
            <View style={ styles.box }>
                <View style={this.props.active === true ? [styles.item, styles.itemActive] : styles.item}>
                    <Image style={ styles.image } source={this.props.tipo === 'habilidade' ? getImageForHabilidade(this.props.img) : getImageForProfissao(this.props.img)}/>
                    <Text style={ styles.label }>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

export {IconBox}