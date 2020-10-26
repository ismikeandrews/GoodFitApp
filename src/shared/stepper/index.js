import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function Stepper(props){
    function checkTotal(){
        let steps = []
        for (let i = 0; i < props.total; i++) {
            steps.push(
                <View style={{flexDirection: 'row', alignItems: 'center'}} key={i}>
                    {i != 0 &&
                        <View style={ props.page >= i ? [styles.bar, styles.barActive] : styles.bar } />
                    }
                    <View key={i} style={ props.page >= i ? [styles.step, styles.stepActive] : styles.step }>
                        <Text style={ props.page >= i ? [styles.number, styles.numberActive] : styles.number } >{i + 1}</Text>
                    </View>

                </View>
            )
        }
        return steps
    }

    return (
        <View style={ styles.stepper }>
            {checkTotal()}
        </View>
    )
}