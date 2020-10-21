import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

class Formacao extends React.Component {

    render() {
        return (    
            <View style={ styles.box }>
                <Image style={ styles.image } source={`../../assets/images/${this.props.img}`} />
                <View style={ styles.desc }>
                    <Text style={[ styles.text, styles.title ]}>{this.props.title}</Text>
                    <Text style={[ styles.text, styles.value ]}>{this.props.value}</Text>
                </View>
            </View>
        )
    }
}

export {Formacao}