import React, {Component} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'

import { Variables } from '../../shared'
import styles from './styles'

class Perfil extends Component{
    
    render(){
        return(
            <View style={ Variables.container }>
                <SafeAreaView>
                    <ScrollView style={ styles.scrollView }>
                        <View style={ styles.imgBorder }>
                            <Image style={ styles.img } source={require('../../assets/images/ijc.png')} />
                        </View>

                        <Text style={ styles.name }>José Pereira da Silva</Text>
                    
                        <View style={[ styles.item, styles.topic ]}>
                            <Text style={ styles.topicTitle }>Pessoal</Text>
                
                            <TouchableOpacity style={[ Variables.btn, styles.btn ]}
                            onPress={() => console.log('click')}>
                                <Text style={[ Variables.btnText, styles.btnText ]}>Editar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>E-mail: </Text>
                            <Text style={ styles.text }>email@email.com.br</Text>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Telefone: </Text>
                            <Text style={ styles.text }>(11) 1234-5678</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Data de nascimento: </Text>
                            <Text style={ styles.text }>13/10/1995</Text>
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
                            <Text style={ styles.text }>06132013</Text>
                        </View>

                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Logradouro: </Text>
                            <Text style={ styles.text }>Av. Lins de Vasconcelos</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Cidade: </Text>
                            <Text style={ styles.text }>São Paulo</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Bairro: </Text>
                            <Text style={ styles.text }>Aclimação</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Estado: </Text>
                            <Text style={ styles.text }>SP</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Zona: </Text>
                            <Text style={ styles.text }>Sul</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Número: </Text>
                            <Text style={ styles.text }>1306</Text>
                        </View>
                        
                        <View style={ styles.item }>
                            <Text style={ styles.itemTitle }>Complemento: </Text>
                            <Text style={ styles.text }>Apto 01</Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

export { Perfil }