import React, { useState, useContext, useEffect} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { AuthContext } from '../../config/authContext';
import { candidatoService, usuarioService, enderecoService, authService } from '../../services';
import { Variables } from '../../shared';
import styles from './styles';

export default Perfil = () => {
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
    const { signOut } = useContext(AuthContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const session = await authService.getData();
        try {
            const usuario = await usuarioService.getUsuarioById(session.codUsuario);
            const candidato = await candidatoService.getCandidatoById(session.codCandidato);
            const endereco = await enderecoService.getEnderecoById(session.codEndereco);

            setName(candidato.data.nomeCandidato);
            setEmail(usuario.data.email);
            setBirthDay(moment.unix(candidato.data.dataNascimentoCandidato).format('DD/MM/YYYY'));
            setPostalcode(endereco.data.cepEndereco);
            setAddress(endereco.data.logradouroEndereco);
            setCity(endereco.data.cidadeEndereco);
            setNeighbor(endereco.data.bairroEndereco);
            setState(endereco.data.estadoEndereco);
            setZone(endereco.data.zonaEndereco);
            setNumber(endereco.data.numeroEndereco);
            setComplement(endereco.data.complementoEndereco);
        } catch (error) {
            console.log(error);
        };
    };

    const handleSignOut = async () => {
        await authService.clearData();
        signOut();
    };

    return(
        <View style={ Variables.container }>
            <SafeAreaView>
                <ScrollView style={ styles.scrollView }>
                    <View style={ styles.imgBorder }>
                        <Image style={ styles.img } source={require('../../assets/images/ijc.png')} />
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
                    <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                        onPress={() => handleSignOut()}>
                            <Text style={[ Variables.btnText, styles.btnText ]}>Sair</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
};