import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { candidatoService, usuarioService, enderecoService, authService } from '../../services';
import { Variables } from '../../shared';
import styles from './styles';

class Perfil extends Component{

    state = {
        name: '',
        email: '',
        birthDay: '',
        postalcode: '',
        address: '',
        city: '',
        neighbor: '',
        state: '',
        zone: '',
        number: '',
        complement: ''
    };
    
    componentDidMount(){
        this.fetchData();
    }

    async fetchData(){
        const session = await authService.getData();
        try {
            const usuario = await usuarioService.getUsuarioById(session.codUsuario);
            const candidato = await candidatoService.getCandidatoById(session.codCandidato);
            const endereco = await enderecoService.getEnderecoById(usuario.data.codEndereco);
            this.setState({
                name: candidato.data.nomeCandidato, 
                email: usuario.data.email, 
                birthDay: moment.unix(candidato.data.dataNascimentoCandidato).format('DD/MM/YYYY'),
                postalcode: endereco.data.cepEndereco,
                address: endereco.data.logradouroEndereco,
                city: endereco.data.cidadeEndereco,
                neighbor: endereco.data.bairroEndereco,
                state: endereco.data.estadoEndereco,
                zone: endereco.data.zonaEndereco,
                number: endereco.data.numeroEndereco,
                complement: endereco.data.complementoEndereco
            })
        } catch (error) {
            console.log(error)   
        }
    }

    render(){
        return(
            <View style={ Variables.container }>
                <SafeAreaView>
                    <ScrollView style={ styles.scrollView }>
                        <View style={ styles.imgBorder }>
                            <Image style={ styles.img } source={require('../../assets/images/ijc.png')} />
                        </View>

                        <Text style={ styles.name }>{this.state.name}</Text>
                    
                        <View style={[ styles.item, styles.topic ]}>
                            <Text style={ styles.topicTitle }>Pessoal</Text>
                
                            <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                            onPress={() => console.log('click')}>
                                <Text style={[ Variables.btnText, styles.btnText ]}>Editar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>E-mail: </Text>
                            <Text style={ styles.text }>{this.state.email}</Text>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Telefone: </Text>
                            <Text style={ styles.text }>(11) 1234-5678</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Data de nascimento: </Text>
                            <Text style={ styles.text }>{this.state.birthDay}</Text>
                        </View>
                        
                        <View style={ styles.line }></View>

                        <View style={[ styles.item, styles.topic ]}>
                            <Text style={ styles.topicTitle }>Endereço</Text>
            
                            <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                            onPress={() => console.log('click')}>
                                <Text style={[ Variables.btnText, styles.btnText ]}>Editar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>CEP: </Text>
                            <Text style={ styles.text }>{this.state.postalcode}</Text>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Logradouro: </Text>
                            <Text style={ styles.text }>{this.state.address}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Cidade: </Text>
                            <Text style={ styles.text }>{this.state.city}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Bairro: </Text>
                            <Text style={ styles.text }>{this.state.neighbor}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Estado: </Text>
                            <Text style={ styles.text }>{this.state.state}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Zona: </Text>
                            <Text style={ styles.text }>{this.state.zone}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Número: </Text>
                            <Text style={ styles.text }>{this.state.number}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Complemento: </Text>
                            <Text style={ styles.text }>{this.state.complement}</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

export { Perfil }