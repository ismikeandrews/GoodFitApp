import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

class Formacao extends React.Component {

    state = {
        escolaridade: require('../../assets/images/icons/requisitos/escolaridade.png'),
        alfabetizacao: require('../../assets/images/icons/requisitos/alfabetizacao.png')
    }

    render() {
        return (    
            <View style={ styles.box }>
                <Image style={ styles.image } source={this.props.tipo ? this.state.escolaridade : this.state.alfabetizacao} />
                <View style={ styles.desc }>
                    <Text style={[ styles.text, styles.title ]}>{this.props.title}</Text>
                    <Text style={[ styles.text, styles.value ]}>{this.props.value}</Text>
                </View>
            </View>
        )
    }
}

export {Formacao}