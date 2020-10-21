import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Etapa1, Etapa2, Etapa3 } from './etapas';
import { Stepper, Variables } from '../../shared/';

import styles from './styles';

class Cadastro extends Component{

    constructor(props){
        super(props);
        this.state = {
            page: 0,
            total: 3,
            email: '',
            dataNascimentoCandidato: '',
            nomeCandidato: '',
            loginUsuario: '',
            password: '',
            confirmPassword: '',
            cepEndereco: '',
            logradouroEndereco: '',
            numeroEndereco: '',
            complementoEndereco: '',
            bairroEndereco: '',
            zonaEndereco: '',
            cidadeEndereco: '',
            estadoEndereco: ''
        },
        this.etapa1 = React.createRef();
        this.etapa2 = React.createRef();
        this.etapa3 = React.createRef();
    };

    callbackFunctionE1 = (childData) => {
        this.setState({
            email: childData.email,
            dataNascimentoCandidato: childData.dataNascimentoCandidato, 
            nomeCandidato: childData.nomeCandidato
        });
    };

    callbackFunctionE2 = (childData) => {
        this.setState({
            loginUsuario: childData.loginUsuario,
            password: childData.password, 
            confirmPassword: childData.confirmPassword
        });
    };

    callbackFunctionE3 = (childData) => {
        this.setState({
            cepEndereco: childData.cepEndereco,
            logradouroEndereco: childData.logradouroEndereco, 
            numeroEndereco: childData.numeroEndereco,
            complementoEndereco: childData.complementoEndereco,
            bairroEndereco: childData.bairroEndereco,
            zonaEndereco: childData.zonaEndereco,
            cidadeEndereco: childData.cidadeEndereco,
            estadoEndereco: childData.estadoEndereco,
        })
    };

    currentPage = () => {
        if (this.state.page === 0) {
            return (
                <Etapa1 
                ref={this.etapa1}
                parentCallback={this.callbackFunctionE1} 
                email={this.state.email} 
                nomeCandidato={this.state.nomeCandidato} 
                dataNascimentoCandidato={this.state.dataNascimentoCandidato}/>
            );
        };
        if (this.state.page === 1) {
            return (
                <Etapa2
                ref={this.etapa2}
                parentCallback={this.callbackFunctionE2} 
                password={this.state.password}
                loginUsuario={this.state.loginUsuario}
                confirmPassword={this.state.confirmPassword}/>
            );
        };
        if (this.state.page === 2) {
            return (
                <Etapa3
                ref={this.etapa3}
                parentCallback={this.callbackFunctionE3}
                cepEndereco={this.state.cepEndereco}
                logradouroEndereco={this.state.logradouroEndereco}
                numeroEndereco={this.state.numeroEndereco}
                complementoEndereco={this.state.complementoEndereco}
                bairroEndereco={this.state.bairroEndereco}
                zonaEndereco={this.state.zonaEndereco}
                cidadeEndereco={this.state.cidadeEndereco}
                estadoEndereco={this.state.estadoEndereco}/>
            );
        };
    };

    handleNextPage = () => {
        if (this.state.page === 0) {
            this.etapa1.current.sendDataToParent();
            this.setState({page: this.state.page + 1});
        };
        if (this.state.page === 1) {
            this.etapa2.current.sendDataToParent();
            this.setState({page: this.state.page + 1});
        };
        if (this.state.page === 2) {
            console.log("teste")
            this.etapa3.current.sendDataToParent();

        };
    };

    // handleSubmit = () => {

    // }

    render(){
        return(
            <View style={ Variables.container }>
                <ScrollView>

                    {this.currentPage()}

                    <Stepper style={ styles.stepper } page={this.state.page} total={this.state.total}/>
                    
                    <View style={[ Variables.contentBtn, styles.contentBtn ]}>

                        {this.state.page + 1 === this.state.total ?
                            <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnCadastrar ]} onPress={() => this.handleNextPage()}>
                                <Text style={[ Variables.btnText, styles.btnText ]}>Cadastrar</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnNext ]} onPress={() => this.handleNextPage()}>
                                <Text style={[ Variables.btnText, styles.btnText ]}>Próximo</Text>
                            </TouchableOpacity>
                        }
                        {this.state.page > 0 &&
                            <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnPrev ]} onPress={() => this.setState({page: this.state.page - 1})}>
                                <Text style={[ Variables.btnText, styles.btnText ]}>Voltar</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </ScrollView>
            </View>
        );
    };
};

export { Cadastro };