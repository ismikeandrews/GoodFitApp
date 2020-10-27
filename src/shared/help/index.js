import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function Help() {
    return(
        <View style={ styles.help }>
            <TouchableOpacity style={ styles.btn }
            onPress={() => console.log('clicked')}>
                <Text style={ styles.text }>?</Text>
            </TouchableOpacity>
        </View>
    )
}