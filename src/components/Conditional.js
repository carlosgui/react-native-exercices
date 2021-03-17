import React from 'react'
import { Text, View } from 'react-native'

export default ({ num = 0}) => {

    return (
        <View>
            <Text>O Valor é :</Text>
            <Text>{num % 2 === 0 ? 'Par' : 'Impar'}</Text>
        </View>
    )
}