import React, {Component} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Etapa1, Etapa2, Etapa3, Etapa4, Etapa5 } from './etapas';
import { Stepper, Help } from '../../shared';
import { Variables, Menu } from '../../shared';
import styles from './styles';

class CadastroCurriculo extends Component{

    state = {
        page: 0, 
        total: 5,
        adicionais: [],
        descricaoCurriculo: ''
    };

    callbackFunctionE1 = (childData) => {
        this.setState({descricaoCurriculo: childData});
    }

    callbackFunctionE2 = (childData) => {
        this.setState({adicionais: childData}, () => console.log(this.state.adicionais));
    }

    callbackFunctionE3(childData){
        console.log(childData)
        // this.setState({})
    }

    callbackFunctionE4(childData){
        console.log(childData)
        // this.setState({})
    }

    callbackFunctionE5(childData){
        console.log(childData)
        // this.setState({})
    }

    currentPage(){
        if (this.state.page === 0) {
            return (
                <Etapa1 
                parentCallback={this.callbackFunctionE1}/>
            );
        };
        if (this.state.page === 1) {
            return (
                <Etapa2
                parentCallback={this.callbackFunctionE2}/>
            );
        };
        if (this.state.page === 2) {
            return (
                <Etapa3
                parentCallback={this.callbackFunctionE3}/>
            );
        };
        if (this.state.page === 3) {
            return (
                <Etapa4
                parentCallback={this.callbackFunctionE4}/>
            );
        };
        if (this.state.page === 4) {
            return (
                <Etapa5
                parentCallback={this.callbackFunctionE5}/>
            );
        };
    }


    render(){
        return(
            <View>
                <Menu {...this.props}/>
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
                <Help/>
            </View>
        );
    };
}

export {CadastroCurriculo};