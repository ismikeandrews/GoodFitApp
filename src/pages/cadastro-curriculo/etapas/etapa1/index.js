import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Etapa1VideoSvg, Etapa1TextoSvg } from '../../../../assets';
import { Variables } from '../../../../shared';
import styles from './styles';

export default Etapa1 = () => {
    const [tabs, setTabs] = useState(true);
    const [descricaoCurriculo, setDescricaoCurriculo] = useState('');

    return (
        <View style={ styles.content }>
            <Text style={[ Variables.title, styles.title ]}>Sobre mim</Text>
            <Text style={ Variables.subtitle }>Fale um pouco sobre você através de um vídeo ou por escrito</Text>
    
            <View style={ styles.tabs }>
                <TouchableOpacity style={ styles.tabsItem } onPress={() => setTabs(true)}>
                    <Etapa1VideoSvg style={ styles.tabsImg }/>
                </TouchableOpacity>
                <View style={ styles.bar } />
                <TouchableOpacity style={ styles.tabsItem } onPress={() => setTabs(false)}>
                    <Etapa1TextoSvg style={ styles.tabsImg }/>
                </TouchableOpacity>
            </View>
    
            <View style={ styles.desc }>
                {tabs === true ?
                    <TextInput style={ styles.textarea } placeholder={ 'Vídeo sobre você' } onChangeText={text => onChangeText(text)} />
                    :
                    <TextInput style={ styles.textarea } placeholder={ 'Escreva uma breve descrição sobre você' } value={descricaoCurriculo} onChangeText={text => setDescricaoCurriculo(text)} />
                }
            </View>
        </View>
    ) 
}