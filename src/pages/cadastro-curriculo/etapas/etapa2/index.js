import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { Variables } from '../../../../shared'
import styles from './styles'

export default Etapa2 = () => {
    const [active, setActive] = useState(false);
    const [school, setSchool] = useState('');

    return (
        <View style={ styles.content }>
            <Text style={ Variables.title }>Requisitos</Text>
            <Text style={ Variables.subtitle }>Formações básicas em...</Text>

            <TouchableOpacity style={ styles.select }
            onPress={() => {active === false ? setActive(true) : setActive(false)}}>
                <View style={ styles.selectItem }>
                        <Image style={ styles.image } source={require('../../../../assets/images/ijc.png')} />
                        <Text style={ styles.label }>{school}</Text>
                </View>
            </TouchableOpacity>
            {active === true &&
                <View style={ styles.list }>
                    <View style={ styles.listContent }>
                        <TouchableOpacity style={ styles.item } onPress={() => { setSchool('Ensino Médio'), setActive(false)}}>
                            <Text style={ styles.itemText }>Ensino Médio</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.item } onPress={() => { setSchool('Ensino Superior Incompleto'), setActive(false)}}>
                            <Text style={ styles.itemText }>Ensino Superior Incompleto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.item } onPress={() => { setSchool('Ensino Superior Completo'), setActive(false)}}>
                            <Text style={ styles.itemText }>Ensino Superior Completo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    );
};