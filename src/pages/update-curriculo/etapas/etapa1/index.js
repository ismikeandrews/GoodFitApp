import React, { useState } from 'react';
import { View, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Etapa1VideoSvg, Etapa1TextoSvg } from '../../../../assets';
import { Variables } from '../../../../shared';
import styles from './styles';

export default Etapa1 = (props) => {
    const [tabs, setTabs] = useState(true);
    const [descricaoCurriculo, setDescricaoCurriculo] = useState(props.descricaoCurriculo);

    const handleDescricao = text => {
        setDescricaoCurriculo(text)
        props.parentCallback(text)
    }

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
                    <View style={ styles.textAreaContainer } >
                        {/* <TextInput  multiline={true} numberOfLines={7} style={ styles.textarea } placeholder={ 'Vídeo sobre você' } onChangeText={text => onChangeText(text)} /> */}
                    </View>
                    :
                    <View style={ styles.textAreaContainer } >
                        <TextInput multiline={true} numberOfLines={7} style={ styles.textarea } placeholder={ 'Escreva uma breve descrição sobre você' } value={descricaoCurriculo} onChangeText={text => handleDescricao(text)} />
                    </View>
                }
            </View>
        </View>
    ) 
}