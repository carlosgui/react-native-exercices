import React from 'react'
import { Button, View } from 'react-native'

export default props => {
    return (
        <View>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} />
        </View>
    )

}