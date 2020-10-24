import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { Etapa1, Etapa2, Etapa3, Etapa4, Etapa5 } from './etapas'
import { Stepper } from '../../shared'

import { Variables } from '../../shared'
import styles from './styles'

class CadastroCurriculo extends Component{

    state = {page: 0, total: 5}

    currentPage(){
        if (this.state.page === 0) {
            return (
                <Etapa1/>
            )
        }
        if (this.state.page === 1) {
            return (
                <Etapa2/>
            )
        }
        if (this.state.page === 2) {
            return (
                <Etapa3/>
            )
        }
        if (this.state.page === 3) {
            return (
                <Etapa4/>
            )
        }
        if (this.state.page === 4) {
            return (
                <Etapa5/>
            )
        }
    }


    render(){
        return(
            <View style={ styles.container }>
                <Stepper page={this.state.page} total={this.state.total}/>

                {this.currentPage()}

                <View style={[ Variables.contentBtn, styles.contentBtn ]}>
                    {this.state.page + 1 === this.state.total ?
                        <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnCadastrar ]}>
                            <Text style={[ Variables.btnText, styles.btnText ]}>Cadastrar</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnNext ]} onPress={() => this.setState({page: this.state.page + 1})}>
                            <Text style={[ Variables.btnText, styles.btnText ]}>Próximo</Text>
                        </TouchableOpacity>
                    }
                    {this.state.page > 0 &&
                        <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnPrev ]} onPress={() => this.setState({page: this.state.page - 1})}>
                            <Text style={[ Variables.btnText, styles.btnText ]}>Voltar</Text>
                        </TouchableOpacity>
                    }
                </View>
                
            </View>
        )
    }
}

export {CadastroCurriculo};