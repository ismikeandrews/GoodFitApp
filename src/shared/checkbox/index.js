import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

class Checkbox extends React.Component {

    state = {
        active: false,
    }

    render() {
        return (
            // <View style={ styles.stepper }>
            //     {checkTotal()}
            // </View>
    
            <TouchableOpacity style={ styles.checkbox }
            onPress={() => {this.state.active === false ? this.setState({ active: true }) : this.setState({ active: false })}}>
                <View style={this.state.active === false ? styles.item : [styles.item, styles.itemActive]}>
                    <Image style={ styles.image } source={require('../../assets/images/ijc.png')} />
                    {/* <Image style={ styles.image } source={ this.props.img } /> */}
                    <Text style={ styles.label }>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export {Checkbox}