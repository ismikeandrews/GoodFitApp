import React from 'react'
import { View, Text } from 'react-native'

import { Variables, Checkbox } from '../../../../shared'
import styles from './styles'
import { adicionalService  } from '../../../../services'

class Etapa4 extends React.Component {

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

        this.setState({selected: arr}, () => {
            this.props.parentCallback(this.state.selected)
        })
    }
    
    render() {
          return (
            <View style={ styles.container }>
                <Text style={ Variables.title }>Habilidades</Text>
                <Text style={ Variables.subtitle }>Eu sou bom com...</Text>
                
                <View style={ styles.content }>
                    {this.state.adicionais.map(adicional => (
                        <Checkbox tipo="habilidade" style={ styles.item } key={adicional.codAdicional} name={adicional.nomeAdicional} img={adicional.imagemAdicional} cod={adicional.codAdicional} parentCallback={this.callbackFunction}/>
                    ))}
                </View>
            </View>
        )
    }  
}

export {Etapa4}