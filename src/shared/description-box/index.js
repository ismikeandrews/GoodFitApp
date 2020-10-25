import React from 'react'
import { View, TouchableOpacity, TextInput, Image } from 'react-native'
import { Etapa1VideoSvg, Etapa1TextoSvg } from '../../assets'
import styles from './styles'

class DescriptionBox extends React.Component {
    
    state = {
        tabs: true
    }

    render(){
        return (
            <View style={ styles.content }>
                <View style={ styles.tabs }>
                    <TouchableOpacity style={ styles.tabsItem } onPress={() => this.setState({ tabs: true })}>
                        <Etapa1VideoSvg/>
                    </TouchableOpacity>
                    <View style={ styles.bar } />
                    <TouchableOpacity style={ styles.tabsItem } onPress={() => this.setState({ tabs: false })}>
                        <Etapa1TextoSvg/>
                    </TouchableOpacity>
                </View>
        
                <View style={ styles.desc }>
                    {this.state.tabs === true ?
                        <TextInput style={ styles.textarea } placeholder={ 'Envie um vídeo explicativo' } onChangeText={text => onChangeText(text)} />
                        :
                        <TextInput style={ styles.textarea } placeholder={ this.props.placeholder } onChangeText={text => onChangeText(text)} />
                    }

                    {/* accept={.mp4, .avi, .mkv, .ogg, .ogm, .mpg, .mpeg, .vob, .bvcd, .bsvcd} */}

                </View>
            </View>
        )        
    }    
}

export {DescriptionBox}