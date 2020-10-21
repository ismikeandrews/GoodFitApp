import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { Variables } from '../../../../shared'
import styles from './styles'

class Etapa2 extends React.Component {
    
    state = {
        active: false,
        school: 'Escolaridade',
    }

    render() {
        return (
            <View style={ styles.content }>
                <Text style={ Variables.title }>Requisitos</Text>
                <Text style={ Variables.subtitle }>Formações básicas em...</Text>
    
                <TouchableOpacity style={ styles.select }
                onPress={() => {this.state.active === false ? this.setState({ active: true }) : this.setState({ active: false })}}>
                    <View style={ styles.selectItem }>
                            <Image style={ styles.image } source={require('../../../../assets/images/ijc.png')} />
                            <Text style={ styles.label }>{this.state.school}</Text>
                    </View>
                </TouchableOpacity>
                {this.state.active === true ?
                    <View style={ styles.list }>
                        <View style={ styles.listContent }>
                            <TouchableOpacity style={ styles.item } onPress={() => { this.setState({ school: 'Ensino Médio' }), this.setState({ active: false })}}>
                                <Text style={ styles.itemText }>Ensino Médio</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.item } onPress={() => { this.setState({ school: 'Ensino Superior Incompleto' }), this.setState({ active: false })}}>
                                <Text style={ styles.itemText }>Ensino Superior Incompleto</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={ styles.item } onPress={() => { this.setState({ school: 'Ensino Superior Completo' }), this.setState({ active: false })}}>
                                <Text style={ styles.itemText }>Ensino Superior Completo</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    null
                }
            </View>
        )
    }
}

export {Etapa2}