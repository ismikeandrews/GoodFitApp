import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { adicionalService } from '../../../../services'
import { Variables, Checkbox } from '../../../../shared'
import styles from './styles'

class Etapa5 extends Component {
    state = {
        adicionais: [],
        selected: []
    }

    componentDidMount(){
        this.fetchData()
    }

    
    async fetchData(){
        const adicionalRes = await adicionalService.getAdicionalList();
        this.setState({adicionais: adicionalRes.data.slice(0, 11)});
    }

    callbackFunction = childData => {
        let arr = this.state.selected
        if (childData.active === false) {
            arr.push(childData)
        }
        if (childData.active === true) {
            arr = arr.filter(element => {
                if (element.cod != childData.cod) {
                    return element 
                }
            })
        }
        this.setState({selected: arr})
    }
    
    render() {
          return (
            <View style={ styles.content }>
                <Text style={ Variables.title }>Habilidades</Text>
                <Text style={ Variables.subtitle }>Eu sou bom com...</Text>
                <ScrollView>
                    <View style={ styles.container }>
                        {this.state.adicionais.map(adicional => (
                            <Checkbox key={adicional.codAdicional} name={adicional.nomeAdicional} img={adicional.imagemAdicional} cod={adicional.codAdicional} parentCallback={this.callbackFunction}/>
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export {Etapa5}