import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

class IconBox extends React.Component {

    render() {
        return (    
            <View style={ styles.box }>
                <View style={this.props.active === true ? [styles.item, styles.itemActive] : styles.item}>
                    <Image style={ styles.image } source={`../../assets/images/${this.props.img}`} />
                    <Text style={ styles.label }>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

export {IconBox}