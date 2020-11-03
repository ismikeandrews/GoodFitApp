import React, { useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { AuthContext } from '../../config/authContext';
import { candidatoService, usuarioService, enderecoService, authService } from '../../services';
import { Variables, Menu } from '../../shared';
import styles from './styles';

export default Perfil = (props) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [birthDay, setBirthDay] = useState();
    const [postalcode, setPostalcode] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [neighbor, setNeighbor] = useState();
    const [state, setState] = useState();
    const [zone, setZone] = useState();
    const [number, setNumber] = useState();
    const [complement, setComplement] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const session = await authService.getData();
        try {
            const { email } = await usuarioService.getUsuarioById(session.codUsuario);
            const candidato = await candidatoService.getCandidatoById(session.codCandidato);
            const { 
                cepEndereco, 
                logradouroEndereco, 
                cidadeEndereco, 
                bairroEndereco, 
                estadoEndereco, 
                zonaEndereco, 
                numeroEndereco, 
                complementoEndereco
            } = await enderecoService.getEnderecoById(session.codEndereco);

            setName(candidato.data.nomeCandidato);
            setEmail(email);
            setBirthDay(moment.unix(candidato.data.dataNascimentoCandidato).format('DD/MM/YYYY'));
            setPostalcode(cepEndereco);
            setAddress(logradouroEndereco);
            setCity(cidadeEndereco);
            setNeighbor(bairroEndereco);
            setState(estadoEndereco);
            setZone(zonaEndereco);
            setNumber(numeroEndereco);
            setComplement(complementoEndereco);
        } catch (error) {
            console.log(error);
        };
    };

    return(
        <View>
            <Menu {...props}/>
            <View style={ styles.container }>
                <SafeAreaView>
                    <ScrollView style={ styles.scrollView }>
                        <View style={ styles.imgBorder }>
                            <Image style={ styles.img } source={{uri: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'}} />
                        </View>

                        <Text style={ styles.name }>{name}</Text>
                    
                        <View style={[ styles.item, styles.topic ]}>
                            <Text style={ styles.topicTitle }>Pessoal</Text>
                
                            <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                            onPress={() => console.log('click')}>
                                <Text style={[ Variables.btnText, styles.btnText ]}>Editar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>E-mail: </Text>
                            <Text style={ styles.text }>{email}</Text>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Telefone: </Text>
                            <Text style={ styles.text }>(11) 1234-5678</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Data de nascimento: </Text>
                            <Text style={ styles.text }>{birthDay}</Text>
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
                            <Text style={ styles.text }>{postalcode}</Text>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Logradouro: </Text>
                            <Text style={ styles.text }>{address}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Cidade: </Text>
                            <Text style={ styles.text }>{city}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Bairro: </Text>
                            <Text style={ styles.text }>{neighbor}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Estado: </Text>
                            <Text style={ styles.text }>{state}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Zona: </Text>
                            <Text style={ styles.text }>{zone}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Número: </Text>
                            <Text style={ styles.text }>{number}</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Complemento: </Text>
                            <Text style={ styles.text }>{complement}</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
};