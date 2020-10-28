import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { categoriaService } from '../../../../services'
import { Variables, Checkbox } from '../../../../shared'
import styles from './styles'

class Etapa5 extends Component {
    state = {
        categorias: [],
        selected: []
    }

    componentDidMount(){
        this.fetchData()
    }

    
    async fetchData(){
        const categoriaRes = await categoriaService.getCategoriaList();
        this.setState({categorias: categoriaRes.data});
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
                <Text style={ Variables.title }>Objetivo Profissional</Text>
                <Text style={ Variables.subtitle }>Eu quero trabalhar com...</Text>
                
                <View style={ styles.content }>
                    {this.state.categorias.map(categoria => (
                        <Checkbox tipo="profissao" style={ styles.item } key={categoria.codCategoria} name={categoria.nomeCategoria} img={categoria.imagemCategoria} cod={categoria.codCategoria} parentCallback={this.callbackFunction}/>
                    ))}
                </View>
            </View>
        )
    }
}

export {Etapa5}