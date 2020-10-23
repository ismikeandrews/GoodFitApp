import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Etapa1, Etapa2, Etapa3 } from './etapas';
import { Stepper, Variables } from '../../shared/';
import { usuarioValidation, candidatoValidation, enderecoValidation } from '../../validations'
import { usuarioService, candidatoService, enderecoService } from '../../services'
import styles from './styles';

class Cadastro extends Component{

    constructor(props){
        super(props);
        this.state = {
            page: 0,
            total: 3,
            email: '',
            loginUsuario: '',
            codNivelUsuario: 2,
            password: '',
            confirmPassword: '',
            dataNascimentoCandidato: {timestamp: '', display: '', isoString: ''},
            nomeCandidato: '',
            cpfCandidato: '',
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
    };

    callbackFunctionE1 = (childData) => {
        this.setState({
            email: childData.email,
            dataNascimentoCandidato: childData.dateObj, 
            nomeCandidato: childData.nomeCandidato
        });
    };

    callbackFunctionE2 = (childData) => {
        this.setState({
            loginUsuario: childData.loginUsuario,
            password: childData.password, 
            confirmPassword: childData.confirmPassword,
            cpfCandidato: childData.cpfCandidato
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
        });
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
                cpfCandidato={this.state.cpfCandidato}
                password={this.state.password}
                loginUsuario={this.state.loginUsuario}
                confirmPassword={this.state.confirmPassword}/>
            );
        };
        if (this.state.page === 2) {
            return (
                <Etapa3
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
    };

    handleSubmit = async () => { 
        let usuarioObj = {
            loginUsuario: this.state.loginUsuario,
            email: this.state.email,
            password: this.state.password,
            codNivelUsuario: this.state.codNivelUsuario,
            confirm: this.state.confirmPassword
        };
        let canditadoObj = {
            nomeCandidato: this.state.nomeCandidato,
            cpfCandidato: this.state.cpfCandidato,
            imagemCpfCandidato: '',
            dataNascimentoCandidato: this.state.dataNascimentoCandidato
        };
        let enderecoObj = {
            cepEndereco: this.state.cepEndereco,
            logradouroEndereco: this.state.logradouroEndereco,
            numeroEndereco: this.state.numeroEndereco,
            complementoEndereco: this.state.complementoEndereco,
            bairroEndereco: this.state.bairroEndereco,
            zonaEndereco: this.state.zonaEndereco,
            cidadeEndereco: this.state.cidadeEndereco,
            estadoEndereco: this.state.estadoEndereco
        };

        const validatedUsuarioObj = await usuarioValidation.validate(usuarioObj);
        const validatedCandidatoObj = candidatoValidation.validate(canditadoObj);
        const validatedEnderecoObj = enderecoValidation.validate(enderecoObj);

        if(validatedUsuarioObj.isValid && validatedCandidatoObj.isValid && validatedEnderecoObj.isValid){
            let enderecoData = {
                cepEndereco: validatedEnderecoObj.cepEndereco.value,
                logradouroEndereco: validatedEnderecoObj.logradouroEndereco.value,
                numeroEndereco: validatedEnderecoObj.numeroEndereco.value,
                complementoEndereco: validatedEnderecoObj.complementoEndereco.value,
                bairroEndereco: validatedEnderecoObj.bairroEndereco.value,
                zonaEndereco: validatedEnderecoObj.zonaEndereco.value,
                cidadeEndereco: validatedEnderecoObj.cidadeEndereco.value,
                estadoEndereco: validatedEnderecoObj.estadoEndereco.value
            }
            const codEndereco = await enderecoService.createEndereco(enderecoData);

            let usuarioData = {
                loginUsuario: validatedUsuarioObj.loginUsuario.value,
                email: validatedUsuarioObj.email.value,
                password: validatedUsuarioObj.password.value,
                codNivelUsuario: this.state.codNivelUsuario,
                codEndereco: codEndereco.data
            };
            const codUsuario = await usuarioService.createUsuario(usuarioData)

            let candidatoData = {
                nomeCandidato: validatedCandidatoObj.nomeCandidato.value,
                cpfCandidato: validatedCandidatoObj.cpfCandidato.value,
                dataNascimentoCandidato: validatedCandidatoObj.dataNascimentoCandidato.value,
                codUsuario: codUsuario.data
            }
            const candidatoResponse = await candidatoService.createCandidato(candidatoData);
            console.log(candidatoResponse.data)

        }else{
            //completar mostrar os erros <------
            console.log("Not all fields are valid");
        }
    }

    render(){
        return(
            <View style={ Variables.container }>
                <ScrollView>

                    {this.currentPage()}

                    <Stepper style={ styles.stepper } page={this.state.page} total={this.state.total}/>
                    
                    <View style={[ Variables.contentBtn, styles.contentBtn ]}>

                        {this.state.page + 1 === this.state.total ?
                            <TouchableOpacity style={[ Variables.btn, styles.btn, styles.btnCadastrar ]} onPress={() => this.handleSubmit()}>
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