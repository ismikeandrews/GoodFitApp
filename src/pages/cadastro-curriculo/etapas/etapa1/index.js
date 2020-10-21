import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Variables } from '../../../../shared'
import styles from './styles'

class Etapa1 extends React.Component {
    
    state = {
        tabs: true
    }

    render(){
        return (
            <View style={ styles.content }>
                <Text style={[ Variables.title, styles.title ]}>Sobre mim</Text>
                <Text style={ Variables.subtitle }>Fale um pouco sobre você através de um vídeo ou por escrito</Text>
        
                <View style={ styles.tabs }>
                    <TouchableOpacity style={ styles.tabsItem } onPress={() => this.setState({ tabs: true })}>
                        <Image style={ styles.tabsImg } source={require('../../../../assets/images/ijc.png')} />
                    </TouchableOpacity>
                    <View style={ styles.bar } />
                    <TouchableOpacity style={ styles.tabsItem } onPress={() => this.setState({ tabs: false })}>
                        <Image style={ styles.tabsImg } source={require('../../../../assets/images/ijc.png')} />
                    </TouchableOpacity>
                </View>
        
                <View style={ styles.desc }>
                    {this.state.tabs === true ?
                        <TextInput style={ styles.textarea } placeholder={ 'Vídeo sobre você' } onChangeText={text => onChangeText(text)} />
                        :
                        <TextInput style={ styles.textarea } placeholder={ 'Escreva uma breve descrição sobre você' } onChangeText={text => onChangeText(text)} />
                    }

                    {/* accept={.mp4, .avi, .mkv, .ogg, .ogm, .mpg, .mpeg, .vob, .bvcd, .bsvcd} */}

                </View>
            </View>
        )        
    }    
}

export {Etapa1}